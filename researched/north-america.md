# Region: North America (continental, estuarine & coastal sweep)
**Researched:** 2026-10 · **Status:** complete (Stage 1 — awaiting verification)

**Repo context at sweep time:** 9 webs live; North America already has 5 pins (Chesapeake estuary, Little Rock + Tuesday lakes, cypress wetland, shortgrass prairie, PWS marine) — more than any other continent, so geography scores are penalized throughout this sweep. Biome saturation: freshwater 3 (saturated), marine 2, grassland 2, estuary 1, wetland 1. Scope note: Alaskan tundra systems belong to the tundra-boreal sweep (barrow-ibp-tundra); sub-Arctic seas belong to the arctic-marine sweep; Gulf of California islands and Sonoran desert belong to the desert sweep. This sweep covers the continental USA/Canada/Mexico systems not already claimed, with emphasis on the §8 shortlist leads (Yellowstone, Bridge Brook, Sanak, Wyoming cattle web).

**Sweep log:**
- **Web of Life / GloBI / Mangal / Netzschleuder**: Bridge Brook Lake and the classic North American webs (Little Rock, cypress wetlands) are present but live or freshwater-gated; Sanak webs are indexed via the Dunne-lab data lineage (see below).
- **Ecopath publications + EcoBase**: queries "Narragansett Bay Ecopath model Monaco Ulanowicz diet", "Florida Bay Ecopath model Ulanowicz trophic", "Puget Sound Ecopath food web". Confirmed: Monaco & Ulanowicz 1997 (*MEPS* 161:239–254, three-estuary comparison, 32–37 compartments each); Langan et al. "Modeling 25 years of food web changes in Narragansett Bay" (open at NSF PAR, 1994 + 2018 Ecopath models with supplements); Byron et al. 2011 aquaculture model; Florida Bay USGS/CBL network-analysis reports (Ulanowicz et al. 1998–1999, "most detailed quantified network to date", seasonal); Weeks Bay AL seasonal Ecopath (LSU thesis, open, 17 groups); Puget Sound EwE (Harvey et al., *Estuaries and Coasts*, raptor-cascade simulations).
- **figshare / Zenodo / Dryad**: Santa Barbara Channel kelp-forest data package (14 CSVs incl. nodes/links lists) published open; California rocky-intertidal parasite web dataset (Zilz et al., Dryad) open.
- **Primary literature** (queries logged verbatim): "Yellowstone food web composite published trophic matrix wolf elk aspen" (no resolved matrix — cascade literature only), "cattle grazing food web Wyoming grassland classic published matrix" (0 results), "Channel Islands kelp forest food web California published matrix" (→ Santa Barbara Channel web), "Sanak Island intertidal food web Alaska matrix dataset published", "Bridge Brook Lake food web Havens dataset" (25 nodes / 107 links, classic compilation). Open texts read: Morton et al. 2021 *Scientific Data* (SBC kelp web, open), Zilz et al. 2026 *Scientific Data* (CA intertidal, open), Langan et al. Narragansett 25-year models (NSF PAR open), Eisenberg et al. wolf–elk–aspen synthesis (OSU open PDF).

---

## Tier 1 — build next

