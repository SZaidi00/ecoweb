# Region: Canada — Boreal forest & Canadian Shield (gap-fill sweep)
**Researched:** 2026-11-23 · **Status:** complete (Stage 1 — awaiting independent verification)

**Scope:** Canada's boreal forest and Canadian Shield, with terrestrial and belowground systems prioritized. This is the pending “Boreal forest & Canadian Shield” sub-region named in `ECOSYSTEMS.md` §9, not a whole-Canada sweep. Excluded to avoid duplication: Yukon and the Kluane food-web literature already covered by `researched/tundra-boreal.md`; Arctic tundra; Arctic/sub-Arctic seas; Prairie saline wetlands and the grassland–parkland interior; Pacific, Atlantic and Gulf coasts; and southern Great Lakes lowlands. Aquatic finds inside the boreal/Shield boundary are recorded but cannot be promoted while freshwater is saturated. Pollination, seed-dispersal and host–parasitoid-only networks are outside the current product surface.

**Previous records:** Canada already has `bylot-island-tundra` and `kluane-boreal-forest` in `researched/tundra-boreal.md`, prairie records in `researched/north-america-great-plains.md`, and marine records in `verified/arctic-marine-research.md`. None is re-scored here. No existing file covers this boreal/Shield sub-region and no verified or implemented columns were changed.

**Repo context at sweep time:** 16 live webs in `data/webs/index.json`: marine 6 (saturated), freshwater 3 (saturated), grassland 3 (saturated), estuary 2, wetland 1, desert 1, boreal forest 0. Six pins are in North America, so geography scores are 2 rather than 3 for strong Canadian candidates that fill a new biome, and 1 for aquatic or out-of-scope systems. Wetland and non-grassland terrestrial candidates remain eligible.

**Outcome:** six candidates were fully screened. `white-river-peatland-soils` is Tier 1: two Ontario boreal fens have source-resolved 18-node webs, an open full feeding matrix, empirical biomass and modeled carbon flux under three warming scenarios. `boreal-tetrapod-metaweb` is Tier 2 with high curation risk because it is a 600-million-hectare literature metaweb, not a locally co-occurring Canadian community. Great Slave and Great Bear lakes are appendix-only under freshwater saturation, with Great Bear also below the 15-node minimum. Aspen Parkland is outside this sub-region and grassland-saturated; the New Brunswick budworm web is Acadian and dominated by host–parasitoid interactions. All access labels are Stage 1 assessments, not independent verification.

## Candidate table

Scores are data quality, story, geography, aggregation cost and recognition in that order. “Matrix” means the node/link, feeding-preference, flow or diet data needed for curation, not merely a food-web figure or species-abundance table. A numerical score does not override a hard-gate failure.

| Candidate id | Ecosystem | Biome | Raw size | Data access | Scores | Total | Tier / decisive gate |
|---|---|---|---:|---|---|---:|---|
| `white-river-peatland-soils` | Sphagnum and Carex fens near White River, Ontario | Boreal peatland/wetland soil | 2 sites × 3 warming scenarios; 18 nodes per web | ASSUMED strong; open supplement Tables S1–S4 obtained | 3, 3, 2, 3, 2 | 13 | **1** |
| `boreal-tetrapod-metaweb` | North American boreal tetrapods, summer and winter | Boreal forest composite | Summer 423 nodes/3,284 trophic links; winter 118/519 | ASSUMED strong; article + Dryad manifest, CSV not downloaded | 3, 3, 2, 1, 2 | 11 | **2 — high curation risk** |
| `great-slave-lake` | Great Slave Lake, Northwest Territories | Sub-Arctic/boreal freshwater lake | 19 Ecopath groups | ASSUMED strong; open report Table 3 diet matrix | 3, 3, 1, 3, 2 | 12 | Appendix — freshwater saturation |
| `great-bear-lake` | Great Bear Lake, Northwest Territories | Arctic/sub-Arctic freshwater lake | 13 Ecopath groups | ASSUMED strong; open report Table 3 diet matrix | 3, 2, 1, 3, 3 | 12 | Appendix — richness + freshwater saturation |
| `aspen-parkland-communities` | Aspen, willow, prairie and combined parkland webs, Manitoba | Aspen parkland/grassland transition | Aspen 47 nodes/157 links; combined 57/178 | ASSUMED; Mangal/Netzschleuder, original matrix unchecked | 2, 2, 1, 2, 1 | 8 | Appendix — out of scope + grassland saturation |
| `new-brunswick-budworm-web` | Balsam-fir/spruce-budworm food web, New Brunswick | Temperate Acadian forest | 124 nodes across five trophic levels | ASSUMED; open figures/SI, complete edge matrix not obtained | 2, 3, 1, 1, 2 | 9 | Appendix — scope + host–parasitoid surface + aggregation |

