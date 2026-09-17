#!/usr/bin/env python3
"""Validate EcosystemWeb JSON files against the canonical JSON Schema.

Single source of truth: ``packages/schema/schema/ecosystem-web.schema.json``
(the same schema the TypeScript zod validator mirrors and the Vitest
round-trip tests cross-check).

Usage:
    python3 scripts/pipeline/validate.py                 # validate data/webs/
    python3 scripts/pipeline/validate.py --webs-dir DIR  # validate another dir
    python3 scripts/pipeline/validate.py FILE [FILE...]  # validate specific web files

Hard-fail rules (exit 1):
    * any JSON Schema violation (this covers: node count > 25, weights
      outside 0-1, edges carrying both/neither of weight/qualitative,
      missing provenance, empty/missing citations, unknown properties, ...)
    * dangling edge references (prey/predator id not in the web's nodes)
    * duplicate node ids
    * non-species nodes whose description lacks an aggregation statement
      (see AGGREGATION_RE below; documented in docs/data-format.md)
    * index.json entries that are malformed or do not match the actual
      web files (id/file name, name, biome, location, provenance, nodeCount)

Warnings (printed, exit code stays 0):
    * isolated nodes (no edges in either direction)
    * trophic-level inversions (predator.trophicLevel < prey.trophicLevel —
      legitimate for e.g. detritivory, so warn only)

A directory without ``index.json`` simply skips the index cross-checks.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

import jsonschema

REPO_ROOT = Path(__file__).resolve().parents[2]
DEFAULT_WEBS_DIR = REPO_ROOT / "data" / "webs"
DEFAULT_SCHEMA_PATH = (
    REPO_ROOT / "packages" / "schema" / "schema" / "ecosystem-web.schema.json"
)

MAX_NODES = 25

BIOMES = {
    "marine",
    "freshwater",
    "terrestrial-forest",
    "grassland",
    "tundra",
    "desert",
    "wetland",
}
PROVENANCES = {"empirical", "composite"}
INDEX_ENTRY_FIELDS = {"id", "name", "biome", "location", "nodeCount", "provenance"}

# Aggregation-statement heuristic (the "salmon rule", docs/data-format.md):
# the description of every node whose kind is not "species" must contain at
# least one of these case-insensitive phrases.
AGGREGATION_RE = re.compile(r"pooled|aggregat|group of|functional group|guild", re.IGNORECASE)
AGGREGATION_RULE = (
    "description must contain an aggregation statement matching /"
    "pooled|aggregat|group of|functional group|guild/i"
)


def load_schema(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def validate_web(data: object, schema: dict, label: str) -> tuple[list[str], list[str]]:
    """Validate one parsed web. Returns (errors, warnings)."""
    errors: list[str] = []
    warnings: list[str] = []

    # --- JSON Schema validation (covers structure, ranges, enums, edge XOR) ---
    validator = jsonschema.Draft202012Validator(schema)
    for err in sorted(validator.iter_errors(data), key=lambda e: list(e.absolute_path)):
        location = "/".join(str(p) for p in err.absolute_path) or "(root)"
        message = err.message
        if len(message) > 160:
            message = message[:157] + "..."
        errors.append(f"schema violation at {location}: {message}")

    # Structural checks below need a minimally well-formed web.
    if not isinstance(data, dict):
        return errors, warnings
    nodes = data.get("nodes")
    edges = data.get("edges")
    if not isinstance(nodes, list) or not isinstance(edges, list):
        return errors, warnings

    # --- Hard fail: curated ceiling (also enforced by schema maxItems) ---
    if len(nodes) > MAX_NODES:
        errors.append(
            f"nodes: {len(nodes)} nodes exceed the curated {MAX_NODES}-node ceiling"
        )

    node_ids: list[str] = []
    trophic_levels: dict[str, float] = {}
    for node in nodes:
        if not isinstance(node, dict):
            continue
        node_id = node.get("id")
        if isinstance(node_id, str):
            if node_id in trophic_levels:
                errors.append(f"node '{node_id}': duplicate node id")
            node_ids.append(node_id)
            level = node.get("trophicLevel")
            if isinstance(level, (int, float)):
                trophic_levels[node_id] = float(level)

        # --- Hard fail: aggregation statement on non-species nodes ---
        if node.get("kind") in ("functional-group", "life-stage-group"):
            description = node.get("description")
            if not isinstance(description, str) or not AGGREGATION_RE.search(description):
                errors.append(
                    f"node '{node_id}' (kind '{node.get('kind')}'): "
                    f"missing aggregation statement — {AGGREGATION_RULE}"
                )

    known_ids = set(node_ids)
    connected_ids: set[str] = set()

    for edge in edges:
        if not isinstance(edge, dict):
            continue
        prey = edge.get("prey")
        predator = edge.get("predator")
        if not isinstance(prey, str) or not isinstance(predator, str):
            continue  # schema validation already reported this

        # --- Hard fail: dangling edge references ---
        for endpoint, ref in (("prey", prey), ("predator", predator)):
            if ref not in known_ids:
                errors.append(
                    f"edge {prey} -> {predator}: dangling reference — "
                    f"{endpoint} id '{ref}' matches no node"
                )
                continue
        connected_ids.update(id for id in (prey, predator) if id in known_ids)

        # --- Warn: trophic-level inversions ---
        prey_level = trophic_levels.get(prey)
        predator_level = trophic_levels.get(predator)
        if prey_level is not None and predator_level is not None:
            if predator_level < prey_level:
                warnings.append(
                    f"edge {prey} -> {predator}: trophic-level inversion "
                    f"(predator level {predator_level} < prey level {prey_level}); "
                    f"legitimate for e.g. detritivory — please confirm intent"
                )

    # --- Warn: isolated nodes ---
    for node_id in node_ids:
        if node_id not in connected_ids:
            warnings.append(f"node '{node_id}' is isolated (no edges in either direction)")

    return [f"{label}: {e}" for e in errors], [f"{label}: {w}" for w in warnings]


def validate_index(index_data: object, webs_by_id: dict[str, dict], webs_dir_label: str) -> list[str]:
    """Structural and cross-file checks for index.json. Returns errors."""
    label = f"{webs_dir_label}/index.json"
    errors: list[str] = []

    if not isinstance(index_data, dict) or not isinstance(index_data.get("webs"), list):
        return [f'{label}: must be an object with a "webs" array']

    seen_ids: set[str] = set()
    for i, entry in enumerate(index_data["webs"]):
        entry_label = f"{label}: entry #{i}"
        if not isinstance(entry, dict):
            errors.append(f"{entry_label}: must be an object")
            continue
        entry_id = entry.get("id", f"#{i}")
        entry_label = f"{label}: entry '{entry_id}'"

        missing = INDEX_ENTRY_FIELDS - entry.keys()
        extra = entry.keys() - INDEX_ENTRY_FIELDS
        if missing:
            errors.append(f"{entry_label}: missing field(s): {', '.join(sorted(missing))}")
        if extra:
            errors.append(f"{entry_label}: unknown field(s): {', '.join(sorted(extra))}")
        if missing or extra:
            continue

        if not isinstance(entry["id"], str):
            errors.append(f"{entry_label}: 'id' must be a string")
            continue
        if entry["id"] in seen_ids:
            errors.append(f"{entry_label}: duplicate id '{entry['id']}'")
        seen_ids.add(entry["id"])
        if entry["biome"] not in BIOMES:
            errors.append(f"{entry_label}: biome '{entry['biome']}' not in {sorted(BIOMES)}")
        if entry["provenance"] not in PROVENANCES:
            errors.append(
                f"{entry_label}: provenance '{entry['provenance']}' not in {sorted(PROVENANCES)}"
            )
        if not isinstance(entry["nodeCount"], int) or entry["nodeCount"] < 1:
            errors.append(f"{entry_label}: 'nodeCount' must be a positive integer")
        for field in ("name", "location"):
            if not isinstance(entry[field], str) or not entry[field]:
                errors.append(f"{entry_label}: '{field}' must be a non-empty string")

        # --- Cross-check the entry against the actual web file ---
        web = webs_by_id.get(entry["id"])
        if web is None:
            errors.append(
                f"{entry_label}: no valid web file '{entry['id']}.json' in {webs_dir_label}"
            )
            continue
        meta = web.get("meta", {})
        for field in ("name", "biome", "location", "provenance"):
            if meta.get(field) != entry[field]:
                errors.append(
                    f"{entry_label}: {field} '{entry[field]}' does not match "
                    f"{entry['id']}.json meta.{field} '{meta.get(field)}'"
                )
        actual_count = len(web.get("nodes", []))
        if entry["nodeCount"] != actual_count:
            errors.append(
                f"{entry_label}: nodeCount {entry['nodeCount']} does not match "
                f"{entry['id']}.json ({actual_count} nodes)"
            )

    for web_id in webs_by_id:
        if web_id not in seen_ids:
            errors.append(
                f"{label}: web file '{web_id}.json' is not registered in the index"
            )

    return errors


def load_json(path: Path, label: str) -> tuple[object | None, str | None]:
    try:
        return json.loads(path.read_text(encoding="utf-8")), None
    except json.JSONDecodeError as exc:
        return None, f"{label}: invalid JSON — {exc}"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument(
        "files",
        nargs="*",
        type=Path,
        help="specific web JSON files to validate (index checks are skipped)",
    )
    parser.add_argument(
        "--webs-dir",
        type=Path,
        default=DEFAULT_WEBS_DIR,
        help=f"directory of web files + index.json (default: {DEFAULT_WEBS_DIR})",
    )
    parser.add_argument(
        "--schema",
        type=Path,
        default=DEFAULT_SCHEMA_PATH,
        help=f"path to the JSON Schema (default: {DEFAULT_SCHEMA_PATH})",
    )
    args = parser.parse_args()

    schema = load_schema(args.schema)
    all_errors: list[str] = []
    all_warnings: list[str] = []
    web_count = 0

    if args.files:
        for path in sorted(args.files):
            data, err = load_json(path, str(path))
            if err:
                all_errors.append(err)
                continue
            errors, warnings = validate_web(data, schema, str(path))
            all_errors.extend(errors)
            all_warnings.extend(warnings)
            web_count += 1
    else:
        webs_dir: Path = args.webs_dir
        label = str(webs_dir.relative_to(REPO_ROOT)) if webs_dir.is_relative_to(REPO_ROOT) else str(webs_dir)
        web_files = sorted(p for p in webs_dir.glob("*.json") if p.name != "index.json")

        webs_by_id: dict[str, dict] = {}
        for path in web_files:
            data, err = load_json(path, f"{label}/{path.name}")
            if err:
                all_errors.append(err)
                continue
            errors, warnings = validate_web(data, schema, f"{label}/{path.name}")
            all_errors.extend(errors)
            all_warnings.extend(warnings)
            web_count += 1
            # Only cross-check index entries against structurally sound webs.
            if not errors and isinstance(data, dict) and isinstance(data.get("meta"), dict):
                webs_by_id[data["meta"].get("id", path.stem)] = data

        index_path = webs_dir / "index.json"
        if index_path.exists():
            index_data, err = load_json(index_path, f"{label}/index.json")
            if err:
                all_errors.append(err)
            else:
                all_errors.extend(validate_index(index_data, webs_by_id, label))
        else:
            print(f"{label}: no index.json — skipping index cross-checks")

    for warning in all_warnings:
        print(f"warning: {warning}")
    for error in all_errors:
        print(f"error: {error}")

    if all_errors:
        print(f"validate.py FAILED — {len(all_errors)} error(s), {len(all_warnings)} warning(s)")
        return 1
    print(f"validate.py OK — {web_count} web(s) validated, {len(all_warnings)} warning(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
