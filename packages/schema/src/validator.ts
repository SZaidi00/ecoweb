import { z } from 'zod'

import type { EcosystemWeb, WebIndex } from './types'

/**
 * zod mirror of `schema/ecosystem-web.schema.json`.
 *
 * The two validators are kept in agreement by the round-trip tests in
 * `test/roundtrip.test.ts`, which run the same fixtures through both and
 * assert identical accept/reject outcomes. The compile-time assertions at
 * the bottom of this file keep the zod schema in agreement with the
 * hand-written interfaces in `types.ts`.
 */

const idSchema = z
  .string()
  .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'expected a kebab-case id')

const biomeSchema = z.enum([
  'marine',
  'estuary',
  'freshwater',
  'terrestrial-forest',
  'grassland',
  'tundra',
  'desert',
  'wetland',
])

const provenanceSchema = z.enum(['empirical', 'composite'])

const webMetaSchema = z
  .object({
    id: idSchema,
    name: z.string().min(1),
    location: z.string().min(1),
    biome: biomeSchema,
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180),
    provenance: provenanceSchema,
    tagline: z.string().min(1).max(120),
    citations: z.array(z.string().min(1)).min(1),
    sourceUrl: z.string().url(),
    licenseNote: z.string().min(1),
    curator: z.string().min(1),
    dateCurated: z.string().date(),
  })
  .strict()

const externalLinksSchema = z
  .object({
    wikipedia: z.string().url().optional(),
    iNaturalist: z.string().url().optional(),
  })
  .strict()

const nodeMetricsSchema = z
  .object({
    biomass: z.number().optional(),
    respiration: z.number().optional(),
    import: z.number().optional(),
    export: z.number().optional(),
  })
  .strict()

const layoutHintSchema = z
  .object({
    x: z.number().min(0).max(100),
    y: z.number().min(0).max(100),
  })
  .strict()

export const webNodeSchema = z
  .object({
    id: idSchema,
    displayName: z.string().min(1),
    kind: z.enum(['functional-group', 'species', 'life-stage-group']),
    trophicLevel: z.number().min(1),
    functionalRole: z.enum([
      'producer',
      'detritus',
      'primary-consumer',
      'intermediate-consumer',
      'top-consumer',
    ]),
    description: z.string().min(1),
    externalLinks: externalLinksSchema.optional(),
    metrics: nodeMetricsSchema.optional(),
    layout: layoutHintSchema,
  })
  .strict()

const weightedEdgeSchema = z
  .object({
    prey: idSchema,
    predator: idSchema,
    weight: z.number().min(0).max(1),
  })
  .strict()

const qualitativeEdgeSchema = z
  .object({
    prey: idSchema,
    predator: idSchema,
    qualitative: z.literal(true),
  })
  .strict()

/**
 * An edge has EITHER a `weight` (0–1) OR `qualitative: true`. Because both
 * branches are strict, an edge carrying both keys — or neither — is rejected.
 */
export const webEdgeSchema = z.union([weightedEdgeSchema, qualitativeEdgeSchema])

export const ecosystemWebSchema = z
  .object({
    meta: webMetaSchema,
    nodes: z.array(webNodeSchema).min(1).max(25),
    edges: z.array(webEdgeSchema),
  })
  .strict()

/** Entry of data/webs/index.json (validated structurally by scripts/pipeline/validate.py). */
export const webIndexEntrySchema = z
  .object({
    id: idSchema,
    name: z.string().min(1),
    biome: biomeSchema,
    location: z.string().min(1),
    nodeCount: z.number().int().min(1),
    provenance: provenanceSchema,
    tagline: z.string().min(1).max(120),
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180),
  })
  .strict()

export const webIndexSchema = z.object({ webs: z.array(webIndexEntrySchema) }).strict()

export type { EcosystemWeb } from './types'

/** Parse and validate an unknown value as an EcosystemWeb; throws ZodError. */
export function parseEcosystemWeb(data: unknown): EcosystemWeb {
  return ecosystemWebSchema.parse(data)
}

/** Parse and validate an unknown value as a WebIndex; throws ZodError. */
export function parseWebIndex(data: unknown): WebIndex {
  return webIndexSchema.parse(data)
}

// --- Compile-time equivalence: zod inference must match types.ts exactly ---

type Equals<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false

function assertType<T extends true>(): T {
  return true as T
}

assertType<Equals<z.infer<typeof ecosystemWebSchema>, EcosystemWeb>>()
assertType<Equals<z.infer<typeof webIndexSchema>, WebIndex>>()
