/**
 * Deterministic trophic-level layout for one ecosystem web.
 *
 * Pure TypeScript — no React, no Pixi. Same input produces the same layout
 * on every load (ties are broken by the Phase 1 layout hints, then by node
 * id; there is no randomness to seed).
 *
 * Strategy:
 *  1. Assign each node to one of five trophic bands by quantizing
 *     `trophicLevel` into equal fifths of the canonical 1–5 range.
 *  2. Order nodes within each band with barycenter sweeps (Sugiyama-style)
 *     to reduce edge crossings, seeded from the curated `layout` hints.
 *  3. Assign evenly spaced x positions per band; y is the band center.
 */

import type { EcosystemWeb, WebEdge, WebNode } from '@foodweb/schema'

export const TROPHIC_BAND_COUNT = 5

/** Lane labels, bottom (band 1) to top (band 5). Rendered in small caps. */
export const TROPHIC_BAND_LABELS: readonly string[] = [
  'Producers & detritus',
  'Primary consumers',
  'Mid-level consumers',
  'Upper-level consumers',
  'Apex predators',
]

/** Fixed world-space geometry. The view fits this world into the viewport. */
export const WORLD = {
  width: 1000,
  bandHeight: 122,
  padTop: 64,
  padBottom: 72,
  marginX: 72,
} as const

export const WORLD_HEIGHT = WORLD.padTop + TROPHIC_BAND_COUNT * WORLD.bandHeight + WORLD.padBottom

/** Canonical trophic levels span 1–5; each band covers a 0.8-level slice. */
export function bandForLevel(trophicLevel: number): number {
  const band = 1 + Math.floor(((trophicLevel - 1) / 4) * TROPHIC_BAND_COUNT)
  return Math.min(TROPHIC_BAND_COUNT, Math.max(1, band))
}

/** World-space y of a band's center line. Y grows downward; band 1 is at the bottom. */
export function bandCenterY(band: number): number {
  return WORLD_HEIGHT - WORLD.padBottom - (band - 1) * WORLD.bandHeight - WORLD.bandHeight / 2
}

export interface LayoutNode {
  id: string
  /** Trophic band, 1 (producers) to 5 (apex). */
  band: number
  /** World-space center. */
  x: number
  y: number
  node: WebNode
}

export interface LayoutEdge {
  prey: string
  predator: string
  /** Diet share 0–1, or null for qualitative edges. */
  weight: number | null
  qualitative: boolean
}

export interface GraphLayout {
  width: number
  height: number
  nodes: LayoutNode[]
  edges: LayoutEdge[]
}

/** Barycenter sweeps: enough alternating passes for a ≤25-node web to settle. */
const SWEEPS = 24

export function computeLayout(web: EcosystemWeb): GraphLayout {
  const bands: WebNode[][] = Array.from({ length: TROPHIC_BAND_COUNT }, () => [])
  for (const node of web.nodes) bands[bandForLevel(node.trophicLevel) - 1].push(node)

  // Initial order within each band: curated hint x, ties by id — deterministic.
  for (const band of bands) {
    band.sort((a, b) => a.layout.x - b.layout.x || a.id.localeCompare(b.id))
  }

  const neighbors = new Map<string, Set<string>>()
  for (const node of web.nodes) neighbors.set(node.id, new Set())
  for (const edge of web.edges) {
    neighbors.get(edge.prey)?.add(edge.predator)
    neighbors.get(edge.predator)?.add(edge.prey)
  }

  // Rank positions: rank of node id within its band's current order.
  const rankOf = new Map<string, number>()
  const setRanks = () => {
    for (const band of bands) band.forEach((node, i) => rankOf.set(node.id, i))
  }
  setRanks()

  const barycenter = (node: WebNode, adjacentBand: WebNode[]): number | null => {
    const inBand = new Set(adjacentBand.map((n) => n.id))
    let sum = 0
    let count = 0
    for (const other of neighbors.get(node.id) ?? []) {
      if (inBand.has(other)) {
        sum += rankOf.get(other) ?? 0
        count++
      }
    }
    return count === 0 ? null : sum / count
  }

  const reorder = (band: WebNode[], adjacent: WebNode[]) => {
    const previous = new Map(band.map((node, i) => [node.id, i]))
    const scored = band.map((node) => ({
      node,
      key: barycenter(node, adjacent) ?? previous.get(node.id) ?? 0,
    }))
    scored.sort(
      (a, b) => a.key - b.key || (previous.get(a.node.id) ?? 0) - (previous.get(b.node.id) ?? 0),
    )
    band.splice(0, band.length, ...scored.map((s) => s.node))
    setRanks()
  }

  for (let sweep = 0; sweep < SWEEPS; sweep++) {
    if (sweep % 2 === 0) {
      for (let b = 1; b < TROPHIC_BAND_COUNT; b++) reorder(bands[b], bands[b - 1])
    } else {
      for (let b = TROPHIC_BAND_COUNT - 2; b >= 0; b--) reorder(bands[b], bands[b + 1])
    }
  }

  const nodes: LayoutNode[] = []
  const usableWidth = WORLD.width - 2 * WORLD.marginX
  for (let b = 0; b < TROPHIC_BAND_COUNT; b++) {
    const band = bands[b]
    const y = bandCenterY(b + 1)
    band.forEach((node, i) => {
      nodes.push({
        id: node.id,
        band: b + 1,
        x: WORLD.marginX + (usableWidth * (i + 1)) / (band.length + 1),
        y,
        node,
      })
    })
  }

  const edges: LayoutEdge[] = web.edges.map((edge: WebEdge) =>
    'qualitative' in edge
      ? { prey: edge.prey, predator: edge.predator, weight: null, qualitative: true }
      : { prey: edge.prey, predator: edge.predator, weight: edge.weight, qualitative: false },
  )

  return { width: WORLD.width, height: WORLD_HEIGHT, nodes, edges }
}
