/**
 * GraphView — the PixiJS renderer for a GraphModel.
 *
 * Renders static structure once per web (bands, edges, nodes, labels) and
 * repaints cheap per-frame state (hover halos, selection rings, keyboard
 * focus rings, ambient particles) from model change events. The view never
 * owns graph state; it subscribes to the model and mirrors it.
 */

import { Application, Container, Graphics, Text, TextStyle } from 'pixi.js'

import type { GraphModel, LayoutEdge, LayoutNode } from '@foodweb/cascade'
import { TROPHIC_BAND_COUNT, TROPHIC_BAND_LABELS, bandCenterY } from '@foodweb/cascade'

import { colors, fonts } from '@/theme/tokens'

import {
  cubicPoint,
  cubicTangent,
  edgeCurve,
  hash01,
  parameterAtDistanceFromEnd,
  sampleCurve,
  type EdgeCurve,
} from './geometry'

function hex(color: string): number {
  return Number.parseInt(color.slice(1), 16)
}

const NODE_RADIUS = 10
const HALO_RADIUS = 19
const ARROW_LENGTH = 8
const ARROW_WIDTH = 7
/** Arrowheads sit this far before the predator center (node radius + gap). */
const ARROW_OFFSET = NODE_RADIUS + 6
const PARTICLE_TRAVERSAL_MS = 8000

/** Band fill colors, bottom (band 1) to top (band 5), from the trophic ramp. */
const BAND_COLORS = [
  colors.trophic.producers,
  colors.trophic.primaryConsumers,
  colors.trophic.midLevel,
  colors.trophic.upperLevel,
  colors.trophic.apex,
]

export interface ScreenPoint {
  x: number
  y: number
}

export interface GraphViewOptions {
  host: HTMLElement
  model: GraphModel
  /** Ambient particles off (prefers-reduced-motion or user toggle). */
  particlesEnabled: boolean
  onNodeSelected: (id: string) => void
  onNodeHover: (id: string | null, screen: ScreenPoint | null) => void
  /** Tap on empty canvas (not a drag, not a node) — used to clear selection. */
  onBackgroundTap: () => void
}

interface NodeView {
  layout: LayoutNode
  container: Container
  halo: Graphics
  body: Graphics
  selectedRing: Graphics
  focusRing: Graphics
  label: Text
}

interface EdgeView {
  edge: LayoutEdge
  curve: EdgeCurve
  particle: Graphics
  /** Traversal parameter 0–1; advances each frame. */
  t: number
  /** Traversal speed in t-units per ms; qualitative edges drift slower. */
  speed: number
}

export class GraphView {
  private readonly options: GraphViewOptions
  private readonly model: GraphModel
  private app: Application | null = null
  private world: Container | null = null
  private labelLayer: Container | null = null
  private particleLayer: Container | null = null
  private nodeViews: NodeView[] = []
  private edgeViews: EdgeView[] = []

  private viewScale = 1
  private viewX = 0
  private viewY = 0
  private fitScale = 1
  private userTransformed = false

  private particlesEnabled: boolean
  private frameListener: ((deltaMS: number) => void) | null = null
  private unsubscribeModel: (() => void) | null = null
  private resizeObserver: ResizeObserver | null = null
  private cleanupInput: (() => void) | null = null
  private destroyed = false

  private dragState: { pointerId: number; startX: number; startY: number; moved: number } | null =
    null

  private constructor(options: GraphViewOptions) {
    this.options = options
    this.model = options.model
    this.particlesEnabled = options.particlesEnabled
  }

  static async create(options: GraphViewOptions): Promise<GraphView> {
    const view = new GraphView(options)
    await view.init()
    return view
  }

  private async init(): Promise<void> {
    const { host } = this.options
    // Wait for webfonts so Pixi text is measured against Inter, not a fallback.
    await document.fonts.ready

    const app = new Application()
    await app.init({
      backgroundAlpha: 0,
      resizeTo: host,
      antialias: true,
      resolution: Math.min(window.devicePixelRatio || 1, 2),
      autoDensity: true,
    })
    if (this.destroyed) {
      app.destroy(true)
      return
    }
    this.app = app
    host.appendChild(app.canvas)

    this.world = new Container()
    app.stage.addChild(this.world)
    this.buildStaticScene()
    this.buildInput()

    this.unsubscribeModel = this.model.subscribe(() => this.applyState())
    this.applyState()

    this.resizeObserver = new ResizeObserver(() => {
      if (!this.userTransformed) this.fitView()
    })
    this.resizeObserver.observe(host)
    this.fitView()

    app.ticker.add((ticker) => {
      this.tick(ticker.deltaMS)
      this.frameListener?.(ticker.deltaMS)
    })
  }

