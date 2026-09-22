import { Link } from 'react-router-dom'

import { parseWebIndex } from '@foodweb/schema'
import type { Biome, WebIndexEntry } from '@foodweb/schema'

import { BIOMES, BIOME_ORDER } from '@/lib/biomes'
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

function EcoCard({ entry }: { entry: WebIndexEntry }) {
  return (
    <Link
      to={`/web/${entry.id}`}
      className={`mt-3.5 block rounded-xl border border-hairline bg-paper px-4 py-3.5 transition-colors hover:border-canopy ${focusRing}`}
    >
      <h3 className="font-heading text-[15.5px] font-semibold">{entry.name}</h3>
      <p className="mb-2 mt-1 text-xs text-muted">
        {entry.nodeCount} functional groups · {entry.location}
      </p>
      <ProvenanceBadge provenance={entry.provenance} />
      <p className="mt-2 text-[12.5px] leading-relaxed text-inkSoft">{entry.tagline}</p>
    </Link>
  )
}

function BiomeCard({ id, webs }: { id: Biome; webs: WebIndexEntry[] }) {
  const info = BIOMES[id]
  return (
    <div className="rounded-2xl border border-hairline bg-panel p-[22px] transition duration-200 hover:-translate-y-[3px] hover:border-canopy hover:shadow-lg hover:shadow-canopy/15">
      <Link to={`/biome/${id}`} className={`block rounded-lg ${focusRing}`}>
        <div
          className="mb-3 h-[34px] w-[34px] rounded-[10px]"
          style={{ background: info.swatch }}
        />
        <h2 className="font-heading text-[19px] font-semibold">{info.name}</h2>
        <p className="text-[12.5px] text-muted">
          {webs.length} ecosystem{webs.length === 1 ? '' : 's'}
        </p>
      </Link>
      {webs.map((entry) => (
        <EcoCard key={entry.id} entry={entry} />
      ))}
    </div>
  )
}

function EmptyBiomeCard({ id }: { id: Biome }) {
  const info = BIOMES[id]
  return (
    <div
      aria-disabled="true"
      className="rounded-2xl border border-hairline bg-panel p-[22px] opacity-50"
    >
      <div
        className="mb-3 h-[34px] w-[34px] rounded-[10px]"
        style={{ background: info.swatch }}
      />
      <h2 className="font-heading text-[19px] font-semibold">{info.name}</h2>
      <p className="text-[12.5px] text-muted">{info.subtitle}</p>
      <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-paper2 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.6px] text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-muted" />
        Coming soon
      </span>
    </div>
  )
}

/** Landing page: the biome browse grid over data/webs/index.json. */
export function ExplorePage() {
  const index = parseWebIndex(getRawWebIndex())
  const websByBiome = new Map<Biome, WebIndexEntry[]>()
  for (const entry of index.webs) {
    const list = websByBiome.get(entry.biome) ?? []
    list.push(entry)
    websByBiome.set(entry.biome, list)
  }

  return (
    <section aria-label="Explore ecosystems" className="mx-auto max-w-[1060px] px-8 pb-12 pt-16">
      <p className="mb-3.5 text-xs font-semibold uppercase tracking-[1.6px] text-canopy">
        An atlas of living connections
      </p>
      <h1 className="mb-4 font-heading text-[44px] font-semibold leading-[1.12]">
        Every species depends
        <br />
        on something. <em className="italic text-canopy">See it.</em>
      </h1>
      <p className="mb-11 max-w-[620px] text-base leading-relaxed text-inkSoft">
        Explore real, published food webs from ecosystems around the world. Select a species to
        trace what it relies on — and what relies on it. Remove one, and watch the ripple move
        through the whole web.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
        {BIOME_ORDER.map((id) => {
          const webs = websByBiome.get(id) ?? []
          return webs.length > 0 ? (
            <BiomeCard key={id} id={id} webs={webs} />
          ) : (
            <EmptyBiomeCard key={id} id={id} />
          )
        })}
      </div>
    </section>
  )
}
