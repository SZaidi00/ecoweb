import { describe, expect, it, vi } from 'vitest'

import type { EcosystemWeb } from '@foodweb/schema'

import { GraphModel } from './index'

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
      {
        id: 'prey-a',
        displayName: 'Prey A',
        kind: 'species',
        trophicLevel: 1,
        functionalRole: 'producer',
        description: 'test',
        layout: { x: 50, y: 5 },
      },
      {
        id: 'pred-b',
        displayName: 'Pred B',
        kind: 'species',
        trophicLevel: 2,
        functionalRole: 'primary-consumer',
        description: 'test',
        layout: { x: 50, y: 40 },
      },
    ],
    edges: [{ prey: 'prey-a', predator: 'pred-b', weight: 1 }],
  }
}

describe('GraphModel', () => {
  it('computes a layout on construction', () => {
    const model = new GraphModel(fixture())
    expect(model.layout.nodes).toHaveLength(2)
    expect(model.layout.edges).toHaveLength(1)
  })

  it('emits change events on hover / select / keyboard focus, without redundant emits', () => {
    const model = new GraphModel(fixture())
    const listener = vi.fn()
    const unsubscribe = model.subscribe(listener)

    model.setHovered('prey-a')
    model.setHovered('prey-a') // no-op: same value
    model.select('pred-b')
    model.setKeyboardFocus('prey-a')
    expect(listener).toHaveBeenCalledTimes(3)
    expect(model.getHoveredId()).toBe('prey-a')
    expect(model.getSelectedId()).toBe('pred-b')
    expect(model.getKeyboardFocusId()).toBe('prey-a')

    unsubscribe()
    model.setHovered(null)
    expect(listener).toHaveBeenCalledTimes(3)
  })

  it('reports direct prey and predators', () => {
    const model = new GraphModel(fixture())
    expect(model.neighbors('pred-b')).toEqual({ prey: ['prey-a'], predators: [] })
    expect(model.neighbors('prey-a')).toEqual({ prey: [], predators: ['pred-b'] })
    expect(model.neighbors('missing')).toEqual({ prey: [], predators: [] })
  })
})
