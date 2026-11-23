# Region: Spain — terrestrial, freshwater, wetland, estuarine & surrounding marine waters
**Researched:** 2026-11-23 · **Status:** complete (Stage 1 — awaiting independent verification)

**Scope:** Mainland Spain and the Balearic Islands, including terrestrial and freshwater systems, inland and coastal wetlands, estuaries and locally bounded coastal/shelf models. Country-scale scope is consistent with the earlier Scotland, Ireland, Thailand and Malaysia sweeps. The Canary Islands are excluded and should be treated as a separate Macaronesian sweep: their volcanic island ecosystems are not a useful extension of the Iberian mainland. Already recorded European candidates are not re-scored. Pollination, seed-dispersal and host–parasite networks are outside the current product surface.

**Previous records:** Spain had no `researched`, `verified` or `implemented` entry. The earlier Europe sweep logged one unsuccessful query for Doñana/Guadalquivir marsh webs but did not create a Spanish candidate or ledger row. This file supersedes that negative lead with a full country sweep; it does not modify the Europe file or any verified column.

**Repo context at sweep time:** 16 live webs in `data/webs/index.json`: marine 6 (saturated), freshwater 3 (saturated), grassland 3 (saturated), estuary 2, wetland 1, desert 1, temperate terrestrial forest 0. No Spanish or other European web is live. Consequently, new open-marine candidates are appendix-only even when their matrices and scores are strong. Estuarine and wetland candidates remain eligible. Inland temporary saline lakes are treated as wetlands, consistently with the existing `great-plains-saline-wetlands` candidate, not relabelled as ordinary freshwater lakes.

**Outcome:** two Tier 1 and two Tier 2 candidates pass discovery-level gates. `rias-baixas` is the strongest candidate: a 23-group weighted estuarine/coastal model with a printed diet matrix, two time snapshots and an explicit cetacean/fisheries story. `veta-la-palma-wetland` offers a high-recognition Doñana wetland story but has higher curation risk because its isotope and bird-flow evidence is spread across companion papers rather than one matrix. `san-simon-bay` and `los-monegros-salt-lakes` are small, tractable Tier 2 webs. `mar-menor-lagoon` has the highest raw score but its full matrix was not obtained and is therefore appendix-only. All Tier 1 access labels are **ASSUMED**, not verified.

## Candidate table

Scores are data quality, story, geography, aggregation cost and recognition in that order. “Matrix” means the node/link or diet data needed for curation, not merely a figure showing that a web exists.

| Candidate id | Ecosystem | Biome | Raw size | Data access | Scores | Total | Tier / decisive gate |
|---|---|---|---:|---|---|---:|---|
| `rias-baixas` | Ría de Arousa / Rías Baixas shelf | Estuary / coastal shelf | 23 functional groups | ASSUMED strong; open 2017 article Table 3 + 2021 supplement | 3, 3, 3, 3, 2 | 14 | **1** |
| `veta-la-palma-wetland` | Veta la Palma, Doñana Natural Park | Reconstructed brackish wetland | 18 fish + 31 macroinvertebrates + 94 bird species, plus basal sources | ASSUMED; Tables 1–3 and companion bird-flow tables, no single matrix | 2, 3, 3, 2, 3 | 13 | **1 (high-curation-risk)** |
| `san-simon-bay` | San Simón Bay, Ría de Vigo | Estuarine seagrass/intertidal | 26 nodes / 70 links | ASSUMED strong; Mangal 1567 + open manuscript Table 3 | 2, 2, 3, 3, 1 | 11 | **2** |
| `los-monegros-salt-lakes` | La Muerte and Piñol, Los Monegros | Temporary inland saline wetland | La Muerte 15 nodes / 38 links; Piñol 13 / 26 | ASSUMED strong; Mangal 1440 and 1439 | 2, 2, 3, 3, 1 | 11 | **2** |
| `mar-menor-lagoon` | Mar Menor, Murcia | Coastal hypersaline lagoon/wetland | 19 functional groups | **INACCESSIBLE** full text/matrix; repository file login-restricted | 3, 3, 3, 3, 3 | 15 | Appendix — access |
| `gredos-alpine-lakes` | Caballeros, Cimera and Grande de Gredos | High-mountain freshwater lakes | 64/344, 85/645 and 96/534 nodes/links | ASSUMED strong; open PLOS S1–S3 datasets | 2, 3, 3, 2, 1 | 11 | Appendix — freshwater saturation |
| `lake-ciso` | Lake Cisó, Banyoles | Stratified microbial freshwater lake | 16 nodes / 42 links | ASSUMED strong; Mangal 1475 + open article | 3, 2, 3, 3, 1 | 12 | Appendix — freshwater saturation + microbial-only scope |
| `andalusian-stream-webs` | Six Mediterranean streams, Andalusia | Freshwater streams | Six webs; size not established from retrieved text | **INACCESSIBLE** complete source matrices not located | 2, 2, 3, 2, 1 | 10 | Appendix — freshwater saturation + access |
| `gulf-of-cadiz` | Gulf of Cádiz | Marine shelf | 43 groups in paper; 44 nodes / 413 weighted links in mirrors | ASSUMED strong; Web of Life FW_005 + Mangal 91 | 3, 3, 3, 2, 2 | 13 | Appendix — marine saturation |
| `cantabrian-sea-shelf` | Cantabrian Sea shelf | Marine shelf | 28 trophic groups | ASSUMED strong; open paper diet/consumption tables | 3, 3, 3, 2, 2 | 13 | Appendix — marine saturation |
| `balearic-islands-shelf` | Balearic Islands | Marine island shelf | 994 species in 45 functional groups | ASSUMED; open article + supplement, matrix not extracted | 3, 2, 3, 2, 2 | 12 | Appendix — marine saturation |
| `ebro-delta-shelf` | Ebro Delta marine area | Marine coastal shelf | 55 functional groups | ASSUMED strong; open supplement Tables S6–S7 | 3, 3, 3, 2, 2 | 13 | Appendix — marine saturation |
| `santa-pola-fish-farm` | Santa Pola Bay sea-cage farm | Marine aquaculture | 41 functional groups | ASSUMED strong; open author PDF Table 3 | 3, 3, 3, 2, 1 | 12 | Appendix — marine saturation |
| `iberian-pond-metaweb` | Iberian Pond Network | Experimental freshwater mesocosms | 529 taxa / 279,841 potential links before trait filtering | ASSUMED conceptual data, not an observed community matrix | 1, 2, 3, 1, 1 | 8 | **Rejected — model-inferred links + freshwater saturation** |
| `donana-multiplex-network` | Doñana ecological multiplex | Mixed trophic and non-trophic interactions | Not a bounded single food-web matrix | INACCESSIBLE as an atlas web | 1, 2, 3, 1, 2 | 9 | **Rejected — not a single resolved food web** |

