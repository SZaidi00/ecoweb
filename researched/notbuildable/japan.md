# Region: Japan — terrestrial, freshwater & surrounding marine waters
**Researched:** 2026-11-22 · **Status:** complete (Stage 1 — NOT BUILDABLE under current gates; parked)

**Repo context at sweep time:** 16 webs live; Japan has no implemented pin and no previous Japan ledger entry. Biome saturation: marine 6 (saturated), freshwater 3 (saturated), grassland 3 (saturated), estuary 2, wetland 1, desert 1. Scope: Japan's terrestrial and freshwater systems, coastal bays and shelf seas, and offshore waters explicitly modeled for Japan. Excluded: the previously researched East China Sea candidate, South China Sea coral reefs, and systems outside Japan that merely have Japanese authors or study funding. The country was treated as one target, not split into continent-scale subregions.

**Outcome:** Japan has unusually good published aquatic food-web coverage, including open weighted Ecopath matrices for Kyoto's Sea of Japan coast, Suo-nada, Osaka Bay, Sanriku/Tohoku and the western North Pacific, plus classic Mangal networks for Suruga and Sendai bays. None is currently buildable: the marine and freshwater biomes are saturated; Sendai Bay also falls below 15 nodes; the full Tokyo Bay matrix was not obtained; and terrestrial/wetland searches produced no resolved 15–25-node community matrix. No Tier 1 or Tier 2 candidate is recommended under the current gates. Numerically strong appendix candidates remain available if those gates change.

## Sweep log

Searches were run 2026-11-22. Query strings are recorded verbatim. Negative means no resolved Japan community web surfaced, not that the source has no Japanese species records.

