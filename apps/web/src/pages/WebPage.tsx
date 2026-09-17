/**
 * Ecosystem route: #/web/:webId
 *
 * Loads one web from the bundled data/webs/ JSON, validates it against the
 * schema, builds a GraphModel, and renders the full-web GraphView. Focus
 * mode is Phase 3 — selection is wired to a stub here.
 */

import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { GraphModel } from '@foodweb/cascade'
import { ecosystemWebSchema } from '@foodweb/schema'

import { GraphCanvas } from '@/components/GraphCanvas'
import { LegendBar } from '@/components/LegendBar'
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

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [motion, setMotion] = useState(() => !prefersReducedMotion())

  // Escape clears the selection stub (focus view is Phase 3).
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        model?.select(null)
        setSelectedId(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [model])

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

  const selectedNode = selectedId ? model.getNode(selectedId) : null

  return (
    <section aria-label={model.web.meta.name} className="flex h-full flex-col">
      <div className="relative min-h-0 flex-1">
        <GraphCanvas
          model={model}
          particlesEnabled={motion}
          onNodeSelected={setSelectedId}
        />

        <p className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-full border border-hairline bg-panel/90 px-4 py-2 text-xs text-inkSoft shadow-sm">
          {selectedNode
            ? `${selectedNode.node.displayName} selected — the species focus view arrives in Phase 3. Click empty space or press Esc to clear.`
            : 'Drag to pan · scroll to zoom · Tab through species, Enter to select.'}
        </p>

        <button
          type="button"
          onClick={() => setMotion((on) => !on)}
          aria-pressed={motion}
          className="absolute right-4 top-4 rounded-full border border-hairline bg-panel/90 px-3.5 py-1.5 text-xs font-medium text-inkSoft shadow-sm transition-colors hover:bg-panel"
        >
          {motion ? 'Pause motion' : 'Resume motion'}
        </button>
      </div>
      <LegendBar />
    </section>
  )
}
