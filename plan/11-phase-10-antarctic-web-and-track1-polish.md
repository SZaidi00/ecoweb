# Phase 10 (Track 1) — Antarctic (Weddell Sea) web + Track 1 polish

## Objective
Add the sixth web — the high-Antarctic Weddell Sea ecosystem — completing pole-to-equator coverage on the map, then do a Track 1 coherence pass across the whole atlas.

## Read first
`plan/00-MASTER-PROMPT.md` + this file.

## Source data (vetted)

**Weddell Sea** — Jacob et al. (2011), "The Role of Body Size in Complex Food Webs: A Cold Case", *Advances in Ecological Research* 45. The dataset documents 488 species and ~16,200 feeding links for the high-Antarctic Weddell Sea; node list in the paper's appendix. The full raw web is far beyond our 25-node ceiling, so this web is necessarily a **curated composite**: aggregate to ~20 functional groups (ice algae/phytoplankton, zooplankton incl. Antarctic krill as a named node — it is the iconic keystone of this system, squid, fish groups, penguins, seals, whales, benthos, detritus), edges qualitative unless a subgroup of the source documents weights. Provenance badge: **composite**, with Jacob et al. as the primary citation. Krill's centrality should be visible in the curated link structure — this web exists partly so users can remove krill and watch the web shudder.

**Fallback:** if the appendix proves inaccessible, substitute the Antarctic web from the Web of Life database (browse food webs by region) and flag the substitution in the Checkpoint Report.

## Tasks

1. Curate the Weddell Sea web through the standard pipeline (≤ 25 nodes, citations, lat/lng ~73°S 45°W, layout hints, provenance: composite with explicit explanation of the aggregation in "About this web").
2. **Atlas coherence pass:**
   - Every web's "About this web" panel reviewed for consistent structure (what nodes are, how edges were sourced, one interesting hook).
   - Biome card/map coverage table updated: 6 webs, ≥ 4 biomes, 4+ continents.
   - Sources panel on the About page updated with all new citations (de Visser et al. 2011; NOAA CBFEM; Martinez 1991; Jacob et al. 2011).
   - Species index regenerated; verify krill/salmon/herring cross-web entries behave sensibly.
3. **Screenshot set** for README/social: map with six pins, Serengeti full web, krill cascade mid-animation.

## Acceptance criteria
- [ ] Weddell Sea web passes validation; composite badge and aggregation explanation present.
- [ ] Map shows 6 pins spanning Arctic-subarctic, temperate, tropical, and Antarctic latitudes.
- [ ] All new sources listed on the About page with direct links.
- [ ] Species index regenerated; no broken entries; synonym list unchanged unless deliberately extended.
- [ ] Full suite green: `validate:data`, unit tests, lint; Lighthouse ≥ 90 on landing.

## Checkpoint Report
Standard format + the six-pin map screenshot + a coverage table (web / biome / continent / nodes / provenance). Flag: any krill-related curation decisions, and whether Track 1 feels complete or one biome still looks thin.
