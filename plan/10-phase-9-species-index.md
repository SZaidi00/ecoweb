# Phase 9 (Track 1) — Cross-ecosystem species index

## Objective
Generate a browsable **species index**: every distinct node across all webs gets a page listing where it appears ("Herring appears in 2 ecosystems"), turning the atlas into a cross-referenced reference work and multiplying linkable/searchable surface area.

## Read first
`plan/00-MASTER-PROMPT.md` + this file. Data contract: `packages/schema`.

## The identity rule (the hard part — get this reviewed)

Nodes across webs are **functional groups at varying resolutions** (salmon rule), so "same species" cannot mean "same node id". Implement a pragmatic identity scheme:

1. **Exact-name grouping (default):** nodes with identical normalized display names across webs group into one index entry (e.g. "Herring" in two marine webs).
2. **Explicit cross-links:** the web JSON gains an optional per-node field `alsoKnownAs: string[]` and the index gains a small manual **synonyms file** (`data/species/synonyms.json`) where curators can assert "these nodes refer to overlapping groups" (e.g. "Salmon" in web A ↔ "Pacific salmon" in web B). Assertions are curator judgment — they must include a one-line `note` explaining the overlap ("overlapping functional groups, not identical taxa").
3. **Never auto-merge by fuzzy matching.** False merges are misinformation; false splits are merely incomplete. Err toward splits.

## Tasks

1. **Generator** (`scripts/pipeline/build_species_index.py`): scans all webs, applies exact-name grouping + synonyms file, emits `data/species/index.json` + one JSON per entry. Runs in CI; fails on synonym referencing a nonexistent node.
2. **Index page (`#/species`)**: alphabetical list with counts ("42 groups across 5 ecosystems"), letter jump-nav, per-entry chip showing which webs contain it. Editorial styling consistent with the About page (this is a reference section).
3. **Entry page (`#/species/:slug`)**: name, kind, aggregation statement (from the richest source web), list of webs with links into each (`#/web/:webId` with the node pre-focused — add a `?focus=nodeId` query param to the web route), external links (iNaturalist/Wikipedia where present).
4. **Schema addition:** optional `alsoKnownAs` on nodes; version the schema changelog in `docs/data-format.md`.
5. **Cross-links in the web UI:** species info panel gains a "Appears in N ecosystems" line linking to the index entry when N > 1.

## Acceptance criteria
- [ ] Generator output deterministic; CI check fails on dangling synonym references.
- [ ] Every entry page lists correct webs; `?focus=` deep-link opens the web with that node focused.
- [ ] A deliberately-added synonym pair renders as one entry with its overlap note visible.
- [ ] No fuzzy auto-merging exists anywhere in the pipeline (grep-able: no string-similarity library imported).
- [ ] Info panel cross-link appears only when the entry spans multiple webs.

## Checkpoint Report
Standard format + screenshots (index page, a multi-web entry, deep-link focus) + the full synonym list for human review (each with its justification note).
