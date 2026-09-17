# Phase 4 — Cascade Mode (remove-a-species simulation)

## Objective
The second hero interaction. Remove a species and watch a staggered, honest ripple of effects: consumers lose diet share and may collapse in waves; prey are released. Everything labeled as structural dependency, never population prediction.

## Read first
`plan/00-MASTER-PROMPT.md` + this file.

## Model (`packages/cascade` — pure functions, no rendering)

Implement `simulateRemoval(web, removedId) → CascadeResult`:

- **Diet accounting:** each consumer's diet = sum of incoming edge weights. Qualitative edges count as equal shares of the consumer's qualitative intake (document this choice; if a consumer has both, normalize within classes — see tests).
- **Thresholds (from tokens, configurable constants):** loss < 30% → `stressed`; 30–70% → `severe`; > 70% → `collapsed`.
- **Wave propagation:** wave 1 = effects of the removal. Any `collapsed` node is treated as removed for subsequent waves; recompute losses for its consumers → wave 2, etc. Terminate on fixpoint. Cap at 10 waves defensively.
- **Release effects:** prey of each removed/collapsed node → `released` (once; a node both released and stressed reports both states).
- **CascadeResult** = ordered waves, each a list of `{ nodeId, state, dietLostPct, cause }`, plus a pre-generated **plain-language summary** array ("Pinnipeds lost 45% of their food supply. Sea otters collapsed: lost 100% of their food supply → secondary extinction. Zooplankton, released from predation, would likely increase.").
- **Unit tests (Vitest):** threshold boundaries exactly at 30%/70%; multi-wave propagation on a crafted 8-node web; qualitative-only diets; release + stress co-occurrence; idempotent termination; no infinite loops on cyclic edges (detritus loops exist in real webs).

## Presentation (`apps/web`)

1. **Entry:** "Simulate removal" from the Phase 3 info panel. Also "Simulate a removal" from the default web panel → **Cascade mode**: a persistent mode pill ("CASCADE MODE — click a species to remove it · Esc to cancel"), the hint bar switches to instructions, and the next node click is the removal target. Esc exits the mode without removing anything.
2. **Animation:** an expanding **ripple ring** emanates from the removed node at the moment of removal; the node darkens with a dashed severe-colored ring; then each wave applies after a ~700ms stagger: stressed → amber fill + warning icon, severe → red-orange fill + alert icon, collapsed → desaturate to gray + cross icon + slight shrink; released → green flash + pulse (brief scale-up). State must never rely on color alone (icons mandatory — accessibility principle). All icons are inline SVG line icons — **no emojis**.
3. **Edges:** edges to/from collapsed nodes fade to 0.12 alpha at their wave.
4. **Summary panel:** replaces the info panel; streams the plain-language lines in sync with waves; ends with the model-limitations line.
5. **Persistent disclaimer bar** (visible for the entire cascade): "This models structural dependency (who loses food / who is released), not population prediction. Real predators can switch prey; this model deliberately doesn't."
6. **Restore:** "↺ Restore ecosystem" resets instantly. Undo/re-remove must be fast enough to encourage comparing removals (keystone discovery behavior). Target: full remove→restore cycle feels instant (<100ms restore).

## Acceptance criteria
- [ ] All model logic pure + unit-tested (list test count in report; all passing).
- [ ] Wave timing and states match spec; icons accompany every state change.
- [ ] Summary text is generated from data (no hardcoded strings per ecosystem).
- [ ] Disclaimer visible throughout; "secondary extinction" language used for collapses.
- [ ] Restore < 100ms; repeated removals (phytoplankton vs herring) clearly produce different cascade scales — include both as report evidence.
- [ ] Works fully keyboard-driven (select target, trigger, restore).
- [ ] 60fps during wave animation (measure).

## Checkpoint Report
Standard format + GIF/video of: removing Salmon, removing Phytoplankton (big cascade), removing a mid-level node (small cascade) + the generated summaries as text. Flag any web where qualitative-edge diet normalization produced surprising results.
