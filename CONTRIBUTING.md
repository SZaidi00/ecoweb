# Contributing to Food Web Explorer

Thanks for your interest in contributing! This document is a Phase 0 stub and will grow as the project matures.

## Development setup

1. Use Node.js 20 LTS (see `.nvmrc`).
2. `npm install` at the repo root (npm workspaces).
3. `npm run dev` to start the app locally.
4. Before opening a PR, make sure `npm run build`, `npm test`, `npm run lint`, and `npm run validate:data` all pass from the repo root.

## How to contribute an ecosystem web

Each ecosystem web is a static JSON file in `data/webs/`, validated against the schema in `packages/schema`. Webs are **curated, not comprehensive**: 15–25 nodes maximum, honest about aggregation (functional groups, not fabricated species splits) and provenance (empirical study vs. curated composite, with full citation).

The exact file format is documented in [docs/data-format.md](docs/data-format.md) (lands in Phase 1). Until then, hold off on submitting new webs — the schema is still being defined.
