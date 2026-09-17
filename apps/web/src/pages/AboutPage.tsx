import { describeCascadeEngine } from '@foodweb/cascade'

import { CascadeStateIcon } from '@/components/CascadeStateIcon'
import { cascadeStates } from '@/theme/tokens'

export function AboutPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-10">
      <h2 className="font-heading text-2xl font-semibold text-canopy">About</h2>
      <p className="mt-4 leading-relaxed text-ink/90">
        Food Web Explorer is an open-source, interactive documentary of
        ecosystems. Explore real-world food webs, trace what a species depends
        on (and what depends on it), and simulate what happens when a species
        is removed. The full methodology page arrives in Phase 6.
      </p>

      <h3 className="mt-8 font-heading text-lg font-semibold text-ink">
        Cascade states
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/80">
        When a species is removed, effects ripple through the web. Every state
        pairs a color with an icon — never color alone.
      </p>
      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {cascadeStates.map((state) => (
          <li
            key={state.id}
            className="flex flex-col items-center gap-2 rounded border border-hairline bg-panel px-3 py-4"
          >
            <span style={{ color: state.color }}>
              <CascadeStateIcon state={state.id} className="h-6 w-6" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-ink/80">
              {state.label}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-xs italic text-ink/50">{describeCascadeEngine()}</p>
    </section>
  )
}
