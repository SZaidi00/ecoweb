import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { parseWebIndex, type Biome, type SpeciesEntry } from '@foodweb/schema'

import { KIND_LABELS } from '@/components/SpeciesPanel'
import { BIOMES } from '@/lib/biomes'
import { loadSpeciesEntry } from '@/lib/speciesData'
import { getRawWebIndex } from '@/lib/webData'

/** Web id → display name, for the description attribution line. */
const webNameById = new Map(
  parseWebIndex(getRawWebIndex()).webs.map((web) => [web.id, web.name]),
)

type EntryState =
  | { status: 'loading' }
  | { status: 'ok'; entry: SpeciesEntry }
  | { status: 'missing' }

function biomeLabel(id: string): string {
  return BIOMES[id as Biome]?.name ?? id
}

/** Species entry route: one species or group, everywhere it appears. */
export function SpeciesEntryPage() {
  const { slug } = useParams<{ slug: string }>()
  const [state, setState] = useState<EntryState>({ status: 'loading' })

  useEffect(() => {
    let alive = true
    setState({ status: 'loading' })
    if (!slug) {
      setState({ status: 'missing' })
      return
    }
    loadSpeciesEntry(slug)
      .then((entry) => {
        if (alive) setState(entry ? { status: 'ok', entry } : { status: 'missing' })
      })
      .catch(() => {
        if (alive) setState({ status: 'missing' })
      })
    return () => {
      alive = false
    }
  }, [slug])

  if (state.status === 'loading') {
    return (
      <section className="mx-auto max-w-2xl px-6 py-10" role="status">
        <p className="text-sm text-muted">Loading…</p>
      </section>
    )
  }

  if (state.status === 'missing') {
    return (
      <section className="mx-auto max-w-2xl px-6 py-10">
        <p className="text-xs font-semibold uppercase tracking-[1.6px] text-canopy">
          Species index
        </p>
        <h2 className="mt-2 font-heading text-2xl font-semibold text-ink">Entry not found</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink/80">
          There’s no species-index entry named “{slug}”. It may have been renamed or removed
          when the index was regenerated.
        </p>
        <p className="mt-4">
          <Link to="/species" className="text-sm font-medium text-accent hover:underline">
            ← Back to the species index
          </Link>
        </p>
      </section>
    )
  }

  const { entry } = state
  const sourceWebName = webNameById.get(entry.sourceWeb) ?? entry.sourceWeb

  return (
    <section className="mx-auto max-w-2xl px-6 py-10">
      <p className="text-xs font-semibold uppercase tracking-[1.6px] text-canopy">
        Species index
      </p>
      <h2 className="mt-2 font-heading text-2xl font-semibold text-ink">{entry.name}</h2>
      <p className="mt-1 text-sm text-muted">
        {KIND_LABELS[entry.kind]} · Appears in {entry.occurrences.length}{' '}
        {entry.occurrences.length === 1 ? 'ecosystem' : 'ecosystems'}
      </p>

      <div className="mt-6 rounded-xl border border-hairline bg-panel px-4 py-3.5 text-sm leading-relaxed text-inkSoft">
        <h3 className="mb-2 text-[10.5px] font-bold uppercase tracking-[0.9px] text-canopy">
          What this node represents
        </h3>
        <p>{entry.description}</p>
        {entry.externalLinks && (
          <p className="mt-2">
            {entry.externalLinks.wikipedia && (
              <a
                href={entry.externalLinks.wikipedia}
                target="_blank"
                rel="noreferrer"
                className="mr-3 text-xs font-medium text-accent hover:underline"
              >
                Wikipedia →
              </a>
            )}
            {entry.externalLinks.iNaturalist && (
              <a
                href={entry.externalLinks.iNaturalist}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-accent hover:underline"
              >
                iNaturalist →
              </a>
            )}
          </p>
        )}
        <p className="mt-2 text-xs text-muted">
          Description from the {sourceWebName} web — it reflects how that web models this
          node; other webs may pool or split it differently.
        </p>
      </div>

      {entry.notes?.map((note) => (
        <p
          key={note}
          className="mt-4 rounded-xl border border-hairline bg-panel px-4 py-3.5 text-xs italic leading-relaxed text-inkSoft"
        >
          {note}
        </p>
      ))}

      <h3 className="mt-10 font-heading text-lg font-semibold text-ink">Where it appears</h3>
      <ul className="mt-2 divide-y divide-hairline rounded-xl border border-hairline bg-panel">
        {entry.occurrences.map((occurrence) => (
          <li key={`${occurrence.web}/${occurrence.node}`}>
            <Link
              to={`/web/${occurrence.web}?focus=${occurrence.node}`}
              className="group flex items-baseline justify-between gap-3 px-3 py-2.5 transition-colors hover:bg-paper"
            >
              <span>
                <span className="text-sm font-medium text-ink group-hover:text-accent group-hover:underline">
                  {occurrence.webName}
                </span>
                <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                  {biomeLabel(occurrence.biome)} · trophic level{' '}
                  {occurrence.trophicLevel.toFixed(1)}
                  {occurrence.displayName !== entry.name && (
                    <> · appears as “{occurrence.displayName}”</>
                  )}
                </span>
              </span>
              <span className="text-xs text-accent" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-8">
        <Link to="/species" className="text-sm font-medium text-accent hover:underline">
          ← Back to the species index
        </Link>
      </p>
    </section>
  )
}
