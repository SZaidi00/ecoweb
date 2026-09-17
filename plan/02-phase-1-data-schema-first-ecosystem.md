# Phase 1 — Data schema, pipeline, and the first ecosystem

## Objective
Define the canonical `EcosystemWeb` JSON format, build validation tooling, and encode the first real ecosystem (Prince William Sound). **This phase locks the data contract everything else builds on — do not rush it.**

## Read first
`plan/00-MASTER-PROMPT.md` + this file.

## Schema requirements (`packages/schema`)

JSON Schema + generated/inferred TypeScript types + a `zod` validator. An `EcosystemWeb` must capture:

- **Meta:** id, name, location, biome (enum: marine | freshwater | terrestrial-forest | grassland | tundra | desert | wetland), lat/lng (for future map), provenance (`"empirical" | "composite"`), full citation(s), source URL, license note, curator, date curated.
- **Nodes:** id, display name, `kind` (`"functional-group" | "species" | "life-stage-group"`), trophic level (number; fractional allowed), functional role enum (producer | detritus | primary-consumer | intermediate-consumer | top-consumer), **plain-language description** including aggregation statement when `kind != "species"` (e.g. which species are pooled and *why* — see the salmon rule below), optional external links (Wikipedia/iNaturalist), optional research metrics (biomass, respiration, import/export) under a clearly-separated `metrics` object.
- **Edges:** prey id, predator id, `weight` (share of predator's diet, 0–1) **or** `qualitative: true` when the source lacks flow data. No fabricated weights.
- **Layout hints:** per-node x/y in a normalized 0–100 coordinate space, seeded from trophic level; the renderer may refine but must respect trophic ordering.

**The salmon rule (encode in docs + validator warnings):** node granularity = whatever the source study measured. Never split a pooled group without sourced diet data. Every non-species node's description must state its aggregation.

## Pipeline (`scripts/pipeline/`)

- `validate.py`: validates every file in `data/webs/` against the schema. Hard-fail on: >25 nodes, dangling edge refs, weights >1, missing provenance/citation, missing aggregation statement on non-species nodes. Warn on: isolated nodes, trophic-level inversions (edge pointing to a lower level — some are legitimate, e.g. detritivory, so warn only).
- `convert_template.py`: documented skeleton showing how to turn a published web (CSV/SCOR) into our format.
- Wire `npm run validate:data` → runs the Python validator.
- `docs/data-format.md`: full field-by-field documentation, written for external contributors, including the salmon rule and qualitative-edge policy.

## First ecosystem: Prince William Sound

Encode a 15–20 node marine web based on the published Prince William Sound food web (as referenced by the foodwebviz project / Web of Life). Requirements:
- Producers + detritus at the base (e.g. phytoplankton, macroalgae, detritus), zooplankton/zoobenthos/intertidal invertebrates, forage fish (herring, small pelagics), salmon (functional group, with aggregation statement), demersal fish, birds, pinnipeds, marine mammals, sea otters.
- Use real edge weights where the source provides them; otherwise `qualitative: true`. **Cite the exact source for every claim of weight.** If you cannot verify a weight, mark qualitative — never guess.
- Write the aggregation statement for "Salmon" explicitly (pooled Chinook/Coho/Pink/Sockeye-style groups per source).
- Register the web in `data/webs/index.json` with biome, location, node count, provenance.

## UI (minimal, throwaway-ok)
A debug route in `apps/web` (`#/debug/webs`) that loads and pretty-prints the validated JSON so the human can review the data in-browser.

## Acceptance criteria
- [ ] `npm run validate:data` passes on the Prince William Sound web and correctly rejects a deliberately broken fixture (26 nodes; dangling edge; missing citation).
- [ ] Schema, TS types, and zod validator agree (test round-trip in `packages/schema` tests).
- [ ] The web JSON contains zero un-sourced edge weights.
- [ ] "Salmon" node has an explicit aggregation statement; `kind: "functional-group"`.
- [ ] `docs/data-format.md` complete enough for an external contributor to submit a web.
- [ ] Debug route renders the data.

## Checkpoint Report
Standard format. **This checkpoint needs human data review**: present the full node/edge list in the report so the human can sanity-check the ecology before the renderer is built. Flag any edges where weight data was unavailable, and any aggregation judgment calls.
