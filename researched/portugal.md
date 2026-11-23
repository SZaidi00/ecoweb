# Region: Portugal — mainland terrestrial, freshwater, estuarine & surrounding marine waters
**Researched:** 2026-11-23 · **Status:** complete (Stage 1 — awaiting independent verification)

**Scope:** Mainland Portugal, including terrestrial and freshwater systems, coastal wetlands, estuaries, coastal lagoons, rocky shores and locally bounded shelf/slope models. Country-scale scope matches the Spain, Ireland and Scotland sweeps. The Azores and Madeira are excluded and should be treated as a separate Macaronesian sweep: their island and open-ocean ecosystems are not a useful extension of the mainland. Existing Azorean deep-sea candidates, including `menez-gwen-vent`, are untouched. Pollination, seed-dispersal and host–parasite-only networks are outside the current product surface.

**Previous records:** Portugal had no `researched`, `verified`, `implemented` or `researched/notbuildable/` entry and no Portugal-specific ledger row. This is a new sweep, not a re-run.

**Repo context at sweep time:** 16 live webs in `data/webs/index.json`: marine 6 (saturated), freshwater 3 (saturated), grassland 3 (saturated), estuary 2, wetland 1, desert 1, temperate terrestrial forest 0. No Portuguese or other European web is live. New open-marine candidates are therefore appendix-only even when their matrices and scores are strong. Estuarine and coastal-lagoon candidates remain eligible. Ria de Aveiro and Ria Formosa are treated as tidal estuarine/coastal-lagoon systems, consistent with their source papers, not relabelled arbitrarily to evade a biome cap.

**Outcome:** three Tier 1 and two Tier 2 candidates pass discovery-level gates. `mondego-benthic` is strongest: Web of Life and Mangal expose weighted matrices for bare-sediment and *Zostera* webs across eutrophication, mitigation and flood snapshots, including two source webs already inside the 15–25-node range. `ria-de-aveiro` is a 26-group weighted Ecopath model with its diet matrix identified as Table 2. `tagus-estuary` has exceptional human–food-web and historical-change stories but much higher aggregation and matrix-access risk. `ria-formosa-lagoon` and `portuguese-intermittent-estuaries` are Tier 2 qualitative/composite backlog candidates. Four appendix candidates are blocked by marine saturation or richness, and the southern trawl preprint is rejected. All Tier 1 access labels are **ASSUMED**, not verified.

## Candidate table

Scores are data quality, story, geography, aggregation cost and recognition in that order. “Matrix” means the node/link or diet data needed for curation, not merely a food-web diagram or network statistics.

| Candidate id | Ecosystem | Biome | Raw size | Data access | Scores | Total | Tier / decisive gate |
|---|---|---|---:|---|---|---:|---|
| `mondego-benthic` | Mondego Estuary south arm | Estuarine benthic / seagrass | Six webs, 21–38 nodes / 67–242 links | ASSUMED strong; Web of Life `FW_016_01` + Mangal 1064–1069 | 3, 3, 3, 3, 1 | 13 | **1** |
| `ria-de-aveiro` | Ria de Aveiro tidal lagoon | Estuary / coastal lagoon | 26 functional groups | ASSUMED strong; article Table 2 diet matrix | 3, 2, 3, 3, 1 | 12 | **1** |
| `tagus-estuary` | Tagus Estuary present-day web | Estuary | 129 taxa / 104 trophic species | ASSUMED verification risk; open paper + diet references, full matrix not located | 2, 3, 3, 2, 3 | 13 | **1 (high-curation-risk)** |
| `ria-formosa-lagoon` | Ria Formosa coastal lagoon | Estuary / coastal lagoon | Highly resolved network; exact count not extracted | ASSUMED verification risk; open article record, full matrix not obtained | 2, 3, 3, 2, 1 | 11 | **2 (high-curation-risk)** |
| `portuguese-intermittent-estuaries` | Aljezur, Bensafrim, Odeceixe or Gilão | Small intermittent estuary | 39–61 taxa / 26–36 trophic species per Portuguese system | ASSUMED verification risk; open taxa and diet-reference supplements, pairwise matrix not located | 2, 2, 3, 2, 1 | 10 | **2 (high-curation-risk)** |
| `portuguese-continental-shelf` | Portuguese continental shelf, 2006–2009 | Marine upwelling shelf | 33 functional groups + discards/detritus within model | ASSUMED strong; open supplement Table S2 | 3, 3, 3, 2, 2 | 13 | Appendix — marine saturation |
| `portuguese-tide-pools` | Cabo Raso, Raio Verde and nearby mainland shores | Marine rocky intertidal | 32 pool webs, 23–63 nodes / 105–518 links in GATEWAy | ASSUMED strong; PLOS supplements + GATEWAy | 2, 2, 3, 3, 1 | 11 | Appendix — marine saturation |
| `arrabida-mpa` | Arrábida Natural Park MPA | Marine protected coastal ecosystem | 884 taxa | ASSUMED strong; open article states supplementary data | 2, 3, 3, 1, 2 | 11 | Appendix — marine saturation + aggregation cost |
| `ria-formosa-reservoir` | Ria Formosa saltpan/fish-farm water reservoir | Coastal lagoon aquaculture reservoir | 14 compartments | INACCESSIBLE full diet matrix in this sweep | 3, 2, 3, 1, 1 | 10 | Appendix — richness + access |
| `sw-portugal-trawl` | South/southwest Portuguese shelf edge and slope | Marine slope/trawl ecosystem | 37 functional groups | Preprint full text located; supplements/matrix not independently checked | 2, 3, 3, 2, 1 | 11 | **Rejected — preprint + marine saturation** |

