/**
 * Biome registry for the browse layer: display names, subtitles, blurbs and
 * swatch colors for every biome id in the schema. Swatches must reference
 * the design tokens (no new hex values in app code).
 */

import type { Biome } from '@foodweb/schema'

import { colors } from '@/theme/tokens'

export interface BiomeInfo {
  /** Display name, e.g. "Temperate forest". */
  name: string
  /** Short card subtitle, e.g. "Lakes & rivers". */
  subtitle: string
  /** One–two sentence blurb for the biome page. */
  description: string
  /** CSS `background` value for the card swatch, built from tokens only. */
  swatch: string
}

export const BIOMES: Record<Biome, BiomeInfo> = {
  marine: {
    name: 'Marine',
    subtitle: 'Oceans & coasts',
    description:
      'Saltwater webs from kelp forests to open ocean, where a handful of forage species often carry the whole system.',
    swatch: `linear-gradient(135deg, ${colors.trophic.midLevel}, ${colors.trophic.primaryConsumers})`,
  },
  estuary: {
    name: 'Estuary',
    subtitle: 'Where rivers meet the sea',
    description:
      'Brackish webs at the river mouth, built on detritus and filter feeders and serving as nurseries for ocean fish.',
    swatch: `linear-gradient(135deg, ${colors.accent}, ${colors.trophic.producers})`,
  },
  freshwater: {
    name: 'Freshwater',
    subtitle: 'Lakes & rivers',
    description:
      'Lake and river webs, tightly coupled to the land around them and sensitive to changes at the base.',
    swatch: colors.muted,
  },
  'terrestrial-forest': {
    name: 'Temperate forest',
    subtitle: 'Woodlands & forest floors',
    description:
      'Forest webs layered from soil decomposers to canopy predators, with much of the action hidden in the leaf litter.',
    swatch: colors.canopy,
  },
  grassland: {
    name: 'Grassland',
    subtitle: 'Prairies & savannas',
    description:
      'Open-country webs built on grasses and grazers, where burrowers and predators share the same exposed stage.',
    swatch: colors.trophic.upperLevel,
  },
  tundra: {
    name: 'Tundra',
    subtitle: 'Arctic & alpine barrens',
    description:
      'Short-season webs of the far north and high peaks, compressed into a few intense months of feeding and breeding.',
    swatch: colors.edge,
  },
  desert: {
    name: 'Desert',
    subtitle: 'Arid lands',
    description:
      'Water-limited webs where detritus and seeds matter as much as live prey, and nocturnal hunters rule.',
    swatch: colors.trophic.apex,
  },
  wetland: {
    name: 'Wetland',
    subtitle: 'Marshes, bogs & floodplains',
    description:
      'Half-land, half-water webs that filter rivers and nurse the young of species from many other biomes.',
    swatch: colors.accent,
  },
}

/** Display order for the browse grid (matches the schema enum order). */
export const BIOME_ORDER: Biome[] = [
  'marine',
  'estuary',
  'freshwater',
  'terrestrial-forest',
  'grassland',
  'tundra',
  'desert',
  'wetland',
]

export function biomeLabel(id: Biome): string {
  return BIOMES[id].name
}