  // ---------------------------------------------------------------- build

  private buildStaticScene(): void {
    const world = this.world!
    world.addChild(this.buildBandLayer())

    const edgeLayer = new Container()
    this.particleLayer = new Container()
    const nodeById = new Map(this.model.layout.nodes.map((node) => [node.id, node]))
    for (const edge of this.model.layout.edges) {
      const prey = nodeById.get(edge.prey)
      const predator = nodeById.get(edge.predator)
      if (!prey || !predator) continue
      const curve = edgeCurve({ x: prey.x, y: prey.y }, { x: predator.x, y: predator.y })
      edgeLayer.addChild(this.buildEdgeGraphics(edge, curve))
      this.particleLayer.addChild(this.buildParticle(edge, curve))
    }
    world.addChild(edgeLayer)
    world.addChild(this.particleLayer)

    const nodeLayer = new Container()
    this.labelLayer = new Container()
    const wrapWidths = this.bandWrapWidths()
    for (const layout of this.model.layout.nodes) {
      const view = this.buildNode(layout, wrapWidths.get(layout.band) ?? 140)
      this.nodeViews.push(view)
      nodeLayer.addChild(view.container)
      this.labelLayer.addChild(view.label)
    }
    world.addChild(nodeLayer)
    world.addChild(this.labelLayer)
  }

  private buildBandLayer(): Container {
    const layer = new Container()
    const rects = new Graphics()
    const laneHalfHeight = 46
    for (let band = 1; band <= TROPHIC_BAND_COUNT; band++) {
      const centerY = bandCenterY(band)
      rects
        .roundRect(8, centerY - laneHalfHeight, this.model.layout.width - 16, laneHalfHeight * 2, 10)
        .fill({ color: hex(colors.canopy), alpha: 0.05 })
      const label = new Text({
        text: TROPHIC_BAND_LABELS[band - 1].toUpperCase(),
        style: new TextStyle({
          fontFamily: fonts.sans.join(', '),
          fontSize: 10,
          fontWeight: '600',
          letterSpacing: 1.4,
          fill: hex(colors.muted),
        }),
        alpha: 0.75,
      })
      label.anchor.set(0, 1)
      label.position.set(18, centerY - laneHalfHeight - 6)
      layer.addChild(label)
    }
    layer.addChildAt(rects, 0)
    return layer
  }

  private edgeWidth(edge: LayoutEdge): number {
    return edge.qualitative ? 1.3 : 1.1 + (edge.weight ?? 0) * 3.6
  }

  private buildEdgeGraphics(edge: LayoutEdge, curve: EdgeCurve): Graphics {
    const g = new Graphics()
    const strokeStyle = {
      width: this.edgeWidth(edge),
      color: hex(colors.edge),
      alpha: edge.qualitative ? 0.55 : 0.5,
      cap: 'round' as const,
    }
    if (edge.qualitative) {
      this.traceDashed(g, sampleCurve(curve, 120))
    } else {
      g.moveTo(curve.a.x, curve.a.y)
      g.bezierCurveTo(curve.c1.x, curve.c1.y, curve.c2.x, curve.c2.y, curve.b.x, curve.b.y)
    }
    g.stroke(strokeStyle)

    // Arrowhead just outside the predator node, pointing up the tangent.
    const t = parameterAtDistanceFromEnd(curve, ARROW_OFFSET)
    const tip = cubicPoint(curve, t)
    const dir = cubicTangent(curve, t)
    const normal = { x: -dir.y, y: dir.x }
    const base = { x: tip.x - dir.x * ARROW_LENGTH, y: tip.y - dir.y * ARROW_LENGTH }
    g.poly([
      tip.x,
      tip.y,
      base.x + normal.x * (ARROW_WIDTH / 2),
      base.y + normal.y * (ARROW_WIDTH / 2),
      base.x - normal.x * (ARROW_WIDTH / 2),
      base.y - normal.y * (ARROW_WIDTH / 2),
    ]).fill({ color: hex(colors.edge), alpha: strokeStyle.alpha + 0.15 })
    return g
  }