- **Web of Life:** `site:web-of-life.es Japan "food web"`; `site:web-of-life.es "Suruga" OR "Sendai" OR "Japan" "Food Webs"`. No Japanese food-web network surfaced. The tutorial's “Food Webs (FW), Kyoto, Japan” map text was inspected; it documents the download interface, not a Kyoto food web. Japanese pollination networks were found but are outside scope. API documentation probe: `https://www.web-of-life.es/tutorial/session-download-data.html`.
- **GloBI:** `site:globalbioticinteractions.org Japan "food web" trophic network`; `site:globalbioticinteractions.org Hogetsu Suruga Bay Hatanaka Sendai food web`; `GloBI Japan Suruga Bay Sendai Bay food web dataset`. Hits were taxon-specific interaction records or generic source lists, not a resolved Japan community matrix.
- **Mangal:** `site:mangal.io Japan "food web" ecological network`; `Mangal API dataset networks endpoint api v2`; `"Suruga Bay" "food web" "Mangal" Hogetsu`; `"Sendai Bay" "food web" "Mangal" Hatanaka`. API `GET https://mangal.io/api/v2/dataset?count=1000` returned 175 datasets, including dataset 43 `hogetsu_1979` (Suruga Bay) and dataset 44 `hatanaka_1977` (Sendai Bay). Follow-up probes identified network 889 (Suruga) and network 890 (Sendai). `GET /api/v2/node?network_id=889&count=10000` returned 20 nodes and `/api/v2/interaction?network_id=889&count=10000` returned 60 directed binary interactions; corresponding probes for network 890 returned 14 nodes and 25 directed binary interactions. Reference probes 44/45 supplied the original book/report citations.
- **Netzschleuder:** `site:networks.skewed.de Japan food web foodweb`; `site:networks.skewed.de "Suruga" OR "Sendai Bay" food web`. No Japan food-web entry surfaced; “Japanese” hits concerned macaques, law or other non-food-web networks.
- **Ecopath / EcoBase, broad:** `Japan Ecopath food web model diet matrix ecosystem`; `Japan Ecopath model "diet composition" bay sea lake -Kyoto -Tohoku -Toya`; `site:ecobase.ecopath.org Japan Ecopath Toya Suruga Sendai Kyoto Tohoku`; `"An Ecopath with Ecosim model for the Pacific coast of eastern Japan" DOI Booth 2020 55`; `"Ecosystem modeling in the western North Pacific using Ecopath" small pelagic fishes 2018 groups diet`. Found the eastern Japan 56-compartment model, Lake Toya's EcoBase registration, and the open 41-group western North Pacific model.
- **Ecopath / Kyoto and Tohoku:** `"coastal area of Kyoto" Ecopath diet composition table 2023`; `"Quantification of the demersal marine ecosystem structure" Ecopath Japan authors 2014`; `"Impacts of regime shift" Inoue Kyoto 2023 authors Fisheries Science 89 573`; `10.1007/s12562-023-01691-9 authors`; `"Quantification of the demersal" Yonezaki 2016 DOI 80 1 19`. Opened the full Kyoto article and the Sanriku/Tohoku PDF. Kyoto Table 2 prints diet compositions for 1985 and 2013; Tohoku Table 3 prints the 46-group diet matrix.
- **Ecopath / Seto Inland Sea and Osaka Bay:** `"Fish stock assessment targeting" Suo-nada authors functional groups diet`; `"Suo-nada" Ecopath DOI Watari 2015 79 255`; `"Trophic modeling of temperature, nutrient, and hypoxia dynamics" Ariake Sea groups diet`; `"Osaka Bay" Ecopath 2026 functional groups diet matrix`; `"A coupled water-quality–Ecopath with Ecosim model" Japan bay functional groups diet matrix`. Opened Watari's open Suo-nada PDF (19 groups; diet Table 2) and Oka & Sohma's open Osaka Bay repository PDF (29 groups; diet Table 6). The “Ariake” query was a false lead: the paper's study site is Osaka Bay.
- **Ecopath / Tokyo Bay:** `Japan estuary Ecopath model "Tokyo Bay" diet matrix groups`; `Sakamoto Shirakihara 2017 Tokyo Bay Ecopath food web model functional groups diet matrix`; `"Tokyo Bay" "Ecopath" "functional groups" Sakamoto`; `"Ecosystem dynamics in Tokyo Bay with a focus on high trophic levels using Ecopath with Ecosim"`; `"Tokyo Bay" Ecopath "functional groups" 2017 Sakamoto Shirakihara 22 1 10`; `"Tokyo Bay" "Diet composition" Ecopath Sakamoto`. The peer-reviewed article is paywalled. An EMECS conference summary was located, but the PDF could not be extracted and no full diet matrix was obtained.
- **Ecopath / Lake Toya:** `"Lake Toya" Ecopath model diet composition groups 2010`; `"Elucidation of ecosystem attributes" "Lake Toya" authors groups DOI`; `"Lake Toya" "functional groups" Ecopath Hossain 2010 Table 1`; `"Lake Toya" "17 functional groups"`; `"Lake Toya" "18 functional groups" Ecopath`; `"Elucidation of ecosystem attributes" Hossain 2010 "18" diet matrix`. The article abstract/introduction and EcoBase registration were opened. The paper has diet Table 2 and is indexed as `Hossain_1992_LakeToya`; secondary snippets indicate 18 groups, but the matrix itself was not opened.
- **figshare / Zenodo / Dryad:** `Japan food web site:figshare.com OR site:zenodo.org OR site:datadryad.org`; `site:datadryad.org Japan "food web" trophic interactions`; `site:figshare.com Japan "food web" trophic network`; `site:zenodo.org Japan "food web" trophic matrix ecosystem`. No Japanese community edge-matrix deposit surfaced. Dryad's Japanese giant salamander dataset was opened and contains isotope/community measurements, not a feeding-link matrix.
- **Primary literature — broad/terrestrial:** `Japan "food web" matrix dataset trophic network published`; `Japan terrestrial forest "food web" matrix trophic links dataset`; `Japan forest soil "food web" trophic groups energy flux matrix`; `Japan grassland forest terrestrial "trophic network" "food web" interactions data`; `Japan terrestrial food web "15" "functional groups" forest paddy`; `Japan "food web" "adjacency matrix" ecosystem`; `"food web" Japan "edge list" trophic`. Found the open Fukushima detrital-chain study, but it uses ten functional groups and does not supply a resolved community matrix.
- **Primary literature — paddy/wetland:** `Japan paddy field "food web" trophic matrix spiders rice`; `Japan rice paddy "food web structure" species links Kiritani`; `Japan wetland "food web" trophic network matrix Kushiro mire`. Results were spider/pest subsets, species inventories, biodiversity lists and biogeochemistry, not whole-community food-web matrices.
- **Primary literature — lakes/rivers/stream–forest links:** `"Lake Biwa" food web trophic network matrix Ecopath`; `Japan stream food web dataset gut contents trophic links matrix`; `Nakano Japan stream forest food web Horonai River trophic links species matrix`; `"Faunal trophic interaction" "Shirakoma" food web groups matrix`; `"Echi River" "food web" macroinvertebrates matrix Japan 2015`. Lake Biwa, Shirakoma-ike and Echi River sources are isotope/trophic-pathway studies without an auditable community edge matrix. Horonai has excellent experimental cascade work but no complete community matrix was located.
- **Primary literature — Ariake Sea:** `"Ariake Sea" Ecopath food web model trophic matrix`; `有明海 Ecopath 食物網 モデル 食物組成`; `"Ariake Sea" "Ecopath model" food web groups`. A Japanese government committee record says an Ecopath network was being assembled, but no published model or diet matrix was located. Other hits were contaminant or single-species studies.
- **Classic-web citation checks:** `"Suruga Bay" Hogetsu 1979 food web matrix`; `"Sendai Bay" Hatanaka 1977 food web matrix`; `"Suruga Bay" "Hogetsu" "food web" 1979 species`; `"Community Food Webs" "Suruga Bay" species links`; `"Community Food Webs" "Sendai Bay" species links`; `"Suruga Bay" "87" "food web" Hogetsu 1979`. Mangal's actual network sizes above are used for this sweep; secondary compilation statistics were not substituted for the downloadable network.

