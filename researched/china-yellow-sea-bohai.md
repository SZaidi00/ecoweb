# Region: China — Yellow Sea & Bohai Sea
**Researched:** 2026-11-22 · **Status:** complete (Stage 1 — awaiting verification)

**Scope:** Chinese waters of the Yellow Sea and Bohai Sea, from the Liaohe Estuary/Liaodong Bay south to Haizhou Bay. Includes the Bohai basin, Laizhou Bay, Jiaozhou Bay, the Yellow River Estuary, and the southern Yellow Sea. Excludes Korean waters, the East China Sea (including Lvsi Fishing Ground), the Yangtze system, the South China Sea, and coral reefs. This is the first approved sub-region of the China split; one sweep = this sub-region only. It extends, rather than re-runs, the earlier Asia-wide research.

**Repo context at sweep time:** 16 webs live; no implemented Asia pin. Biome saturation is decisive here: marine has 6 live webs (saturated), estuary 2, wetland 1. Therefore marine-bay and shelf models are appendix even when their data are strong; the Yellow River Estuary remains eligible. Freshwater and terrestrial systems were not swept because they belong to other approved China sub-regions.

**Access terminology:** `ASSUMED` means a citable model and a plausible matrix location were found, but the matrix was not independently obtained/transcribed in Stage 1. `INACCESSIBLE` means the matrix could not be obtained in this sweep. Neither label is Stage-2 verification.

## Sweep log

All search strings below are verbatim. Searches returned no buildable whole-web deposit unless noted in the candidates/rejections.

- **Web of Life:** `site:web-of-life.es "Yellow Sea" OR "Bohai Sea" food web` → no results.
- **GloBI:** `site:globalbioticinteractions.org "Yellow Sea" OR "Bohai Sea" food web` → species-level FishBase-derived records, including Deng, Meng & Ren's *Food web of fishes in the Bohai Sea*; no whole-community matrix deposit.
- **Mangal:** `site:mangal.io "Yellow Sea" OR "Bohai Sea" ecological network` → no results.
- **Netzschleuder:** `site:networks.skewed.de "Yellow Sea" OR "Bohai Sea" food web` → no results.
- **Ecopath / EcoBase / model literature, broad:** `"Bohai Sea" Ecopath model diet matrix`; `"Yellow Sea" Ecopath model diet matrix`; `"Jiaozhou Bay" Ecopath diet composition matrix`; `"Laizhou Bay" Ecopath model diet matrix`; `"Yellow River estuary" Ecopath diet matrix functional groups`; `"Bohai Bay" Ecopath model "diet" functional groups`; `"Sanggou Bay" Ecopath diet composition matrix functional groups`; `"southwestern Yellow Sea" Ecopath 2019 diet matrix functional groups`; `"Bohai Sea" "2016" Ecopath model functional groups`; `"Bohai Sea" Ecopath 609 EcoBase`; `"Yellow Sea" "Ecopath" Lin 2013 functional groups`.
- **Primary literature and exact-source chases:** `"food web of fishes in the Bohai Sea"`; `"Trophic interactions, ecosystem structure and function in the southern Yellow Sea" PDF`; `"Coupling isotopic analysis and Ecopath model" Yellow Sea diet matrix`; `"Comparative study of Jiaozhou Bay ecosystem based on an Ecopath model" PDF`; `"Analysing ecological carrying capacity of bivalve aquaculture" Yellow River Estuary DOI`; `"1572355" "Supplementary Table S2" Laizhou diet`; `"Rahman" "Bohai Sea" 2019 Ecopath 23 functional groups`; `"A mass balanced model of trophic structure" Jiaozhou Bay PDF`; `"Analysis of structure and energy flow in southwestern Yellow Sea" PDF`; `"Comparing marine ecosystems of Laizhou and Haizhou Bays" DOI authors`; `"Haizhou Bay" Ecopath "diet matrix"`; `"Bohai Sea" 2016 Ecopath "23 functional groups"`; `"Temporal Changes of Structure and Functioning of the Bohai Sea Ecosystem"`; `"10.1007/s41208-019-00139-1"`; `"Rahman" "Temporal Changes" Bohai PDF`; `"Temporal Changes of Structure" Bohai "diet" matrix`; `"Wangjiadao" "diet matrix" Ecopath`; `"Wangjiadao" "Table 3" Ecopath functional groups`; `"Laizhou Bay" "Supplementary Table S2" Ecopath 2025`; `"Laizhou Bay" "food composition matrix" Ecopath 2025`.
- **EcoBase registry cross-checks:** `EcoBase "Jiaozhou Bay" 2015 Ecopath model`; `EcoBase "southern Yellow Sea" Lin 2013`; `EcoBase "Laizhou Bay" Ecopath model`; `EcoBase "Yellow River Estuary" Ecopath model`. EcoBase 609 = Tong's 1982–83 Bohai model; Rahman et al. 2019 is indexed as closed access. No registry download was treated as an obtained matrix.
- **figshare:** `site:figshare.com "Yellow Sea" OR "Bohai Sea" "food web" Ecopath` → environmental/genomics deposits and unrelated supplementary material, no regional diet matrix.
- **Zenodo:** `site:zenodo.org "Yellow Sea" OR "Bohai Sea" "food web" Ecopath` → taxonomy tables only, no food-web matrix.
- **Dryad:** `site:datadryad.org "Yellow Sea" OR "Bohai Sea" "food web"` → shorebird and seaweed datasets, no resolved food web.
- **General dataset search:** `"Yellow Sea" "food web" dataset trophic network download` → stable-isotope and pollutant-transfer studies, no additional downloadable edge matrix.

