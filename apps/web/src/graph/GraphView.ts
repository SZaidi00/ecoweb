/**
 * GraphView — the PixiJS renderer for a GraphModel.
 *
 * Renders static structure once per web (bands, edges, nodes, labels) and
 * repaints cheap per-frame state (hover halos, selection rings, keyboard
 * focus rings, ambient particles) from model change events. The view never
 * owns graph state; it subscribes to the model and mirrors it.
 */

import { Application, Circle, Container, Graphics, Text, TextStyle } from 'pixi.js'

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

/** Blend two hex colors; t = 1 returns `b`. Desaturates dimmed node bodies. */
function mixHex(a: string, b: string, t: number): number {
  const ca = hex(a)
  const cb = hex(b)
  const r = Math.round(((ca >> 16) & 0xff) * (1 - t) + ((cb >> 16) & 0xff) * t)
  const g = Math.round(((ca >> 8) & 0xff) * (1 - t) + ((cb >> 8) & 0xff) * t)
  const bl = Math.round((ca & 0xff) * (1 - t) + (cb & 0xff) * t)
  return (r << 16) | (g << 8) | bl
}

const NODE_RADIUS = 10
const HALO_RADIUS = 19
const ARROW_LENGTH = 8
const ARROW_WIDTH = 7
/** Arrowheads sit this far before the predator center (node radius + gap). */
const ARROW_OFFSET = NODE_RADIUS + 6
const PARTICLE_TRAVERSAL_MS = 8000
/** Alpha for nodes/edges outside the focus-mode visible set. */
const DIM_ALPHA = 0.1
/** How far dimmed node bodies shift toward warm grey (mockup: saturate(.2)). */
const DIM_DESATURATION = 0.8
const CHIP_RADIUS = 8.5
const CHIP_OFFSET_X = 16
const CHIP_OFFSET_Y = -13
const CAMERA_FOCUS_MS = 400
/** Camera scale limits while eased into a focused species. */
const FOCUS_MAX_ZOOM = 2.0
const FOCUS_MIN_ZOOM_RATIO = 0.85

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
  /** Node or connection-chip tap — enter focus mode on that species. */
  onNodeSelected: (id: string) => void
  onNodeHover: (id: string | null, screen: ScreenPoint | null) => void
  /** Connection-chip hover; count is the node's total link count. */
  onChipHover?: (count: number | null, screen: ScreenPoint | null) => void
  /** Tap on empty canvas (not a drag, not a node) — used to clear focus. */
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
  /** Outside the focus-mode visible set: alpha-dimmed and desaturated. */
  dimmed: boolean
}

/** Focus-mode edge emphasis: lit (touches focus), muted, dim, or normal. */
type EdgeEmphasis = 'normal' | 'lit' | 'muted' | 'dim'

interface EdgeView {
  edge: LayoutEdge
  curve: EdgeCurve
  graphics: Graphics
  particle: Graphics
  emphasis: EdgeEmphasis
  /** Traversal parameter 0–1; advances each frame. */
  t: number
  /** Traversal speed in t-units per ms; qualitative edges drift slower. */
  speed: number
}

interface CameraPose {
  scale: number
  x: number
  y: number
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
  /** Zoom-fade factor for labels, set by applyViewport; dimming multiplies it. */
  private labelZoomAlpha = 1

  private chipLayer: Container | null = null
  /** Focused id on last repaint; focus visuals only re-render when it changes. */
  private focusKey = ''
  private cameraAnim: {
    elapsed: number
    duration: number
    from: CameraPose
    to: CameraPose
  } | null = null
  /** Camera pose captured when focus mode was entered, restored on exit. */
  private viewBeforeFocus: CameraPose | null = null

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
      const view: EdgeView = {
        edge,
        curve,
        graphics: new Graphics(),
        particle: new Graphics(),
        emphasis: 'normal',
        t: hash01(`${edge.prey}->${edge.predator}`),
        // Qualitative edges carry unquantified flow — drift them a touch slower.
        speed: (edge.qualitative ? 0.7 : 1) / PARTICLE_TRAVERSAL_MS,
      }
      this.paintEdge(view)
      const p = cubicPoint(curve, view.t)
      view.particle.position.set(p.x, p.y)
      this.edgeViews.push(view)
      edgeLayer.addChild(view.graphics)
      this.particleLayer.addChild(view.particle)
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

    // Connection-count chips float above labels in focus mode.
    this.chipLayer = new Container()
    world.addChild(this.chipLayer)
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