## Sweep log

Searches were run 2026-11-23. Query strings below are recorded verbatim. A zero-hit result means that no resolved in-scope community matrix surfaced; it does not prove that a database has no Canadian taxon records. Direct APIs and document probes are logged separately from web queries.

### Web of Life

- Web query: `site:web-of-life.es Canada boreal "food web"` → no results.
- Direct API: `GET https://www.web-of-life.es/api/v1/networks` → empty response. No Canadian boreal/Shield matrix was identified; this is a coverage limitation, not proof of absence.

### GloBI

- Web queries: `site:globalbioticinteractions.org Canada boreal "food web"`; `site:globalbioticinteractions.org "Daly" "boreal" interactions`; `site:globalbioticinteractions.org "Kluane" food web`; `site:globalbioticinteractions.org "Eveleigh" "spruce budworm"` → no bounded in-scope whole-community matrix surfaced.
- Direct APIs: `GET https://api.globalbioticinteractions.org/interaction?sourceDOI=10.1111%2Fgeb.13940&type=json&limit=10`; `GET https://api.globalbioticinteractions.org/interaction?sourceDOI=10.2307%2F1930270&type=json&limit=10` → both returned the same unrelated default records, so `sourceDOI` did not constrain results. Indexing of Daly et al. and Bird et al. is unconfirmed, neither way. GloBI remains useful for Stage-2 link-level cross-checks, not as a substitute for the source matrices.

### Mangal

- Web query: `site:mangal.io Canada boreal food web` → no results.
- Direct API: `GET https://mangal.io/api/v2/dataset?count=1000` → 181 datasets. Relevant trophic datasets were `bird_1930` (88), `tavares-cromar_williams_1996` (158) and `stewart_sprules_2011` (163). Duffin Creek and Lake Ontario are southern Great Lakes lowlands and were rejected by scope and freshwater saturation. Arctic marine datasets were excluded by boundary.
- Bird APIs: `GET /api/v2/network?dataset_id=88&count=1000`; `GET /api/v2/reference/87`; `GET /api/v2/node?network_id=1457&count=1000`; `GET /api/v2/interaction?network_id=1457&count=1000` → four Manitoba parkland networks (prairie 1454, willow 1455, aspen 1456, combined 1457) at 50.4218, −101.046; primary citation DOI 10.2307/1930270; 57 combined node records returned. The interaction response rendered empty. All four records have `all_interactions:false`, and visible taxonomy mappings require original-paper checks.
- Duffin/Lake Ontario APIs: `GET /api/v2/network?dataset_id={158,163}&count=1000`; `GET /api/v2/reference/{155,160}` → eight seasonal Duffin Creek networks and two Lake Ontario periods, with exact citations DOI 10.2307/2963482 and 10.1016/j.ecolmodel.2010.10.024. Neither was promoted.

### Netzschleuder

- Web queries: `site:networks.skewed.de Canada boreal food web`; `site:networks.skewed.de/net "boreal" food web`; `site:networks.skewed.de/net/mangal "bird_1930"` → no dedicated boreal/Shield entry surfaced.
- Direct APIs/catalog: `GET https://networks.skewed.de/api/nets`; `GET https://networks.skewed.de/net/mangal` → full network-name index and Mangal mirror opened. The mirror gives Bird prairie 31 nodes/131 links, willow 17/33, aspen 47/157 and combined 57/178. The 34-node count sometimes quoted for Aspen Parkland comes from older secondary compilations, not this Mangal combined network; Stage 2 must reconcile versions rather than mixing them.

