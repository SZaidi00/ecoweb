/**
 * Cascade simulation — remove a node and compute the staggered ripple of
 * structural effects through the web. Pure TypeScript, no rendering imports.
 *
 * The model is deliberately honest about what it is: structural dependency
 * (who loses food, who is released from predation), never population
 * prediction. Real predators can switch prey; this model deliberately
 * doesn't.
 *
 * Diet accounting: a consumer's intake is the sum of its incoming edge
 * shares. Weighted edges contribute their measured diet share (0–1).
 * Qualitative edges are unquantified, so they split whatever intake the
 * weighted edges leave unaccounted for, in equal shares:
 *   - qualitative-only consumer → each edge is 1/n of its diet;
 *   - mixed consumer → weighted edges keep their measured shares, the
 *     qualitative edges share the remainder (1 − Σweights) equally;
 *   - if measured weights already cover the whole diet, unquantified links
 *     contribute 0 — the data gives them no measurable share, and we never
 *     invent one.
 * Loss percentages are computed against the documented intake and rounded
 * to 6 decimals before thresholding, so the 30%/70% boundaries behave
 * exactly as specified despite floating-point drift.
 */

import type { EcosystemWeb } from '@foodweb/schema'

/** Loss-driven states plus the release effect, matching the design tokens. */
export type CascadeNodeState = 'stressed' | 'severe' | 'collapsed' | 'released'

export type CascadeLossState = Exclude<CascadeNodeState, 'released'>

export interface CascadeThresholds {
  /** Loss ≥ this share (and ≤ collapsed) is `severe`; below it, `stressed`. */
  severe: number
  /** Loss strictly above this share is `collapsed` (secondary extinction). */
  collapsed: number
}

/** Spec thresholds: <30% stressed, 30–70% severe, >70% collapsed. */
export const DEFAULT_CASCADE_THRESHOLDS: CascadeThresholds = {
  severe: 0.3,
  collapsed: 0.7,
}

/** Defensive cap on wave propagation; real cascades terminate far earlier. */
export const MAX_CASCADE_WAVES = 10

/** Shown for the entire cascade, and as the closing summary line. */
export const CASCADE_DISCLAIMER =
  'This models structural dependency (who loses food / who is released), not population prediction. Real predators can switch prey; this model deliberately doesn’t.'

export interface CascadeEffect {
  nodeId: string
  /** One state per entry; a node both released and stressed gets two entries. */
  state: CascadeNodeState
  /** Cumulative documented diet share lost (0–1); null for released effects. */
  dietLostPct: number | null
  /** Plain-language driver, e.g. "Salmon was removed" / "Pacific herring collapsed". */
  cause: string
}

export interface CascadeWave {
  /** 1-based: wave 1 is the direct effect of the removal. */
  index: number
  effects: CascadeEffect[]
}

/** One plain-language summary line, tagged for wave-synced streaming. */
export interface CascadeSummaryLine {
  /** Wave the line belongs to; -1 for the closing model-limitations line. */
  wave: number
  nodeId: string | null
  state: CascadeNodeState | null
  text: string
}

export interface CascadeFinalState {
  /** Highest loss state the node reached, or null if it was only released. */
  loss: CascadeLossState | null
  released: boolean
}

export interface CascadeResult {
  removedId: string
  waves: CascadeWave[]
  /** End state per affected node (excludes the removed node itself). */
  finalStates: Record<string, CascadeFinalState>
  /** Pre-generated plain-language lines, in display order. */
  summary: CascadeSummaryLine[]
}

interface DietEdge {
  prey: string
  /** Normalized share of the consumer's documented intake (0–1). */
  share: number
}

const SEVERITY: Record<CascadeLossState, number> = { stressed: 0, severe: 1, collapsed: 2 }

function round6(x: number): number {
  return Math.round(x * 1e6) / 1e6
}

/** A consumer's incoming edges as normalized shares of its documented intake. */
function dietEdges(web: EcosystemWeb, consumerId: string): DietEdge[] {
  const incoming = web.edges.filter((e) => e.predator === consumerId)
  let weightedSum = 0
  let qualitativeCount = 0
  for (const e of incoming) {
    if ('qualitative' in e) qualitativeCount++
    else weightedSum += e.weight
  }
  const qualitativeTotal =
    qualitativeCount > 0 ? Math.max(0, 1 - weightedSum) : 0
  const total = weightedSum + qualitativeTotal
  if (total <= 0) return []
  return incoming.map((e) => ({
    prey: e.prey,
    share:
      'qualitative' in e
        ? qualitativeTotal / qualitativeCount / total
        : e.weight / total,
  }))
}

function classify(lossPct: number, thresholds: CascadeThresholds): CascadeLossState | null {
  const pct = round6(lossPct)
  if (pct > thresholds.collapsed) return 'collapsed'
  if (pct >= thresholds.severe) return 'severe'
  if (pct > 0) return 'stressed'
  return null
}