**Documents and records actually opened:** [Kyoto coast article](https://link.springer.com/article/10.1007/s12562-023-01691-9); [Sanriku/Tohoku open PDF](https://www.jsfo.jp/contents/pdf/80-1/80-1-1.pdf); [Suo-nada open PDF](https://www.jstage.jst.go.jp/article/jsfo/79/4/79_255/_pdf/-char/en); [Osaka Bay open repository PDF](https://omu.repo.nii.ac.jp/record/2012906/files/2025000761.pdf); [western North Pacific open PDF](https://www.int-res.com/articles/meps_oa/m617p295.pdf); [eastern Japan article record](https://www.sciencedirect.com/science/article/pii/S0304380020301599); [Lake Toya article record](https://www.sciencedirect.com/science/article/abs/pii/S0304380010001705); [Tokyo Bay article record](https://link.springer.com/article/10.1007/s00773-016-0388-8); [Echi River full text](https://jccr.re.kr/_common/do.php?a=full&b=42&bidx=398&aidx=5046); [Japanese giant salamander Dryad record](https://datadryad.org/dataset/doi:10.5061/dryad.fn2z34v89); and Mangal datasets/networks/nodes/interactions/references through the API probes above.

---

## Tier 1 — build next

None under the current gates.

## Tier 2 — backlog

None under the current gates.

## Candidate table

Scores use the five rubric criteria in order: data, story, geography, aggregation cost, recognition. A high score does not override a hard-gate failure.

| Candidate id | Ecosystem | Raw data / access | Scores | Total | Tier / decisive gate |
|---|---|---|---|---|---:|---|
| `kyoto-coastal-regime-shift` | Kyoto Prefecture coast, Sea of Japan | 40 groups × 1985/2013; ASSUMED strong | 3, 3, 3, 2, 1 | 12 | appendix — marine saturation |
| `suo-nada` | Suo-nada, Seto Inland Sea | 19 groups; ASSUMED strong | 3, 2, 3, 3, 2 | 13 | appendix — marine saturation |
| `osaka-bay-anchovy` | Osaka Bay, Seto Inland Sea | 29 groups; ASSUMED strong | 3, 3, 3, 2, 2 | 13 | appendix — marine saturation |
| `sanriku-demersal` | Sanriku/northern Tohoku demersal shelf–slope | 46 groups; ASSUMED strong | 3, 3, 3, 2, 1 | 12 | appendix — marine saturation |
| `eastern-japan-pacific` | Eastern Japan Pacific coast / Fukushima baseline | 56 compartments; INACCESSIBLE matrix this sweep | 2, 3, 3, 2, 3 | 13 | appendix — access + marine saturation |
| `western-north-pacific-small-pelagics` | Western North Pacific off Japan | 41 groups / 3 spatial blocks; ASSUMED strong | 3, 3, 2, 2, 1 | 11 | appendix — marine saturation + broad scope |
| `lake-toya` | Lake Toya, Hokkaido | ~18 groups; ASSUMED, matrix unopened | 2, 3, 3, 3, 2 | 13 | appendix — freshwater saturation + access check |
| `tokyo-bay` | Tokyo Bay | size not established from matrix; INACCESSIBLE | 2, 3, 3, 2, 3 | 13 | appendix — no obtained node/edge matrix |
| `suruga-bay` | Suruga Bay epipelagic classic web | 20 nodes / 60 links; ASSUMED strong via Mangal | 2, 2, 3, 3, 2 | 12 | appendix — marine saturation |
| `sendai-bay` | Sendai Bay mesopelagic classic web | 14 nodes / 25 links; ASSUMED strong via Mangal | 2, 2, 3, 1, 1 | 9 | appendix — richness + marine saturation |
| `fukushima-forest-detrital` | Fukushima forest detrital chain | 10 broad groups; no resolved matrix | 1, 3, 3, 1, 3 | 11 | appendix — richness + edge-data gates |

---

## Appendix — recorded, not planned under current gates

### Kyoto Prefecture coastal ecosystem, Sea of Japan — `kyoto-coastal-regime-shift`
- **Biome / Region:** Temperate coastal marine shelf · Kyoto Prefecture, Sea of Japan · **Lat/Lng (approx):** 35.65, 135.35
- **Source:** Inoue, H., Watari, S., Sawada, H., Lavergne, E. & Yamashita, Y. (2023). Impacts of regime shift on the fishery ecosystem in the coastal area of Kyoto prefecture, Sea of Japan, assessed using the Ecopath model. *Fisheries Science* 89: 573–593. [DOI 10.1007/s12562-023-01691-9](https://doi.org/10.1007/s12562-023-01691-9).
- **Data access:** ASSUMED (strong) — the open full article identifies Table 2 as the weighted diet-composition and import matrix for both 1985 and 2013. Tables were located at discovery level but not transcribed or independently checked.
- **Raw size:** 40 functional groups, including detritus, in each of two years · **Aggregation plan:** choose one year and reduce 40 → ~22–25 nodes; retain sardine, anchovy, yellowtail, mackerels, tuna/sailfish, key benthos, plankton and detritus
- **Data type:** weighted Ecopath diets · **Provenance:** empirical model using fishery statistics, stock assessments, benthic surveys and literature
- **Hard gates:** publication pass · matrix location pass provisionally · aggregation pass · trophic structure pass · **biome saturation fail**
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 1 = **12**
- **Tier:** appendix · **Notes:** A clear regime-shift story: sardine catch collapsed after the late-1980s regime shift while anchovy became the main prey needed to balance the 2013 model. Do not mix the 1985 and 2013 matrices into one web.

### Suo-nada, Seto Inland Sea — `suo-nada`
- **Biome / Region:** Temperate semi-enclosed coastal sea · western Seto Inland Sea · **Lat/Lng (approx):** 33.85, 131.45
- **Source:** Watari, S. (2015). Fish stock assessment targeting on multi-species and multi-fisheries based on Ecopath with Ecosim approach in Suo-nada, Seto Inland Sea, Japan. *Bulletin of the Japanese Society of Fisheries Oceanography* 79(4): 255–265 (Japanese with English abstract). [DOI 10.34423/jsfo.79.4_255](https://doi.org/10.34423/jsfo.79.4_255); [open PDF](https://www.jstage.jst.go.jp/article/jsfo/79/4/79_255/_pdf/-char/en).
- **Data access:** ASSUMED (strong) — open Table 2 prints original and mass-balance-adjusted diet compositions; group definitions and trophic levels are in Tables 1 and 3. Not independently verified.
- **Raw size:** 18 biological groups + detritus = 19 groups · **Aggregation plan:** use all 19 source groups; no aggregation needed
- **Data type:** weighted diet percentages · **Provenance:** empirical model; seven fish groups use 2007–2010 stomach contents (798 fish, 466 with identifiable prey), with other diet and biomass inputs from literature
- **Hard gates:** publication pass · matrix location pass provisionally · 15–25-node raw size pass · trophic structure pass · **biome saturation fail**
- **Scores:** data 3 · story 2 · geography 3 · cost 3 · recognition 2 = **13**
- **Tier:** appendix · **Notes:** The cheapest Japanese Ecopath curation candidate. The story is indirect effects of trawl discard reduction: reduced fishing can increase predators and therefore increase predation on shrimp rather than simply increasing every target stock. Diet values were adjusted for mass balance and must be presented as model estimates.

### Osaka Bay anchovy ecosystem — `osaka-bay-anchovy`
- **Biome / Region:** Temperate semi-enclosed coastal marine bay · eastern Seto Inland Sea · **Lat/Lng (approx):** 34.45, 135.25
- **Source:** Oka, K. & Sohma, A. (2026). Trophic modeling of temperature, nutrient, and hypoxia dynamics on Japanese anchovy populations in Osaka Bay. *Ecological Modelling* 514: 111467. [DOI 10.1016/j.ecolmodel.2025.111467](https://doi.org/10.1016/j.ecolmodel.2025.111467); [open institutional PDF](https://omu.repo.nii.ac.jp/record/2012906/files/2025000761.pdf).
- **Data access:** ASSUMED (strong) — open paper defines all groups in Table 1 and prints the balanced diet matrix in Table 6. Matrix not transcribed or independently checked.
- **Raw size:** 29 groups: 4 phytoplankton, 4 zooplankton, detritus and 20 other consumers · **Aggregation plan:** 29 → ~23–25 nodes by merging only similar source plankton or consumer groups; retain anchovy and juvenile anchovy as distinct source groups
- **Data type:** weighted Ecopath diets and dynamic flows · **Provenance:** empirical/model synthesis, calibrated against historical biomass and catch
- **Hard gates:** publication pass · matrix location pass provisionally · aggregation pass · trophic structure pass · **biome saturation fail** (classified as coastal marine, not relabeled estuary merely to evade saturation)
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 2 = **13**
- **Tier:** appendix · **Notes:** Strong bottom-up story linking nutrient decline, phytoplankton, zooplankton prey, anchovy, warming and hypoxia. Although anchovy-centered, it is a full 29-group food web. Stage 2 should check the four phytoplankton groups and four zooplankton groups before any merges.

### Sanriku / northern Tohoku demersal ecosystem — `sanriku-demersal`
- **Biome / Region:** Temperate demersal shelf and upper slope · Pacific coast of Aomori, Iwate and Miyagi · **Lat/Lng (approx):** 39.2, 142.2
- **Source:** Yonezaki, S., Kiyota, M., Narimatsu, Y., Hattori, T. & Ito, M. (2016). Quantification of the demersal marine ecosystem structure in the northern district of the Tohoku sea area, northeastern Japan based on Ecopath approach. *Bulletin of the Japanese Society of Fisheries Oceanography* 80(1): 1–19 (Japanese with English abstract). [Open PDF](https://www.jsfo.jp/contents/pdf/80-1/80-1-1.pdf).
- **Data access:** ASSUMED (strong) — open Table 3 is the complete diet-composition matrix; Tables 1–2 define groups and model parameters. Matrix not independently checked.
- **Raw size:** 46 functional groups including detritus · **Aggregation plan:** 46 → ~23–25 nodes; merge species only within source trophic guilds, retain Pacific krill, mesopelagic fishes, macrobenthos, cod life stages where useful, sharks, grenadiers and major cephalopods
- **Data type:** weighted Ecopath diets · **Provenance:** empirical model based on bottom-trawl surveys and fishery statistics
- **Hard gates:** publication pass · matrix location pass provisionally · aggregation pass · trophic structure pass · **biome saturation fail**
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 1 = **12**
- **Tier:** appendix · **Notes:** Pacific krill, mesopelagic fishes and macrobenthos support distinct predator pathways; low-biomass demersal sharks, adult Pacific cod and giant grenadier are model keystones. The model omits marine mammals and seabirds, so its scope is demersal rather than the entire Sanriku ecosystem.

### Eastern Japan Pacific coast, pre-Fukushima baseline — `eastern-japan-pacific`
- **Biome / Region:** Temperate coastal-to-offshore marine · Iwate, Miyagi, Fukushima and Ibaraki EEZ · **Lat/Lng (approx):** 37.5, 141.5
- **Source:** Booth, S., Walters, W.J., Steenbeek, J., Christensen, V. & Charmasson, S. (2020). An Ecopath with Ecosim model for the Pacific coast of eastern Japan: Describing the marine environment and its fisheries prior to the Great East Japan earthquake. *Ecological Modelling* 428: 109087. [DOI 10.1016/j.ecolmodel.2020.109087](https://doi.org/10.1016/j.ecolmodel.2020.109087); [HAL manuscript record](https://hal.science/hal-03490524).
- **Data access:** INACCESSIBLE in this sweep — ScienceDirect exposed the abstract and section snippets but no matrix; the HAL document route returned an anti-bot challenge. No diet table was obtained.
- **Raw size:** 55 biological groups + detritus = 56 compartments · **Aggregation plan:** 56 → ~24–25 nodes only after obtaining the full group and diet tables
- **Data type:** weighted Ecopath diets plus Ecotracer contaminant flows · **Provenance:** empirical/model synthesis for 2010
- **Hard gates:** publication pass · **matrix obtainability fail in this sweep** · plausible aggregation pass · trophic structure pass · **biome saturation fail**
- **Scores:** data 2 · story 3 · geography 3 · cost 2 · recognition 3 = **13**
- **Tier:** appendix · **Notes:** Exceptional Kuroshio–Oyashio and pre-Fukushima story, but neither story nor recognition substitutes for the missing matrix. Do not reconstruct the web from the abstract or the smaller Sanriku model.

### Western North Pacific small-pelagic ecosystem off Japan — `western-north-pacific-small-pelagics`
- **Biome / Region:** Temperate/sub-Arctic open-ocean and coastal marine · Oyashio, Kuroshio and offshore western North Pacific · **Lat/Lng (approx):** 40.0, 145.0
- **Source:** Watari, S., Murase, H., Yonezaki, S., Okazaki, M., Kiyofuji, H., Tamura, T., Hakamada, T., Kanaji, Y. & Kitakado, T. (2019). Ecosystem modeling in the western North Pacific using Ecopath, with a focus on small pelagic fishes. *Marine Ecology Progress Series* 617–618: 295–305. [DOI 10.3354/meps12508](https://doi.org/10.3354/meps12508); [open PDF](https://www.int-res.com/articles/meps_oa/m617p295.pdf).
- **Data access:** ASSUMED (strong) — open Table 3 prints diet proportions, with group definitions and parameters in Tables 1–2 and supplements. Not independently verified.
- **Raw size:** 41 functional groups across coastal Oyashio, coastal Kuroshio and offshore blocks · **Aggregation plan:** 41 → ~24–25 groups without duplicating migratory groups by block; preserve sardine, anchovy, saury, mackerels, krill, whales and seabirds
- **Data type:** weighted Ecopath diets · **Provenance:** empirical/model synthesis for 2013
- **Hard gates:** publication pass · matrix location pass provisionally · aggregation plausible · trophic structure pass · **biome saturation fail**; broad multi-block extent also weakens the single-pin scope
- **Scores:** data 3 · story 3 · geography 2 · cost 2 · recognition 1 = **11**
- **Tier:** appendix · **Notes:** Strong wasp-waist story linking small pelagics and krill to whales, seabirds, tunas and fisheries. Spatial blocks share diet values and must not be mistaken for three independent measured webs.

### Lake Toya, Hokkaido — `lake-toya`
- **Biome / Region:** Oligotrophic volcanic freshwater lake · Shikotsu-Toya National Park, Hokkaido · **Lat/Lng:** 42.60, 140.85
- **Source:** Hossain, M.M., Matsuishi, T. & Arhonditsis, G. (2010). Elucidation of ecosystem attributes of an oligotrophic lake in Hokkaido, Japan, using Ecopath with Ecosim (EwE). *Ecological Modelling* 221(13): 1717–1730. [DOI 10.1016/j.ecolmodel.2010.03.025](https://doi.org/10.1016/j.ecolmodel.2010.03.025). EcoBase registration: `Hossain_1992_LakeToya`.
- **Data access:** ASSUMED (moderate) — publisher snippets identify diet Table 2 and EcoBase registers the model, but the full matrix was not opened. Secondary search snippets indicate 18 groups; Stage 2 must confirm this from the paper or EcoBase rather than treating the snippet as verification.
- **Raw size:** approximately 18 functional groups · **Aggregation plan:** potentially near-raw if the source confirms 15–25 groups; no splitting of pooled groups
- **Data type:** weighted Ecopath diets · **Provenance:** empirical/model synthesis for 1992–2004
- **Hard gates:** publication pass · matrix location provisional · plausible raw-size pass pending confirmation · trophic structure pass · **freshwater saturation fail**
- **Scores:** data 2 · story 3 · geography 3 · cost 3 · recognition 2 = **13**
- **Tier:** appendix · **Notes:** Sockeye salmon collapsed from a 143 t commercial catch in 1963 to roughly 0.5–1.5 t in the 1990s; the model asks how that decline propagates through the lake. Strong candidate only if freshwater slots reopen and the matrix is obtained.

### Tokyo Bay — `tokyo-bay`
- **Biome / Region:** Eutrophic semi-enclosed estuarine/coastal bay · Tokyo metropolitan area · **Lat/Lng (approx):** 35.50, 139.90
- **Source:** Sakamoto, A. & Shirakihara, K. (2017). Ecosystem dynamics in Tokyo Bay with a focus on high trophic levels using Ecopath with Ecosim. *Journal of Marine Science and Technology* 22: 1–10. [DOI 10.1007/s00773-016-0388-8](https://doi.org/10.1007/s00773-016-0388-8).
- **Data access:** INACCESSIBLE — the publisher is paywalled and the article page exposes no group or diet tables. A separate EMECS conference summary was found, but its PDF could not be extracted and is not a substitute for the matrix.
- **Raw size:** not established from an obtained matrix · **Aggregation plan:** deferred; no defensible plan without the source group list
- **Data type:** weighted Ecopath/Ecosim model, based on article methods · **Provenance:** empirical/model synthesis
- **Hard gates:** publication pass · **node/edge obtainability fail** · aggregation unconfirmed · trophic structure pass in principle · estuary biome would pass if that classification is retained
- **Scores:** data 2 · story 3 · geography 3 · cost 2 · recognition 3 = **13**
- **Tier:** appendix · **Notes:** The best potential unsaturated-biome lead: bottom-up phytoplankton control, hypoxia and benthos loss beside Tokyo. Revisit only with the full article/model and a printed diet matrix. Do not infer links from the abstract or the conference diagram.

### Suruga Bay classic epipelagic web — `suruga-bay`
- **Biome / Region:** Temperate epipelagic marine bay · Shizuoka Prefecture · **Lat/Lng (approx):** 35.0, 138.6
- **Source:** Hogetsu, K. (1979). Biological productivity of some coastal regions of Japan. In Dunbar, M.J. (ed.), *Marine Production Mechanisms*, International Biological Programme Series 20, Cambridge University Press, pp. 71–87 (food web from p. 74), as cited by Mangal reference 44. [Mangal dataset 43](https://mangal.io/api/v2/dataset?count=1000), network 889.
- **Data access:** ASSUMED (strong) — Mangal API returned 20 nodes and 60 directed presence/absence interactions for network 889. Node identities and links were sampled at discovery level; the full web and original printed matrix have not been independently checked.
- **Raw size:** 20 nodes / 60 qualitative links in Mangal · **Aggregation plan:** potentially usable at the raw 20-node size; check trophic levels, basal nodes and any isolated taxa first
- **Data type:** qualitative binary links · **Provenance:** empirical published network mirrored by Mangal
- **Hard gates:** established database with primary citation pass · matrix obtained at discovery level but Stage 2 verification pending · raw size pass · trophic structure plausible · **marine saturation fail**
- **Scores:** data 2 · story 2 · geography 3 · cost 3 · recognition 2 = **12**
- **Tier:** appendix · **Notes:** Lowest-curation-cost classic Japanese web. Stage 2 should compare Mangal against Hogetsu's original page and determine why later compilations report different compilation-level statistics; do not mix those statistics into this network.

### Sendai Bay classic mesopelagic web — `sendai-bay`
- **Biome / Region:** Temperate mesopelagic marine bay · Miyagi Prefecture · **Lat/Lng (approx):** 38.2, 141.2
- **Source:** Hatanaka, M.A. (1977). *Productivity of Biocenoses in Coastal Regions*, Japanese Committee for the International Biological Program Synthesis, food web from p. 190, as cited by Mangal reference 45. Mangal dataset 44, network 890.
- **Data access:** ASSUMED (strong) — Mangal API returned 14 nodes and 25 directed presence/absence interactions. Original page and full link identities were not independently checked.
- **Raw size:** 14 nodes / 25 qualitative links · **Aggregation plan:** none; below the 15-node minimum and pooled groups cannot be split without additional sourced diets
- **Data type:** qualitative binary links · **Provenance:** empirical published network mirrored by Mangal
- **Hard gates:** publication/database pass · matrix obtained at discovery level · **richness fail** · trophic structure plausible · **marine saturation fail**
- **Scores:** data 2 · story 2 · geography 3 · cost 1 · recognition 1 = **9**
- **Tier:** appendix · **Notes:** Record only. Do not add taxa from unrelated Sendai Bay diet studies merely to reach 15 nodes.

### Fukushima forest detrital food chain — `fukushima-forest-detrital`
- **Biome / Region:** Temperate forest detrital web · Fukushima Prefecture · **Lat/Lng (approx):** 37.75, 140.5
- **Source:** Murakami, M., Ohte, N., Suzuki, T., Ishii, N., Igarashi, Y. & Tanoi, K. (2014). Biological proliferation of cesium-137 through the detrital food chain in a forest ecosystem in Japan. *Scientific Reports* 4: 3599. [DOI 10.1038/srep03599](https://doi.org/10.1038/srep03599).
- **Data access:** INACCESSIBLE for a complete edge matrix — the open study reports isotope/radiocesium measurements and a schematic of ten broad functional groups, not an auditable community feeding matrix.
- **Raw size:** 10 functional groups · **Aggregation plan:** no valid 15-node version; splitting or adding groups would be unsupported
- **Data type:** isotope/contaminant measurements, not resolved diet links · **Provenance:** empirical field study
- **Hard gates:** publication pass · **edge-matrix fail** · **15-node richness fail** · trophic structure broad but usable only as a schematic · forest biome not saturated
- **Scores:** data 1 · story 3 · geography 3 · cost 1 · recognition 3 = **11**
- **Tier:** appendix · **Notes:** A compelling forest-detritus and radiocesium pathway, but not a buildable community web. Isotope enrichment must not be converted into invented pairwise links.

---

## Rejected in sweep

- **Lake Biwa** — stable-isotope papers and reviews show hypothetical pathways and trophic positions, but no resolved community adjacency/diet matrix was found. Freshwater is also saturated. Do not reconstruct a web from isotope biplots.
- **Shirakoma-ike** — Lee, Yoshioka & Hanazato (2002), *Limnology* 3:151–158, [DOI 10.1007/s102010200018](https://doi.org/10.1007/s102010200018), is a stable-isotope study of pelagic faunal interactions, not an obtained community matrix; freshwater saturation is an additional gate.
- **Echi River intermittent-stream macroinvertebrates** — Shin et al. (2015), *Journal of Climate Change Research* 6(3):167–173, [DOI 10.15531/KSCCR.2015.6.3.167](https://doi.org/10.15531/KSCCR.2015.6.3.167), reports isotopes for nine selected consumer taxa plus potential sources. Suggested predator–prey pathways are not a complete link matrix and the sampling is below the richness requirement.
- **Horonai Stream / Nakano stream–forest experiments** — classic reciprocal-subsidy and trophic-cascade experiments, but the located papers measure selected fluxes and components rather than publishing a complete community edge list. Do not assemble an implied web from experimental diagrams without an explicitly sourced composite scope.
- **Japanese giant salamander river communities** — Dryad DOI [10.5061/dryad.fn2z34v89](https://datadryad.org/dataset/doi:10.5061/dryad.fn2z34v89) contains community isotope/trophic-structure data, not feeding links. Freshwater saturation also applies.
- **Ariake Sea Ecopath lead** — a Japanese government committee record describes a model/network in preparation, but no published citable matrix was found. Contaminant-transfer papers and species diet studies do not fill that gap.
- **Japanese rice paddies and Kushiro Mire** — searches found spider/pest subsets, inventories, habitat studies and biogeochemistry, not a resolved paddy or wetland community matrix. The paddy species database is not itself a coherent measured food web.
- **Japanese pollination/host–parasitoid networks** — genuine Japanese networks exist in Web of Life and Mangal, but they are outside the current product surface and were not promoted as trophic food webs.

## Recommendation

Park Japan at `researched/notbuildable/japan.md`; do not repeat the sweep unless the user explicitly requests it or new evidence changes a gate. This is a saturation/access verdict, not a claim that Japan lacks published food webs.

If the marine gate changes, verify Suo-nada first for near-raw curation, Kyoto for the two-regime story, Osaka Bay for nutrient–anchovy–hypoxia cascades, and Suruga Bay for a small qualitative network. If the freshwater gate changes, obtain Lake Toya's matrix. Tokyo Bay is the most important access revisit because it could fit the unsaturated estuary biome, but only the full published group list and diet matrix can promote it. No candidate should be promoted by relabeling a marine bay as an estuary, splitting pooled groups, or converting isotope values into feeding edges.
