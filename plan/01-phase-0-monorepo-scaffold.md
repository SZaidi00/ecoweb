# Phase 0 — Monorepo scaffold, tooling, design tokens, CI

## Objective
A clean, single-clone monorepo that runs the (empty) app with one command, with all tooling, design tokens, and automation in place. No product features yet.

## Read first
`plan/00-MASTER-PROMPT.md` (product principles, stack, repo layout) + this file.

## Tasks

1. **Repo root**
   - `package.json` with npm workspaces: `apps/*`, `packages/*`. Root scripts: `dev`, `build`, `test`, `validate:data`, `lint`.
   - `LICENSE` = MIT. `.gitignore` (node, dist, Python caches). `.nvmrc` (Node 20 LTS).
   - `README.md` skeleton: project name, one-paragraph pitch, screenshot placeholder, Quick Start (`npm install && npm run dev`), link to `CONTRIBUTING.md`. Keep it short — Phase 6 fills it in.
   - `CONTRIBUTING.md` stub with a "How to contribute an ecosystem web" section pointing to `docs/data-format.md` (the doc itself lands in Phase 1).

2. **`apps/web`** — Vite + React 18 + TypeScript.
   - Install and wire: `pixi.js` v8, `tailwindcss`, `react-router-dom` (**HashRouter only**), `zod`.
   - Renders a placeholder page: app shell (header with working title + nav stubs for "Explore" and "About") and an empty Pixi canvas filling the main area, using the design tokens below. Light earthy chrome per the approved mockup, not a dark dashboard.
   - Path alias `@/` → `apps/web/src/`.

3. **`packages/schema`** — TypeScript package, empty `EcosystemWeb` type placeholder (real schema is Phase 1), buildable, importable from `apps/web`.

4. **`packages/cascade`** — TypeScript package, single placeholder exported function, **Vitest configured** with one passing dummy test. Must not depend on React or Pixi.

5. **`data/webs/`** — empty except `index.json` containing `{ "webs": [] }`.

6. **`scripts/pipeline/`** — Python 3.12, `requirements.txt` (`jsonschema`, `pytest`), `README.md` explaining the pipeline's purpose. Placeholder `validate.py` that exits 0.

7. **Design tokens** (`apps/web/src/theme/tokens.ts` + Tailwind config) — use the approved **earthy palette** from the master prompt §1a exactly: paper/panel/line/ink/canopy base colors, the soil→leaf→sun trophic ramp, focus accent, and the four cascade states (stressed/severe/collapsed/released, each paired with an inline SVG icon — state never relies on color alone). Typography: Fraunces (serif, headings) + Inter (UI), via Google Fonts with system fallbacks. All tokens in one file — no ad-hoc hex values elsewhere. **No emojis anywhere; icons are inline SVG line icons.**

8. **Mockup reference:** copy the approved UI mockup HTML (provided by the human) into `apps/web/mockup/index.html` as the canonical design reference. It is read-only for the duration of the build — never modify it; when design questions arise, match it.

8. **CI** (`.github/workflows/ci.yml`): on PR — install, `lint`, `test`, `validate:data`.
   **Deploy** (`.github/workflows/deploy.yml`): on push to main — build `apps/web`, deploy `dist/` to GitHub Pages. Set Vite `base` to `/<repo-name>/` via env so Pages paths work.

## Constraints
- No product features, no real data, no routing logic beyond the two nav stubs.
- Everything typed strict (`"strict": true` in all tsconfigs).
- Verify the deploy workflow file is correct against GitHub Pages' official `actions/deploy-pages` action, but do not enable or run it.

## Acceptance criteria
- [ ] From a clean clone: `npm install && npm run dev` serves the app shell with an empty Pixi canvas.
- [ ] `npm run build`, `npm test`, `npm run lint`, `npm run validate:data` all pass from repo root.
- [ ] `apps/web` imports from `@foodweb/schema` and `@foodweb/cascade` successfully.
- [ ] All colors come from `tokens.ts`.
- [ ] Both GitHub Actions workflows are syntactically valid.

## Checkpoint Report
Follow the master prompt's format. Review = the human runs the clean-clone test and eyeballs the shell. Explicitly flag: chosen repo name (affects Vite `base`), any version pinning decisions.
