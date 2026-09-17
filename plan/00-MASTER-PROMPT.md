# MASTER PROMPT — Food Web Explorer (paste this into Kimi Code first)

You are building **Food Web Explorer**, an open-source, interactive web app that lets a general audience explore real-world food webs: see how species in an ecosystem are connected, trace what a species depends on (and what depends on it), and simulate what happens when a species is removed. Think "interactive documentary of ecosystems," not "network analysis tool."

This is a phased build. A plan folder (`plan/`) contains this master file plus one file per phase (`01-…` through `06-…`). **Work on exactly one phase at a time.** At the start of a phase, read this master file and that phase's file only — do not re-read or re-litigate other phases. At the end of each phase, complete its acceptance criteria, then **STOP and print the phase's Checkpoint Report**. Do not begin the next phase until the human approves.

---

## 1. Product principles (non-negotiable — do not deviate)

1. **Curated, not comprehensive.** Every ecosystem web contains **15–25 nodes, hard ceiling**, enforced by the data validator. Never render raw large-scale network datasets.
2. **Legibility over realism.** Layout is **pre-tuned and deterministic**, organized vertically by trophic level (producers at the bottom, apex predators at the top). There are **no physics sliders, no live force simulation** visible to users.
3. **Story-driven interactions.** The two hero interactions are: (a) **Species Focus View** — click a species to see its direct prey and predators while everything else dims; (b) **Cascade Mode** — remove a species and watch a staggered ripple of effects through the web.
4. **Honest science.** Nodes in real food-web data are usually **functional groups** (e.g. "Salmon" = several salmon species pooled by the source study), not single species. We never invent resolution the data doesn't have: no fabricated species splits, no fabricated edge weights. Every web carries a **provenance badge** (empirical study vs. curated composite) and full citation. The cascade model is labeled clearly as **structural dependency, not population prediction**.
5. **Zoom mental model.** Navigation is a three-level hierarchy: **Biome → Ecosystem → Species**. Users never see more than ~25 nodes at once, but the total content can be large. A persistent breadcrumb (e.g. "Marine › Prince William Sound › Salmon") reinforces this.

## 1a. Design language (approved via UI mockup v2 — canonical reference: `apps/web/mockup/index.html`, do not modify)

The UI direction was established through an approved interactive mockup. Match its look and behavior; when in doubt, the mockup wins.

- **Palette — "earthy":** warm paper background `#f6f2e9`, panel `#fffdf6`, hairline `#ddd4bf`, ink `#2b2620`, brand deep-canopy green `#3e5c41`. **Trophic ramp (soil → leaf → sun):** producers/detritus `#5b4a35`, primary consumers `#6d8a4e`, mid-level `#3f7d6b`, upper-level `#c98a2b`, apex `#a4542e`. Focus accent `#b8772e`. Cascade states: stressed `#d99a26`, severe `#c0532f`, collapsed `#9a927f`, released `#5c9c4f`.
- **Typography:** Fraunces (serif) for headings and editorial moments; Inter for UI text.
- **No emojis anywhere in the UI.** Icons are inline SVG line icons only.
- **Canvas:** faint dotted paper texture, trophic band lanes with small-caps labels ("PRODUCERS & DETRITUS" … "APEX PREDATORS").
- **Motion (renderer-level, tasteful):** ambient energy-flow particles drifting along edges; smooth camera zoom toward a focused species; an expanding ripple ring on species removal; "released" nodes pulse. All subtle and purposeful — no gratuitous animation.

## 2. Tech stack (fixed)

| Layer | Choice | Notes |
|---|---|---|
| App framework | **React 18 + TypeScript + Vite** | SPA in `apps/web` |
| Graph rendering | **PixiJS v8 (WebGL, Canvas2D fallback)** | Rendering layer ONLY. The graph lives in plain TypeScript data structures; Pixi renders state, never owns it. Focus-mode dimming = alpha ops; cascade stress states = tints; both are GPU-cheap in Pixi. |
| Styling | **Tailwind CSS** | Design tokens defined in Phase 0 |
| Routing | **Hash-based routing** (`react-router` `HashRouter`) | Required: static hosting has no server rewrites |
| Graph/cascade logic | **`packages/cascade` — pure TypeScript functions** | No rendering imports. Unit-tested with **Vitest** |
| Data | **Static JSON, one file per ecosystem**, in `data/webs/`, validated against a JSON Schema in `packages/schema` | Loaded on demand per web |
| Data pipeline | **Python 3.12** scripts in `scripts/pipeline/` | Convert/validate published webs → our schema |
| Hosting | **GitHub Pages** via GitHub Actions | Fully static; no backend at launch |
| License | **MIT** (code); data attribution documented separately | |

