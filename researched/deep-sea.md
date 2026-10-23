# Deep Sea — Hydrothermal Vents & Cold Seeps

**Researched:** 2026-10 · **Status:** complete (Stage 1 only — awaiting verification)

**Sweep log:**
- Web of Life (web-of-life.es): interaction type "food web" + "deep sea" / "hydrothermal vent" → no dedicated deep-sea entries found.
- Netzschleuder (networks.skewed.de, tag "Food web") → no deep-sea webs catalogued (freshwater/terrestrial classics only).
- GloBI / Mangal: searched for vent/seep network datasets → occurrence- and record-level interaction data only; no site-resolved link matrix for a single vent field.
- Ecopath publications: "Ecopath hydrothermal vent", "Ecopath deep sea" → 1 model found (MG-EwE, Guerra et al. 2024); shelf-scale Gulf of Mexico models rejected as out of biome scope.
- figshare / Zenodo / Dryad: "food web" + hydrothermal vent / deep sea → no standalone link-matrix deposits found.
- Primary literature: "hydrothermal vent food web", "cold seep food web", "hadal trench food web", "stable isotope food web East Pacific Rise / Mid-Atlantic Ridge / East Scotia Ridge / Guaymas Basin" → candidates below.

**General pattern from the sweep:** deep-sea food-web science is dominated by stable-isotope community studies (δ13C/δ15N/δ34S), which resolve basal sources and trophic positions but often **not explicit predator–prey link matrices**. Several papers explicitly report that vent webs are "not organised through predator-prey links" (Portail et al. 2016). The only weighted link matrix found is the Menez Gwen Ecopath model. Expect link-level curation to lean on isotope tables + documented behavioral/gut-content observations, with edges `qualitative: true` unless the Ecopath diet matrix is obtained.

---

## Tier 1

