/**
 * GraphCanvas — React wrapper around the Pixi GraphView.
 *
 * Owns the canvas host element, the paper dot-texture backdrop, the hover
 * tooltip (DOM, positioned from world→screen coordinates), and the visually
 * hidden keyboard-navigation list that makes every node reachable by Tab.
 * All graph state lives in the GraphModel; this component only bridges
 * Pixi events to React props.
 */

import { useEffect, useRef, useState } from 'react'

import type { GraphModel } from '@foodweb/cascade'

import { GraphView } from '@/graph/GraphView'
import { colors } from '@/theme/tokens'

interface TooltipState {
  text: string
  x: number
  y: number
}

export interface GraphCanvasProps {
  model: GraphModel
  particlesEnabled: boolean
  /** Fired on node/chip click or Enter (id); `null` when focus is cleared. */
  onFocusChange: (id: string | null) => void
  /**
   * 'focus' (default): clicks focus species. 'cascade-target': the next node
   * click is a removal target (cascade mode arming). 'locked': canvas clicks
   * are inert (cascade running/finished).
   */
  interactionMode?: 'focus' | 'cascade-target' | 'locked'
  /** Node picked as the cascade removal target (interactionMode === 'cascade-target'). */
  onCascadeTarget?: (id: string) => void
  /** Access to the underlying Pixi view (perf harness instrumentation). */
  onViewReady?: (view: GraphView) => void
}

export function GraphCanvas({
  model,
  particlesEnabled,
  onFocusChange,
  interactionMode = 'focus',
  onCascadeTarget,
  onViewReady,
}: GraphCanvasProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<GraphView | null>(null)
  const [tooltip, setTooltip] = useState<TooltipState | null>(null)

  // Keep latest callbacks reachable from the long-lived Pixi view without
  // re-creating the view on every render.
  const callbacksRef = useRef({ onFocusChange, onViewReady, interactionMode, onCascadeTarget })
  callbacksRef.current = { onFocusChange, onViewReady, interactionMode, onCascadeTarget }

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    let cancelled = false
    let view: GraphView | null = null

    GraphView.create({
      host,
      model,
      particlesEnabled,
      onNodeSelected: (id) => {
        const { interactionMode: mode, onCascadeTarget: onTarget } = callbacksRef.current
        if (mode === 'locked') return
        if (mode === 'cascade-target') {
          onTarget?.(id)
          return
        }
        model.focus(id)
        callbacksRef.current.onFocusChange(id)
      },
      onNodeHover: (id, screen) => {
        if (!id || !screen) {
          setTooltip(null)
          return
        }
        const node = model.getNode(id)
        setTooltip(node ? { text: node.node.displayName, x: screen.x, y: screen.y } : null)
      },
      onChipHover: (count, screen) => {
        if (count === null || !screen) {
          setTooltip(null)
          return
        }
        setTooltip({ text: `${count} connections — select to focus`, x: screen.x, y: screen.y })
      },
      onBackgroundTap: () => {
        if (callbacksRef.current.interactionMode === 'locked') return
        model.focus(null)
        callbacksRef.current.onFocusChange(null)
      },
    }).then((created) => {
      if (cancelled) {
        created.destroy()
        return
      }
      view = created
      viewRef.current = created
      callbacksRef.current.onViewReady?.(created)
    })

    return () => {
      cancelled = true
      view?.destroy()
      viewRef.current = null
    }
  }, [model]) // eslint-disable-line react-hooks/exhaustive-deps -- particlesEnabled applied below

  useEffect(() => {
    viewRef.current?.setParticlesEnabled(particlesEnabled)
  }, [particlesEnabled])

  // Tab order follows the energy flow: producers first, apex last.
  const keyboardOrder = [...model.layout.nodes].sort(
    (a, b) => a.band - b.band || a.x - b.x,
  )

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        backgroundColor: colors.paper,
        backgroundImage: `radial-gradient(${colors.paperDot} 1px, transparent 1px)`,
        backgroundSize: '26px 26px',
      }}
      data-testid="graph-canvas"
    >
      <div ref={hostRef} className="absolute inset-0" />

      {tooltip && (
        <div
          role="tooltip"
          className="pointer-events-none absolute z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-hairline bg-panel px-2.5 py-1 text-xs font-medium text-ink shadow-sm"
          style={{ left: tooltip.x, top: tooltip.y - 30 }}
        >
          {tooltip.text}
        </div>
      )}

      {/* Keyboard access: one tab stop per node, in energy-flow order. */}
      <ul className="sr-only" aria-label="Species list">
        {keyboardOrder.map((node) => (
          <li key={node.id}>
            <button
              type="button"
              onFocus={() => model.setKeyboardFocus(node.id)}
              onBlur={() => model.setKeyboardFocus(null)}
              onClick={() => {
                if (interactionMode === 'locked') return
                if (interactionMode === 'cascade-target') {
                  onCascadeTarget?.(node.id)
                  return
                }
                model.focus(node.id)
                callbacksRef.current.onFocusChange(node.id)
              }}
            >
              {node.node.displayName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