## Sweep log

Searches were run 2026-11-23. Query strings are recorded verbatim. A zero-hit search means that no resolved Spanish community matrix surfaced; it does not prove that a database has no Spanish taxon records. Direct API and document probes are logged separately from web queries.

### Web of Life

- Web queries: `site:web-of-life.es Spain food web trophic`; `"FW_005" "Cadiz" Web of Life download`.
- Direct catalog/API: `https://www.web-of-life.es/api/v1/networks.csv` → 330 network rows, filtered locally for `Spain`, `Spanish`, `Iberi`, `Doñana`, `Donana`, `Gredos`, `Cadiz`, `Catalan`, `Alboran`, `Balearic`, `Ebro`, `Galicia` and `Mar Menor`.
- Exactly one Spanish food-web record: **FW_005**, Cádiz, weighted, 44 species / 413 interactions, cited to Torres et al. 2013. The other Spanish hits were pollination and seed-dispersal networks and were excluded.
- Food-web record opened: `https://www.web-of-life.es/network/FW_005/`.

### GloBI

- Web queries: `site:globalbioticinteractions.org Spain "food web" trophic network`; `GloBI "San Simón Bay" Filgueira trophic web`; `site:globalbioticinteractions.org "Los Monegros" food web`.
- No new resolved Spanish whole-community web surfaced. GloBI does index Filgueira & Castro's San Simón feeding links and points back to the primary paper; Mangal provides the cleaner bounded network for this candidate.
- GloBI taxon records checked for San Simón consumers, including *Ruditapes decussatus*. These are cross-checks, not a replacement for the source matrix.

### Mangal

- Web queries: `site:mangal.io Spain food web ecological network`; `"Mangal" "massana_et_al_1996"`; `"Mangal" "alcorlo_et_al_2001"`; `"San Simon Bay" Mangal food web interactions nodes`; `"Los Monegros" Mangal food web Alcorlo interactions nodes`.
- Direct APIs: `GET https://mangal.io/api/v2/dataset?count=10000` → 175 datasets; `GET https://mangal.io/api/v2/network?count=10000` → 1,487 networks. Records were searched for all scope terms above.
- Food-web datasets found: `torres_2013` (Gulf of Cádiz, network 91), `alcorlo_et_al_2001` (Los Monegros, networks 1439–1442), `massana_et_al_1996` (Lake Cisó, 1475) and `filgueira_castro_2011` (San Simón, 1567). The Garajonay record is pollination and excluded.
- Direct node/interaction counts: Cádiz 44 / 413 weighted dietary-matrix links; La Muerte 1994 15 / 38; Piñol 1994 13 / 26; reduced 1996 snapshots 8 / 14 and 7 / 12; Lake Cisó 16 / 42; San Simón 26 / 70 qualitative links.

### Netzschleuder

- Web query: `site:networks.skewed.de Spain foodweb "food web"`.
- Catalog opened at `https://networks.skewed.de/`; `gateway_foodwebs` opened at `https://networks.skewed.de/net/gateway_foodwebs`.
- Complete `gateway_foodwebs.csv.zip` downloaded and all 19,212 node records searched by location and by Spanish place names. No Spanish GATEWAy web was found. Incidental hits were *Spanish grunt* and *Spanish hogfish* in the Caribbean and taxon names containing `spanish` in other webs, not Spanish locations. An Iberian-coordinate check found only Portuguese sites.
- The unrelated `R-V, Spain, 2003` network is not a food web.

### Ecopath / EcoBase publications

- Broad queries: `Spain Ecopath model diet matrix ecosystem functional groups`; `Spain Ecopath estuary lagoon "functional groups" "diet"`; `"Mar Menor" Ecopath food web diet matrix`; `"Albufera" Ecopath food web trophic model`; `"Alboran Sea" Ecopath diet matrix food web functional groups`; `"Balearic" Ecopath food web model diet matrix`; `"Ebro Delta" "food web" "functional groups" 2025 Ecopath`; `"Linking sea and land systems" Ebro Delta "functional groups"`.
- Cádiz: `"Gulf of Cadiz" Ecopath supplementary data diet matrix 40 functional groups`; `"Gulf of Cadiz" "44 functional groups" diet matrix Torres 2013 PDF`; `"Gulf of Cadiz" "43" "functional groups" Torres 2013`; `"Food-web structure of and fishing impacts on the Gulf of Cadiz" PDF Torres Coll Heymans`; `"Food-web structure of and fishing impacts on the Gulf of Cadiz" "43 functional groups" "diet matrix"`.
- Rías Baixas: `"Food-web interactions" "North-West Spain" 2020 diet matrix functional groups supplementary`; `"Food-web interactions in a coastal ecosystem influenced" PDF Paradell Lopez Methion Rogan`; `"Food-web interactions in a coastal ecosystem" "40 functional groups"`; `"Food-web interactions in a coastal ecosystem" "diet matrix"`; `"Food-web interactions in a coastal ecosystem" "Table 2" "diet"`; `"Ría de Arousa" Ecopath "food web modeling" diet matrix 2018`; `"Ecosystem maturity as a proxy of mussel aquaculture carrying capacity" PDF`; `"Ecosystem maturity as a proxy" "functional groups" Ría de Arousa`; `"Ría de Arousa" "diet matrix" "Ecopath" Outeiro`; `"Ria de Arousa" "Ecopath" "Table 2" diet`; `"Ría de Arousa" "22 functional groups" Ecopath`; `"Ría de Arousa" "23 functional groups" Ecopath`; `"Ría de Arousa" "24 functional groups" Ecopath`; `"Ría de Arousa" "2005 model" "diet" "23"`; `"Modelling ecosystem dynamics to assess the effect of coastal fisheries" PDF 23 functional groups`; `"Modelling ecosystem dynamics" "Ría de Arousa" "diet matrix"`; `"Modelling ecosystem dynamics" "Ría de Arousa" "Supplementary"`; `"Giralt Paradell" "Methion" "Rogan" "112175" pdf`; `"Modelling ecosystem dynamics to assess" "Table 2" "diet"`; `"Modelling ecosystem dynamics to assess" "diet composition"`; `"Rías Baixas shelf ecosystem" "diet matrix"`; `"Rías Baixas" "diet composition" "Ecopath"`; `"Ría de Arousa" "Table 3" "Ecopath" "diet"`; `"Giralt Paradell" "23" "diet matrix" "Rías Baixas"`.
- Cantabrian Sea: `"Effects of fisheries on the Cantabrian Sea Shelf ecosystem" diet matrix functional groups PDF`.
- South Catalan Sea: `"South Catalan Sea" Ecopath diet matrix supplementary 40 groups`; `"Trophic flows, ecosystem structure and fishing impacts in the South Catalan Sea" PDF diet matrix`.
- Balearic Islands: `"Trophic structure and fishing impacts" Balearic "Supplementary" "diet"`; `"Trophic structure and fishing impacts on an oligotrophic ecosystem" "Table A" diet matrix`.
- Ebro Delta: `"Ebro Delta" "diet matrix" "55 functional groups"`; `"Ebro Delta" Ecopath "Supplementary material" "Table" "diet" Ortega Lloret Coll`.
- Santa Pola: `"Trophic structure and energy fluxes around a Mediterranean fish farm" diet matrix 41 groups`.
- Gulf of Alicante: `"A food-web comparative modeling approach highlights ecosystem singularities" diet matrix Gulf Alicante PDF`.
- Deep NW Mediterranean: `"Food-web structure and vulnerability of a deep-sea ecosystem" NW Mediterranean 15 functional groups diet` → the located model actually has 20 groups and no primary producers; not promoted over the richer coastal candidates.
- EcoBase record opened for `Coll_1978_SCatalanSea`, model 420: 40 groups, Spain, 1978–1980.
- The 2018 Ría de Arousa mussel model and the 2020/2021 Rías Baixas model are treated as one preferred candidate lineage, not independent atlas candidates. The 2020 model has the clearer printed diet matrix and cetacean story.

