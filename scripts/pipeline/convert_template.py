#!/usr/bin/env python3
"""Skeleton converter: published food-web data -> EcosystemWeb JSON.

This is a *documented template*, not a turnkey converter. Real published
webs (CSV adjacency lists, SCOR/ecopath-style diet matrices, Web of Life
exports, ...) differ enough that each conversion needs human judgment —
especially for the "honest science" rules below. Copy this file, adapt the
parsing steps, and delete this note when you convert a real web.

The non-negotiable rules (see docs/data-format.md):
    1. Node granularity = whatever the source measured ("salmon rule").
       Never split a pooled group without sourced diet data.
    2. Never fabricate edge weights. If the source documents that A eats B
       but gives no flow/diet-share number, emit `"qualitative": true`.
    3. Every web needs full provenance: citations, source URL, license note.
    4. Curated ceiling: 25 nodes maximum. Aggregate or drop with justification.

Usage:
    python3 scripts/pipeline/convert_template.py               # JSON to stdout
    python3 scripts/pipeline/convert_template.py out.json      # JSON to file

The built-in example converts a tiny inline CSV dataset and validates the
result against the canonical schema before writing it, so the script always
exits non-zero rather than emit invalid JSON.
"""

from __future__ import annotations

import argparse
import csv
import io
import json
import sys
from pathlib import Path

import jsonschema

REPO_ROOT = Path(__file__).resolve().parents[2]
SCHEMA_PATH = REPO_ROOT / "packages" / "schema" / "schema" / "ecosystem-web.schema.json"

# ---------------------------------------------------------------------------
# Step 0 — the source data.
#
# A real conversion starts from files downloaded from the study's
# supplementary material or a portal such as the Web of Life
# (https://www.web-of-life.es) or foodwebviz. Typical shapes:
#   * a node table (name, trophic level, sometimes biomass)
#   * an edge/diet table (prey, predator, optional diet share or flow)
# Here we inline a tiny example so the script is runnable end to end.
# ---------------------------------------------------------------------------

NODES_CSV = """\
id,display_name,kind,trophic_level,functional_role,description
phytoplankton,Phytoplankton,functional-group,1,producer,"Microscopic photosynthetic plankton. Functional group of diatoms and flagellates pooled by the example source because they were sampled together."
zooplankton,Zooplankton,functional-group,2,primary-consumer,"Small drifting grazers. Functional group of copepods and larval crustaceans pooled by the example source because diet data were aggregated at this level."
capelin,Capelin,species,2.8,intermediate-consumer,"A small forage fish; the example source measured it at species level."
"""

# One row per documented feeding link. `weight` is the prey share of the
# predator's diet (0-1) taken *verbatim* from the source; leave it empty
# when the source has no flow data and the edge will become qualitative.
EDGES_CSV = """\
prey,predator,weight
phytoplankton,zooplankton,0.85
phytoplankton,capelin,
zooplankton,capelin,0.15
"""

META = {
    "id": "template-fjord",
    "name": "Template Fjord",
    "location": "Example Fjord, Somewhere",
    "biome": "marine",
    "lat": 60.0,
    "lng": -148.0,
    # 'empirical' when one study measured the whole web; 'composite' when
    # you curated it from multiple sources.
    "provenance": "empirical",
    "citations": [
        "Example, A. (2001). A template fjord food web. Journal of Templates 1(1): 1-2."
    ],
    "sourceUrl": "https://example.org/datasets/template-fjord",
    "licenseNote": "Example data for the converter template; not a real web.",
    "curator": "Your Name",
    "dateCurated": "2026-09-16",
}


def parse_nodes(csv_text: str) -> list[dict]:
    """Parse the node table. `layout` is seeded from trophic level later."""
    nodes = []
    for row in csv.DictReader(io.StringIO(csv_text)):
        nodes.append(
            {
                "id": row["id"].strip(),
                "displayName": row["display_name"].strip(),
                # Keep the source's granularity — see the salmon rule.
                "kind": row["kind"].strip(),
                "trophicLevel": float(row["trophic_level"]),
                "functionalRole": row["functional_role"].strip(),
                "description": row["description"].strip(),
                # Optional: "externalLinks", "metrics" — only when sourced.
            }
        )
    return nodes


def parse_edges(csv_text: str) -> list[dict]:
    """Parse the edge table; empty weight means a qualitative edge."""
    edges = []
    for row in csv.DictReader(io.StringIO(csv_text)):
        edge = {"prey": row["prey"].strip(), "predator": row["predator"].strip()}
        weight = row.get("weight", "").strip()
        if weight:
            edge["weight"] = float(weight)  # must come from the source
        else:
            edge["qualitative"] = True
        edges.append(edge)
    return edges


def seed_layout(nodes: list[dict]) -> None:
    """Seed layout hints in the normalized 0-100 space from trophic level.

    y maps trophic level onto 5..95 (producers/detritus at the bottom);
    x spreads nodes sharing a level evenly across 10..90. The renderer may
    refine x but must respect trophic ordering.
    """
    levels = [n["trophicLevel"] for n in nodes]
    lo, hi = min(levels), max(levels)
    span = hi - lo or 1.0
    by_level: dict[float, list[dict]] = {}
    for node in nodes:
        by_level.setdefault(node["trophicLevel"], []).append(node)
    for level, group in by_level.items():
        y = 5 + (level - lo) / span * 90
        width = 80
        for i, node in enumerate(group):
            x = 10 + (width * (i + 0.5) / len(group)) if group else 50
            node["layout"] = {"x": round(x, 1), "y": round(y, 1)}


def build_web() -> dict:
    nodes = parse_nodes(NODES_CSV)
    edges = parse_edges(EDGES_CSV)
    seed_layout(nodes)
    return {"meta": META, "nodes": nodes, "edges": edges}


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument(
        "output",
        nargs="?",
        type=Path,
        help="output file (default: stdout)",
    )
    args = parser.parse_args()

    web = build_web()

    # Never emit invalid JSON: validate before writing. (validate.py adds
    # the semantic checks — dangling refs, aggregation statements, etc. —
    # so run it on the result too.)
    schema = json.loads(SCHEMA_PATH.read_text(encoding="utf-8"))
    jsonschema.Draft202012Validator.check_schema(schema)
    errors = list(jsonschema.Draft202012Validator(schema).iter_errors(web))
    if errors:
        for err in errors:
            print(f"error: {err.message}", file=sys.stderr)
        return 1

    text = json.dumps(web, indent=2) + "\n"
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(text, encoding="utf-8")
        print(f"wrote {args.output} ({len(web['nodes'])} nodes, {len(web['edges'])} edges)")
    else:
        sys.stdout.write(text)
    return 0


if __name__ == "__main__":
    sys.exit(main())
