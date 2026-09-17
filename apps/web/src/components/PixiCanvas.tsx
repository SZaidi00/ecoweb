import { Application } from 'pixi.js'
import { useEffect, useRef } from 'react'

import { colors } from '@/theme/tokens'

/**
 * Empty Pixi canvas filling its container. Renders the paper background
 * color from the design tokens; the trophic-level graph renderer arrives
 * in Phase 2. Pixi renders state — it never owns it.
 */
export function PixiCanvas() {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const app = new Application()
    let ready = false
    let cancelled = false

    app
      .init({
        background: colors.paper,
        resizeTo: host,
        antialias: true,
      })
      .then(() => {
        if (cancelled) {
          app.destroy()
          return
        }
        ready = true
        host.appendChild(app.canvas)
      })
      .catch(() => {
        // Initialization failure leaves the panel empty; real error
        // surfacing is a renderer-phase concern.
      })

    return () => {
      cancelled = true
      if (ready) {
        app.destroy(true)
      }
    }
  }, [])

  return <div ref={hostRef} className="h-full w-full" data-testid="pixi-canvas" />
}