## Sweep log

Searches were run 2026-11-23. Query strings are recorded verbatim. A zero-hit search means that no resolved Portuguese community matrix surfaced; it does not prove that a database has no Portuguese taxon records. Direct API/document probes are logged separately.

### Web of Life

- Web query: `site:web-of-life.es Portugal "food web" Mondego Ria Formosa Aveiro` → no search result, so the catalog was queried directly.
- Direct catalog/API: `https://www.web-of-life.es/api/v1/networks.csv` → 330 network rows, filtered locally for `portugal`, `portuguese`, `mondego`, `tagus`, `tejo`, `sado`, `ria formosa`, `ria de aveiro`, `aveiro`, `guadiana`, `azores`, `madeira`, `berlenga`, `douro` and `minho`.
- Exactly one mainland food-web lineage: `FW_016` and `FW_016_01`, Mondego, weighted; `FW_016_01` reports 37 rows, 31 columns and 242 interactions and cites Baeta et al. 2011. The Azorean pollination and seed-dispersal records are outside scope.
- Records opened: `https://www.web-of-life.es/network/FW_016/` and `https://www.web-of-life.es/network/FW_016_01/`. Their extracted pages exposed the interface shell; catalog metadata and Mangal supplied the discovery-level details instead.

### GloBI

- Web queries: `site:globalbioticinteractions.org Portugal "food web" Mondego Ria Formosa Aveiro trophic`; `GloBI Mendonça Vinagre Tagus food web Portugal dataset`; `site:globalbioticinteractions.org "Baeta" Mondego food web`.
- No new bounded Portuguese whole-community matrix surfaced. Results were primary papers, taxon-level material or unrelated pages. GloBI was not used to reconstruct a local web from non-local taxon interactions.

### Mangal

- Web query: `site:mangal.io Portugal "food web" Mondego Ria Formosa Aveiro` → no search result; direct APIs used.
- Direct APIs: `GET https://mangal.io/api/v2/dataset?count=10000` → 175 datasets; `GET https://mangal.io/api/v2/network?count=10000` → 1,487 networks. Records were searched for the same Portuguese place-name set used for Web of Life.
- Only dataset 74 `baeta_2011` matched: networks 1064–1069 represent bare sediment and *Zostera* habitats in 1993, 1999 and 2001.
- Direct node/interaction endpoints returned: 1064 = 38/242; 1065 = 33/182; 1066 = 26/103; 1067 = 27/132; 1068 = 21/67; 1069 = 22/83. Node identities for 1068 were inspected. These are discovery-level counts, not independent source verification.

### Netzschleuder

- Web query: `site:networks.skewed.de Portugal foodweb "food web" Mondego` → no search result.
- Catalog entry opened: `https://networks.skewed.de/net/gateway_foodwebs`; complete archive `https://networks.skewed.de/net/gateway_foodwebs/files/gateway_foodwebs.csv.zip` downloaded in memory and all 19,212 node and 222,151 edge records searched.
- Thirty-two mainland Portuguese rock-pool webs were found, all cited to Mendonça et al. 2018: CR1P1–CR2P4, L1P1–L4P4 and RV1P1–RV2P4. Portuguese mainland components contain 23–63 nodes and 105–518 directed links. `L3P2` has 23 nodes / 105 links and is the lowest-curation-cost example. No Portuguese terrestrial or freshwater GATEWAy web was found.
- Taxon names containing `formosa` outside Portugal were discarded as false positives. Madeiran components were not promoted because this sweep is mainland-only.

### Ecopath / EcoBase publications

