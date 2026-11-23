# Region: Costa Rica — terrestrial, freshwater, estuarine & surrounding marine waters
**Researched:** 2026-11-23 · **Status:** complete (Stage 1 — awaiting independent verification)

**Repo context at sweep time:** 16 webs live; Costa Rica has no implemented pin and no previous ledger row. Biome saturation: marine 6 (saturated), freshwater 3 (saturated), grassland 3 (saturated), estuary 2, wetland 1, desert 1, tropical terrestrial 0. Scope: mainland Costa Rica, Isla del Coco, Pacific and Caribbean coastal waters, and the named Costa Rica Dome offshore ecosystem. The country was treated as one target, consistent with earlier country sweeps, not as a continent-scale region. Out of scope: Panama, Nicaragua, other eastern Pacific islands, non-trophic mutualistic networks, and host–parasitoid-only networks.

**Outcome:** nine candidates were fully screened. Two weighted Ecopath estuary models pass every gate at discovery level: Gulf of Nicoya (21 groups) and Golfo Dulce (20 living groups plus detritus). Two classic carrion webs are Tier 2: a 27-node/47-link dog-carcass web near the University of Costa Rica and a 46-node/127-link wet-forest toad-carrion web on the Osa Peninsula. Five candidates are appendix-only: Isla del Coco and Costa Rica Dome are blocked by marine saturation; coastal streams by freshwater saturation and unresolved access to the original matrices; the dry-forest toad web lacks trophic depth; and the two *Heliconia* webs are below the 15-node minimum. All accessibility labels are Stage 1 assessments, not independent verification.

## Sweep log

Searches were run 2026-11-23. Query strings are recorded verbatim. Negative means no resolved Costa Rican community web surfaced, not that a database has no Costa Rican taxon records.

