import { sortedNeighbors, type GraphModel, type LayoutNode } from '@foodweb/cascade'

const KIND_LABELS = {
  'functional-group': 'Functional group',
  species: 'Species',
  'life-stage-group': 'Life-stage group',
} as const

const panelBox =
  'mb-3 rounded-xl border border-hairline bg-paper px-4 py-3.5 text-[13px] leading-relaxed text-inkSoft'
const panelHeading =
  'mb-2 text-[10.5px] font-bold uppercase tracking-[0.9px] text-canopy'
const btnBase =
  'mt-2 flex w-full items-center justify-center gap-2 rounded-[10px] px-3 py-2.5 text-[13.5px] font-semibold transition-colors'
const btnGhost = `${btnBase} bg-paper2 text-ink hover:bg-hairline`

export interface SpeciesPanelProps {
  model: GraphModel
  node: LayoutNode
  chainOpen: boolean
  onToggleChain: () => void
  onFocus: (id: string) => void
  onClearFocus: () => void
  onSimulateRemoval: (id: string) => void
}

function FlaskIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-[15px] w-[15px] flex-none"
      aria-hidden="true"
    >
      <path d="M9 3h6M10 3v5L4.5 18a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 8V3" />
    </svg>
  )
}

function ChainIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-[15px] w-[15px] flex-none"
      aria-hidden="true"
    >
      <path d="M12 6v3m0 6v3" strokeLinecap="round" />
      <circle cx="12" cy="4" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="12" cy="20" r="1.6" />
    </svg>
  )
}

/** Sidebar for focus mode: the node's story, dependencies, and actions. */
export function SpeciesPanel({
  model,
  node,
  chainOpen,
  onToggleChain,
  onFocus,
  onClearFocus,
  onSimulateRemoval,
}: SpeciesPanelProps) {
  const { node: data } = node
  const { prey, predators } = sortedNeighbors(model.web, node.id)
  const nameOf = (id: string) => model.getNode(id)?.node.displayName ?? id

  const neighborButtons = (list: { id: string }[]) =>
    list.length === 0 ? (
      <span>—</span>
    ) : (
      <span>
        {list.map((n, i) => (
          <span key={n.id}>
            <button
              type="button"
              onClick={() => onFocus(n.id)}
              className="font-medium text-accent hover:underline"
            >
              {nameOf(n.id)}
            </button>
            {i < list.length - 1 && ', '}
          </span>
        ))}
      </span>
    )

  const metrics = data.metrics ? Object.entries(data.metrics) : []

  return (
    <div>
      <h2 className="mb-0.5 font-heading text-[22px] font-semibold">{data.displayName}</h2>
      <p className="mb-4 text-[12.5px] text-muted">
        {KIND_LABELS[data.kind]} · Trophic level {data.trophicLevel.toFixed(1)}
      </p>

      <div className={panelBox}>
        <h5 className={panelHeading}>What this node represents</h5>
        <p>{data.description}</p>
        {data.externalLinks && (
          <p className="mt-2">
            {data.externalLinks.wikipedia && (
              <a
                href={data.externalLinks.wikipedia}
                target="_blank"
                rel="noreferrer"
                className="mr-3 text-xs font-medium text-accent hover:underline"
              >
                Wikipedia →
              </a>
            )}
            {data.externalLinks.iNaturalist && (
              <a
                href={data.externalLinks.iNaturalist}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-accent hover:underline"
              >
                iNaturalist →
              </a>
            )}
          </p>
        )}
      </div>

      <div className={panelBox}>
        <h5 className={panelHeading}>Dependencies</h5>
        <div className="flex justify-between gap-2.5 py-0.5 text-[12.5px]">
          <span className="flex-none text-muted">Eats (below)</span>
          <span className="text-right">{neighborButtons(prey)}</span>
        </div>
        <div className="flex justify-between gap-2.5 py-0.5 text-[12.5px]">
          <span className="flex-none text-muted">Eaten by (above)</span>
          <span className="text-right">{neighborButtons(predators)}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={onToggleChain}
        aria-pressed={chainOpen}
        className={btnGhost}
      >
        <ChainIcon />
        {chainOpen ? 'Hide dependency chain' : 'Trace to producers'}
      </button>

      {metrics.length > 0 && (
        <details className={`${panelBox} mt-3`}>
          <summary className="cursor-pointer text-[10.5px] font-bold uppercase tracking-[0.9px] text-canopy">
            Scientific details
          </summary>
          <dl className="mt-2">
            {metrics.map(([key, value]) => (
              <div key={key} className="flex justify-between gap-2.5 py-0.5 text-[12.5px]">
                <dt className="text-muted">
                  {key === 'biomass' ? 'Biomass (t/km² wet weight)' : key}
                </dt>
                <dd className="text-right">{value}</dd>
              </div>
            ))}
            <div className="flex justify-between gap-2.5 py-0.5 text-[12.5px]">
              <dt className="text-muted">Trophic level</dt>
              <dd className="text-right">{data.trophicLevel}</dd>
            </div>
          </dl>
        </details>
      )}

      <button
        type="button"
        onClick={() => onSimulateRemoval(node.id)}
        className={`${btnBase} bg-cascade-severe text-panel hover:opacity-90`}
      >
        <FlaskIcon />
        Simulate removal
      </button>
      <button type="button" onClick={onClearFocus} className={btnGhost}>
        ← Back to full web
      </button>
    </div>
  )
}
