import { Link } from 'react-router-dom'

import type { Biome, WebIndexEntry } from '@foodweb/schema'

import { BIOMES, BIOME_ORDER } from '@/lib/biomes'

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

/**
 * Biome browse grid — the list/browse mode of the landing page. Unchanged
 * from the pre-map landing; doubles as the screen-reader-primary path.
 */
export function BiomeGrid({ webs }: { webs: WebIndexEntry[] }) {
  const websByBiome = new Map<Biome, WebIndexEntry[]>()
  for (const entry of webs) {
    const list = websByBiome.get(entry.biome) ?? []
    list.push(entry)
    websByBiome.set(entry.biome, list)
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
      {BIOME_ORDER.map((id) => {
        const entries = websByBiome.get(id) ?? []
        return entries.length > 0 ? (
          <BiomeCard key={id} id={id} webs={entries} />
        ) : (
          <EmptyBiomeCard key={id} id={id} />
        )
      })}
    </div>
  )
}