**Open documents actually read:** Zhao et al. 2022 Yellow River Estuary (full open article, Table 2 diet-matrix caption and model methods); Cui et al. 2025 Laizhou Bay (full open article and supplement references); Ju et al. 2020 Laizhou/Haizhou Bays (open manuscript, Appendix A2 diet reference); Ma et al. 2018 Jiaozhou Bay (full journal HTML; five tables, no diet matrix); Tong et al. 2000 Bohai Sea (open author-copy PDF, 13 groups and Table 3); Yuan et al. 2024 Liaohe Estuary (full open article, Supplementary Table 1 identified); Gao et al. 2022 Haizhou/Lvsi (full open HTML; model parameters but no diet matrix, data on request); Sun et al. 2020 Sanggou Bay (open abstract/table index); Lin et al. 2013 southern Yellow Sea and Rahman et al. 2019 Bohai Sea (publisher pages/reference text only).

## Candidate table

| Candidate id | Ecosystem | Raw size | Access | Score | Tier / gate |
|---|---|---:|---|---:|---|
| `yellow-river-estuary` | Yellow River Estuary ecoregion | 24 groups | ASSUMED (strong) | 15 | **Tier 1** |
| `laizhou-bay` | Laizhou Bay, 2022 surveys | 22 groups | ASSUMED | 13 | Appendix — marine saturation |
| `haizhou-bay` | Haizhou Bay, 2011–12 | 33 groups | ASSUMED | 11 | Appendix — marine saturation |
| `southern-yellow-sea` | Southern Yellow Sea, 2000–01 | 22 groups | INACCESSIBLE | 13 | Appendix — access + marine saturation |
| `bohai-sea-2016` | Bohai Sea, 2016 | 23 groups | INACCESSIBLE | 13 | Appendix — access + marine saturation |
| `jiaozhou-bay` | Jiaozhou Bay, 1980–82 / 2015–16 | 21 groups per period | INACCESSIBLE | 13 | Appendix — matrix not published + marine saturation |
| `bohai-sea-1982` | Bohai Sea, 1982–83 | 13 groups | ASSUMED (strong) | 12 | Appendix — richness + marine saturation |
| `liaohe-estuary-salt-marsh` | Liaohe Estuary tidal-flat wetland | 14 groups | ASSUMED (strong) | 12 | Appendix — richness |

