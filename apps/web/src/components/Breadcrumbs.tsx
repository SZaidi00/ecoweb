import { Link } from 'react-router-dom'

export interface BreadcrumbsProps {
  /** Biome label, e.g. "Marine". Plain text until biome pages land (Phase 5). */
  biome: string
  webName: string
  /** Focused species display name, when in focus mode. */
  focusedName: string | null
  /** "← Back to full web": the web crumb becomes a button in focus mode. */
  onClearFocus: () => void
}

function Sep() {
  return <span className="opacity-50">›</span>
}

/** Persistent Biome → Ecosystem → Species breadcrumb over the canvas. */
export function Breadcrumbs({ biome, webName, focusedName, onClearFocus }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 border-b border-hairline bg-panel px-6 py-2.5 text-[13px] text-muted"
    >
      <Link to="/" className="transition-colors hover:text-canopy">
        Explore
      </Link>
      <Sep />
      <span>{biome}</span>
      <Sep />
      {focusedName ? (
        <>
          <button
            type="button"
            onClick={onClearFocus}
            className="transition-colors hover:text-canopy"
          >
            {webName}
          </button>
          <Sep />
          <strong className="font-semibold text-ink">{focusedName}</strong>
        </>
      ) : (
        <strong className="font-semibold text-ink">{webName}</strong>
      )}
    </nav>
  )
}