  /** Trace sampled points as an on/off dash pattern (7px on, 5px off). */
  private traceDashed(g: Graphics, points: { x: number; y: number }[]): void {
    let drawing = true
    let runLength = 0
    g.moveTo(points[0].x, points[0].y)
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1]
      const point = points[i]
      runLength += Math.hypot(point.x - prev.x, point.y - prev.y)
      if (runLength >= (drawing ? 7 : 5)) {
        drawing = !drawing
        runLength = 0
      }
      if (drawing) g.lineTo(point.x, point.y)
      else g.moveTo(point.x, point.y)
    }
  }

  private buildParticle(edge: LayoutEdge, curve: EdgeCurve): Graphics {
    const particle = new Graphics()
      .circle(0, 0, 2.2)
      .fill({ color: hex(colors.inkSoft), alpha: 0.4 })
    const t = hash01(`${edge.prey}->${edge.predator}`)
    this.edgeViews.push({
      edge,
      curve,
      particle,
      t,
      // Qualitative edges carry unquantified flow — drift them a touch slower.
      speed: (edge.qualitative ? 0.7 : 1) / PARTICLE_TRAVERSAL_MS,
    })
    const p = cubicPoint(curve, t)
    particle.position.set(p.x, p.y)
    return particle
  }

  /** Per-band label wrap width derived from the tightest horizontal gap. */
  private bandWrapWidths(): Map<number, number> {
    const byBand = new Map<number, number[]>()
    for (const node of this.model.layout.nodes) {
      byBand.set(node.band, [...(byBand.get(node.band) ?? []), node.x])
    }
    const widths = new Map<number, number>()
    for (const [band, xs] of byBand) {
      xs.sort((a, b) => a - b)
      let minGap = 160
      for (let i = 1; i < xs.length; i++) minGap = Math.min(minGap, xs[i] - xs[i - 1])
      widths.set(band, Math.max(90, Math.min(150, minGap - 8)))
    }
    return widths
  }

  private buildNode(layout: LayoutNode, labelWrapWidth: number): NodeView {
    const container = new Container()
    container.position.set(layout.x, layout.y)
    container.eventMode = 'static'
    container.cursor = 'pointer'

    const halo = new Graphics()
      .circle(0, 0, HALO_RADIUS)
      .fill({ color: hex(colors.focus), alpha: 0 })
    const body = new Graphics()
      .circle(0, 0, NODE_RADIUS)
      .fill(hex(BAND_COLORS[layout.band - 1]))
      .stroke({ width: 2.5, color: hex(colors.panel) })
    const selectedRing = new Graphics()
      .circle(0, 0, NODE_RADIUS + 5)
      .stroke({ width: 3, color: hex(colors.focus) })
    selectedRing.visible = false
    const focusRing = new Graphics()
      .circle(0, 0, NODE_RADIUS + 5)
      .stroke({ width: 2, color: hex(colors.canopy) })
    focusRing.visible = false

    const label = new Text({
      text: layout.node.displayName,
      style: new TextStyle({
        fontFamily: fonts.sans.join(', '),
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 13,
        align: 'center',
        wordWrap: true,
        wordWrapWidth: labelWrapWidth,
        fill: hex(colors.ink),
        stroke: { color: hex(colors.paper), width: 3.5, join: 'round' },
      }),
    })
    label.anchor.set(0.5, 1)
    label.position.set(layout.x, layout.y - NODE_RADIUS - 6)

    container.addChild(halo, body, selectedRing, focusRing)

    container.on('pointerover', () => {
      this.model.setHovered(layout.id)
      this.options.onNodeHover(layout.id, this.screenPositionOfNode(layout.id))
    })
    container.on('pointerout', () => {
      this.model.setHovered(null)
      this.options.onNodeHover(null, null)
    })
    container.on('pointertap', (event) => {
      event.stopPropagation()
      if ((this.dragState?.moved ?? 0) > 5) return
      this.options.onNodeSelected(layout.id)
    })

    return { layout, container, halo, body, selectedRing, focusRing, label }
  }

  // ------------------------------------------------------------- viewport

  private fitView(): void {
    const { host } = this.options
    const pad = 28
    const { width, height } = this.model.layout
    const scaleX = (host.clientWidth - pad * 2) / width
    const scaleY = (host.clientHeight - pad * 2) / height
    this.fitScale = Math.min(scaleX, scaleY, 1.25)
    this.viewScale = this.fitScale
    this.viewX = (host.clientWidth - width * this.viewScale) / 2
    this.viewY = (host.clientHeight - height * this.viewScale) / 2
    this.applyViewport()
  }

  private applyViewport(): void {
    if (!this.world) return
    this.world.scale.set(this.viewScale)
    this.world.position.set(this.viewX, this.viewY)
    // Fade labels out when zoomed far out; always legible near fit scale.
    if (this.labelLayer) {
      const ratio = this.viewScale / this.fitScale
      const alpha = Math.min(1, Math.max(0, (ratio - 0.55) / 0.35))
      for (const child of this.labelLayer.children) child.alpha = alpha
    }
  }

  private zoomAt(screen: ScreenPoint, factor: number): void {
    const next = Math.min(3.2, Math.max(this.fitScale * 0.55, this.viewScale * factor))
    if (next === this.viewScale) return
    const worldX = (screen.x - this.viewX) / this.viewScale
    const worldY = (screen.y - this.viewY) / this.viewScale
    this.viewScale = next
    this.viewX = screen.x - worldX * next
    this.viewY = screen.y - worldY * next
    this.userTransformed = true
    this.applyViewport()
  }

  private buildInput(): void {
    const app = this.app!
    const canvas = app.canvas
    app.stage.eventMode = 'static'
    app.stage.hitArea = app.screen

    app.stage.on('pointerdown', (event) => {
      this.dragState = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        moved: 0,
      }
    })
    app.stage.on('pointertap', () => {
      if ((this.dragState?.moved ?? 0) <= 5) this.options.onBackgroundTap()
    })
    const onMove = (event: PointerEvent) => {
      const drag = this.dragState
      if (!drag || event.pointerId !== drag.pointerId) return
      const dx = event.movementX
      const dy = event.movementY
      drag.moved += Math.abs(dx) + Math.abs(dy)
      if (drag.moved > 5) {
        this.viewX += dx
        this.viewY += dy
        this.userTransformed = true
        this.applyViewport()
      }
    }
    const onUp = () => {
      this.dragState = null
    }
    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      const rect = canvas.getBoundingClientRect()
      this.zoomAt(
        { x: event.clientX - rect.left, y: event.clientY - rect.top },
        Math.exp(-event.deltaY * 0.0016),
      )
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    canvas.addEventListener('wheel', onWheel, { passive: false })
    this.cleanupInput = () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      canvas.removeEventListener('wheel', onWheel)
    }
  }

  // -------------------------------------------------------------- runtime

  private tick(deltaMS: number): void {
    if (!this.particleLayer) return
    const visible = this.particlesEnabled
    if (this.particleLayer.visible !== visible) this.particleLayer.visible = visible
    if (!visible) return
    for (const view of this.edgeViews) {
      view.t = (view.t + deltaMS * view.speed) % 1
      const p = cubicPoint(view.curve, view.t)
      view.particle.position.set(p.x, p.y)
    }
  }

  /** Repaint transient state from the model. GPU-cheap: alpha/visibility only. */
  private applyState(): void {
    const hoveredId = this.model.getHoveredId()
    const selectedId = this.model.getSelectedId()
    const keyboardFocusId = this.model.getKeyboardFocusId()
    for (const view of this.nodeViews) {
      const hovered = view.layout.id === hoveredId
      view.halo.alpha = hovered ? 0.16 : 0
      view.body.scale.set(hovered ? 1.15 : 1)
      view.selectedRing.visible = view.layout.id === selectedId
      view.focusRing.visible = view.layout.id === keyboardFocusId
    }
  }

  // ------------------------------------------------------------------ API

  setParticlesEnabled(enabled: boolean): void {
    this.particlesEnabled = enabled
  }

  /** Frame-time hook for the perf harness; receives ticker deltaMS. */
  setFrameListener(listener: ((deltaMS: number) => void) | null): void {
    this.frameListener = listener
  }

  /** Programmed pan/zoom sweep for the perf harness. t in radians. */
  debugCameraSweep(t: number): void {
    if (!this.world) return
    const { host } = this.options
    const { width, height } = this.model.layout
    this.viewScale = this.fitScale * (1 + 0.45 * Math.sin(t))
    this.viewX = (host.clientWidth - width * this.viewScale) / 2 + 120 * Math.sin(t * 1.7)
    this.viewY = (host.clientHeight - height * this.viewScale) / 2 + 90 * Math.cos(t * 1.3)
    this.userTransformed = true
    this.applyViewport()
  }

  resetView(): void {
    this.userTransformed = false
    this.fitView()
  }

  screenPositionOfNode(id: string): ScreenPoint | null {
    if (!this.world) return null
    const node = this.model.getNode(id)
    if (!node) return null
    return this.world.toGlobal({ x: node.x, y: node.y })
  }

  destroy(): void {
    this.destroyed = true
    this.unsubscribeModel?.()
    this.resizeObserver?.disconnect()
    this.cleanupInput?.()
    this.frameListener = null
    if (this.app) {
      this.app.destroy(true, { children: true })
      this.app = null
    }
  }
}