- **Web of Life:** `site:web-of-life.es "Costa Rica" food web`; `site:web-of-life.es Cornaby Seifert Jiron food web` → no Costa Rican food-web entry surfaced.
- **GloBI:** `site:globalbioticinteractions.org "Costa Rica" "food web"`; `site:globalbioticinteractions.org "cornaby_1974" OR "jiron_cartin_1981" OR "seifert_1976a"`; `site:globalbioticinteractions.org "A Community Matrix Analysis of Heliconia"` → generic GloBI pages and taxon-level material only. The [sources page](https://www.globalbioticinteractions.org/sources) was opened but its dataset table is dynamically loaded; no independently identified Costa Rican community matrix was confirmed.
- **Mangal, web search:** `site:mangal.io "Costa Rica" food web` → the API was more informative than indexed pages. Direct `GET https://mangal.io/api/v2/dataset?count=1000` returned 181 datasets, including three Costa Rican trophic datasets: `cornaby_1974` (91), `jiron_cartin_1981` (99), and `seifert_1976a` (118). The Monteverde bird–fruit dataset (67) is mutualistic and out of scope.
- **Mangal, network/reference API:** `GET /api/v2/network?dataset_id={91,99,118}&count=1000`; `GET /api/v2/reference/{90,98,117}` → networks 1460 and 1461 (dry- and wet-forest toad carrion), 1471 (dog carcass), and 1500/1501 (*Heliconia imbricata* and *H. wagneriana*), with primary citations and coordinates. `all_interactions:false` is present on these records and must be considered during verification.
- **Mangal, node/link API:** `GET /api/v2/node?network_id={1460,1461,1471,1500,1501}&count=1000` and corresponding `/interaction` requests → full node lists were returned. Netzschleuder's mirror resolves the sizes as 20/19, 46/127, 27/47, 9/8, and 7/8 nodes/links respectively. The API's 1461 interaction response was not rendered by the fetch tool, so the 127-link count comes from Netzschleuder rather than a parsed Mangal response.
- **Netzschleuder:** `site:networks.skewed.de "Costa Rica" food web`; `site:networks.skewed.de "Costa Rica" "carrion" food web`; `site:networks.skewed.de/net/mangal "cornaby_1974" OR "jiron_cartin_1981" OR "seifert_1976a"`; direct [Mangal catalogue mirror](https://networks.skewed.de/net/mangal) → `cornaby_1974_19680208_1460`, `cornaby_1974_19680229_1461`, `jiron_cartin_1981_19770101_1471`, and both `seifert_1976a` networks, with the sizes above. The separate Turrialba visiting-ties network is social, not ecological.
- **Ecopath / broad and named systems:** `"Costa Rica" Ecopath food web diet matrix`; `"Gulf of Nicoya" "Ecopath" diet matrix trophic model`; `"Connecting a Trophic Model and Local Ecological Knowledge" Gulf Nicoya Costa Rica`; `"Cocos Island" Costa Rica Ecopath trophic model diet`; `"Isla del Coco" Ecopath food web trophic model`; `"Golfo Dulce" Costa Rica Ecopath trophic model food web`; `"Energy flow structure and role of keystone groups" "Isla del Coco"`; `"A pilot trophic model for Golfo Dulce"`; `"Isla del Coco" "Ecopath" "groups" Fourrière 2019 diet matrix`; `"Energy flow structure" "Isla del Coco" pdf Fourriere Wolff`; `site:ecobase.ecopath.org "Isla del Coco"`; `"Golfo de Nicoya" EcoBase model groups`; `"A pilot trophic model for Golfo Dulce" "diet" "Table"`; `"Golfo Dulce" "21" "Ecopath" diet composition`; `"Diet matrix of all functional groups" "Gulf of Nicoya"`; `"Costa Rica" lake reservoir wetland Ecopath "food web"`; `"Costa Rica" Caribbean coral reef Ecopath "food web" model`; `"Costa Rica" "trophic model" -Nicoya -Golfo -Coco -Dome`; `"The Gulf of Nicoya (Costa Rica) Fisheries System" volume pages 2019` → three bounded models were confirmed. [EcoBase model 677](https://ecobase.ecopath.org/php/protect/base_model.php?lang=&provenance=web&ident=&pass=&action=base&model=677) is Gulf of Nicoya, estuary, 1993–95, 21 groups; [model 53](https://ecobase.ecopath.org/php/protect/base_model.php?lang=&provenance=web&ident=&pass=&action=base&model=53) is Golfo Dulce, bay/fjord, 1993–95, 21 groups including detritus. Isla del Coco has 31 groups and a predator–prey matrix in Table S3/Appendix A2.
- **Primary literature, broad:** `"Costa Rica" "trophic network"`; `"Costa Rica" "food web" supplementary data`; `"Costa Rica" mangrove "food web" matrix Wolff Koch`; `"La Selva" Costa Rica "food web" trophic matrix`; `"Phenotypic variation explains food web structural patterns" Costa Rica`; `"Costa Rica" "food web" "adjacency matrix"`; `"Costa Rica" "food web" "edge list" trophic`; `"Costa Rica" "food web" "diet matrix" -Nicoya -Golfo -Coco`; `"Costa Rica" rainforest "food web" quantitative matrix community` (search rate-limited); `"Costa Rica" "soil food web" trophic groups`; `"Costa Rica" soil "food web" energy flux matrix rainforest`; `"Palo Verde" Costa Rica "food web" trophic network`; `"Térraba" OR "Térraba-Sierpe" "food web" trophic model` → the useful resolved networks are documented below. Isotope plots, nematode food-web indices, single-species diets, and four-species modules were not treated as whole-web matrices.
- **Primary literature, classic terrestrial webs:** `"The insect community of a toad carrion" Costa Rica Cornaby 1974`; `"The insect community of a dog carcass" Costa Rica Jirón Cartín 1981`; `"The insect communities in two Heliconia plant species" Costa Rica Seifert 1976`; `"Carrion Reduction by Animals in Contrasting Tropical Habitats" pages`; Crossref `GET https://api.crossref.org/works/10.2307/2989697` → Cornaby (1974), Jirón & Cartín (1981), and Seifert & Seifert (1976) citations confirmed. The open Seifert paper shows that the Mangal links are feeding observations, while its titular community matrices are competition/symbiosis coefficients; those different matrices must not be confused.
- **Primary literature, streams:** `"Food webs of streams draining tropical rain forests" Costa Rica`; `"Costa Rica" stream "food webs" stomach contents 51 species 5420`; `"Food-web structure of coastal streams in Costa Rica" DOI` → Winemiller et al. (2011), four streams, 51 fish species/5,420 stomachs and 82 taxa/240 isotope samples. The open author PDF was read. It reuses volumetric diets from Winemiller (1983, 1990) and Winemiller & Morales (1989), but does not print a complete adjacency matrix.
- **Primary literature, other marine:** `"Costa Rica" cold seep "food web" matrix`; `"Costa Rica Dome" "food web" model trophic flows`; `"Methane-carbon flow into the benthic food web" Costa Rica supplementary matrix` → the cold-seep paper is a crab diet/carbon-source study, not a community web. The Dome paper is a 19-stock/116-flow inverse model, with flows including non-trophic export and nutrient pathways.
- **figshare / Zenodo / Dryad, broad:** `site:figshare.com "Costa Rica" "food web"`; `site:zenodo.org "Costa Rica" "food web"`; `site:datadryad.org "Costa Rica" "food web"` → Gulf of Nicoya supplementary material on Frontiers figshare; bromeliad deposits on Dryad/Zenodo; no additional classic carrion or *Heliconia* matrix deposit.
- **figshare / Zenodo / Dryad, targeted:** `site:figshare.com "Gulf of Nicoya" trophic model diet matrix`; `site:zenodo.org "Gulf of Nicoya" food web OR Ecopath`; `site:datadryad.org "Gulf of Nicoya" food web OR Ecopath`; `site:figshare.com "Isla del Coco" trophic model`; `site:zenodo.org "Isla del Coco" Ecopath`; `site:datadryad.org Costa Rica carrion food web Cornaby Jiron`; `site:figshare.com "Costa Rica" bromeliad "food web"`; `site:zenodo.org "Costa Rica" bromeliad "food web"`; `site:datadryad.org "Costa Rica" "trophic" "matrix"` → no additional whole-web matrix. The bromeliad experiment is explicitly Costa Rica-*like* but was assembled in French Guiana.
- **Bromeliad preprint check:** `"The effects of food web structure on ecosystem function exceeds" bromeliad Costa Rica`; `"Food web networks shift across a precipitation gradient" published` → the latter is a Brazilian-coast preprint, not Costa Rica; neither displaces the in situ candidates.

**Documents and records actually opened:** [Wolff (2006), Gulf of Nicoya/Caeté comparison](https://tropicalstudies.org/rbt/attachments/suppls/sup54-1%20EACR%20IV/Wolff%20M%20-%20Biomass%20flow%20structure.pdf), including the statement that Table 1 contains the 21-group Gulf diet matrix; [Gulf of Nicoya article record](https://revistas.ucr.ac.cr/index.php/rbt/article/view/29645); [Golfo Dulce article record](https://revistas.ucr.ac.cr/index.php/rbt/article/view/29567); [Sánchez-Jiménez et al. (2019)](https://www.frontiersin.org/journals/marine-science/articles/10.3389/fmars.2019.00126/full); [Alms & Wolff (2020)](https://www.frontiersin.org/journals/marine-science/articles/10.3389/fmars.2020.00707/full); [Fourriére et al. (2019) article text](https://www.sciencedirect.com/science/article/pii/S0304380019300183); [Stukel et al. (2018) open manuscript](https://myweb.fsu.edu/mstukel/Manuscripts/Stukel_et_al-in_press-CRDInverse.pdf); [Winemiller et al. (2011) author PDF](http://aquaticecology.tamu.edu/wp-content/uploads/sites/3/2012/07/W-et-al.-2011-JTE-Costa-Rica-streams.pdf); [Seifert & Seifert (1976)](https://www.bio.fsu.edu/~miller/hierarchy_papers/pdfs/Seifert%20and%20Seifert%201976.pdf); [Trzcinski et al. (2016)](https://hal.science/hal-01933190v1/document); [Niemann et al. (2013)](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0074894); Mangal APIs and Netzschleuder mirror listed above. No matrix was transcribed and no candidate is marked VERIFIED.

---

## Tier 1 — build next

### Gulf of Nicoya, Pacific Costa Rica — `gulf-of-nicoya`
- **Biome / Region:** Tropical mangrove-fringed estuary · Pacific Costa Rica · **Lat/Lng (approx):** 9.8, −84.8
- **Source:** Wolff, M., Koch, V., Chavarría, J.B. & Vargas, J.A. (1998). A trophic flow model of the Golfo de Nicoya, Costa Rica. *Revista de Biología Tropical* 46(S6):63–79. [DOI 10.15517/rbt.v46i6.29645](https://doi.org/10.15517/rbt.v46i6.29645). Open reanalysis with matrix: Wolff, M. (2006). Biomass flow structure and resource potential of two mangrove estuaries: insights from comparative modelling in Costa Rica and Brazil. *Revista de Biología Tropical* 54(S1):69–86. [Open PDF](https://tropicalstudies.org/rbt/attachments/suppls/sup54-1%20EACR%20IV/Wolff%20M%20-%20Biomass%20flow%20structure.pdf). Updated model: Alms, V. & Wolff, M. (2019). The Gulf of Nicoya (Costa Rica) Fisheries System: Two Decades of Change. *Marine and Coastal Fisheries* 11(2):139–161. [DOI 10.1002/mcf2.10050](https://doi.org/10.1002/mcf2.10050).
- **Data access:** ASSUMED (strong) — the open 2006 paper explicitly locates group inputs and diet composition in Table 1; the table is present as a page image. The 2019 article also lists a supplementary diet matrix for the 2013 model. Neither matrix was independently transcribed or checked.
- **Raw size:** 21 Ecopath groups · **Aggregation plan:** use all 21 source groups; no aggregation or splitting
- **Data type:** weighted diet fractions and energy/biomass flows · **Provenance:** empirical/model synthesis from local surveys, fisheries and literature
- **Hard gates:** publication pass · matrix location provisional pass · 15–25-node size pass · trophic structure pass · biome saturation pass (estuary 2 live)
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 2 = **14**
- **Tier:** 1 · **Notes:** Best Costa Rican candidate. Mangrove detritus feeds shrimp, which convert it into prey for many fish predators; the source reports severe shrimp overexploitation and associated food-web effects. Later papers add a two-decade fisheries comparison and ENSO-driven bottom-up variation. Stage 2 should decide explicitly between the 1993–95 and 2013 snapshots, not blend them, and inspect the original/updated diet matrices before curation.

### Golfo Dulce, southern Pacific Costa Rica — `golfo-dulce`
- **Biome / Region:** Deep tropical fjord-like estuary · southern Pacific Costa Rica · **Lat/Lng (approx):** 8.6, −83.3
- **Source:** Wolff, M., Hartmann, H.J. & Koch, V. (1996). A pilot trophic model for Golfo Dulce, a fjord-like tropical embayment, Costa Rica. *Revista de Biología Tropical* 44(S3):215–231. [Article record](https://revistas.ucr.ac.cr/index.php/rbt/article/view/29567). [EcoBase model 53](https://ecobase.ecopath.org/php/protect/base_model.php?lang=&provenance=web&ident=&pass=&action=base&model=53).
- **Data access:** ASSUMED — EcoBase confirms a 21-group model and supplies a repository route; the primary paper exists but its full diet table was not obtained during this sweep. Stage 2 must retrieve the paper/model and verify the complete matrix. This is not an accessibility verification.
- **Raw size:** 20 living compartments plus detritus = 21 groups · **Aggregation plan:** use all source groups; no aggregation
- **Data type:** weighted Ecopath diet/flow model by source type, matrix unopened · **Provenance:** empirical/model synthesis for 1993–95
- **Hard gates:** publication pass · matrix location provisional pass · raw size pass · trophic structure pass · biome saturation pass (source explicitly classifies it as a tropical estuary)
- **Scores:** data 3 · story 2 · geography 3 · cost 3 · recognition 2 = **13**
- **Tier:** 1 · **Notes:** A distinctive deep-estuary contrast to Nicoya: energy flow is dominated by pelagic levels I–III, while weak benthic–pelagic coupling causes much detritus to sediment out. Dolphins, sharks and large birds supply the top-predator/fishing-pressure story. Lower priority than Nicoya because matrix access is less direct and the cascade story is less sharply documented.

## Tier 2 — backlog

### Dog-carcass arthropod web, University of Costa Rica — `jiron-dog-carrion`
- **Biome / Region:** Premontane humid forest carrion microhabitat · San José, Costa Rica · **Lat/Lng (approx):** 9.933982, −84.076507 (Mangal point)
- **Source:** Jirón, L.F. & Cartín, V.M. (1981). Insect succession in the decomposition of a mammal in Costa Rica. *Journal of the New York Entomological Society* 89(3):158–165. [JSTOR 25009256](https://www.jstor.org/stable/25009256). Mangal dataset 99/network 1471; Netzschleuder Mangal mirror `jiron_cartin_1981_19770101_1471`.
- **Data access:** ASSUMED (strong) — Mangal returned 27 nodes and 47 directed field-observation links, and Netzschleuder independently reports 27/47. Stage 2 must compare every link against the original paper; Mangal's `all_interactions:false` flag and some erroneous taxonomy mappings require caution.
- **Raw size:** 27 nodes / 47 qualitative links · **Aggregation plan:** 27 → ~22–25 nodes by merging only source-resolved life stages or taxonomically adjacent scavengers with identical trophic roles; preserve carcass, larval prey and predator guilds
- **Data type:** qualitative presence/absence scavenging and predation · **Provenance:** empirical field observation
- **Hard gates:** publication/database with primary citation pass · matrix location provisional pass · aggregation plausible · carcass → larvae/scavengers → predators structure pass · tropical terrestrial saturation pass
- **Scores:** data 2 · story 2 · geography 3 · cost 3 · recognition 1 = **11**
- **Tier:** 2 · **Notes:** A genuine small terrestrial web with blowfly larvae, beetles, ants, mites, arachnids, reduviids and carabids. Removing a predator guild could release carcass-feeding larvae, but the exhibit is less recognizable and less multi-level than a whole forest. Do not silently accept Mangal mappings such as *Cochliomyia* to *Musca*; use original names.

### Wet-forest toad-carrion web, Rincón de Osa — `osa-wet-toad-carrion`
- **Biome / Region:** Tropical wet lowland forest carrion microhabitat · Osa Peninsula, Costa Rica · **Lat/Lng (approx):** 8.534018, −83.508334 (Mangal point)
- **Source:** Cornaby, B.W. (1974). Carrion Reduction by Animals in Contrasting Tropical Habitats. *Biotropica* 6(1):51–63. [DOI 10.2307/2989697](https://doi.org/10.2307/2989697). Mangal dataset 91/network 1461; Netzschleuder mirror `cornaby_1974_19680229_1461`.
- **Data access:** ASSUMED — Netzschleuder reports 46 nodes/127 links and Mangal returned all 46 node records. The Mangal interaction response was not rendered in this sweep, and the original article was not read. Stage 2 must obtain and reconcile the full link list with Cornaby's paper.
- **Raw size:** 46 nodes / 127 qualitative links · **Aggregation plan:** 46 → ~22–25 nodes using source families and life stages, retaining separate predators, vertebrate scavengers and carcass consumers
- **Data type:** qualitative scavenging/predation network by database · **Provenance:** empirical field observation
- **Hard gates:** publication pass · complete matrix provisional pass · aggregation plausible · trophic structure pass in principle · tropical terrestrial saturation pass
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 1 = **10**
- **Tier:** 2 · **Notes:** Richer than the dog-carcass web and includes carrion flies, beetles, ants and saurians, but needs more aggregation and has weaker access confirmation. Treat as an alternative microcarrion exhibit, not an automatic second pin alongside the dry-forest web from the same paper.

## Candidate table

Scores use data, story, geography, aggregation cost and recognition in that order.

| Candidate id | Ecosystem | Raw data / access | Scores | Total | Tier / decisive gate |
|---|---|---|---|---|---:|---|
| `gulf-of-nicoya` | Mangrove-fringed tropical estuary | 21 groups; ASSUMED strong, open Table 1 | 3, 3, 3, 3, 2 | 14 | **1** |
| `golfo-dulce` | Deep fjord-like tropical estuary | 21 groups; ASSUMED via paper/EcoBase | 3, 2, 3, 3, 2 | 13 | **1** |
| `jiron-dog-carrion` | Premontane humid-forest carrion | 27 nodes / 47 links; ASSUMED strong via Mangal | 2, 2, 3, 3, 1 | 11 | **2** |
| `osa-wet-toad-carrion` | Wet lowland-forest carrion | 46 nodes / 127 links; ASSUMED via mirror | 2, 2, 3, 2, 1 | 10 | **2** |
| `isla-del-coco-shallow` | Oceanic island reefs/shallow water | 31 groups; Table S3; ASSUMED | 3, 3, 3, 2, 3 | 14 | appendix — marine saturation |
| `costa-rica-dome` | Open-ocean upwelling plankton web | 19 stocks / 116 total flows; ASSUMED strong | 3, 2, 3, 3, 2 | 13 | appendix — marine saturation |
| `costa-rica-coastal-streams` | Four rainforest coastal streams | 51 fish spp. + other taxa; original matrix unopened | 3, 3, 3, 2, 2 | 13 | appendix — freshwater saturation + access |
| `guanacaste-dry-toad-carrion` | Dry lowland-forest carrion | 20 nodes / 19 links; ASSUMED strong via Mangal | 2, 1, 3, 3, 1 | 10 | appendix — no trophic depth |
| `osa-heliconia-webs` | Two *Heliconia* phytotelm webs | 9/8 and 7/8 nodes/links; ASSUMED strong | 2, 1, 3, 1, 1 | 8 | appendix — richness gate |

---

## Appendix — recorded, not planned under current gates

### Isla del Coco shallow-water ecosystem — `isla-del-coco-shallow`
- **Biome / Region:** Tropical oceanic-island rocky/coral reefs and pelagic shallows ≤30 m · Costa Rica · **Lat/Lng (approx):** 5.53, −87.06
- **Source:** Fourriére, M., Alvarado, J.J., Cortés, J., Taylor, M.H., Ayala-Bocos, A., Azofeifa-Solano, J.C., Arauz, R., Heidemeyer, M., López-Garro, A., Zanella, I. & Wolff, M. (2019). Energy flow structure and role of keystone groups in shallow water environments in Isla del Coco, Costa Rica, Eastern Tropical Pacific. *Ecological Modelling* 396:74–85. [DOI 10.1016/j.ecolmodel.2019.01.004](https://doi.org/10.1016/j.ecolmodel.2019.01.004).
- **Data access:** ASSUMED — article text identifies 31 functional groups and places the predator–prey matrix in Table S3, Appendix A2. The supplement was not downloaded or checked.
- **Raw size:** 31 groups (13 fish, 17 non-fish, 1 detritus) · **Aggregation plan:** 31 → ~24–25 nodes by merging only source-defined fish/invertebrate guilds; retain hammerhead, tiger shark, other sharks and pelagic predators where source resolution permits
- **Data type:** weighted Ecopath diets/flows · **Provenance:** empirical/model synthesis based on island surveys and comparable systems
- **Hard gates:** publication pass · matrix location provisional pass · aggregation plausible · trophic structure pass · **marine saturation fail**
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 3 = **14**
- **Tier:** appendix · **Notes:** Exceptional flagship content and an inverted, predator-rich biomass pyramid; toothed cetaceans and tiger sharks are identified as strong interactors. Revisit if the marine gate changes or a distinct oceanic-island category is introduced.

### Costa Rica Dome upwelling ecosystem — `costa-rica-dome`
- **Biome / Region:** Open-ocean eastern tropical Pacific upwelling · offshore Costa Rica · **Lat/Lng (approx):** 9.0, −90.0
- **Source:** Stukel, M.R., Décima, M., Landry, M.R. & Selph, K.E. (2018). Nitrogen and Isotope Flows Through the Costa Rica Dome Upwelling Ecosystem: The Crucial Mesozooplankton Role in Export Flux. *Global Biogeochemical Cycles* 32:1815–1834. [DOI 10.1029/2018GB005968](https://doi.org/10.1029/2018GB005968); [open manuscript](https://myweb.fsu.edu/mstukel/Manuscripts/Stukel_et_al-in_press-CRDInverse.pdf).
- **Data access:** ASSUMED (strong) — the open paper points to Supporting Information S1, Table S1 and Data Set S1 for the full 116-flow model. Supplementary files were not opened.
- **Raw size:** 19 standing stocks / 116 unknown nitrogen flows, including trophic, detrital, nutrient-regeneration and export pathways · **Aggregation plan:** no aggregation by count, but curate only the biologically meaningful trophic compartments/links; do not present every biogeochemical flux as a feeding edge
- **Data type:** weighted nitrogen-flow inverse model · **Provenance:** empirical rate/isotope measurements assimilated into a constrained model
- **Hard gates:** publication pass · matrix location provisional pass · node count pass · trophic structure pass with scope caveat · **marine saturation fail**
- **Scores:** data 3 · story 2 · geography 3 · cost 3 · recognition 2 = **13**
- **Tier:** appendix · **Notes:** Strong microbial-loop and vertical-migration story: microzooplankton link tiny cyanobacteria to mesozooplankton, which actively transport nitrogen to depth. Less suitable for a general-audience species web and partly model-inferred; marine saturation is decisive.

### Four coastal rainforest streams, Corcovado & Tortuguero — `costa-rica-coastal-streams`
- **Biome / Region:** Tropical coastal freshwater streams with marine subsidies · Pacific and Caribbean Costa Rica · **Lat/Lng (approx):** 8.5, −83.5 and 10.5, −83.5 (four sites)
- **Source:** Winemiller, K.O., Zeug, S.C., Robertson, C.R., Winemiller, B.K. & Honeycutt, R.L. (2011). Food-web structure of coastal streams in Costa Rica revealed by dietary and stable isotope analyses. *Journal of Tropical Ecology* 27:463–476. [DOI 10.1017/S0266467411000277](https://doi.org/10.1017/S0266467411000277); [open author PDF](http://aquaticecology.tamu.edu/wp-content/uploads/sites/3/2012/07/W-et-al.-2011-JTE-Costa-Rica-streams.pdf). Original diets include Winemiller, K.O. (1990). Spatial and temporal variation in tropical fish trophic networks. *Ecological Monographs* 60:331–367.
- **Data access:** INACCESSIBLE as a complete matrix in this sweep — the 2011 paper reports volumetric diet analyses and trophic positions but not a full adjacency matrix. The underlying original matrices were not obtained. Isotope biplots cannot substitute for feeding links.
- **Raw size:** four streams; 51 fish species/5,420 stomachs overall, plus macroinvertebrates and basal resources; 82 taxa/240 isotope samples · **Aggregation plan:** choose one stream, then aggregate its source-resolved fishes, shrimps, insects and resources to ~20–25 nodes only after obtaining its full diet table; never merge all four into one measured web
- **Data type:** weighted volumetric fish diets plus qualitative/quantitative isotope evidence · **Provenance:** empirical
- **Hard gates:** publication pass · **complete edge-data gate fail at present** · aggregation plausible · four trophic levels pass · **freshwater saturation fail**
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 2 = **13**
- **Tier:** appendix · **Notes:** Attractive migratory-shrimp/snook/snapper and marine-subsidy story, with maximum trophic positions around 4–4.5. Not buildable from the 2011 paper alone. Revisit only if the original complete matrices are obtained and the freshwater gate changes.

### Dry-forest toad-carrion web, Finca La Pacifica — `guanacaste-dry-toad-carrion`
- **Biome / Region:** Tropical dry lowland forest carrion microhabitat · Guanacaste, Costa Rica · **Lat/Lng (approx):** 10.456804, −85.094433 (Mangal point)
- **Source:** Cornaby (1974), full citation above. Mangal network 1460; Netzschleuder mirror `cornaby_1974_19680208_1460`.
- **Data access:** ASSUMED (strong) — Mangal returned all 20 nodes and 19 directed field-observation scavenging links; Netzschleuder reports 20/19. Original-paper comparison remains for Stage 2.
- **Raw size:** 20 nodes / 19 qualitative links · **Aggregation plan:** raw size fits, but no aggregation can repair the topology
- **Data type:** qualitative presence/absence scavenging · **Provenance:** empirical field observation
- **Hard gates:** publication pass · matrix location provisional pass · raw size pass · **usable multilevel trophic structure fail** · biome saturation pass
- **Scores:** data 2 · story 1 · geography 3 · cost 3 · recognition 1 = **10**
- **Tier:** appendix · **Notes:** Every recorded edge runs from a consumer to the single toad-carrion resource: a star, not a multilevel food web. Do not infer predator links from the wet-forest network or general knowledge.

### *Heliconia imbricata* and *H. wagneriana* webs, Osa Peninsula — `osa-heliconia-webs`
- **Biome / Region:** Tropical wet-forest phytotelmata · Rincón de Osa, Costa Rica · **Lat/Lng (approx):** 8.706878, −83.488780 (Mangal point)
- **Source:** Seifert, R.P. & Seifert, F.H. (1976). A Community Matrix Analysis of *Heliconia* Insect Communities. *The American Naturalist* 110(973):461–483. [DOI 10.1086/283080](https://doi.org/10.1086/283080); [open PDF](https://www.bio.fsu.edu/~miller/hierarchy_papers/pdfs/Seifert%20and%20Seifert%201976.pdf). Mangal dataset 118/networks 1500 and 1501.
- **Data access:** ASSUMED (strong) — complete small feeding networks returned by Mangal and mirrored by Netzschleuder; open primary paper read. The paper's statistical community matrices measure competition/symbiosis and are not additional feeding matrices.
- **Raw size:** *H. imbricata* 9 nodes/8 links; *H. wagneriana* 7 nodes/8 links · **Aggregation plan:** none; both are below the 15-node minimum, and merging different host plants/seasons would not be a single measured web
- **Data type:** qualitative herbivory and detritivory · **Provenance:** empirical field observation/experiment
- **Hard gates:** publication pass · matrix location provisional pass · **15-node richness fail** · shallow trophic structure only · biome saturation pass
- **Scores:** data 2 · story 1 · geography 3 · cost 1 · recognition 1 = **8**
- **Tier:** appendix · **Notes:** Valuable natural-history records of floral parts, nectar, detritus and specialist insect larvae, but too small for the product. Do not pad them with mosquito/protozoan links excluded from the source study.

---

## Rejected in sweep

- **Costa Rica-like bromeliad rainfall experiment** — Trzcinski, M.K. et al. (2016). The effects of food web structure on ecosystem function exceeds those of precipitation. *Journal of Animal Ecology* 85:1147–1160. [DOI 10.1111/1365-2656.12538](https://doi.org/10.1111/1365-2656.12538); [Dryad 10.5061/dryad.b658g](https://datadryad.org/dataset/doi:10.5061/dryad.b658g). The experimental communities were assembled in French Guiana to resemble Costa Rican webs. They are not an in situ Costa Rican ecosystem and must not be mapped as one.
- **Costa Rica subduction-zone cold seep** — Niemann, H. et al. (2013). Methane-Carbon Flow into the Benthic Food Web at Cold Seeps – A Case Study from the Costa Rica Subduction Zone. *PLoS ONE* 8:e74894. [DOI 10.1371/journal.pone.0074894](https://doi.org/10.1371/journal.pone.0074894). Open paper documents bacterial-mat carbon use by *Paralomis* crabs and possible other resources, not a resolved community adjacency or diet matrix.
- **Del Agua nematode assemblages and banana soil-food-web studies** — abundance by nematode genus/trophic group and soil-food-web indices are available, but no observed consumer–resource link matrix was located. Feeding-guild assignments and indices cannot be expanded into a full web without inventing edges.
- **La Selva four-trophic-level experimental module and single-species diet studies** — useful for cascade mechanisms, but not a complete community web. Plant–herbivore, army-ant prey and frog/snake diet datasets are partial subwebs rather than a bounded whole ecosystem.
- **Food-web-based agroecology simulations** — generic/modelled consumer–resource networks associated with CATIE were not accepted as an empirical Costa Rican community web.
- **Mutualistic and host–parasitoid networks** — Monteverde bird–fruit interactions, La Selva plant–herbivore networks without higher trophic resolution, and the 2026 dry-forest plant–leafminer–parasitoid network are outside the current whole-food-web product surface.
- **Brazilian bromeliad precipitation-gradient preprint** — Guzman et al., [bioRxiv 10.1101/353920](https://doi.org/10.1101/353920), concerns Brazilian sites and statistically inferred interactions; it is out of geographic scope and not a published empirical Costa Rican matrix.

## Recommendation

Verify `gulf-of-nicoya` first. Stage 2 should obtain the 1998/2006 Table 1 and the 2019 supplementary matrix, choose one dated model snapshot, and check all 21 group names and diet fractions against the source. `golfo-dulce` is the second target: retrieve the complete 1996 paper or EcoBase model before treating its matrix as obtainable.

If a tropical terrestrial web is strategically preferred, verify `jiron-dog-carrion` before the larger Osa toad web. For both, compare Mangal/Netzschleuder links to the original papers and respect Mangal's incomplete-network flag. Do not combine carrion webs, *Heliconia* hosts, stream sites, or model years to manufacture richer nodesets. Isla del Coco and Costa Rica Dome remain record-only while marine is saturated; the coastal streams remain blocked by both matrix access and freshwater saturation.
