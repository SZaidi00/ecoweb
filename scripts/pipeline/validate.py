#!/usr/bin/env python3
"""Placeholder data validator (Phase 0).

Real validation against the JSON Schema in ``packages/schema`` lands in
Phase 1. For now this script performs basic sanity checks: every JSON file
in ``data/webs/`` must parse, and ``index.json`` must contain a ``webs``
array. Exits 0 on success, 1 on failure.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
WEBS_DIR = REPO_ROOT / "data" / "webs"


def main() -> int:
    json_files = sorted(WEBS_DIR.glob("*.json"))
    for path in json_files:
        try:
            json.loads(path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as exc:
            print(f"{path.relative_to(REPO_ROOT)}: invalid JSON — {exc}")
            return 1

    index = json.loads((WEBS_DIR / "index.json").read_text(encoding="utf-8"))
    if not isinstance(index.get("webs"), list):
        print('data/webs/index.json: must contain a "webs" array')
        return 1

    print(
        f"validate.py OK — {len(json_files)} JSON file(s) parsed; "
        f"index.json lists {len(index['webs'])} web(s)"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