### Santa Barbara Channel kelp forest, California — `santa-barbara-kelp-forest`
- **Biome / Region:** Temperate kelp forest (rocky reef subtidal) · N. America (California, USA) · **Lat/Lng (approx):** 34.3, −119.8
- **Source:** Morton, D.N., Lafferty, K.D. et al. (2021). A food web including parasites for kelp forests of the Santa Barbara Channel, California. *Scientific Data* 8 — open access; full data package of 14 CSVs including node list ("1_Nodes.csv") and link list ("2_Links.csv") with per-link justifications, confidence scores, and trophic-interaction types; built on SBC-LTER and Channel Islands NP kelp-forest monitoring. Earlier, coarser SBC kelp webs exist (three published webs plus a links database, cited therein).
- **Data access:** ASSUMED (strong) — nodes/links CSVs are published open with the paper. Not yet downloaded this sweep.
- **Raw size:** several hundred species resolved to life stage incl. parasites (free-living + parasitic), filtered via metadata · **Aggregation plan:** → ~18–22 nodes (kelp/detritus/phytoplankton basal groups; urchins, abalone; kelp-forest fish guilds; sea otter and sharks as distinct; parasite nodes pooled or dropped per Otago lesson)
- **Data type:** qualitative (typed links: predation, parasitism; confidence-scored) · **Provenance:** empirical
- **Scores:** data 3 · story 3 · geography 2 · cost 1 · recognition 3 = **12**
- **Tier:** 1 · **Notes:** The textbook cascade the product was built for (§1 names "sea otters in kelp forests" as the exemplar flagship story): otters → urchins → kelp, with the web's own node list flagging the locally-extinct-but-returning sea otter as an includable node — the cascade toggle writes itself. Cost is real: raw web is far above the ceiling and aggregation must be guild-based, but the CSV metadata (functional group, habitat, trophic strategy) is designed exactly for that. Geography penalty is the only thing keeping this from a 13+.

---

## Tier 2 — backlog

### Narragansett Bay, Rhode Island — `narragansett-bay`
- **Biome / Region:** Temperate estuary · N. America (USA) · **Lat/Lng (approx):** 41.6, −71.4
- **Source:** Langan, J.A. et al. — Modeling 25 years of food web changes in Narragansett Bay (open at NSF PAR) — two new Ecopath models, 1994–1998 and 2014–2018 periods, functional groups derived from diet-data clustering, full species assignments in Supplement 1; plus the classic Monaco & Ulanowicz (1997) *MEPS* network (32–37 compartments, diet matrices in paper/report lineage).
- **Data access:** ASSUMED (strong) — NSF PAR copy is open with supplements. Matrix not yet transcribed.
- **Raw size:** ~15–18 functional groups per period (multi-stanza squid, seabirds, three fish feeding guilds, benthos, gelatinous zooplankton…) · **Aggregation plan:** → near-raw ~16–20 nodes
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 3 · story 2 · geography 2 · cost 2 · recognition 1 = **10**
- **Tier:** 2 · **Notes:** A climate-shifting estuary: warm-water species (scup, butterfish, longfin squid) expanding as cold-water species contract — the 1994-vs-2018 pair is a built-in then/now comparison. Near-raw size is attractive; story and fame are thinner than Chesapeake's.

### Sanak Island intertidal & nearshore, western Gulf of Alaska — `sanak-intertidal`
- **Biome / Region:** Subpolar rocky intertidal · N. America (Alaska, USA) · **Lat/Lng (approx):** 54.4, −162.7
- **Source:** Wood, S.A., Dunne, J.A. et al. — Sanak Archipelago intertidal web (164 taxa / 725 feeding links, "the most diverse intertidal food web ever compiled") and the refined parasite-inclusive version (Dunne lab); a 235-species / 1,804-link nearshore web including the Aleut as a node, built from observations, middens and elder interviews. Data distributed via the Dunne-lab food-web repository lineage.
- **Data access:** ASSUMED (strong) — webs are published and freely downloadable. Not yet downloaded this sweep.
- **Raw size:** 164–235 taxa · **Aggregation plan:** → ~18–22 nodes (guild aggregation; humans kept as a node — that is the story)
- **Data type:** qualitative (typed) · **Provenance:** empirical
- **Scores:** data 3 · story 2 · geography 1 · cost 2 · recognition 1 = **9**
- **Tier:** 2 · **Notes:** Fulfils the §8 lead. The humans-in-the-web angle (6,000 years of Aleut subsistence without apparent extinctions) is genuinely distinctive. Penalized for geography (PWS already pins Alaska) and because the Otago parasite-web Tier 1 (Australia sweep) holds the parasite hook.

