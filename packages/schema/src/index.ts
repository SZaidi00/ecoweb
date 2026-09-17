/**
 * @foodweb/schema — the canonical EcosystemWeb data contract.
 *
 * - JSON Schema: `schema/ecosystem-web.schema.json` (single source of truth,
 *   also enforced by scripts/pipeline/validate.py)
 * - TypeScript types: re-exported from `types.ts`
 * - zod validators: `ecosystemWebSchema`, `parseEcosystemWeb`, `webIndexSchema`, `parseWebIndex`
 *
 * Schema, types, and zod validator are proven to agree: compile-time
 * assertions in `validator.ts`, round-trip tests in `test/roundtrip.test.ts`.
 * Field-by-field documentation: `docs/data-format.md`.
 *
 * This package is pure TypeScript: it must never import React or Pixi.
 */

export type {
  Biome,
  EcosystemWeb,
  ExternalLinks,
  FunctionalRole,
  LayoutHint,
  NodeKind,
  NodeMetrics,
  Provenance,
  QualitativeEdge,
  WebEdge,
  WebIndex,
  WebIndexEntry,
  WebMeta,
  WebNode,
  WeightedEdge,
} from './types'

export {
  ecosystemWebSchema,
  parseEcosystemWeb,
  parseWebIndex,
  webEdgeSchema,
  webIndexEntrySchema,
  webIndexSchema,
  webNodeSchema,
} from './validator'
