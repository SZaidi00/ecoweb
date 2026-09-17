/**
 * Synthetic web generator for the hidden perf harness (#/debug/perf).
 *
 * Produces a schema-shaped EcosystemWeb at the 200-node / 400-edge perf
 * budget (well past the curated 25-node ceiling) with a fixed PRNG seed, so
 * benchmark runs are comparable across machines and reloads.
 */

import type { EcosystemWeb, FunctionalRole, WebEdge, WebNode } from '@foodweb/schema'

/** mulberry32 — small deterministic PRNG. */
function rng(seed: number): () => number {
  let state = seed
  return () => {
    state |= 0
    state = (state + 0x6d2b79f5) | 0
    let t = Math.imul(state ^ (state >>> 15), 1 | state)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const ROLE_BY_BAND: FunctionalRole[] = [
  'producer',
  'primary-consumer',
  'intermediate-consumer',
  'intermediate-consumer',
  'top-consumer',
]

export function synthesizeWeb(nodeCount = 200, edgeCount = 400, seed = 42): EcosystemWeb {
  const random = rng(seed)
  const nodes: WebNode[] = []
  const bandOf: number[] = []

  for (let i = 0; i < nodeCount; i++) {
    const band = 1 + Math.floor(random() * 5)
    bandOf.push(band)
    // Each band covers a 0.8 slice of the canonical 1–5 trophic range.
    const trophicLevel = Math.min(5, 1 + (band - 1) * 0.8 + random() * 0.7)
    nodes.push({
      id: `node-${i}`,
      displayName: `Synthetic node ${i}`,
      kind: 'functional-group',
      trophicLevel: Math.round(trophicLevel * 100) / 100,
      functionalRole: ROLE_BY_BAND[band - 1],
      description: 'Synthetic node for renderer benchmarking. Not ecological data.',
      layout: { x: random() * 100, y: trophicLevel * 20 },
    })
  }

  const edges: WebEdge[] = []
  const seen = new Set<string>()
  let guard = 0
  while (edges.length < edgeCount && guard < edgeCount * 20) {
    guard++
    const preyIdx = Math.floor(random() * nodeCount)
    // Predator must sit in the same or a higher band to keep the flow upward.
    const minBand = bandOf[preyIdx]
    const candidates = nodes
      .map((_, idx) => idx)
      .filter((idx) => bandOf[idx] >= minBand && idx !== preyIdx)
    if (candidates.length === 0) continue
    const predatorIdx = candidates[Math.floor(random() * candidates.length)]
    const key = `${preyIdx}->${predatorIdx}`
    if (seen.has(key)) continue
    seen.add(key)
    edges.push(
      random() < 0.15
        ? { prey: nodes[preyIdx].id, predator: nodes[predatorIdx].id, qualitative: true }
        : {
            prey: nodes[preyIdx].id,
            predator: nodes[predatorIdx].id,
            weight: Math.round((0.05 + random() * 0.85) * 1000) / 1000,
          },
    )
  }

  return {
    meta: {
      id: 'synthetic-perf',
      name: 'Synthetic perf web',
      location: 'Nowhere',
      biome: 'marine',
      lat: 0,
      lng: 0,
      provenance: 'composite',
      citations: ['Synthetic data — not ecological.'],
      sourceUrl: 'https://example.com',
      licenseNote: 'Synthetic benchmark data.',
      curator: 'perf harness',
      dateCurated: '2026-01-01',
    },
    nodes,
    edges,
  }
}
