# Phase 3 — Species Focus View

## Objective
The first hero interaction. Click a species → everything except its direct dependencies dims; prey appear below, predators above; "+N" badges let the user deliberately grow the view; a dependency-chain toggle traces the path down to producers; an info panel tells the node's story (including the aggregation/salmon explanation).

## Read first
`plan/00-MASTER-PROMPT.md` + this file. Renderer contract from Phase 2 (`GraphModel` events).

## Interaction spec (implement exactly)

1. **Entry:** click/tap a node (or Enter on keyboard focus) → focus mode.
2. **1-hop default:** visible set = focused node + direct prey + direct predators. All other nodes AND edges → alpha 0.10 with desaturation (GPU tint/alpha, no re-layout). On entering focus, the camera eases toward the focused species (smooth zoom/pan, ~400ms); exiting eases back.
3. **Directional readability:** keep global trophic layout — prey are naturally below, predators above. Directly connected edges render in the focus accent color; all other visible edges stay muted.
4. **Connection-count chips (traversal, not expansion):** on each visible neighbor with ≥2 total links, a small neutral chip shows that node's **total link count** in the full web. Clicking a chip **refocuses the view on that species** (hop through the web Wikipedia-style) — it does NOT grow the current visible set. This replaces the earlier "+N expand" badge design, which user feedback found confusing. Tooltip on hover: "N connections — select to focus". The visible set therefore never exceeds the 1-hop neighborhood (~15 nodes max on curated webs), and the 25-node ceiling problem disappears by design.
5. **Dependency chain toggle:** a button in the info panel, "Trace to producers". Computes the transitive prey-closure of the focused node, renders it as a simplified chain view (vertical list of paths, collapsing runs of >1 intermediate into "via N intermediate species" segments). This is a separate overlay view, NOT the full graph. Toggle off returns to previous state.
6. **Info panel (sidebar):**
   - Name, `kind` label ("Functional group" / "Species" / "Life-stage group"), trophic level.
   - **Aggregation statement** for non-species nodes (the salmon rule, user-facing): "This node pools Chinook, Coho, Pink and Sockeye salmon because the source study measured diet at this resolution." + external species links.
   - Eats / Eaten-by lists (names, clickable → refocus on that node).
   - Research metrics collapsed behind an expandable "Scientific details" section.
   - "Simulate removal" button (wires to Phase 4; disabled placeholder with tooltip "Coming in next build" if Phase 4 not yet merged).
7. **Breadcrumb** updates to include species; "← Back to full web" restores prior state (restore expansion state, don't reset it).
8. **Exit:** clicking empty canvas, Esc key, or breadcrumb click. All three must work; the hint bar tells users "Click empty space to clear". Restore prior state fully.

## State management
Focus state lives in `GraphModel` (visible set, expanded branches, focused id) as plain data; `GraphView` renders diffs via alpha/tint only. All transitions 300–400ms, eased.

## Acceptance criteria
- [ ] Focus mode shows ≤ ~15 nodes on Prince William Sound; everything else at ~0.10 alpha, desaturated.
- [ ] Camera eases to the focused species on entry and back on exit.
- [ ] Connection chips show correct total link counts and refocus on click; no badge-expansion mechanic exists.
- [ ] Clicking empty canvas AND Esc both clear focus; breadcrumb updates at each step.
- [ ] Chain view from Salmon reaches producers, collapses intermediates correctly, and never renders more than ~10 chain nodes.
- [ ] Info panel shows aggregation statement for "Salmon" verbatim from data; metrics hidden by default; external species links (iNaturalist/Wikipedia) present.
- [ ] Unit tests in `packages/cascade` for: 1-hop visible-set computation, chip counts, transitive closure, chain collapsing.
- [ ] No layout thrash: focus transitions stay at 60fps (measure).

## Checkpoint Report
Standard format + screenshots (focus on Salmon, badge expansion mid-state, chain view) + a short screen recording or GIF if feasible. Flag: whether the 25-node ceiling ever triggers on the current web, and any species whose 1-hop view felt confusing in manual testing.
