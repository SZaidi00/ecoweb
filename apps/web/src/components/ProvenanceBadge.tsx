import type { Provenance } from '@foodweb/schema'

const PROVENANCE_INFO: Record<Provenance, { label: string; description: string }> = {
  empirical: {
    label: 'Empirical study',
    description: 'Comes from a single published investigation of one place.',
  },
  composite: {
    label: 'Curated composite',
    description: 'Assembled and quality-checked from several published sources.',
  },
}

/**
 * Provenance pill with an explanatory tooltip on hover. The description is
 * also present as visually hidden text so screen readers announce it.
 */
export function ProvenanceBadge({ provenance }: { provenance: Provenance }) {
  const { label, description } = PROVENANCE_INFO[provenance]
  return (
    <span className="group/prov relative inline-flex">
      <span className="inline-flex cursor-help items-center gap-1.5 rounded-full bg-canopySoft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.6px] text-canopy">
        <span className="h-1.5 w-1.5 rounded-full bg-canopy" />
        {label}
        <span className="sr-only"> — {description}</span>
      </span>
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-0 z-20 mb-2 w-60 rounded-lg bg-ink px-3 py-2 text-left text-[11.5px] font-normal normal-case leading-relaxed tracking-[0.1px] text-paper opacity-0 shadow-lg transition-opacity duration-150 group-hover/prov:opacity-100"
      >
        {description}
        <span className="absolute left-4 top-full -translate-y-px border-4 border-transparent border-t-ink" />
      </span>
    </span>
  )
}
