/**
 * GraphModel — plain-TypeScript state container for one rendered web.
 *
 * Holds the web data, its deterministic layout, and transient interaction
 * state (hover, selection, keyboard focus). Emits a single `change` event;
 * the Pixi view subscribes and repaints. Zero rendering imports — the model
 * never knows who is listening.
 */

import type { EcosystemWeb } from '@foodweb/schema'

import { computeLayout, type GraphLayout, type LayoutNode } from './layout'

export type GraphModelEvent = 'change'

type Listener = () => void

export class GraphModel {
  readonly web: EcosystemWeb
  readonly layout: GraphLayout

  private hoveredId: string | null = null
  private selectedId: string | null = null
  private keyboardFocusId: string | null = null
  private readonly listeners = new Set<Listener>()

  constructor(web: EcosystemWeb) {
    this.web = web
    this.layout = computeLayout(web)
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  private emit(): void {
    for (const listener of this.listeners) listener()
  }

  getNode(id: string): LayoutNode | undefined {
    return this.layout.nodes.find((node) => node.id === id)
  }

  getHoveredId(): string | null {
    return this.hoveredId
  }

  getSelectedId(): string | null {
    return this.selectedId
  }

  getKeyboardFocusId(): string | null {
    return this.keyboardFocusId
  }

  setHovered(id: string | null): void {
    if (id === this.hoveredId) return
    this.hoveredId = id
    this.emit()
  }

  select(id: string | null): void {
    if (id === this.selectedId) return
    this.selectedId = id
    this.emit()
  }

  setKeyboardFocus(id: string | null): void {
    if (id === this.keyboardFocusId) return
    this.keyboardFocusId = id
    this.emit()
  }

  /** Direct prey (ids this node eats) and predators (ids that eat it). */
  neighbors(id: string): { prey: string[]; predators: string[] } {
    const prey: string[] = []
    const predators: string[] = []
    for (const edge of this.layout.edges) {
      if (edge.predator === id) prey.push(edge.prey)
      if (edge.prey === id) predators.push(edge.predator)
    }
    return { prey, predators }
  }
}