### figshare / Zenodo / Dryad

- Broad queries: `Spain food web site:figshare.com OR site:zenodo.org OR site:datadryad.org`; `Spain "food web" "Dryad" trophic network ecosystem data`; `Spain "food web" "figshare" trophic network data matrix`; `site:zenodo.org Spain "food web" "trophic" matrix ecosystem -food-aid -additives`; `Spain "food web" matrix "Zenodo" trophic network ecosystem`.
- No additional Spanish whole-community matrix was found. Search results were dominated by food aid, additives, non-trophic interactions and non-Spanish webs.
- The PLOS high-mountain lake supplements are hosted by the journal rather than a general-purpose repository; the direct files were opened successfully.

### Primary literature — wetlands, estuaries and coasts

- Broad queries: `Spain wetland "food web" trophic matrix Doñana Ebro Delta Albufera`; `Spain estuary Ecopath "food web" Guadalquivir Urdaibai Ria`; `Spain "trophic network" "supplementary" food web species links`.
- Doñana/Veta la Palma: `"Doñana" "food web" trophic network matrix`; `"The effect of water management on extensive aquaculture food webs" diet matrix functional groups`; `"Veta la Palma" "Ecopath" food web diet matrix`; `"The effect of water management on extensive aquaculture food webs" PDF Coccia`; `"Veta la Palma" food web mixSIAR table diet contributions data`; `"The effect of water management on extensive aquaculture food webs" DOI 448 451 463`; `"A model for the future" "Veta la Palma" DOI Aquaculture 448`.
- San Simón: `"San Simon Bay" "food web" Filgueira Castro 2011 intertidal`; `"Food web structure of an intertidal zone" "San Simon" matrix`; `"San Simón Bay" Filgueira Castro "31" "food web"`; `"Study of the trophic web of San Simón Bay" PDF`; `"San Simón" food web Mangal 1567 nodes interactions`; `"San Simón" "food web" "Table 3" Filgueira sources consumers`; `"Study of the trophic web of San Simón Bay" DOI`; `"San Simón Bay" "10.1016/j.csr.2010"`.
- Mar Menor: `"Mar Menor" "food web" "functional groups" Ecopath`; `"Mar Menor" "Trophic models" 2011 food web functional groups`; `"Mar Menor" "Ecopath" Pérez-Ruzafa food web model`; `"Can an oligotrophic coastal lagoon support high biological productivity" PDF Mar Menor Ecopath`; `"Can an oligotrophic coastal lagoon support high biological productivity" filetype:pdf -sci-hub`; `"Mar Menor" "functional groups" "Ecopath" "diet matrix" 2020`; `"Can an oligotrophic coastal lagoon" "functional groups"`; `"Mar Menor" "Table 4" "diet" Ecopath 2020`; `"Assessment of environmental management effects" "Mar Menor" mass-balance models diet matrix`; `"Mar Menor ECOPATH model" "groups"`; `"Mar Menor" "diet composition" "Ecopath"`; `"104824" "Ecopath" "Table 1" Mar Menor`; `"Mar Menor" "pedigree" "diet" "Caulerpa" Ecopath`; `"Perez-Ruzafa-DBEE-Can-an-oligotrophic-coastal.pdf"`; `"Can an oligotrophic" "diet matrix"`; `"Can an oligotrophic" "Table 1" Ecopath`; `"Can an oligotrophic" "22" "functional"`; `"Can an oligotrophic" "18" "functional"`; `"Mar Menor" Ecopath "29 functional groups"`; `"Mar Menor" Ecopath "20 functional groups"`; `"Mar Menor" Ecopath "17 functional groups"`; `"Pérez-Ruzafa" "Morkune" "diet" "Mar Menor" Ecopath "Table"`; `"Mar Menor" Ecopath "32" "groups"`; `"Mar Menor" Ecopath "26" "groups"`; `"Mar Menor" Ecopath "31" "groups"`; `"Mar Menor" Ecopath "19" "groups"`; `"Mar Menor" Ecopath "18" "groups"`; `"Mar Menor" "model is composed of 19 functional groups"`.
- Ebro Delta: `"Ebro Delta" "food web" trophic network model`; `"Linking sea and land systems through food web models and value chains" Ebro Delta "functional groups"`.
- Other leads: the Cachón River invasive-crab study concerns trophic niches of five crabs, not a resolved estuarine community matrix. The Ebro blue-crab study is a pairwise isotope/mixing-model analysis, not a substitute for the 55-group model.

### Primary literature — freshwater and terrestrial

