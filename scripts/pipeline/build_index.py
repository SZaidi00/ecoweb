#!/usr/bin/env python3
"""Generate data/webs/index.json, the browse-layer listing of all webs.

Scans ``data/webs/*.json`` (excluding ``index.json``), minimally parses each
file, and writes ``index.json`` as ``{"webs": [...]}`` with one entry per web:
``{id, name, biome, location, nodeCount, provenance, tagline, lat, lng}`` taken from the
web's ``meta`` (``nodeCount`` is the actual length of ``nodes``), sorted by
biome then name. ``scripts/pipeline/validate.py`` cross-checks the result
against the web files — run it after regenerating.

Usage:
    python3 scripts/pipeline/build_index.py                 # rebuild data/webs/index.json
    python3 scripts/pipeline/build_index.py --webs-dir DIR  # write DIR/index.json

Refuses to overwrite the index if any web file fails to parse (exit 1).
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
DEFAULT_WEBS_DIR = REPO_ROOT / "data" / "webs"

INDEX_ENTRY_FIELDS = (
    "id",
    "name",
    "biome",
    "location",
    "nodeCount",
    "provenance",
    "tagline",
    "lat",
    "lng",
)


def build_entry(path: Path) -> tuple[dict | None, str | None]:
    """Parse one web file into an index entry. Returns (entry, error)."""
    label = path.name
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        return None, f"{label}: invalid JSON — {exc}"
    if not isinstance(data, dict) or not isinstance(data.get("meta"), dict):
        return None, f'{label}: must be an object with a "meta" object'
    meta = data["meta"]
    nodes = data.get("nodes")
    if not isinstance(nodes, list):
        return None, f'{label}: "nodes" must be an array'
    missing = [f for f in INDEX_ENTRY_FIELDS if f != "nodeCount" and f not in meta]
    if missing:
        return None, f"{label}: meta is missing field(s): {', '.join(missing)}"
    entry = {field: meta[field] for field in INDEX_ENTRY_FIELDS if field != "nodeCount"}
    entry["nodeCount"] = len(nodes)
    # Reorder to the canonical field order.
    return {field: entry[field] for field in INDEX_ENTRY_FIELDS}, None


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument(
        "--webs-dir",
        type=Path,
        default=DEFAULT_WEBS_DIR,
        help=f"directory of web files; index.json is written there (default: {DEFAULT_WEBS_DIR})",
    )
    args = parser.parse_args()

    webs_dir: Path = args.webs_dir
    web_files = sorted(p for p in webs_dir.glob("*.json") if p.name != "index.json")

    entries: list[dict] = []
    errors: list[str] = []
    for path in web_files:
        entry, err = build_entry(path)
        if err:
            errors.append(err)
        else:
            entries.append(entry)

    if errors:
        for error in errors:
            print(f"error: {error}", file=sys.stderr)
        print(
            f"build_index.py FAILED — {len(errors)} web file(s) failed to parse; "
            "index.json left untouched",
            file=sys.stderr,
        )
        return 1

    entries.sort(key=lambda e: (e["biome"], e["name"]))

    index_path = webs_dir / "index.json"
    index_path.write_text(
        json.dumps({"webs": entries}, indent=2) + "\n", encoding="utf-8"
    )
    print(f"build_index.py OK — wrote {index_path} ({len(entries)} web(s))")
    return 0


if __name__ == "__main__":
    sys.exit(main())
