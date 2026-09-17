import { colors } from '@/theme/tokens'

const ROLES = [
  { label: 'Producers & detritus', color: colors.trophic.producers },
  { label: 'Primary consumers', color: colors.trophic.primaryConsumers },
  { label: 'Mid-level consumers', color: colors.trophic.midLevel },
  { label: 'Upper-level consumers', color: colors.trophic.upperLevel },
  { label: 'Apex predators', color: colors.trophic.apex },
] as const

/** Legend bar under the canvas: trophic ramp, edge encodings, energy-flow cue. */
export function LegendBar() {
  return (
    <div
      className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-hairline bg-panel px-8 py-2.5 text-[11.5px] text-inkSoft"
      aria-label="Legend"
    >
      {ROLES.map((role) => (
        <span key={role.label} className="inline-flex items-center gap-1.5">
          <span
            className="inline-block h-[11px] w-[11px] rounded-full"
            style={{ backgroundColor: role.color }}
          />
          {role.label}
        </span>
      ))}
      <span className="inline-flex items-center gap-1.5">
        <svg width="26" height="6" aria-hidden="true">
          <line x1="0" y1="3" x2="26" y2="3" stroke={colors.edge} strokeWidth="3" />
        </svg>
        Line width = share of diet
      </span>
      <span className="inline-flex items-center gap-1.5">
        <svg width="26" height="6" aria-hidden="true">
          <line
            x1="0"
            y1="3"
            x2="26"
            y2="3"
            stroke={colors.edge}
            strokeWidth="1.5"
            strokeDasharray="5 4"
          />
        </svg>
        Documented link, strength unquantified
      </span>
      <span className="ml-auto inline-flex items-center gap-1.5 font-semibold uppercase tracking-wider text-muted">
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <path d="M6 12.5v-10M2 5l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Energy flows upward
      </span>
    </div>
  )
}
