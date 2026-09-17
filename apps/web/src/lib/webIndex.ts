/**
 * Shape of data/webs/index.json, the browse-layer listing of all webs.
 *
 * The canonical contract (zod schema + types) lives in @foodweb/schema;
 * scripts/pipeline/validate.py checks every index entry against the actual
 * web files on disk (node counts, ids, biome, provenance, ...).
 */
export { webIndexSchema } from '@foodweb/schema'
export type { WebIndex, WebIndexEntry } from '@foodweb/schema'
