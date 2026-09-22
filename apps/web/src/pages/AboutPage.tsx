import { CASCADE_DISCLAIMER } from '@foodweb/cascade'

import { CascadeStateIcon } from '@/components/CascadeStateIcon'
import { cascadeStates } from '@/theme/tokens'

const sectionHeading = 'mt-12 font-heading text-lg font-semibold text-ink'
const bodyText = 'mt-3 text-sm leading-relaxed text-ink/80'

const dataSources = [
  {
    name: 'Web of Life',
    href: 'https://www.web-of-life.es',
    note: 'A curated database of ecological networks, openly downloadable.',
  },
  {
    name: 'GloBI (Global Biotic Interactions)',
    href: 'https://www.globalbioticinteractions.org',
    note: 'An open index of who-eats-whom records aggregated from published studies.',
  },
  {
    name: 'foodwebviz (SCOR-format data mirrors)',
    href: 'https://github.com/ibs-pan/foodwebviz',
    note: 'Machine-readable mirrors of classic ecosystem network models.',
  },
  {
    name: 'iNaturalist',
    href: 'https://www.inaturalist.org',
    note: 'Species photos and observations, linked from species panels.',
  },
  {
    name: 'Wikipedia',
    href: 'https://www.wikipedia.org',
    note: 'Background reading, linked from species panels.',
  },
]

const webSources = [
  {
    name: 'Prince William Sound',
    href: 'https://github.com/ibs-pan/foodwebviz/blob/master/examples/data/Alaska_Prince_William_Sound.scor',
    note: 'Dalsgaard & Pauly 1997, UBC Fisheries Centre.',
  },
  {
    name: 'Chesapeake Bay',
    href: 'https://github.com/ibs-pan/foodwebviz/blob/master/examples/data/Chesapeake_Bay_mesohaline_C_annual.scor',
    note: 'Baird & Ulanowicz 1989, Ecological Monographs.',
  },
  {
    name: 'Tuesday Lake',
    href: 'https://github.com/cran/cheddar/blob/master/data/TL84.RData',
    note: 'Carpenter & Kitchell 1996; redistributed via the cheddar R package, GPL.',
  },
  {
    name: 'Shortgrass Prairie',
    href: 'https://sete-moulis-cnrs.fr/fr/component/flexicontent/download/525/826/30',
    note: 'Hunt et al. 1987; Olff et al. 2009; van Altena et al. 2016, CC-BY.',
  },
  {
    name: 'Cypress Wetland',
    href: 'https://github.com/cran/igraphdata/blob/master/data/foodwebs.rda',
    note: 'Ulanowicz, Bondavalli & Egnotovich 1997; redistributed via igraphdata, CC BY-SA 4.0.',
  },
]

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-3.5 w-3.5 flex-none text-muted"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  )
}

function SourceRow({
  name,
  href,
  note,
}: {
  name: string
  href: string
  note: string
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start justify-between gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-paper"
      >
        <span>
          <span className="text-sm font-medium text-ink group-hover:text-canopy">{name}</span>
          <span className="mt-0.5 block text-xs leading-relaxed text-muted">{note}</span>
        </span>
        <ArrowUpRightIcon />
      </a>
    </li>
  )
}