### East Pacific Rise 9°50′N hydrothermal vents, Pacific (off Mexico)
- **Biome / Region:** Deep sea — hydrothermal vent / Eastern Pacific · **Lat/Lng (approx):** 9.83, -104.29
- **Source:** Bergquist, D.C., Eckner, J.T., Urcuyo, I.A., Cordes, E.E., Hourdez, S., Macko, S.A., Fisher, C.R. (2007). Using stable isotopes and quantitative community characteristics to determine a local hydrothermal vent food web. *Marine Ecology Progress Series* 330: 49–65. doi:10.3354/meps330049
- **Data access:** MEPS (Inter-Research) is open access — article includes the local food-web diagram plus quantitative community and isotope tables; link list to be extracted from the paper at verification. **ASSUMED**
- **Raw size:** site-scale vent assemblage, moderate taxon count (single local web) · **Aggregation plan:** → ~18–22 nodes (tubeworm, mussel, polychaete, limpet, copepod, amphipod, crab, fish guilds per the source's own groupings)
- **Data type:** qualitative links over measured quantitative community data (mixed) · **Provenance:** empirical
- **Scores:** data 2 · story 3 · geography 3 · cost 3 · recognition 3 = **14**
- **Tier:** 1 · **Notes:** The iconic vent site — *Riftia pachyptila* tubeworms, vent crabs, zoarcid fish (*Thermarces cerberus*, a documented selective predator). Eruption/recolonization dynamics (1991, 2005–06 eruptions at 9°50′N) give a natural cascade story: what happens when foundation tubeworms are removed. Deep-sea biome is empty on the map.

### Menez Gwen vent field, Mid-Atlantic Ridge (Azores triple junction)
- **Biome / Region:** Deep sea — hydrothermal vent / N. Atlantic · **Lat/Lng (approx):** 37.84, -31.52
- **Source:** Guerra, A., et al. (2024). Using a food web model to predict the effects of Hazardous and Noxious Substances (HNS) accidental spills on deep-sea hydrothermal vents from the Mid-Atlantic Ridge (MAR) region. *Marine Pollution Bulletin* 199: 115974. doi:10.1016/j.marpolbul.2023.115974
- **Data access:** **the only weighted (Ecopath) diet matrix found for any deep-sea vent.** Model uses pre-aggregated functional groups (e.g. "vent Mussels", "vent Crabs"), 3 integer trophic levels; diet matrix expected in article tables/supplementary. Article paywalled at ScienceDirect — check Archimer (Ifremer/UAç authors) for an open deposit at verification. **ASSUMED**
- **Raw size:** TBD functional groups (confirm count at verification) · **Aggregation plan:** → ~15–20 nodes (Ecopath groups likely usable nearly raw)
- **Data type:** weighted (diet fractions) · **Provenance:** empirical (single published model)
- **Scores:** data 3 · story 2 · geography 3 · cost 3 · recognition 2 = **13**
- **Tier:** 1 · **Notes:** First food-web model of an Atlantic deep-sea vent. Foundation mussel *Bathymodiolus azoricus* at trophic level II — removing it is a clean, explainable cascade. Shallowest MAR vent (850 m), well-studied (Momarsat time series). Paper framed around HNS spill scenarios — a nice "what if a pollutant hits the web" angle.

### East Scotia Ridge vents (E2 & E9), Southern Ocean
- **Biome / Region:** Deep sea — hydrothermal vent / Southern Ocean (Antarctic sector) · **Lat/Lng (approx):** -56.09, -30.32 (E2); -60.04, -29.98 (E9)
- **Source:** Reid, W.D.K., et al. (2013). Spatial Differences in East Scotia Ridge Hydrothermal Vent Food Webs: Influences of Chemistry, Microbiology and Predation on Trophodynamics. *PLoS ONE* 8(6): e65553. doi:10.1371/journal.pone.0065553
- **Data access:** Open access (PLoS ONE) — full per-species δ13C/δ15N/δ34S tables for 11/10/7 species at E2/E9N/E9S, plus documented predator–prey observations (stichasterid seastar preying on *Kiwa*; pycnogonid *Colossendeis* feeding on anemones). **ASSUMED**
- **Raw size:** ~11 species per site (macroconsumers) · **Aggregation plan:** → ~15–18 nodes (vent fauna + basal chemosynthetic sources: epibiont bacteria, free-living microbes, photosynthetic POM)
- **Data type:** qualitative links constrained by published isotope tables (mixed) · **Provenance:** empirical (isotope-constrained; some links observational)
- **Scores:** data 2 · story 3 · geography 3 · cost 2 · recognition 2 = **12**
- **Tier:** 1 · **Notes:** **Yeti crab hook** — *Kiwa* sp. "farms" epibiotic bacteria on its setae; a new biogeographic province discovered 2010. Antarctic-sector vents, complements Weddell Sea (pelagic polar marine) without duplicating it. Curation risk: link set must be assembled from isotope evidence + documented observations only — no fabricated edges; keep edges qualitative and cite per-link.

## Tier 2

### Guaymas Basin vents & seeps, Gulf of California, Mexico
- **Biome / Region:** Deep sea — vents + cold seeps side by side / Gulf of California · **Lat/Lng (approx):** 27.0, -111.4
- **Source:** Portail, M., et al. (2016). Food-Web Complexity in Guaymas Basin Hydrothermal Vents and Cold Seeps. *PLoS ONE* 11. PMC5040445.
- **Data access:** Open access — 501 specimens, 70 taxa, per-assemblage isotope data across 5 seep + 4 vent assemblages. **ASSUMED**
- **Raw size:** 70 taxa / 9 assemblages · **Aggregation plan:** → pick 1–2 assemblages, ~18–20 nodes (high-curation-risk)
- **Data type:** qualitative (isotope metrics; authors report webs "not organised through predator-prey links") · **Provenance:** empirical
- **Scores:** data 2 · story 2 · geography 2 · cost 1 · recognition 1 = **8**
- **Tier:** 2 (high-curation-risk) · **Notes:** Unique vents-vs-seeps comparison; petroleum-derived carbon story. But weak resolved links and 9 assemblages to choose from make curation hard without cherry-picking.

### Gulf of Mexico cold-seep sediment macrobenthos, USA
- **Biome / Region:** Deep sea — cold seep / N. America · **Lat/Lng (approx):** 27.8, -91.3 (lower slope seeps)
- **Source:** Demopoulos, A.W.J., Gualtieri, D., Kovacs, K. (2010). Food-web structure of seep sediment macrobenthos from the Gulf of Mexico. *Deep-Sea Research II* 57: 1972–1981. doi:10.1016/j.dsr2.2010.05.011
- **Data access:** Paywalled (DSR II); companion USGS Open-File Report 2012-1032 and BOEM presentations summarize findings. Macrofauna derive 60–100% of food from *Beggiatoa* mats at lower-slope seeps. **ASSUMED**
- **Raw size:** macrobenthic community, moderate · **Aggregation plan:** → ~15–18 nodes (microbial mat, infaunal guilds, predators)
- **Data type:** qualitative (isotope-based) · **Provenance:** empirical
- **Scores:** data 2 · story 2 · geography 2 · cost 1 · recognition 1 = **8**
- **Tier:** 2 (high-curation-risk) · **Notes:** Sediment-infauna web — a genuinely different deep-sea surface (microbial mats → meio/macrofauna) vs. charismatic-megafauna vents. N. America already saturated in other biomes; keep as backlog.

## Appendix (recorded, not planned)

### Azores triple-junction vent comparison (Menez Gwen / Lucky Strike / Rainbow)
- **Source:** Portail, M., et al. (2018). Food-web complexity across hydrothermal vents on the Azores triple junction. *Deep-Sea Research I* 131: 101–120. doi:10.1016/j.dsr.2017.11.010
- **Why appendix:** 13 assemblages compared via SIA-derived metrics — no explicit link matrix; article paywalled; superseded for our purposes by the Menez Gwen Ecopath model (same region). Score 9 but fails the obtainable-link-matrix hard gate. **Accessibility: inaccessible (paywall + no matrix).**

### Hadal trench megafauna (Mariana & Kermadec trenches)
- **Source:** DSR I (2020). Trophic interactions of megafauna in the Mariana and Kermadec trenches inferred from stable isotope analysis. doi:10.1016/j.dsr.2020.103300 (S0967063720301473)
- **Why appendix:** Isotope-inferred trophic positions (3–5 levels) for bait-attending megafauna; no link matrix; paywalled. Exciting "deepest web on Earth" story — revisit if a resolved hadal web is published. **Accessibility: inaccessible.**

### Axial Volcano, Juan de Fuca Ridge (NE Pacific)
- **Source:** Levesque, C., Juniper, S.K., Limen, H. (2006). Spatial organization of food webs along habitat gradients at deep-sea hydrothermal vents on Axial Volcano, Northeast Pacific. *Deep-Sea Research I* 53: 726–739.
- **Why appendix:** Habitat-gradient isotope study; paywalled; no explicit matrix found in sweep. **Accessibility: inaccessible (paywall).**

## Rejected in sweep
- **NOAA Ocean Exploration / Smithsonian classroom "vent food web" materials** — educational composites, not citable primary data.
- **NOAA Gulf-wide / NGoM reef Ecopath models (78 / 40+ groups)** — shelf-scale fisheries models, not deep-sea vent/seep webs; out of biome scope and far over the 25-node ceiling.
- **GloBI/Mangal record-level vent interactions** — occurrence data, not a site-resolved web; fails the citable-matrix gate for a single ecosystem.

## Next steps
1. Verify the three Tier 1 candidates (fresh chat, /foodweb-verify): obtain the MG-EwE diet matrix (Archimer deposit hunt), the Bergquist 2007 link figure/tables, and the Reid 2013 isotope tables + companion behavioral observations (Marsh et al. 2012; Rogers et al. 2012).
2. Only one deep-sea web should be built first (biome currently empty; add one, then reassess diversity value of a second vent web vs. a cold-seep web).
