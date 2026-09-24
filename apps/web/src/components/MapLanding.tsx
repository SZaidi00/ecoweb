import { useMemo, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'
import { feature } from 'topojson-client'
import type { FeatureCollection } from 'geojson'
import type { Topology } from 'topojson-specification'

import type { Biome, WebIndex, WebIndexEntry } from '@foodweb/schema'

import landTopology from '@/assets/land-110m.json'
import { BIOMES, BIOME_ORDER } from '@/lib/biomes'
import { colors, fonts } from '@/theme/tokens'

/**
 * Interactive world-map landing (Phase 8). Natural Earth 110m land TopoJSON
 * (public domain, via world-atlas) is bundled at build time — no runtime tile
 * server, no API keys, works fully offline and on GitHub Pages.
 */

const MAP_WIDTH = 1000
const MAP_HEIGHT = 500
const MIN_ZOOM = 1
const MAX_ZOOM = 5

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canopy'

/** World-atlas topology parsed once at module load. */
const landTopo = landTopology as unknown as Topology
const land = feature(landTopo, landTopo.objects.land) as unknown as FeatureCollection

interface DeclutteredPin extends WebIndexEntry {
  /** Display coordinates — true lat/lng unless fanned out of a coincident cluster. */
  pin: [number, number]
  /** True when the pin was nudged for legibility (clustered with another web). */
  offset: boolean
}

/**
 * Spread pins that would overlap at world scale (e.g. Tuesday Lake and Little
 * Rock Lake, ~0.25° apart) around their shared center so each stays hoverable.
 * Offsets are display-only and only applied within a coincident cluster.
 */
function declutter(webs: WebIndexEntry[]): DeclutteredPin[] {
  const groups = new Map<string, WebIndexEntry[]>()
  for (const entry of webs) {
    const key = `${entry.lat.toFixed(1)}:${entry.lng.toFixed(1)}`
    const list = groups.get(key) ?? []
    list.push(entry)
    groups.set(key, list)
  }
  const pins: DeclutteredPin[] = []
  for (const group of groups.values()) {
    if (group.length === 1) {
      const [entry] = group
      pins.push({ ...entry, pin: [entry.lng, entry.lat], offset: false })
      continue
    }
    const centerLat = group.reduce((sum, e) => sum + e.lat, 0) / group.length
    const centerLng = group.reduce((sum, e) => sum + e.lng, 0) / group.length
    const radius = 1.8 // degrees — keeps clustered lakes a few px apart at default zoom
    group.forEach((entry, i) => {
      const angle = (2 * Math.PI * i) / group.length - Math.PI / 2
      pins.push({
        ...entry,
        pin: [centerLng + radius * Math.cos(angle), centerLat + radius * Math.sin(angle)],
        offset: true,
      })
    })
  }
  return pins.sort((a, b) => a.name.localeCompare(b.name))
}

function MapPin({
  pin,
  dimmed,
  onHover,
}: {
  pin: DeclutteredPin
  dimmed: boolean
  onHover: (id: string | null) => void
}) {
  const navigate = useNavigate()
  const hue = colors.biome[pin.biome]
  const open = () => navigate(`/web/${pin.id}`)

  return (
    <Marker coordinates={pin.pin}>
      <g
        role="button"
        tabIndex={dimmed ? -1 : 0}
        aria-hidden={dimmed}
        aria-label={`Open the ${pin.name} food web`}
        className="cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-canopy"
        opacity={dimmed ? 0.15 : 1}
        onClick={open}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            open()
          }
        }}
        onMouseEnter={() => onHover(pin.id)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(pin.id)}
        onBlur={() => onHover(null)}
      >
        {/* invisible generous hit area */}
        <circle r={15} fill="transparent" />
        {/* pin body in the biome hue, with a paper ring for contrast on land */}
        <circle r={7} fill={hue} stroke={colors.panel} strokeWidth={1.5} />
        <circle r={2.5} fill={colors.panel} />
      </g>
    </Marker>
  )
}

/**
 * Break a location string into card-width lines: at the first comma when
 * possible, so "Serengeti National Park, Tanzania" becomes two tidy lines.
 */
