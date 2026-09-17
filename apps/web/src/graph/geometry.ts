/**
 * Cubic bezier geometry for trophic edges.
 *
 * Edges are vertical-S curves: control points sit directly above/below the
 * endpoints, so the curve leaves the prey vertically and arrives at the
 * predator vertically (arrowheads point straight up — energy flows upward).
 */

export interface Point {
  x: number
  y: number
}

export interface EdgeCurve {
  a: Point
  c1: Point
  c2: Point
  b: Point
}

/** Mockup v2 curve: bow scales with vertical distance, minimum 20px. */
export function edgeCurve(a: Point, b: Point): EdgeCurve {
  const bow = Math.max(20, Math.abs(a.y - b.y) * 0.18)
  return {
    a,
    c1: { x: a.x, y: a.y - bow },
    c2: { x: b.x, y: b.y + bow },
    b,
  }
}

export function cubicPoint(curve: EdgeCurve, t: number): Point {
  const { a, c1, c2, b } = curve
  const u = 1 - t
  const uu = u * u
  const tt = t * t
  return {
    x: uu * u * a.x + 3 * uu * t * c1.x + 3 * u * tt * c2.x + tt * t * b.x,
    y: uu * u * a.y + 3 * uu * t * c1.y + 3 * u * tt * c2.y + tt * t * b.y,
  }
}

/** Sample `segments` evenly spaced points along the curve (including both ends). */
export function sampleCurve(curve: EdgeCurve, segments: number): Point[] {
  const points: Point[] = []
  for (let i = 0; i <= segments; i++) points.push(cubicPoint(curve, i / segments))
  return points
}

/** Curve parameter whose point sits roughly `distance` world-px before the end. */
export function parameterAtDistanceFromEnd(curve: EdgeCurve, distance: number): number {
  let t = 1
  for (let i = 0; i < 60; i++) {
    const p = cubicPoint(curve, t)
    const d = Math.hypot(p.x - curve.b.x, p.y - curve.b.y)
    if (d >= distance) return t
    t -= 0.005
  }
  return 0
}

/** Unit tangent at parameter t (direction of energy flow, prey → predator). */
export function cubicTangent(curve: EdgeCurve, t: number): Point {
  const d = 0.001
  const p0 = cubicPoint(curve, Math.max(0, t - d))
  const p1 = cubicPoint(curve, Math.min(1, t + d))
  const len = Math.hypot(p1.x - p0.x, p1.y - p0.y) || 1
  return { x: (p1.x - p0.x) / len, y: (p1.y - p0.y) / len }
}

/** Deterministic 0–1 hash from a string (particle phase offsets). */
export function hash01(text: string): number {
  let hash = 2166136261
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return (hash >>> 0) / 4294967295
}
