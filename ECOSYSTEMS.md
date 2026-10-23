# Ecosystem Research Strategy — Food Web Explorer

**Purpose of this document:** Give an agent (human or AI) everything needed to (a) assess the current state of the Food Web Explorer repo, and (b) conduct systematic, repeatable research to find future ecosystems worth adding.

**How to use:** Read Section 1 for project context. For each new region/biome you research, follow the methodology in Section 4 using the template in Section 5. Record findings in the candidate table format in Section 7. Submit additions as a PR against this file or a follow-up `research/region-*.md`.

---

## 1. Project Context

### What this product is
Food Web Explorer is an open-source interactive atlas of **real, published food webs**. A general audience browses ecosystems on a world map, clicks a species to see its dependencies (what it eats, what eats it), and simulates removing a species to watch effects cascade through the web. Positioning: "interactive documentary of ecosystems" — not a network-analysis tool, not a classroom worksheet.

### Current content (as of this writing)
| Web | Biome | Continent | Provenance | Data type |
|---|---|---|---|---|
| Prince William Sound, Alaska | Marine | N. America | Empirical (foodwebviz / Web of Life) | Weighted flows |
| Serengeti, Tanzania | Grassland | Africa | Empirical (de Visser et al. 2011) | Qualitative |
| Chesapeake Bay, USA | Estuary | N. America | Empirical (NOAA CBFEM Ecopath model) | Weighted diet %s |
| Little Rock Lake, Wisconsin | Freshwater lake | N. America | Empirical (Martinez 1991) | Qualitative |
| Weddell Sea, Antarctica | Polar marine | Antarctica | Composite (Jacob et al. 2011) | Mostly qualitative |
| Tapajós River, Brazil (lower, Santarém reach) | Freshwater river/floodplain | S. America | Empirical (Capitani et al. 2021, Ecopath model) | Weighted diet fractions |

### Design and data constraints (these define what counts as a valid web)

