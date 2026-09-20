/**
 * Ecosystem route: #/web/:webId
 *
 * Loads one web on demand from data/webs/, validates it against the
 * schema, builds a GraphModel, and renders the full-web GraphView with the
 * species focus view (Phase 3) and cascade mode (Phase 4): arm removal from
 * the web panel or the species panel, watch the staggered ripple of effects
 * with a synced plain-language summary, restore instantly to compare.
 */

import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { CASCADE_DISCLAIMER, GraphModel, simulateRemoval } from '@foodweb/cascade'
import type { CascadeResult } from '@foodweb/cascade'
import { ecosystemWebSchema } from '@foodweb/schema'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CascadePanel } from '@/components/CascadePanel'
import { ChainOverlay } from '@/components/ChainOverlay'
import { GraphCanvas } from '@/components/GraphCanvas'
import { LegendBar } from '@/components/LegendBar'
import { SpeciesPanel } from '@/components/SpeciesPanel'
import { WebPanel } from '@/components/WebPanel'
import type { GraphView } from '@/graph/GraphView'
import { loadRawWeb } from '@/lib/webData'
import { colors } from '@/theme/tokens'

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * idle → arming (next click picks the removal target) → running (waves
 * animating) → done (settled, summary complete). Restore returns to idle.
 */
type CascadePhase = 'idle' | 'arming' | 'running' | 'done'

/** Webs load on demand (lazy chunk per web), so the model arrives async. */
type LoadState = 'loading' | 'error' | { model: GraphModel }

