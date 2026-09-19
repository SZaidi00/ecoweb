import { describe, expect, it } from 'vitest'

import { CASCADE_DISCLAIMER, MAX_CASCADE_WAVES, simulateRemoval } from './index'

import type { CascadeResult } from './cascade'
import type { EcosystemWeb, WebEdge, WebNode } from '@foodweb/schema'

let seq = 0

function node(id: string, trophicLevel = 2): WebNode {
  return {
    id,
    displayName: id
      .split('-')
      .map((part) => part[0].toUpperCase() + part.slice(1))
      .join(' '),
    kind: 'functional-group',
    trophicLevel,
    functionalRole: 'intermediate-consumer',
    description: 'Test fixture node.',
    layout: { x: (seq += 7) % 100, y: trophicLevel * 20 },
  }
}

function web(nodes: WebNode[], edges: WebEdge[]): EcosystemWeb {
  return {
    meta: {
      id: `test-${seq++}`,
      name: 'Test web',
      location: 'Nowhere',
      biome: 'marine',
      lat: 0,
      lng: 0,
      provenance: 'composite',
      citations: ['Fixture.'],
      sourceUrl: 'https://example.com',
      licenseNote: 'Fixture.',
      curator: 'tests',
      dateCurated: '2026-01-01',
    },
    nodes,
    edges,
  }
}

/** Every effect state recorded for a node across all waves, in order. */
function statesOf(result: CascadeResult, id: string): string[] {
  return result.waves.flatMap((w) =>
    w.effects.filter((e) => e.nodeId === id).map((e) => e.state),
  )
}

/** Two-prey consumer where removing `prey` loses exactly `preyWeight` of its diet. */
function thresholdWeb(preyWeight: number, otherWeight: number): EcosystemWeb {
  return web([node('prey', 1), node('other', 1), node('consumer', 2)], [
    { prey: 'prey', predator: 'consumer', weight: preyWeight },
    { prey: 'other', predator: 'consumer', weight: otherWeight },
  ])
}

describe('simulateRemoval — thresholds', () => {
  it('loss just under 30% is stressed', () => {
    const result = simulateRemoval(thresholdWeb(0.29, 0.71), 'prey')
    expect(result.finalStates['consumer']).toEqual({ loss: 'stressed', released: false })
  })

  it('loss exactly 30% is severe', () => {
    const result = simulateRemoval(thresholdWeb(0.3, 0.7), 'prey')
    expect(result.finalStates['consumer']).toEqual({ loss: 'severe', released: false })
    expect(result.waves[0].effects[0].dietLostPct).toBe(0.3)
  })

  it('loss exactly 70% is severe, not collapsed', () => {
    const result = simulateRemoval(thresholdWeb(0.7, 0.3), 'prey')
    expect(result.finalStates['consumer'].loss).toBe('severe')
    expect(result.waves[0].effects[0].dietLostPct).toBe(0.7)
  })

  it('loss just over 70% is collapsed', () => {
    const result = simulateRemoval(thresholdWeb(0.71, 0.29), 'prey')
    expect(result.finalStates['consumer'].loss).toBe('collapsed')
  })

  it('honours configurable thresholds', () => {
    const result = simulateRemoval(thresholdWeb(0.5, 0.5), 'prey', {
      severe: 0.2,
      collapsed: 0.4,
    })
    expect(result.finalStates['consumer'].loss).toBe('collapsed')
  })

  it('throws on an unknown node id', () => {
    expect(() => simulateRemoval(thresholdWeb(0.5, 0.5), 'nope')).toThrow()
  })
})

