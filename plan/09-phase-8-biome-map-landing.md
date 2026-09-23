# Phase 8 (Track 1) — Biome map landing page

## Objective
Replace/augment the biome-grid landing with an **interactive world map**: ecosystems appear as pins at their real locations (lat/lng already in web metadata), giving the atlas an immediate sense of global coverage. The biome grid remains as a secondary browse mode.

## Read first
`plan/00-MASTER-PROMPT.md` (design language — earthy palette, Fraunces/Inter, no emojis) + this file. Canonical design reference: `apps/web/mockup/index.html`.

## Tasks

1. **Map component** (`#/`, default landing view):
   - Use **react-simple-maps** (D3/TopoJSON-based, React-native, static-hosting friendly) with a public-domain Natural Earth 110m land TopoJSON bundled locally (no runtime tile server, no API keys — stays GitHub Pages compatible).
   - Style to the design language: paper-tone ocean/background, land in a muted earth tone slightly darker than the panel, no country borders or labels by default (this is an atlas, not a geography lesson).
   - **Pins:** one per ecosystem web at its lat/lng; pin color = biome color (extend tokens: one hue per biome, harmonious with the earthy palette); on hover, a card pops with web name, location, node count, provenance badge; click → `#/web/:webId`.
   - **Biome filter bar** above the map: pill toggles per biome that dim non-matching pins (multi-select). This replaces the old grid's filtering role.
   - Graceful empty state: biomes with no webs yet simply have no pins (the filter pill shows count 0 and is disabled — never fake pins).
   - Zoom/pan: modest scroll-zoom and drag-pan, capped; a "reset view" control. Touch-friendly (pinch zoom).
2. **Toggle: Map / Grid.** Keep the existing biome grid reachable via a view toggle in the header area of the landing page — some users prefer lists, and it doubles as the accessible fallback.
3. **Accessibility:** pins keyboard-focusable (Tab) with Enter to open; the grid view remains the screen-reader-primary path; map gets `role="application"` + instructions text.
4. **Performance:** TopoJSON bundled, gzipped < 200KB; first paint of landing < 1s on 3G.

## Acceptance criteria
- [ ] Landing defaults to the map; every web in `index.json` renders a correctly positioned pin (verify Prince William Sound ~60.6°N 146.7°W, Serengeti ~2.3°S 34.8°E, Chesapeake ~38.5°N 76.3°W, Little Rock Lake ~45.9°N 89.7°W).
- [ ] Biome filter pills dim/restore pins correctly; zero-count biomes disabled.
- [ ] Hover cards match mockup card styling; click navigates to the web view.
- [ ] Map/Grid toggle persists for the session; grid unchanged in function.
- [ ] Keyboard + reduced-motion paths work; no map tiles fetched at runtime (verify offline in devtools).
- [ ] Landing Lighthouse ≥ 90.

## Checkpoint Report
Standard format + screenshots (default map, filtered state, hover card, mobile width). Flag any web whose lat/lng was ambiguous (e.g. regional-scale webs) and the representative point chosen.
