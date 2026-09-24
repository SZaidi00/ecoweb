import { Suspense, lazy, useState, type ReactNode } from 'react'

import { parseWebIndex } from '@foodweb/schema'

import { BiomeGrid } from '@/components/BiomeGrid'
import { getRawWebIndex } from '@/lib/webData'

// The map (react-simple-maps + d3 + bundled TopoJSON) loads after the hero
// paints, keeping first paint of the landing fast.
const MapLanding = lazy(() =>
  import('@/components/MapLanding').then((m) => ({ default: m.MapLanding })),
)

function MapFallback() {
  // Matches the map's aspect and filter-bar height to avoid layout shift.
  return (
    <div role="status" aria-label="Loading map">
      <div className="h-[30px] rounded-full bg-paper2" />
      <div className="mt-4 aspect-[2/1] w-full animate-pulse rounded-2xl border border-hairline bg-paper2" />
    </div>
  )
}

type LandingView = 'map' | 'grid'

const VIEW_STORAGE_KEY = 'foodweb.landingView'

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canopy'

/** Session-persisted landing view; map is the default, grid is the fallback. */
function initialView(): LandingView {
  try {
    return window.sessionStorage.getItem(VIEW_STORAGE_KEY) === 'grid' ? 'grid' : 'map'
  } catch {
    return 'map'
  }
}

function ViewToggle({ view, onChange }: { view: LandingView; onChange: (v: LandingView) => void }) {
  const options: { id: LandingView; label: string; icon: ReactNode }[] = [
    {
      id: 'map',
      label: 'Map',
      icon: (
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
          <path
            d="M1.5 7h11M7 1.5c-2.8 3-2.8 8 0 11M7 1.5c2.8 3 2.8 8 0 11"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      ),
    },
    {
      id: 'grid',
      label: 'Grid',
      icon: (
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <rect x="1.5" y="1.5" width="4.6" height="4.6" rx="1" stroke="currentColor" strokeWidth="1.2" />
          <rect x="7.9" y="1.5" width="4.6" height="4.6" rx="1" stroke="currentColor" strokeWidth="1.2" />
          <rect x="1.5" y="7.9" width="4.6" height="4.6" rx="1" stroke="currentColor" strokeWidth="1.2" />
          <rect x="7.9" y="7.9" width="4.6" height="4.6" rx="1" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      ),
    },
  ]
  return (
    <div
      role="group"
      aria-label="Choose landing view"
      className="inline-flex overflow-hidden rounded-lg border border-hairline bg-panel"
    >
      {options.map(({ id, label, icon }) => (
        <button
          key={id}
          type="button"
          aria-pressed={view === id}
          onClick={() => onChange(id)}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-[12.5px] font-medium transition-colors [&:not(:first-child)]:border-l [&:not(:first-child)]:border-hairline ${
            view === id ? 'bg-canopy text-panel' : 'text-inkSoft hover:bg-paper2'
          } ${focusRing}`}
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  )
}

/**
 * Landing page (`#/`): hero + interactive world-map atlas of ecosystem webs.
 * The biome browse grid remains available via the Map/Grid toggle — it is
 * also the primary path for screen readers.
 */
export function ExplorePage() {
  const index = parseWebIndex(getRawWebIndex())
  const [view, setView] = useState<LandingView>(initialView)

  const changeView = (next: LandingView) => {
    setView(next)
    try {
      window.sessionStorage.setItem(VIEW_STORAGE_KEY, next)
    } catch {
      // private-mode storage failures are fine: the toggle just won't persist
    }
  }

  return (
    <section aria-label="Explore ecosystems" className="mx-auto max-w-[1060px] px-8 pb-12 pt-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-3.5 text-xs font-semibold uppercase tracking-[1.6px] text-canopy">
            An atlas of living connections
          </p>
          <h1 className="mb-4 font-heading text-[44px] font-semibold leading-[1.12]">
            Every species depends
            <br />
            on something. <em className="italic text-canopy">See it.</em>
          </h1>
        </div>
        <div className="pb-1.5">
          <ViewToggle view={view} onChange={changeView} />
        </div>
      </div>
      <p className="mb-8 max-w-[620px] text-base leading-relaxed text-inkSoft">
        Explore real, published food webs from ecosystems around the world. Select a species to
        trace what it relies on — and what relies on it. Remove one, and watch the ripple move
        through the whole web.
      </p>
      {view === 'map' ? (
        <Suspense fallback={<MapFallback />}>
          <MapLanding index={index} />
        </Suspense>
      ) : (
        <BiomeGrid webs={index.webs} />
      )}
    </section>
  )
}
