# Region: Asia (multi-biome sweep)
**Researched:** 2026-10 · **Status:** complete (Stage 1 — awaiting verification)

**Repo context at sweep time:** 9 webs live; Asia has zero pins — the largest unpopulated continent on the map. Biome saturation: freshwater 3 (saturated), marine 2, grassland 2, estuary 1, wetland 1. Scope note: South China Sea coral reefs were covered by the coral-reefs sweep (`xisha-islands`, `danajon-reef`); Sumatran rainforest was covered by the tropical-terrestrial sweep; sub-Arctic systems belong to the Arctic-marine sweep. This sweep covers continental and island Asia: East/Southeast/South Asian shelves and estuaries, Asian lakes, and Asian terrestrial systems.

**Sweep log:**
- **Web of Life / GloBI / Mangal / Netzschleuder**: queries "Web of Life GloBI Mangal Netzschleuder Asia food web dataset" — no Asia-specific whole-web dataset surfaced in any of the four (0 results). Asia is essentially absent from the classic network repositories.
- **Ecopath publications + EcoBase** (ecobase.ecopath.org): queries "Yellow Sea Bohai Sea Ecopath model diet matrix China trophic", "Seto Inland Sea Tokyo Bay Ecopath trophic model Japan", "Kerala coast India Ecopath model trophic southwest coast Mohamed", "Mohamed Zacharia 2009 trophic model Karnataka coast Arabian Sea Ecopath groups", "Persian Gulf Ecopath model trophic Iran diet matrix", "EcoBase Asia Ecopath models Indonesia Philippines South China Sea", "Caspian Sea Ecopath trophic model diet" (no dedicated model surfaced), "Lake Baikal food web trophic model". EcoBase entries confirmed: **Arabian Sea off Karnataka (model 574, Mohamed, 24 groups)**, East China Sea (440), Bohai Sea (609), Beibu Gulf (312/313/439), N & S China Sea (314), South China Sea (Pauly & Christensen), Pearl River Estuary/Delta (448/449), Gulf of Thailand 1963 (56), SW Viet Nam coast (318), Sabah/Sarawak (147), Lingayen Gulf (340/376), Sri Lanka coast (344), Eritrea Red Sea coast (186). The Colléter et al. global EcoBase overview and the Frontiers 2020 meta-analysis of 19 Chinese coastal Ecopath models (Bohai 1982/2016, Jiaozhou Bay 1980/2011/2015, Yangtze estuary 2014, Pearl River 1981/1998, Beibu Gulf 1960/1998…) were used as indexes.
- **figshare / Zenodo / Dryad**: no Asia food-web matrix deposits surfaced.
- **Primary literature** (queries logged verbatim): "Tonlé Sap Cambodia Ecopath trophic model flood pulse fishery" (no Ecopath model found — Bayesian fisheries model only), "Lake Biwa food web matrix Japan published" (0 results), "Tibetan Plateau OR Mongolian steppe food web matrix published trophic" (0 results), "Seto Inland Sea Ecopath" (eutrophication literature only). Open full/partial texts read: Mohamed & Zacharia 2009 *Indian J. Mar. Sci.* (open PDF at CMFRI eprints — full group list, parameters and diet table of the Karnataka model), 2024 MarinTrust-commissioned NE Arabian Sea Ecopath report (open PDF), Zhang et al. 2022 *Front. Mar. Sci.* (N. Yellow Sea reefs, open, diet matrix Table 3), Failler et al. Pearl River EwE preprint (open PDF, Portsmouth), Wang et al. 2022 *Front. Environ. Sci.* (Lake Baiyangdian 5-period webs, open), Tajzadeh-Namin 2020 *JIFRO* (Persian Gulf, open PDF), Yoshii et al. 1999 *L&O* (Baikal isotopes).

---

## Tier 1 — build next

### Arabian Sea off Karnataka (SW coast of India) — `karnataka-arabian-sea`
- **Biome / Region:** Tropical upwelling-influenced shelf · Asia (India, Arabian Sea) · **Lat/Lng (approx):** 13.0, 74.5
- **Source:** Mohamed, K.S., Zacharia, P.U., Muthiah, C., Abdurahiman, K.P. & Nayak, T.H. (2008). Trophic modelling of the Arabian Sea ecosystem off Karnataka and simulation of fishery yields. *CMFRI Bulletin* No. 51, 140 p; Ecopath model with 24 functional groups, full parameter + diet tables. Companion Ecosim: Mohamed, K.S. & Zacharia, P.U. (2009) *Indian Journal of Marine Sciences* 38(1): 69–76 — open PDF at eprints.cmfri.org.in. Registered in EcoBase as model 574. Updated 2024 model: "An Ecopath model of the northeastern Arabian Sea" (MarinTrust fishery-improvement report, open PDF).
- **Data access:** ASSUMED (strong) — CMFRI eprints repository is open; the 2009 paper reproduces the 24-group structure, balanced parameters and diet matrix (Tables 1–3). Matrix not yet transcribed.
- **Raw size:** 24 functional groups (dolphins, sharks, skates/rays, tunas, cephalopods, ribbonfish/catfish, sciaenids, threadfin breams, scads, clupeids incl. oil sardine, anchovies, shrimps, crabs/lobsters, benthos, zooplankton ×2, phytoplankton, detritus) · **Aggregation plan:** → ~18–22 nodes, near-raw (merge the three small-benthic-carnivore tiers, keep oil sardine + anchovies + Acetes distinct)
- **Data type:** weighted (Ecopath diet fractions) · **Provenance:** empirical (model)
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 1 = **13**
- **Tier:** 1 · **Notes:** The atlas's first Indian Ocean continental pin, at nearly raw-usable size. Story: the oil sardine — a wasp-waist small pelagic whose landings rose 17-fold between 2008 and 2024 (ring-seine fishery, fishmeal demand) in a monsoon-upwelling system; Acetes shrimp is a documented keystone group; multi-gear fleet conflicts (trawl vs ring seine) are built into the model family. Low aggregation cost makes this the cheapest Tier-1 build in the sweep.

