# Contributing to Food Web Explorer

Thanks for your interest in contributing!

## Development setup

1. Use Node.js 22 LTS (see `.nvmrc`).
2. `npm install` at the repo root (npm workspaces).
3. Install the Python tooling (Python 3.12+): `pip install -r scripts/pipeline/requirements.txt`
4. `npm run dev` to start the app locally.
5. Before opening a PR, make sure `npm run build`, `npm test`, `npm run lint`, `npm run validate:data`, and `npm run test:pipeline` all pass from the repo root.

## How to contribute an ecosystem web

Each ecosystem web is a static JSON file in `data/webs/`, validated against the schema in `packages/schema` by `scripts/pipeline/validate.py`. Webs are **curated, not comprehensive**: 25 nodes maximum, honest about aggregation (functional groups, not fabricated species splits) and provenance (empirical study vs. curated composite, with full citation).

The exact file format — every field, the salmon rule, the qualitative-edge policy, layout conventions, and the validator's fail/warning rules — is documented in [docs/data-format.md](docs/data-format.md). Start there; `scripts/pipeline/convert_template.py` is a runnable skeleton for converting a published web.
