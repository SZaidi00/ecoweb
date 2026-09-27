/**
 * Access to the generated cross-ecosystem species index in `data/species/`.
 *
 * Mirrors the webData.ts pattern: the tiny `index.json` listing is bundled
 * eagerly so `getSpeciesIndex()` and `findSpeciesRef()` stay synchronous,
 * while each `entries/<slug>.json` becomes its own lazy chunk fetched on
 * first use. The glob reaches outside `apps/web` into `data/species` —
 * covered by Vite's `fs.allow` in dev and bundled at build time.
 */

import {
  parseSpeciesEntry,
  parseSpeciesIndex,
  type SpeciesEntry,
  type SpeciesIndex,
} from '@foodweb/schema'

const indexModules = import.meta.glob<unknown>('../../../../data/species/index.json', {
  eager: true,
  import: 'default',
})

const entryModules = import.meta.glob<unknown>('../../../../data/species/entries/*.json', {
  import: 'default',
})

let cachedIndex: SpeciesIndex | undefined

/** Parsed contents of data/species/index.json (validated once, then memoized). */
export function getSpeciesIndex(): SpeciesIndex {
  if (!cachedIndex) {
    const entry = Object.entries(indexModules).find(([path]) => path.endsWith('/index.json'))
    cachedIndex = parseSpeciesIndex(entry?.[1])
  }
  return cachedIndex
}

/**
 * Parsed contents of data/species/entries/<slug>.json, loaded on demand;
 * resolves to undefined if no such entry is bundled.
 */
export async function loadSpeciesEntry(slug: string): Promise<SpeciesEntry | undefined> {
  const entry = Object.entries(entryModules).find(([path]) => path.endsWith(`/${slug}.json`))
  if (!entry) return undefined
  return parseSpeciesEntry(await entry[1]())
}

export interface SpeciesRef {
  slug: string
  name: string
  webCount: number
}

let cachedLookup: Map<string, SpeciesRef> | undefined

/**
 * Reverse lookup from a (web, node) pair to its species-index entry, or null
 * when the node is not part of the cross-ecosystem index.
 */
export function findSpeciesRef(webId: string, nodeId: string): SpeciesRef | null {
  if (!cachedLookup) {
    cachedLookup = new Map()
    for (const entry of getSpeciesIndex().entries) {
      const ref: SpeciesRef = { slug: entry.slug, name: entry.name, webCount: entry.webs.length }
      for (const occurrence of entry.occurrences) {
        cachedLookup.set(`${occurrence.web}/${occurrence.node}`, ref)
      }
    }
  }
  return cachedLookup.get(`${webId}/${nodeId}`) ?? null
}
