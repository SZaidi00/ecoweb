# Data format — `EcosystemWeb`

This document is the field-by-field reference for contributing an ecosystem web to Food Web Explorer. The machine-readable contract lives in [`packages/schema/schema/ecosystem-web.schema.json`](../packages/schema/schema/ecosystem-web.schema.json) (JSON Schema, draft 2020-12), mirrored by a zod validator in `packages/schema` and enforced by `scripts/pipeline/validate.py`. If this document and the schema ever disagree, the schema wins — please file an issue.

## The rules that matter most

Before the field reference, three policies define what a valid web *means*:

### The salmon rule (node granularity)

**Node granularity is whatever the source study measured — never more.** Real food-web data is usually pooled: a node named "Salmon" in a published web typically means several salmon species measured together. We never invent resolution the data doesn't have:

- Never split a pooled group into species without sourced diet data for each split.
- Every node whose `kind` is not `"species"` **must** state its aggregation in its `description`: which species/groups are pooled, and *why* they are pooled (usually: because the source measured them together). See [Aggregation statements](#aggregation-statements) for the exact enforced rule.
- If a node's aggregation is genuinely unclear, say so in the description rather than guessing.

### Qualitative-edge policy (edge weights)

An edge either carries a `weight` taken **directly from the source** (the prey's share of the predator's diet, 0–1) or is marked `"qualitative": true`. Never both, never neither — and **never fabricate a weight**. If the source documents that A eats B but gives no flow/diet number, use `qualitative: true`. If you cannot verify a weight in the cited source, mark the edge qualitative.

### Provenance

Every web declares whether it is `"empirical"` (one published study measured this web) or `"composite"` (curated from multiple sources), with full citations and a source URL. There is no uncited data.

## File layout

- One JSON file per web in `data/webs/`, named `<meta.id>.json`.
- `data/webs/index.json` lists all webs for the browse layer (see [index.json](#indexjson)).
- A web contains at most **25 nodes** (hard ceiling — curated, not comprehensive).

## Top-level structure

```json
{
  "meta": { ... },
  "nodes": [ ... ],
  "edges": [ ... ]
}
```

No additional top-level properties are allowed.

## `meta` (required object)

| Field | Type | Required | Meaning |
|---|---|---|---|
| `id` | string | yes | Stable kebab-case identifier (`^[a-z0-9]+(-[a-z0-9]+)*$`). The file must be named `<id>.json`. |
| `name` | string | yes | Human-readable ecosystem name (e.g. "Prince William Sound"). |
| `location` | string | yes | Human-readable location (e.g. "Prince William Sound, Alaska, USA"). |
| `biome` | enum | yes | One of `marine`, `estuary`, `freshwater`, `terrestrial-forest`, `grassland`, `tundra`, `desert`, `wetland`. |
| `lat` | number | yes | Latitude of a representative point, −90..90. For a future map view. |
| `lng` | number | yes | Longitude of a representative point, −180..180. |
| `provenance` | enum | yes | `empirical` (one published study) or `composite` (curated from multiple sources). |
| `tagline` | string | yes | One-line hook shown on browse cards (1–120 characters), e.g. "Home to one of the best-studied keystone cascades". |
| `citations` | string[] | yes | Full citations for every source used. At least one; every edge weight must be traceable to one. |
| `sourceUrl` | string (URL) | yes | URL of the primary source (paper, dataset, or data portal). Must be an absolute URL. |
| `licenseNote` | string | yes | License/attribution note for the underlying data. |
| `curator` | string | yes | Name or handle of the person who curated the web. |
| `dateCurated` | string (date) | yes | ISO 8601 date (`YYYY-MM-DD`) the web was curated. |

## `nodes` (required array, 1–25 items)

| Field | Type | Required | Meaning |
|---|---|---|---|
| `id` | string | yes | Stable kebab-case identifier, unique within the web. Edges reference nodes by this id. |
| `displayName` | string | yes | Plain-language name shown in the UI (e.g. "Pacific herring"). |
| `kind` | enum | yes | `functional-group`, `species`, or `life-stage-group` — exactly the granularity the source measured. |
| `trophicLevel` | number | yes | Trophic level; fractional values allowed (e.g. `2.4`). Producers and detritus are level 1. Minimum 1. |
| `functionalRole` | enum | yes | `producer`, `detritus`, `primary-consumer`, `intermediate-consumer`, or `top-consumer`. |
| `description` | string | yes | Plain-language description. **Must include an aggregation statement when `kind` is not `"species"`** (see below). |
| `externalLinks` | object | no | Optional `wikipedia` and/or `iNaturalist` absolute URLs for curious readers. No other keys. |
| `metrics` | object | no | Optional quantitative research metrics, kept clearly separate from the core structure: `biomass`, `respiration`, `import`, `export` (all numbers). Only include values the source actually reports, and state the units in the node's `description`. Never fabricate; omit the object when the source has none. |
| `layout` | object | yes | Layout hint: `{ "x": 0–100, "y": 0–100 }` in the normalized coordinate space (see below). |

### Aggregation statements

The validator enforces the salmon rule with a documented heuristic: when `kind` is `"functional-group"` or `"life-stage-group"`, the `description` must match this case-insensitive regular expression:

```
/pooled|aggregat|group of|functional group|guild/i
```

In words: the description must contain at least one of "pooled", any word starting with "aggregat" ("aggregated", "aggregation", ...), "group of", "functional group", or "guild". This is a floor, not a target — a good aggregation statement names the pooled species/groups and explains why they are pooled, e.g.:

> "Salmon. Functional group pooling Chinook, Coho, Pink, and Sockeye salmon, because the source study's diet data did not distinguish them."

### Layout coordinate conventions

`layout.x` and `layout.y` are hints in a normalized 0–100 coordinate space: `x` 0 is the left edge, `y` 0 is the **bottom** of the canvas. Seed them from trophic level — producers/detritus near the bottom (low `y`), apex predators near the top (high `y`) — and spread nodes that share a level across `x`. The renderer may refine positions but must respect trophic ordering, so `y` ordering should follow `trophicLevel` ordering.

## `edges` (required array)

Each edge means "**prey is eaten by predator**".

| Field | Type | Required | Meaning |
|---|---|---|---|
| `prey` | string | yes | `id` of the node being eaten. Must exist in `nodes`. |
| `predator` | string | yes | `id` of the node that eats the prey. Must exist in `nodes`. |
| `weight` | number, 0–1 | exactly one of `weight` / `qualitative` | The prey's share of the predator's diet, taken directly from the cited source. |
| `qualitative` | `true` | exactly one of `weight` / `qualitative` | Marks an edge whose existence is documented but whose strength the source does not quantify. |

The schema enforces the XOR with `oneOf`: an edge with both fields, or with neither, is invalid.

## `index.json`

`data/webs/index.json` powers the browse layer:

```json
{
  "webs": [
    {
      "id": "prince-william-sound",
      "name": "Prince William Sound",
      "biome": "marine",
      "location": "Prince William Sound, Alaska, USA",
      "nodeCount": 19,
      "provenance": "empirical",
      "tagline": "Home to one of the best-studied keystone cascades"
    }
  ]
}
```

Every entry has exactly the fields `id`, `name`, `biome`, `location`, `nodeCount`, `provenance`, `tagline`. The validator cross-checks each entry against the actual web file: `id` must match the file name (`<id>.json`), `name`/`biome`/`location`/`provenance`/`tagline` must match the file's `meta`, and `nodeCount` must equal the file's actual node count. Every web file in `data/webs/` must be registered. The file is generated by `scripts/pipeline/build_index.py` (`npm run build:index`) — never hand-edit it.

## Validation rules (`scripts/pipeline/validate.py`)

Run it with `npm run validate:data` (or `python3 scripts/pipeline/validate.py`; `--webs-dir DIR` or explicit file paths for other locations). Tests: `npm run test:pipeline`.

**Hard failures** (exit code 1):

- any JSON Schema violation — this includes: more than 25 nodes, weights outside 0–1, an edge with both or neither of `weight`/`qualitative`, missing provenance, missing/empty citations, missing required fields, unknown properties
- dangling edge references (`prey`/`predator` id matches no node)
- duplicate node ids
- non-species nodes whose description lacks an aggregation statement (the regex above)
- `index.json` entries that are malformed, duplicated, missing a web file, or that mismatch the file's meta or node count; web files not registered in the index

**Warnings** (printed, exit code stays 0):

- isolated nodes (no edges in either direction) — usually a curation mistake worth reviewing
- trophic-level inversions (an edge where `predator.trophicLevel < prey.trophicLevel`) — legitimate for detritivory and some loops, so warn only; confirm intent

## Converting a published web: `convert_template.py`

`scripts/pipeline/convert_template.py` is a documented, runnable skeleton that turns a published web into our format. It operates on a tiny inline example so you can run it end to end:

```sh
python3 scripts/pipeline/convert_template.py out.json   # or omit the path for stdout
python3 scripts/pipeline/validate.py out.json           # must pass
```

The walkthrough of a real conversion:

1. **Get the source data.** Typically a node table (name, trophic level, sometimes biomass) and an edge/diet table (prey, predator, optional diet share) from the paper's supplements, the Web of Life, or an Ecopath/SCOR-style export. In the template these are `NODES_CSV` and `EDGES_CSV`.
2. **Map nodes one-to-one to the source's granularity** (`parse_nodes`). Copy the source's grouping — that is the salmon rule. Write the description, including the aggregation statement for pooled nodes.
3. **Map edges** (`parse_edges`). A diet-share number from the source becomes `weight`; a documented-but-unquantified link becomes `"qualitative": true`. Never interpolate or invent weights.
4. **Seed the layout** (`seed_layout`). `y` from trophic level, `x` spread evenly within a level; refine by hand afterwards if needed.
5. **Fill in `meta`** with the full citation(s), source URL, license note, your name, and the date.
6. **Validate before writing.** The template validates its output against the JSON Schema and refuses to emit invalid JSON; `validate.py` then adds the semantic checks (dangling references, aggregation statements, index consistency).

For a real web, copy the template, replace the inline CSVs with parsers for your source files, and keep steps 5–6 unchanged.

## Verifying your contribution

From the repo root:

```sh
npm run validate:data    # Python validator over data/webs/
npm test                 # includes schema/zod round-trip agreement tests
npm run test:pipeline    # pytest suite for the validator itself
```

All three must pass before a web can be merged.
