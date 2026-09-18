/**
 * GraphModel — plain-TypeScript state container for one rendered web.
 *
 * Holds the web data, its deterministic layout, and transient interaction
 * state (hover, species focus, keyboard focus). Emits a single `change`
 * event; the Pixi view subscribes and repaints. Zero rendering imports —
 * the model never knows who is listening.
 */

import type { EcosystemWeb } from '@foodweb/schema'

import { connectionCount, oneHopVisibleSet } from './focus'
import { computeLayout, type GraphLayout, type LayoutNode } from './layout'

export type GraphModelEvent = 'change'

type Listener = () => void

export class GraphModel {
  readonly web: EcosystemWeb
  readonly layout: GraphLayout

  private hoveredId: string | null = null
  private focusedId: string | null = null
  private visibleIds: Set<string> | null = null
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

  getFocusedId(): string | null {
    return this.focusedId
  }

  getKeyboardFocusId(): string | null {
    return this.keyboardFocusId
  }

  setHovered(id: string | null): void {
    if (id === this.hoveredId) return
    this.hoveredId = id
    this.emit()
  }

  /**
   * Enter focus mode on a node (null clears it). Unknown ids clear focus.
   * Focus state is plain data: the visible 1-hop set is derived here, and
   * the view renders it with alpha/tint diffs only.
   */
  focus(id: string | null): void {
    const next = id && this.getNode(id) ? id : null
    if (next === this.focusedId) return
    this.focusedId = next
    this.visibleIds = next ? oneHopVisibleSet(this.web, next) : null
    this.emit()
  }

  /** The focus-mode visible set (focused node + 1-hop neighbors), or null. */
  getVisibleIds(): ReadonlySet<string> | null {
    return this.visibleIds
  }

  /** Total link count in the full web — the connection-chip number. */
  connectionCount(id: string): number {
    return connectionCount(this.web, id)
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
