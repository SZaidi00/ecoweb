export { GraphModel, type GraphModelEvent } from './graph-model'
export {
  buildDependencyChains,
  connectionCount,
  oneHopVisibleSet,
  sortedNeighbors,
  transitivePreyClosure,
  CHAIN_NODE_BUDGET,
  type ChainPath,
  type ChainSegment,
  type DependencyChain,
  type Neighbor,
  type NeighborList,
} from './focus'
export {
  bandForLevel,
  bandCenterY,
  computeLayout,
  TROPHIC_BAND_COUNT,
  TROPHIC_BAND_LABELS,
  WORLD,
  WORLD_HEIGHT,
  type GraphLayout,
  type LayoutEdge,
  type LayoutNode,
} from './layout'

/**
 * Placeholder for the cascade simulation engine (Phase 4).
 *
 * This package is pure TypeScript: it must never import React or Pixi.
 * The renderer consumes plain state produced here.
 */
export function describeCascadeEngine(): string {
  return 'Cascade simulation is not implemented yet (Phase 4).'
}
