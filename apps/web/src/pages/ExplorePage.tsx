import { PixiCanvas } from '@/components/PixiCanvas'
import { webIndexSchema } from '@/lib/webIndex'

export function ExplorePage() {
  // Placeholder from Phase 0: wiring the real data/webs/index.json into the
  // explore canvas is Phase 2+ scope. Review the data via #/debug/webs.
  const index = webIndexSchema.parse({ webs: [] })

  return (
    <section aria-label="Ecosystem canvas" className="relative h-full">
      <PixiCanvas />
      <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded border border-hairline bg-panel/90 px-3 py-1 text-xs text-ink/70">
        {index.webs.length === 0
          ? 'No ecosystem webs yet — the first one arrives in Phase 1.'
          : `${index.webs.length} ecosystem webs`}
      </p>
    </section>
  )
}
