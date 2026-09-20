/**
 * Access to the curated web data in the repo-level `data/webs/` directory.
 *
 * The data is split in two:
 *   * `index.json` — the tiny browse-layer listing — is bundled eagerly, so
 *     `getRawWebIndex()` can stay synchronous for the landing page.
 *   * Individual webs load on demand via a lazy `import.meta.glob`: each
 *     `<id>.json` becomes its own chunk, fetched the first time
 *     `loadRawWeb(id)` is called.
 *
 * The glob reaches outside `apps/web` into `data/webs`: in dev, Vite's
 * `fs.allow` covers the monorepo workspace root; in the static build the
 * matched files are bundled into the JS. So the same code path works for
 * `npm run dev` and the GitHub Pages build, with no `public/` copies and
 * no runtime `fetch`.
 */
const indexModules = import.meta.glob<unknown>('../../../../data/webs/index.json', {
  eager: true,
  import: 'default',
})

const webModules = import.meta.glob<unknown>(
  ['../../../../data/webs/*.json', '!../../../../data/webs/index.json'],
  { import: 'default' },
)

/** Raw contents of data/webs/index.json (unvalidated — validate with zod). */
export function getRawWebIndex(): unknown {
  const entry = Object.entries(indexModules).find(([path]) => path.endsWith('/index.json'))
  return entry?.[1]
}

/**
 * Raw contents of data/webs/<id>.json, loaded on demand; resolves to
 * undefined if no such web is bundled.
 */
export async function loadRawWeb(id: string): Promise<unknown | undefined> {
  const entry = Object.entries(webModules).find(([path]) => path.endsWith(`/${id}.json`))
  if (!entry) return undefined
  return entry[1]()
}
