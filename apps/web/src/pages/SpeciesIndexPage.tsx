import { Link } from 'react-router-dom'

import { parseWebIndex } from '@foodweb/schema'

import { KIND_LABELS } from '@/components/SpeciesPanel'
import { getSpeciesIndex } from '@/lib/speciesData'
import { getRawWebIndex } from '@/lib/webData'

/** Web id → display name, for the ecosystem chips. */
const webNameById = new Map(
  parseWebIndex(getRawWebIndex()).webs.map((web) => [web.id, web.name]),
)

function scrollToLetter(letter: string) {
  document.getElementById(`letter-${letter}`)?.scrollIntoView({ behavior: 'smooth' })
}

/** Cross-ecosystem species index: every indexed group, alphabetically. */
export function SpeciesIndexPage() {
  const index = getSpeciesIndex()

  const groups = new Map<string, typeof index.entries>()
  for (const entry of index.entries) {
    const letter = entry.name.charAt(0).toUpperCase()
    const bucket = groups.get(letter)
    if (bucket) bucket.push(entry)
    else groups.set(letter, [entry])
  }
  const letters = [...groups.keys()].sort()

  return (
    <section className="mx-auto max-w-2xl px-6 py-10">
      <p className="text-xs font-semibold uppercase tracking-[1.6px] text-canopy">Reference</p>
      <h2 className="mt-2 font-heading text-2xl font-semibold text-ink">Species index</h2>
      <p className="mt-3 text-sm leading-relaxed text-ink/80">
        {index.entryCount} groups across {index.webCount} ecosystems — every species and
        functional group in the atlas, gathered into one alphabetical list.
      </p>

      <nav aria-label="Jump to letter" className="mt-6 flex flex-wrap gap-1">
        {letters.map((letter) => (
          <button
            key={letter}
            type="button"
            onClick={() => scrollToLetter(letter)}
            className="rounded px-2 py-1 text-xs font-semibold text-accent transition-colors hover:bg-paper2"
          >
            {letter}
          </button>
        ))}
      </nav>

      {letters.map((letter) => (
        <section key={letter} aria-labelledby={`letter-${letter}`}>
          <h3
            id={`letter-${letter}`}
            className="mt-8 scroll-mt-4 border-b border-hairline pb-1 font-heading text-lg font-semibold text-ink"
          >
            {letter}
          </h3>
          <ul className="mt-2 divide-y divide-hairline rounded-xl border border-hairline bg-panel">
            {groups.get(letter)!.map((entry) => (
              <li
                key={entry.slug}
                className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5 px-3 py-2.5"
              >
                <Link
                  to={`/species/${entry.slug}`}
                  className="text-sm font-medium text-ink hover:text-accent hover:underline"
                >
                  {entry.name}
                </Link>
                <span className="text-xs text-muted">{KIND_LABELS[entry.kind]}</span>
                <span className="ml-auto flex flex-wrap items-center justify-end gap-1">
                  {entry.webs.length > 1 && (
                    <span className="mr-1 text-[11px] font-semibold text-canopy">
                      {entry.webs.length} ecosystems
                    </span>
                  )}
                  {entry.webs.map((webId) => (
                    <span
                      key={webId}
                      className="rounded-full bg-paper2 px-2 py-0.5 text-[11px] text-inkSoft"
                    >
                      {webNameById.get(webId) ?? webId}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  )
}
