/**
 * Placeholder for the EcosystemWeb data model.
 *
 * The real JSON Schema, TS types, and zod validators land in Phase 1.
 * Consumers may depend on this type existing, but must not rely on any
 * fields beyond `id` until then.
 */
export interface EcosystemWeb {
  /** Stable identifier for the ecosystem web (e.g. "prince-william-sound"). */
  readonly id: string
}