describe('simulateRemoval — wave propagation (8-node web)', () => {
  /**
   * p, q, r producers; a eats only p; b eats a (80%) + q (20%); c eats only
   * b; d eats c (20%) + r (80%); e eats only q (control — never affected).
   */
  const chainWeb = () =>
    web(
      [
        node('p', 1),
        node('q', 1),
        node('r', 1),
        node('a', 2),
        node('b', 3),
        node('c', 4),
        node('d', 5),
        node('e', 2),
      ],
      [
        { prey: 'p', predator: 'a', weight: 1 },
        { prey: 'a', predator: 'b', weight: 0.8 },
        { prey: 'q', predator: 'b', weight: 0.2 },
        { prey: 'b', predator: 'c', weight: 1 },
        { prey: 'c', predator: 'd', weight: 0.2 },
        { prey: 'r', predator: 'd', weight: 0.8 },
        { prey: 'q', predator: 'e', weight: 1 },
      ],
    )

  it('propagates collapses wave by wave to a fixpoint', () => {
    const result = simulateRemoval(chainWeb(), 'p')
    expect(result.waves.map((w) => w.index)).toEqual([1, 2, 3, 4])

    expect(statesOf(result, 'a')).toEqual(['collapsed']) // wave 1: lost 100%
    expect(statesOf(result, 'b')).toEqual(['collapsed']) // wave 2: lost 80%
    expect(statesOf(result, 'c')).toEqual(['collapsed']) // wave 3: lost 100%
    expect(statesOf(result, 'd')).toEqual(['stressed']) // wave 4: lost 20%
    // q loses its predator b in wave 3 → released.
    expect(statesOf(result, 'q')).toEqual(['released'])
    // e eats only q, which never disappears — untouched.
    expect(statesOf(result, 'e')).toEqual([])
    expect(result.waves.length).toBeLessThanOrEqual(MAX_CASCADE_WAVES)
  })

  it('reports cumulative diet loss and causes per wave', () => {
    const result = simulateRemoval(chainWeb(), 'p')
    const b = result.waves[1].effects.find((e) => e.nodeId === 'b')
    expect(b?.dietLostPct).toBe(0.8)
    expect(b?.cause).toBe('A collapsed')
    const a = result.waves[0].effects.find((e) => e.nodeId === 'a')
    expect(a?.cause).toBe('P was removed')
  })

  it('escalates a node across waves as losses accumulate', () => {
    // u eats only p; v eats only u; m eats u (40%) + v (40%) + w (20%).
    const w = web([node('p', 1), node('w', 1), node('u', 2), node('v', 3), node('m', 4)], [
      { prey: 'p', predator: 'u', weight: 1 },
      { prey: 'u', predator: 'v', weight: 1 },
      { prey: 'u', predator: 'm', weight: 0.4 },
      { prey: 'v', predator: 'm', weight: 0.4 },
      { prey: 'w', predator: 'm', weight: 0.2 },
    ])
    const result = simulateRemoval(w, 'p')
    const mEffects = result.waves.flatMap((wave) => wave.effects.filter((e) => e.nodeId === 'm'))
    expect(mEffects.map((e) => e.state)).toEqual(['severe', 'collapsed'])
    expect(mEffects.map((e) => e.dietLostPct)).toEqual([0.4, 0.8])
    expect(result.finalStates['m'].loss).toBe('collapsed')
  })

  it('is deterministic and idempotent across runs', () => {
    expect(simulateRemoval(chainWeb(), 'p')).toEqual(simulateRemoval(chainWeb(), 'p'))
  })
})

describe('simulateRemoval — qualitative diets', () => {
  it('qualitative-only consumer: edges split the diet equally', () => {
    const w = web([node('x', 1), node('y', 1), node('c', 2)], [
      { prey: 'x', predator: 'c', qualitative: true },
      { prey: 'y', predator: 'c', qualitative: true },
    ])
    const result = simulateRemoval(w, 'x')
    expect(result.finalStates['c'].loss).toBe('severe') // 50%
    expect(result.waves[0].effects[0].dietLostPct).toBe(0.5)
  })

  it('mixed consumer: qualitative edges share the unaccounted remainder', () => {
    const w = web([node('x', 1), node('y', 1), node('z', 1), node('c', 2)], [
      { prey: 'x', predator: 'c', weight: 0.6 },
      { prey: 'y', predator: 'c', qualitative: true },
      { prey: 'z', predator: 'c', qualitative: true },
    ])
    // Each qualitative edge = (1 − 0.6) / 2 = 20% of the documented diet.
    const result = simulateRemoval(w, 'y')
    expect(result.finalStates['c'].loss).toBe('stressed')
    expect(result.waves[0].effects[0].dietLostPct).toBe(0.2)
  })

  it('mixed consumer: removing a heavy weighted prey collapses it', () => {
    const w = web([node('x', 1), node('y', 1), node('c', 2)], [
      { prey: 'x', predator: 'c', weight: 0.75 },
      { prey: 'y', predator: 'c', qualitative: true },
    ])
    const result = simulateRemoval(w, 'x')
    expect(result.finalStates['c'].loss).toBe('collapsed') // 75% > 70%
  })
})