- Broad queries: `Spain freshwater lake "food web" trophic matrix Banyoles alpine`; `Spain terrestrial "food web" trophic network matrix Mediterranean forest`; `Spain soil "food web" energy flux matrix`; `Spain "food web" "trophic network" dataset matrix`.
- Gredos: `"Alpine food webs" "Central Spain" lakes food web data`; `"Food Web Topology in High Mountain Lakes" species links matrix supplementary`; `"Food Web Topology in High Mountain Lakes" "S1 Dataset" download`.
- Los Monegros: `"Los Monegros" Alcorlo 2001 food web biotic interactions saline lakes`; `"Los Monegros" "food-web structure" "species" "links" Alcorlo`; `"Alcorlo" "La Muerte" "Pinol" food web species links`; `"Food-web structure in two shallow salt lakes" PDF Alcorlo Baltanas Montes 307 316`; `"Food-web structure in two shallow salt lakes" 466 307 316 DOI`.
- Lake Cisó: `"Lake Ciso" Massana 1996 food web structure trophic groups`; `"Massana" "Cisó" "food web" "16"`; `"Food web structure of species groups" "Lake Ciso"`; `"Lake Ciso" "Massana" "Food web structure" 1996`; `"Massana" "Lake Ciso" 1996 "food web structure" DOI`; `"Lake Ciso" "Massana" "Gasol" "Pedrós-Alió" "food web" 1996`; `"Components, structure and fluxes" "Lake Ciso" Massana 1996`.
- Mediterranean streams: `Spain Mediterranean stream "food web" matrix trophic links Sánchez-Carmona`; `"Effects of trophic species aggregation" six Mediterranean streams food web matrix Spain`; `"Sánchez-Carmona" "six Mediterranean streams" food webs Spain locations`; `"Structure, dynamics and stability of a Mediterranean river food web" data matrix Spain`; `"Food web structure in Mediterranean streams" "Sánchez-Carmona" DOI`; `"Effects of trophic species aggregation" "six Mediterranean streams" DOI`; `"Food web structure in Mediterranean streams" "species" "links" six`; `"Food web structure in Mediterranean streams" "74" "food web"`; `"Food web structure in Mediterranean streams" "Table 1"`; `"Food web structure in Mediterranean streams" PDF Sánchez-Carmona 311 324`.
- Iberian ponds: `"Iberian Pond Network" food web trait matching data` → the framework starts with 529 taxa and 279,841 potential links, then removes 87% using trait matching. This is a model-inferred metaweb, not an observed local interaction matrix.
- Doñana multiplex: `Doñana spider food web "interaction matrix" PLOS ONE 0293176` → the paper is about Swallow Cliff Woods, Illinois, not Spain; it was discarded as a false positive. The actual Doñana multiplex lead combines trophic and non-trophic interactions and is not a single atlas web.
- No resolved Spanish terrestrial forest, grassland or soil community matrix was found. Plant–pollinator and seed-dispersal networks from Cazorla, Doñana, Cap de Creus and the Cantabrian mountains are outside scope.