**Backend:** deliberately deferred. The MVP is 100% static. The monorepo uses `apps/` so a future `apps/api` can be added without restructuring. Do not build a backend.

## 3. Monorepo layout (created in Phase 0, npm workspaces)

```
food-web-explorer/
├── apps/
│   └── web/                  # Vite + React + TS frontend (PixiJS, Tailwind)
│       └── mockup/           # Approved UI mockup v2 (design reference — never modified)
├── packages/
│   ├── schema/               # JSON Schema + TS types for EcosystemWeb, zod validators
│   └── cascade/              # Pure TS: focus-view queries + cascade simulation (Vitest)
├── data/
│   └── webs/                 # One validated JSON per ecosystem + index.json
├── scripts/
│   └── pipeline/             # Python: convert/validate webs (runs against packages/schema)
├── docs/                     # Architecture notes, data-format docs for contributors
├── .github/workflows/        # CI (validate + test) and Pages deploy
├── plan/                     # This file + phase files (do not modify)
├── README.md  CONTRIBUTING.md  LICENSE
```

## 4. Working protocol

- **One phase at a time.** Read `00-MASTER-PROMPT.md` + the current phase file. Nothing else in `plan/`.
- **Never fabricate ecological data.** If a source lacks edge weights, mark edges `"qualitative": true` and use neutral thickness. If a node's aggregation is unclear, say so in its info content. When unsure, flag it in the Checkpoint Report instead of guessing.
- **Keep the model/view split clean.** `packages/cascade` and `packages/schema` must never import React or Pixi. The renderer consumes plain state.
- **Don't refactor previous phases' delivered work** unless the current phase file explicitly says to.
- **Accessibility baseline everywhere:** keyboard-navigable species selection, colorblind-safe palette (state changes must not rely on color alone — pair with icons/opacity), readable contrast.
- **Performance budget:** 60fps at 200 rendered nodes (badge-expansion can grow beyond the curated 25). Measure before claiming done.
- **Do not `git push` or publish anything.** The human handles GitHub. You build locally and report.

## 5. Checkpoint Report format (print at the end of every phase)

```
## CHECKPOINT — Phase N: <name>
**Done:** <bullet list of what was built>
**How to review:** <exact commands to run, and exactly what to click/look at>
**Acceptance criteria:** <each criterion from the phase file: PASS/FAIL + one-line evidence>
**Flags for human:** <uncertainties, data gaps, judgment calls that need a decision>
**Waiting for approval to proceed to Phase N+1.**
```

## 6. Phase index

| Phase | File | Deliverable | Checkpoint question |
|---|---|---|---|
| 0 | `01-phase-0-monorepo-scaffold.md` | Monorepo, tooling, design tokens, CI, deploy pipeline | Clean clone runs with one command? |
| 1 | `02-phase-1-data-schema-first-ecosystem.md` | JSON schema, validator, Prince William Sound web | Is the data model right before we build on it? |
| 2 | `03-phase-2-graph-renderer.md` | PixiJS trophic-level renderer | Is the full-web view legible and beautiful? |
| 3 | `04-phase-3-species-focus-view.md` | Click-to-focus: 1-hop dimming, badges, chain view, info panel | Does focus view feel magical or cluttered? |
| 4 | `05-phase-4-cascade-mode.md` | Remove-a-species simulation + animation + summary | Is the cascade honest and visceral? |
| 5 | `06-phase-5-browse-layer-more-ecosystems.md` | Biome landing, ecosystem cards, breadcrumbs, 3–5 more webs | Does the full journey hold together? |
| 6 | `07-phase-6-methodology-page-launch.md` | About/Methodology page, OSS polish, Pages deploy | Ready to make the repo public? |

Begin with Phase 0 now.
