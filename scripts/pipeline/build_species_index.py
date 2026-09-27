#!/usr/bin/env python3
"""Generate data/species/, the cross-ecosystem species index.

Scans ``data/webs/*.json`` (excluding ``index.json``) and groups nodes across
webs into species entries by EXACT normalized display name — lowercased, every
run of non-alphanumeric characters collapsed to a single space, stripped. No
fuzzy or string-similarity matching. Optional per-node ``alsoKnownAs`` aliases
(normalized the same way) and the curator assertions in
``data/species/synonyms.json`` act as additional grouping keys. Writes
``index.json`` plus one ``entries/<slug>.json`` per entry, all deterministic.

Usage:
    python3 scripts/pipeline/build_species_index.py   # rebuild data/species/
    python3 scripts/pipeline/build_species_index.py --webs-dir DIR --synonyms FILE --out-dir DIR

A missing synonyms file is treated as an empty synonym list. Refuses to write
anything (exit 1) if any web file fails to parse, if the synonyms file is
malformed, or if a synonym member references a nonexistent web or node.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
DEFAULT_WEBS_DIR = REPO_ROOT / "data" / "webs"
DEFAULT_SYNONYMS = REPO_ROOT / "data" / "species" / "synonyms.json"
DEFAULT_OUT_DIR = REPO_ROOT / "data" / "species"

NON_ALNUM_RUN = re.compile(r"[^a-z0-9]+")


def normalize(name: str) -> str:
    """Grouping key: lowercase, non-alphanumeric runs → single space, strip."""
    return re.sub(r"[^a-z0-9]+", " ", name.lower()).strip()


def slugify(name: str) -> str:
    """URL slug: lowercase, non-[a-z0-9] runs → single '-', trim '-'."""
    return NON_ALNUM_RUN.sub("-", name.lower()).strip("-")


class UnionFind:
    def __init__(self) -> None:
        self.parent: dict[tuple[str, str], tuple[str, str]] = {}

    def find(self, key: tuple[str, str]) -> tuple[str, str]:
        self.parent.setdefault(key, key)
        root = key
        while self.parent[root] != root:
            root = self.parent[root]
        while self.parent[key] != root:
            self.parent[key], key = root, self.parent[key]
        return root

    def union(self, a: tuple[str, str], b: tuple[str, str]) -> None:
        ra, rb = self.find(a), self.find(b)
        if ra != rb:
            self.parent[max(ra, rb)] = min(ra, rb)


def load_webs(webs_dir: Path) -> tuple[dict[str, dict], list[str]]:
    """Parse every web file. Returns ({web_id: {meta, nodes: {id: node}}}, errors)."""
    webs: dict[str, dict] = {}
    errors: list[str] = []
    web_files = sorted(p for p in webs_dir.glob("*.json") if p.name != "index.json")
    for path in web_files:
        label = path.name
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as exc:
            errors.append(f"{label}: invalid JSON — {exc}")
            continue
        if not isinstance(data, dict) or not isinstance(data.get("meta"), dict):
            errors.append(f'{label}: must be an object with a "meta" object')
            continue
        if not isinstance(data.get("nodes"), list):
            errors.append(f'{label}: "nodes" must be an array')
            continue
        node_map: dict[str, dict] = {}
        bad = False
        for node in data["nodes"]:
            if not isinstance(node, dict) or not isinstance(node.get("id"), str):
                errors.append(f'{label}: every node must be an object with an "id" string')
                bad = True
                break
            if node["id"] in node_map:
                errors.append(f"{label}: duplicate node id '{node['id']}'")
                bad = True
                break
            node_map[node["id"]] = node
        if bad:
            continue
        web_id = data["meta"].get("id", path.stem)
        webs[web_id] = {"meta": data["meta"], "nodes": node_map}
    return webs, errors


def load_synonyms(
    path: Path, webs: dict[str, dict]
) -> tuple[list[dict], list[str]]:
    """Parse the synonyms file. Returns (assertions, errors); missing file → empty."""
    if not path.exists():
        return [], []
    label = path.name
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        return [], [f"{label}: invalid JSON — {exc}"]
    if not isinstance(data, dict) or not isinstance(data.get("synonyms"), list):
        return [], [f'{label}: must be an object with a "synonyms" array']
    assertions: list[dict] = []
    errors: list[str] = []
    for i, item in enumerate(data["synonyms"]):
        tag = f"{label}: synonyms[{i}]"
        if not isinstance(item, dict) or not isinstance(item.get("members"), list):
            errors.append(f'{tag}: must be an object with a "members" array')
            continue
        members: list[tuple[str, str]] = []
        valid = True
        for member in item["members"]:
            if (
                not isinstance(member, dict)
                or not isinstance(member.get("web"), str)
                or not isinstance(member.get("node"), str)
            ):
                errors.append(f'{tag}: each member must have "web" and "node" strings')
                valid = False
                continue
            web = webs.get(member["web"])
            if web is None:
                errors.append(f"{tag}: member references unknown web '{member['web']}'")
                valid = False
            elif member["node"] not in web["nodes"]:
                errors.append(
                    f"{tag}: member references unknown node '{member['node']}' "
                    f"in web '{member['web']}'"
                )
                valid = False
            members.append((member["web"], member["node"]))
        note = item.get("note")
        if note is not None and not isinstance(note, str):
            errors.append(f'{tag}: "note" must be a string')
            valid = False
        if valid and members:
            assertions.append({"members": members, "note": note})
    return assertions, errors


def build_entries(
    webs: dict[str, dict], assertions: list[dict]
) -> list[dict]:
    """Group all nodes across webs into entries via union-find."""
    uf = UnionFind()
    key_members: dict[str, list[tuple[str, str]]] = {}
    for web_id in sorted(webs):
        for node_id in sorted(webs[web_id]["nodes"]):
            node = webs[web_id]["nodes"][node_id]
            occurrence = (web_id, node_id)
            keys = [normalize(node.get("displayName", node_id))]
            aliases = node.get("alsoKnownAs")
            if isinstance(aliases, list):
                keys.extend(normalize(a) for a in aliases if isinstance(a, str))
            for key in keys:
                key_members.setdefault(key, []).append(occurrence)
    for members in key_members.values():
        for other in members[1:]:
            uf.union(members[0], other)
    for assertion in assertions:
        for other in assertion["members"][1:]:
            uf.union(assertion["members"][0], other)

    groups: dict[tuple[str, str], list[tuple[str, str]]] = {}
    for web_id in sorted(webs):
        for node_id in sorted(webs[web_id]["nodes"]):
            occurrence = (web_id, node_id)
            groups.setdefault(uf.find(occurrence), []).append(occurrence)

    entries: list[dict] = []
    for root in sorted(groups):
        occurrences = sorted(groups[root])
        nodes = [webs[w]["nodes"][n] for w, n in occurrences]

        name_counts: dict[str, int] = {}
        for node in nodes:
            display = node.get("displayName", "")
            name_counts[display] = name_counts.get(display, 0) + 1
        name = min(name_counts, key=lambda d: (-name_counts[d], d))

        richest = min(
            occurrences,
            key=lambda o: (-len(webs[o[0]]["nodes"][o[1]].get("description", "")), o[0], o[1]),
        )
        richest_node = webs[richest[0]]["nodes"][richest[1]]

        notes = [
            a["note"]
            for a in assertions
            if a.get("note") and any(uf.find(m) == root for m in a["members"])
        ]
        entries.append(
            {
                "name": name,
                "kind": richest_node.get("kind"),
                "occurrences": occurrences,
                "richest": richest,
                "notes": notes,
            }
        )

    entries.sort(key=lambda e: (e["name"].lower(), e["name"]))
    used_slugs: set[str] = set()
    for entry in entries:
        base = slugify(entry["name"])
        slug, suffix = base, 2
        while slug in used_slugs:
            slug = f"{base}-{suffix}"
            suffix += 1
        used_slugs.add(slug)
        entry["slug"] = slug
    return entries


def occurrence_detail(webs: dict[str, dict], web_id: str, node_id: str) -> dict:
    meta = webs[web_id]["meta"]
    node = webs[web_id]["nodes"][node_id]
    detail = {
        "web": web_id,
        "webName": meta.get("name"),
        "biome": meta.get("biome"),
        "node": node_id,
        "displayName": node.get("displayName"),
        "kind": node.get("kind"),
        "trophicLevel": node.get("trophicLevel"),
    }
    if "externalLinks" in node:
        detail["externalLinks"] = node["externalLinks"]
    return detail


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument(
        "--webs-dir",
        type=Path,
        default=DEFAULT_WEBS_DIR,
        help=f"directory of web files (default: {DEFAULT_WEBS_DIR})",
    )
    parser.add_argument(
        "--synonyms",
        type=Path,
        default=DEFAULT_SYNONYMS,
        help=f"curator synonym assertions (default: {DEFAULT_SYNONYMS})",
    )
    parser.add_argument(
        "--out-dir",
        type=Path,
        default=DEFAULT_OUT_DIR,
        help=f"output directory for index.json and entries/ (default: {DEFAULT_OUT_DIR})",
    )
    args = parser.parse_args()

    webs, errors = load_webs(args.webs_dir)
    assertions, synonym_errors = load_synonyms(args.synonyms, webs)
    errors.extend(synonym_errors)

    if errors:
        for error in errors:
            print(f"error: {error}", file=sys.stderr)
        print(
            f"build_species_index.py FAILED — {len(errors)} error(s); "
            "no output written",
            file=sys.stderr,
        )
        return 1

    entries = build_entries(webs, assertions)

    index_entries = [
        {
            "slug": e["slug"],
            "name": e["name"],
            "kind": e["kind"],
            "webs": sorted({w for w, _ in e["occurrences"]}),
            "occurrences": [{"web": w, "node": n} for w, n in e["occurrences"]],
        }
        for e in entries
    ]

    out_dir: Path = args.out_dir
    entries_dir = out_dir / "entries"
    entries_dir.mkdir(parents=True, exist_ok=True)
    for stale in entries_dir.glob("*.json"):
        stale.unlink()

    (out_dir / "index.json").write_text(
        json.dumps(
            {"webCount": len(webs), "entryCount": len(entries), "entries": index_entries},
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    for entry in entries:
        richest_web, richest_node_id = entry["richest"]
        richest_node = webs[richest_web]["nodes"][richest_node_id]
        detail = {
            "slug": entry["slug"],
            "name": entry["name"],
            "kind": entry["kind"],
            "description": richest_node.get("description"),
            "sourceWeb": richest_web,
        }
        if "externalLinks" in richest_node:
            detail["externalLinks"] = richest_node["externalLinks"]
        if entry["notes"]:
            detail["notes"] = entry["notes"]
        detail["occurrences"] = [
            occurrence_detail(webs, w, n) for w, n in entry["occurrences"]
        ]
        (entries_dir / f"{entry['slug']}.json").write_text(
            json.dumps(detail, indent=2) + "\n", encoding="utf-8"
        )

    print(
        f"build_species_index.py OK — wrote {out_dir} "
        f"({len(entries)} entries from {len(webs)} webs)"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
