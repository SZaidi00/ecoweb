# Region: Scotland — multi-biome extension sweep
**Researched:** 2026-11-22 · **Status:** complete (Stage 1 — awaiting verification)

**Scope:** Scotland's terrestrial, freshwater, estuarine/coastal and shelf ecosystems. This is an extension of the earlier Europe sweep, not a re-run of its verified candidates. `ythan-estuary` (Tier 1) and `loch-leven` (appendix) already have Stage 2 records in `verified/europe.md`; neither is duplicated or modified here. The Irish Sea and Celtic Sea ledger candidates extend beyond Scotland and are also left with the Europe sweep.

**Repo context at sweep time:** 15 live webs in `data/webs/index.json`: marine 6 (saturated), freshwater 3 (saturated), grassland 3 (saturated), estuary 2, wetland 1, desert 1. No European web is live. Consequently, new marine candidates fail the biome-saturation hard gate even when their data and scores are strong; estuary and wetland/coastal-lagoon candidates remain eligible.

## Candidate table

| Candidate id | Ecosystem | Biome | Raw size | Data access | Score | Tier / gate |
|---|---|---|---:|---|---:|---|
| `eden-estuary` | Eden Estuary, Fife | Estuary | 41 taxa | ASSUMED; matrix described, full matrix not located | 12 | **1** |
| `culbin-sands-lagoon` | Culbin Sands lagoon, Moray Firth | Coastal lagoon / wetland | 53 macroinfaunal species + predators and birds | ASSUMED; diet tables located, single complete matrix not confirmed | 11 | **2 (high-curation-risk)** |
| `east-scotland-shelf` | East Coast of Scotland shelf, 1890s/1990s | Marine shelf | 25 functional groups | ASSUMED; Supplementary Table S3 | 14 | Appendix — marine saturation |
| `west-scotland-shelf` | West of Scotland shelf | Marine shelf | 41 functional groups | ASSUMED; Supplementary Table S2 / model lineage | 13 | Appendix — marine saturation |
| `moray-firth` | Moray Firth | Marine coastal shelf | 31 functional groups | ASSUMED; open article, matrix not extracted | 13 | Appendix — marine saturation |

## Sweep log

Queries are recorded verbatim. A zero-hit search is a sweep result, not evidence that no web exists.

### Web of Life
- Web query: `site:web-of-life.es Scotland food web` → no results.
- Web query: `Web of Life database Scotland Ythan Loch Leven food web` → general Ythan/Loch Leven literature, no new database entry.
- Catalog/API: `https://www.web-of-life.es/api/v1/networks.csv` → 330 network rows filtered locally for `Scotland`, `Ythan`, `Loch Leven`, `Culbin`, `Eden Estuary`, and `Moray Firth`. One Scotland hit: Hadfield et al. host–parasite network `A_HP_035`; no food-web hit.
- Food-web interface opened: `https://www.web-of-life.es/map/?type=food-webs`.

### GloBI
- Web query: `site:globalbioticinteractions.org Scotland food web` → individual fish-diet records, not a resolved Scottish community web.
- Web queries: `GloBI "Culbin Sands"`; `GloBI "Loch Leven" food web`; `site:globalbioticinteractions.org "Ythan Estuary"`; `site:globalbioticinteractions.org "Eden Estuary"`; `site:globalbioticinteractions.org "Moray Firth"`; `site:globalbioticinteractions.org "Culbin"`; `site:globalbioticinteractions.org "Loch Leven"` → no new resolved web located.
- API documentation query: `GloBI API query references sources endpoint`; implementation query: `"get_interactions_in_area" "api.globalbioticinteractions.org"`.
- Direct API query: `https://api.globalbioticinteractions.org:443/interaction?bbox=-8.8,54.5,-0.5,60.9&includeObservations=f&type=csv&...&limit=1024` → HTTP 403; no result claimed.
- Sources page opened: `https://www.globalbioticinteractions.org/sources`; it confirms aggregation of interaction datasets but did not expose a Scotland-specific food-web entry in the retrieved text.

### Mangal
- Web queries: `site:mangal.io Scotland food web`; `Mangal "Ythan" food web`; `Mangal Scotland trophic network dataset` → documentation/general pages only.
- API documentation query: `Mangal API networks search name documentation`.
- Direct API queries: `https://mangal.io/api/v2/network?q=%25Scotland%25` → one Hadfield host–parasite network; `.../network?q=%25Ythan%25` → `[]`; `.../dataset?q=%25Scotland%25` → `[]`.
- API reference opened: `https://mangal-interactions.github.io/mangal-api/`.

