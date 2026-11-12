# Region: Greenland — terrestrial, marine & freshwater extension sweep
**Researched:** 2026-11 · **Status:** complete (Stage 1 — awaiting verification)

**Repo context at sweep time:** 10 webs live. Biome saturation: marine 3 (saturated), freshwater 3 (saturated), grassland 2, estuary 1, wetland 1; tundra remains empty. Greenland already has two records in other sweeps: `zackenberg-arctic-web` (Tier 1, researched in `researched/tundra-boreal.md`) and `west-greenland-shelf` (Tier 2, researched and verified in the Arctic marine files). This is an **extension sweep**, not a re-run of those candidates. Scope: Greenland's terrestrial, freshwater and adjacent marine systems, including the shared Greenland–Canada North Water Polynya. Excluded: Zackenberg, the West Greenland shelf model, and the western Baffin Bay/Nunavut model already logged as `baffin-bay-coastal`.

**Verdict:** buildable, but only one new Tier 2 candidate (`qassinnguit-glacier-foreland`, high-curation-risk). The two strongest marine datasets are appendix-only under the current marine-saturation gate. No Tier 1 candidate was found.

## Sweep log

All web-search query strings are recorded verbatim below; repository/API probes follow. Searches were run 2026-11-12.

- **Web of Life:** `site:web-of-life.es Greenland "food web"`; `site:web-of-life.es/network/ Greenland trophic food web -pollinator`. The only Greenland network found was `M_PL_045`, Lundgren & Olesen's Uummannaq plant–pollinator network, outside the product surface.
- **GloBI:** `site:globalbioticinteractions.org Greenland "food web"`. API probes: `GET https://api.globalbioticinteractions.org/datasets` → 404; `GET https://api.globalbioticinteractions.org/interaction?sourceDOI=10.1002%2Fece3.70687&type=json.v2` → automated extraction failed, and a direct HTTP retry returned 403. Web results indexed Greenland pollination records and non-Greenland Barents interactions, but no resolved Greenland food web. GloBI coverage is therefore **unconfirmed, not a claim of absence**.
- **Mangal:** `site:mangal.io Greenland "food web"`; `site:mangal.io/api/v2 Greenland "Food web"`; `GET https://mangal.io/api/v2/dataset?count=1000` → 181 dataset records returned. The only explicitly Greenland record was `lundgren_olesen_2005` (Uummannaq pollination); no Greenland food-web dataset was present in the returned catalog.
- **Netzschleuder:** `site:networks.skewed.de Greenland foodweb`; `site:networks.skewed.de "Greenland" network food web` → no results.
- **Ecopath publications / EcoBase:** `"Greenland" "food web" Ecopath East Greenland model`; `Greenland marine ecosystem model Ecopath "East Greenland"`; `"Greenland" site:ecobase.ecopath.org Ecopath`; `"Greenland" "Ecopath" "South Greenland" model food web`; `"North Water Polynya" EcoBase model 20 functional groups`; `"Greenland" "food web" "Ecopath" -West -North -Iceland -Barents -Baffin`; `"Greenland" "food web" "mass balance" ecosystem model -West -North`. Found the existing West Greenland model, the 12-group West Greenland shrimp-grounds model (EcoBase 174), the 20-group North Water model, and the newer Northeast Greenland StrathE2E implementation. EcoBase 174's detail page required JavaScript; its search-registry metadata were used only for the early rejection.
- **figshare / Zenodo / Dryad:** `Greenland "food web" (site:figshare.com OR site:zenodo.org OR site:datadryad.org)`; `"Greenland" "food web" site:figshare.com`; `"Greenland" "food web" site:zenodo.org`; `"Greenland" "food web" site:datadryad.org`; `"Arthropod food webs in the foreland of a retreating Greenland glacier" dataset DOI`; `"Gravesen" "Qassinnguit" dataset food web interactions`; `site:datadryad.org "Arthropod food webs" Greenland glacier`; `"dryad.qfttdz0qt" "food web" files`; `"Greenland" "food web" "Dryad" trophic matrix -qfttdz0qt -n5tb2rc81`; `"dryad.qfttdz0qt" "Qassi" "csv"`; `"dryad.qfttdz0qt" "File Name"`. API probes: Dryad `doi:10.5061/dryad.qfttdz0qt` (two files: one population/environment XLSX and a README); Dryad `doi:10.5061/dryad.n5tb2rc81` (eight files, including `Data1.csv` diet matrices and `Data2.zip` edge lists); Zenodo `GET https://zenodo.org/api/records/21511350` (one stable-isotope CSV). No Greenland food-web matrix was found on figshare.
- **Primary literature:** `Greenland lake "food web" published matrix Arctic char`; `Greenland tundra "food web" Kangerlussuaq Nuuk trophic network`; `Greenland fjord "food web" "Young Sound" Godthåbsfjord trophic`; `"North Water Polynya" Ecopath "diet" matrix functional groups`; `"Epibenthic food web structure across the Northeast Greenland seascape"`; `"Ecosystem age drives food web architecture" Greenland`; `"Arthropod Food Webs in the Foreland of a Retreating" Greenland`; `"Young Sound" "food web" "carbon budget" trophic`; `("East Greenland" OR "Northeast Greenland") "food web" matrix trophic`; `Kangerlussuaq Greenland terrestrial "food web" trophic interactions`; `"The Dense and Highly Connected World of Greenland's Plants"`; `"Epibenthic food web structure across the Northeast Greenland seascape" isotope mixing model diet links`; `"Sea-Ice Retreat From the Northeast Greenland Continental Shelf" model data diet matrix GitHub`; `"Changes in food web dynamics of low Arctic ponds" Greenland data food web matrix`; `"Qassinnguit" "food web" data Gravesen 2024 Dryad`; `"Greenland" "food web" "trophic network" published dataset -pollinator -pollination -Zackenberg`; `"Greenland" "food web" "Kobbefjord" "Qassi"`; `"Greenland" "food web" "supplementary" "matrix" arthropod`; `"Greenland" "trophic interactions" "edge list"`; `"Greenland" "food web" "published" "terrestrial" -Zackenberg -pollination -Qassinnguit`; `"Greenland" "food web" "matrix" "tundra" -Zackenberg`; `"Greenland" "food web" "molecular gut content"`; `"Greenland" "food web" "pond" "matrix" gut content`.
- **Full/partial primary sources read:** Bryndum-Buchholz et al. 2024 (open Arctic Science PDF); Gillie et al. 2024 (PLOS Climate); Gravesen et al. 2024 (PMC11652110); Laverick et al. 2025 (PMC12019585 plus PURE model/code records); López-Rodríguez et al. 2026 (article metadata plus Dryad record/file manifest); Nielsen et al. 2007 (open Young Sound chapter); Nordström et al. 2026 (article metadata plus Zenodo record/file manifest).