### Ecopath / EcoBase publications and aquatic models

- Broad queries: `"Canadian Shield" Ecopath food web diet matrix`; `site:ecobase.ecopath.org "Great Bear Lake"`; `site:ecobase.ecopath.org "Great Slave Lake"` → no additional in-scope terrestrial model. The only boreal-terrestrial EcoBase lead remains Kluane, already recorded in `researched/tundra-boreal.md`.
- Great Bear queries: `"Trophic relationships in Great Bear Lake using the Ecopath model" groups`; `"Great Bear Lake" "18 functional groups" Ecopath` → the open 2015 report itself resolves the model as **13**, not 18, functional groups.
- Great Slave queries: `"A mass-balanced Ecopath model of Great Slave Lake" groups diet matrix`; `"A mass-balanced Ecopath model of Great Slave Lake" Janjua Tallman Howland 2014`; `"Great Slave Lake" "23 functional groups" Ecopath`; `Janjua Tallman 2015 "A mass-balanced Ecopath model of Great Slave Lake" "Can. Tech. Rep."`; `"A mass-balanced Ecopath model of Great Slave Lake" "3138" OR "3140" OR "3141" OR "3142"` → the open report's Methods resolves **19**, not 23, functional groups. No report number is asserted here.
- Both reports print weighted diet matrices, but freshwater saturation is decisive. Great Bear additionally fails the 15-node minimum and cannot be repaired by aggregation.

### figshare / Zenodo / Dryad / other open repositories

- Broad queries: `site:figshare.com Canada boreal "food web" matrix`; `site:zenodo.org Canada boreal "food web" matrix`; `site:datadryad.org Canada boreal "food web" matrix` → the useful results were Daly's boreal tetrapod deposit and soil/carrion studies; no additional local terrestrial whole-web matrix.
- Daly queries: `"A Trophic and Non-Trophic Seasonal Interaction Network" boreal forest Daly 2025`; `"Trophic and non-trophic seasonal interaction network" "dryad.547d7wmg9"`; `"interaction_data.csv" "boreal" Daly Frost`; `"Daly" "Brock-Fisher" "5037" food web summer winter`; `"Daly" "boreal" "421" "trophic" "great horned owl"`; `Daly Brock-Fisher Frost 2025 geb.13940 volume issue e13940` → article DOI 10.1111/geb.13940; Dryad DOI 10.5061/dryad.547d7wmg9; Zenodo 13998623 is the trait table, not the interaction matrix.
- Daly APIs: `GET https://datadryad.org/api/v2/datasets/doi%3A10.5061%2Fdryad.547d7wmg9`; `GET https://datadryad.org/api/v2/versions/325086/files` → public metadata and six-file manifest, including `interaction_data.csv` (590,320 bytes) and `data_references.csv`. Direct file-download routes returned HTTP 401 or a bot-check page, so the CSV itself was not parsed. This remains ASSUMED strong, not verified.
- Peatland queries: `"Nematode contributions to the soil food web" Canada boreal peatlands full text`; `"Restructuring of soil food webs reduces carbon storage potential" Barreto 2024 DOI`; `"Nematode contributions" Kamath Barreto Lindo 2022 sites Canada`; `"Restructuring of soil food webs reduces carbon storage potential in boreal peatlands" pdf`; `"Restructuring of soil food webs" "18" "trophic" nodes Table`; `"Restructuring of soil food webs" supplementary data matrix`; `site:publish.uwo.ca "Restructuring of soil food webs" pdf`; `site:scholaris.ca "Restructuring of soil food webs"`; `"Barreto" "Buchkowski" "Lindo" "18 trophic nodes"`; `"S0038071724001020" "mmc1"`; `Pettit Faulkner Buchkowski Kamath Lindo 2023 103509 DOI` → the Elsevier supplement `1-s2.0-S0038071724001020-mmc1.docx` was obtained and read. Tables S1–S4 contain biomass, the full 18×18 feeding matrix, parameters and six carbon-flux matrices. The article's “data on request” statement therefore does not prevent discovery-level matrix access.
- Peatland site queries: `"Restructuring of soil food webs reduces carbon storage potential" "Sphagnum" "Carex" site coordinates`; `"BRACE" boreal peatland "Sphagnum" "Carex" Ontario location`; `"Boreal peatland" "BRACE experiment" Ontario coordinates`; `"Large-scale experimental warming reduces soil faunal biodiversity" sites coordinates`; `"Sphagnum-dominated fen" "Carex-dominated fen" Lindo Ontario` → multiple site papers place both fens near White River at 48°21′N, 84°20′W. One thesis snippet gave a conflicting longitude, so Stage 2 should confirm the exact fen centroids rather than treat the shared site coordinate as two independent measurements.
- Budworm/carrion repository queries: `site:figshare.com "spruce budworm" "food web" Eveleigh`; `site:zenodo.org "spruce budworm" "food web" Eveleigh`; `site:datadryad.org "spruce budworm" "food web" Eveleigh`; `"Coherent whole food web responses" published Greyson-Gaito`; `"Coherent whole food web responses to outbreaking spruce budworm" data`; `Greyson-Gaito McCann spruce budworm food web dataset GitHub`; `"Vertebrate scavenging dynamics differ between carnivore and herbivore carcasses" location` → Dryad 10.5061/dryad.t175g contains budworm survivorship, not a whole-web matrix; the later preprint said its data were privately archived. Yukon scavenging deposits are out of scope and partial scavenging subwebs.

