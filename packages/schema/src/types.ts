/**
 * EcosystemWeb — the canonical data contract for one curated ecosystem web.
 *
 * These interfaces are hand-written; `validator.ts` proves at compile time
 * that they are exactly equivalent to the inferred type of the zod schema,
 * and the package tests prove at run time that the zod schema and the JSON
 * Schema (`schema/ecosystem-web.schema.json`) accept and reject the same
 * documents. Field-by-field documentation lives in `docs/data-format.md`.
 */

export type Biome =
  | 'marine'
  | 'freshwater'
  | 'terrestrial-forest'
  | 'grassland'
  | 'tundra'
  | 'desert'
  | 'wetland'

export type Provenance = 'empirical' | 'composite'

export type NodeKind = 'functional-group' | 'species' | 'life-stage-group'

export type FunctionalRole =
  | 'producer'
  | 'detritus'
  | 'primary-consumer'
  | 'intermediate-consumer'
  | 'top-consumer'

export interface WebMeta {
  /** Stable kebab-case identifier; the file in data/webs/ is named `<id>.json`. */
  id: string
  /** Human-readable ecosystem name. */
  name: string
  /** Human-readable location. */
  location: string
  biome: Biome
  /** Latitude of a representative point (-90..90), for a future map view. */
  lat: number
  /** Longitude of a representative point (-180..180), for a future map view. */
  lng: number
  /** 'empirical' = one published study; 'composite' = curated from several sources. */
  provenance: Provenance
  /** One-line hook shown on browse cards (max 120 chars). */
  tagline: string
  /** Full citations for every source used; at least one required. */
  citations: string[]
  /** URL of the primary source (paper, dataset, or data portal). */
  sourceUrl: string
  /** License/attribution note for the underlying data. */
  licenseNote: string
  /** Name or handle of the curator. */
  curator: string
  /** ISO 8601 date (YYYY-MM-DD) the web was curated. */
  dateCurated: string
}

export interface ExternalLinks {
  wikipedia?: string
  iNaturalist?: string
}

/**
 * Optional quantitative research metrics from the source study, kept clearly
 * separate from the core web structure. Never fabricate; omit when the
 * source does not report them.
 */
export interface NodeMetrics {
  biomass?: number
  respiration?: number
  import?: number
  export?: number
}

/**
 * Layout hint in a normalized 0–100 coordinate space (x: 0 = left,
 * y: 0 = bottom). Seeded from trophic level; the renderer may refine x but
 * must respect trophic ordering.
 */
export interface LayoutHint {
  x: number
  y: number
}

export interface WebNode {
  /** Stable kebab-case identifier, unique within the web. */
  id: string
  /** Plain-language name shown in the UI. */
  displayName: string
  /**
   * Granularity of the node, exactly as the source measured it. When not
   * 'species', `description` MUST state the aggregation (see the salmon rule
   * in docs/data-format.md).
   */
  kind: NodeKind
  /** Trophic level; fractional values allowed. Producers/detritus are level 1. */
  trophicLevel: number
  functionalRole: FunctionalRole
  /** Plain-language description; includes the aggregation statement for non-species nodes. */
  description: string
  externalLinks?: ExternalLinks
  metrics?: NodeMetrics
  layout: LayoutHint
}

interface EdgeBase {
  /** id of the node being eaten. */
  prey: string
  /** id of the node that eats the prey. */
  predator: string
}

/** An edge with a quantitative diet-share weight (0–1) taken from the source. */
export interface WeightedEdge extends EdgeBase {
  weight: number
}

/** An edge whose existence is documented but whose strength is not quantified. */
export interface QualitativeEdge extends EdgeBase {
  qualitative: true
}

/**
 * A trophic link from prey to predator. It carries EITHER a `weight` OR
 * `qualitative: true` — never both, never neither. Never fabricate weights.
 */
export type WebEdge = WeightedEdge | QualitativeEdge

export interface EcosystemWeb {
  meta: WebMeta
  /** 1–25 nodes (hard ceiling, enforced by schema and validator). */
  nodes: WebNode[]
  edges: WebEdge[]
}

/** One entry of data/webs/index.json, the browse-layer listing of all webs. */
export interface WebIndexEntry {
  /** Must match the `<id>.json` file and the web's `meta.id`. */
  id: string
  name: string
  biome: Biome
  location: string
  /** Must equal the web file's actual node count. */
  nodeCount: number
  provenance: Provenance
  /** One-line hook shown on browse cards (max 120 chars); matches the web's `meta.tagline`. */
  tagline: string
}

export interface WebIndex {
  webs: WebIndexEntry[]
}