## Tier 1 — build next

### Yellow River Estuary ecoregion, Shandong — `yellow-river-estuary`
- **Biome / Region:** Temperate estuary and adjacent shallow shelf · China (Yellow River Delta / Laizhou Bay) · **Lat/Lng (approx):** 37.7, 119.4
- **Source:** Zhao, Q., Huang, H., Zhu, Y., Cao, M., Zhao, L., Hong, X. & Chu, J. (2022). Analysing ecological carrying capacity of bivalve aquaculture within the Yellow River Estuary ecoregion through mass-balance modelling. *Aquaculture Environment Interactions* 14: 147–161. [DOI 10.3354/aei00430](https://doi.org/10.3354/aei00430); [open article](https://www.int-res.com/articles/aei2022/14/q014p147.pdf).
- **Data access:** **ASSUMED (strong), not verified** — the open article states that Table 2 is the input diet matrix, with predators in columns and percentage diet contributions summing to 100%; Table 1 has balanced parameters and trophic levels. Table 2 was located but not transcribed or independently checked in Stage 1.
- **Raw size:** 24 functional groups / link count not yet extracted · **Aggregation plan:** → ~22–24 nodes, essentially raw; merge only closely related demersal-fish guilds if layout pressure requires it. Do not split the pooled zooplankton or cultured-bivalve groups.
- **Data type:** weighted (Ecopath diet percentages) · **Provenance:** empirical (mass-balance model; local surveys plus literature/model inputs)
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 3 = **15**
- **Tier:** 1 · **Notes:** The strongest candidate in the sweep. The Yellow River supplies sediment and nutrients to a Ramsar-listed delta while cultured oysters, mussels, scallops and clams expand around it. Zooplankton are both prey and competitors of cultured bivalves and become the limiting group in the carrying-capacity simulation — a clear, explainable cascade. Carnivorous sharks, gobies, mantis shrimp and Japanese Spanish mackerel give the upper web recognizable predators. Estuary is not saturated (2 live). Caveats for Stage 2: the model combines 2015–17 distribution/catch estimates, a 2016 local survey and literature diets; cultured bivalves are deliberately assigned no predators; carrying capacity is a scenario result, not an observed safe-harvest recommendation.

## Appendix — recorded, not planned

### Laizhou Bay, Bohai Sea — `laizhou-bay`
- **Biome / Region:** Semi-enclosed temperate marine bay · **Lat/Lng (approx):** 37.55, 119.6
- **Source:** Cui, W., Xu, B., Dong, X., Yang, J., Li, M., Zhang, D., Li, S., Lv, Z., Li, F. & Ren, Z. (2025). Comparative study of the characteristics of the energy flow and food web structure in the Laizhou Bay ecosystem based on the Ecopath and LIM-MCMC models. *Frontiers in Marine Science* 12: 1572355. [DOI/full text](https://doi.org/10.3389/fmars.2025.1572355).
- **Data access:** **ASSUMED** — open article; Supplementary Tables S1–S4 are referenced for groups, isotope values, model parameters and flows, but the diet matrix was not independently obtained. The article reports diet composition from stomach contents and isotope measurements.
- **Raw size:** 22 functional groups / links not extracted · **Aggregation plan:** → ~20–22 nodes, near-raw.
- **Data type:** weighted · **Provenance:** empirical (Ecopath + LIM-MCMC; May/August/November 2022 surveys)
- **Scores:** data 3 · story 2 · geography 3 · cost 3 · recognition 2 = **13**
- **Tier:** appendix (**marine-saturation gate**) · **Notes:** Good modern whole-bay model with swimming crab, mantis shrimp, Chinese shrimp, cephalopods, gobies and Sciaenidae; short food chains and disagreement between Ecopath and LIM-MCMC maturity assessments are useful cautions. Promote only if a marine slot opens and Stage 2 obtains the matrix. Do not confuse it with the many smaller artificial-reef models in the same bay.

### Haizhou Bay, southern Yellow Sea — `haizhou-bay`
- **Biome / Region:** Open temperate marine bay · **Lat/Lng (approx):** 34.9, 119.4
- **Source:** Ju, P., Cheung, W.W.L., Chen, M., Xian, W., Yang, S. & Xiao, J. (2020). Comparing marine ecosystems of Laizhou and Haizhou Bays, China, using ecological indicators estimated from food web models. *Journal of Marine Systems* 202: 103238. [DOI 10.1016/j.jmarsys.2019.103238](https://doi.org/10.1016/j.jmarsys.2019.103238); [open manuscript](https://core.ac.uk/download/pdf/343510001.pdf).
- **Data access:** **ASSUMED** — the open manuscript explicitly identifies Appendix Table A2 as diets and Table A1 as group composition, but the separate supplement was not obtained. Gao et al. (2022), *Water* 14: 1397, provides a newer 19-group Haizhou model but no diet matrix and says data are available on request.
- **Raw size:** 33 functional groups / links not extracted · **Aggregation plan:** → ~22–25 nodes; merge minor fish and crustacean guilds while retaining congers, sharks/rays, small yellow croaker, zooplankton and shrimp as distinct groups.
- **Data type:** weighted · **Provenance:** empirical (2011–12 seasonal trawl/zooplankton surveys + literature diets)
- **Scores:** data 2 · story 3 · geography 3 · cost 2 · recognition 1 = **11**
- **Tier:** appendix (**marine-saturation gate**) · **Notes:** Sharks/rays and mantis shrimp are keystone groups; zooplankton and shrimp structure pelagic–benthic coupling. Useful natural-bay counterpart to heavily ranched Laizhou Bay, but aggregation and supplement retrieval remain real costs.

### Southern Yellow Sea shelf — `southern-yellow-sea`
- **Biome / Region:** Temperate continental shelf · **Lat/Lng (approx):** 34.0, 122.5
- **Source:** Lin, Q., Jin, X. & Zhang, B. (2013). Trophic interactions, ecosystem structure and function in the southern Yellow Sea. *Chinese Journal of Oceanology and Limnology* 31: 46–58. [DOI 10.1007/s00343-013-2013-6](https://doi.org/10.1007/s00343-013-2013-6).
- **Data access:** **INACCESSIBLE** — publisher page/reference text was available, but the full model tables and diet matrix were not obtained. The abstract confirms a 2000–01 Ecopath model with 22 functional groups.
- **Raw size:** 22 groups / links unknown · **Aggregation plan:** → ~20–22 nodes, near-raw if the matrix becomes available.
- **Data type:** weighted · **Provenance:** empirical (Ecopath)
- **Scores:** data 2 · story 3 · geography 3 · cost 3 · recognition 2 = **13**
- **Tier:** appendix (**access + marine-saturation gates**) · **Notes:** Broad-shelf story of overfishing, anchovy decline and jellyfish; included in Zhai & Pauly's 2020 comparison of 19 Chinese models. Revisit with library access or a deposited model, not by reconstructing links from related papers.

### Bohai Sea whole basin, 2016 — `bohai-sea-2016`
- **Biome / Region:** Semi-enclosed temperate sea · **Lat/Lng (approx):** 38.3, 118.5
- **Source:** Rahman, M.F., Lin, Q., Shan, X., Chen, Y., Ding, X. & Liu, Q. (2019). Temporal Changes of Structure and Functioning of the Bohai Sea Ecosystem: Insights from Ecopath Models. *Thalassas* 35: 625–641. [DOI 10.1007/s41208-019-00139-1](https://doi.org/10.1007/s41208-019-00139-1).
- **Data access:** **INACCESSIBLE** — closed publisher model; no lawful open diet matrix located. Abstract/indexes confirm 23 groups based on year-round 2016 trawl surveys.
- **Raw size:** 23 groups / links unknown · **Aggregation plan:** → ~20–23 nodes, near-raw.
- **Data type:** weighted · **Provenance:** empirical (Ecopath)
- **Scores:** data 2 · story 3 · geography 3 · cost 3 · recognition 2 = **13**
- **Tier:** appendix (**access + marine-saturation gates**) · **Notes:** Attractive comparison with Tong's 1982–83 baseline: anglerfish at the top, benthos below, fisheries restructuring the basin. The numerical comparison must not be built until the actual 2016 matrix is obtained.

### Jiaozhou Bay, Yellow Sea — `jiaozhou-bay`
- **Biome / Region:** Semi-closed temperate marine bay / shellfish aquaculture · **Lat/Lng (approx):** 36.05, 120.2
- **Source:** Ma, M., Xu, S., Xu, Y., Zhang, K., Yuan, W. & Chen, Z. (2018). Comparative study of Jiaozhou Bay ecosystem based on an Ecopath model. *Journal of Fishery Sciences of China* 25(2): 413–422. [DOI 10.3724/SP.J.1118.2018.17335](https://doi.org/10.3724/SP.J.1118.2018.17335); [journal HTML](https://www.fishscichina.com/zgsckx/article/html/5918?st=article_issue).
- **Data access:** **INACCESSIBLE** — full HTML was read. It lists 21 groups and five tables (group composition, model parameters, trophic flows, transfer efficiencies, system attributes), but no diet matrix. Han et al. (2017), *Acta Oceanologica Sinica* 36: 60–69, DOI 10.1007/s13131-017-1071-6, is another closed 2011 model; no matrix was located there either.
- **Raw size:** 21 groups per period / links unknown · **Aggregation plan:** → ~19–21 nodes, near-raw if matrices become available.
- **Data type:** weighted · **Provenance:** empirical (Ecopath; local surveys + literature)
- **Scores:** data 2 · story 3 · geography 3 · cost 3 · recognition 2 = **13**
- **Tier:** appendix (**access + marine-saturation gates**) · **Notes:** Manila clam is the keystone/structuring group in both 1980–82 and 2015–16 as large demersal fish collapse — an excellent narrative, but the published article does not supply the links needed for the atlas.

### Bohai Sea whole basin, 1982–83 — `bohai-sea-1982`
- **Biome / Region:** Semi-enclosed temperate sea · **Lat/Lng (approx):** 38.3, 118.5
- **Source:** Tong, L., Tang, Q. & Pauly, D. (2000). A preliminary approach on mass-balance Ecopath model of the Bohai Sea. *Chinese Journal of Applied Ecology* 11(3): 435–440. PMID 11767650; [open author copy](https://s3-us-west-2.amazonaws.com/legacy.seaaroundus/researcher/dpauly/PDF/2000/JournalArticles/PreliminaryApproachMassBalanceEcopathModelBohaiSea.pdf); EcoBase 609.
- **Data access:** **ASSUMED (strong)** — open paper identifies Table 3 as the diet matrix and Tables 1–2 as groups/parameters; matrix not transcribed in Stage 1.
- **Raw size:** 13 functional groups / links not extracted · **Aggregation plan:** no honest route to the 15-node minimum without splitting source groups; retain only as a historical baseline.
- **Data type:** weighted · **Provenance:** empirical (54 fish species, 1,863 stomachs, 1982–83 survey + literature parameters)
- **Scores:** data 3 · story 3 · geography 3 · cost 1 · recognition 2 = **12**
- **Tier:** appendix (**richness + marine-saturation gates**) · **Notes:** Important first Bohai Ecopath baseline, with high exploitation and a shift from large fish to small pelagics, jellyfish and crustaceans. Useful context for Rahman 2019, not a standalone atlas web.

### Liaohe Estuary salt-marsh wetland, Liaodong Bay — `liaohe-estuary-salt-marsh`
- **Biome / Region:** Tidal salt marsh / estuarine wetland · **Lat/Lng (approx):** 40.85, 121.75
- **Source:** Yuan, D., Qiu, M., Zhou, X., Zhang, Y. & Zhao, J. (2024). Study on the structure and energy flow of the salt marsh wetland ecosystem in Liaohe Estuary based on the Ecopath model. *Frontiers in Marine Science* 11: 1487370. [DOI/full text](https://doi.org/10.3389/fmars.2024.1487370).
- **Data access:** **ASSUMED (strong)** — open article explicitly identifies Supplementary Table 1 as the food-composition matrix; not independently downloaded/transcribed.
- **Raw size:** 14 functional groups / links not extracted · **Aggregation plan:** no honest route to 15 nodes without splitting measured groups; retain raw if the product minimum changes.
- **Data type:** weighted (SIAR-informed Ecopath) · **Provenance:** empirical (2019 field surveys + isotope mixing model)
- **Scores:** data 3 · story 3 · geography 3 · cost 1 · recognition 2 = **12**
- **Tier:** appendix (**richness gate**) · **Notes:** Saunders's gull above red *Suaeda* marsh, reeds, benthic algae, crabs, shrimp and sciaenid fish is a distinctive non-marine-pin story. It otherwise avoids marine saturation and has a high reported pedigree (0.75), but the 14-group ceiling is absolute under current schema.

## Rejected in sweep

- **Sanggou Bay IMTA (Sun et al. 2020, *Aquaculture Reports*, [article](https://www.sciencedirect.com/science/article/pii/S2352513419302686))** — open diet-matrix table exists, but only 13 groups and aquaculture species account for 97.3% of biomass; fails richness and marine-saturation gates.
- **Wangjiadao Islands (Zhao et al. 2023, *Sustainability* 15: 4104, [DOI](https://doi.org/10.3390/su15054104))** — 22-group marine-ranching model, but no diet matrix located and local island/ranch scale; marine saturated.
- **North Yellow Sea artificial/natural reef pair (Zhang et al. 2022, [DOI](https://doi.org/10.3389/fmars.2022.911714))** — two open 18-group Ecopath models, but tiny reef patches; prior Asia sweep's local-scale rejection stands, now reinforced by marine saturation.
- **Juehua Island artificial reef (Li et al. 2022, [DOI](https://doi.org/10.3389/fmars.2022.830324))** — seasonal models have 12 groups in summer and 16 in autumn; local ranch scale and inconsistent richness, marine saturated.
- **Bohai fish-only webs (Deng, Meng & Ren 1988; GloBI/FishBase records)** — 54 fish species/1,863 stomachs is valuable diet evidence but not a whole-community web; no resolved community matrix deposit found.
- **Yellow Sea benthic stable-isotope web (2020, [DOI](https://doi.org/10.16441/j.cnki.hdxb.20200093))** — food sources and trophic positions, not a resolved predator–prey edge matrix.
- **Southwestern Yellow Sea 2019 model (Wang et al., [DOI](https://doi.org/10.3969/J.ISSN.2095-4972.2019.04.008))** — 20 groups confirmed from the journal abstract, but only abstract/index information was obtainable and marine is saturated; the related 2022 isotope paper does not supply an open matrix either.

## Verdict

**Buildable: 1 Tier 1 candidate (`yellow-river-estuary`, score 15).** No Tier 2 candidate survives the current biome-saturation and access gates. Laizhou Bay and Haizhou Bay are the first marine candidates to reconsider if the atlas opens another marine slot; the Liaohe wetland is the first candidate to reconsider if the 15-node minimum changes. Stage 2 should independently open and check the Yellow River model's Table 2 and group definitions before any implementation work.