function locationLines(location: string): string[] {
  if (location.length <= 34) return [location]
  const comma = location.indexOf(',')
  if (comma > 0 && comma <= 36) {
    const rest = location.slice(comma + 1).trim()
    return rest ? [location.slice(0, comma + 1), rest] : [location]
  }
  return [location.slice(0, 36).trimEnd() + '…']
}

/**
 * Hover/focus card for a pin, drawn in pure SVG (foreignObject content is
 * unreliable inside transformed SVG in some engines). Scales with the map.
 */
function HoverCard({ pin }: { pin: DeclutteredPin }) {
  const lines = locationLines(pin.location)
  const note = pin.offset ? 11 : 0
  const height = 74 + (lines.length - 1) * 11 + note
  // Flip the card below the pin at high latitudes so it never clips off the map's top edge.
  const top = pin.pin[1] > 35 ? 14 : -height - 14

  return (
    <g pointerEvents="none">
      <rect
        x={-100}
        y={top}
        width={200}
        height={height}
        rx={10}
        fill={colors.panel}
        stroke={colors.hairline}
        strokeWidth={1}
      />
      <text
        x={-86}
        y={top + 19}
        fontFamily={fonts.heading.join(', ')}
        fontSize={13.5}
        fontWeight={600}
        fill={colors.ink}
      >
        {pin.name}
      </text>
      {lines.map((line, i) => (
        <text key={i} x={-86} y={top + 35 + i * 11} fontSize={9.5} fill={colors.muted}>
          {line}
        </text>
      ))}
      <circle cx={-83} cy={top + height - 15} r={2.5} fill={colors.canopy} />
      <text
        x={-77}
        y={top + height - 12}
        fontSize={8}
        fontWeight={600}
        letterSpacing={0.8}
        fill={colors.canopy}
      >
        {pin.provenance === 'empirical' ? 'EMPIRICAL STUDY' : 'CURATED COMPOSITE'}
      </text>
      <text
        x={86}
        y={top + height - 12}
        fontSize={8.5}
        textAnchor="end"
        fill={colors.inkSoft}
      >
        {pin.nodeCount} groups
      </text>
      {pin.offset && (
        <text x={-86} y={top + height - 26} fontSize={8} fontStyle="italic" fill={colors.muted}>
          representative point
        </text>
      )}
    </g>
  )
}

function ZoomButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string
  onClick: () => void
  disabled?: boolean
  children: ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      className={`flex h-8 w-8 items-center justify-center border-hairline bg-panel text-ink first:rounded-l-lg last:rounded-r-lg hover:bg-paper2 disabled:opacity-40 ${focusRing} [&:not(:first-child)]:border-l`}
    >
      {children}
    </button>
  )
}