---

## Tier 2 — backlog

### Qassinnguit glacier-foreland arthropod web, near Nuuk — `qassinnguit-glacier-foreland`
- **Biome / Region:** Low-Arctic terrestrial glacier foreland / tundra · Kobbefjord area, SW Greenland · **Lat/Lng (approx):** 64.2, −51.3
- **Source:** Gravesen, E.V., Dušátková, L., Athey, K.J., Qin, J. & Krogh, P.H. (2024). Arthropod Food Webs in the Foreland of a Retreating Greenland Glacier: Integrating Molecular Gut Content Analysis With Structural Equation Modelling. *Ecology and Evolution* 14(12): e70687. [DOI 10.1002/ece3.70687](https://doi.org/10.1002/ece3.70687); [open article](https://pmc.ncbi.nlm.nih.gov/articles/PMC11652110/). Data: [Dryad doi:10.5061/dryad.qfttdz0qt](https://doi.org/10.5061/dryad.qfttdz0qt).
- **Data access:** ASSUMED (moderate) — Figure 6 is the empirical gut-content web; Figures 8–9 and Tables A6–A7 give SEM paths, with molecular methods in AM4–AM5. The open Dryad manifest contains `Qassi_arthropod_taxon_population_density_and_environmental_data.xlsx` and a README, **not an explicit edge list**. The food-web matrix has not been obtained; Figure 6 transcription would be required.
- **Raw size:** 130 OTUs / 44 identified species in predator-gut sequencing; the field survey reports 20 spider species plus a carabid, a harvestman, 5 hymenopteran groups, 19 dipteran families, 6 mite families, 3 collembolan families and other prey · **Aggregation plan:** → ~18–22 nodes (retain the three focal predators and beetle life stages; aggregate other spiders, flies, mites and springtails along the source's taxonomic/guild boundaries; use detritus/vegetation only where the published model supplies a trophic path)
- **Data type:** qualitative feeding links, with frequency-of-occurrence and activity-density data; SEM coefficients are correlations, **not diet fractions** · **Provenance:** composite (DNA-observed links plus some literature/expert-supported SEM links)
- **Scores:** data 2 · story 3 · geography 3 · cost 2 · recognition 1 = **11**
- **Tier:** 2 (high-curation-risk) · **Notes:** The only new candidate that passes the current biome-saturation gate. Strong cascade story: warming and prey scarcity intensify intraguild predation, potentially eliminating cold-adapted *Collinsia holmgreni* while lycosid spiders dominate later-succession habitat. Stage 2 must decide whether Figure 6 alone supplies a sufficiently complete feeding web and must not convert SEM correlations into diet edges. Literature/expert-only links and undetectable cannibalism need explicit caveats. Behind Zackenberg for immediate curation, but geographically and ecologically distinct.

---

## Appendix — recorded, not planned under current gates

### North Water Polynya (Pikialasorsuaq / Sarvarjuaq), Greenland–Canada — `north-water-polynya`
- **Biome / Region:** High-Arctic marine polynya · northern Baffin Bay between NW Greenland and Ellesmere Island · **Lat/Lng (approx):** 77.2, −73.0
- **Source:** Bryndum-Buchholz, A., Herbig, J.L., Darnis, G., Geoffroy, M. & Eddy, T.D. (2024). Ecosystem structure and function of the North Water Polynya. *Arctic Science* 10: 545–568. [DOI 10.1139/as-2023-0050](https://doi.org/10.1139/as-2023-0050). Expanded climate-scenario model: Gillie, E.R., Bryndum-Buchholz, A., Willis, S.G. & Eddy, T.D. (2024). Exploring novel North Water Polynya ecosystems under climate change. *PLOS Climate* 3(10): e0000490. [DOI 10.1371/journal.pclm.0000490](https://doi.org/10.1371/journal.pclm.0000490).
- **Data access:** ASSUMED (strong) — the open base paper prints the weighted diet matrix as **Table 2** and documents all parameter sources; the expanded model names **S2 Table** as its diet matrix and EcoBase as a model route. Matrices not yet extracted.
- **Raw size:** 20 functional groups in the base model, including two detritus groups · **Aggregation plan:** usable raw at 20 nodes; the expanded model adds bowhead whale, Greenland halibut and capelin, with killer whale as a scenario group
- **Data type:** weighted (Ecopath diet percentages and flows) · **Provenance:** empirical (documented Ecopath model with local and borrowed parameters and pedigree scores)
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 2 = **14**
- **Tier:** appendix (biome-saturation gate) · **Notes:** Numerically the strongest candidate in the sweep, but marine already has three live webs. Its wasp-waist structure links large copepods and Arctic cod to little auks, ringed seals, narwhals, belugas and polar bears; later scenarios show that smaller copepods or capelin replacing Arctic cod are not equivalent prey, and that killer-whale establishment can cause top-down effects. Distinct from both the West Greenland shelf and western Baffin Bay models. First candidate to reconsider if the marine cap changes.

### Northeast Greenland continental shelf StrathE2E model — `northeast-greenland-shelf`
- **Biome / Region:** High-Arctic marine continental shelf · NE Greenland · **Lat/Lng (approx):** 76.0, −15.0
- **Source:** Laverick, J.H. et al. (2025). Sea-Ice Retreat From the Northeast Greenland Continental Shelf Triggers a Marine Trophic Cascade. *Global Change Biology*. [DOI 10.1111/gcb.70189](https://doi.org/10.1111/gcb.70189); [open article](https://pmc.ncbi.nlm.nih.gov/articles/PMC12019585/). Open [model implementation](https://pureportal.strath.ac.uk/en/datasets/an-implementation-of-strathe2epolar-for-the-northeast-greenland-c) and [parameterisation codebase](https://pureportal.strath.ac.uk/en/datasets/codebase-for-the-strathe2epolar-parameterisation-of-the-northeast); processing code also named as `Jack-H-Laverick/MiMeMo.EastGreenlandShelf`.
- **Data access:** ASSUMED (strong for model files; weak for local diet evidence) — PURE provides implementation files, code and simulated results, and the article provides Data S1. Feeding preferences come from the calibrated Barents Sea implementation; the authors explicitly identify local consumer-diet composition as a data need. Flow/preference matrices not yet extracted.
- **Raw size:** ~20 living guilds plus detrital and physicochemical compartments · **Aggregation plan:** → ~18–22 biological nodes using the source guilds, excluding nutrient-only compartments while retaining detritus/corpses where trophically relevant
- **Data type:** weighted nitrogen flows and feeding preferences · **Provenance:** composite (regional environmental drivers + Barents-calibrated ecological parameters)
- **Scores:** data 1 · story 3 · geography 3 · cost 3 · recognition 2 = **12**
- **Tier:** appendix (biome-saturation gate; also high-curation-risk) · **Notes:** Modelled sea-ice retreat increases total living mass by 25.58% while maritime-mammal mass falls about 66% by the 2050s. These are scenario outputs, not observed changes. The web is attractive and naturally sized, but local diet data are absent and most sensitive parameters tested were borrowed from the Barents model; do not present the projections as an empirical Greenland diet web.

### Glacier-retreat-formed fishless ponds, West Greenland — `greenland-deglaciation-ponds`
- **Biome / Region:** Arctic freshwater ponds · rapidly deglaciating West Greenland coast near Jakobshavn Isbræ · **Lat/Lng (approx):** 69.2, −51.0
- **Source:** López-Rodríguez, A., Jeppesen, E., Davidson, T.A., De Meester, L., González-Bergonzoni, I., Vidal, N., Sommaruga, R., Özkan, K., Arndt, H., Jürgens, K. & Meerhoff, M. (2026). Ecosystem age drives food web architecture of glacier retreat-formed fishless ponds in Greenland. *Oikos* 2026(1): e11415. [DOI 10.1002/oik.11415](https://doi.org/10.1002/oik.11415). Data: [Dryad doi:10.5061/dryad.n5tb2rc81](https://doi.org/10.5061/dryad.n5tb2rc81).
- **Data access:** ASSUMED (strong) — Dryad's methods identify `Data1.csv` as per-pond diet matrices and `Data2.zip` as per-pond consumer→resource edge lists; both filenames are present in the open eight-file manifest. Contents not yet extracted.
- **Raw size:** 16 pond-specific webs (8 young, 8 old); per-web taxon/link counts not yet extracted · **Aggregation plan:** select a naturally 15–25-node old pond if one exists; do not pool ponds merely to reach the node minimum
- **Data type:** weighted relative-abundance gut-content diets / edge lists · **Provenance:** empirical
- **Scores:** data 3 · story 2 · geography 3 · cost 2 · recognition 1 = **11**
- **Tier:** appendix (biome-saturation gate; per-web richness unconfirmed) · **Notes:** Open, unusually direct edge data and a clear ecosystem-assembly story: older ponds have richer, more linked and less connected webs. Freshwater already has three live webs, and it is not yet known whether any individual pond meets the 15-node minimum. Revisit only after the saturation rule changes and per-web sizes are checked.

### Young Sound pelagic carbon-budget web, NE Greenland — `young-sound-pelagic`
- **Biome / Region:** High-Arctic fjord pelagic ecosystem · Young Sound, NE Greenland · **Lat/Lng (approx):** 74.3, −20.3
- **Source:** Nielsen, T.G., Ottosen, L.D. & Hansen, B.W. (2007). Structure and function of the pelagic ecosystem in Young Sound, NE Greenland. In Rysgaard, S. & Glud, R.N. (eds), *Carbon cycling in Arctic marine ecosystems: Case study Young Sound*. *Meddelelser om Grønland, Bioscience* 58. [Open chapter PDF](https://tidsskrift.dk/meddrgroenland_biosci/article/download/142642/186323/311278).
- **Data access:** ASSUMED (strong) — open chapter with measured seasonal carbon budgets and flow charts; flow values not yet extracted.
- **Raw size:** roughly 8–10 pelagic compartments in the presented budget · **Aggregation plan:** below the 15-node minimum without adding fish, birds, mammals or benthos from other sources; no defensible single-source aggregation to a full atlas web
- **Data type:** weighted carbon flows · **Provenance:** empirical (multi-year measurements plus stated budget assumptions)
- **Scores:** data 3 · story 2 · geography 3 · cost 1 · recognition 1 = **10**
- **Tier:** appendix (scope/richness) · **Notes:** Valuable evidence for copepod–protozooplankton coupling and annual heterotrophy, but it is a pelagic microbial/zooplankton budget, not a resolved whole-community web. Keep as a parts-bin source rather than padding it into a composite by default.

---

## Rejected scored candidate

### Northeast Greenland epibenthic isotope dataset — `northeast-greenland-epibenthic`
- **Biome / Region:** Marine epibenthic invertebrate communities · coastal, shelf, shelf-break and upper-slope NE Greenland · **Lat/Lng (approx):** 76.0, −15.0
- **Source:** Nordström, M.C. et al. (2026). Epibenthic food web structure across the Northeast Greenland seascape. *Marine Environmental Research* 221: 108295. [DOI 10.1016/j.marenvres.2026.108295](https://doi.org/10.1016/j.marenvres.2026.108295). Data: [Zenodo doi:10.5281/zenodo.21511350](https://doi.org/10.5281/zenodo.21511350).
- **Data access:** INACCESSIBLE for feeding links — the open deposit contains only `Nordstrom et al. TUNU isotopes.csv`, stable carbon/nitrogen isotope observations for basal resources and consumers. No edge list or diet matrix is named in the deposit or article metadata.
- **Raw size:** resource and consumer isotope records; no resolved node/link matrix · **Aggregation plan:** not possible without inferring feeding links from isotope space, which the research rules prohibit
- **Data type:** stable-isotope observations, not edge data · **Provenance:** empirical
- **Scores:** data 1 · story 2 · geography 3 · cost 1 · recognition 1 = **8**
- **Tier:** rejected (node/edge-data hard-gate fail) · **Notes:** Potentially useful corroboration for a separately sourced benthic model, but not a standalone food-web build. Do not transform trophic-position estimates into invented links.

## Candidate table

| Candidate id | Access | Raw size / curation shape | Scores (data, story, geography, cost, recognition) | Total | Tier / gate outcome |
|---|---|---|---|---:|---|
| `qassinnguit-glacier-foreland` | ASSUMED (moderate) | 130 OTUs; → 18–22 guild/taxon nodes | 2, 3, 3, 2, 1 | 11 | **2 — high-curation-risk** |
| `north-water-polynya` | ASSUMED (strong) | 20 source groups; usable raw | 3, 3, 3, 3, 2 | 14 | appendix — marine saturation |
| `northeast-greenland-shelf` | ASSUMED (model files) | ~20 living guilds; usable with compartment filtering | 1, 3, 3, 3, 2 | 12 | appendix — marine saturation / provenance risk |
| `greenland-deglaciation-ponds` | ASSUMED (strong) | 16 pond webs; individual sizes unopened | 3, 2, 3, 2, 1 | 11 | appendix — freshwater saturation |
| `young-sound-pelagic` | ASSUMED (strong) | ~8–10 pelagic compartments | 3, 2, 3, 1, 1 | 10 | appendix — scope/richness |
| `northeast-greenland-epibenthic` | INACCESSIBLE (edges) | Isotope records only; no link matrix | 1, 2, 3, 1, 1 | 8 | rejected — no edge data |

## Other early rejects

- **West Greenland shrimp grounds (EcoBase 174)** — 12 Ecopath groups, below the 15-node minimum and overlapping the already-verified West Greenland shelf candidate.
- **Uummannaq plant–pollinator network (Web of Life `M_PL_045`; Mangal `lundgren_olesen_2005`)** — mutualistic network outside the product surface, not a food web.
- **Kangerlussuaq low-Arctic pond isotope/DOC studies (including Mariash et al. 2018)** — food-web metrics and resource-use evidence, but no resolved whole-community link matrix located; the newer glacier-retreat pond deposit is the better record.
- **Disko Bay plankton process studies** — grazing and microbial-loop measurements rather than a resolved community web; consistent with the earlier Arctic marine rejection.

## Verification priorities

1. **`qassinnguit-glacier-foreland`:** inspect Figure 6 and appendices at full resolution; establish an auditable link list and decide empirical versus composite provenance. Do not treat SEM paths as diet percentages or assume the Dryad XLSX contains interactions.
2. **If the marine gate changes:** verify `north-water-polynya` first. Base-paper Table 2 is the cleanest matrix and its 20 groups require no arbitrary aggregation; keep the later climate scenarios separate from the 2005–2007 baseline.
3. **If the freshwater gate changes:** open `Data1.csv` and `Data2.zip` and check each pond's actual node count before promoting `greenland-deglaciation-ponds`.
4. **Do not promote on story alone:** `northeast-greenland-shelf` needs a provenance decision about Barents-derived diets, and `northeast-greenland-epibenthic` needs an actual independently published link matrix.