**Documents and records actually opened:** Web of Life networks CSV and FW_005; Mangal dataset/network APIs and the node/interaction endpoints for networks 91, 1439–1442, 1475 and 1567; Netzschleuder GATEWAy entry and full CSV archive; [Sánchez-Hernández et al. 2015](https://pmc.ncbi.nlm.nih.gov/articles/PMC4646624/) plus all three link datasets and node/reference supplements; [Filgueira & Castro manuscript](https://digital.csic.es/bitstream/10261/44477/1/Filgueira.pdf); [Walton et al. 2015 food-web paper](https://digital.csic.es/bitstream/10261/122436/1/The%20effect%20of%20water%20management%20on%20extensive%20aquaculture%20food%20webs%20in%20the%20reconstructed%20wetlands%20of%20the%20Do%C3%B1ana%20Natural%20Park%20Southern%20Spain.pdf) and [companion ecosystem-services paper](https://digital.csic.es/bitstream/10261/122390/1/A%20model%20for%20the%20future.%20Ecosystem%20services%20provided%20by%20the%20aquaculture%20activities%20of%20Veta%20la%20Palma%20Southern%20Spain.pdf); [Giralt Paradell et al. 2021 open article](https://www.sciencedirect.com/science/article/pii/S0301479721002371) and [supplement](https://ars.els-cdn.com/content/image/1-s2.0-S0301479721002371-mmc1.docx); [Sánchez & Olaso 2004](https://www.vliz.be/imisdocs/publications/ocrd/55193.pdf); [Sánchez-Zulueta et al. 2023](https://www.frontiersin.org/journals/marine-science/articles/10.3389/fmars.2023.1166674/full); [Ortega et al. 2025](https://link.springer.com/article/10.1007/s11625-025-01644-4); [Bayle-Sempere et al. 2013](https://personal.ua.es/es/bayle/documentos/trophic-structure-and-energy-fluxes-mediterranean-fish-farm.pdf); [Massana et al. 1996](https://www.int-res.com/articles/ame/11/a011p279.pdf); [Pereira et al. 2023 Iberian Pond Network paper](https://digital.csic.es/bitstream/10261/378675/1/1_Pereira%20et%20al_Bioscience.pdf); Crossref and OpenAlex metadata for the principal DOIs. The Mar Menor repository bitstream resolved to a login page, and the BDRI PDF returned HTTP 403, so those matrices are not claimed as verified.

---

## Tier 1 — build next

### Ría de Arousa / Rías Baixas shelf, Galicia — `rias-baixas`
- **Biome / Region:** Estuarine/coastal shelf · NW Spain · **Lat/Lng (approx):** 42.50, −8.85
- **Source:** Giralt Paradell, O., Díaz López, B., Methion, S. & Rogan, E. (2020). Food-web interactions in a coastal ecosystem influenced by upwelling and terrestrial runoff off North-West Spain. *Marine Environmental Research* 157: 104933. DOI [10.1016/j.marenvres.2020.104933](https://doi.org/10.1016/j.marenvres.2020.104933). Dynamic comparison: Giralt Paradell, O., Methion, S., Rogan, E. & Díaz López, B. (2021). Modelling ecosystem dynamics to assess the effect of coastal fisheries on cetacean species. *Journal of Environmental Management* 285: 112175. DOI [10.1016/j.jenvman.2021.112175](https://doi.org/10.1016/j.jenvman.2021.112175), [open article and supplement](https://www.sciencedirect.com/science/article/pii/S0301479721002371). Related earlier mussel model: Outeiro, Byron & Angelini (2018), *Aquaculture* 496: 270–284, DOI 10.1016/j.aquaculture.2018.06.043; do not create a duplicate candidate.
- **Data access:** **ASSUMED (strong).** The 2020 paper's Table 3 is indexed as “Diet composition (% of prey biomass),” with predators in columns and prey in rows. The 2021 open article and DOCX supplement confirm the same 23 functional groups, input provenance and a 2005/2017 comparison. The 2020 PDF itself returned HTTP 403 during this sweep, so Table 3 was located but not independently transcribed. Stage 2 must obtain and check it.
- **Raw size:** 23 functional groups / weighted links not counted · **Aggregation plan:** → 23 nodes at source resolution; retain the three named cetaceans, baleen whales, two seabird guilds, blue whiting, sardine, horse mackerel, pelagic and demersal fish guilds, cephalopods, crustaceans, macrobenthos, zooplankton, phytoplankton, discards and detritus.
- **Data type:** weighted diet percentages and biomass flows · **Provenance:** empirical Ecopath model synthesis using local abundance, diet, survey and fisheries data plus literature inputs.
- **Hard gates:** peer-reviewed publication pass · printed matrix provisional pass · source already within 15–25 nodes · trophic structure pass · estuary biome pass (2 live)
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 2 = **14**
- **Tier:** 1 · **Notes:** Best combination of data quality, low aggregation cost and story. Upwelling and terrestrial runoff support sardine, blue whiting and horse mackerel, which in turn support common and bottlenose dolphins, harbour porpoise, baleen whales and seabirds. The 2005/2017 comparison and forward fisheries scenarios provide a concrete prey-depletion and competition narrative. Present the model as the **Ría de Arousa/Rías Baixas coastal shelf**, not as a whole-ocean web; the 300 m boundary and estuarine/coastal classification must be checked during verification.

### Veta la Palma reconstructed wetlands, Doñana Natural Park — `veta-la-palma-wetland`
- **Biome / Region:** Reconstructed brackish coastal wetland · SW Spain · **Lat/Lng (approx):** 36.94, −6.20
- **Source:** Walton, M.E.M., Vilas, C., Coccia, C., Green, A.J., Cañavate, J.P., Prieto, A., van Bergeijk, S.A., Medialdea, J.M., Kennedy, H., King, J. & Le Vay, L. (2015). The effect of water management on extensive aquaculture food webs in the reconstructed wetlands of the Doñana Natural Park, Southern Spain. *Aquaculture* 448: 451–463. DOI [10.1016/j.aquaculture.2015.06.011](https://doi.org/10.1016/j.aquaculture.2015.06.011). Companion: Walton, M.E.M. et al. (2015). A model for the future: Ecosystem services provided by the aquaculture activities of Veta la Palma, Southern Spain. *Aquaculture* 448: 382–390. DOI [10.1016/j.aquaculture.2015.06.017](https://doi.org/10.1016/j.aquaculture.2015.06.017).
- **Data access:** **ASSUMED (verification risk).** Open accepted manuscripts contain Tables 1–3 with median and 95% credible intervals for mixSIAR diets, non-native and commercial consumers, and primary-producer support. The companion paper prints harvested-species and waterbird consumption/primary-production tables. There is no single complete adjacency matrix. Stage 2 must determine whether these tables make one source-coherent web without importing generic diets to fill gaps.
- **Raw size:** 18 fish species, 31 macroinvertebrate species and 94 surveyed waterbird species, plus basal resources and zooplankton · **Aggregation plan:** → ~22–25 nodes; retain suspended POM, periphyton, biofilm, *Ruppia*, *Phragmites* and *Spartina* separately; pool zooplankton and small benthos by measured prey categories; retain oriental vs native shrimp, corixid, crab, killifish, mosquitofish, carp, bass and mullet; use a small number of sourced waterbird guilds rather than 94 species.
- **Data type:** mixed (Bayesian diet fractions and consumption flows; qualitative links where only prey classes are documented) · **Provenance:** composite (local isotope, field and census data combined with literature diets and a companion ecosystem-services model).
- **Hard gates:** publication pass · core diet tables provisional pass, whole-matrix risk remains · aggregation plausible but nontrivial · producer–invertebrate–fish–bird structure pass · wetland biome pass (1 live)
- **Scores:** data 2 · story 3 · geography 3 · cost 2 · recognition 3 = **13**
- **Tier:** 1 (high-curation-risk) · **Notes:** Exceptional hero story: changing water exchange shifts the web from benthic production toward phytoplankton, lets non-native shrimp and fish establish, and leaves non-natives supplying >60% of bass diet in high-flow lagoons. Flamingos, cormorants, ducks and waders link aquaculture to bird conservation. Do not claim this is the natural Doñana marsh food web: it is a deliberately reconstructed aquaculture wetland. Stage 2 may downgrade if the companion tables cannot be reconciled without invented links.

## Tier 2 — backlog

### San Simón Bay seagrass meadow, Ría de Vigo — `san-simon-bay`
- **Biome / Region:** Estuarine intertidal *Zostera marina* meadow · NW Spain · **Lat/Lng (approx):** 42.32, −8.62
- **Source:** Filgueira, R. & Castro, B.G. (2011). Study of the trophic web of San Simón Bay (Ría de Vigo) by using stable isotopes. *Continental Shelf Research* 31(5): 476–487. DOI [10.1016/j.csr.2010.10.010](https://doi.org/10.1016/j.csr.2010.10.010). [Open accepted manuscript](https://digital.csic.es/bitstream/10261/44477/1/Filgueira.pdf). Mangal network [1567](https://mangal.io/api/v2/network/1567).
- **Data access:** **ASSUMED (strong).** Mangal exposes 26 nodes and 70 directed links labelled stable-isotope ratio; the open paper's Table 3 lists potential, most-plausible and less-plausible food sources. The matrix was counted at discovery level but not independently compared link by link with the paper.
- **Raw size:** 26 nodes / 70 qualitative links · **Aggregation plan:** → ~20–22 nodes; merge the three cuttlefish size classes into sourced life-stage groups only if retained, combine POM size fractions and isotopically indistinguishable macroalgae without pretending they are resolved taxa, and keep *Zostera*, microphytobenthos, bivalves, lugworm, shrimp, goby, wrasse and cuttlefish distinct.
- **Data type:** qualitative most-plausible links; isotope values and model alternatives support them, but there are no universally valid diet fractions · **Provenance:** empirical local isotope reconstruction constrained by feeding literature.
- **Hard gates:** publication pass · bounded matrix provisional pass · ≤25-node reduction straightforward · trophic structure pass · estuary biome pass
- **Scores:** data 2 · story 2 · geography 3 · cost 3 · recognition 1 = **11**
- **Tier:** 2 · **Notes:** Small enough for a clean exhibit and unusual for its explicit treatment of isotope ambiguity. The central story is microphytobenthos resuspended by tides supporting much of the seagrass community, rather than a dramatic single-species removal. Stage 2 must preserve “most plausible” versus “less plausible” alternatives rather than converting every isotope-compatible link into an observed fact.

### La Muerte and Piñol temporary salt lakes, Los Monegros — `los-monegros-salt-lakes`
- **Biome / Region:** Temporary inland saline wetland · Zaragoza, NE Spain · **Lat/Lng (approx):** 41.405, −0.26
- **Source:** Alcorlo, P., Baltanás, Á. & Montes, C. (2001). Food-web structure in two shallow salt lakes in Los Monegros (NE Spain): energetic vs dynamic constraints. *Hydrobiologia* 466: 307–316. DOI [10.1023/A:1014594408119](https://doi.org/10.1023/A:1014594408119). Mangal dataset 82; La Muerte 1994 network 1440 and Piñol 1994 network 1439.
- **Data access:** **ASSUMED (strong).** Mangal supplies qualitative links and methods (gut content, laboratory observation and literature). The 1994 La Muerte network has 15 nodes / 38 links; Piñol has 13 / 26. The 1996 versions contract to 8 / 14 and 7 / 12. The original paper was located but not independently parsed; Stage 2 must confirm node naming and whether a 15-node source web is acceptable.
- **Raw size:** 15 and 13 nodes in the preferred 1994 snapshots; 38 and 26 links · **Aggregation plan:** use La Muerte 1994 unchanged at 15 nodes; Piñol is below the richness minimum and cannot be padded. Do not merge lakes or years merely to reach 15 nodes.
- **Data type:** qualitative · **Provenance:** empirical local feeding evidence supplemented by literature.
- **Hard gates:** publication pass · machine-readable matrices provisional pass · La Muerte exactly meets 15-node minimum · short producer/detritus–consumer structure pass · saline-wetland biome pass
- **Scores:** data 2 · story 2 · geography 3 · cost 3 · recognition 1 = **11**
- **Tier:** 2 · **Notes:** Tractable, geographically distinctive inland saline web with algae, detritus/bacteria, branchiopods, copepods, rotifers, ostracods and dipterans. Nutrient enrichment and hydroperiod drive web contraction and omnivory, but there is no charismatic vertebrate cascade. The preferred exhibit is La Muerte 1994 only. Taxonomic normalization in Mangal needs careful checking against the paper (for example `Arctodisptomus` and `Candela`).

## Appendix — recorded, not planned under current gates

### Mar Menor coastal lagoon, Murcia — `mar-menor-lagoon`
- **Biome / Region:** Hypersaline coastal lagoon/wetland · SE Spain · **Lat/Lng (approx):** 37.72, −0.79
- **Source:** Pérez-Ruzafa, Á., Morkune, R., Marcos, C., Pérez-Ruzafa, I.M. & Razinkovas-Baziukas, A. (2020). Can an oligotrophic coastal lagoon support high biological productivity? Sources and pathways of primary production. *Marine Environmental Research* 153: 104824. DOI [10.1016/j.marenvres.2019.104824](https://doi.org/10.1016/j.marenvres.2019.104824).
- **Data access:** **INACCESSIBLE in this sweep.** The abstract and model pedigree (0.70) are visible, and a 19-functional-group model is described in secondary search results. The UCM repository record exposes a restricted bitstream that resolves to a login page; no complete diet matrix was obtained. Do not infer the matrix from the abstract.
- **Raw size:** 19 functional groups / links not counted · **Aggregation plan:** → 19 nodes if the source matrix is later obtained.
- **Data type:** weighted Ecopath diets and flows · **Provenance:** empirical model synthesis.
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 3 = **15**
- **Tier:** appendix (**hard-gate fail: matrix inaccessible**) · **Notes:** Highest numerical score in the sweep: a rare oligotrophic lagoon that maintained high fisheries productivity, with *Cymodocea*, *Caulerpa*, detritus and zoobenthos driving alternative basal pathways. It is the first candidate to revisit if the full paper or EwE model becomes available.

### Gredos high-mountain lakes, Ávila — `gredos-alpine-lakes`
- **Biome / Region:** Oligotrophic high-mountain freshwater lakes · Central Spain · **Lat/Lng (approx):** 40.24, −5.30
- **Source:** Sánchez-Hernández, J., Cobo, F. & Amundsen, P.-A. (2015). Food Web Topology in High Mountain Lakes. *PLOS ONE* 10(11): e0143016. DOI [10.1371/journal.pone.0143016](https://doi.org/10.1371/journal.pone.0143016). [Open article and supplements](https://pmc.ncbi.nlm.nih.gov/articles/PMC4646624/).
- **Data access:** **ASSUMED (strong).** S1–S3 plain-text link datasets and the XLS node key were downloaded at discovery level. Table 2 independently gives Caballeros 64 nodes / 344 links, Cimera 85 / 645 and Grande de Gredos 96 / 534.
- **Raw size:** 64–96 nodes and 344–645 qualitative links per lake · **Aggregation plan:** choose one lake only, then → ~20–24 nodes using the paper's functional feeding groups and basal-resource categories; preserve fish presence/absence and do not pool lakes.
- **Data type:** qualitative · **Provenance:** composite (local surveys and stomach contents plus broad geographical feeding literature).
- **Scores:** data 2 · story 3 · geography 3 · cost 2 · recognition 1 = **11**
- **Tier:** appendix (**hard-gate fail: freshwater saturation**) · **Notes:** Strong fish-introduction story: Caballeros is fishless, Cimera contains introduced charr and Grande contains native trout. Six trophic levels and high omnivory make useful cascade material. The authors warn that literature-derived links may not occur locally; that limitation must remain prominent.

### Lake Cisó, Banyoles — `lake-ciso`
- **Biome / Region:** Small stratified sulfurous freshwater lake · Girona, NE Spain · **Lat/Lng (approx):** 42.126, 2.741
- **Source:** Massana, R., García-Cantizano, J. & Pedrós-Alió, C. (1996). Components, structure and fluxes of the microbial food web in a small, stratified lake. *Aquatic Microbial Ecology* 11: 279–288. [Open PDF](https://www.int-res.com/articles/ame/11/a011p279.pdf). Mangal network 1475.
- **Data access:** **ASSUMED (strong).** Mangal has 16 nodes / 42 links from field/laboratory observation and literature. The open paper presents the food-web and carbon-flow diagrams.
- **Raw size:** 16 nodes / 42 links · **Aggregation plan:** → ~12–16 nodes; retain the source's functional groups, but the microbial-only web cannot be made into a vertebrate-rich community without outside evidence.
- **Data type:** mixed qualitative feeding links and carbon fluxes · **Provenance:** empirical field/laboratory observations plus literature.
- **Scores:** data 3 · story 2 · geography 3 · cost 3 · recognition 1 = **12**
- **Tier:** appendix (**freshwater saturation and microbial-only scope**) · **Notes:** Interesting sulfide/oxygen refuge mechanism and inefficient transfer from metalimnetic biomass to zooplankton. Best used only if a microbial web is explicitly wanted and freshwater reopens; it is not a general whole-lake community exhibit.

### Six Mediterranean stream webs, Andalusia — `andalusian-stream-webs`
- **Biome / Region:** Mediterranean intermittent freshwater streams · southern Spain · **Lat/Lng (approx):** 37.2, −4.0
- **Source:** Sánchez-Carmona, R., Encina, L., Rodríguez-Ruiz, A., Rodríguez-Sánchez, M.V. & Granado-Lorencio, C. (2012). Food web structure in Mediterranean streams: exploring stabilizing forces in these ecosystems. *Aquatic Ecology* 46: 311–324. DOI [10.1007/s10452-012-9400-5](https://doi.org/10.1007/s10452-012-9400-5).
- **Data access:** **INACCESSIBLE as complete matrices in this sweep.** Citation and analysis are confirmed, but no full node/link supplement or repository deposit was located. Do not reconstruct webs from metric summaries.
- **Raw size:** six source webs; node/link totals not established from retrieved material · **Aggregation plan:** select one source web only and reduce to ~18–22 functional feeding groups if its matrix becomes available.
- **Data type:** qualitative · **Provenance:** empirical community sampling with literature-based feeding assignments.
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 1 = **10**
- **Tier:** appendix (**freshwater saturation and access**) · **Notes:** Relevant because omnivory and high intermediate-trophic richness may stabilize seasonal Mediterranean streams. No single stream is promoted without a retrievable matrix and exact site provenance.

### Gulf of Cádiz shelf — `gulf-of-cadiz`
- **Biome / Region:** Northeast Atlantic marine shelf · SW Spain · **Lat/Lng (approx):** 36.53, −6.29
- **Source:** Torres, M.Á., Coll, M., Heymans, J.J., Christensen, V. & Sobrino, I. (2013). Food-web structure of and fishing impacts on the Gulf of Cadiz ecosystem (South-western Spain). *Ecological Modelling* 265: 26–44. DOI [10.1016/j.ecolmodel.2013.05.019](https://doi.org/10.1016/j.ecolmodel.2013.05.019). Web of Life `FW_005`; Mangal network 91.
- **Data access:** **ASSUMED (strong).** Web of Life and Mangal both expose a weighted matrix: 44 nodes / 413 dietary links. The paper reports 43 functional groups, so Stage 2 must explain the mirror's extra node and orientation before use.
- **Raw size:** 43 paper groups; 44 mirror nodes / 413 weighted links · **Aggregation plan:** → ~22–25 nodes; retain anchovy, sardine, hake, *Parapenaeus longirostris*, cephalopods, dolphins, killer whales, seabirds and principal benthic/pelagic pathways.
- **Data type:** weighted · **Provenance:** empirical Ecopath model synthesis.
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 2 = **13**
- **Tier:** appendix (**hard-gate fail: marine saturation**) · **Notes:** Strong wasp-waist and benthopelagic coupling story, with declining anchovy, sardine and hake and a keystone shrimp. Best Spanish marine backup after the estuarine candidates.

### Cantabrian Sea shelf — `cantabrian-sea-shelf`
- **Biome / Region:** Temperate marine shelf · northern Spain · **Lat/Lng (approx):** 43.5, −4.0
- **Source:** Sánchez, F. & Olaso, I. (2004). Effects of fisheries on the Cantabrian Sea shelf ecosystem. *Ecological Modelling* 172: 151–174. DOI [10.1016/j.ecolmodel.2003.09.005](https://doi.org/10.1016/j.ecolmodel.2003.09.005). [Open PDF](https://www.vliz.be/imisdocs/publications/ocrd/55193.pdf).
- **Data access:** **ASSUMED (strong).** Open paper documents the 1994 model, 28 groups and diet/consumption tables based on roughly 10,000 local stomachs plus literature. Full matrix cells were not independently transcribed.
- **Raw size:** 28 trophic groups · **Aggregation plan:** → ~23–25 nodes by merging small demersal fish and minor plankton groups while retaining large/small hake, anglerfish, blue whiting, horse mackerel, tuna, suprabenthos and detritus/discards.
- **Data type:** weighted · **Provenance:** empirical Ecopath model synthesis with substantial local stomach-content data.
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 2 = **13**
- **Tier:** appendix (**marine saturation**) · **Notes:** Strong fisheries and wasp-waist story: suprabenthos and horse mackerel connect pelagic, demersal and benthic domains; trawling has much larger mixed trophic impacts than other gears. Slightly behind Cádiz because only three groups must be removed rather than twenty, but the local diet evidence is excellent.

### Balearic Islands shelf — `balearic-islands-shelf`
- **Biome / Region:** Oligotrophic Mediterranean island shelf · Balearic Islands · **Lat/Lng (approx):** 39.6, 2.9
- **Source:** Sánchez-Zulueta, P., Valls, M., Guijarro, B., Ángeles Torres, M., Ángeles Zapata, M., Coll, M., Corrales, X., Andonegi, E., Díaz-Valdés, M., Massutí, E. & Ordines, F. (2023). Trophic structure and fishing impacts on an oligotrophic ecosystem in the Western Mediterranean: the Balearic Islands. *Frontiers in Marine Science* 10: 1166674. DOI [10.3389/fmars.2023.1166674](https://doi.org/10.3389/fmars.2023.1166674).
- **Data access:** **ASSUMED.** The open article reports 45 groups and a diet matrix built from local stomach contents for 71 species plus 41 published Balearic diet datasets. Supplementary material is identified, but the complete matrix was not extracted in this sweep.
- **Raw size:** 994 species aggregated into 45 functional groups · **Aggregation plan:** → ~23–25 nodes; retain *Posidonia*, other benthic producers, red shrimp, Norway lobster, hake life stages, dolphinfish, loggerhead turtle, dolphins, seabirds, suprabenthos and detritus.
- **Data type:** weighted · **Provenance:** empirical model synthesis with local and wider-western-Mediterranean diets.
- **Scores:** data 3 · story 2 · geography 3 · cost 2 · recognition 2 = **12**
- **Tier:** appendix (**marine saturation**) · **Notes:** Distinctive seagrass/red-algae and benthopelagic coupling, with unusually high transfer efficiency. Sponge-loop and shallow-benthic flows are acknowledged unknowns and should not be invented to make the exhibit more dramatic.

### Ebro Delta marine area — `ebro-delta-shelf`
- **Biome / Region:** Mediterranean coastal shelf and delta-influenced marine ecosystem · NE Spain · **Lat/Lng (approx):** 40.72, 0.95
- **Source:** Ortega, M., Lloret-Lloret, E. & Coll, M. (2025). Linking sea and land systems through food web models and value chains: a portrait of the Ebro Delta (NW Mediterranean Sea). *Sustainability Science* 20. DOI [10.1007/s11625-025-01644-4](https://doi.org/10.1007/s11625-025-01644-4).
- **Data access:** **ASSUMED (strong).** Open article states that the final balanced estimates and diet matrix are in Supplementary Tables S6–S7; group definitions and data sources are in S1–S2. The matrix was not independently transcribed.
- **Raw size:** 55 functional groups · **Aggregation plan:** → ~22–25 nodes along existing model lineages, retaining small pelagics, demersal resources, cephalopods, benthic invertebrates and delta-linked detrital pathways.
- **Data type:** weighted · **Provenance:** empirical model synthesis updated from earlier South Catalan Sea models.
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 2 = **13**
- **Tier:** appendix (**marine saturation**) · **Notes:** The linked ecological/value-chain analysis offers an unusual fisheries-to-consumers story and strong local harvesting scenarios. Treat it as the delta's marine shelf, not as proof of a resolved wetland/rice-field matrix. Earlier 40-group South Catalan Sea models are lineage inputs, not separate candidates here.

### Santa Pola Bay sea-cage fish farm, Alicante — `santa-pola-fish-farm`
- **Biome / Region:** Mediterranean marine aquaculture · SE Spain · **Lat/Lng (approx):** 38.096, −0.606
- **Source:** Bayle-Sempere, J.T., Arreguín-Sánchez, F., Sanchez-Jerez, P., Salcido-Guevara, L.A., Fernandez-Jover, D. & Zetina-Rejón, M.J. (2013). Trophic structure and energy fluxes around a Mediterranean fish farm. *Ecological Modelling* 248: 135–147. DOI [10.1016/j.ecolmodel.2012.08.028](https://doi.org/10.1016/j.ecolmodel.2012.08.028). [Open author PDF](https://personal.ua.es/es/bayle/documentos/trophic-structure-and-energy-fluxes-mediterranean-fish-farm.pdf).
- **Data access:** **ASSUMED (strong).** Open paper prints the adjusted predator–prey matrix as Table 3 across several pages and documents 41 groups including artificial feed.
- **Raw size:** 41 functional groups · **Aggregation plan:** → ~22–25 nodes; retain pellets, reared fish, wild aggregated fish guilds, bluefish, amberjack, barracuda, cephalopods, principal invertebrates, phytoplankton and detritus.
- **Data type:** weighted · **Provenance:** empirical Ecopath model synthesis from 2001–2007 field and literature data.
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 1 = **12**
- **Tier:** appendix (**marine saturation**) · **Notes:** Artificial pellets supply 82.3% of wild aggregated fishes' diets, making a clear anthropogenic subsidy cascade. It is a farm-centered ecosystem, not a natural bay-wide baseline; curation must preserve that scope.

## Rejected scored candidates

### Iberian Pond Network metaweb — `iberian-pond-metaweb`
- **Biome / Region:** Experimental freshwater mesocosms across the Iberian Peninsula · **Lat/Lng (approx):** 39.5, −5.0
- **Source:** Pereira, C.L. et al. (2023). Future-proofing environmental DNA and trait-based predictions of food webs. *BioScience* 73: biad089. DOI [10.1093/biosci/biad089](https://doi.org/10.1093/biosci/biad089). [Open manuscript](https://digital.csic.es/bitstream/10261/378675/1/1_Pereira%20et%20al_Bioscience.pdf).
- **Data access:** conceptual metaweb and trait-filtering framework, not a measured pairwise community matrix · **Raw size:** 529 taxa / 279,841 possible links before filtering; 87% removed by trait matching · **Aggregation plan:** none that would turn inference into observation.
- **Data type:** model-inferred links · **Provenance:** computational prediction from eDNA and traits.
- **Scores:** data 1 · story 2 · geography 3 · cost 1 · recognition 1 = **8**
- **Tier:** rejected (**model-inferred links and freshwater saturation**) · **Notes:** Useful research infrastructure, but the possible-link metaweb is not an empirical food web suitable for the atlas. Revisit only if a source-coherent measured network and a `modeled` provenance policy are adopted.

### Doñana multiplex ecological network — `donana-multiplex-network`
- **Biome / Region:** Mediterranean wetland mosaic with mixed interaction types · SW Spain · **Lat/Lng (approx):** 37.0, −6.4
- **Source:** Melián, C.J., Bascompte, J., Jordano, P. & Krivan, V. (2009). Toward multiplex ecological networks: accounting for multiple interaction types. In *Adaptive Food Webs*, Cambridge University Press, as indexed by the publisher.
- **Data access:** no single resolved food-web node/link matrix suitable for this product · **Raw size:** not established as a single web · **Aggregation plan:** not defensible across trophic and non-trophic interaction types.
- **Data type:** multiplex trophic and non-trophic interactions · **Provenance:** synthesis, not one bounded empirical food web.
- **Scores:** data 1 · story 2 · geography 3 · cost 1 · recognition 2 = **9**
- **Tier:** rejected (**not a single resolved food web**) · **Notes:** Do not flatten mutualistic and other non-trophic interactions into feeding edges. The independently documented Veta la Palma web is the valid Doñana candidate.

## Other early rejects and scope notes

- **Pollination and seed-dispersal networks:** Cazorla, Sierra Nevada, Doñana, Cap de Creus and the Cantabrian mountains are genuine Spanish networks but outside the current food-web product surface.
- **Garajonay, Gomera:** pollination only; the rest of the Canary Islands is reserved for a separate sweep.
- **Ebro blue crab and Cachón River crabs:** trophic-position, diet-source and niche-overlap studies, not resolved community matrices. The 55-group Ebro model is the appropriate candidate.
- **Deep NW Mediterranean model:** the search lead claiming 15 groups was incorrect; the located Tecchio et al. model has 20 groups but no primary producers. It remains behind richer coastal models and marine saturation.
- **South Catalan Sea and Gulf of Alicante:** related model lineages are captured through the newer Ebro Delta and Santa Pola records rather than duplicated as separate candidates.
- **Isotope plots, contaminant transfer and taxon-only diets:** evidence of trophic position or pollutant flow is not automatically a resolved community matrix.
- **False-positive spider paper:** PLOS ONE `e0293176` concerns Illinois, USA, not Doñana or Spain, and is excluded.

## Verification priorities

1. **`rias-baixas`:** obtain the 2020 article's Table 3, confirm all 23 group definitions and edge orientation, and compare against the 2021 supplement. Verify that 2005 and 2017 use the same topology before treating them as alternative snapshots. Keep the Ría de Arousa/Rías Baixas shelf boundary and estuarine classification explicit.
2. **`veta-la-palma-wetland`:** extract Tables 1–3 and the companion waterbird tables. Decide whether one defensible source-coherent web exists; do not fill missing bird links with generic BirdLife diets merely to complete the graph. If only the aquatic isotope web is coherent, reduce scope and score accordingly.
3. **`san-simon-bay`:** compare Mangal's 70 links with manuscript Table 3, retaining most-plausible versus alternative diets and isotopically indistinguishable source warnings.
4. **`los-monegros-salt-lakes`:** compare the 1994 La Muerte matrix with Alcorlo et al. Confirm exactly 15 named nodes, taxonomy, source methods and whether the original evidence supports using this snapshot alone. Do not merge Piñol or 1996 to solve richness.
5. **Appendix:** Mar Menor is the only appendix candidate worth pursuing immediately because its score is high and its raw size is already suitable; obtain the full paper or EwE file before changing its access verdict. Marine and ordinary freshwater candidates stay closed under the current biome caps.