1. **15–25 nodes, hard ceiling.** Enforced by the data validator. Raw webs with more taxa must be aggregated into trophic/functional groups.
2. **Trophic-level vertical layout.** Producers bottom, apex predators top. Webs must have a coherent trophic structure (weeds out purely topological webs with no level info).
3. **The salmon rule (the single most important principle):** node granularity = whatever the source study measured. We never split a pooled group without sourced diet data, and never invent edge weights. Every non-species node carries an explicit aggregation statement. Node kinds: `functional-group` | `species` | `life-stage-group`.
4. **Edges carry `weight` (share of predator's diet, 0–1) or `qualitative: true`.** Qualitative is legitimate and common; the renderer shows dashed edges with a legend entry.
5. **Provenance badges:** `empirical` (single published dataset) or `composite` (assembled from diet literature; must be labeled and explained). Full citation required per web, plus lat/lng for the map.
6. **Honesty rules:** no fabricated data, ever. If a source is inaccessible, STOP and flag — never reconstruct links from memory or secondary summaries. Sources must be peer-reviewed papers, agency reports, or established open databases.
7. **Aesthetics matter:** webs with an iconic flagship story (krill in Antarctica, sea otters in kelp forests, lions in Serengeti) rank higher because the cascade simulation is the product's hero moment. A web where removing one node causes an interesting ripple beats a bigger, flatter web.

### What "done" looks like per web
One JSON in `data/webs/` passing `validate:data` (≤25 nodes, no dangling refs, citations present, aggregation statements on non-species nodes), layout hints curated, registered in `data/webs/index.json`, appearing as a pin on the map, and listed on the About page Sources panel.

---

## 2. Current Landscape (why this gap exists)

The product occupies deliberate white space: educational tools (Gizmos, KiwiBee) are interactive but fake and tiny; research tools (foodwebviz, BEFANA) are real but require Python; data platforms (Web of Life, GloBI, Mangal) hold hundreds of real webs but with utilitarian expert interfaces. **Our competitive moat is curation: taking published webs and making them legible, honest, and explorable.** That means the limiting resource for growth is not engineering — it is finding webs that (a) exist in publishable form, (b) can be aggregated to ≤25 nodes without destroying their story, and (c) add geographic/biome diversity.

**Known data biases to plan around:**
- Aquatic systems (marine, freshwater) are massively over-represented in open food-web data. Terrestrial webs exist but skew qualitative.
- Tropical webs are under-published relative to their biodiversity — expect thin pickings in rainforest and coral reef categories and plan aggregation accordingly.
- Many classic webs (Ythan Estuary, Bridge Brook Lake, St. Martin Island, Benguela) are small enough to use nearly raw.

---

## 3. Source Databases Inventory (search these, in this order)

| Source | What it holds | Access | Notes |
|---|---|---|---|
| **Web of Life** (web-of-life.es) | Hundreds of ecological networks: food webs, pollination, seed dispersal, host-parasite | Free web UI + downloads | Filter by interaction type "food web". Great starting point; each web has a primary citation. |
| **GloBI** (globalbioticinteractions.org) | Species-interaction records aggregated from open datasets; API + explorers | Free API | Best for verifying/cross-checking individual feeding links. Also indexes GoMexSI (Gulf of Mexico) and Mangal. |
| **Mangal** (mangal.io) | Ecological network database with an API | Free API | Good programmatic search by ecosystem type. |
| **Netzschleuder** (networks.skewed.de) | Network science repository incl. famous food webs (Little Rock Lake, Ythan, etc.) | Free downloads | Standard formats; check each entry's citation. |
| **Ecopath with Ecosim models** | Weighted ecosystem models with diet matrices (Chesapeake, many others) | Publications + some model repos (ecopath.org) | The single best source of *weighted* webs. Any published Ecopath model ≥20 groups is a strong candidate. |
| **Primary literature** | J. Anim. Ecol., Ecological Monographs, Oecologia, Food Webs, Advances in Ecological Research | Publisher sites, author sites, supplementary appendices | Often the only route to terrestrial webs. Appendices S1–S4 style link matrices are gold. |
| **figshare / Zenodo / Dryad** | Dataset deposits accompanying papers | Free | Search "food web" + ecosystem name. Frequently contains the machine-readable link matrix the paper used. |

**Search hygiene:** always end at a citable primary source. Database entries are pointers, not citations.

---

## 4. Research Methodology (repeatable per region/biome)

1. **Sweep the databases** (Section 3) for the target region/biome. Query patterns: "food web" + region/ecosystem name; Ecopath + ecosystem; "trophic network" + biome.
2. **Screen candidates against the inclusion criteria** (Section 5). Reject early — don't dig into a web that can't work.
3. **Verify accessibility:** the node list and link matrix (or diet matrix, for Ecopath models) must be obtainable — paper appendix, supplementary, repository deposit, or database download. If not obtainable → status `inaccessible`, note what's missing, stop.
4. **Sketch the aggregation plan:** list the candidate's raw node count and a plausible ≤25-node grouping. If you can't imagine the aggregation without destroying the web's story (e.g. a coral reef with 400 fish species and no natural groupings), mark `high-curation-risk` and move on.
5. **Score and rank** per the rubric in Section 5. Tier 1 = build next; Tier 2 = backlog; Appendix = recorded but not planned.
6. **Write up** using the template in Section 6. One file per region/biome: `research/<region>.md`.
7. **Human review checkpoint** before any curation begins (per the repo's phase protocol).

---

## 5. Inclusion Criteria & Scoring Rubric

**Hard gates (all must be yes):**
- [ ] Published and citable (peer-reviewed paper, agency report, or established database entry with primary citation)
- [ ] Node/edge data actually obtainable (verified, not assumed)
- [ ] Plausible aggregation to 15–25 nodes
- [ ] Has a trophic structure usable in a vertical layout
- [ ] Biome not already saturated (aim for ≤3 webs per biome until all biomes have ≥2)

**Scoring rubric (1–3 each; higher is better):**

| Criterion | What earns 3 |
|---|---|
| **Data quality** | Weighted diet/flow data documented; or exceptionally clean qualitative matrix |
| **Story potential** | Removing 1–2 nodes produces a dramatic, explainable cascade; flagship/keystone species present |
| **Geographic coverage** | Fills an empty region/biome on the map; not another north-temperate aquatic web |
| **Aggregation cost** | Usable raw (≤30 nodes) or natural functional groups exist in the source |
| **Audience recognition** | Ecosystem people have heard of: Great Barrier Reef, Amazon, Yellowstone |

**Tiers:** 12–15 = Tier 1 (build next) · 8–11 = Tier 2 (backlog) · ≤7 or any hard-gate fail = Appendix only.

---

## 6. Worked Example — Research Template

*This example is real and already executed — use it as the format standard.*

### Region: North America — Estuarine & Coastal
**Researched:** 2026-09 · **Status:** complete (1 web shipped, 1 candidate backlog)

**Sweep log:**
- Web of Life: filtered "food web", searched "estuary", "bay", "marsh" → 11 hits.
- Ecopath publications: searched "estuarine Ecopath" → 4 models with diet matrices.
- Primary literature: searched "salt marsh food web" trophic → 3 papers, 1 with appendix matrix.

**Candidate: Chesapeake Bay (shipped ✅)**
- Source: NOAA Technical Memorandum, "Fisheries Ecosystem Model of the Chesapeake Bay" (Ecopath; 45 functional groups, documented diet compositions).
- Access: verified — model report with per-group diet appendix.
- Aggregation plan: 45 → 22 groups (merge forage fish guilds, split microbes/detritus per model structure).
- Scores: Data quality 3 (weighted diet %) · Story 3 (menhaden bottleneck — classic "most important fish in the sea" cascade) · Geography 2 (N. America already has PWS, but estuary biome new) · Aggregation cost 2 (group merges nontrivial) · Recognition 3. **Total 13 → Tier 1 → shipped.**

**Candidate: Ythan Estuary, Scotland (backlog — recorded for Europe sweep)**
- Source: classic published web (~92 taxa, multiple follow-up papers), downloadable via Netzschleuder.
- Note: very low aggregation cost; strong story (tern declines). Europe coverage currently zero.

**Rejected in sweep:**
- *Gulf of Mexico (GoMexSI)* — data excellent but web too large for 25-node story without arbitrary picking; revisit as composite later.
- *Various marsh webs (qualitative only, <12 nodes)* — fails minimum richness for a satisfying cascade.

---

## 7. Candidate List Format

For every candidate, record:

```markdown
### <Ecosystem name>, <Location>
- **Biome / Region:** · **Lat/Lng (approx):**
- **Source:** <full citation + DOI/URL>
- **Data access:** <where the matrix lives — appendix/figure/file; VERIFIED or ASSUMED>
- **Raw size:** N taxa / M links · **Aggregation plan:** → ~K nodes (one line)
- **Data type:** weighted | qualitative | mixed
- **Provenance:** empirical | composite
- **Scores:** data _ · story _ · geography _ · cost _ · recognition _ = **total**
- **Tier:** 1 / 2 / appendix · **Notes:** <story hook, risks, dependencies>
```

---

## 8. Initial Candidate Shortlist (from prior research — verify before building)

*These are starting leads, pre-screened but not fully verified. Re-run Section 4 steps 3–5 on each before committing.*

### Tier 1 leads
| Ecosystem | Biome | Why | First source to check |
|---|---|---|---|
| **Ythan Estuary, Scotland** | Estuary/coastal | Tiny raw web, famous tern-decline story, Europe = empty on map | Netzschleuder entry + Hall & Raffaelli papers |
| **Bridge Brook Lake, NY** | Freshwater lake | Classic lake web, moderate size, good complement to Little Rock | Web of Life / Martinez-era datasets |
| **Benguela Current, Namibia** | Marine upwelling | Ecopath model w/ weights; Africa marine = empty; dramatic sardine-anchovy story | Shannon et al. Ecopath papers |
| **Yellowstone (terrestrial)** | Temperate forest/grassland | Huge audience draw; must assemble as labeled composite from diet literature | Primary literature sweep; expect composite badge |

### Tier 2 leads
| Ecosystem | Biome | Note |
|---|---|---|
| St. Martin Island, Caribbean | Marine island | Small, classic, tropical marine |
| Sanak intertidal, Alaska | Intertidal | Interesting nearshore story, N. America though |
| Barents Sea | Marine | Ecopath model, weights; polar-adjacent |
| Takapoto atoll lagoon | Coral reef | Tropical marine gap; expect high curation risk |
| Cattle grazing web, Wyoming | Grassland | Terrestrial, tiny, classic — good quick win |
| Skipwith Pond, England | Freshwater | Classic pond web, Europe coverage |
| New Zealand stream webs | Freshwater | Southern hemisphere gap |

### Deliberately out of scope (recorded for completeness)
- Raw GloBI/Mangal mega-webs (100+ species) — fail the ≤25-node gate unless a curated composite is explicitly scoped.
- Pollination / host-parasite networks — different product surface; schema supports them but UI doesn't yet.

---

## 9. Known Gaps to Prioritize in Future Sweeps

1. **Tropical terrestrial** (rainforest) — thinnest published-web coverage; likely composite-only; high audience value.
2. **Coral reefs** — iconic, data messy; aggregation to fish guilds is the only viable path.
3. **Southern hemisphere broadly** — Australia, S. America, S. Africa webs are scarce in the classic canon; check Mangal and regional journals first.
4. **Desert** — no obvious classic web; expect to build a composite from diet studies or leave "Coming soon."
5. **Deep sea / hydrothermal vents** — exciting story, very sparse resolved food webs; treat as research bonus, not pipeline blocker.

---

## 10. Definition of Done for a Research Sweep

- [ ] All databases in Section 3 swept with logged queries
- [ ] Every candidate screened against hard gates; rejects recorded with reason
- [ ] Tier 1 candidates fully verified (matrix actually obtained, not assumed)
- [ ] Candidate list written in Section 7 format
- [ ] Human review checkpoint passed; Tier 1 list approved for curation
- [ ] PR submitted adding `research/<region>.md` and updating this file's shortlist

---

## 11. Sweep Ledger

*One row per candidate, updated stage by stage. Stage 1 (research) writes `researched` + the research file; later stages own `verified` / `implemented`. Note: research files live in `researched/`, not `research/` as sections above say.*

| Candidate | Region | Tier | Researched | Verified | Implemented |
|---|---|---|---|---|---|
| tapajos-river | South America — Amazon river/floodplain | 1 | researched — researched/south-america.md | verified — verified/south-america.md (matrix: Springer ESM docx, 35 groups) | implemented — data/webs/tapajos-river.json (24 nodes, weighted) |
| san-jorge-gulf | South America — Patagonian marine | 1 | researched — researched/south-america.md | verified — verified/south-america.md (matrix: GitHub EcoComplex/NetworkGolfoSanJorge + Zenodo) | — |
| balbina-forest-islands | South America — Amazon rainforest (terrestrial) | 1 (high-curation-risk) | researched — researched/south-america.md | rejected (provenance) — verified/south-america.md (model-inferred links; revisit only if a `modeled` badge is added) | — |
| pantanal-oxbow-lakes | South America — Pantanal wetland lakes | 1 | researched — researched/south-america.md | verified — verified/south-america.md (matrix: open Annex A docx, 38–39 compartments) | — |
| upper-parana-floodplain | South America — Paraná river/reservoir | 2 | researched — researched/south-america.md | verified (spot check) — verified/south-america.md (diet table in open SciELO PDF) | — |
| strait-of-magellan | South America — sub-Antarctic channel | appendix | researched — researched/south-america.md | confirmed (record only) — verified/south-america.md (preprint live, 139 trophic species) | — |
| xisha-islands | Coral reefs — South China Sea | 1 | researched — researched/coral-reefs.md | — | — |
| uvea-atoll | Coral reefs — New Caledonia lagoon | 1 | researched — researched/coral-reefs.md | — | — |
| french-frigate-shoals | Coral reefs — NW Hawaiian Islands | 1 | researched — researched/coral-reefs.md | — | — |
| la-parguera | Coral reefs — Caribbean (Puerto Rico) | 1 | researched — researched/coral-reefs.md | — | — |
| banco-chinchorro | Coral reefs — Caribbean (Mexico) | 1 | researched — researched/coral-reefs.md | — | — |
| global-reef-fish-webs | Coral reefs — six regions (Pozas-Schacre 2021) | 2 | researched — researched/coral-reefs.md | — | — |
| west-hawaii-reefs | Coral reefs — Hawai'i | 2 | researched — researched/coral-reefs.md | — | — |
| danajon-reef | Coral reefs — Philippines | 2 | researched — researched/coral-reefs.md | — | — |
| opitz-caribbean-reef | Coral reefs — Caribbean (regional synthesis) | 2 | researched — researched/coral-reefs.md | — | — |
| moorea-metabarcoding | Coral reefs — French Polynesia | 2 (high-curation-risk) | researched — researched/coral-reefs.md | — | — |
| roopnarine-greater-antilles | Coral reefs — Caribbean (Cayman/Cuba/Jamaica) | 2 | researched — researched/coral-reefs.md | — | — |
| moorea-tiahura | Coral reefs — French Polynesia | appendix | researched — researched/coral-reefs.md | — | — |
| gbr-gribble-models | Coral reefs — Great Barrier Reef | appendix | researched — researched/coral-reefs.md | — | — |
| st-martin-island | Coral reefs — Caribbean (classic) | appendix (inaccessible) | researched — researched/coral-reefs.md | — | — |
| takapoto-planktonic | Coral reefs — French Polynesia (planktonic only) | appendix | researched — researched/coral-reefs.md | — | — |
| caffee-wio-reef | Coral reefs — Western Indian Ocean | appendix | researched — researched/coral-reefs.md | — | — |
| coachella-valley | Desert — Sonoran (Coachella Valley, USA) | 1 | researched — researched/desert.md | — | — |
| namib-fog-oasis | Desert — Namib dunes, Namibia | 1 | researched — researched/desert.md | — | — |
| gulf-of-california-islands | Desert — Gulf of California islands, Mexico | 2 (high-curation-risk) | researched — researched/desert.md | — | — |
| lake-eyre-springs | Desert — Lake Eyre Basin springs, Australia | 2 | researched — researched/desert.md | — | — |
| australian-brown-web | Desert — arid South Australia (Boolcoomatta) | 2 (high-curation-risk) | researched — researched/desert.md | — | — |
| welwitschia-web | Desert — Namib (Welwitschia) | appendix | researched — researched/desert.md | — | — |
| east-pacific-rise-vent | Deep sea — East Pacific Rise hydrothermal vents (9°50′N) | 1 | researched — researched/deep-sea.md | — | — |
| menez-gwen-vent | Deep sea — Mid-Atlantic Ridge hydrothermal vent (Azores) | 1 | researched — researched/deep-sea.md | — | — |
| east-scotia-ridge-vents | Deep sea — Southern Ocean hydrothermal vents (E2/E9) | 1 | researched — researched/deep-sea.md | — | — |
| guaymas-basin-vents-seeps | Deep sea — Gulf of California vents & seeps | 2 (high-curation-risk) | researched — researched/deep-sea.md | — | — |
| gom-seep-macrobenthos | Deep sea — Gulf of Mexico cold seeps | 2 (high-curation-risk) | researched — researched/deep-sea.md | — | — |
| mar-azores-vent-complexity | Deep sea — Azores triple-junction vents | appendix (inaccessible) | researched — researched/deep-sea.md | — | — |
| hadal-trench-megafauna | Deep sea — Mariana & Kermadec trenches | appendix (inaccessible) | researched — researched/deep-sea.md | — | — |
| axial-volcano-vents | Deep sea — Juan de Fuca Ridge (NE Pacific) | appendix (inaccessible) | researched — researched/deep-sea.md | — | — |
| el-verde-rainforest | Tropical terrestrial — Puerto Rico rainforest (Luquillo) | 1 | researched — researched/tropical-terrestrial.md | — | — |
| sumatra-rainforest-energy-web | Tropical terrestrial — Sumatra lowland rainforest (Jambi) | 1 | researched — researched/tropical-terrestrial.md | — | — |
| bci-seed-predators | Tropical terrestrial — Panama (Barro Colorado Island) | 2 | researched — researched/tropical-terrestrial.md | — | — |
| team-tropical-mammal-webs | Tropical terrestrial — 15 forests, pan-tropical | 2 (high-curation-risk) | researched — researched/tropical-terrestrial.md | — | — |
| el-yunque-understory-web | Tropical terrestrial — Puerto Rico (experimental understory) | 2 | researched — researched/tropical-terrestrial.md | — | — |
| atlantic-rainforest-streams | Tropical terrestrial — Atlantic Forest streams, Brazil | appendix (biome-saturation gate) | researched — researched/tropical-terrestrial.md | — | — |
| amazon-vertebrate-metaweb | Tropical terrestrial — pan-Amazon | appendix (preprint/model-inferred) | researched — researched/tropical-terrestrial.md | — | — |
| bylot-island-tundra | Tundra & boreal — High Arctic tundra (Nunavut, Canada) | 1 | researched — researched/tundra-boreal.md | — | — |
| zackenberg-arctic-web | Tundra & boreal — High Arctic tundra (NE Greenland) | 1 | researched — researched/tundra-boreal.md | — | — |
| bear-island-bjornoya | Tundra & boreal — High Arctic island tundra (Svalbard, Norway) | 1 | researched — researched/tundra-boreal.md | — | — |
| kluane-boreal-forest | Tundra & boreal — boreal forest (Yukon, Canada) | 1 | researched — researched/tundra-boreal.md | — | — |
| varanger-peninsula-coat | Tundra & boreal — sub-Arctic tundra (Norway) | 2 | researched — researched/tundra-boreal.md | — | — |
| barrow-ibp-tundra | Tundra & boreal — coastal tundra (Alaska, USA) | 2 | researched — researched/tundra-boreal.md | — | — |
| svalbard-metaweb | Tundra & boreal — Svalbard archipelago | 2 (high-curation-risk) | researched — researched/tundra-boreal.md | — | — |
| krebs-canadian-arctic-17-sites | Tundra & boreal — pan-Canadian Arctic | appendix | researched — researched/tundra-boreal.md | — | — |
| kevo-mountain-birch | Tundra & boreal — sub-Arctic birch forest (N. Finland) | appendix | researched — researched/tundra-boreal.md | — | — |