- Broad queries: `Portugal "food web" Ecopath trophic network estuary`; `Portugal Ecopath model diet matrix Tagus Sado Mondego Ria Formosa`; `Portugal "Ecopath" "diet matrix" estuary lagoon Mondego Aveiro Formosa`; `site:ecobase.ecopath.org Portugal Mondego "Ria Formosa" Aveiro`.
- Mondego: `"Modelling the effects of eutrophication" Baeta 2011 Mondego "37" diet matrix`; `"Modelling the effects of eutrophication, mitigation measures" DOI 2011 Baeta Niquil`; `"Baeta" "Mondego" "37" "Zostera" food web 2011`; `"Mass balanced models" Mondego 2006 "compartments" "diet matrix"`; `"Mass balanced models" "Mondego" 197 21 34 DOI`.
- Aveiro: `"Trophic web structure and ecosystem attributes" "Ria de Aveiro" 2015 diet matrix groups`; `"Trophic web structure and ecosystem attributes of a temperate estuarine system" Frontiers 2015`; `site:frontiersin.org "Ria de Aveiro" "26 functional groups"`; `"Trophic web structure" "Ria de Aveiro" Bueno-Pardo 2010`; `"Ria de Aveiro" Ecopath "diet composition" 26`; `"Trophic web structure and ecosystem attributes of a temperate coastal lagoon" DOI 2018 378 13 25`; `"Ria de Aveiro" 2018 "Table 2" "Diet composition matrix"`; `"Ria de Aveiro" 2018 "Diet composition matrix for the functional groups"`; `"Trophic web structure" "Ria de Aveiro" filetype:pdf -site:researchgate.net -site:academia.edu`; `site:ria.ua.pt "Trophic web structure" Aveiro Bueno-Pardo`; `"Trophic web structure" "Ria de Aveiro" "26" "birds" "keystone"`; `"Ria de Aveiro" Ecopath "26 functional groups" "Table" 2018`; `"Trophic web structure" "Ria de Aveiro" "Table 2" diet`; `"Trophic web structure" "Ria de Aveiro" "Table 3" diet`; `"Ria de Aveiro" "Diet composition matrix" "Table" Bueno-Pardo`.
- Ria Formosa: `"Trophic food web and ecosystem attributes" "Ria Formosa" Gamito Erzini diet matrix groups`; `"Ria Formosa" "14 compartments" diet composition Gamito Erzini`; `"Ria Formosa" Ecopath food web diet matrix functional groups Portugal -Gamito`.
- Portuguese shelf: `"First representation of the trophic structure" Portuguese continental shelf sardine DOI`; `"Portuguese continental shelf" Ecopath "functional groups" diet matrix Szalaj`; `"An ecosystem approach to pelagic fisheries management" Portuguese continental waters diet matrix`.
- Southern/southwestern slope: `"Modelling the impact of deep-water crustacean trawl fishery" DOI authors`; `"Southern and Southwestern Portuguese coasts" Ecopath functional groups diet matrix`; `"Modelling the impact" "Portuguese Southwestern" "functional groups"`.
- Other estuaries: `"Tagus estuary" Ecopath "food web" trophic model diet matrix`; `"Sado estuary" Ecopath "food web" trophic model diet matrix`.
- EcoBase search results confirmed registrations for the Mondego/Ria Formosa model lineage, but no additional Portuguese model with a clearer matrix route than the primary sources above. The 2006 Mondego and 2011 Baeta models are treated as related source lineages, not duplicate atlas candidates.

### figshare / Zenodo / Dryad

- Broad queries: `Portugal food web site:figshare.com OR site:zenodo.org OR site:datadryad.org trophic matrix`; `site:figshare.com Portugal "food web" Mondego Tagus Aveiro Formosa trophic`; `site:zenodo.org Portugal "food web" Mondego Tagus Aveiro Formosa trophic`; `site:datadryad.org Portugal "food web" Mondego Tagus Aveiro Formosa trophic`.
- No additional mainland whole-community edge-matrix deposit was found. Results were unrelated food-policy/additive material, taxon datasets, non-trophic networks or publications. The useful Portuguese shelf supplement is hosted by Inter-Research, not a general repository.

### Primary literature — estuaries, lagoons and coasts

- Broad queries: `Portugal "food web" "supporting information" trophic links coastal lagoon`; `Portugal "trophic network" "food web" matrix estuary published`; `Portugal wetland "food web" trophic matrix salt marsh lagoon`; `Portugal "food web" 2026 trophic network matrix ecosystem`.
- Tagus: `"Potential impacts of climate change and humans" Tagus Estuary food web 2019 PDF`; `"Three versions of the Tagus Estuary" food web past present future`; `"meps12932" supplementary food web matrix`.
- Small intermittent estuaries: `"Short food chains, high connectance and high cannibalism" Portugal estuaries`; `"meps12401" food web Portugal`; `"small intermittent estuaries" Portugal food web matrix Mendonça Vinagre`.
- Coastal lagoons: `"Short food chains, highly diverse and complex food web networks" Portugal DOI`; `"Ria de Alvor" "food web" matrix supplementary`; `"Short food chains" "e00341" supplementary data`; `"Ria de Aveiro" "Ria de Alvor" "Ria Formosa" "trophic species" 2024`; `"Short food chains, highly diverse" "taxa" "Ria Formosa"`; `"S2352249624000077" pdf`; `"Ria Formosa" "blue crab" "most connected" food web 2024`.
- Rocky shores and tide pools: `"CR1P1" Portugal food web`; `GATEWAy Portugal CR1P1 food web citation rocky shore`; `Portugal rocky shore "food web" matrix trophic interactions`; `Mendonca et al 2018 Portugal rocky intertidal food web CR1P1 L1P1`; `"Mendonça" 2018 "food web" Portugal intertidal`; `"CR1P1" "Mendonca"`; `"Food web of the intertidal rocky shore" Vinagre DOI 110 53 60`.
- Recent coastal networks: `"Changing webs" "tidal cycle" Portugal food web data`; `"Network analysis reveals humans as top predators" Arrabida DOI food web 2025`; `"Network analysis reveals humans" Arrábida "species" "links"`; `"Network analysis reveals humans as top predators" DOI "Ecological Complexity"`.
- The 2023 tidal-cycle rocky-reef paper was recorded as a related temporal network study, not promoted over the directly countable GATEWAy tide-pool components while marine remains saturated.

### Primary literature — terrestrial and freshwater

- Queries: `Portugal terrestrial "food web" trophic network matrix montado forest soil`; `Portugal freshwater reservoir lake "Ecopath" food web diet matrix`; `Portugal stream river "food web" trophic links matrix published`; `Portugal forest "food web" trophic interactions network dataset`; `Portugal "soil food web" energy flux trophic groups`.
- No resolved mainland Portuguese terrestrial forest, montado, grassland or soil community matrix was found. Algarve nematode and northern-forest soil studies describe assemblages or selected functional groups, not a complete 15–25-node feeding matrix.
- No additional Portuguese lake, reservoir or river matrix was found. Stream typology, isotope, contaminant and single-species diet papers are not substitutes for a community edge list. Freshwater is saturated in any event.
- Pollination and seed-dispersal networks, including Azorean records, were excluded rather than converted into feeding webs.

