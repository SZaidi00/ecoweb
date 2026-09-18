/**
 * Focus-view queries — pure TypeScript, no rendering imports.
 *
 * Everything the species focus view needs to know about a web: the 1-hop
 * visible set, per-node connection counts (the chips), the transitive prey
 * closure, and the collapsed dependency-chain view that traces a node down
 * to the producers it ultimately depends on.
 */

import type { EcosystemWeb, WebEdge } from '@foodweb/schema'

export interface Neighbor {
  id: string
  /** Diet share 0–1, or null for qualitative edges. */
  weight: number | null
}

export interface NeighborList {
  /** Nodes this node eats. */
  prey: Neighbor[]
  /** Nodes that eat this node. */
  predators: Neighbor[]
}

function edgeWeight(edge: WebEdge): number | null {
  return 'qualitative' in edge ? null : edge.weight
}

function byWeightDescThenId(a: Neighbor, b: Neighbor): number {
  return (b.weight ?? -1) - (a.weight ?? -1) || a.id.localeCompare(b.id)
}

/** Direct neighbors, sorted by descending diet share (qualitative last). */
export function sortedNeighbors(web: EcosystemWeb, id: string): NeighborList {
  const prey: Neighbor[] = []
  const predators: Neighbor[] = []
  for (const edge of web.edges) {
    if (edge.predator === id) prey.push({ id: edge.prey, weight: edgeWeight(edge) })
    if (edge.prey === id) predators.push({ id: edge.predator, weight: edgeWeight(edge) })
  }
  prey.sort(byWeightDescThenId)
  predators.sort(byWeightDescThenId)
  return { prey, predators }
}

/** Visible set for focus mode: the focused node plus its direct prey and predators. */
export function oneHopVisibleSet(web: EcosystemWeb, id: string): Set<string> {
  const visible = new Set<string>([id])
  const { prey, predators } = sortedNeighbors(web, id)
  for (const n of prey) visible.add(n.id)
  for (const n of predators) visible.add(n.id)
  return visible
}

/** Total link count in the full web — what the connection-count chips show. */
export function connectionCount(web: EcosystemWeb, id: string): number {
  let count = 0
  for (const edge of web.edges) {
    if (edge.prey === id || edge.predator === id) count++
  }
  return count
}

/** The focused node plus everything it eats, transitively, down to producers. */
export function transitivePreyClosure(web: EcosystemWeb, id: string): Set<string> {
  const closure = new Set<string>()
  const stack = [id]
  while (stack.length > 0) {
    const current = stack.pop()!
    if (closure.has(current)) continue
    closure.add(current)
    for (const edge of web.edges) {
      if (edge.predator === current) stack.push(edge.prey)
    }
  }
  return closure
}

// --------------------------------------------------------- dependency chain

/** One step in a chain path: a rendered node, or a collapsed run of intermediates. */
export type ChainSegment =
  | { type: 'node'; id: string }
  | { type: 'collapsed'; ids: string[] }

/** A top-to-bottom path: focused node first, a producer/detritus node last. */
export interface ChainPath {
  segments: ChainSegment[]
}

export interface DependencyChain {
  focusId: string
  paths: ChainPath[]
  /** Distinct nodes rendered across all paths — never exceeds the budget. */
  nodeCount: number
  /** Paths left out to stay within the node budget. */
  omittedPaths: number
}

/**
 * Hard cap on rendered chain nodes ("never more than ~10 chain nodes").
 * Counts distinct node segments across all paths; collapsed segments are free.
 */
export const CHAIN_NODE_BUDGET = 10

/** Enumerate every downward path from `id` to a node with no prey. Cycle-safe. */
function rawPaths(web: EcosystemWeb, id: string): string[][] {
  const preyOf = new Map<string, Neighbor[]>()
  for (const node of web.nodes) preyOf.set(node.id, [])
  for (const edge of web.edges) {
    preyOf.get(edge.predator)?.push({ id: edge.prey, weight: edgeWeight(edge) })
  }
  for (const list of preyOf.values()) list.sort(byWeightDescThenId)

  const paths: string[][] = []
  const walk = (current: string, trail: string[], onPath: Set<string>): void => {
    const next = (preyOf.get(current) ?? []).filter((n) => !onPath.has(n.id))
    if (next.length === 0) {
      // Terminal: a producer/detritus node, or a dead end created by a cycle.
      paths.push(trail)
      return
    }
    for (const n of next) {
      onPath.add(n.id)
      walk(n.id, [...trail, n.id], onPath)
      onPath.delete(n.id)
    }
  }
  walk(id, [id], new Set([id]))
  return paths
}

/**
 * Collapse one raw path into renderable segments. The focused node, its
 * direct prey and the terminal producer always render; a run of more than
 * one intermediate beyond the direct prey collapses into a single
 * "via N intermediate species" segment.
 */
function collapsePath(path: string[]): ChainSegment[] {
  const intermediates = path.slice(1, -1)
  const segments: ChainSegment[] = [{ type: 'node', id: path[0] }]
  if (intermediates.length <= 2) {
    for (const id of intermediates) segments.push({ type: 'node', id })
  } else {
    segments.push({ type: 'node', id: intermediates[0] })
    segments.push({ type: 'collapsed', ids: intermediates.slice(1) })
  }
  if (path.length > 1) segments.push({ type: 'node', id: path[path.length - 1] })
  return segments
}

function newNodeIds(segments: ChainSegment[], used: Set<string>): string[] {
  const fresh: string[] = []
  for (const segment of segments) {
    if (segment.type === 'node' && !used.has(segment.id) && !fresh.includes(segment.id)) {
      fresh.push(segment.id)
    }
  }
  return fresh
}

/**
 * Build the dependency-chain view for a focused node: every path down to
 * producers, heaviest diet share first, collapsed where paths run long, and
 * truncated to the node budget (omitted paths are reported, not rendered).
 */
export function buildDependencyChains(
  web: EcosystemWeb,
  id: string,
  maxNodes: number = CHAIN_NODE_BUDGET,
): DependencyChain {
  const used = new Set<string>([id])
  const paths: ChainPath[] = []
  let omittedPaths = 0

  for (const raw of rawPaths(web, id)) {
    const segments = collapsePath(raw)
    if (used.size + newNodeIds(segments, used).length <= maxNodes) {
      paths.push({ segments })
    } else {
      // Over budget: fall back to a fully collapsed path (focus → via N → producer).
      const fallback: ChainSegment[] =
        raw.length > 2
          ? [
              { type: 'node', id: raw[0] },
              { type: 'collapsed', ids: raw.slice(1, -1) },
              { type: 'node', id: raw[raw.length - 1] },
            ]
          : segments
      if (used.size + newNodeIds(fallback, used).length <= maxNodes) {
        paths.push({ segments: fallback })
      } else {
        omittedPaths++
        continue
      }
    }
    for (const segment of paths[paths.length - 1].segments) {
      if (segment.type === 'node') used.add(segment.id)
    }
  }

  return { focusId: id, paths, nodeCount: used.size, omittedPaths }
}
