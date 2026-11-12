# Region: Australia & Oceania (multi-biome sweep)
**Researched:** 2026-10 · **Status:** complete (Stage 1 — awaiting verification)

**Repo context at sweep time:** 9 webs live; Australia/Oceania is an empty continent on the map (ECOSYSTEMS.md §9 gap #3 — "southern hemisphere broadly"). Biome saturation: freshwater 3 (saturated), marine 2, grassland 2, estuary 1, wetland 1. Scope note: coral-reef systems of the region (GBR, Ningaloo, PNG, New Caledonia, French Polynesia) were already covered by the global coral-reefs sweep and are cross-referenced, not re-screened; PNG/tropical rainforest likewise falls under the tropical-terrestrial sweep; Tasmanian seamounts fall under the deep-sea sweep. This sweep covers Australia + New Zealand temperate, freshwater, marine and sub-Antarctic systems, plus Macquarie Island.

**Sweep log:**
- **Web of Life** (web-of-life.es): query "Web of Life web-of-life.es Australia food web dataset"; food-web map page (map.php?type=5) confirmed live. Attempted to pull the map/network data endpoint directly — request timed out (limitation recorded for Stage 2, same as desert sweep).
- **Netzschleuder** (networks.skewed.de): query "networks.skewed.de Netzschleuder food web Australia New Zealand"; Food web tag catalog scanned. Found `fresh_webs` — 26 stream webs (New Zealand, Maine, North Carolina), Thompson & Townsend 2003, adjacency matrices downloadable per web. No other AU/NZ food-web entries (catalog otherwise holds Little Rock, Florida cypress wetlands, Messel Shale, etc.).
- **GloBI**: query "GloBI Australia food web dataset New Zealand" → GloBI sources page lists "Food web including metazoan parasites for an intertidal ecosystem in New Zealand" (the Otago Harbour web — see Tier 1). No Australia-specific whole-web dataset surfaced.
- **Mangal**: query "Mangal database Australia New Zealand food web networks" — no AU/NZ-specific dataset surfaced; documented holdings are mostly classic webs (Cape Ann, Huizache–Caimanero, etc.). Direct API query not completed this sweep (limitation recorded).
- **Ecopath publications + EcoBase** (ecobase.ecopath.org): queries "Pinkerton Hauraki Gulf Ecopath model diet matrix New Zealand", "Pinkerton Chatham Rise trophic model food web New Zealand", "Bulman Condie Ecopath southeast Australia continental shelf model", "Shark Bay Western Australia Ecopath ecosystem model" (0 results), "Gulf of Carpentaria Ecopath model CSIRO trophic", "Kerguelen Islands Ecopath food web model Heard Island", "Pinkerton Lundquist Duffy trophic modelling New Zealand rocky reef Ecopath", "Bradford-Grieve 2003 trophic model subantarctic Southern Plateau New Zealand". EcoBase entries confirmed: **East Bass Strait (model 406, Bulman, 59 groups)** and **Subantarctic Plateau New Zealand (model 151, Bradford-Grieve)**.
- **figshare / Zenodo / Dryad**: query "zenodo OR figshare OR dryad Australia food web dataset matrix" — no AU food-web matrix deposits found (IsoFresh is an isotope database, not link matrices).
- **Primary literature** (queries logged verbatim): "Magela Creek Kakadu food web trophic Alligator Rivers", "Magela Creek food web model Alligator Rivers uranium mining trophic", "Macquarie Island food web subantarctic trophic", "Murray River billabong food web stable isotopes Bunn Boon", "New Zealand intertidal food web parasites Otago Harbour Mouritsen matrix", "Douglas 2005 River and wetland food webs in Australia's wet-dry tropics". Open full/partial texts read: NIWA NZAEBR-301 Hauraki Gulf report (open PDF), FRDC 2002-028-DLD East Bass Strait report (open PDF), NWSJEMS TR9 North West Shelf report (open PDF), Eddy et al. 2014 *Ecological Modelling* (Taputeranga MR, open PDF), McCormack et al. 2020 *Front. Mar. Sci.* (open), CSIRO Kimberley EwE page, NIWA marine food webs page, Davis et al. 2014 *Freshwater Science* (Burdekin, open).

---

## Tier 1 — build next

### Hauraki Gulf, New Zealand — `hauraki-gulf`
- **Biome / Region:** Temperate coastal marine · Oceania (New Zealand) · **Lat/Lng (approx):** −36.6, 175.1
- **Source:** Pinkerton, M.H. et al. (2015). Changes to the food-web of the Hauraki Gulf during the period of human occupation: a mass-balance model approach. *New Zealand Aquatic Environment and Biodiversity Report* No. 160, 346 p. Updated in Pinkerton, M.H. et al., *NZAEBR* No. 301 (role of low- and mid-trophic-level fish in the Hauraki Gulf ecosystem) — open PDF at webstatic.niwa.co.nz, with balanced model parameters (Appendix 5) and diet fractions varied/reported in appendices.
- **Data access:** ASSUMED (strong) — NIWA reports are open-access; NZAEBR-301 states detailed diet/biomass/energetics for every trophic group are given in appendices, following Pinkerton et al. (2015). Diet matrix table itself not yet transcribed.
- **Raw size:** 48–49 trophic groups, from bacteria/phytoplankton to whales, incl. 12 single-species fish groups (snapper, jack mackerels, blue mackerel, rig, kahawai…) + seabird (37 spp.) and cetacean (7 spp.) groups · **Aggregation plan:** → ~20–24 nodes (keep single-species fish + birds/cetaceans; merge zooplankton, benthic invertebrate guilds, bacteria/detritus)
- **Data type:** weighted (Ecopath diet fractions) · **Provenance:** empirical
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 2 = **13**
- **Tier:** 1 · **Notes:** The standout NZ candidate. Story: a millennium of human impact in one model family — five Ecopath models (1000 AD, 1500, 1790, 1950, present day) document the gulf's transformation, from seabird/whale-driven nutrient pumping to the snapper fishery era; the small-pelagic-fish bottleneck (jack mackerel, blue mackerel) is a ready-made cascade demo. First NZ web on the map. Marine biome at 2 live → fits.

### Otago Harbour intertidal mudflats, South Island, New Zealand — `otago-harbour-intertidal`
- **Biome / Region:** Intertidal / estuarine soft-sediment · Oceania (New Zealand) · **Lat/Lng (approx):** −45.8, 170.6
- **Source:** Mouritsen, K.N., Poulin, R. et al. (2011). Food web including metazoan parasites for an intertidal ecosystem in New Zealand. *Ecology* 92(10) — Ecological Archives data paper (DOI 10.1890/11-0371.1), cited 63×. Dataset deposited in system-neutral format; also indexed by GloBI. Companion structure paper: Thompson, Mouritsen & Poulin (2005) *J. Anim. Ecol.* 74: 77–85.
- **Data access:** ASSUMED (strong) — Ecological Archives data papers publish the full node/edge tables; GloBI indexes the dataset, so links are obtainable programmatically. Matrix not yet downloaded this sweep.
- **Raw size:** 180 nodes (142 species/assemblages — 3 basal, 123 free-living, 19 infectious agents), 1,924 typed links · **Aggregation plan:** → ~18–22 nodes (free-living guilds by feeding mode + parasite nodes kept distinct; ontogenetic parasite stages pooled per species)
- **Data type:** qualitative (typed links: predation, parasitism, concomitant predation) · **Provenance:** empirical
- **Scores:** data 3 · story 3 · geography 3 · cost 1 · recognition 2 = **12**
- **Tier:** 1 · **Notes:** The most distinctive web in the sweep — one of the very few published webs that includes parasites *as nodes with their own links*. Hook: trematodes castrate the mud snails and drive their hosts into the open to be eaten by birds — remove the parasites and the bird–mollusc link collapses. Estuary/intertidal biome has only Chesapeake live → no saturation conflict. Aggregation is the heavy lift (180 → ≤25); parasite nodes must survive aggregation or the story is lost.

### Kerguelen Plateau (incl. Heard & McDonald Islands, Australian EEZ), Southern Ocean — `kerguelen-plateau`
- **Biome / Region:** Sub-Antarctic marine plateau · Southern Ocean (Australia/France) · **Lat/Lng (approx):** −53.0, 73.5
- **Source:** Subramaniam, R.C. et al. (2020). Exploring ecosystem structure and function of the northern Kerguelen Plateau using a mass-balanced food web model. *Fisheries Research* (extends the earlier French-EEZ Kerguelen model; exact vol./DOI to confirm at Stage 2). Open-access companion: McCormack, S.A. et al. (2020). Time-dynamic food web modeling to explore environmental drivers of ecosystem change on the Kerguelen Plateau. *Frontiers in Marine Science* 7:641 — balanced model (28 functional groups) with parameters in Tables A1/A2.
- **Data access:** ASSUMED (strong) — Frontiers companion is fully open with group list + balanced parameters; base-model diet matrix stated as following the published model structure. Diet matrix not yet transcribed.
- **Raw size:** 28 functional groups (bacteria/microzooplankton up to killer whales, sperm whales, seals, penguins, albatross; toothfish and mackerel icefish as distinct groups) · **Aggregation plan:** → ~20–24 nodes (merge mesopelagic fish, squid, and benthic invertebrate guilds)
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 1 = **13**
- **Tier:** 1 · **Notes:** Weddell Sea gives us the krill story; Kerguelen gives the *other* Southern Ocean — a northward krill→copepod transition powering toothfish and icefish fisheries, with killer whales, myctophids and cephalopods as the key energy-transfer groups. First web in the southern Indian Ocean sector; Heard & McDonald Islands are Australian territory, so it also plants the Australia flag. 28 groups is nearly raw-usable — lowest aggregation cost of the sweep.

### Te Tapuwae o Rongokako marine reserve rocky reef, NE North Island, New Zealand — `te-tapuwae-reef`
- **Biome / Region:** Temperate rocky reef · Oceania (New Zealand) · **Lat/Lng (approx):** −38.7, 178.1
- **Source:** Pinkerton, M.H., Lundquist, C.J., Duffy, C.A.J., Freeman, D.J. (2008). Trophic modelling of a New Zealand rocky reef ecosystem using simultaneous adjustment of diet, biomass and energetic parameters. *Journal of Experimental Marine Biology and Ecology* 367: 189–203 (22 trophic groups; diet/biomass/energetic parameters compiled in the Lundquist & Pinkerton 2008 report). Re-used and extended by Eddy, T.D. et al. (2014). Lobsters as keystone: only in unfished ecosystems? *Ecological Modelling* 275: 48–72 (open PDF), which re-parameterises the same 22 groups (+paua, +kina) for Wellington's Taputeranga MR.
- **Data access:** ASSUMED — JEMBE paper + companion report contain the parameter tables; Eddy et al. 2014 openly republishes the 22-group structure with diets (Tables 1–3, Appendices B–C). Tables not yet transcribed.
- **Raw size:** 22 trophic groups (24 in the Eddy et al. variant) · **Aggregation plan:** → ~18–22 nodes, near-raw
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 2 = **14**
- **Tier:** 1 · **Notes:** Highest-scoring candidate in the sweep. The kina-barrens story is the classic NZ cascade: fish out the lobsters and big snapper → sea urchins (kina) explode → kelp forests become urchin barrens; marine-reserve protection reverses it. Eddy et al. explicitly test "lobsters as keystone: only in unfished ecosystems" — a cascade-simulation showpiece. Caveat for Stage 2: choose one parameterisation (Te Tapuwae original vs Taputeranga variant) and cite accordingly; the two are sibling models of the same 22-group structure.

---

## Tier 2 — backlog

### East Bass Strait / South East Fishery shelf-slope, SE Australia — `east-bass-strait`
- **Biome / Region:** Temperate continental shelf + slope · Australia · **Lat/Lng (approx):** −39.0, 148.5
- **Source:** Bulman, C., Condie, S., Furlani, D., Cahill, M., Klaer, N., Goldsworthy, S., Knuckey, I. (2006). Trophic dynamics of the eastern shelf and slope of the South East Fishery: impacts of and on the fishery. FRDC Final Report 2002-028 (open PDF at frdc.com.au; diet matrix = report Table 2, functional groups split by adult size × depth). Registered in EcoBase as model 406 (59 Ecopath groups, 11 fleets).
- **Data access:** ASSUMED — full report PDF is open and contains the diet matrix, but the PDF text extraction is messy (OCR quality observed in search snippets); matrix transcription may need manual cleanup or EcoBase export.
- **Raw size:** 59 Ecopath groups · **Aggregation plan:** → ~20–25 nodes (collapse size×depth fish strata, merge zooplankton and benthic guilds)
- **Data type:** weighted (Ecopath diet fractions) · **Provenance:** empirical (model)
- **Scores:** data 3 · story 2 · geography 3 · cost 1 · recognition 2 = **11**
- **Tier:** 2 · **Notes:** The best first *mainland-Australia* web. Story: trawl fishery vs recovering Australian fur seals, with mesopelagic advection fuelling the slope food chain. Held back from Tier 1 by the extraction-risk flag and by marine-biome crowding within this sweep (Hauraki/Kerguelen/Te Tapuwae score higher). Build after one of the Tier 1 marine webs ships.

### North West Shelf, Western Australia — `north-west-shelf`
- **Biome / Region:** Tropical continental shelf · Australia · **Lat/Lng (approx):** −20.5, 115.5
- **Source:** Bulman, C. (2006). North West Shelf ecosystem model — NWSJEMS Technical Report (open PDF at cmar.csiro.au; balanced Ecopath parameters in Table 7.2.1; represents the late-1980s shelf).
- **Data access:** ASSUMED — open CSIRO report with balanced parameter table; diet matrix presumed in report (not yet sighted this sweep).
- **Raw size:** not yet confirmed (model covers full shelf system) · **Aggregation plan:** → ~20 nodes (tropical shelf guilds; snappers/emperors, prawns, sharks)
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 1 = **10**
- **Tier:** 2 · **Notes:** Tropical shelf counterpart to East Bass Strait; would show Australia's north (trawl-history story: foreign→domestic fishery transition). Sighting the diet matrix is the Stage 2 gate. Related CSIRO Kimberley EwE work exists but is management-oriented.

### Chatham Rise, New Zealand — `chatham-rise`
- **Biome / Region:** Oceanic subtropical-convergence shelf/slope · Oceania (New Zealand) · **Lat/Lng (approx):** −43.5, 178.5
- **Source:** Pinkerton, M.H. et al. — preliminary trophic model of the Chatham Rise (NIWA; 49 trophic groups per NIWA programme page; PDF linked from niwa.co.nz marine food webs page). Diet baseline: Livingston & Pinkerton (2004) Final Research Report ENV2002-07 (open PDF via fish.govt.nz) — stomach-content programme for the top 30 middle-depth fish species (hoki, hake, ling…).
- **Data access:** ASSUMED — NIWA describes the model as *preliminary*; underlying diet database reports are open. Model publication status is the Stage 2 gate (a fully peer-reviewed Chatham Rise model may exist; not confirmed this sweep).
- **Raw size:** ~49 trophic groups (if mirroring Hauraki structure) · **Aggregation plan:** → ~22 nodes
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 1 = **10**
- **Tier:** 2 · **Notes:** The hoki story — NZ's biggest fishery sitting on the Subtropical Front, sustained by salps and myctophids. Demoted to Tier 2 because the model is explicitly "preliminary"; verify publication status before promoting.

### Southern Plateau (sub-Antarctic New Zealand waters) — `southern-plateau-nz`
- **Biome / Region:** Sub-Antarctic oceanic plateau · Oceania (New Zealand) · **Lat/Lng (approx):** −50.5, 170.0
- **Source:** Bradford-Grieve, J.M. et al. (2003). Pilot trophic model for subantarctic water over the Southern Plateau, New Zealand: a low biomass, high transfer efficiency system. Registered in EcoBase as model 151 ("Subantartic Plateau New Zealand").
- **Data access:** ASSUMED — published model + EcoBase registration; journal is *J. Exp. Mar. Biol. Ecol.* (vol/pages to confirm at Stage 2); diet table location unconfirmed.
- **Raw size:** not yet confirmed · **Aggregation plan:** → ~20 nodes
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 2 · story 2 · geography 2 · cost 2 · recognition 1 = **9**
- **Tier:** 2 · **Notes:** A "pilot" model, older and lower-resolution than Kerguelen; its niche (sub-Antarctic oceanic) overlaps `kerguelen-plateau`. Keep as fallback if Kerguelen verification fails.

---

## Appendix — recorded, not planned

### New Zealand stream webs (South Island) — `nz-stream-webs`
- Thompson, R.M. & Townsend, C.R. (2003). Impacts on stream food webs of native and exotic forest: an intercontinental comparison. *Ecology* 84: 145–161. 26 stream webs (NZ South Island incl. Akatore, Berwick, Catlins, Dempsters, Kyeburn; plus Maine and North Carolina), adjacency matrices downloadable from Netzschleuder (`fresh_webs` collection, originally NCEAS Interaction Web DB — now defunct; Netzschleuder is the live mirror).
- **Appendix (biome-saturation gate):** freshwater is saturated (3 webs live: Little Rock, Tuesday, Tapajós). Otherwise excellent: moderate raw sizes (49–110 nodes/web), free download, exotic-forest land-use story. Fulfils the §8 Tier-2 shortlist lead "New Zealand stream webs". Revisit if a freshwater slot frees up or if the saturation rule is relaxed — a single NZ stream (e.g. Dempsters, seasonal set Au/Sp/Su) aggregates cleanly to ~20 nodes.

### Burdekin River dry-tropics rivers, Queensland — `burdekin-dry-tropics-rivers`
- Davis, A.M., Pusey, B.J., Pearson, R.G. et al. (2014). Omnivory and opportunism characterize food webs in a large dry-tropics river system. *Freshwater Science* 33 (open at UChicago Press) — 12 sites, gut-content + SIAR mixing models, food webs constructed per site.
- **Appendix (biome-saturation gate):** freshwater saturated; also isotope-inferred diets rather than observed link matrix. Noted for the "omnivory as adaptation to hydrological variability" angle.

### Magela Creek / Alligator Rivers wet-dry tropics, Northern Territory — `magela-creek`
- Douglas, M.M., Bunn, S.E. & Davies, P.M. (2005). River and wetland food webs in Australia's wet-dry tropics: general principles and implications for management. *Marine and Freshwater Research* 56: 329–342 (cited 281×; open PDF at Griffith research repository). Synthesises Magela Creek and other wet-dry tropical food webs.
- **Appendix (biome-saturation gate):** freshwater saturated; the 2005 paper is a synthesis — a usable web would be a labelled composite. The flood-pulse story (one tonne of wet-weight fish production per day in Magela Creek at peak) is strong if ever built.

### Murray–Darling billabongs, SE Australia — `murray-billabongs`
- Bunn, S.E. & Boon, P.I. (1993). What sources of organic carbon drive food webs in billabongs? *Oecologia* 96: 85–94 (cited 328×) + the ongoing Flow-MER Basin food-web programme (Murray cod, decapods, mesozooplankton as key energy-transfer groups).
- **Appendix (biome-saturation gate):** freshwater saturated; isotope carbon-source study, not a resolved link matrix.

---

## Rejected in sweep

- **Macquarie Island terrestrial web** — stable-isotope food-web work in progress (2024 MICF-funded project, Shaw/Fern, QUT; preliminary results only, no published matrix). Too early; revisit in ~2 years. Would otherwise be a superb sub-Antarctic land web.
- **Shark Bay, WA** — query "Shark Bay Western Australia Ecopath ecosystem model" returned 0 results; rich isotope/seagrass literature (tiger sharks, dugongs) but no resolved food-web matrix or Ecopath model found. Not actionable this sweep.
- **Australian terrestrial (eucalypt forest, rainforest, alpine)** — no resolved published webs found; consistent with the known tropical/terrestrial publication bias (ECOSYSTEMS.md §2). A Bogong-moth alpine composite could be scoped deliberately later.
- **Tasmanian seamounts (Bulman 2002)** — cross-referenced to the deep-sea sweep (biome already swept globally); not duplicated here.
- **GBR (Gribble 2001), Ningaloo, New Caledonia, French Polynesia, PNG reefs/forests** — covered by the coral-reefs and tropical-terrestrial sweeps; cross-referenced, not re-screened.
- **Gulf of Carpentaria / Torres Strait / Albatross Bay CSIRO models** — mentioned as "in development" in the 2006 FRDC report; later river-extraction ecosystem modelling (2022 CSIRO/FRDC Mitchell–Gilbert–Flinders study) exists but a published diet matrix was not located. Recorded as a lead, not a candidate.