### Metadata and direct document probes

- Crossref title queries were run for the Aveiro, 2024 coastal-lagoon, Arrábida, Ria Formosa reservoir, Vinagre rocky-shore and Patrício Mondego papers. Successful metadata checks confirmed Aveiro DOI `10.1016/j.ecolmodel.2018.03.009`, Arrábida DOI `10.1016/j.ecocom.2025.101134`, and Vinagre 2015 DOI `10.1016/j.marenvres.2015.07.016`; some requests returned HTTP 429 and were not treated as evidence of absence.
- Direct DOI metadata: `https://api.crossref.org/works/10.1016/j.fooweb.2024.e00341` confirmed Vinagre & Gastón, *Food Webs* 38, e00341.
- The 2024 lagoon article HTML and PDF probes returned HTTP 403 for full text; only the open article record/abstract and indexed snippets were used. No matrix cells are claimed.
- A guessed Inter-Research abstract URL at volume 595 returned an unrelated Baltic paper and was discarded. The correct Mendonça & Vinagre source is volume 587, pages 17–30.

**Documents and records actually opened:** Web of Life catalog CSV and FW_016 records; Mangal dataset/network APIs and all node/interaction count endpoints for networks 1064–1069; Netzschleuder GATEWAy entry and full CSV archive; [Baeta et al. publication record](https://joanapatricio.com/publications/); [Ria de Aveiro article record](https://www.sciencedirect.com/science/article/abs/pii/S0304380018300991), [2015 conference abstract](https://www.frontiersin.org/10.3389/conf.fmars.2015.03.00184/event_abstract) and Crossref metadata; [Vinagre et al. 2019 open Tagus paper](https://www.int-res.com/articles/meps_oa/m616p013.pdf) and [supplement](https://www.int-res.com/articles/suppl/m616p013_supp.pdf); [Vinagre & Costa 2014](https://www.int-res.com/articles/meps2014/503/m503p011.pdf); [Mendonça & Vinagre 2018](https://www.int-res.com/articles/meps2017/587/m587p017.pdf) and [supplements](https://www.int-res.com/articles/suppl/m587p017_supp.pdf); [Mendonça et al. 2018 tide-pool paper](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0200066); [Vinagre & Gastón 2024 article record](https://www.sciencedirect.com/science/article/pii/S2352249624000077); [Veiga-Malta et al. 2019](https://www.int-res.com/articles/meps2019/617/m617p323.pdf) and [supplement Table S2](https://www.int-res.com/articles/suppl/m617p323_supp.pdf); [Vinagre et al. 2015 abstract](https://pubmed.ncbi.nlm.nih.gov/26275753/); [Vinagre et al. 2025 Arrábida article](https://www.sciencedirect.com/science/article/pii/S1476945X25000194); [Gamito & Erzini 2005 record](https://www.sciencedirect.com/science/article/abs/pii/S0304380004003849); and [Torres et al. 2019 preprint](https://arxiv.org/abs/1903.11458v1) with full preprint PDF. Discovery-level access is not Stage-2 verification.

---

## Tier 1 — build next

### Mondego Estuary benthic and *Zostera* webs — `mondego-benthic`
- **Biome / Region:** Temperate estuarine benthic/seagrass web · central Portugal · **Lat/Lng (approx):** 40.15, −8.85
- **Source:** Baeta, A., Niquil, N., Marques, J.C. & Patrício, J. (2011). Modelling the effects of eutrophication, mitigation measures and an extreme flood event on estuarine benthic food webs. *Ecological Modelling* 222: 1209–1221. DOI [10.1016/j.ecolmodel.2010.12.010](https://doi.org/10.1016/j.ecolmodel.2010.12.010). Web of Life `FW_016`/`FW_016_01`; Mangal dataset 74, networks 1064–1069. Earlier lineage: Patrício & Marques (2006), *Ecological Modelling* 197: 21–34; do not create a duplicate candidate.
- **Data access:** **ASSUMED (strong).** Web of Life labels the lineage weighted and reports 37 rows / 31 columns / 242 interactions for `FW_016_01`. Mangal exposes six networks with directly countable nodes and interactions. The matrices were counted at discovery level but not independently compared cell by cell with Baeta et al.; Stage 2 must resolve Web of Life's 37-row count versus Mangal's 38 nodes for network 1064 and check edge orientation/weights.
- **Raw size:** bare sediment: 38/242 (1993), 33/182 (1999), 26/103 (2001); *Zostera*: 27/132 (1993), 21/67 (1999), 22/83 (2001), nodes/links respectively · **Aggregation plan:** prefer the 1999 or 2001 *Zostera* web nearly raw at 21 or 22 nodes; alternatively reduce a bare-sediment web to ~22–25 nodes using source feeding guilds. Choose one habitat/year only; never pool snapshots to increase richness.
- **Data type:** weighted diet/flow links · **Provenance:** empirical Ecopath model synthesis using local field data and literature inputs.
- **Hard gates:** peer-reviewed publication pass · machine-readable matrices provisional pass · 15–25-node version available without splitting pooled groups · producer/detritus–invertebrate–consumer structure pass · estuary biome pass (2 live)
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 1 = **13**
- **Tier:** 1 · **Notes:** Best Portuguese candidate. Eutrophication, mitigation and the 2000/2001 flood provide an explainable before/during/after disturbance narrative, while *Zostera* and bare sediment offer distinct basal pathways. Nodes include microphytobenthos, phytoplankton, green macroalgae, detritus, zooplankton, bivalves, polychaetes, *Carcinus maenas*, *Crangon crangon* and other measured benthic consumers. Present this explicitly as the **south-arm benthic web**, not a complete estuary including all birds and pelagic fish.

### Ria de Aveiro tidal coastal lagoon — `ria-de-aveiro`
- **Biome / Region:** Temperate estuarine/coastal lagoon · NW Portugal · **Lat/Lng (approx):** 40.64, −8.75
- **Source:** Bueno-Pardo, J., García-Seoane, E., Sousa, A.I., Coelho, J.P., Morgado, M., Frankenbach, S., Ezequiel, J., Vaz, N., Quintino, V., Rodrigues, A.M., Leandro, S., Luis, A., Serôdio, J., Cunha, M.R., Calado, A.J., Lillebø, A., Rebelo, J.E. & Queiroga, H. (2018). Trophic web structure and ecosystem attributes of a temperate coastal lagoon (Ria de Aveiro, Portugal). *Ecological Modelling* 378: 13–25. DOI [10.1016/j.ecolmodel.2018.03.009](https://doi.org/10.1016/j.ecolmodel.2018.03.009).
- **Data access:** **ASSUMED (strong).** The article's Table 2 is indexed as the input diet matrix; the model and 26-group scope are confirmed by the peer-reviewed article record and Crossref. The full publisher text was not obtained in this sweep, and an earlier 2015 conference abstract is not being used as the primary citation. Stage 2 must obtain Table 2, the final balanced matrix if different, and all group definitions.
- **Raw size:** 26 functional groups / weighted links not counted · **Aggregation plan:** 26 → 25 nodes by one source-compatible merge only after inspecting the matrix; retain seagrasses, phytoplankton, zooplankton, detritus, principal fish/invertebrate groups and bird guilds. Do not split any pooled group.
- **Data type:** weighted Ecopath diet fractions and flows · **Provenance:** empirical model synthesis, with most inputs described as direct observations or study-site literature.
- **Hard gates:** peer-reviewed publication pass · printed matrix location provisional pass · one-node reduction plausible · producer–consumer–bird trophic structure pass · estuary biome pass
- **Scores:** data 3 · story 2 · geography 3 · cost 3 · recognition 1 = **12**
- **Tier:** 1 · **Notes:** Low aggregation cost and a broad lagoon community make this a strong companion or alternative to Mondego. Its story is benthic–pelagic coupling among seagrass, detritus, invertebrates, fishes and birds rather than a single famous apex predator. A 2023 bivalve-management model belongs to a later lineage and should not be mixed into the 2018 baseline without a separately scoped source decision.

### Tagus Estuary present-day food web — `tagus-estuary`
- **Biome / Region:** Large temperate estuary · Lisbon, Portugal · **Lat/Lng (approx):** 38.72, −9.10
- **Source:** Vinagre, C., Costa, M.J., Wood, S.A., Williams, R.J. & Dunne, J.A. (2019). Potential impacts of climate change and humans on the trophic network organization of estuarine food webs. *Marine Ecology Progress Series* 616: 13–24. DOI [10.3354/meps12932](https://doi.org/10.3354/meps12932), [open article](https://www.int-res.com/articles/meps_oa/m616p013.pdf). Underlying spatial web: Vinagre & Costa (2014), *MEPS* 503: 11–21, DOI [10.3354/meps10722](https://doi.org/10.3354/meps10722).
- **Data access:** **ASSUMED (verification risk).** The open 2019 paper identifies the 1970s, 2000s and 2100s webs and gives their sizes; Table S1 supplies feeding-link references. The inspected supplement does not print a complete pairwise matrix, and no database mirror was found. Stage 2 must obtain the authors' present-day matrix or a full supplement; if unavailable, mark inaccessible rather than reconstructing links from the bibliography.
- **Raw size:** present web 129 taxa / 104 trophic species; past 125 / 100; projected future 138 / 114 · **Aggregation plan:** use only the observed 2000s web, reducing 104 trophic species → ~20–24 source-coherent guilds; retain humans, major fish nurseries, important benthic pathways and commercial invertebrates. Decide explicitly how parasites are represented. Do not use the 2100 scenario as an observed web or mix time periods.
- **Data type:** qualitative binary links · **Provenance:** composite — local occurrence surveys plus gut/feeding evidence from Tagus and other locations.
- **Hard gates:** peer-reviewed publication pass · **full edge-matrix obtainability provisional** · aggregation plausible but substantial · rich trophic structure pass · estuary biome pass
- **Scores:** data 2 · story 3 · geography 3 · cost 2 · recognition 3 = **13**
- **Tier:** 1 (high-curation-risk) · **Notes:** Outstanding exhibit potential: humans feed on 45 present-day taxa (35% of available taxa), more than any other consumer; the web also documents losses and gains of fishes and the Chinese mitten crab between the 1970s and 2000s. The future milkshark story is useful context only and must not contaminate the present-day topology. This candidate ranks below Mondego on curation readiness despite its equal numerical score.

## Tier 2 — backlog

### Ria Formosa coastal-lagoon network — `ria-formosa-lagoon`
- **Biome / Region:** Shallow tidal estuarine/coastal lagoon · Algarve, southern Portugal · **Lat/Lng (approx):** 36.98, −7.95
- **Source:** Vinagre, C. & Gastón, C.L. (2024). Short food chains, highly diverse and complex food web networks in coastal lagoons. *Food Webs* 38: e00341. DOI [10.1016/j.fooweb.2024.e00341](https://doi.org/10.1016/j.fooweb.2024.e00341). [Open article record](https://www.sciencedirect.com/science/article/pii/S2352249624000077).
- **Data access:** **ASSUMED (verification risk).** The peer-reviewed open-access record confirms separate Ria de Aveiro, Ria de Alvor and Ria Formosa networks. Full-text/PDF probes returned HTTP 403 and no complete matrix or exact Ria Formosa count was obtained. Stage 2 must acquire the article's data/matrix; do not infer links from network diagrams.
- **Raw size:** highly resolved Ria Formosa network; taxa/trophic-species and link counts not extracted · **Aggregation plan:** choose Ria Formosa only and reduce its published trophic species to ~20–25 nodes; retain blue crab, commercial sparids, principal crabs/shrimps, gastropod prey, birds and basal groups. Ria de Alvor is a same-paper alternative, not a second ledger candidate here.
- **Data type:** qualitative · **Provenance:** composite — local species lists combined with published diets.
- **Hard gates:** publication pass · **matrix access provisional** · aggregation plausible pending exact raw list · trophic structure pass · estuary/coastal-lagoon biome pass
- **Scores:** data 2 · story 3 · geography 3 · cost 2 · recognition 1 = **11**
- **Tier:** 2 (high-curation-risk) · **Notes:** Invasive blue crab is among the five most connected species in Ria Formosa and the most connected in Ria de Alvor; sparids are generalist predators and birds dominate top trophic positions. Short paths suggest wide ripple effects, but this is a topological result, not measured cascade strength. Do not substitute the older 14-compartment saltpan-reservoir model for this whole-lagoon web.

### Portuguese small intermittent estuaries — `portuguese-intermittent-estuaries`
- **Biome / Region:** Small intermittently open estuary/coastal lagoon · Aljezur, Bensafrim, Odeceixe or Gilão, Portugal · **Lat/Lng (approx):** 37.20, −8.80 (choose one exact site during verification)
- **Source:** Mendonça, V. & Vinagre, C. (2018). Short food chains, high connectance and a high rate of cannibalism in food web networks of small intermittent estuaries. *Marine Ecology Progress Series* 587: 17–30. DOI [10.3354/meps12401](https://doi.org/10.3354/meps12401), [open article and supplements](https://www.int-res.com/articles/meps2017/587/m587p017.pdf). Local species lists derive from Cardoso's 2011 University of Lisbon PhD thesis.
- **Data access:** **ASSUMED (verification risk).** Open Supplement 1 lists taxa and Supplement 2 lists diet references; the paper states that pairwise matrices were constructed, but the inspected supplements do not expose those full matrices. Stage 2 must obtain one Portuguese matrix. Do not recreate it by assuming every literature-compatible feeding link occurs locally.
- **Raw size:** Portuguese webs contain 39–61 taxa and 26–36 trophic species each · **Aggregation plan:** select one estuary, preferably the smallest source-coherent web, and reduce 26–36 trophic species → ~20–25 nodes; retain *Pomatoschistus microps*, detritus, key macrobenthos and marine-fish predators. Never merge estuaries.
- **Data type:** qualitative · **Provenance:** composite — local open-phase community lists plus non-local published diets; the authors explicitly state that local diet evidence is unavailable for most taxa.
- **Hard gates:** publication pass · **full edge-matrix access provisional** · modest aggregation plausible · trophic structure pass · estuary biome pass
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 1 = **10**
- **Tier:** 2 (high-curation-risk) · **Notes:** Distinctive mouth-closure/nursery ecology, short food chains and very high omnivory. The generalist goby *P. microps* is a useful hub. The principal weakness is provenance: literature-derived possible links are not equivalent to locally observed interactions, and this limitation must remain visible.

## Appendix — recorded, not planned under current gates

### Portuguese continental shelf — `portuguese-continental-shelf`
- **Biome / Region:** Northeast Atlantic upwelling shelf, 30–200 m · mainland Portugal · **Lat/Lng (approx):** 39.3, −9.6
- **Source:** Veiga-Malta, T. et al. (2019). First representation of the trophic structure and functioning of the Portuguese continental shelf ecosystem: insights into the role of sardine. *Marine Ecology Progress Series* 617–618: 323–340. DOI [10.3354/meps12724](https://doi.org/10.3354/meps12724), [open article](https://www.int-res.com/articles/meps2019/617/m617p323.pdf) and [supplement](https://www.int-res.com/articles/suppl/m617p323_supp.pdf).
- **Data access:** **ASSUMED (strong).** Open Table S2 is explicitly the adjusted diet-composition matrix; Table 1 and Supplement Table S1 define groups and sources. Matrix not independently transcribed.
- **Raw size:** 33 functional groups, including named small pelagics, marine mammals and seabirds, with discards and detritus represented in the model · **Aggregation plan:** 33 → ~23–25 nodes; retain sardine, anchovy, chub/horse/Atlantic mackerels, hake, cephalopods, cetaceans, seabirds, zooplankton, macrozoobenthos, phytoplankton and detritus.
- **Data type:** weighted Ecopath diets/flows · **Provenance:** empirical model synthesis with extensive local stomach-content, survey and fisheries data.
- **Hard gates:** publication pass · matrix location provisional pass · aggregation pass · trophic structure pass · **marine saturation fail**
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 2 = **13**
- **Tier:** appendix · **Notes:** Best marine backup. Sardine declined sharply, links plankton to 19 consumer groups and had the second-highest overall ecosystem impact. Preserve model caveats: pedigree 0.54, borrowed parameters and sensitivity in cephalopod and fish groups. Do not mix this 2006–2009 baseline with later regime-shift snapshots.

### Mainland Portuguese rock-pool webs — `portuguese-tide-pools`
- **Biome / Region:** Marine rocky intertidal tide pools · Cabo Raso, Raio Verde and nearby shores · **Lat/Lng (approx):** 38.71, −9.49 and 39.28, −9.34
- **Source:** Mendonça, V. et al. (2018). What's in a tide pool? Just as much food web network complexity as in large open ecosystems. *PLOS ONE* 13(7): e0200066. DOI [10.1371/journal.pone.0200066](https://doi.org/10.1371/journal.pone.0200066). GATEWAy v1.0, [Netzschleuder mirror](https://networks.skewed.de/net/gateway_foodwebs). Related isotope context: Vinagre et al. (2015), *Marine Environmental Research* 110: 53–60, DOI 10.1016/j.marenvres.2015.07.016.
- **Data access:** **ASSUMED (strong).** PLOS states all data are in supporting information; GATEWAy supplies 32 mainland components cited to this paper. Nodes/links were counted at discovery level but not compared against every PLOS supplement row.
- **Raw size:** 23–63 nodes / 105–518 directed links per mainland pool in GATEWAy; `L3P2` = 23/105 · **Aggregation plan:** choose one pool only; `L3P2` is potentially usable nearly raw at 23 nodes, while richer pools require ~20–25 taxonomic/feeding guilds. Never merge pools or regions to construct a richer web.
- **Data type:** qualitative · **Provenance:** composite — complete local pool sampling plus published species diets.
- **Hard gates:** publication/database pass · machine-readable matrix provisional pass · raw-size option pass · producer–invertebrate–fish trophic structure pass · **marine saturation fail**
- **Scores:** data 2 · story 2 · geography 3 · cost 3 · recognition 1 = **11**
- **Tier:** appendix · **Notes:** Extremely tractable small networks with macroalgae, detritus, benthic invertebrates, shrimp, crabs and juvenile fishes. Their tiny spatial extent and literature-derived links limit flagship appeal. Taxonomic and encoding issues in GATEWAy require checking against PLOS rather than silent correction.

### Arrábida Natural Park marine protected area — `arrabida-mpa`
- **Biome / Region:** Temperate coastal marine protected area · west-central Portugal · **Lat/Lng (approx):** 38.47, −8.95
- **Source:** Vinagre, C., Almeida, L., Ronquillo, P., Mendonça, V., Frade, D., Gonçalves, E.J., Erzini, K. & Serrão, E.A. (2025). Network analysis reveals humans as top predators and the key role of cuttlefish in the food web structure of a marine protected area (Arrábida Natural Park). *Ecological Complexity* 63: 101134. DOI [10.1016/j.ecocom.2025.101134](https://doi.org/10.1016/j.ecocom.2025.101134). [Open article](https://www.sciencedirect.com/science/article/pii/S1476945X25000194).
- **Data access:** **ASSUMED (strong).** Open article states that data are in supplementary material; the 884-taxon matrix was not extracted. Full provenance and feeding-link methods require Stage-2 review.
- **Raw size:** 884 taxa / links not counted · **Aggregation plan:** 884 → ~20–25 nodes only through a defensible source guild key; retain humans, cuttlefish, swimming crabs, seabirds, dolphins, sharks and principal basal pathways. High curation risk; no arbitrary species picking.
- **Data type:** qualitative · **Provenance:** composite published network.
- **Hard gates:** publication pass · supplementary matrix provisional pass · **aggregation cost high** · trophic structure pass · **marine saturation fail**
- **Scores:** data 2 · story 3 · geography 3 · cost 1 · recognition 2 = **11**
- **Tier:** appendix · **Notes:** Exceptional human-supergeneralist and cuttlefish-hub story, with *Sepia officinalis* linking the MPA, Sado Estuary and fisheries. It remains behind the smaller marine candidates because reducing 884 taxa without inventing guilds is a major curation task.

### Ria Formosa water-reservoir Ecopath model — `ria-formosa-reservoir`
- **Biome / Region:** Saltpan/fish-farm water reservoir within Ria Formosa · southern Portugal · **Lat/Lng (approx):** 37.00, −7.90
- **Source:** Gamito, S. & Erzini, K. (2005). Trophic food web and ecosystem attributes of a water reservoir of the Ria Formosa (south Portugal). *Ecological Modelling* 181: 509–520. DOI [10.1016/j.ecolmodel.2004.02.024](https://doi.org/10.1016/j.ecolmodel.2004.02.024).
- **Data access:** **INACCESSIBLE in this sweep.** The abstract and citation are visible and describe a balanced site-based model, but no complete diet matrix was obtained. Do not reconstruct it from the abstract or companion feeding papers.
- **Raw size:** 14 compartments · **Aggregation plan:** none; below the 15-node minimum, and pooled compartments cannot be split without additional measured diet data.
- **Data type:** weighted Ecopath diets/flows · **Provenance:** empirical model synthesis, mostly locally estimated parameters.
- **Hard gates:** publication pass · **matrix access fail** · **15-node richness fail** · trophic structure pass · estuary/coastal-lagoon biome pass
- **Scores:** data 3 · story 2 · geography 3 · cost 1 · recognition 1 = **10**
- **Tier:** appendix · **Notes:** Good local data but too small for the atlas. It is a managed water reservoir similar to tidal/saltmarsh creeks, not the whole Ria Formosa. The 2024 whole-lagoon network is the valid candidate to pursue instead.

## Rejected scored candidate

### South/southwest Portuguese crustacean-trawl ecosystem — `sw-portugal-trawl`
- **Biome / Region:** Marine shelf edge and upper slope, 200–700 m · southern/southwestern Portugal · **Lat/Lng (approx):** 36.8, −8.5
- **Source:** Torres, M.A. et al. (2019). Modelling the impact of deep-water crustacean trawl fishery in the marine ecosystem off Portuguese Southwestern and South Coasts: I) the trophic web and trophic flows. [arXiv:1903.11458](https://arxiv.org/abs/1903.11458v1).
- **Data access:** full 37-group preprint located; supplementary group/diet files not independently obtained · **Raw size:** 37 functional groups · **Aggregation plan:** 37 → ~23–25 nodes if a peer-reviewed source and matrix later become available.
- **Data type:** weighted Ecopath model · **Provenance:** empirical/model synthesis for year 2000.
- **Scores:** data 2 · story 3 · geography 3 · cost 2 · recognition 1 = **11**
- **Tier:** rejected (**preprint-only source located; marine saturation**) · **Notes:** Strong rose shrimp–Norway lobster–red shrimp and discard-cascade story, but the located manuscript is not the preferred peer-reviewed/agency source. Revisit only if a final peer-reviewed publication and its diet matrix are identified and the marine cap changes.

## Other early rejects and scope notes

- **Guadiana ecohydrology and Sado/Tagus single-species feeding models:** process, carrying-capacity or taxon-specific studies do not provide a separate resolved whole-community matrix.
- **Ria de Aveiro 2015 conference abstract:** useful discovery lead only; the 2018 peer-reviewed article supersedes it. Frontiers explicitly states that the conference abstract was not peer reviewed.
- **Ria de Aveiro 2023 bivalve-management model:** related later model lineage, not mixed into the 2018 baseline or added as a duplicate candidate.
- **Tagus 1970s and 2100 webs:** the historical web is a possible separately sourced comparison; the 2100 web is a climate projection and not an observed atlas ecosystem. Only the 2000s web is scored.
- **Ria de Alvor:** same 2024 source as Ria Formosa and a valid alternative if its matrix is clearer; not duplicated in the ledger. Its blue-crab story is stronger, but one Algarve lagoon candidate is sufficient at this stage.
- **Portuguese rocky-shore isotope study:** Vinagre et al. 2015 establishes benthic and pelagic pathways but is not treated as a full pairwise matrix. The 2018 tide-pool networks are the auditable candidate.
- **Terrestrial, montado and soil studies:** biodiversity, nematode-assemblage and selected three-trophic-level biocontrol studies do not supply a complete community web. No terrestrial candidate is manufactured from species lists.
- **Freshwater:** no new resolved matrix surfaced, and freshwater is already saturated.
- **Azores and Madeira:** reserved for a separate Macaronesian sweep; existing deep-sea ledger entries are unchanged. Pollination and seed-dispersal networks are outside scope.

## Verification priorities

1. **`mondego-benthic`:** independently obtain Baeta et al.'s matrices and compare all six Mangal networks and Web of Life `FW_016_01`. Resolve 37 versus 38 nodes, weight orientation, imports/detritus treatment and exact dates. Choose one habitat/year; the 1999 *Zostera* web (21 nodes) or 2001 *Zostera* web (22 nodes) is the simplest candidate.
2. **`ria-de-aveiro`:** obtain the 2018 article's Table 2 and final balanced diet matrix, confirm all 26 group definitions and determine the least destructive one-group merge. Do not use the 2015 poster abstract as data.
3. **`tagus-estuary`:** obtain the actual 2000s pairwise matrix from the authors or a repository. The open article and reference list alone are insufficient. If the matrix is unavailable, downgrade to inaccessible; never reconstruct 129 taxa from feeding references. Preserve the observed/future boundary and make a deliberate parasite-policy decision.
4. **`ria-formosa-lagoon`:** access the 2024 full text and supporting data, establish exact Ria Formosa size and determine whether source trophic species support a non-arbitrary ≤25-node aggregation. Compare Ria de Alvor only as a same-source alternative.
5. **`portuguese-intermittent-estuaries`:** obtain one pairwise Portuguese matrix and assess the provenance cost of non-local diet links. Select one estuary and retain its open-phase scope; do not pool sites or infer every literature-compatible link.
6. **Appendix:** no immediate verification is needed for marine candidates while saturation remains. If the cap lifts, verify `portuguese-continental-shelf` first. The Ria Formosa reservoir remains blocked by richness even if its matrix appears; `sw-portugal-trawl` requires a peer-reviewed source before reconsideration.
