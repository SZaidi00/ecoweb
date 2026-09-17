/**
 * Design tokens — the single source of truth for the visual language.
 * Approved earthy palette per the master prompt §1a. No hex values may
 * appear anywhere else in the app; tailwind.config.js mirrors this file.
 */

export const colors = {
  /** Warm paper background. */
  paper: '#f6f2e9',
  /** Panel / card surface. */
  panel: '#fffdf6',
  /** Hairline borders and dividers. */
  hairline: '#ddd4bf',
  /** Primary text. */
  ink: '#2b2620',
  /** Brand deep-canopy green. */
  canopy: '#3e5c41',
  /** Secondary text (muted warm gray-brown). */
  inkSoft: '#57503f',
  /** Tertiary text, lane labels, legends. */
  muted: '#8a7f68',
  /** Default edge color: muted warm gray. The focus accent is reserved for focus mode. */
  edge: '#b3a88d',
  /** Canvas dot-texture color on the paper background. */
  paperDot: '#e3dbc8',
  /** Focus accent (species focus view). */
  focus: '#b8772e',
  /** Trophic ramp (soil → leaf → sun), bottom to top of the web. */
  trophic: {
    /** Producers & detritus. */
    producers: '#5b4a35',
    /** Primary consumers. */
    primaryConsumers: '#6d8a4e',
    /** Mid-level consumers. */
    midLevel: '#3f7d6b',
    /** Upper-level consumers. */
    upperLevel: '#c98a2b',
    /** Apex predators. */
    apex: '#a4542e',
  },
  /** Cascade-mode states. Never rely on color alone: each state is paired
   * with an inline SVG line icon (see components/CascadeStateIcon). */
  cascade: {
    stressed: '#d99a26',
    severe: '#c0532f',
    collapsed: '#9a927f',
    released: '#5c9c4f',
  },
} as const

export const fonts = {
  /** Fraunces (serif) for headings and editorial moments. */
  heading: ['Fraunces', 'Georgia', 'serif'],
  /** Inter for UI text. */
  sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
} as const

export type CascadeState = keyof typeof colors.cascade

export interface CascadeStateMeta {
  readonly id: CascadeState
  readonly label: string
  readonly color: string
}

export const cascadeStates: readonly CascadeStateMeta[] = [
  { id: 'stressed', label: 'Stressed', color: colors.cascade.stressed },
  { id: 'severe', label: 'Severe', color: colors.cascade.severe },
  { id: 'collapsed', label: 'Collapsed', color: colors.cascade.collapsed },
  { id: 'released', label: 'Released', color: colors.cascade.released },
] as const
