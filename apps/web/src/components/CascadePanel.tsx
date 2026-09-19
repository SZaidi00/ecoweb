import type { CascadeResult, GraphModel } from '@foodweb/cascade'

import { CascadeStateIcon } from '@/components/CascadeStateIcon'
import { colors } from '@/theme/tokens'

const panelBox =
  'mb-3 rounded-xl border border-hairline bg-paper px-4 py-3.5 text-[13px] leading-relaxed text-inkSoft'
const panelHeading = 'mb-2 text-[10.5px] font-bold uppercase tracking-[0.9px] text-canopy'
const btnBase =
  'mt-2 flex w-full items-center justify-center gap-2 rounded-[10px] px-3 py-2.5 text-[13.5px] font-semibold transition-colors'
const btnGhost = `${btnBase} bg-paper2 text-ink hover:bg-hairline`

export interface CascadePanelProps {
  model: GraphModel
  result: CascadeResult
  /** Waves whose summary lines are visible (streams in sync with the canvas). */
  visibleWave: number
  /** True when the last wave has settled — shows the limitations line. */
  complete: boolean
  onRestore: () => void
  onRemoveAnother: () => void
}

function RestoreIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-[15px] w-[15px] flex-none"
      aria-hidden="true"
    >
      <path d="M3 12a9 9 0 1 0 2.6-6.4M3 4v5h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FlaskIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-[15px] w-[15px] flex-none"
      aria-hidden="true"
    >
      <path d="M9 3h6M10 3v5L4.5 18a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 8V3" />
    </svg>
  )
}

/**
 * Sidebar during a cascade: streams the model's pre-generated plain-language
 * summary lines in sync with the wave animation, then the limitations note.
 * All text comes from CascadeResult — nothing is hardcoded per ecosystem.
 */
export function CascadePanel({
  model,
  result,
  visibleWave,
  complete,
  onRestore,
  onRemoveAnother,
}: CascadePanelProps) {
  const removedName = model.getNode(result.removedId)?.node.displayName ?? result.removedId
  const visibleLines = result.summary.filter((line) => line.wave >= 1 && line.wave <= visibleWave)
  const limitations = result.summary.find((line) => line.wave === -1)

  return (
    <div>
      <h2 className="mb-0.5 font-heading text-[22px] font-semibold">Cascade effects</h2>
      <p className="mb-4 text-[12.5px] text-muted">
        {removedName} removed · structural simulation
      </p>

      <div className={panelBox} aria-live="polite">
        <h5 className={panelHeading}>Observed effects</h5>
        {visibleLines.length === 0 ? (
          <p className="text-[12.5px] text-muted">Watching the first wave…</p>
        ) : (
          <ul>
            {visibleLines.map((line, i) => (
              <li key={i} className="flex items-baseline gap-2.5 py-[3px] text-[12.5px]">
                {line.state && (
                  <span
                    className="flex-none translate-y-[2px]"
                    style={{ color: colors.cascade[line.state] }}
                  >
                    <CascadeStateIcon state={line.state} className="h-[13px] w-[13px]" />
                  </span>
                )}
                <span className="text-inkSoft">{line.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {complete && limitations && (
        <p className="mb-3 rounded-xl border border-hairline bg-paper px-4 py-3 text-[12px] italic leading-relaxed text-muted">
          {limitations.text}
        </p>
      )}

      <button type="button" onClick={onRestore} className={btnGhost}>
        <RestoreIcon />
        Restore ecosystem
      </button>
      {complete && (
        <button type="button" onClick={onRemoveAnother} className={btnGhost}>
          <FlaskIcon />
          Remove another species
        </button>
      )}
    </div>
  )
}
