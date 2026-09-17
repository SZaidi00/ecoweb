# Phase 2 — PixiJS graph renderer (full-web view)

## Objective
Render one ecosystem web as a beautiful, legible, trophic-level-organized graph in PixiJS. No focus mode, no cascade yet — this phase is purely "open a web and it looks great and reads clearly."

## Read first
`plan/00-MASTER-PROMPT.md` + this file. Data contract: `packages/schema` types (Phase 1).

## Tasks

1. **Model/view architecture**
   - `GraphModel` (plain TS, lives in `packages/cascade` or `apps/web/src/model`): holds nodes/edges/state, emits change events. Zero Pixi imports.
   - `GraphView` (`apps/web/src/graph/`): PixiJS stage that renders `GraphModel` state. Nodes = sprite/container with circle + label; edges = curved lines (quadratic/cubic beziers with arrowheads indicating prey → predator energy flow).

2. **Layout**
   - Vertical trophic bands: y-position derived from trophic level (producers bottom, apex top). Consume Phase 1 layout hints; apply a deterministic refinement pass (barycenter-style ordering within bands to reduce edge crossings) with a fixed seed — same input, same layout, every load.
   - Fit-to-viewport with padding; pan/zoom via simple viewport controls (drag to pan, wheel to zoom, capped). No physics, no animation on load beyond a subtle fade-in.

3. **Visual encoding** (match mockup v2)
   - Node fill = trophic ramp color from tokens; white-ish panel stroke ring; hover shows a soft halo ring.
   - **Trophic band lanes:** subtle tinted horizontal bands per level with small-caps lane labels ("PRODUCERS & DETRITUS" … "APEX PREDATORS").
   - Canvas background: paper color + faint dot texture.
   - Edge thickness ∝ diet weight; `qualitative` edges render at neutral thin width with a dashed style and a legend entry. Default edge color is a muted warm gray; the focus accent color is reserved for focus mode.
   - Labels: always legible (paper-colored stroke halo behind text, hide/de-clutter at low zoom).
   - Legend bar (functional roles) and a small "energy flows upward" affordance.
   - **Ambient motion:** slow energy-flow particles drifting along edges from prey → predator (small dots, low opacity, pausable via a reduced-motion setting and `prefers-reduced-motion`). This is the "alive" quality of the product — keep it subtle.

4. **Interaction groundwork (rendering only)**
   - Hit-testing on nodes (hover: slight enlarge + tooltip with name only).
   - Click emits `onNodeSelected(id)` to a stub handler. Focus view is Phase 3 — just wire the event.
   - Keyboard: Tab through nodes, Enter = select (focus-visible ring).

5. **Ecosystem route**: `#/web/:webId` loads JSON on demand, builds model, renders. Loading + error states.

## Performance
- Budget: 60fps at 200 nodes with 400 edges, all alpha/tint ops GPU-side. Add a hidden perf-test harness (`#/debug/perf`) that synthesizes a 200-node graph from the schema and measures frame time during pan/zoom and tint updates. Report numbers at checkpoint.

## Acceptance criteria
- [ ] Prince William Sound renders with zero overlapping labels at default zoom, minimal edge crossings, correct trophic ordering.
- [ ] Qualitative vs weighted edges visually distinct; legend explains both.
- [ ] Pan/zoom smooth; layout deterministic across reloads.
- [ ] Keyboard navigation works; visible focus ring.
- [ ] Perf harness shows 60fps at 200 nodes (report actual ms/frame).
- [ ] No React/Pixi imports inside `packages/*`; no hex colors outside `tokens.ts`.

## Checkpoint Report
Standard format + **screenshots** (full web view, zoomed detail, keyboard focus state) + perf numbers. Flag any node placement that required manual override of the deterministic layout, since per-web layout curation is an ongoing content cost.
