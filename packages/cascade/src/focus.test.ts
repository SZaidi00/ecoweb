import { describe, expect, it } from 'vitest'

import type { EcosystemWeb, WebNode } from '@foodweb/schema'

import {
  buildDependencyChains,
  CHAIN_NODE_BUDGET,
  connectionCount,
  oneHopVisibleSet,
  sortedNeighbors,
  transitivePreyClosure,
} from './focus'

/**
 * Test web shaped like a small real one:
 *
 *   eagle ──▶ (eats) fish ──▶ (eats) bug ──▶ (eats) algae
 *     │                     ╲──▶ (eats) grass
 *     └──▶ (eats) snail ──▶ (eats) detritus
 */
function node(id: string, trophicLevel: number): WebNode {
  return {
    id,
    displayName: id,
    kind: 'species',
    trophicLevel,
    functionalRole: trophicLevel === 1 ? 'producer' : 'intermediate-consumer',
    description: 'test',
    layout: { x: 50, y: 50 },
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
      node('algae', 1),
      node('grass', 1),
      node('detritus', 1),
      node('bug', 2),
      node('snail', 2),
      node('fish', 3),
      node('eagle', 4),
    ],
    edges: [
      { prey: 'algae', predator: 'bug', weight: 0.7 },
      { prey: 'detritus', predator: 'bug', weight: 0.3 },
      { prey: 'detritus', predator: 'snail', weight: 1 },
      { prey: 'bug', predator: 'fish', weight: 0.6 },
      { prey: 'grass', predator: 'fish', weight: 0.4 },
      { prey: 'fish', predator: 'eagle', weight: 0.8 },
      { prey: 'snail', predator: 'eagle', weight: 0.2 },
    ],
  }
}

describe('oneHopVisibleSet', () => {
  it('contains exactly the focused node plus direct prey and predators', () => {
    const visible = oneHopVisibleSet(fixture(), 'fish')
    expect(visible).toEqual(new Set(['fish', 'bug', 'grass', 'eagle']))
  })

  it('is just the node itself when it has no links', () => {
    expect(oneHopVisibleSet(fixture(), 'missing')).toEqual(new Set(['missing']))
  })
})

describe('connectionCount', () => {
  it('counts every edge touching the node, both directions', () => {
    const web = fixture()
    expect(connectionCount(web, 'fish')).toBe(3)
    expect(connectionCount(web, 'detritus')).toBe(2)
    expect(connectionCount(web, 'eagle')).toBe(2)
    expect(connectionCount(web, 'algae')).toBe(1)
    expect(connectionCount(web, 'missing')).toBe(0)
  })
})

describe('sortedNeighbors', () => {
  it('sorts prey by descending diet share, qualitative links last', () => {
    const web = fixture()
    web.edges.push({ prey: 'grass', predator: 'bug', qualitative: true })
    const { prey } = sortedNeighbors(web, 'bug')
    expect(prey.map((n) => n.id)).toEqual(['algae', 'detritus', 'grass'])
    expect(prey[2].weight).toBeNull()
  })

  it('splits prey and predators by edge direction', () => {
    const { prey, predators } = sortedNeighbors(fixture(), 'fish')
    expect(prey.map((n) => n.id)).toEqual(['bug', 'grass'])
    expect(predators.map((n) => n.id)).toEqual(['eagle'])
  })
})

describe('transitivePreyClosure', () => {
  it('reaches all the way down to producers', () => {
    expect(transitivePreyClosure(fixture(), 'eagle')).toEqual(
      new Set(['eagle', 'fish', 'snail', 'bug', 'algae', 'grass', 'detritus']),
    )
  })

  it('is cycle-safe', () => {
    const web = fixture()
    web.edges.push({ prey: 'eagle', predator: 'algae', weight: 0.01 })
    const closure = transitivePreyClosure(web, 'eagle')
    expect(closure.has('eagle')).toBe(true)
    expect(closure.size).toBe(7)
  })
})

describe('buildDependencyChains', () => {
  it('traces every path from the focused node down to producers', () => {
    const chain = buildDependencyChains(fixture(), 'eagle')
    expect(chain.focusId).toBe('eagle')
    expect(chain.paths).toHaveLength(4) // via fish×bug/grass and via snail
    for (const path of chain.paths) {
      const first = path.segments[0]
      const last = path.segments[path.segments.length - 1]
      expect(first).toEqual({ type: 'node', id: 'eagle' })
      expect(last.type).toBe('node')
      if (last.type === 'node') {
        expect(['algae', 'grass', 'detritus']).toContain(last.id)
      }
    }
  })

  it('keeps direct prey and producers visible, collapsing runs of >1 intermediate', () => {
    const web: EcosystemWeb = {
      ...fixture(),
      nodes: [
        node('producer', 1),
        node('a', 2),
        node('b', 3),
        node('c', 4),
        node('top', 5),
      ],
      edges: [
        { prey: 'producer', predator: 'a', weight: 1 },
        { prey: 'a', predator: 'b', weight: 1 },
        { prey: 'b', predator: 'c', weight: 1 },
        { prey: 'c', predator: 'top', weight: 1 },
      ],
    }
    const chain = buildDependencyChains(web, 'top')
    expect(chain.paths).toHaveLength(1)
    expect(chain.paths[0].segments).toEqual([
      { type: 'node', id: 'top' },
      { type: 'node', id: 'c' }, // direct prey always renders
      { type: 'collapsed', ids: ['b', 'a'] }, // run of 2 further intermediates
      { type: 'node', id: 'producer' },
    ])
  })

  it('renders short paths without any collapsing', () => {
    const chain = buildDependencyChains(fixture(), 'fish')
    const toAlgae = chain.paths.find((path) =>
      path.segments.some((s) => s.type === 'node' && s.id === 'algae'),
    )!
    expect(toAlgae.segments).toEqual([
      { type: 'node', id: 'fish' },
      { type: 'node', id: 'bug' },
      { type: 'node', id: 'algae' },
    ])
  })

  it('never renders more nodes than the budget', () => {
    // Fan-out web: one top consumer eating five chains of three.
    const nodes = [node('top', 5)]
    const edges = []
    for (let i = 0; i < 5; i++) {
      nodes.push(node(`mid${i}`, 4), node(`low${i}`, 3), node(`deep${i}`, 2), node(`base${i}`, 1))
      edges.push(
        { prey: `mid${i}`, predator: 'top', weight: 0.2 },
        { prey: `low${i}`, predator: `mid${i}`, weight: 1 },
        { prey: `deep${i}`, predator: `low${i}`, weight: 1 },
        { prey: `base${i}`, predator: `deep${i}`, weight: 1 },
      )
    }
    const chain = buildDependencyChains({ ...fixture(), nodes, edges }, 'top')
    expect(chain.nodeCount).toBeLessThanOrEqual(CHAIN_NODE_BUDGET)
    const rendered = new Set<string>()
    for (const path of chain.paths) {
      for (const segment of path.segments) {
        if (segment.type === 'node') rendered.add(segment.id)
      }
    }
    expect(rendered.size).toBe(chain.nodeCount)
  })

  it('collapses further rather than exceeding the budget', () => {
    const chain = buildDependencyChains(fixture(), 'eagle', 4)
    expect(chain.nodeCount).toBeLessThanOrEqual(4)
    // Every rendered path still reaches a producer.
    for (const path of chain.paths) {
      const last = path.segments[path.segments.length - 1]
      expect(last.type).toBe('node')
    }
  })
})