### Pearl River Estuary / Delta, South China — `pearl-river-estuary`
- **Biome / Region:** Subtropical megacity estuary · Asia (China, PRD/Hong Kong) · **Lat/Lng (approx):** 22.3, 113.8
- **Source:** Failler, P. et al. — An application of the Ecopath with Ecosim model to the Pearl River Delta coastal sea (open preprint PDF, U. Portsmouth research portal); earlier EcoBase models: Duan et al. Pearl River Estuary 1981 (449) and 1998 (448), used in the Frontiers 2020 Chinese-coastal-models meta-analysis. Top predators: Indo-Pacific humpback dolphin (*Sousa chinensis*, TL 4.21) and sharks (TL 4.19).
- **Data access:** ASSUMED — open preprint contains balanced parameter table (Table 1) incl. trophic levels; full diet matrix location to confirm at Stage 2 (preprint vs EcoBase 448/449 download).
- **Raw size:** ~24 groups (Chinese white dolphin, sharks, bandfish, croakers, shrimps…) · **Aggregation plan:** → ~18–22 nodes, near-raw
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 2 · story 3 · geography 3 · cost 2 · recognition 3 = **13**
- **Tier:** 1 · **Notes:** The pink-dolphin web: the world's most urbanized estuary (Hong Kong–Shenzhen–Guangzhou, ~70 M people) with an iconic, collapsing apex predator — Chinese white dolphins are functionally disappearing from the PRD as the food web below them is fished down. Estuary biome has only Chesapeake live → no saturation conflict. Two time periods (1981 vs 1998) give a before/after-development contrast. Stage 2 must pin down the diet matrix location.

---

## Tier 2 — backlog

### East China Sea shelf — `east-china-sea`
- **Biome / Region:** Temperate continental shelf · Asia (China/Japan/Korea) · **Lat/Lng (approx):** 29.0, 124.5
- **Source:** Cheng, J. et al. (2009). Mass-balance ecosystem model of the East China Sea. *Acta Oceanologica Sinica* — Ecopath model based on 2000 fishery surveys (anchovy *Engraulis japonicus*, small fishes, benthic crustaceans as key groups; TLs 2.86–4.37); EcoBase model 440; sibling models in the Frontiers 2020 meta-analysis (ECS 1998 and ECS Shelf 2000).
- **Data access:** ASSUMED — paper paywalled (China Ocean Press); group structure and trophic levels visible in abstract/indexes, diet matrix location unconfirmed.
- **Raw size:** ~28 groups · **Aggregation plan:** → ~20–24 nodes
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 2 = **11**
- **Tier:** 2 · **Notes:** One of the world's most heavily fished shelves; "the fishery is the largest consumer in the ecosystem" is the paper's own headline finding. Held back by paywall access and overlap with the stronger estuarine/Arabian-Sea Tier 1s. Jiaozhou Bay (three-period series 1980/2011/2015) is an in-region fallback if a time-series angle is preferred.

### Gulf of Thailand (pre-trawl baseline) — `gulf-of-thailand`
- **Biome / Region:** Tropical shelf gulf · Asia (Thailand) · **Lat/Lng (approx):** 10.0, 101.5
- **Source:** Christensen, V. (1998). Gulf of Thailand 1963 Ecopath model (EcoBase 56) — one of the earliest South-East Asian shelf models, parameterising the gulf *before* the trawl-fishery expansion; complements the South China Sea models of Pauly & Christensen (1993).
- **Data access:** ASSUMED — model is registered in EcoBase; original parameter source is an FAO/ICLARM-era report; diet matrix obtainability to confirm at Stage 2.
- **Raw size:** not yet confirmed · **Aggregation plan:** → ~20 nodes
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 1 = **10**
- **Tier:** 2 · **Notes:** The "what the sea looked like before industrial trawling" story — 1963 baseline makes it a natural before/after exhibit. Data pedigree is old and access unconfirmed, hence Tier 2.