### Primary literature — terrestrial, wetland and aquatic

- Broad terrestrial queries: `Canada "boreal forest" "food web" matrix trophic`; `"Canadian Shield" "food web" trophic matrix`; `Canada boreal forest "trophic network" terrestrial`; `Quebec Ontario boreal forest "food web" matrix terrestrial`; `Canada boreal "soil food web" energy flux matrix`; `Canadian boreal forest carrion "food web"`; `Canada "boreal forest" "food web" "matrix" -Kluane -Daly`; `Manitoba Ontario Quebec "terrestrial food web" trophic interactions matrix`; `"Canadian boreal" "food web" supplementary data`; `"boreal peatland" Canada "food web" trophic links`; `Canada boreal "trophic network" "adjacency matrix" terrestrial`; `Canada boreal "interaction_data.csv" food web`.
- Aspen queries: `Bird 1930 "Aspen Parkland" food web biotic communities Canada`; `"Biotic Communities of the Aspen Parkland" pdf Bird 1930`; `"Biotic Communities of the Aspen Parkland of Central Canada" matrix`; `"Aspen Parkland" "34" food web Bird` → Bird's 1930 *Ecology* paper and database mirrors identified. The original paper was not read and the mirror's incomplete-network flags remain unresolved.
- Budworm queries: `Canada boreal "spruce budworm" "food web" matrix`; `"Eveleigh" 2007 spruce budworm "food web"`; `"food web of impressive dimension" Eveleigh 2007`; `Eveleigh 2007 "Fluctuations in density of an outbreak species" full citation food web`; `"Fluctuations in density" Eveleigh supplementary food web matrix`; `"Eveleigh" "2007" "food web" data supplementary New Brunswick`; `"spruce budworm" "food web" "matrix" Eveleigh` → open PNAS paper read. It explicitly calls the system temperate Acadian forest and counts 124 nodes across five levels; later “boreal” wording does not move it into this sweep's boundary.
- Caribou/scavenging queries: `Canada boreal "woodland caribou" "food web" trophic network matrix`; `Canada boreal forest "scavenging" "food web" matrix -Kluane` → apparent-competition modules and carcass-visit datasets, not complete community matrices. Kluane scavenging is excluded as previously covered and as a partial subweb.
- Aquatic queries included stable-isotope and DNA-barcoding Boreal Shield lake studies. These measure trophic position or fish diets, not complete community adjacency matrices, and are additionally blocked by freshwater saturation.

