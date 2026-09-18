/**
 * Hidden perf harness (#/debug/perf).
 *
 * Renders a synthetic 200-node / 400-edge web (the Phase 2 budget, 8× the
 * curated ceiling) and measures frame times in three phases: idle ambient
 * particles, a programmed pan/zoom sweep, and a hover-tint storm. Reports
 * mean/p95 frame time and fps; 60fps means ≤16.7ms mean frame time.
 */

import { useCallback, useMemo, useRef, useState } from 'react'

import { GraphModel } from '@foodweb/cascade'

import { GraphCanvas } from '@/components/GraphCanvas'
import type { GraphView } from '@/graph/GraphView'
import { synthesizeWeb } from '@/lib/synthWeb'

interface PhaseStats {
  label: string
  samples: number
  meanMs: number
  p95Ms: number
  fps: number
}

function summarize(label: string, deltas: number[]): PhaseStats {
  const sorted = [...deltas].sort((a, b) => a - b)
  const mean = deltas.reduce((sum, d) => sum + d, 0) / Math.max(1, deltas.length)
  const p95 = sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * 0.95))] ?? 0
  return {
    label,
    samples: deltas.length,
    meanMs: Math.round(mean * 100) / 100,
    p95Ms: Math.round(p95 * 100) / 100,
    fps: Math.round((1000 / Math.max(mean, 0.01)) * 10) / 10,
  }
}

const PHASE_MS = 3000

export function DebugPerfPage() {
  const model = useMemo(() => new GraphModel(synthesizeWeb(200, 400)), [])
  const viewRef = useRef<GraphView | null>(null)
  const [running, setRunning] = useState(false)
  const [stats, setStats] = useState<PhaseStats[]>([])

  const run = useCallback(() => {
    const view = viewRef.current
    if (!view || running) return
    setRunning(true)
    setStats([])

    const phases: { label: string; drive: (elapsed: number) => void }[] = [
      { label: 'Idle (ambient particles)', drive: () => {} },
      {
        label: 'Pan/zoom sweep',
        drive: (elapsed) => view.debugCameraSweep(elapsed / 700),
      },
      {
        label: 'Tint storm (hover updates)',
        drive: (elapsed) =>
          model.setHovered(`node-${Math.floor(elapsed / 16) % model.layout.nodes.length}`),
      },
    ]

    const results: PhaseStats[] = []
    let deltas: number[] = []
    let phaseIndex = 0
    let phaseElapsed = 0
    view.resetView()
    view.setFrameListener((deltaMS) => {
      // Discard the first 400ms of each phase: shader compilation and texture
      // uploads are one-time warm-up costs, not steady-state frame time.
      if (phaseElapsed > 400) deltas.push(deltaMS)
      phaseElapsed += deltaMS
      phases[phaseIndex].drive(phaseElapsed)
      if (phaseElapsed >= PHASE_MS) {
        results.push(summarize(phases[phaseIndex].label, deltas))
        setStats([...results])
        deltas = []
        phaseElapsed = 0
        phaseIndex++
        if (phaseIndex >= phases.length) {
          view.setFrameListener(null)
          model.setHovered(null)
          view.resetView()
          setRunning(false)
        }
      }
    })
  }, [model, running])

  const meanOverall =
    stats.length === 3 ? stats.reduce((sum, s) => sum + s.meanMs, 0) / stats.length : null

  return (
    <section aria-label="Renderer performance harness" className="relative h-full">
      <GraphCanvas
        model={model}
        particlesEnabled
        onFocusChange={() => {}}
        onViewReady={(view) => {
          viewRef.current = view
        }}
      />
      <div className="absolute left-4 top-4 w-72 rounded-xl border border-hairline bg-panel/95 p-4 text-xs shadow-sm">
        <h1 className="font-heading text-base font-semibold">Perf harness</h1>
        <p className="mt-1 text-inkSoft">
          Synthetic web: {model.layout.nodes.length} nodes · {model.layout.edges.length} edges.
          Budget: 60fps (≤16.7ms/frame).
        </p>
        <button
          type="button"
          data-perf-run
          onClick={run}
          disabled={running}
          className="mt-3 w-full rounded-lg bg-canopy px-3 py-2 font-semibold text-panel transition-opacity disabled:opacity-50"
        >
          {running ? 'Measuring…' : 'Run 3-phase benchmark'}
        </button>
        {stats.map((s) => (
          <div key={s.label} className="mt-3 border-t border-hairline pt-2" data-perf-phase={s.label}>
            <p className="font-semibold">{s.label}</p>
            <p className="text-inkSoft">
              mean {s.meanMs}ms · p95 {s.p95Ms}ms · {s.fps} fps ({s.samples} frames)
            </p>
          </div>
        ))}
        {meanOverall !== null && (
          <p
            className="mt-3 rounded-lg border border-hairline bg-paper px-3 py-2 font-semibold"
            data-perf-result={meanOverall <= 16.7 ? 'pass' : 'fail'}
          >
            {meanOverall <= 16.7 ? 'PASS' : 'FAIL'} — mean {meanOverall.toFixed(2)}ms/frame across
            phases
          </p>
        )}
      </div>
    </section>
  )
}