### Netzschleuder
- Web query: `site:networks.skewed.de Scotland food web Ythan Loch Leven` → no results.
- Full catalog opened at `https://networks.skewed.de/` and searched for `Scotland`, `Ythan`, `Loch Leven`, `Culbin`, `Holy Loch`, and `foodweb`. No new Scottish food web found; `scotland_interlocks` is unrelated. This agrees with the Stage 2 Europe note that Netzschleuder has no Ythan entry.

### Ecopath / EcoBase publications
- Web queries: `Scotland Ecopath model diet matrix food web Clyde Moray Firth`; `"Moray Firth" "Ecopath" diet matrix`; `"Ecosystem simulation models of Scotland's West Coast and sea lochs"`; `"Firth of Clyde" "food web" Ecopath`; `"Firth of Forth" "food web" Ecopath`; `"west coast of Scotland" "food web" model`; `"Scotland" "food web" "Ecopath with Ecosim"`; `Alexander Heymans Magill Tomczak Holmes Wilding 2015 west Scotland shelf ecosystem food web model 41 functional groups`; `"Moray Firth" ecosystem model Ecopath authors diet composition`; `"East Coast of Scotland" Ecopath 1890s 1990s diet matrix`; `"West Scotland" "diet matrix" Ecopath Alexander 2015`; `"Ecosystem Simulation Models of Scotland's West Coast and Sea Lochs" pdf diet`; `"Moray Firth" "Ecopath" Boyle 1986`; `"Moray Firth ecosystem model" Ecopath`; `Watson 2020 Eden Estuary food web diet matrix functional groups`; `"Eden Estuary" "Ecopath"`; `"Otogo" 2015 Scotland Ecopath northeastern coast`; `"Moray Firth" Ecopath "functional groups"`; `"West of Scotland" "Supplementary Table S2" diet`; `Alexander 2015 fsu149 supplementary data diet matrix`; `"West Scotland" EcoBase model Alexander 2015 41`; `"Otogo et al." 2015 Moray Firth`; `"Otogo" "The Ecological Role of Loligo forbesii"`; `"Moray Firth" "31 functional groups"`; `"Moray Firth" Ecopath diet composition Table 1`; `site:ecobase.ecopath.org Scotland Moray Firth model`; `site:ecobase.ecopath.org "East Scotland" Ecopath`; `site:ecobase.ecopath.org "Eden"`; `"Scotland" "Ecopath" "functional groups"`.
- EcoBase model 461 (`West Scotland`) opened directly: Morissette/Pitcher 2005 lineage, 37 Ecopath groups, 8 fleets, model period 2000–2004. The newer Alexander et al. 2015 model has 41 groups and is treated as the preferred version, not a second candidate.
- Primary sources located: Alexander et al. 2015 (west Scotland), Saygu et al. 2025 (east Scotland), Otogo et al. 2015 (Moray Firth), Watson et al. 2020 (Eden).

### figshare / Zenodo / Dryad
- Web queries: `Scotland food web site:figshare.com OR site:zenodo.org OR site:datadryad.org`; `Zenodo "Scotland" "food web" trophic`; `Dryad Scotland food web trophic interactions`; `figshare Scotland food web trophic interactions dataset`; `site:zenodo.org "Culbin Sands"`; `site:zenodo.org "Eden Estuary" Ecopath`; `site:figshare.com "West of Scotland" Ecopath`; `site:datadryad.org Scotland "food web"` → no new matrix deposit for the non-marine candidates.
- Zenodo record 1127906 / DOI 10.5281/zenodo.1127906 opened: open article PDF for the Moray Firth model; this is a publication deposit, not a separate model-data deposit.
- StrathE2E queries: `"StrathE2E marine foodweb model" Scotland dataset`; `"StrathE2E marine foodweb model"` → model software/dataset pages found, but its coarse bulk-category marine model adds no candidate that clears the marine-saturation gate.