### Yellowstone Northern Range (composite) — `yellowstone-composite`
- **Biome / Region:** Temperate montane grassland/forest · N. America (Wyoming, USA) · **Lat/Lng (approx):** 44.9, −110.4
- **Source:** No single published matrix — must be assembled as a **labelled composite** from the wolf–elk–aspen/willow cascade literature (Ripple et al. 2001; Hebblewhite et al. 2005; Ripple & Beschta 2004–2011; Eisenberg et al. synthesis) plus diet studies for grizzly, cougar, coyote, raptors, beaver, cutthroat trout.
- **Data access:** N/A — composite path; per-node diet sourcing required. The synthesis literature is open (OSU repository) but warns the cascade is contested ("trophic trickles" vs top-down).
- **Raw size:** N/A · **Aggregation plan:** → ~18–22 nodes designed around the cascade (wolf, elk, bison, grizzly, beaver, aspen/willow, cutthroat, raptors, scavengers)
- **Data type:** qualitative (composite, labeled) · **Provenance:** composite
- **Scores:** data 1 · story 3 · geography 2 · cost 1 · recognition 3 = **10**
- **Tier:** 2 (high-curation-risk) · **Notes:** Fulfils the §8 Tier-1 lead — with a correction. The audience draw is unmatched, but there is no resolved Yellowstone web: the famous cascade is a chain of contested pairwise studies, not a matrix. Buildable only as a labeled composite (the Weddell Sea precedent), and the contested science must be presented honestly (wolf effects on elk/aspen are real but debated). Do not promote to Tier 1 until a scoping doc lists every node with its diet source.

---

## Appendix — recorded, not planned

### Bridge Brook Lake, Adirondacks NY — `bridge-brook-lake`
- Havens, K. — classic pelagic lake web (25 nodes / 107 links in standard compilations; Dunne et al. 2008 lineage), downloadable via network repositories.
- **Appendix (biome-saturation gate):** freshwater saturated (Little Rock, Tuesday, Tapajós live). Fulfils the §8 lead; lowest aggregation cost of any appendix web. First in line with Lake Victoria and Baiyangdian if a freshwater slot opens.

### California rocky intertidal parasite web — `california-intertidal-parasite-web`
- Zilz, Z.L. et al. (2026). A parasite-inclusive food web for the California rocky intertidal zone. *Scientific Data* — open; 1,809 nodes / 1,845 taxa / 13,222 links (670 parasitic), possibly the most speciose parasite-inclusive web published; Dryad dataset.
- **Appendix (aggregation cost):** superb data but 1,809 nodes is an extreme aggregation problem, and its hooks (parasites, California rocky shore) are already claimed by `otago-harbour-intertidal` and `santa-barbara-kelp-forest`. Recorded as a rich parts-bin for those builds.

### Weeks Bay NERR, Alabama — `weeks-bay`
- LSU MSc thesis — four seasonal Ecopath snapshots, 17 functional groups, open PDF.
- **Appendix (provenance):** thesis-grade source with no peer-reviewed companion found; seasonal-pulse angle is already covered by the stronger Narragansett and Okavango candidates.

### Puget Sound, Washington — `puget-sound`
- Harvey, C.J. et al. EwE (*Estuaries and Coasts*) — bald-eagle/raptor cascade simulations.
- **Appendix (geography):** third N. American Pacific pin after PWS and SBC kelp; recorded for the raptor-cascade modelling detail, which is directly relevant to cascade-simulator design.

---

## Rejected in sweep

- **Wyoming cattle-grazing web (§8 lead)** — query returned 0 results; no distinct published Wyoming grazing web surfaced. The lead appears to have referred to shortgrass-prairie soil/grazing webs — already live (`shortgrass-prairie`, CPER Colorado). Lead closed.
- **Florida Bay** — the Ulanowicz USGS network reports are the most detailed estuarine flow networks ever made, but the system is the same South Florida wetland complex as the live `cypress-wetland` web; a second pin there fails the diversity logic. Recorded as a source for a future seasonal-flux feature, not a candidate.
- **Konza Prairie / other LTER grasslands** — no resolved published matrices surfaced; tallgrass story overlaps the live shortgrass web.
- **Gulf of Mexico (GoMexSI)** — re-confirmed the worked-example rejection: too large for a 25-node story without arbitrary picking; the new NOAA Gulf-wide EwE technical documentation (with full diet matrix, Table 8) is a rich source if a *composite* Gulf web is ever scoped deliberately.
