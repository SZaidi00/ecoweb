/**
 * Ecosystem route: #/web/:webId
 *
 * Loads one web from the bundled data/webs/ JSON, validates it against the
 * schema, builds a GraphModel, and renders the full-web GraphView with the
 * species focus view (Phase 3): click a node → its direct prey and predators
 * stay lit while the rest dims; the sidebar tells the node's story; the
 * breadcrumb tracks the Biome → Ecosystem → Species zoom hierarchy.
 */

import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { GraphModel } from '@foodweb/cascade'
import { ecosystemWebSchema } from '@foodweb/schema'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ChainOverlay } from '@/components/ChainOverlay'
import { GraphCanvas } from '@/components/GraphCanvas'
import { LegendBar } from '@/components/LegendBar'
import { SpeciesPanel } from '@/components/SpeciesPanel'
import { WebPanel } from '@/components/WebPanel'
import { getRawWeb } from '@/lib/webData'

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function WebPage() {
  const { webId } = useParams<{ webId: string }>()

  const model = useMemo(() => {
    if (!webId) return null
    const raw = getRawWeb(webId)
    if (!raw) return null
    const parsed = ecosystemWebSchema.safeParse(raw)
    return parsed.success ? new GraphModel(parsed.data) : null
  }, [webId])

  const [focusedId, setFocusedId] = useState<string | null>(null)
  const [chainOpen, setChainOpen] = useState(false)
  const [motion, setMotion] = useState(() => !prefersReducedMotion())

  const clearFocus = useCallback(() => {
    model?.focus(null)
    setFocusedId(null)
    setChainOpen(false)
  }, [model])

  const onFocusChange = useCallback((id: string | null) => {
    setFocusedId(id)
    if (!id) setChainOpen(false)
  }, [])

  // Sidebar/chain-overlay refocus (canvas taps come through onFocusChange).
  const focusNode = useCallback(
    (id: string) => {
      model?.focus(id)
      setFocusedId(id)
    },
    [model],
  )

  // Escape exits focus mode (empty-canvas click and the breadcrumb also do).
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') clearFocus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [clearFocus])

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

  return (
    <section aria-label={model.web.meta.name} className="flex h-full flex-col">
      <Breadcrumbs
        biome={model.web.meta.biome[0].toUpperCase() + model.web.meta.biome.slice(1)}
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
          />

          <p className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-full border border-hairline bg-panel/90 px-4 py-2 text-xs text-inkSoft shadow-sm">
            {focusedNode
              ? 'Only direct dependencies stay lit. Click empty space to clear.'
              : 'Select any species to see what it eats — and what eats it. Click empty space to clear.'}
          </p>

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
          {focusedNode ? (
            <SpeciesPanel
              model={model}
              node={focusedNode}
              chainOpen={chainOpen}
              onToggleChain={() => setChainOpen((open) => !open)}
              onFocus={focusNode}
              onClearFocus={clearFocus}
            />
          ) : (
            <WebPanel web={model.web} />
          )}
        </aside>
      </div>

      <LegendBar />
    </section>
  )
}