### North coast of Central Java Sea, Indonesia — `java-sea`
- **Biome / Region:** Tropical muddy shelf · Asia (Indonesia) · **Lat/Lng (approx):** −6.0, 110.5
- **Source:** Buchary, E.A. (1999). Marine fisheries resources of the north coast of Central Java — Ecopath model published as a WorldFish Center report (open PDF at digitalarchive.worldfishcenter.org); parameterisation draws on Snellius-II expedition data and neighbouring models (Gulf of Thailand, South China Sea, Brunei, Bolinao).
- **Data access:** ASSUMED (strong) — WorldFish digital archive is open; report contains model tables. Matrix not yet transcribed.
- **Raw size:** not yet confirmed · **Aggregation plan:** → ~20 nodes
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 1 = **10**
- **Tier:** 2 · **Notes:** Fills maritime Southeast Asia (a blank even after the coral-reefs sweep, which only covered Philippine reefs). Densely fished tropical mud-shelf; story is heavy exploitation of a multi-species artisanal fishery. Some parameters are borrowed from neighbouring models — a provenance caveat for Stage 2.

### Northern Persian Gulf (Iranian waters) — `persian-gulf`
- **Biome / Region:** Subtropical semi-enclosed gulf · Asia (Iran) · **Lat/Lng (approx):** 27.5, 52.5
- **Source:** Tajzadeh-Namin, M. et al. (2020). Trophic dynamics analysis and ecosystem structure (northern Persian Gulf). *Iranian Journal of Fisheries Sciences* — open PDF at jifro.ir; Ecopath model with diet matrix (Table 3), pedigree index 0.78 (high).
- **Data access:** ASSUMED (strong) — open-access journal; diet matrix published in the article. Matrix not yet transcribed.
- **Raw size:** not yet confirmed · **Aggregation plan:** → ~18–22 nodes
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 1 = **10**
- **Tier:** 2 · **Notes:** The only open-diet-matrix model surfaced for the Persian/Arabian Gulf — an extreme-environment sea (hypersaline, 35 °C summers) with pearling history and oil-industry pressure. Story is thinner than the Tier 1s; solid Tier 2.

---

## Appendix — recorded, not planned

### Lake Baiyangdian, North China Plain — `lake-baiyangdian`
- Wang et al. (2022). Temporal changes of the food web structure and function driven by changes in hydrological regimes and water quality in a large shallow lake. *Frontiers in Environmental Science* — open; quantitative food webs at five time points (1958, 1980, 1993, 2009, 2019) with weighted metrics.
- **Appendix (biome-saturation gate):** freshwater saturated (3 live). Otherwise remarkable — a 60-year, five-snapshot quantitative web series tracking hydrological engineering. First in line behind Lake Victoria if a freshwater slot opens.

### Sea of Oman artificial reef, Oman — `sea-of-oman-reef`
- MDPI *Sustainability* (2023) — Ecopath model of an artificial-reef ecosystem off Oman, fully open, diet matrix in Appendix C.
- **Appendix (scope):** reef-scale artificial-structure model, thin story; open data noted for completeness. Natural-reef sibling models in the region could upgrade this later.

### Sri Lanka coast — `sri-lanka-coast`
- Haputhantri, S.S.K. — coastal Ecopath model (2000 period; EcoBase 344).
- **Appendix (access unclear):** registration exists but no openly published diet matrix located this sweep; overlaps geographically with the stronger Karnataka model across the Palk Strait.

---

## Rejected in sweep

- **Tonlé Sap (Cambodia)** — the flood-pulse story is world-class, but no resolved food-web model surfaced: existing models are Bayesian fisheries networks (Baran et al.) and eco-hydrology assessments, not trophic link matrices. Recorded as a lead; revisit if a Mekong/Tonlé Sap Ecopath appears.
- **Lake Biwa (Japan)** — query returned 0 results; no resolved published matrix found despite the lake's limnological fame. Lead only.
- **Tibetan Plateau / Mongolian steppe (terrestrial)** — 0 resolved webs; pastoral-system and isotope literature only. Consistent with the terrestrial publication bias (ECOSYSTEMS.md §2).
- **Lake Baikal** — Yoshii et al. 1999 isotope web has only 5 pelagic groups; fails minimum richness and freshwater is saturated. Rejected on both counts.
- **Seto Inland Sea / Osaka Bay (Japan)** — no published Ecopath for the Seto Inland Sea; the 2026 Osaka Bay anchovy EwE is single-species-focused and paywalled. Not actionable.
- **Eastern Japan Pacific coast (Booth et al. 2020)** — pre-Fukushima EwE + Ecotracer 137Cs model is genuinely interesting but paywalled with no open parameter source found; recorded as a lead.
- **Caspian Sea** — no dedicated Ecopath model surfaced this sweep. Lead only.
- **N. Yellow Sea artificial/natural reef pair (Zhang et al. 2022, open)** — open diet matrices but very small spatial scale (two reef patches); too local for a map pin. Recorded, not candidated.
