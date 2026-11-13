# Ecosystem Research Strategy — Food Web Explorer

**Purpose of this document:** Give an agent (human or AI) everything needed to (a) assess the current state of the Food Web Explorer repo, and (b) conduct systematic, repeatable research to find future ecosystems worth adding.

**How to use:** Read Section 1 for project context. For each new region/biome you research, follow the methodology in Section 4 using the template in Section 5. Record findings in the candidate table format in Section 7. Submit additions as a PR against this file or a follow-up `researched/region-*.md`.

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

0. **Size the region first.** One sweep = one sub-region = one file. If the target is a continent or any area much larger than the already-implemented webs, don't sweep it whole: propose a split into sub-regions comparable in scope to existing implemented webs (e.g. "North America" → Pacific coast, Great Plains interior, Mexico & Mesoamerica, Atlantic & Gulf estuaries, Boreal forest & Canadian Shield) and get the split approved before sweeping. Record agreed boundaries in the sweep file's scope note so later sweeps don't overlap.
1. **Sweep the databases** (Section 3) for the target region/biome. Query patterns: "food web" + region/ecosystem name; Ecopath + ecosystem; "trophic network" + biome.
2. **Screen candidates against the inclusion criteria** (Section 5). Reject early — don't dig into a web that can't work.
3. **Verify accessibility:** the node list and link matrix (or diet matrix, for Ecopath models) must be obtainable — paper appendix, supplementary, repository deposit, or database download. If not obtainable → status `inaccessible`, note what's missing, stop.
4. **Sketch the aggregation plan:** list the candidate's raw node count and a plausible ≤25-node grouping. If you can't imagine the aggregation without destroying the web's story (e.g. a coral reef with 400 fish species and no natural groupings), mark `high-curation-risk` and move on.
5. **Score and rank** per the rubric in Section 5. Tier 1 = build next; Tier 2 = backlog; Appendix = recorded but not planned.
6. **Write up** using the template in Section 6. One file per region/biome: `researched/<region>.md`.
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
6. **N. America interior** — approved 2026-11 for gap-fill sub-region sweeps (the original single-file N. America sweep was coasts-only): Great Plains interior (done → `researched/north-america-great-plains.md`); Mexico & Mesoamerica; Atlantic & Gulf estuaries; Boreal forest & Canadian Shield (pending). Boundaries: coasts & iconic inland stay in `researched/north-america.md`; tundra → tundra-boreal; sub-Arctic seas → arctic-marine; deserts → desert; Caribbean reefs → coral-reefs.

---

## 10. Definition of Done for a Research Sweep

- [ ] All databases in Section 3 swept with logged queries
- [ ] Every candidate screened against hard gates; rejects recorded with reason
- [ ] Tier 1 candidates fully verified (matrix actually obtained, not assumed)
- [ ] Candidate list written in Section 7 format
- [ ] Human review checkpoint passed; Tier 1 list approved for curation
- [ ] PR submitted adding `researched/<region>.md` and updating this file's shortlist
- [ ] Verdict recorded: candidates tiered, or a nothing-buildable sweep parked in `researched/notbuildable/` with ledger paths updated

---

## 11. Sweep Ledger

*One row per candidate, updated stage by stage. Stage 1 (research) writes `researched` + the research file; later stages own `verified` / `implemented`. Research files live in `researched/`, one per sub-region (see the region-sizing rule in Section 4); sweeps that found nothing buildable are parked in `researched/notbuildable/` so they aren't re-swept (re-sweep only on explicit user request). Stage 2 moves the consumed research file to `verified/<region>-research.md` when it finishes a region, so `researched/` always shows only the pending-verification queue. When every candidate of a region has reached `implemented`, Stage 3 archives both files to `implemented/researched/<region>.md` and `implemented/verified/<region>.md` and updates the paths in this table.*

