# Phase 6 — Methodology page + open-source launch polish

## Objective
Ship the About/Methodology page that explains *how* the webs are built and *why the data looks the way it does*, then polish the repo for public launch on GitHub.

## Read first
`plan/00-MASTER-PROMPT.md` + this file.

## Tasks

1. **Methodology page (`#/about`)** — written for a curious general reader, not scientists. Required sections:
   - **Why "Salmon" isn't one species** — functional-group aggregation explained with the salmon example; why diet data rarely exists at species resolution; our rule ("node granularity = what the source study measured; we never invent resolution"); life-stage splits where they exist.
   - **Where the data comes from** — Web of Life / GloBI / primary literature; the two provenance badges explained; per-web citations.
   - **How to read the visualization** — trophic-level layout, energy flows upward, edge thickness = diet share, qualitative vs. weighted edges.
   - **What the removal simulation does and doesn't claim** — thresholds, waves, release effects, and the explicit limits (no prey-switching, no population prediction).
   - **Why webs are kept small** — the legibility research rationale; depth through layers, not density.
   - **How to contribute** — link to CONTRIBUTING.md.
2. **Attribution surface:** every web's info panel links its citation; the About page includes a dedicated **Sources panel** with direct outbound links to every dataset and reference used (Web of Life, GloBI, the foodwebviz methods paper, iNaturalist, Wikipedia, plus each web's primary citation) — a visible link list, not prose mentions. Data-license notes included.
3. **README.md (final):** hero GIF of focus + cascade interactions (record from the built app), one-paragraph pitch, feature list, Quick Start (`npm install && npm run dev`), architecture diagram (simple), tech stack, roadmap excerpt, license, contributing link.
4. **CONTRIBUTING.md (final):** dev setup, code layout, the web JSON schema spec (link `docs/data-format.md`), step-by-step "contribute an ecosystem" workflow (data requirements, provenance rules, the salmon rule, PR checklist), code style, issue labels to use (`new-ecosystem`, `good-first-issue`).
5. **Repo hygiene:** issue templates (bug, ecosystem submission), PR template, `CITATION.cff`, verify LICENSE headers situation, `.github/workflows` CI green, GitHub Pages deploy workflow verified (build + deploy from main; Vite `base` set correctly).
6. **Final QA pass:** axe-core accessibility check (no critical violations), Lighthouse performance ≥ 90 on landing, all unit tests + validator green, manual sweep of all acceptance criteria from Phases 0–5 (fix-forward only small issues; anything structural goes in the report as a flag).

## Acceptance criteria
- [ ] About page covers all six sections, in plain language, with the salmon aggregation example shown using real data from the app.
- [ ] README GIF shows both hero interactions; Quick Start verified from a clean clone in a fresh directory.
- [ ] CONTRIBUTING enables an external contributor to submit a web without asking questions.
- [ ] axe-core: zero critical violations; Lighthouse ≥ 90 (landing).
- [ ] Full test suite + `validate:data` green; deploy workflow file verified.

## Checkpoint Report
Standard format + Lighthouse/axe numbers + a launch-readiness checklist. **Do not push or publish** — the human reviews, then makes the repo public. Flag anything that should block launch.
