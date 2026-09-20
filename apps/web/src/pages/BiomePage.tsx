import { Link, useParams } from 'react-router-dom'

import { parseWebIndex } from '@foodweb/schema'
import type { Biome, WebIndexEntry } from '@foodweb/schema'

import { BIOMES, biomeLabel } from '@/lib/biomes'
import { getRawWebIndex } from '@/lib/webData'

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canopy'

function ProvenanceBadge({ provenance }: { provenance: WebIndexEntry['provenance'] }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-canopySoft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.6px] text-canopy">
      <span className="h-1.5 w-1.5 rounded-full bg-canopy" />
      {provenance === 'empirical' ? 'Empirical study' : 'Curated composite'}
    </span>
  )
}

function WebCard({ entry }: { entry: WebIndexEntry }) {
  return (
    <Link
      to={`/web/${entry.id}`}
      className={`block rounded-2xl border border-hairline bg-panel p-6 transition duration-200 hover:-translate-y-[2px] hover:border-canopy hover:shadow-lg hover:shadow-canopy/15 ${focusRing}`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="font-heading text-[22px] font-semibold">{entry.name}</h2>
        <ProvenanceBadge provenance={entry.provenance} />
      </div>
      <p className="mt-1 text-[12.5px] text-muted">
        {entry.location} · {entry.nodeCount} functional groups
      </p>
      <p className="mt-3 max-w-[620px] text-sm leading-relaxed text-inkSoft">{entry.tagline}</p>
    </Link>
  )
}

/** Biome route: /biome/:biomeId — the webs of one biome. */
export function BiomePage() {
  const { biomeId } = useParams<{ biomeId: string }>()
  const info = biomeId && biomeId in BIOMES ? BIOMES[biomeId as Biome] : undefined

  if (!info) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="max-w-md rounded-xl border border-hairline bg-panel p-8 text-center">
          <h1 className="font-heading text-xl font-semibold">Biome not found</h1>
          <p className="mt-2 text-sm text-inkSoft">
            {biomeId
              ? `There is no biome called “${biomeId}” in this atlas.`
              : 'No biome selected.'}
          </p>
          <Link to="/" className={`mt-4 inline-block rounded-lg text-sm font-medium text-canopy ${focusRing}`}>
            ← Back to Explore
          </Link>
        </div>
      </div>
    )
  }

  const webs = parseWebIndex(getRawWebIndex()).webs.filter((entry) => entry.biome === biomeId)

  return (
    <section
      aria-label={`${info.name} ecosystems`}
      className="mx-auto max-w-[1060px] px-8 pb-12 pt-10"
    >
      <Link
        to="/"
        className={`inline-block rounded-lg text-sm font-medium text-muted transition-colors hover:text-canopy ${focusRing}`}
      >
        ← Explore
      </Link>
      <p className="mb-3.5 mt-8 text-xs font-semibold uppercase tracking-[1.6px] text-canopy">
        {info.subtitle}
      </p>
      <h1 className="mb-4 font-heading text-[44px] font-semibold leading-[1.12]">{info.name}</h1>
      <p className="mb-11 max-w-[620px] text-base leading-relaxed text-inkSoft">
        {info.description}
      </p>

      {webs.length > 0 ? (
        <div className="grid gap-4">
          {webs.map((entry) => (
            <WebCard key={entry.id} entry={entry} />
          ))}
        </div>
      ) : (
        <div className="max-w-md rounded-xl border border-hairline bg-panel p-8 text-center">
          <p className="font-heading text-lg font-semibold">Coming soon</p>
          <p className="mt-2 text-sm text-inkSoft">
            No {biomeLabel(biomeId as Biome)} webs are curated yet — check back as the atlas grows.
          </p>
        </div>
      )}
    </section>
  )
}
