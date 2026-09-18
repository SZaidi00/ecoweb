import type { EcosystemWeb } from '@foodweb/schema'

const panelBox =
  'mb-3 rounded-xl border border-hairline bg-paper px-4 py-3.5 text-[13px] leading-relaxed text-inkSoft'
const panelHeading = 'mb-2 text-[10.5px] font-bold uppercase tracking-[0.9px] text-canopy'

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

/** Default sidebar (no species focused): web intro and provenance. */
export function WebPanel({ web }: { web: EcosystemWeb }) {
  return (
    <div>
      <h2 className="mb-0.5 font-heading text-[22px] font-semibold">{web.meta.name}</h2>
      <p className="mb-4 flex items-center gap-2 text-[12.5px] text-muted">
        {web.meta.location} ·{' '}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-canopySoft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.6px] text-canopy">
          <span className="h-1.5 w-1.5 rounded-full bg-canopy" />
          {web.meta.provenance === 'empirical' ? 'Empirical study' : 'Curated composite'}
        </span>
      </p>

      <div className={panelBox}>
        <h5 className={panelHeading}>About this web</h5>
        Nodes are <strong className="font-semibold text-ink">functional groups</strong> — for
        example, “Salmon” pools several salmon species, exactly as the source study measured them.
        Line thickness shows each food source’s share of the consumer’s diet.
      </div>

      <div className={panelBox}>
        <h5 className={panelHeading}>How to explore</h5>
        Select a node for its dependency view. The layout runs from producers (bottom) to apex
        predators (top) — energy flows upward.
      </div>

      <button
        type="button"
        disabled
        title="Coming in next build"
        aria-disabled="true"
        className="mt-2 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-[10px] bg-paper2 px-3 py-2.5 text-[13.5px] font-semibold text-ink opacity-60"
      >
        <FlaskIcon />
        Simulate a removal
      </button>
    </div>
  )
}
