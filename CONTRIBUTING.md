# Contributing to Food Web Explorer

Thanks for your interest in contributing! The highest-value contribution is a new ecosystem web — see [Contribute an ecosystem](#contribute-an-ecosystem) below. Bug reports and code contributions are welcome too.

## Development setup

1. Use Node.js 22 LTS (see `.nvmrc`).
2. `npm install` at the repo root (npm workspaces).
3. Install the Python tooling (Python 3.12+): `pip install -r scripts/pipeline/requirements.txt`
4. `npm run dev` to start the app locally.
5. Before opening a PR, make sure `npm run build`, `npm test`, `npm run lint`, `npm run validate:data`, and `npm run test:pipeline` all pass from the repo root. CI runs exactly these.

## Code layout

```
apps/web            React + TypeScript + Vite app (PixiJS renderer, Tailwind, hash routing)
packages/schema     JSON Schema + zod types for the ecosystem-web format
packages/cascade    Pure TypeScript: graph model, focus queries, cascade simulation
data/webs           One validated JSON file per ecosystem (+ generated index.json)
scripts/pipeline    Python: conversion/validation tooling for ecosystem data
docs                data-format.md (the web format spec) and architecture notes
```

The model/view split is strict: `packages/schema` and `packages/cascade` never import React or Pixi — the renderer consumes plain state. Keep it that way.

## Code style

- TypeScript strict; ESLint must pass (`npm run lint`).
- Match the surrounding file's conventions rather than imposing new ones.
- No comments that restate what the code does.
- No emojis in UI copy; icons are inline SVG line icons.
- Accessibility is a baseline: keyboard-navigable interactions, state changes never conveyed by color alone.
- Run the full command set from step 5 of the dev setup before opening a PR.

## Contribute an ecosystem

Each ecosystem web is a static JSON file in `data/webs/`, validated against the schema in `packages/schema` by `scripts/pipeline/validate.py`. Webs are **curated, not comprehensive**: 25 nodes maximum, honest about aggregation (functional groups, not fabricated species splits) and provenance (empirical study vs. curated composite, with full citations).

The exact file format — every field, the salmon rule, the qualitative-edge policy, layout conventions, and the validator's fail/warning rules — is documented in [docs/data-format.md](docs/data-format.md). Read it before starting; `scripts/pipeline/convert_template.py` is a runnable skeleton for converting a published web.

### Data requirements

- A **verifiable published source**: primary literature, or a redistribution of one (Web of Life, GloBI, an R data package, a project data mirror). If you can't point a reviewer at the source, the web can't ship.
- **The salmon rule:** node granularity is whatever the source measured — never more. Never split a pooled group into species without sourced diet data for each split. Every non-species node must state its aggregation in its `description`.
- **Edge honesty:** an edge either carries a `weight` taken directly from the source (diet share, 0–1) or is marked `"qualitative": true`. Never fabricate a weight.
- **Provenance:** declare `empirical` or `composite`, with full citations, a source URL, and a license note.

### Workflow

1. Open an issue with the **`new-ecosystem`** label proposing the web: source study, biome, expected node count. Get a thumbs-up before investing in curation.
2. Convert the published web into our format (start from `scripts/pipeline/convert_template.py`), filling in every node's aggregation statement and the full `meta` block (citations, `sourceUrl`, `licenseNote`, `curator`, `dateCurated`).
3. Run `npm run validate:data` — fix every error; justify every warning in the PR description (e.g. trophic-level inversions from detritivory are fine, but say so).
4. Run `npm run build:index` to regenerate `data/webs/index.json`.
5. Hand-tune the per-node `layout` hints where crossings or labels suffer (this is expected content work — see the layout conventions in `docs/data-format.md`).
6. Open a PR. Checklist:
   - [ ] `npm run validate:data` passes (warnings justified)
   - [ ] `npm run build:index` committed
   - [ ] Node count ≤ 25; every non-species node states its aggregation
   - [ ] Every edge weight traceable to a citation; unverifiable edges are `qualitative`
   - [ ] Full citations, `sourceUrl`, and `licenseNote` present
   - [ ] Provenance badge correct (`empirical` vs `composite`)
   - [ ] Screenshot of the web at default zoom in the PR (labels must be legible)

## Issues and labels

- Bugs: use the bug report template.
- New ecosystems: use the ecosystem submission template (label **`new-ecosystem`**).
- Small, well-scoped starter tasks carry **`good-first-issue`** — a good place to begin.