### Primary literature — terrestrial, freshwater, estuarine and coastal
- Web queries: `Scotland terrestrial food web trophic network published`; `Scotland marine food web trophic network published matrix`; `"Scottish" "soil food web" published`; `"Scotland" "trophic network" ecology`; `"Scottish old field" food web`; `"Scottish old field" "Advances in Ecological Research" 27 133 212`; `"Culbin Sands" food web trophic links matrix`; `"Reconstructing the Holy Loch Food Web"`; `"Trophodynamics in a shallow lagoon off NW Europe" Culbin Sands food web`; `Mendonça Raffaelli Boyle Emes 2007 Culbin Sands 649 660 pdf`; `"Culbin Sands" "trophic" 2009 Food Webs`; `Scotland estuary food web trophic links -Ythan`; `Scotland saltmarsh food web trophic network matrix`; `Scotland freshwater food web matrix -Loch -Ythan`; `Scotland moorland food web trophic interactions network`; `Scotland forest food web species links matrix`; `"Scotland" "food web" "supplementary" trophic matrix`; `"Scottish" "food web" "network" empirical species`; `"Comparing the network structure and resilience" Eden Ythan 2020`; `"Eden Estuary" "food web" Scotland`; `"Trophodynamics in a Shallow Lagoon" pdf 196 214`; `"Culbin Sands" "diet" table 2007`; `"Eden Estuary" "diet composition" Watson`; `"Culbin Sands" "Table 2" "Diet composition"`; `"Culbin Sands" food web number species links`; `"Culbin Sands" "shorebirds" 2007 579 591`; `"Historical ecosystem models can serve as a baseline" Saygu 2025 authors`; `"Comparing the network structure and resilience" 2020 volume pages`.
- Eden primary paper and open accepted manuscript located; Watson's open 2017 PhD thesis also inspected for model details and appendices.
- Culbin Sands 2009 diet/flow paper and companion 2007 fish and shorebird papers located.
- Holy Loch's 2026 preprint was opened and screened: it is a barcode/BIN taxonomic inventory and methods paper, not an interaction web.
- The “Scottish old field” lead is a plant/stable-isotope review with original field data, not a resolved community link matrix.

---

## Tier 1 — build next

