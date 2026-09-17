/**
 * Access to the curated web data in the repo-level `data/webs/` directory.
 *
 * The JSON is bundled at build time via Vite's `import.meta.glob` (eager).
 * The glob reaches outside `apps/web` into `data/webs`: in dev, Vite's
 * `fs.allow` covers the monorepo workspace root; in the static build the
 * matched files are simply bundled into the JS. So the same code path works
 * for `npm run dev` and the GitHub Pages build, with no `public/` copies and
 * no runtime `fetch`.
 */
const dataModules = import.meta.glob<unknown>('../../../../data/webs/*.json', {
  eager: true,
  import: 'default',
})

function findBySuffix(suffix: string): unknown | undefined {
  const entry = Object.entries(dataModules).find(([path]) => path.endsWith(suffix))
  return entry?.[1]
}

/** Raw contents of data/webs/index.json (unvalidated — validate with zod). */
export function getRawWebIndex(): unknown {
  return findBySuffix('/index.json')
}

/** Raw contents of data/webs/<id>.json, or undefined if not present. */
export function getRawWeb(id: string): unknown | undefined {
  return findBySuffix(`/${id}.json`)
}