| Candidate | Region | Tier | Researched | Verified | Implemented |
|---|---|---|---|---|---|
| tapajos-river | South America — Amazon river/floodplain | 1 | researched — verified/south-america-research.md | verified — verified/south-america.md (matrix: Springer ESM docx, 35 groups) | implemented — data/webs/tapajos-river.json (24 nodes, weighted) |
| san-jorge-gulf | South America — Patagonian marine | 1 | researched — verified/south-america-research.md | verified — verified/south-america.md (matrix: GitHub EcoComplex/NetworkGolfoSanJorge + Zenodo) | — |
| balbina-forest-islands | South America — Amazon rainforest (terrestrial) | 1 (high-curation-risk) | researched — verified/south-america-research.md | rejected (provenance) — verified/south-america.md (model-inferred links; revisit only if a `modeled` badge is added) | — |
| pantanal-oxbow-lakes | South America — Pantanal wetland lakes | 1 | researched — verified/south-america-research.md | verified — verified/south-america.md (matrix: open Annex A docx, 38–39 compartments) | — |
| upper-parana-floodplain | South America — Paraná river/reservoir | 2 | researched — verified/south-america-research.md | verified (spot check) — verified/south-america.md (diet table in open SciELO PDF) | — |
| strait-of-magellan | South America — sub-Antarctic channel | appendix | researched — verified/south-america-research.md | confirmed (record only) — verified/south-america.md (preprint live, 139 trophic species) | — |
| xisha-islands | Coral reefs — South China Sea | 1 | researched — verified/coral-reefs-research.md | rejected (access) — verified/coral-reefs.md (no supplementary exists; diet matrix never published; revisit only if authors deposit the EwE model) | — |
| uvea-atoll | Coral reefs — New Caledonia lagoon | 1 | researched — verified/coral-reefs-research.md | verified — verified/coral-reefs.md (matrix: open PDF Appendix B, 25×25 diet matrix, 25 groups) | — |
| french-frigate-shoals | Coral reefs — NW Hawaiian Islands | 1 | researched — verified/coral-reefs-research.md | verified — verified/coral-reefs.md (matrix: Table 1 in open PDF, 15 groups, weighted diet %) | — |
| la-parguera | Coral reefs — Caribbean (Puerto Rico) | 1 | researched — verified/coral-reefs-research.md | rejected (access) — verified/coral-reefs.md (Tables A7/A8 verified to exist but walled: BioOne bot-block / UPR login) | — |
| banco-chinchorro | Coral reefs — Caribbean (Mexico) | 1 | researched — verified/coral-reefs-research.md | rejected (access) — verified/coral-reefs.md (electronic appendices D–G verified real but unobtainable; publisher supplement link dead) | — |
| la-parguera (blocked) | Coral reefs — Caribbean (Puerto Rico) | 1 | — | blocked — revisit with BioOne/library access: appendix Tables A7/A8 at DOI 10.18475/cjos.v45i2.a17 | — |
| banco-chinchorro (blocked) | Coral reefs — Caribbean (Mexico) | 1 | — | blocked — revisit via author request (rzf39259@cucba.udg.mx) or if akjournals restores supplement hosting: App. D Tables D3–D7 | — |
| global-reef-fish-webs | Coral reefs — six regions (Pozas-Schacre 2021) | 2 | researched — verified/coral-reefs-research.md | verified (spot check) — verified/coral-reefs.md (Zenodo 5341340 downloaded & parsed; per-region links corrected 491–883) | — |
| west-hawaii-reefs | Coral reefs — Hawai'i | 2 | researched — verified/coral-reefs-research.md | verified (spot check) — verified/coral-reefs.md (Dryad 4sh45 EcopathInputData.xlsx contains diet matrix per manifest; promotes to Tier 1 — open xlsx before building) | — |
| danajon-reef | Coral reefs — Philippines | 2 | researched — verified/coral-reefs-research.md | verified (spot check) — verified/coral-reefs.md (DOI 10.1016/j.jmarsys.2014.05.014; EcoBase model 711: 37 groups + 17 fleets; matrix unopened — paywalled) | — |
| opitz-caribbean-reef | Coral reefs — Caribbean (regional synthesis) | 2 | researched — verified/coral-reefs-research.md | verified (spot check) — verified/coral-reefs.md (Dryad 1mv20r6 matrix parsed: 249×249 binary, 3,313 links) | — |
| moorea-metabarcoding | Coral reefs — French Polynesia | 2 (high-curation-risk) | researched — verified/coral-reefs-research.md | verified (spot check) — verified/coral-reefs.md (Dryad t7pd371 otu_table.csv; 22 spp × 4,341 OTUs exact) | — |
| roopnarine-greater-antilles | Coral reefs — Caribbean (Cayman/Cuba/Jamaica) | 2 | researched — verified/coral-reefs-research.md | verified (spot check) — verified/coral-reefs.md (Dryad c213h: 3× 265×265 matrices + guild key; Mangal 180 mirror) | — |
| moorea-tiahura | Coral reefs — French Polynesia | appendix | researched — verified/coral-reefs-research.md | confirmed (record only) — verified/coral-reefs.md (citation exact; paywalled) | — |
| gbr-gribble-models | Coral reefs — Great Barrier Reef | appendix | researched — verified/coral-reefs-research.md | confirmed (record only) — verified/coral-reefs.md (citations completed; diet matrix in no open document) | — |
| st-martin-island | Coral reefs — Caribbean (classic) | appendix (inaccessible) | researched — verified/coral-reefs-research.md | confirmed (record only; inaccessible) — verified/coral-reefs.md (Ecology 74(4):1216–1233, 44-species island web; absence re-verified) | — |
| takapoto-planktonic | Coral reefs — French Polynesia (planktonic only) | appendix | researched — verified/coral-reefs-research.md | confirmed (record only) — verified/coral-reefs.md (NetIndices Takapoto verified; 2001 ALR companion citation corrected to Niquil et al.) | — |
| caffee-wio-reef | Coral reefs — Western Indian Ocean | appendix | researched — verified/coral-reefs-research.md | confirmed (record only) — verified/coral-reefs.md (Ecol. Modelling 263:326–348; 27 groups; suppl. Table s.1) | — |
| coachella-valley | Desert — Sonoran (Coachella Valley, USA) | 1 | researched — verified/desert-research.md | rejected (access) — verified/desert.md (S=29/L=262/C=0.312 verbatim in Camacho 2007 + Williams & Martinez 2008, but matrix unobtainable: Dunne 2008 supp has NO modern-web matrices; absent from WoL/Netzschleuder/Mangal/Dryad/Zenodo/GitHub; NCEAS DB defunct; Polis 1991 paywalled 10.1086/285208) | — |
| coachella-valley (blocked) | Desert — Sonoran (Coachella Valley, USA) | 1 | — | blocked — revisit with library access to Polis 1991 (Am. Nat. 138:123–155, JSTOR 2462536; reprinted in Foundations of Ecology II) or request NCEAS-era trophic-species compilation from Dunne/Williams/Martinez labs; transcription carries salmon-rule risk | — |
| namib-fog-oasis | Desert — Namib dunes, Namibia | 1 | researched — verified/desert-research.md | verified — verified/desert.md (matrix: Tables 1–4 in-article, Gan et al. 2024 Sci. Rep. 14:13334, PMC11164947; 15 isotope taxa + belowground nematode chain + 4 vertebrate predators via refs; weights = published simmr estimates) | — |
| gulf-of-california-islands | Desert — Gulf of California islands, Mexico | 2 (high-curation-risk) | researched — verified/desert-research.md | verified (spot check; corrected) — verified/desert.md (PNAS 92:4382–4386 verbatim, PMC41948; AmNat corrected to 147:396–423, DOI 10.1086/285858 — "813–832" belonged to Polis & Strong 1996; no matrix — composite-only) | — |
| lake-eyre-springs | Desert — Lake Eyre Basin springs, Australia | 2 | researched — verified/desert-research.md | verified (spot check) — verified/desert.md (Moran, Wong & Thompson 2019 Ecol. Evol. 9:11464–11475, PMC6802011 + Dryad 10.5061/dryad.j18jt4n; no link matrix — composite-leaning holds) | — |
| australian-brown-web | Desert — arid South Australia (Boolcoomatta) | 2 (high-curation-risk) | researched — verified/desert-research.md | verified (spot check; corrected) — verified/desert.md (Wijas, Finlayson & Letnic, Ecosystems 26:969–982, DOI 10.1007/s10021-022-00810-4; no interaction table — composite path confirmed) | — |
| welwitschia-web | Desert — Namib (Welwitschia) | appendix | researched — verified/desert-research.md | confirmed (record only) — verified/desert.md (Dobson, Hutchinson & Batterman 2023, Front. Ecol. Evol. 11:1253084; co-authors added) | — |
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
| ythan-estuary | Europe — Scottish estuary/coastal | 1 | researched — verified/europe-research.md | verified (corrected) — verified/europe.md (DOI → 10.2307/5416; 83/395 = conservative version, published web 92/421; matrix: cheddar R pkg `YthanEstuary`; Netzschleuder claim dead) | — |
| celtic-sea-shelf | Europe — NE Atlantic shelf sea (Ecopath) | 1 | researched — verified/europe-research.md | verified (corrected) — verified/europe.md (first author Hernvann, not Bentley; 50 groups verbatim; diet matrix in Suppl. App. SB; six 5-yr snapshots 1985–2016 confirmed) | — |
| baltic-sea-ecopath | Europe — brackish shelf sea (Ecopath) | 1 | researched — verified/europe-research.md | verified (corrected) — verified/europe.md (review = Korpinen et al. 2022; ICES CM 2010/L:03 = Fennel NPZD, not a matrix; pinned: Tomczak et al. 2012 Ecol. Model. 230:123–147 + WGSAM 2016 Annex 3 open via archimer — matrix-file gate for Stage 3) | — |
| scotch-broom-silwood | Europe — English terrestrial (Silwood Park) | 2 | researched — verified/europe-research.md | verified — verified/europe.md (154 taxa/370 links/82 trophic species verbatim; Appendix I in open Cohen-lab PDF) | — |
| silwood-grassland | Europe — English grassland | 2 | researched — verified/europe-research.md | verified (citation-level) — verified/europe.md (Ecology 80(3):1044–1055 exact; 61/97 size claim unverified — confirm at Stage 3; Netzschleuder `grassland_web` is Dawah et al. 1995, not this web) | — |
| lough-hyne | Europe — Irish marine lough | 2 | researched — verified/europe-research.md | verified — verified/europe.md (GATEWAy v1.0 CC BY, iDiv 10.25829/idiv.283-3-756 + Netzschleuder `gateway_foodwebs` mirror; 5 modules; composite) | — |
| skipwith-pond | Europe — English pond | appendix (biome-saturation gate) | researched — verified/europe-research.md | confirmed (record only) — verified/europe.md (Oikos 55:299–311, DOI 10.2307/3565588; cheddar `SkipwithPond`) | — |
| broadstone-stream | Europe — English acid stream | appendix (biome-saturation gate) | researched — verified/europe-research.md | confirmed (record only) — verified/europe.md (Woodward & Hildrew 2001 JAE 70(2):273–288 exact; Hildrew et al. 1985 Ecol. Entomol. 10:403–413 exact) | — |
| loch-leven | Europe — Scottish lake | appendix (biome-saturation gate) | researched — verified/europe-research.md | confirmed (record only) — verified/europe.md (Huxham, Raffaelli & Pike 1995 JAE 64(2):168–176 exact) | — |
| irish-sea-ecopath | Europe — Irish Sea | appendix (access unclear) | researched — verified/europe-research.md | confirmed (record only; corrected) — verified/europe.md (source = Bentley et al. 2019 SAMS reports 296/297, not a UHI PhD thesis) | — |
| hauraki-gulf | Australia & Oceania — NZ coastal marine | 1 | researched — verified/australia-oceania-research.md | verified — verified/australia-oceania.md (matrix: NZAEBR-301 App. 5 balanced parameters, open PDF fetched; + AEBR 160 appendices; 48 groups, 12 single-species fish, birds 37 spp., cetaceans 7 spp. — all verbatim) | — |
| otago-harbour-intertidal | Australia & Oceania — NZ intertidal mudflat (parasite-inclusive) | 1 | researched — verified/australia-oceania-research.md | verified — verified/australia-oceania.md (matrix: Ecological Archives E092-173, DOI 10.1890/11-0371.1, GloBI-indexed; 180 nodes / 1,924 typed links / 3+123+19 split — abstract verbatim) | — |
| kerguelen-plateau | Australia & Oceania — sub-Antarctic marine plateau (Heard & McDonald Is.) | 1 | researched — verified/australia-oceania-research.md | verified (corrected) — verified/australia-oceania.md (matrix: Subramaniam et al. 2020 Front. Mar. Sci. 7:641 Tables A1/A2 open, 28 groups verbatim; base model journal corrected to DSR II 174:104787 — not Fisheries Res.; Frontiers first author Subramaniam, not McCormack) | — |
| te-tapuwae-reef | Australia & Oceania — NZ rocky reef marine reserve | 1 | researched — verified/australia-oceania-research.md | verified — verified/australia-oceania.md (matrices: Eddy et al. 2014 Ecol. Model. 275:48–72 Tables 2–3, open PDF fetched — 22 base groups + paua + kina = 24; Pinkerton et al. 2008 JEMBE 367(2):189–203 confirmed) | — |
| east-bass-strait | Australia & Oceania — SE Australia shelf/slope (Ecopath) | 2 | researched — verified/australia-oceania-research.md | verified (spot check) — verified/australia-oceania.md (FRDC 2002-028 open PDF confirmed; EcoBase 406 registry verbatim: 59 groups, 11 fleets; report diet Table 2 unopened — EcoBase download backup) | — |
| north-west-shelf | Australia & Oceania — WA tropical shelf (Ecopath) | 2 | researched — verified/australia-oceania-research.md | verified (spot check; corrected) — verified/australia-oceania.md (citation corrected: "Trophic webs and modelling of Australia's North West Shelf", NWSJEMS TR No. 9, Bulman 2006; Table 7.2.1 unopened — Stage-2 gate stands) | — |
| chatham-rise | Australia & Oceania — NZ oceanic shelf/slope (Ecopath, preliminary) | 2 | researched — verified/australia-oceania-research.md | verified (spot check) — verified/australia-oceania.md (model = grey literature only, Pinkerton 2011 balanced model + 2013 EIA App. 22; no peer-reviewed paper — "preliminary" holds; diet baseline FRR 2002/07 open PDF confirmed; ~49 groups unverified) | — |
| southern-plateau-nz | Australia & Oceania — NZ sub-Antarctic oceanic (Ecopath pilot) | 2 | researched — verified/australia-oceania-research.md | verified (spot check) — verified/australia-oceania.md (JEMBE 289(2):223–262, DOI 10.1016/S0022-0981(03)00045-5, 17-author list; EcoBase ID "151" unconfirmed — Colléter overview list shows #129, registry IDs unreliable) | — |
| nz-stream-webs | Australia & Oceania — NZ South Island streams | appendix (biome-saturation gate) | researched — verified/australia-oceania-research.md | confirmed (record only) — verified/australia-oceania.md (Ecology 84(1):145–161 exact DOI; Netzschleuder fresh_webs live, 26 webs) | — |
| burdekin-dry-tropics-rivers | Australia & Oceania — Queensland dry-tropics rivers | appendix (biome-saturation gate) | researched — verified/australia-oceania-research.md | confirmed (record only; corrected) — verified/australia-oceania.md (first author is Blanchette, not Davis; no Pusey; FWS 33(1):142–158 open at UChicago) | — |
| magela-creek | Australia & Oceania — NT wet-dry tropics (Alligator Rivers) | appendix (biome-saturation gate) | researched — verified/australia-oceania-research.md | confirmed (record only) — verified/australia-oceania.md (MFR 56(3):329–342 exact; Griffith open PDF as recorded) | — |
| murray-billabongs | Australia & Oceania — SE Australia billabongs | appendix (biome-saturation gate) | researched — verified/australia-oceania-research.md | confirmed (record only) — verified/australia-oceania.md (Oecologia 96(1):85–94, DOI 10.1007/BF00318034) | — |
| southern-benguela | Africa — South Africa upwelling shelf (Ecopath) | 1 | researched — verified/africa-research.md | verified — verified/africa.md (matrix: figshare Data_Sheet_1 PDF via 10.3389/fmars.2020.00540.s001, Table S4, 49 groups) | implemented — data/webs/marine/southern-benguela.json (25 nodes, weighted) |
| northern-benguela | Africa — Namibia upwelling shelf (Ecopath, regime shift) | 1 | researched — verified/africa-research.md | verified — verified/africa.md (matrix: Heymans & Sumaila 2007 FCRR 15(6) + EcoBase 115; 2016 paper has no diet table; DOI corrected) | implemented — data/webs/marine/northern-benguela.json (24 nodes, weighted) |
| banc-d-arguin | Africa — Mauritania shelf + intertidal flats (Ecopath) | 1 | researched — verified/africa-research.md | verified — verified/africa.md (matrix: PLoS File S1 docx Table S2; 51 groups; title/DOI corrected) | — |
| okavango-delta | Africa — Botswana seasonal floodplain wetland | 1 | researched — verified/africa-research.md | rejected (no web in source) — verified/africa.md (Lindholm 2007 is a paywalled process study; no link/flux matrix) | — |
| sene-gambian-shelf | Africa — Senegal/Gambia upwelling shelf (Ecopath) | 2 | researched — verified/africa-research.md | verified (spot check) — verified/africa.md (chapter pp. 57–70 in OA FCRR 12(7), UBC 1.0074805; 13-fold decline = Christensen et al.) | — |
| senegal-bamboung-mpa | Africa — Senegal mangrove-creek MPA (Ecopath) | 2 | researched — verified/africa-research.md | verified (spot check) — verified/africa.md (matrix: Colléter 2010 MSc memoir Annexe 5, open; 2012 Ecol. Model. 232:1–13) | — |
| lake-victoria | Africa — East African Great Lake (Nile perch) | appendix (biome-saturation gate) | researched — verified/africa-research.md | confirmed (record only) — verified/africa.md (ICLARM CP 26 chapter; EcoBase 235, 16 groups) | — |
| lake-malawi | Africa — East African Great Lake (cichlid radiation) | appendix (biome-saturation gate) | researched — verified/africa-research.md | confirmed (record only) — verified/africa.md (Darwall 2010 open PDF, 25 groups; Gownaris link unsupported) | — |
| lake-tanganyika | Africa — East African Great Lake (7-group pilot model) | appendix (biome-saturation gate) | researched — verified/africa-research.md | confirmed (record only) — verified/africa.md (ICLARM CP 26, full author list; EcoBase 193, 7 groups) | — |
| lake-turkana | Africa — Kenyan desert lake (ECOPATH II) | appendix (biome-saturation gate) | researched — verified/africa-research.md | confirmed (record only) — verified/africa.md (ICLARM CP 26 pp. 116–123, exact title) | — |
| gulf-of-guinea-shelf | Africa — Gulf of Guinea shelf (Ecopath) | appendix (access unclear) | researched — verified/africa-research.md | confirmed (record only) — verified/africa.md (EcoBase IDs 388/408 not re-verified; gated by saturation/thin metadata) | — |
| okavango-delta (blocked) | Africa — Botswana Okavango via Bokhutlo 2021 | 1 | — | blocked — open isotope/mixing-model data (Environ. Biol. Fishes 104:1303–1319, OA); links literature-inferred — revisit only alongside a modeled/composite badge decision | — |
| karnataka-arabian-sea | Asia — SW India shelf (Ecopath, 24 groups) | 1 | researched — verified/asia-research.md | verified (corrected) — verified/asia.md (matrix: IJMS 38(1):69–76 open PDF Table 3 diet matrix, 24 groups; Bull. 51 full text eprints/3945; EcoBase 574; "17-fold oil sardine" story stat unverified — use documented boom–bust) | — |
| pearl-river-estuary | Asia — South China megacity estuary (Ecopath) | 1 | researched — verified/asia-research.md | verified (corrected) — verified/asia.md (matrix: Table 2 diet matrix in open Duan et al. 2008 PDF / OCM 52(7):359–367; 26 groups 1997–99; EcoBase 548; 1981/1998 twin models Ecol. Model. 220:2802–2818, open mirror) | — |
| east-china-sea | Asia — East China Sea shelf (Ecopath) | 2 | researched — verified/asia-research.md | verified (spot check; corrected) — verified/asia.md (citation: Progr. Nat. Sci. 19(10):1271–1280, DOI 10.1016/j.pnsc.2009.03.003 — not Acta Oceanol. Sin.; EcoBase 440; diet matrix unopened, paywalled) | — |
| gulf-of-thailand | Asia — Gulf of Thailand pre-trawl baseline (Ecopath) | 2 | researched — verified/asia-research.md | verified (spot check) — verified/asia.md (J. Fish Biol. 53(Suppl. A):128–142, DOI 10.1111/j.1095-8649.1998.tb01023.x; EcoBase 56 = 1963–64 model; matrix via EcoBase, unopened) | — |
| java-sea | Asia — N coast Central Java Sea (Ecopath) | 2 | researched — verified/asia-research.md | verified (spot check; corrected) — verified/asia.md (matrix: Nurhakim 2003 WorldFish CP 67 open PDF Table 3 diet matrix, 27 groups; "Buchary 1999 report" conflation corrected — Buchary is a separate UBC thesis, EcoBase Buchary_1974_JavaSea) | — |
| persian-gulf | Asia — N Persian Gulf, Iran (Ecopath, open) | 2 | researched — verified/asia-research.md | verified (spot check; corrected — is northern OMAN Sea, rename) — verified/asia.md (matrix: Tajzadeh-Namin et al. 2020 IJFS 19(6):2804–2823 open PDF Table 3, 16 groups, pedigree 0.78; correct pin ~25.3N 60.6E) | — |
| lake-baiyangdian | Asia — N China shallow lake, 5-period webs | appendix (biome-saturation gate) | researched — verified/asia-research.md | confirmed (record only; corrected) — verified/asia.md (Yang et al. 2022 Front. Environ. Sci. 10:987600 — first author Yang, not "Wang") | — |
| sea-of-oman-reef | Asia — Oman artificial reef (Ecopath, open) | appendix (scope) | researched — verified/asia-research.md | confirmed (record only) — verified/asia.md (MDPI Sustainability 15(24):16574, 2023) | — |
| sri-lanka-coast | Asia — Sri Lanka coastal (Ecopath) | appendix (access unclear) | researched — verified/asia-research.md | confirmed (record only; corrected) — verified/asia.md (Haputhantri, Villanueva & Moreau 2008, Estuar. Coast. Shelf Sci.; EcoBase 344 = Sri Lanka coast 2000) | — |
| santa-barbara-kelp-forest | North America — California kelp forest (Scientific Data, open) | 1 | researched — researched/north-america.md | — | — |
| narragansett-bay | North America — Rhode Island estuary (Ecopath, 2 periods) | 2 | researched — researched/north-america.md | — | — |
| sanak-intertidal | North America — Aleutian intertidal (humans-in-web) | 2 | researched — researched/north-america.md | — | — |
| yellowstone-composite | North America — Wyoming montane (composite) | 2 (high-curation-risk) | researched — researched/north-america.md | — | — |
| bridge-brook-lake | North America — Adirondack lake (classic) | appendix (biome-saturation gate) | researched — researched/north-america.md | — | — |
| california-intertidal-parasite-web | North America — California rocky intertidal (1,809 nodes) | appendix (aggregation cost) | researched — researched/north-america.md | — | — |
| weeks-bay | North America — Alabama estuary (seasonal Ecopath) | appendix (provenance) | researched — researched/north-america.md | — | — |
| puget-sound | North America — Washington inland sea (Ecopath) | appendix (geography) | researched — researched/north-america.md | — | — |
| barents-sea | Arctic marine — Barents Sea (Ecopath, cod–capelin cycle) | 1 | researched — verified/arctic-marine-research.md | verified (corrected) — verified/arctic-marine.md (matrices: CEFAS TR117 Table 4/Table 8; Pedersen 2021 Data Sheet 15 Part C, 1950 model; ice algae requires 2021 source) | — |
| eastern-bering-sea | Arctic marine — E. Bering Sea shelf (Ecopath, pollock) | 2 | researched — verified/arctic-marine-research.md | verified (spot check; corrected) — verified/arctic-marine.md (TM-178 Tables C4–C26; earlier model 38 groups, 1979–85) | — |
| hudson-bay | Arctic marine — Hudson Bay (Ecopath, ice-algae regime shift) | 2 | researched — verified/arctic-marine-research.md | verified (spot check; corrected) — verified/arctic-marine.md (40 groups; Part I supplement S.1 diet percentages) | — |
| west-greenland-shelf | Arctic marine — West Greenland (Ecopath, post-cod regime) | 2 | researched — verified/arctic-marine-research.md | verified (spot check; corrected) — verified/arctic-marine.md (2001 FCRR 9(4), Table 2 p. 117 / EcoBase 168; 21 groups + detritus) | — |
| beaufort-sea | Arctic marine — Beaufort Sea (EwE 1970–2014, ice dependence) | 2 | researched — verified/arctic-marine-research.md | verified (spot check; corrected) — verified/arctic-marine.md (2018 USF technical report; 36 groups; matrix unconfirmed) | — |
| eastern-chukchi-sea | Arctic marine — E. Chukchi Sea (Ecopath, benthic-dominated) | 2 | researched — verified/arctic-marine-research.md | verified (spot check; corrected) — verified/arctic-marine.md (TM-318 Appendix A1 pp. 165–172; 57 groups) | — |
| baffin-bay-coastal | Arctic marine — Baffin Bay (Ecopath tech report, co-created) | appendix (provenance/preliminary) | researched — verified/arctic-marine-research.md | verified (record only; corrected) — verified/arctic-marine.md (2023 report + peer-reviewed Elementa article + model repo; co-creation/base-model claims corrected) | — |
| western-bering-sea | Arctic marine — W. Bering Sea (Ecopath comparison) | appendix (geography/overlap) | researched — verified/arctic-marine-research.md | verified (record only; corrected) — verified/arctic-marine.md (2002 TM-130; 36/48 groups, diet Tables B5/B6) | — |
| great-plains-saline-wetlands | N. America — Great Plains interior | 2 | researched — researched/north-america-great-plains.md | — | — |
| delta-marsh-carp-cascade | N. America — Great Plains interior (Manitoba Delta Marsh) | appendix (composite path) | researched — researched/north-america-great-plains.md | — | — |
| chaplin-saline-lakes | N. America — Great Plains interior (Saskatchewan saline lakes) | appendix (grey literature) | researched — researched/north-america-great-plains.md | — | — |
| rocky-mountain-saline-wetlands | N. America — interior (Rocky Mountain basin; out of sub-region scope) | appendix (out of scope) | researched — researched/north-america-great-plains.md | — | — |
| prairie-dog-colony-web | N. America — Great Plains interior | appendix (provenance gate) | researched — researched/north-america-great-plains.md | — | — |
| mixed-grass-arthropod-web | N. America — Great Plains interior | appendix (unretrieved lead) | researched — researched/north-america-great-plains.md | — | — |
| rawal-lake | Pakistan — Margalla Hills freshwater reservoir | appendix (11 nodes; biome saturation) | researched — researched/notbuildable/pakistan.md | — | — |
| magellanic-rabbit-steppe | Patagonia — Magellanic/Fuegian steppe & scrub, Chile | 2 (high-curation-risk) | researched — implemented/researched/patagonia.md | verified — implemented/verified/patagonia.md (matrix: GitHub IsidoraAvilaThieme/Magellanic_food_web, Interaction list.xlsx parsed — 535 links exact, 206 linked nodes +1 isolated; rabbit 56 links, 12 predators verbatim; basal-rule herbivore contamination flagged for Stage 3) | implemented — data/webs/grassland/magellanic-rabbit-steppe.json (24 nodes, qualitative; 99 guild edges collapsed from 535 raw links) |
| golfo-nuevo-green-crab | Patagonia — Golfo Nuevo rocky intertidal, Argentina | appendix (biome-saturation gate) | researched — implemented/researched/patagonia.md | confirmed (record only) — verified/patagonia.md (MEPS 713:97–115 exact; figshare 20670378 live with DataBase_Cordonegreencrab.ods) | — |
| lake-moreno | Patagonia — NW Argentine freshwater lake | appendix (biome saturation; inaccessible) | researched — implemented/researched/patagonia.md | confirmed (record only) — verified/patagonia.md (Limnologica 43(2):131–142, 8-author list exact) | — |
| beagle-channel | Patagonia — Argentine sub-Antarctic coastal marine | appendix (biome-saturation gate) | researched — implemented/researched/patagonia.md | confirmed (record only) — verified/patagonia.md (MER 174:105561 exact) | — |
| chilean-patagonia-ewe | Patagonia — Chilean marine shelf/fjord (Ecopath) | appendix (biome saturation; inaccessible) | researched — implemented/researched/patagonia.md | confirmed (record only) — verified/patagonia.md (Prog. Oceanogr. 241:103631 exact; 2026 print) | — |
| south-patagonia-paleo-web | Patagonia — Pleistocene–Holocene terrestrial vertebrates | rejected (model-inferred links) | researched — implemented/researched/patagonia.md | rejected — confirmed — verified/patagonia.md (QSR 250:106696 exact; model-inferred rationale stands) | — |
| patagonia-chinook-subsidy | Patagonia — salmon-centered stream/riparian interactions | rejected (not a community web) | researched — implemented/researched/patagonia.md | rejected — confirmed — verified/patagonia.md (Ecosphere 13(2):e3910 exact; not-a-community-web rationale stands) | — |
| qassinnguit-glacier-foreland | Greenland — low-Arctic glacier foreland (Nuuk/Kobbefjord) | 2 (high-curation-risk) | researched — verified/greenland-research.md | verified (spot check) — verified/greenland.md (citation exact; 130 OTUs/44 spp + survey counts verbatim; Dryad = 2 files, no edge list — Figure 6 transcription required; SEM links partly literature/expert) | — |
| north-water-polynya | Greenland/Canada — northern Baffin Bay polynya | appendix (biome-saturation gate) | researched — verified/greenland-research.md | confirmed (record only) — verified/greenland.md (Arct Sci 10:545-568 + PLOS Climate 3(10):e0000490 exact; base Table 2 matrix unopened) | — |
| northeast-greenland-shelf | Greenland — NE continental shelf (StrathE2E) | appendix (biome-saturation gate; high-curation-risk) | researched — verified/greenland-research.md | confirmed (record only) — verified/greenland.md (GCB 31(4):e70189 exact; >25%/66% abstract-verbatim; Barents-calibrated base verbatim; PURE + GitHub deposits real) | — |
| greenland-deglaciation-ponds | Greenland — W coast glacier-retreat ponds | appendix (biome-saturation gate) | researched — verified/greenland-research.md | confirmed (record only) — verified/greenland.md (Oikos 2026(1):e11415 exact; Dryad n5tb2rc81: data1.csv diet matrices + data2 edge lists, 8+8 ponds) | — |
| young-sound-pelagic | Greenland — NE fjord pelagic carbon budget | appendix (scope/richness) | researched — verified/greenland-research.md | confirmed (record only) — verified/greenland.md (Meddr. Grønland Biosci 58 chapter exact, open PDF; ~8–10 pelagic compartments holds) | — |
| northeast-greenland-epibenthic | Greenland — NE seascape epibenthos | rejected (no edge matrix) | researched — verified/greenland-research.md | rejected — verified/greenland.md (MER 221:108295 exact; Zenodo 21511350 = single TUNU isotopes CSV, no edge data — rejection confirmed) | — |
| northeast-greenland-epibenthic (blocked) | Greenland — NE seascape epibenthos | — | — | blocked — revisit only if the authors deposit a link/mixing-model matrix (paper OA at DOI 10.1016/j.marenvres.2026.108295; current Zenodo deposit is isotope CSV only) | — |
| vatnajokull-nunataks | Iceland — Vatnajökull terrestrial nunataks | 2 (high-curation-risk) | researched — researched/iceland.md | — | — |
| icelandic-waters-ecopath | Iceland — surrounding shelf/EEZ (Ecopath) | appendix (biome-saturation gate) | researched — researched/iceland.md | — | — |
| hengill-stream-webs | Iceland — Hengill geothermal freshwater streams | appendix (biome-saturation gate) | researched — researched/iceland.md | — | — |
| skaftafellsjokull-soil-web | Iceland — Skaftafellsjökull glacier-foreland soil | appendix (richness gate) | researched — researched/iceland.md | — | — |
| myvatn-midge-grassland | Iceland — Mývatn midge-subsidised grassland | rejected (no edge matrix) | researched — researched/iceland.md | — | — |
| myvatn-lake-web | Iceland — Mývatn freshwater lake | rejected (no resolved matrix) | researched — researched/iceland.md | — | — |