### Eden Estuary, Fife, Scotland — `eden-estuary`
- **Biome / Region:** Estuary (benthic pathway) · Europe (Scotland) · **Lat/Lng (approx):** 56.37, −2.85
- **Source:** Watson, S.C.L., Beaumont, N.J., Widdicombe, S. & Paterson, D.M. (2020). Comparing the network structure and resilience of two benthic estuarine systems following the implementation of nutrient mitigation actions. *Estuarine, Coastal and Shelf Science* 244: 106059. DOI: [10.1016/j.ecss.2018.12.016](https://doi.org/10.1016/j.ecss.2018.12.016). Open accepted manuscript: [Bournemouth University repository](https://eprints.bournemouth.ac.uk/31628/1/Watson%20et%20al%202019%20%20(AAM).pdf). Underlying model documentation: Watson, S.C.L. (2017), *The impact of multiple stressors on coastal biodiversity and associated ecosystem services*, PhD thesis, University of St Andrews, [handle 10023/16817](https://research-repository.st-andrews.ac.uk/handle/10023/16817), especially §4.3.6.
- **Data access:** **ASSUMED (verification risk).** The paper states that diet matrices were built for each taxon and summed to unity; the thesis describes the same procedure and cites diet references in Appendix 4A. Neither inspected document appears to print the complete balanced 41×41 diet matrix. Stage 2 must obtain the matrix/EwE file or a full appendix before this remains buildable.
- **Raw size:** 41 taxa / links not counted in the inspected text · **Aggregation plan:** → ~22–25 nodes; retain producers, detritus, demersal fish and dominant benthic taxa, while merging the 18 waterbird species into sourced feeding guilds and pooling only low-biomass invertebrates.
- **Data type:** weighted diet fractions and biomass flows · **Provenance:** empirical (local field measurements plus literature/model synthesis; disclose estimated fish biomass and literature-derived diets).
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 1 = **12**
- **Tier:** 1 · **Notes:** Two mass-balanced snapshots (1999 and 2015) capture nutrient mitigation and bottom-up changes through producers, invertebrates and waterbirds. Estuary is the least saturated eligible biome after this build would reach 3 live webs. Scope caveat: the model deliberately excludes the pelagic pathway and seals; present it as the **benthic estuarine web**, not a complete whole-estuary community. Access is the principal blocker.

## Tier 2 — backlog

### Culbin Sands lagoon, Moray Firth, Scotland — `culbin-sands-lagoon`
- **Biome / Region:** Coastal lagoon / intertidal wetland · Europe (Scotland) · **Lat/Lng (approx):** 57.63, −3.72
- **Source:** Mendonça, V.M., Raffaelli, D.G., Boyle, P.R. & Emes, C. (2009). Trophodynamics in a shallow lagoon off northwestern Europe (Culbin Sands, Moray Firth): spatial and temporal variability of epibenthic communities, their diets, and consumption efficiency. *Zoological Studies* 48(2): 196–214. [University of York record and abstract](https://pure.york.ac.uk/portal/en/publications/trophodynamics-in-a-shallow-lagoon-off-northwestern-europe-culbin/). Companion web components: Mendonça et al. (2007), *Scientia Marina* 71(4): 649–660, DOI [10.3989/scimar.2007.71n4649](https://doi.org/10.3989/scimar.2007.71n4649); Mendonça, Raffaelli & Boyle (2007), *Scientia Marina* 71(3): 579–591, DOI [10.3989/scimar.2007.71n3579](https://doi.org/10.3989/scimar.2007.71n3579).
- **Data access:** **ASSUMED.** The 2009 paper's Table 2 is identified as diet composition of epibenthic species from 1994–1996 stomach contents; companion papers report fish and shorebird flows. No single complete adjacency matrix was confirmed, so Stage 2 must determine whether the tables can be combined without inventing links.
- **Raw size:** 53 macroinfaunal species reported outside mussel beds, plus at least 10 named epibenthic predators and shorebirds / links not counted · **Aggregation plan:** → ~18–22 nodes using the study's measured prey groups (polychaetes, oligochaetes, amphipods, bivalves, meiofauna/zooplankton, chironomid larvae), keeping brown shrimp, shore crab, common goby and plaice distinct.
- **Data type:** mixed (diet composition/relative importance plus energy flows) · **Provenance:** empirical if restricted to the same 1994–1996 field programme; do not import outside diet literature to fill gaps without changing to composite.
- **Scores:** data 3 · story 2 · geography 3 · cost 2 · recognition 1 = **11**
- **Tier:** 2 (high-curation-risk) · **Notes:** A cold-temperate lagoon with seasonal pulses of shrimp, gobies, plaice and migratory shorebirds. More distinctive than another open-shelf fisheries web, but it is an **epibenthic/benthic subweb**, not a demonstrated whole-ecosystem matrix. Producer links and a consistent edge-weight definition are the main curation risks.

## Appendix — recorded, not planned under current biome caps

### East Coast of Scotland shelf, 1890s and 1990s — `east-scotland-shelf`
- **Biome / Region:** Marine shelf · Europe (Scotland; ICES IVa/IVb, including Orkney and Shetland fishing grounds) · **Lat/Lng (approx):** 58.0, −1.0
- **Source:** Saygu, İ., Thurstan, R.H., Roberts, C., Heard, Z., Akoglu, E. & Halloran, P.R. (2025). Historical ecosystem models can serve as a baseline for indicator-based assessment: the North Sea. *Frontiers in Marine Science* 12: 1646031. DOI: [10.3389/fmars.2025.1646031](https://doi.org/10.3389/fmars.2025.1646031).
- **Data access:** **ASSUMED (strong).** Open article identifies Supplementary Table S3 as the diet matrix and Table 1/Supplementary Table S2 as group definitions; matrix not extracted in Stage 1.
- **Raw size:** 25 functional groups / links not counted · **Aggregation plan:** → 25 nodes; usable at source resolution without aggregation.
- **Data type:** weighted · **Provenance:** empirical model synthesis (same topology and diet matrix for both periods; historical parameters partly guided by the 1990s model).
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 2 = **14**
- **Tier:** appendix (**hard-gate fail: marine saturation**) · **Notes:** Highest raw score in the sweep. The century-scale shift from cetacean/cod influence toward large pelagics, saithe, monkfish and seals is an excellent cascade story. Revisit first among the marine appendix candidates if the marine cap lifts.

### West of Scotland continental shelf — `west-scotland-shelf`
- **Biome / Region:** Marine shelf · Europe (Scotland; ICES VIa above 200 m) · **Lat/Lng (approx):** 57.0, −6.5
- **Source:** Alexander, K.A., Heymans, J.J., Magill, S., Tomczak, M.T., Holmes, S.J. & Wilding, T.A. (2015). Investigating the recent decline in gadoid stocks in the west of Scotland shelf ecosystem using a foodweb model. *ICES Journal of Marine Science* 72(2): 436–449. DOI: [10.1093/icesjms/fsu149](https://doi.org/10.1093/icesjms/fsu149). [Open mirror](https://www.vliz.be/imisdocs/publications/ocrd/324384.pdf). Earlier lineage: Morissette & Pitcher (2005), EcoBase model 461, 37 groups; do not treat it as a separate web.
- **Data access:** **ASSUMED.** The paper identifies Supplementary Table S2 for the constructed/updated diet matrix; supplement not extracted. EcoBase model 461 metadata page is accessible, but its 37-group model predates the preferred 41-group version.
- **Raw size:** 41 functional groups / links not counted · **Aggregation plan:** → ~22–25 nodes; merge life-stage duplicates only with a documented life-stage-group rule, pool minor fish guilds, retain seals, gadoids, Nephrops and sandeels.
- **Data type:** weighted · **Provenance:** empirical model synthesis (many parameters borrowed from North Sea/Irish Sea models; disclose this limitation).
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 2 = **13**
- **Tier:** appendix (**hard-gate fail: marine saturation**) · **Notes:** Strong removal/scenario hooks: grey-seal predation, Nephrops bycatch and fishing-driven gadoid decline. Behind the east-coast model because aggregation is heavier and the authors explicitly flag sparse local diet data.

### Moray Firth, northeast Scotland — `moray-firth`
- **Biome / Region:** Marine coastal shelf · Europe (Scotland) · **Lat/Lng (approx):** 57.75, −3.30
- **Source:** Otogo, G.A., Wangvoralak, S., Pierce, G.J., Hastie, L.C. & Scott, B. (2015). The ecological role of *Loligo forbesii* in the Moray Firth ecosystem, northeast Scotland. *International Journal of Marine and Environmental Sciences* 9(7): 860–869. DOI/open deposit: [10.5281/zenodo.1127906](https://doi.org/10.5281/zenodo.1127906).
- **Data access:** **ASSUMED.** Open article PDF exists and contains a “Basic Parameters and Diet Composition” section; full matrix was not extracted or independently verified.
- **Raw size:** 31 functional groups (21 fish, 7 invertebrates, 2 primary producers, 1 detritus) / links not counted · **Aggregation plan:** → ~20–23 nodes; merge minor fish groups while retaining veined squid, marine mammals and principal forage fish.
- **Data type:** weighted · **Provenance:** empirical model synthesis adapted from North Sea models and Scottish diet studies.
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 2 = **13**
- **Tier:** appendix (**hard-gate fail: marine saturation**) · **Notes:** Veined squid is a clear charismatic hub—both predator and prey across several trophic levels. Verification should check editorial/provenance quality and how much of the topology is locally observed versus inherited from the North Sea model.

## Rejected in sweep

- **Holy Loch Food Web Project** — Hammatt & UK BIOSCAN Collective (2026 preprint), DOI 10.32942/X2J378. A chironomoid barcode/BIN inventory and taxonomic methods paper; no trophic edge matrix, and not yet peer-reviewed.
- **Hadfield et al. Scotland small-mammal/flea network** — Web of Life `A_HP_035` and Mangal network 1047. Host–parasite only, outside the current product surface.
- **“Scottish old field” stable-isotope lead** — Handley & Scrimgeour (1997), *Advances in Ecological Research* 27: 133–212. Plant ecology/nitrogen-isotope interpretation, not a resolved food-web link matrix.
- **Firth of Clyde as a standalone candidate** — search hits use the Clyde within west-of-Scotland EwE/Ecospace models or a later MSP adaptation. No independent published Clyde diet matrix located; do not duplicate `west-scotland-shelf`.

## Stage 2 priorities

1. **Eden:** obtain the actual 1999/2015 balanced diet matrices or EwE files. Confirm the 41-node list, edge orientation, whether diet values differ between periods, and which values were locally measured versus literature/model derived. If the matrix cannot be obtained, mark inaccessible rather than reconstructing it.
2. **Culbin Sands:** obtain the 2009 Table 2 and companion tables; decide whether one coherent empirical benthic web exists and whether basal links are measured. Do not combine unrelated literature diets to make the web look complete.
3. **Marine appendix:** no verification is needed while the saturation gate remains. If it lifts, verify `east-scotland-shelf` first, then `west-scotland-shelf` and `moray-firth`.
