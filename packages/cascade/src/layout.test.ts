import { describe, expect, it } from 'vitest'

import type { EcosystemWeb, WebNode } from '@foodweb/schema'

import { bandForLevel, computeLayout, TROPHIC_BAND_COUNT, WORLD_HEIGHT } from './index'

function makeNode(id: string, trophicLevel: number, hintX: number): WebNode {
  return {
    id,
    displayName: id,
    kind: 'species',
    trophicLevel,
    functionalRole: 'producer',
    description: `${id} test node`,
    layout: { x: hintX, y: trophicLevel * 20 },
  }
}

function fixture(): EcosystemWeb {
  return {
    meta: {
      id: 'test-web',
      name: 'Test Web',
      location: 'Nowhere',
      biome: 'marine',
      lat: 0,
      lng: 0,
      provenance: 'composite',
      citations: ['Test citation'],
      sourceUrl: 'https://example.com',
      licenseNote: 'Test',
      curator: 'Test',
      dateCurated: '2026-01-01',
    },
    nodes: [
      makeNode('grass', 1.0, 20),
      makeNode('algae', 1.0, 60),
      makeNode('bug', 2.0, 10),
      makeNode('snail', 2.2, 80),
      makeNode('fish', 3.0, 30),
      makeNode('crab', 3.2, 70),
      makeNode('bird', 4.4, 50),
    ],
    edges: [
      { prey: 'grass', predator: 'bug', weight: 0.6 },
      { prey: 'algae', predator: 'snail', weight: 0.9 },
      { prey: 'bug', predator: 'fish', weight: 0.5 },
      { prey: 'snail', predator: 'crab', weight: 0.5 },
      { prey: 'fish', predator: 'bird', weight: 0.4 },
      { prey: 'crab', predator: 'bird', qualitative: true },
    ],
  }
}

describe('bandForLevel', () => {
  it('quantizes the 1–5 trophic range into five equal bands', () => {
    expect(bandForLevel(1.0)).toBe(1)
    expect(bandForLevel(1.79)).toBe(1)
    expect(bandForLevel(1.8)).toBe(2)
    expect(bandForLevel(2.5)).toBe(2)
    expect(bandForLevel(2.6)).toBe(3)
    expect(bandForLevel(3.4)).toBe(4)
    expect(bandForLevel(4.19)).toBe(4)
    expect(bandForLevel(4.2)).toBe(5)
    expect(bandForLevel(5.0)).toBe(5)
  })

  it('clamps out-of-range levels', () => {
    expect(bandForLevel(0.5)).toBe(1)
    expect(bandForLevel(9)).toBe(TROPHIC_BAND_COUNT)
  })
})

describe('computeLayout', () => {
  it('is deterministic: identical input yields identical output', () => {
    const a = computeLayout(fixture())
    const b = computeLayout(fixture())
    expect(a).toEqual(b)
  })

  it('orders bands monotonically along every edge (predator never below prey)', () => {
    const layout = computeLayout(fixture())
    const bandOf = new Map(layout.nodes.map((node) => [node.id, node.band]))
    for (const edge of layout.edges) {
      expect(bandOf.get(edge.predator)!).toBeGreaterThanOrEqual(bandOf.get(edge.prey)!)
    }
  })

  it('places producers below apex consumers in world space (y grows downward)', () => {
    const layout = computeLayout(fixture())
    const grass = layout.nodes.find((node) => node.id === 'grass')!
    const bird = layout.nodes.find((node) => node.id === 'bird')!
    expect(grass.y).toBeGreaterThan(bird.y)
  })

  it('keeps every node inside the world bounds', () => {
    const layout = computeLayout(fixture())
    for (const node of layout.nodes) {
      expect(node.x).toBeGreaterThan(0)
      expect(node.x).toBeLessThan(layout.width)
      expect(node.y).toBeGreaterThan(0)
      expect(node.y).toBeLessThan(WORLD_HEIGHT)
    }
  })

  it('spreads nodes within a band with a legible minimum gap', () => {
    const layout = computeLayout(fixture())
    const byBand = new Map<number, number[]>()
    for (const node of layout.nodes) {
      byBand.set(node.band, [...(byBand.get(node.band) ?? []), node.x])
    }
    for (const xs of byBand.values()) {
      xs.sort((a, b) => a - b)
      for (let i = 1; i < xs.length; i++) {
        expect(xs[i] - xs[i - 1]).toBeGreaterThanOrEqual(60)
      }
    }
  })

  it('reduces edge crossings relative to the naive hint order', () => {
    // Crossed hints: a (left) eats top-right, b (right) eats top-left.
    const web: EcosystemWeb = {
      ...fixture(),
      nodes: [
        makeNode('a', 1.0, 10),
        makeNode('b', 1.0, 90),
        makeNode('a-eater', 2.0, 90),
        makeNode('b-eater', 2.0, 10),
      ],
      edges: [
        { prey: 'a', predator: 'a-eater', weight: 1 },
        { prey: 'b', predator: 'b-eater', weight: 1 },
      ],
    }
    const layout = computeLayout(web)
    const xOf = (id: string) => layout.nodes.find((node) => node.id === id)!.x
    // Barycenter sweep should swap the upper band so eaters sit above prey.
    expect(xOf('a-eater')).toBeLessThan(xOf('b-eater'))
    expect(xOf('a')).toBeLessThan(xOf('b'))
  })

  it('marks qualitative edges and preserves weights', () => {
    const layout = computeLayout(fixture())
    const qualitative = layout.edges.find((edge) => edge.prey === 'crab')!
    expect(qualitative.qualitative).toBe(true)
    expect(qualitative.weight).toBeNull()
    const weighted = layout.edges.find((edge) => edge.prey === 'grass')!
    expect(weighted.qualitative).toBe(false)
    expect(weighted.weight).toBe(0.6)
  })
})