const minusIcon = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
const plusIcon = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
const resetIcon = (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M2 7a5 5 0 1 1 1.5 3.6M2 7V3.5M2 7h3.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/** Biome filter pills with per-biome counts; zero-count biomes are disabled. */
function BiomeFilter({
  index,
  active,
  onToggle,
}: {
  index: WebIndex
  active: ReadonlySet<Biome>
  onToggle: (biome: Biome) => void
}) {
  const counts = new Map<Biome, number>()
  for (const entry of index.webs) counts.set(entry.biome, (counts.get(entry.biome) ?? 0) + 1)

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter map by biome">
      {BIOME_ORDER.map((biome) => {
        const count = counts.get(biome) ?? 0
        const pressed = active.has(biome)
        return (
          <button
            key={biome}
            type="button"
            disabled={count === 0}
            aria-pressed={pressed}
            onClick={() => onToggle(biome)}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
              pressed
                ? 'border-canopy bg-canopy text-panel'
                : `border-hairline bg-panel text-inkSoft hover:border-canopy`
            } ${focusRing}`}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: count === 0 ? colors.edge : colors.biome[biome] }}
            />
            {BIOMES[biome].name}
            <span className={pressed ? 'text-panel/70' : 'text-muted'}>{count}</span>
          </button>
        )
      })}
    </div>
  )
}

/** The atlas map: one pin per ecosystem web, land only, no borders or labels. */
export function MapLanding({ index }: { index: WebIndex }) {
  const [activeBiomes, setActiveBiomes] = useState<ReadonlySet<Biome>>(new Set())
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [view, setView] = useState<{ zoom: number; center: [number, number] }>({
    zoom: 1,
    center: [0, 0],
  })
  // Bumping the key remounts ZoomableGroup with the new initial view —
  // how zoom buttons and reset apply their changes.
  const [viewEpoch, setViewEpoch] = useState(0)

  const pins = useMemo(() => declutter(index.webs), [index.webs])
  const filtering = activeBiomes.size > 0
  const hovered = pins.find((pin) => pin.id === hoveredId) ?? null

  const toggleBiome = (biome: Biome) => {
    setActiveBiomes((prev) => {
      const next = new Set(prev)
      if (next.has(biome)) next.delete(biome)
      else next.add(biome)
      return next
    })
  }

  const applyView = (zoom: number, center: [number, number]) => {
    setView({ zoom, center })
    setViewEpoch((epoch) => epoch + 1)
  }

  return (
    <div>
      <BiomeFilter index={index} active={activeBiomes} onToggle={toggleBiome} />
      <p id="map-instructions" className="sr-only">
        Interactive map of ecosystem locations. Use tab to move between ecosystem pins and enter
        to open a food web. Use the zoom in, zoom out, and reset view buttons to change the map
        view, or scroll to zoom and drag to pan.
      </p>
      <div
        role="application"
        aria-label="World map of ecosystem food webs"
        aria-describedby="map-instructions"
        className="relative mt-4 overflow-hidden rounded-2xl border border-hairline bg-paper"
      >
        <ComposableMap
          width={MAP_WIDTH}
          height={MAP_HEIGHT}
          projection="geoEqualEarth"
          className="rsm-atlas block h-auto w-full"
        >
          <ZoomableGroup
            key={viewEpoch}
            zoom={view.zoom}
            center={view.center}
            minZoom={MIN_ZOOM}
            maxZoom={MAX_ZOOM}
            translateExtent={[
              [-250, -250],
              [MAP_WIDTH + 250, MAP_HEIGHT + 250],
            ]}
            onMoveEnd={({ zoom, coordinates }) => {
              if (typeof zoom === 'number' && coordinates) {
                setView({ zoom, center: coordinates })
              }
            }}
          >
            <Geographies geography={land}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={colors.paper2}
                    stroke={colors.hairline}
                    strokeWidth={0.5}
                    tabIndex={-1}
                  />
                ))
              }
            </Geographies>
            {pins.map((pin) => (
              <MapPin
                key={pin.id}
                pin={pin}
                dimmed={filtering && !activeBiomes.has(pin.biome)}
                onHover={setHoveredId}
              />
            ))}
            {hovered && (!filtering || activeBiomes.has(hovered.biome)) && (
              <Marker coordinates={hovered.pin}>
                <HoverCard pin={hovered} />
              </Marker>
            )}
          </ZoomableGroup>
        </ComposableMap>

        <div className="absolute right-3 top-3 flex flex-col items-end gap-1.5">
          <div className="flex overflow-hidden rounded-lg border border-hairline shadow-sm shadow-ink/5">
            <ZoomButton
              label="Zoom out"
              disabled={view.zoom <= MIN_ZOOM}
              onClick={() => applyView(Math.max(MIN_ZOOM, view.zoom / 1.5), view.center)}
            >
              {minusIcon}
            </ZoomButton>
            <ZoomButton
              label="Zoom in"
              disabled={view.zoom >= MAX_ZOOM}
              onClick={() => applyView(Math.min(MAX_ZOOM, view.zoom * 1.5), view.center)}
            >
              {plusIcon}
            </ZoomButton>
          </div>
          <div className="flex overflow-hidden rounded-lg border border-hairline shadow-sm shadow-ink/5">
            <ZoomButton
              label="Reset view"
              disabled={view.zoom === MIN_ZOOM && view.center[0] === 0 && view.center[1] === 0}
              onClick={() => applyView(MIN_ZOOM, [0, 0])}
            >
              {resetIcon}
            </ZoomButton>
          </div>
        </div>
      </div>
      <p className="mt-2.5 text-[11.5px] text-muted">
        Scroll to zoom · drag to pan · each pin marks the study site of a published food web.
      </p>
    </div>
  )
}
