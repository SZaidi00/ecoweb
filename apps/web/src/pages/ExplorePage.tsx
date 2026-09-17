import { PixiCanvas } from '@/components/PixiCanvas'
import { webIndexSchema } from '@/lib/webIndex'

export function ExplorePage() {
  // No data loading in Phase 0; index.json ships as { "webs": [] }.
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
