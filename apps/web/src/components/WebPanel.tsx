import { Link } from 'react-router-dom'

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
export function WebPanel({
  web,
  onEnterCascadeMode,
}: {
  web: EcosystemWeb
  onEnterCascadeMode: () => void
}) {
  const pooledNode = web.nodes.find((node) => node.kind !== 'species')
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
        <h3 className={panelHeading}>About this web</h3>
        {pooledNode ? (
          <>
            Nodes are <strong className="font-semibold text-ink">functional groups</strong> — for
            example, “{pooledNode.displayName}” pools several species, exactly as the source study
            measured them.
          </>
        ) : (
          <>
            Nodes represent species and groups exactly as the source study measured them — we never
            invent resolution the data doesn’t have.
          </>
        )}{' '}
        Line thickness shows each food source’s share of the consumer’s diet.
      </div>

      <div className={panelBox}>
        <h3 className={panelHeading}>How to explore</h3>
        Select a node for its dependency view, or use{' '}
        <strong className="font-semibold text-ink">Simulate a removal</strong> to watch effects
        cascade. The layout runs from producers (bottom) to apex predators (top) — energy flows
        upward.
      </div>

      <div className={panelBox}>
        <h3 className={panelHeading}>Sources &amp; citation</h3>
        <ul className="space-y-1.5 text-xs text-inkSoft">
          {web.meta.citations.map((citation) => (
            <li key={citation}>{citation}</li>
          ))}
        </ul>
        {web.meta.sourceUrl && (
          <a
            href={web.meta.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs font-medium text-accent hover:underline"
          >
            Machine-readable source →
          </a>
        )}
        <p className="mt-2 text-[11.5px] text-muted">
          Reuse requires citing the original source — see{' '}
          <Link to="/about" className="font-medium text-accent hover:underline">
            About → Sources
          </Link>
          .
        </p>
      </div>

      <button
        type="button"
        onClick={onEnterCascadeMode}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-[10px] bg-paper2 px-3 py-2.5 text-[13.5px] font-semibold text-ink transition-colors hover:bg-hairline"
      >
        <FlaskIcon />
        Simulate a removal
      </button>
    </div>
  )
}