export function WebPage() {
  const { webId } = useParams<{ webId: string }>()

  const [loadState, setLoadState] = useState<LoadState>('loading')

  useEffect(() => {
    if (!webId) {
      setLoadState('error')
      return
    }
    let cancelled = false
    setLoadState('loading')
    loadRawWeb(webId)
      .then((raw) => {
        if (cancelled) return
        const parsed = raw === undefined ? null : ecosystemWebSchema.safeParse(raw)
        setLoadState(parsed?.success ? { model: new GraphModel(parsed.data) } : 'error')
      })
      .catch(() => {
        if (!cancelled) setLoadState('error')
      })
    return () => {
      cancelled = true
    }
  }, [webId])

  const model = typeof loadState === 'object' ? loadState.model : null

  const [focusedId, setFocusedId] = useState<string | null>(null)
  const [chainOpen, setChainOpen] = useState(false)
  const [motion, setMotion] = useState(() => !prefersReducedMotion())

  const [cascadePhase, setCascadePhase] = useState<CascadePhase>('idle')
  const [cascadeResult, setCascadeResult] = useState<CascadeResult | null>(null)
  const [visibleWave, setVisibleWave] = useState(0)
  const viewRef = useRef<GraphView | null>(null)

  const clearFocus = useCallback(() => {
    model?.focus(null)
    setFocusedId(null)
    setChainOpen(false)
  }, [model])

  const onFocusChange = useCallback(
    (id: string | null) => {
      // An empty-canvas tap while arming cancels cascade mode.
      if (id === null && cascadePhase === 'arming') setCascadePhase('idle')
      setFocusedId(id)
      if (!id) setChainOpen(false)
    },
    [cascadePhase],
  )

  // Sidebar/chain-overlay refocus (canvas taps come through onFocusChange).
  const focusNode = useCallback(
    (id: string) => {
      model?.focus(id)
      setFocusedId(id)
    },
    [model],
  )

  /** Enter cascade mode: the next node click is the removal target. */
  const armCascade = useCallback(() => {
    viewRef.current?.clearCascade()
    clearFocus()
    setCascadeResult(null)
    setVisibleWave(0)
    setCascadePhase('arming')
  }, [clearFocus])

  /** Run the removal simulation for a picked target (click, chip, or Enter). */
  const removeSpecies = useCallback(
    (id: string) => {
      if (!model) return
      const result = simulateRemoval(model.web, id)
      clearFocus()
      viewRef.current?.clearCascade()
      setCascadeResult(result)
      setVisibleWave(0)
      setCascadePhase('running')
      viewRef.current?.playCascade(result, {
        onWave: (waveIndex) => setVisibleWave(waveIndex),
        onComplete: () => setCascadePhase('done'),
      })
    },
    [model, clearFocus],
  )

  /** Instant restore (<100ms repaint) — fast enough to compare removals. */
  const restoreEcosystem = useCallback(() => {
    viewRef.current?.clearCascade()
    setCascadePhase('idle')
    setCascadeResult(null)
    setVisibleWave(0)
  }, [])

  // Escape cancels cascade arming without removing anything; otherwise it
  // exits focus mode (empty-canvas click and the breadcrumb also do).
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      if (cascadePhase === 'arming') setCascadePhase('idle')
      else if (cascadePhase === 'idle') clearFocus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [clearFocus, cascadePhase])

  if (loadState === 'loading') {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="max-w-md rounded-xl border border-hairline bg-panel p-8 text-center">
          <p className="text-sm text-ink">Loading ecosystem…</p>
        </div>
      </div>
    )
  }

  if (!model) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="max-w-md rounded-xl border border-hairline bg-panel p-8 text-center">
          <h1 className="font-heading text-xl font-semibold">Ecosystem not found</h1>
          <p className="mt-2 text-sm text-inkSoft">
            {webId
              ? `No validated web named “${webId}” exists in data/webs/.`
              : 'No ecosystem selected.'}
          </p>
          <Link to="/debug/webs" className="mt-4 inline-block text-sm font-medium text-canopy">
            Inspect available web data →
          </Link>
        </div>
      </div>
    )
  }

  const focusedNode = focusedId ? model.getNode(focusedId) : null
  const cascadeVisible = cascadePhase === 'running' || cascadePhase === 'done'

  const hint =
    cascadePhase === 'arming'
      ? 'Cascade mode: click the species you want to remove. Esc to cancel.'
      : cascadePhase === 'running'
        ? 'Watch the effects ripple outward, wave by wave.'
        : cascadePhase === 'done'
          ? 'Cascade complete. Restore the ecosystem, or remove another species to compare.'
          : focusedNode
            ? 'Only direct dependencies stay lit. Click empty space to clear.'
            : 'Select any species to see what it eats — and what eats it. Click empty space to clear.'

  return (
    <section aria-label={model.web.meta.name} className="flex h-full flex-col">
      <Breadcrumbs
        biome={model.web.meta.biome}
        webName={model.web.meta.name}
        focusedName={focusedNode?.node.displayName ?? null}
        onClearFocus={clearFocus}
      />

      <div className="flex min-h-0 flex-1">
        <div className="relative min-w-0 flex-1">
          <GraphCanvas
            model={model}
            particlesEnabled={motion}
            onFocusChange={onFocusChange}
            interactionMode={
              cascadePhase === 'arming'
                ? 'cascade-target'
                : cascadeVisible
                  ? 'locked'
                  : 'focus'
            }
            onCascadeTarget={removeSpecies}
            onViewReady={(view) => {
              viewRef.current = view
            }}
          />

          <p className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-full border border-hairline bg-panel/90 px-4 py-2 text-xs text-inkSoft shadow-sm">
            {hint}
          </p>

          {cascadePhase === 'arming' && (
            <p
              role="status"
              className="absolute right-4 top-14 whitespace-nowrap rounded-full px-3.5 py-[7px] text-[11px] font-semibold tracking-[0.5px] text-panel shadow-md"
              style={{ backgroundColor: colors.cascade.severe }}
            >
              CASCADE MODE — click a species to remove it · Esc to cancel
            </p>
          )}

          {focusedId && chainOpen && (
            <ChainOverlay
              model={model}
              focusId={focusedId}
              onFocus={focusNode}
              onClose={() => setChainOpen(false)}
            />
          )}

          <button
            type="button"
            onClick={() => setMotion((on) => !on)}
            aria-pressed={motion}
            className="absolute right-4 top-4 rounded-full border border-hairline bg-panel/90 px-3.5 py-1.5 text-xs font-medium text-inkSoft shadow-sm transition-colors hover:bg-panel"
          >
            {motion ? 'Pause motion' : 'Resume motion'}
          </button>
        </div>

        <aside className="w-[340px] flex-none overflow-y-auto border-l border-hairline bg-panel px-[22px] py-6">
          {cascadeVisible && cascadeResult ? (
            <CascadePanel
              model={model}
              result={cascadeResult}
              visibleWave={visibleWave}
              complete={cascadePhase === 'done'}
              onRestore={restoreEcosystem}
              onRemoveAnother={armCascade}
            />
          ) : focusedNode ? (
            <SpeciesPanel
              model={model}
              node={focusedNode}
              chainOpen={chainOpen}
              onToggleChain={() => setChainOpen((open) => !open)}
              onFocus={focusNode}
              onClearFocus={clearFocus}
              onSimulateRemoval={removeSpecies}
            />
          ) : (
            <WebPanel web={model.web} onEnterCascadeMode={armCascade} />
          )}
        </aside>
      </div>

      {cascadeVisible && (
        <div
          role="note"
          className="flex items-center gap-2 border-t border-hairline bg-paper2 px-8 py-[9px] text-[11.5px] text-inkSoft"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            className="h-[14px] w-[14px] flex-none"
            style={{ stroke: colors.cascade.severe }}
            aria-hidden="true"
          >
            <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
          </svg>
          <span>{CASCADE_DISCLAIMER}</span>
        </div>
      )}

      <LegendBar cascadeActive={cascadeVisible} />
    </section>
  )
}