describe('simulateRemoval — release effects', () => {
  it('prey of the removed node are released, once', () => {
    const w = web([node('p', 1), node('c', 2), node('r', 3)], [
      { prey: 'p', predator: 'r', weight: 0.6 },
      { prey: 'c', predator: 'r', weight: 0.4 },
      { prey: 'p', predator: 'c', weight: 1 },
    ])
    const result = simulateRemoval(w, 'r')
    expect(statesOf(result, 'p')).toEqual(['released'])
    expect(statesOf(result, 'c')).toEqual(['released'])
    expect(result.waves).toHaveLength(1)
    expect(result.finalStates['p']).toEqual({ loss: null, released: true })
  })

  it('prey of collapsed nodes are released in the following wave, never twice', () => {
    const w = web([node('s', 1), node('q', 2), node('x', 3)], [
      { prey: 's', predator: 'q', weight: 1 },
      { prey: 'x', predator: 'q', qualitative: true },
      { prey: 'q', predator: 'x', weight: 1 },
    ])
    const result = simulateRemoval(w, 's')
    expect(statesOf(result, 'q')).toEqual(['collapsed'])
    // x is prey of q (collapsed in wave 1) but also loses q as food.
    expect(statesOf(result, 'x')).toEqual(['collapsed', 'released'])
  })

  it('a node both released and hit by losses reports both states', () => {
    // q eats s (documented 100%) and also x (qualitative, zero remainder
    // share). x eats q (80%) and det (20%). Removing s collapses q in wave 1;
    // in wave 2 x loses 80% of its food AND is released from q's predation.
    const w = web([node('s', 1), node('det', 1), node('q', 2), node('x', 3)], [
      { prey: 's', predator: 'q', weight: 1 },
      { prey: 'x', predator: 'q', qualitative: true },
      { prey: 'q', predator: 'x', weight: 0.8 },
      { prey: 'det', predator: 'x', weight: 0.2 },
    ])
    const result = simulateRemoval(w, 's')
    expect(statesOf(result, 'q')).toEqual(['collapsed'])
    expect(statesOf(result, 'x')).toEqual(['collapsed', 'released'])
    expect(result.finalStates['x']).toEqual({ loss: 'collapsed', released: true })
  })
})

describe('simulateRemoval — cycles', () => {
  it('detritus loops terminate and do not double-count', () => {
    // microbes eat detritus + phyto; detritus "eats" microbes (loop back
    // down, as in real webs); zoo eats only microbes.
    const w = web(
      [node('phyto', 1), node('detritus', 1), node('microbes', 1), node('zoo', 2)],
      [
        { prey: 'detritus', predator: 'microbes', weight: 0.5 },
        { prey: 'phyto', predator: 'microbes', weight: 0.5 },
        { prey: 'microbes', predator: 'detritus', qualitative: true },
        { prey: 'microbes', predator: 'zoo', weight: 1 },
      ],
    )
    const result = simulateRemoval(w, 'phyto')
    expect(result.waves.length).toBeLessThanOrEqual(MAX_CASCADE_WAVES)
    expect(result.finalStates['microbes'].loss).toBe('severe')
    expect(result.finalStates['detritus']).toBeUndefined()
    expect(statesOf(result, 'zoo')).toEqual([])
  })

  it('mutual predation collapse terminates instead of ping-ponging', () => {
    // a and b eat each other; removing base collapses a (80%), which then
    // collapses b (100%); a is already gone, so the loop stops.
    const w = web([node('base', 1), node('a', 2), node('b', 3)], [
      { prey: 'base', predator: 'a', weight: 0.8 },
      { prey: 'b', predator: 'a', weight: 0.2 },
      { prey: 'a', predator: 'b', weight: 1 },
    ])
    const result = simulateRemoval(w, 'base')
    expect(result.finalStates['a'].loss).toBe('collapsed')
    expect(result.finalStates['b'].loss).toBe('collapsed')
    expect(result.waves.map((wave) => wave.index)).toEqual([1, 2])
  })
})

describe('simulateRemoval — summary', () => {
  it('generates plain-language lines from data, ending with limitations', () => {
    const w = web(
      [node('copepods', 1), node('krill', 2), node('baleen-whales', 3), node('fish', 1)],
      [
        { prey: 'copepods', predator: 'krill', qualitative: true },
        { prey: 'krill', predator: 'baleen-whales', weight: 1 },
        { prey: 'fish', predator: 'baleen-whales', qualitative: true },
      ],
    )
    const result = simulateRemoval(w, 'krill')
    const texts = result.summary.map((l) => l.text)
    expect(texts).toContain(
      'Baleen Whales collapsed: lost 100% of its food supply → secondary extinction.',
    )
    expect(texts).toContain('Copepods, released from predation, would likely increase.')
    expect(texts[texts.length - 1]).toBe(CASCADE_DISCLAIMER)
    expect(result.summary[result.summary.length - 1].wave).toBe(-1)
  })

  it('tags each line with its wave and state for synced streaming', () => {
    const w = web([node('p', 1), node('a', 2), node('b', 3)], [
      { prey: 'p', predator: 'a', weight: 1 },
      { prey: 'a', predator: 'b', weight: 1 },
    ])
    const result = simulateRemoval(w, 'p')
    const line = result.summary.find((l) => l.nodeId === 'b')
    expect(line?.wave).toBe(2)
    expect(line?.state).toBe('collapsed')
  })
})