function summaryText(
  name: string,
  state: CascadeNodeState,
  dietLostPct: number | null,
): string {
  // Sub-1% losses are real but must not read as "lost 0%".
  const pct =
    dietLostPct === null
      ? ''
      : Math.round(dietLostPct * 100) === 0
        ? 'less than 1%'
        : `${Math.round(dietLostPct * 100)}%`
  switch (state) {
    case 'stressed':
      return `${name} lost ${pct} of its food supply.`
    case 'severe':
      return `${name} lost ${pct} of its food supply — severe stress.`
    case 'collapsed':
      return `${name} collapsed: lost ${pct} of its food supply → secondary extinction.`
    case 'released':
      return `${name}, released from predation, would likely increase.`
  }
}

/**
 * Simulate removing `removedId` from the web.
 *
 * Wave 1 is the direct effect of the removal. Any `collapsed` node is then
 * treated as removed for subsequent waves: its consumers' losses are
 * recomputed (cumulatively — states only escalate) until a wave produces no
 * new collapses. Prey of each removed/collapsed node are `released` (once).
 * The gone set grows monotonically, so cyclic edges (detritus loops) cannot
 * loop forever; MAX_CASCADE_WAVES is a defensive backstop.
 */
export function simulateRemoval(
  web: EcosystemWeb,
  removedId: string,
  thresholds: CascadeThresholds = DEFAULT_CASCADE_THRESHOLDS,
): CascadeResult {
  const nodeById = new Map(web.nodes.map((n) => [n.id, n]))
  const removed = nodeById.get(removedId)
  if (!removed) throw new Error(`simulateRemoval: unknown node "${removedId}"`)

  const nameOf = (id: string) => nodeById.get(id)?.displayName ?? id
  const diets = new Map(web.nodes.map((n) => [n.id, dietEdges(web, n.id)]))

  const lostPct = (id: string, gone: ReadonlySet<string>): number => {
    let lost = 0
    for (const edge of diets.get(id) ?? []) {
      if (gone.has(edge.prey)) lost += edge.share
    }
    return lost
  }

  const gone = new Set<string>([removedId])
  const reportedLoss = new Map<string, CascadeLossState>()
  const releasedDone = new Set<string>()
  const finalStates: Record<string, CascadeFinalState> = {}
  const waves: CascadeWave[] = []
  const summary: CascadeSummaryLine[] = []

  const finalFor = (id: string): CascadeFinalState =>
    (finalStates[id] ??= { loss: null, released: false })

  // Wave 1 is driven by the removal; later waves by the previous collapses.
  let drivers: { ids: string[]; cause: string } = {
    ids: [removedId],
    cause: `${removed.displayName} was removed`,
  }

  for (let index = 1; index <= MAX_CASCADE_WAVES; index++) {
    const effects: CascadeEffect[] = []
    const newCollapses: string[] = []

    for (const node of web.nodes) {
      if (gone.has(node.id)) continue
      const state = classify(lostPct(node.id, gone), thresholds)
      if (!state) continue
      // States only escalate: skip if this wave wouldn't advance the node.
      const previous = reportedLoss.get(node.id)
      if (previous && SEVERITY[state] <= SEVERITY[previous]) continue
      reportedLoss.set(node.id, state)
      finalFor(node.id).loss = state
      effects.push({
        nodeId: node.id,
        state,
        dietLostPct: round6(lostPct(node.id, gone)),
        cause: drivers.cause,
      })
      if (state === 'collapsed') newCollapses.push(node.id)
    }

    for (const driverId of drivers.ids) {
      for (const edge of web.edges) {
        if (edge.predator !== driverId) continue
        const preyId = edge.prey
        if (gone.has(preyId) || releasedDone.has(preyId)) continue
        releasedDone.add(preyId)
        finalFor(preyId).released = true
        effects.push({
          nodeId: preyId,
          state: 'released',
          dietLostPct: null,
          cause: drivers.cause,
        })
      }
    }

    if (effects.length === 0) break

    effects.sort((a, b) => {
      const sa = a.state === 'released' ? -1 : SEVERITY[a.state]
      const sb = b.state === 'released' ? -1 : SEVERITY[b.state]
      return sb - sa || a.nodeId.localeCompare(b.nodeId)
    })
    waves.push({ index, effects })
    for (const effect of effects) {
      summary.push({
        wave: index,
        nodeId: effect.nodeId,
        state: effect.state,
        text: summaryText(nameOf(effect.nodeId), effect.state, effect.dietLostPct),
      })
    }

    for (const id of newCollapses) gone.add(id)
    if (newCollapses.length === 0) break
    drivers = {
      ids: newCollapses,
      cause:
        newCollapses.length === 1
          ? `${nameOf(newCollapses[0])} collapsed`
          : `${newCollapses.map(nameOf).join(' and ')} collapsed`,
    }
  }

  summary.push({ wave: -1, nodeId: null, state: null, text: CASCADE_DISCLAIMER })

  return { removedId, waves, finalStates, summary }
}