export function AboutPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-10">
      <p className="text-xs font-semibold uppercase tracking-[1.6px] text-canopy">
        About the project
      </p>
      <h2 className="mt-2 font-heading text-2xl font-semibold text-ink">
        How this atlas works
      </h2>
      <p className="mt-4 leading-relaxed text-ink/90">
        Food Web Explorer is an open-source, interactive documentary of
        ecosystems. Every web you see is a real, published scientific dataset —
        redrawn so you can explore it. This page explains what the nodes mean,
        where the numbers come from, and what the removal simulation does and
        doesn’t claim.
      </p>

      <h3 className={sectionHeading}>Why “Salmon” isn’t one species</h3>
      <p className={bodyText}>
        Open the Prince William Sound web and you’ll find a node called “Salmon
        (adults)”. There is no such species. That node pools all five Pacific
        salmon — Chinook, Sockeye, Coho, Pink and Chum — during their adult
        feeding phase in the Sound, because the source model (Dalsgaard &amp;
        Pauly 1997) measured them together. Pink salmon dominate the group, at
        about 83% of the catch by weight, and the diet data came from pink
        salmon stomachs: 85% small pelagic fish, 15% macrozooplankton.
      </p>
      <p className={bodyText}>
        Where the source study did track finer detail, we keep it. Wild salmon
        fry and hatchery salmon fry appear as separate nodes because the
        original researchers counted them separately. The rule across the whole
        atlas is simple: node granularity equals what the source study
        measured — we never invent resolution the data doesn’t have.
      </p>

      <h3 className={sectionHeading}>Where the data comes from</h3>
      <p className={bodyText}>
        Every web traces back to primary scientific literature, reached either
        directly or through redistributed datasets: the Web of Life database,
        GloBI (Global Biotic Interactions), R data packages such as cheddar
        and igraphdata, and the foodwebviz project’s machine-readable mirrors
        of classic ecosystem models.
      </p>
      <p className={bodyText}>
        Each web carries one of two provenance badges.{' '}
        <strong className="font-semibold text-ink">Empirical study</strong>{' '}
        means the web comes from a single published investigation of one place.{' '}
        <strong className="font-semibold text-ink">Curated composite</strong>{' '}
        means it was assembled from several sources. Every web also carries its
        full citations — open its info panel in the explorer to see exactly
        what to cite — and the Sources section below links to everything.
      </p>

      <h3 className={sectionHeading}>How to read the visualization</h3>
      <p className={bodyText}>
        Each web is laid out vertically by trophic level: producers sit at the
        bottom, top predators at the top, and energy flows upward. Line
        thickness shows how much of a consumer’s diet comes from each food
        source — a thick line is a staple, a hairline is a snack. Where a
        feeding link is documented but its strength was never quantified, the
        line is drawn dashed and thinner, so you can tell “we know they eat
        this” apart from “we know how much”.
      </p>
      <p className={bodyText}>
        When you remove a species, effects ripple outward and every node takes
        on a state. Each state pairs a color with an icon — never color alone:
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

      <h3 className={sectionHeading}>
        What the removal simulation does — and doesn’t claim
      </h3>
      <p className={bodyText}>
        Removing a species propagates structural dependency outward in waves.
        A consumer that loses its last food path collapses; one that loses a
        major share of its diet is stressed or severely affected; and prey
        suddenly freed from predation can flourish — the “released” state.
      </p>
      <p className={bodyText}>
        This is a map of dependency, not a crystal ball. The model has no prey
        switching, no adaptation and no population dynamics. In the real ocean,
        a predator that loses one food often finds another; here, it doesn’t.
        Treat the cascade as “what depends on this species”, not “what will
        happen”.
      </p>
      <p className="mt-4 rounded-xl border border-hairline bg-panel px-4 py-3.5 text-xs italic leading-relaxed text-inkSoft">
        {CASCADE_DISCLAIMER}
      </p>

      <h3 className={sectionHeading}>Why webs are kept small</h3>
      <p className={bodyText}>
        Every web in this atlas has at most 25 nodes. That ceiling is
        deliberate. Research on network legibility shows that dense “hairball”
        diagrams — hundreds of nodes, thousands of crossing lines — teach
        nothing; the eye gives up. So instead of packing every recorded
        species into one tangle, depth comes through the zoom layers: from a
        Biome, to an Ecosystem, down to a single Species and its dependencies.
        Small webs, read closely, beat big webs nobody can read.
      </p>

      <h3 className={sectionHeading}>How to contribute</h3>
      <p className={bodyText}>
        Food Web Explorer is open source, and new webs, corrections and better
        descriptions are all welcome. The contribution guide covers the data
        format, the curation rules (including the no-invented-resolution rule
        above) and how to propose a new ecosystem.
      </p>
      <p className={bodyText}>
        <a
          href="https://github.com/SZaidi00/ecoweb/blob/main/CONTRIBUTING.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
        >
          Read CONTRIBUTING.md on GitHub
          <ArrowUpRightIcon />
        </a>
      </p>

      <h3 className={sectionHeading}>Sources</h3>
      <p className={bodyText}>
        Everything in the atlas is one link away. The datasets we draw from,
        and the machine-readable source for each web:
      </p>
      <div className="mt-4 rounded-xl border border-hairline bg-panel py-2">
        <h4 className="px-3 pb-1 pt-2 text-[10.5px] font-bold uppercase tracking-[0.9px] text-canopy">
          Datasets &amp; references
        </h4>
        <ul>
          {dataSources.map((source) => (
            <SourceRow key={source.name} {...source} />
          ))}
        </ul>
        <h4 className="border-t border-hairline px-3 pb-1 pt-3 text-[10.5px] font-bold uppercase tracking-[0.9px] text-canopy">
          Ecosystem webs
        </h4>
        <ul>
          {webSources.map((source) => (
            <SourceRow key={source.name} {...source} />
          ))}
        </ul>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        Data remains attributed to the original authors. Some redistributions
        carry their own licenses — cheddar is GPL, igraphdata is CC BY-SA 4.0,
        the Shortgrass Prairie redistribution is CC-BY 4.0. Reuse of any web
        requires citing its original source; each web’s info panel in the app
        lists exactly what to cite.
      </p>
    </section>
  )
}