**Documents and records actually opened:** [Daly et al. article](https://onlinelibrary.wiley.com/doi/full/10.1111/geb.13940), [Dryad metadata](https://datadryad.org/dataset/doi:10.5061/dryad.547d7wmg9) and file manifest, [Zenodo trait record](https://zenodo.org/records/13998623); [Barreto et al. article](https://www.sciencedirect.com/science/article/pii/S0038071724001020) and [full supplement](https://ars.els-cdn.com/content/image/1-s2.0-S0038071724001020-mmc1.docx); [Pettit thesis](https://uwo.scholaris.ca/server/api/core/bitstreams/0965e218-cf02-4397-b71a-38d32e957ee4/content); [Kamath et al. article](https://www.sciencedirect.com/science/article/pii/S003140562200021X); [Great Bear report](https://waves-vagues.dfo-mpo.gc.ca/Library/358592.pdf); [Great Slave report](https://nwtdiscoveryportal.enr.gov.nt.ca/geoportaldocuments/report_-_2012_13_-_dfo__tallman__-_appendix_report_on_preliminary_approach_for_mass_balance_ecopath_gsl.pdf); [Eveleigh et al. open PNAS paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC2040472/); [Smith et al. barcoding study](https://pmc.ncbi.nlm.nih.gov/articles/PMC3130735/); Mangal APIs and the Netzschleuder Mangal mirror listed above. No web JSON was written and no matrix was transcribed into a build file.

---

## Tier 1 — build next

### White River boreal peatland soil webs, Ontario — `white-river-peatland-soils`
- **Biome / Region:** Boreal peatland/wetland belowground web · Sphagnum- and Carex-dominated fens near White River, Ontario, Canada · **Lat/Lng (approx):** 48.35, −84.33 (shared study-area coordinate; verify individual fens)
- **Source:** Barreto, C., Buchkowski, R.W. & Lindo, Z. (2024). Restructuring of soil food webs reduces carbon storage potential in boreal peatlands. *Soil Biology and Biochemistry* 193: 109413. DOI [10.1016/j.soilbio.2024.109413](https://doi.org/10.1016/j.soilbio.2024.109413); [open supplement](https://ars.els-cdn.com/content/image/1-s2.0-S0038071724001020-mmc1.docx). Companion/alternative experiment: Pettit, T., Faulkner, K.J., Buchkowski, R.W., Kamath, D. & Lindo, Z. (2023). Changes in peatland soil fauna biomass alter food web structure and function under warming and hydrological changes. *European Journal of Soil Biology* 117: 103509. DOI [10.1016/j.ejsobi.2023.103509](https://doi.org/10.1016/j.ejsobi.2023.103509); the open thesis prints a 15-node interaction matrix in Appendix B.
- **Data access:** **ASSUMED (strong).** The 2024 open supplement was obtained and read: Table S1 gives all 18 node biomasses for two sites × control/passive/active warming; Table S2 gives the full consumer–resource matrix and 0.3/0.5/0.7 preferences; Table S3 gives physiological parameters; Table S4 gives six modeled carbon-flux matrices. Links are assigned from primary literature and Potapov et al. (2022), not observed pairwise at each plot. Matrices were not independently checked, normalized or compared with model code.
- **Raw size:** six source webs / 18 nodes each (16 trophic groups + high- and low-quality detritus) · **Aggregation plan:** select one source site/scenario and use all 18 nodes; no aggregation or splitting. The two fens and three treatments are alternatives, not nodes or replicates to pool. Pettit's single-fen 15-node mesocosm web is an alternative story, not a second matrix to merge.
- **Data type:** mixed — qualitative links with published feeding preferences plus weighted, modeled carbon flux and empirical node biomass · **Provenance:** empirical model synthesis from site biomass measurements, literature feeding links and physiological parameters
- **Hard gates:** peer-reviewed publication pass · complete matrix provisional pass · raw 18 nodes pass · detritus–microbe–microbivore–predator structure pass · wetland/boreal peatland biome pass (wetland 1 live)
- **Scores:** data 3 · story 3 · geography 2 · cost 3 · recognition 2 = **13**
- **Tier:** 1 · **Notes:** Best candidate: a hidden belowground web connecting detrital quality, bacterial/fungal energy channels, mites, nematodes and spider predators to peatland carbon storage. Warming changes biomass and metabolic efficiency, offering measured perturbation context for the simulator. Stage 2 must distinguish literature-assigned links and modeled flows from measured diets; check Table S2 orientation and the unusual Zerconidae feeding row against the article/model; and clarify why high- and low-quality detritus biomass values are identical within each site in Table S1. Do not merge fens, warming treatments or the Pettit matrix to manufacture a richer web.

## Tier 2 — backlog

### North American boreal tetrapod metaweb — `boreal-tetrapod-metaweb`
- **Biome / Region:** Boreal forest, biome-wide literature composite · Canada and Alaska, not a single local community · **Lat/Lng (approx):** 60.0, −105.0 (representative Canadian boreal centroid only)
- **Source:** Daly, E.Z., Brock-Fisher, T.M. & Frost, C.M. (2025). A Trophic and Non-Trophic Seasonal Interaction Network Reveals Potential Management Units and Functionally Important Species. *Global Ecology and Biogeography* 34(1): e13940. DOI [10.1111/geb.13940](https://doi.org/10.1111/geb.13940). Dataset: Dryad DOI [10.5061/dryad.547d7wmg9](https://doi.org/10.5061/dryad.547d7wmg9); trait data: [Zenodo 13998623](https://zenodo.org/records/13998623).
- **Data access:** **ASSUMED (strong).** The article documents binary adjacency matrices; Dryad metadata and a six-file manifest are public, including `interaction_data.csv` and source references. The CSV was not downloaded because direct routes returned HTTP 401/bot checks. Article results and repository manifest were cross-checked, but links were not parsed.
- **Raw size:** 421 tetrapod species + 12 other groups; summer food web 411 species + 12 groups / 3,284 trophic links, winter 106 + 12 / 519. The full dataset contains 5,037 trophic and non-trophic interactions; Dryad describes 6,465 raw records · **Aggregation plan:** one season only → ~22–25 nodes using the 12 source-defined non-tetrapod groups plus a small number of source-trait/taxonomic guilds; preserve documented hubs such as great horned owl, common raven, red squirrel and snowshoe hare. Never include non-trophic layers as feeding edges.
- **Data type:** qualitative binary interactions · **Provenance:** composite literature metaweb spanning 1950–present and nearly 600 million hectares
- **Hard gates:** publication pass · matrix location provisional pass · aggregation possible but high-risk · seasonal trophic structure pass · boreal forest biome pass · **local realism caveat:** species do not all co-occur and the source is not Canada-only
- **Scores:** data 3 · story 3 · geography 2 · cost 1 · recognition 2 = **11**
- **Tier:** 2 (high-curation-risk) · **Notes:** Strong seasonal cascade story: great horned owl is a hub in both seasons; terrestrial invertebrates and graminoids dominate summer centrality; winter has more modules. This must be presented honestly as a biome-scale metaweb, not as a White River/Yukon/local Canadian web and not as an alternative to the already-researched Kluane empirical web. Stage 2 should decide whether the atlas accepts that scale before spending time on guild aggregation.

---

## Appendix — recorded, not planned under current gates

### Great Slave Lake, Northwest Territories — `great-slave-lake`
- **Biome / Region:** Deep sub-Arctic/boreal freshwater lake straddling Canadian Shield and Interior Plains · **Lat/Lng (approx):** 61.5, −114.0
- **Source:** Janjua, M.Y. & Tallman, R.F. *A mass-balanced Ecopath model of Great Slave Lake to support an ecosystem approach to fisheries management: Preliminary Results* (2015 lineage). [Open NWT CIMP report](https://nwtdiscoveryportal.enr.gov.nt.ca/geoportaldocuments/report_-_2012_13_-_dfo__tallman__-_appendix_report_on_preliminary_approach_for_mass_balance_ecopath_gsl.pdf).
- **Data access:** **ASSUMED (strong).** Open report read; Table 3 is the balanced prey-proportion diet matrix. It was not independently transcribed.
- **Raw size:** 19 functional groups including detritus · **Aggregation plan:** use all 19 source groups; no aggregation
- **Data type:** weighted Ecopath diets and biomass flows · **Provenance:** empirical model synthesis using local fisheries/limnology and literature diets, approximately 1985–1995
- **Hard gates:** agency publication pass · matrix provisional pass · 19 groups pass · trophic structure pass · **freshwater saturation fail (3 live)**
- **Scores:** data 3 · story 3 · geography 1 · cost 3 · recognition 2 = **12**
- **Tier:** appendix · **Notes:** Pike and burbot are the model's main keystone predators; fishing reduction and warming provide clear scenarios. Some fish diets were adjusted during balancing and many were qualitative initially. Revisit only if the freshwater gate changes; preserve the preliminary-model caveat.

### Great Bear Lake, Northwest Territories — `great-bear-lake`
- **Biome / Region:** Ultra-oligotrophic Arctic/sub-Arctic freshwater lake · **Lat/Lng (approx):** 66.0, −121.0
- **Source:** Janjua, M.Y., Tallman, R.F. & Howland, K.L. (2015). Preliminary analysis of trophic relationships in Great Bear Lake using Ecopath model. *Canadian Technical Report of Fisheries and Aquatic Sciences* 3137: vi + 24. [Open report](https://waves-vagues.dfo-mpo.gc.ca/Library/358592.pdf).
- **Data access:** **ASSUMED (strong).** Open report read; Table 3 prints the diet-composition matrix. It was not independently transcribed.
- **Raw size:** 13 functional groups (seven fish, four invertebrate, primary production and detritus) · **Aggregation plan:** none can satisfy the product minimum without inventing or importing nodes
- **Data type:** weighted Ecopath diets/flows · **Provenance:** preliminary empirical model synthesis using 1970s–1980s local data and literature estimates
- **Hard gates:** agency publication pass · matrix provisional pass · **15-node richness fail** · trophic structure pass · **freshwater saturation fail**
- **Scores:** data 3 · story 2 · geography 1 · cost 3 · recognition 3 = **12**
- **Tier:** appendix · **Notes:** Iconic, relatively pristine lake with lake trout as the main keystone and 39% of flows originating from detritus. The numerical score is high but cannot override either hard-gate failure. Do not pad the web with occasional pike, burbot or sucker that the source deliberately excluded.

### Aspen Parkland community webs, Manitoba — `aspen-parkland-communities`
- **Biome / Region:** Aspen parkland grassland–forest transition · central Manitoba, outside this sweep's boreal/Shield boundary · **Lat/Lng (approx):** 50.4218, −101.046 (Mangal point)
- **Source:** Bird, R.D. (1930). Biotic Communities of the Aspen Parkland of Central Canada. *Ecology* 11(2): 356–442. DOI [10.2307/1930270](https://doi.org/10.2307/1930270). Mangal dataset 88/networks 1454–1457; Netzschleuder Mangal mirror.
- **Data access:** **ASSUMED.** Database nodes, links and citation exist; original-paper matrices were not checked. All four Mangal records say `all_interactions:false`, and some taxonomy mappings are visibly suspect. Do not treat the mirror as verified ground truth.
- **Raw size:** prairie 31 nodes/131 links; willow 17/33; aspen 47/157; combined 57/178 · **Aggregation plan:** aspen 47 → ~22–25 nodes using the source's plant genera, insect guilds and bird/mammal trophic roles; do not union the four networks
- **Data type:** qualitative · **Provenance:** empirical field observations as indexed by Mangal
- **Hard gates:** publication/database pass · original matrix access unresolved · aggregation plausible · trophic structure pass · **out-of-scope boundary fail + grassland saturation fail (3 live)**
- **Scores:** data 2 · story 2 · geography 1 · cost 2 · recognition 1 = **8**
- **Tier:** appendix · **Notes:** Valuable classic terrestrial record for a future prairie-parkland extension, not a boreal/Shield build. The mirror's 47-node aspen and 57-node combined versions must be reconciled with older 34-node secondary compilations. Do not relabel Aspen Parkland as boreal forest to bypass the boundary or saturation gate.

### Balsam-fir/spruce-budworm web, New Brunswick — `new-brunswick-budworm-web`
- **Biome / Region:** Temperate Acadian forest · three New Brunswick plots, outside this sweep's boreal/Shield boundary · **Lat/Lng (approx):** 46.5, −66.0 (approximate only; Stage 2 must locate plots if re-scoped)
- **Source:** Eveleigh, E.S., McCann, K.S., McCarthy, P.C., Pollock, S.J., Lucarotti, C.J., Morin, B., McDougall, G.A., Strongman, D.B., Huber, J.T., Umbanhowar, J. & Faria, L.D.B. (2007). Fluctuations in density of an outbreak species drive diversity cascades in food webs. *PNAS* 104(43): 16976–16981. DOI [10.1073/pnas.0704301104](https://doi.org/10.1073/pnas.0704301104), [open article](https://pmc.ncbi.nlm.nih.gov/articles/PMC2040472/). Molecular follow-up: Smith, M.A. et al. (2011), *PLoS ONE* 6(7): e14424, DOI [10.1371/journal.pone.0014424](https://doi.org/10.1371/journal.pone.0014424).
- **Data access:** **ASSUMED.** Open article and figures read; Fig. 1 and SI Table 3 provide web structure and taxon codes, but a complete numerical edge list was not obtained. Later quantitative-work deposits were not found as a public whole-web matrix.
- **Raw size:** 124 nodes — host plant, 6 herbivores, 66 primary parasitoids + 21 primary entomopathogens, 23 secondary parasitoids + 1 secondary entomopathogen, and 6 tertiary parasitoids — across five levels · **Aggregation plan:** 124 → ~20–25 guilds only if the product scope changes to admit parasitoid/pathogen-heavy webs; substantial information loss is likely
- **Data type:** qualitative seasonal/annual links with some quantitative parasitism follow-up · **Provenance:** empirical long-term field sampling/rearing and experiments (1983–1993)
- **Hard gates:** publication pass · complete matrix access unresolved · aggregation high-risk · five-level structure pass · **out-of-scope Acadian location + host–parasitoid product-surface fail**
- **Scores:** data 2 · story 3 · geography 1 · cost 1 · recognition 2 = **9**
- **Tier:** appendix · **Notes:** Outstanding “birdfeeder effect”: rising budworm density recruits parasitoid diversity and hyperparasitoids, with stronger responses in heterogeneous forest. Keep for a future Acadian or parasitoid-inclusive sweep; do not call the primary study boreal merely because later papers use that adjective.

---

## Rejected in sweep

- **Kluane boreal forest and southwestern-Yukon carrion/scavenging datasets** — already covered by `researched/tundra-boreal.md`; carcass visitation is also a partial subweb, not the Kluane community matrix. No duplicate candidate row.
- **Duffin Creek seasonal macroinvertebrate webs, Ontario** — genuine Mangal networks and primary citation, but southern Great Lakes lowlands are outside scope and freshwater is saturated.
- **Offshore Lake Ontario 1987–1991 and 2001–2005 webs** — genuine two-period Mangal record, but outside the boreal/Shield target and freshwater-saturated.
- **Boreal Shield lake stable-isotope, mercury and fish-gut DNA studies** — trophic position, isotope niches or predator-specific diets, not complete community edge matrices; freshwater saturation also applies.
- **Woodland-caribou/moose/wolf apparent-competition studies** — excellent cascade mechanisms but partial predator–prey modules, not a resolved whole-community web.
- **Nematode feeding-group and other soil-fauna abundance studies without a link matrix** — abundance, body-size and trophic-index data cannot be expanded into feeding edges. Barreto et al. (2024) is not rejected because its supplement explicitly supplies the links and flows.
- **Pollination and host–parasitoid-only networks** — outside the product surface. The Eveleigh web is retained as an appendix record because it has five levels and follow-up food-web literature, not promoted.
- **Canadian Beaufort, Hudson Bay, Baffin Bay and other Arctic marine models** — previously researched/verified and explicitly outside this sub-region.

## Recommendation

Verify `white-river-peatland-soils` first. Stage 2 should independently obtain the 2024 article/supplement, select one site and scenario on scientific grounds, check all 18 nodes and Table S2's orientation/feeding assignments, and normalize only source-published preferences or fluxes. It should also decide whether the Pettit 15-node mesocosm offers a clearer perturbation story; do not blend it with the Barreto webs.

The Daly metaweb is a distant second. Verify its Dryad CSV and decide the biome-wide composite/aggregation policy before treating it as a Canadian exhibit. Great Slave and Great Bear remain record-only under freshwater saturation, Aspen Parkland belongs to a different sub-region, and the budworm web belongs to a future Acadian or parasitoid-inclusive scope.
