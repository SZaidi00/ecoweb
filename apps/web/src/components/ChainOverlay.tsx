import { useMemo } from 'react'

import { buildDependencyChains, type ChainSegment, type GraphModel } from '@foodweb/cascade'

import { colors } from '@/theme/tokens'

export interface ChainOverlayProps {
  model: GraphModel
  focusId: string
  onFocus: (id: string) => void
  onClose: () => void
}

const BAND_DOT = [
  colors.trophic.producers,
  colors.trophic.primaryConsumers,
  colors.trophic.midLevel,
  colors.trophic.upperLevel,
  colors.trophic.apex,
]

/**
 * "Trace to producers" — a separate overlay (not the full graph) listing
 * every dependency path from the focused node down to producers, with long
 * runs collapsed into "via N intermediate species" segments.
 */
export function ChainOverlay({ model, focusId, onFocus, onClose }: ChainOverlayProps) {
  const chain = useMemo(() => buildDependencyChains(model.web, focusId), [model, focusId])
  const nameOf = (id: string) => model.getNode(id)?.node.displayName ?? id
  const bandOf = (id: string) => model.getNode(id)?.band ?? 1

  const segment = (seg: ChainSegment, key: number) =>
    seg.type === 'node' ? (
      <button
        key={key}
        type="button"
        onClick={() => onFocus(seg.id)}
        className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-panel px-2.5 py-1 text-xs font-medium text-ink transition-colors hover:border-canopy"
      >
        <span
          className="h-2 w-2 flex-none rounded-full"
          style={{ backgroundColor: BAND_DOT[bandOf(seg.id) - 1] }}
        />
        {nameOf(seg.id)}
      </button>
    ) : (
      <span
        key={key}
        className="inline-flex items-center rounded-full bg-paper2 px-2.5 py-1 text-xs italic text-muted"
        title={seg.ids.map(nameOf).join(', ')}
      >
        via {seg.ids.length} intermediate species
      </span>
    )

  return (
    <div className="absolute bottom-4 left-4 top-14 z-10 flex w-[340px] max-w-[calc(100%-2rem)] flex-col overflow-hidden rounded-xl border border-hairline bg-panel/95 shadow-lg backdrop-blur-sm">
      <div className="flex items-start justify-between gap-3 border-b border-hairline px-4 py-3">
        <div>
          <h3 className="font-heading text-base font-semibold">Trace to producers</h3>
          <p className="mt-0.5 text-xs text-muted">
            Every path from {nameOf(focusId)} down to the producers it depends on.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dependency chain"
          className="rounded-md px-2 py-1 text-sm text-muted transition-colors hover:bg-paper2 hover:text-ink"
        >
          ✕
        </button>
      </div>

      <ol className="min-h-0 flex-1 space-y-2.5 overflow-y-auto px-4 py-3">
        {chain.paths.map((path, i) => (
          <li key={i} className="flex flex-wrap items-center gap-x-1 gap-y-1.5">
            {/* The focused node heads every path; the header already names it. */}
            {path.segments.slice(1).map((seg, j) => (
              <span key={j} className="flex items-center gap-1">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  stroke={colors.muted}
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M1 5h9M7 1.5 10.5 5 7 8.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {segment(seg, j)}
              </span>
            ))}
          </li>
        ))}
      </ol>

      {chain.omittedPaths > 0 && (
        <p className="border-t border-hairline px-4 py-2 text-xs italic text-muted">
          …and {chain.omittedPaths} more {chain.omittedPaths === 1 ? 'path' : 'paths'}, collapsed
          to keep the chain readable.
        </p>
      )}
    </div>
  )
}
