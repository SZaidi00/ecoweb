import { describe, expect, it } from 'vitest'

import {
  CASCADE_DISCLAIMER,
  DEFAULT_CASCADE_THRESHOLDS,
  MAX_CASCADE_WAVES,
  simulateRemoval,
} from './index'

describe('package exports', () => {
  it('exposes the cascade engine with spec defaults', () => {
    expect(typeof simulateRemoval).toBe('function')
    expect(DEFAULT_CASCADE_THRESHOLDS).toEqual({ severe: 0.3, collapsed: 0.7 })
    expect(MAX_CASCADE_WAVES).toBe(10)
    expect(CASCADE_DISCLAIMER).toContain('structural dependency')
  })
})