  /**
   * (Re)paint one edge and its particle for the current emphasis. Geometry
   * never changes — only color/alpha — so focus mode is a cheap redraw of
   * 58 strokes, not a scene rebuild.
   */
  private paintEdge(view: EdgeView): void {
    const { edge, curve, graphics: g, emphasis } = view
    const lit = emphasis === 'lit'
    const color = hex(lit ? colors.focus : colors.edge)
    const alpha = lit ? 0.95 : emphasis === 'muted' ? 0.3 : edge.qualitative ? 0.55 : 0.5
    g.clear()
    const strokeStyle = {
      width: lit ? Math.max(2, this.edgeWidth(edge)) : this.edgeWidth(edge),
      color,
      alpha,
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
    ]).fill({ color, alpha: Math.min(1, alpha + 0.15) })
    g.alpha = emphasis === 'dim' ? DIM_ALPHA : 1

    view.particle
      .clear()
      .circle(0, 0, 2.2)
      .fill({ color: hex(lit ? colors.focus : colors.inkSoft), alpha: lit ? 0.85 : 0.4 })
    view.particle.alpha = emphasis === 'dim' ? DIM_ALPHA : emphasis === 'muted' ? 0.4 : 1
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

    const view: NodeView = {
      layout,
      container,
      halo,
      body,
      selectedRing,
      focusRing,
      label,
      dimmed: false,
    }
    this.paintNodeBody(view)
    return view
  }

  /** Node bodies redraw (never re-layout) so dimmed nodes can desaturate. */
  private paintNodeBody(view: NodeView): void {
    const base = BAND_COLORS[view.layout.band - 1]
    view.body
      .clear()
      .circle(0, 0, NODE_RADIUS)
      .fill(view.dimmed ? mixHex(base, colors.muted, DIM_DESATURATION) : hex(base))
      .stroke({ width: 2.5, color: hex(colors.panel) })
  }

  // ------------------------------------------------------- focus chips

  /** Rebuild connection-count chips for the current focus visible set. */
  private rebuildChips(focusedId: string | null, visible: ReadonlySet<string> | null): void {
    const layer = this.chipLayer
    if (!layer) return
    for (const child of layer.removeChildren()) child.destroy({ children: true })
    if (!focusedId || !visible) return

    for (const node of this.model.layout.nodes) {
      if (node.id === focusedId || !visible.has(node.id)) continue
      const count = this.model.connectionCount(node.id)
      if (count < 2) continue
      layer.addChild(this.buildChip(node, count))
    }
  }

  /** A chip showing a neighbor's total link count; tapping refocuses on it. */
  private buildChip(node: LayoutNode, count: number): Container {
    const chip = new Container()
    chip.position.set(node.x + CHIP_OFFSET_X, node.y + CHIP_OFFSET_Y)
    chip.eventMode = 'static'
    chip.cursor = 'pointer'
    chip.hitArea = new Circle(0, 0, CHIP_RADIUS + 5)

    const circle = new Graphics()
      .circle(0, 0, CHIP_RADIUS)
      .fill(hex(colors.panel))
      .stroke({ width: 1, color: hex(colors.hairline) })
    const text = new Text({
      text: String(count),
      style: new TextStyle({
        fontFamily: fonts.sans.join(', '),
        fontSize: 9.5,
        fontWeight: '600',
        fill: hex(colors.inkSoft),
      }),
    })
    text.anchor.set(0.5)
    chip.addChild(circle, text)

    chip.on('pointertap', (event) => {
      event.stopPropagation()
      if ((this.dragState?.moved ?? 0) > 5) return
      this.options.onNodeSelected(node.id)
    })
    chip.on('pointerover', () => {
      this.options.onChipHover?.(count, {
        x: this.screenPositionOfNode(node.id)?.x ?? 0,
        y: (this.screenPositionOfNode(node.id)?.y ?? 0) - 14,
      })
    })
    chip.on('pointerout', () => this.options.onChipHover?.(null, null))
    return chip
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
    const ratio = this.viewScale / this.fitScale
    this.labelZoomAlpha = Math.min(1, Math.max(0, (ratio - 0.55) / 0.35))
    this.updateLabelAlphas()
  }

  private updateLabelAlphas(): void {
    for (const view of this.nodeViews) {
      view.label.alpha = this.labelZoomAlpha * (view.dimmed ? DIM_ALPHA : 1)
    }
  }

  /** Ease the camera to a pose over `duration` ms (instant when motion is off). */
  private easeCameraTo(to: CameraPose, duration: number = CAMERA_FOCUS_MS): void {
    if (duration <= 0 || !this.particlesEnabled) {
      this.cameraAnim = null
      this.viewScale = to.scale
      this.viewX = to.x
      this.viewY = to.y
      this.applyViewport()
      return
    }
    this.cameraAnim = {
      elapsed: 0,
      duration,
      from: { scale: this.viewScale, x: this.viewX, y: this.viewY },
      to,
    }
  }

  /** Camera pose framing the focus visible set with room for labels/chips. */
  private focusTarget(visible: ReadonlySet<string>): CameraPose {
    const { host } = this.options
    let minX = Infinity
    let maxX = -Infinity
    let minY = Infinity
    let maxY = -Infinity
    for (const node of this.model.layout.nodes) {
      if (!visible.has(node.id)) continue
      minX = Math.min(minX, node.x)
      maxX = Math.max(maxX, node.x)
      minY = Math.min(minY, node.y)
      maxY = Math.max(maxY, node.y)
    }
    const padX = 110
    minX -= padX
    maxX += padX
    minY -= 90 // labels sit above nodes
    maxY += 110
    const w = Math.max(1, maxX - minX)
    const h = Math.max(1, maxY - minY)
    const padScreen = 40
    const scale = Math.max(
      this.fitScale * FOCUS_MIN_ZOOM_RATIO,
      Math.min(
        (host.clientWidth - padScreen * 2) / w,
        (host.clientHeight - padScreen * 2) / h,
        FOCUS_MAX_ZOOM,
      ),
    )
    return {
      scale,
      x: (host.clientWidth - w * scale) / 2 - minX * scale,
      y: (host.clientHeight - h * scale) / 2 - minY * scale,
    }
  }

  /** Ease into the focused neighborhood on entry/hop, back out on exit. */
  private animateCameraForFocus(focusedId: string | null, visible: ReadonlySet<string> | null): void {
    if (focusedId && visible) {
      if (!this.viewBeforeFocus) {
        this.viewBeforeFocus = { scale: this.viewScale, x: this.viewX, y: this.viewY }
      }
      this.userTransformed = true
      this.easeCameraTo(this.focusTarget(visible))
    } else if (this.viewBeforeFocus) {
      const back = this.viewBeforeFocus
      this.viewBeforeFocus = null
      this.easeCameraTo(back)
      this.userTransformed = false
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
        this.cameraAnim = null
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
      this.cameraAnim = null
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
    if (this.cameraAnim) {
      const anim = this.cameraAnim
      anim.elapsed += deltaMS
      const p = Math.min(1, anim.elapsed / anim.duration)
      const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2
      this.viewScale = anim.from.scale + (anim.to.scale - anim.from.scale) * e
      this.viewX = anim.from.x + (anim.to.x - anim.from.x) * e
      this.viewY = anim.from.y + (anim.to.y - anim.from.y) * e
      this.applyViewport()
      if (p >= 1) this.cameraAnim = null
    }
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

  /**
   * Repaint transient state from the model. Hover/keyboard rings are
   * alpha/visibility only; focus transitions additionally redraw edge
   * colors, desaturate dimmed node bodies, and rebuild chips — all on the
   * focus change only, never per frame.
   */
  private applyState(): void {
    const hoveredId = this.model.getHoveredId()
    const focusedId = this.model.getFocusedId()
    const keyboardFocusId = this.model.getKeyboardFocusId()
    for (const view of this.nodeViews) {
      const hovered = view.layout.id === hoveredId
      view.halo.alpha = hovered ? 0.16 : 0
      view.body.scale.set(hovered ? 1.15 : 1)
      view.selectedRing.visible = view.layout.id === focusedId
      view.focusRing.visible = view.layout.id === keyboardFocusId
    }

    const nextKey = focusedId ?? ''
    if (nextKey !== this.focusKey) {
      this.focusKey = nextKey
      const visible = this.model.getVisibleIds()
      this.applyFocusVisuals(focusedId, visible)
      this.animateCameraForFocus(focusedId, visible)
    }
  }

  /** One-time repaint when focus changes: dim, desaturate, light edges, chips. */
  private applyFocusVisuals(focusedId: string | null, visible: ReadonlySet<string> | null): void {
    for (const view of this.nodeViews) {
      const dimmed = visible !== null && !visible.has(view.layout.id)
      if (dimmed !== view.dimmed) {
        view.dimmed = dimmed
        this.paintNodeBody(view)
      }
      view.container.alpha = dimmed ? DIM_ALPHA : 1
    }
    this.updateLabelAlphas()

    for (const view of this.edgeViews) {
      let emphasis: EdgeEmphasis = 'normal'
      if (visible) {
        const touchesFocus = view.edge.prey === focusedId || view.edge.predator === focusedId
        const bothVisible = visible.has(view.edge.prey) && visible.has(view.edge.predator)
        emphasis = touchesFocus ? 'lit' : bothVisible ? 'muted' : 'dim'
      }
      if (emphasis !== view.emphasis) {
        view.emphasis = emphasis
        this.paintEdge(view)
      }
    }

    this.rebuildChips(focusedId, visible)
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
