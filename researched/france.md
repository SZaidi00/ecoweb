# Region: France — terrestrial, freshwater, wetland, estuarine & surrounding marine waters
**Researched:** 2026-11-23 · **Status:** complete (Stage 1 — awaiting independent verification)

**Scope:** Metropolitan France, including Corsica and adjacent locally bounded coastal/shelf models. Country-scale scope is consistent with the earlier Scotland, Ireland, Spain, Portugal and Netherlands sweeps. Overseas France is excluded: its tropical, sub-Antarctic and deep-sea systems belong to separate regional sweeps, and several are already represented in the ledger. Transboundary models are included only when a French or source-bounded system can be identified. Pollination, seed-dispersal and host–parasitoid networks are outside the current product surface.

**Previous records:** No France file or candidate was present in `researched/`, `researched/notbuildable/`, `verified/`, `implemented/` or the sweep ledger. Existing European candidates were not re-scored and no verified or implemented columns were changed.

**Repo context at sweep time:** 16 live webs in `data/webs/index.json`: marine 6 (saturated), freshwater 3 (saturated), grassland 3 (saturated), estuary 2, wetland 1, desert 1, temperate terrestrial forest 0. No French or other European web is live. Consequently, open-marine and ordinary freshwater candidates are appendix-only even when their matrices and numerical scores are strong. Estuarine, coastal-wetland and non-grassland terrestrial candidates remain eligible.

**Outcome:** five Tier 1 candidates pass discovery-level gates; no Tier 2 candidates were found. `mont-saint-michel-bay` is the strongest: an open 18-group weighted model with a printed diet matrix and an unusually clear invasive-slipper-limpet trophic-impasse story. `gironde-estuary` and `brouage-mudflat` also have open printed matrices and exactly usable source resolution. `seine-estuary-mosaic` provides six 15-group habitat models but its supplements were not separately obtainable. `aiguillon-cove` is a strong seasonal counterpart to Brouage, although building both would risk near-duplicate exhibits. No modern observed French terrestrial community matrix was found; the French Alps soil networks and French pond/marsh networks are potential-link or model-imputed reconstructions and are rejected under the current provenance rules. All Tier 1 access labels are **ASSUMED**, not verified.

## Candidate table

Scores are data quality, story, geography, aggregation cost and recognition in that order. “Matrix” means the node/link, flow or diet data needed for curation, not merely an isotope biplot or a conceptual food-web figure. A numerical score does not override a hard-gate failure.

| Candidate id | Ecosystem | Biome | Raw size | Data access | Scores | Total | Tier / decisive gate |
|---|---|---|---:|---|---|---:|---|
| `mont-saint-michel-bay` | Bay of Mont-Saint-Michel | Estuarine/coastal bay & intertidal wetland | 18 functional groups | ASSUMED strong; open paper Table 3 diet matrix | 3, 3, 3, 3, 3 | 15 | **1** |
| `gironde-estuary` | Gironde Estuary | Estuary | 18 ecological compartments + 2 human-impact compartments | ASSUMED strong; open 2008 Table 3 + 2022 ESCROpath matrices/code | 3, 3, 3, 3, 2 | 14 | **1** |
| `brouage-mudflat` | Brouage Mudflat, Marennes-Oléron Bay | Estuarine intertidal mudflat | 16 compartments / 95 a priori flows | ASSUMED strong; open Tables 5–6 + R `LIM` model | 3, 3, 3, 3, 2 | 14 | **1** |
| `seine-estuary-mosaic` | Seine Estuary and eastern Seine Bay | Estuary / coastal habitat mosaic | 6 habitat models × 15 groups | ASSUMED, verification risk; open manuscript, supplement not separately exposed | 3, 3, 3, 3, 2 | 14 | **1 (access-dependent)** |
| `aiguillon-cove` | Aiguillon Cove | Estuarine intertidal mudflat | 16 compartments / 106 a priori flows, 2 seasons | ASSUMED strong; open 2006 manuscript Tables 4–5 | 3, 2, 3, 3, 1 | 12 | **1** |
| `canche-estuary` | Canche Estuary | Estuary | 15 compartments | **INACCESSIBLE** full text/matrix in this sweep | 3, 2, 3, 3, 1 | 12 | Appendix — access |
| `lake-annecy` | Lake Annecy | Subalpine freshwater lake | Abstract says 14 groups; diet table indexes 17 including basal/detritus | ASSUMED strong; open paper Table II | 3, 2, 2, 3, 2 | 12 | Appendix — freshwater saturation + count reconciliation |
| `bay-of-biscay-shelf` | Bay of Biscay continental shelf | Marine shelf | 43 functional groups | ASSUMED; open model papers, matrix not extracted | 3, 3, 2, 2, 2 | 12 | Appendix — marine saturation |
| `port-cros-mpa` | Port-Cros National Park MPA | Mediterranean marine protected area | 41 functional groups | ASSUMED; author PDF located, matrix not extracted | 3, 3, 2, 2, 2 | 12 | Appendix — marine saturation |
| `ile-nouvelle-restored-marsh` | Île Nouvelle restored marshes, Gironde | Restored estuarine wetland | 11 nekton species at sluiced stations and 6 at fully connected stations, plus resources | INACCESSIBLE as a complete matrix; repository access on request | 2, 3, 3, 2, 2 | 12 | **Rejected — partial isotope/diet evidence, not a resolved community matrix** |
| `bay-of-somme` | Bay of Somme | Estuarine/coastal bay | 9 trophic compartments | ASSUMED paper matrix, not obtained | 2, 2, 3, 3, 2 | 12 | **Rejected — richness below 15-node minimum** |
| `french-alps-soil-metaweb` | Orchamp elevation gradients, French Alps | Montane forest/grassland/shrubland soil | 55 groups + 3 resources / 383 potential links; local webs ~41 / ~206 | ASSUMED potential-link data, not observed local edges | 2, 2, 3, 2, 1 | 10 | **Rejected — literature-derived potential links inferred from co-occurrence** |
| `french-pond-marsh-metaweb` | French pond and marsh sites | Freshwater wetland metaweb | 61 × 61 literature matrix; local webs reconstructed by site filtering/imputation | ASSUMED open Zenodo matrices; preprint source | 2, 3, 3, 2, 1 | 11 | **Rejected — preprint + model-imputed/local potential links** |

## Sweep log

Searches were run 2026-11-23. Query strings are recorded verbatim. A zero-hit search means that no resolved French community matrix surfaced; it does not prove that a database has no French taxon records. Direct API, archive and document probes are logged separately from web queries.

### Web of Life

- Web query: `site:web-of-life.es France "food web" trophic network` → no results.
- Direct catalog/API: `https://www.web-of-life.es/api/v1/networks.csv` → 330 network rows, filtered locally for `france`, `french`, `gironde`, `canche`, `seine`, `rhone`, `rhône`, `camargue`, `biscay`, `annecy`, `thau`, `corsica`, `corse`, `banyuls`, `marseille` and `mediterranean`.
- No metropolitan French food-web record was found. The apparent Marseille hit was a Madagascar web whose original citation names Université Aix-Marseille II; the Mediterranean/Doñana hit was a Spanish pollination network. Both were excluded.

### GloBI

- Web queries: `site:globalbioticinteractions.org France "food web" trophic network`; `site:globalbioticinteractions.org (Brouage OR Aiguillon OR Gironde OR Canche OR Camargue) "food web"`.
- No bounded French whole-community matrix surfaced. Results were dominated by taxon-level pages and the Swiss `trophiCH` metaweb, not a French local web. GloBI remains useful for Stage-2 taxon-level cross-checks, not as a substitute for the source matrices below.

### Mangal

- Web query: `site:mangal.io France "food web" ecological network` → no results.
- Direct APIs: `GET https://mangal.io/api/v2/dataset?count=10000` → 175 datasets; `GET https://mangal.io/api/v2/network?count=10000` → 1,487 networks. Records were searched for the same French place names used for Web of Life.
- Exactly one French network matched: network **4234**, `kolpelke_2007_363`, a willow-galling-sawfly/natural-enemy web at La Massane. It is a host–parasitoid surface, not an atlas food web, and was excluded rather than promoted to a candidate.

### Netzschleuder

- Web query: `site:networks.skewed.de France foodweb "food web"` → catalog only; no French food-web entry.
- Catalog entry opened at `https://networks.skewed.de/net/gateway_foodwebs`; complete `gateway_foodwebs.csv.zip` downloaded from the entry's `files/` URL. All 19,212 node records plus graph properties were searched for the French scope terms above.
- No French GATEWAy location web was found. The unrelated French commuting-flow network is not ecological.

### Ecopath / EcoBase publications and quantitative network models

- Broad queries: `France Ecopath "food web" model "diet matrix" functional groups`; `"Trophic functioning of coastal ecosystems along an anthropogenic pressure gradient" Selleslagh 2012`; `"Trophic functioning of coastal ecosystems" Canche PDF`; `"Canche" estuary Ecopath "diet matrix" functional groups`; `"Canche" "Selleslagh" "15" functional groups trophic model`; `"S0272771411003428" pdf Canche`; `"Canche" estuary Selleslagh Lobry Amara 2012 PDF 73 85`.
- Gironde: `"Gironde estuary" Ecopath "diet matrix" food web functional groups`; `"Diversity and stability of an estuarine trophic network" Gironde PDF 2008`; `Chevillot 2019 Gironde estuary Ecopath food web 16 groups diet matrix`; `"Gironde" "Lobry" "16" "Diversity and stability" trophic network compartments`.
- Seine: `"Seine estuary" Ecopath "diet matrix" food web functional groups`; `"The mosaic of habitats of the Seine estuary" PDF diet matrix`.
- Mudflats and bays: `LIMBrouageMudflat BrouageMudflat.input GitHub`; `"Aiguillon Cove" food web LIM compartments flows Leguerrier`; `"Numerical analysis of the food web of an intertidal mudflat ecosystem" DOI Leguerrier 2003`; `"Network analysis and inter-ecosystem comparison" Aiguillon 2007 DOI`; `France estuary "Bay of Somme" "food web" compartments matrix Rybarczyk 2003`; `"Bay of Somme" Rybarczyk 2003 "compartments" trophic network`; `"Bay of Mont Saint-Michel" food web "functional groups" 2008 Leloup`.
- Other aquatic systems: `France Loire estuary "food web" Ecopath trophic network model compartments`; `France Mediterranean lagoon Ecopath "functional groups" "diet matrix" Thau Bages Sigean Mauguio`; `"Thau lagoon" Ecopath "diet matrix" food web functional groups`; `"Lake Annecy" Ecopath "14 functional groups" diet matrix DOI`; `"Preliminary trophic network analysis of subalpine Lake Annecy" Janjua Gerdeaux 2009 DOI`; `France freshwater lake stream "food web" "interaction matrix" Annecy Bourget`; `"Port-Cros" Ecopath "functional groups" diet matrix Valls 2012`.
- Shelf models: `"Bay of Biscay continental shelf" Lassalle 2011 "functional groups" diet matrix`; `"An assessment of the trophic structure of the Bay of Biscay continental shelf" Lassalle 2011 DOI 43`.
- The open European EwE review (Keramidas et al. 2023, DOI 10.3389/fmars.2023.1182921) was used as a cross-check for the Gironde, Canche, Seine, Somme, Mont-Saint-Michel, Biscay and Port-Cros model lineages. It is a pointer, not the primary citation.
- The 2008 Gironde paper prints an 18-compartment predator/prey matrix in Table 3. The 2022 ESCROpath application reshapes that model to 16 species/groups for comparison with Bayesian estimates; those are alternative model versions, not separate atlas candidates.
- Brouage and Aiguillon are linear-inverse models rather than Ecopath, discovered through the same quantitative-model sweep and retained because their source-resolved flow matrices satisfy the same data need.

### figshare / Zenodo / Dryad / other open repositories

- Broad queries: `France "food web" (site:figshare.com OR site:zenodo.org OR site:datadryad.org) trophic matrix`; `site:zenodo.org OR site:datadryad.org OR site:figshare.com (Brouage OR Aiguillon OR Gironde OR Canche OR "Seine estuary") "food web"`; `site:zenodo.org OR site:datadryad.org OR site:figshare.com "Mountain soil multitrophic networks" data`.
- The main additional deposit was Zenodo **16984068**, containing a 61 × 61 French pond/marsh literature matrix, observation counts, latent-link posterior samples and reconstructed local webs. Its missing-link and local-reconstruction methods are the reason for rejection, not a route to an empirical web.
- The Île Nouvelle paper points to Recherche Data Gouv DOI **10.57745/XGJDWH**, explicitly with access upon request. No complete public edge matrix was obtained.
- The CRAN `LIM` manual and `cran/LIM` GitHub tree were opened. The manual documents `LIMBrouageMudflat` with 16 compartments, three external compartments and 95 flows; the mirror contains `data/LIMBrouageMudflat.rda`. The binary model was not parsed at Stage 1.
- The `Irstea/escroc` GitHub tree was opened and contains prior/signature data and results for the Gironde application. These files supplement, rather than replace, the printed 2008 diet matrix.

### Primary literature — terrestrial and freshwater

- Broad queries: `France terrestrial "food web" trophic network matrix forest soil`; `France "soil food web" "matrix" functional groups forest`; `France forest "food web" "interaction matrix" trophic links Fontainebleau`; `France alpine grassland "food web" matrix trophic interactions dataset`; `France soil "food web" energy flux "feeding matrix"`; `France terrestrial metaweb trophic interactions data matrix species`; `France "food web" "Ecological Archives" trophic matrix`.
- Alps queries: `"French Alps" "soil food webs" Calderon-Sanou publication 58 trophic groups`; `"Variability of soil food webs across the French alps"`.
- Pond/marsh queries: `"Invasive alien predators overturn" food webs France publication`; `"Invasive alien predators overturn the spatial-scaling laws" authors 2026`.
- The 2024 Orchamp paper reports 418 soil samples, 55 trophic groups plus three basal resources and 383 **potential** interactions. Local webs are subgraphs of that literature-derived metaweb assuming co-occurring groups interact; they are not observed local feeding matrices.
- The pond/marsh work is a 2026 preprint with model-imputed missing links and local web reconstruction. It does not meet the current empirical/composite provenance expectations.
- The Charentes amber paper is a qualitative Cretaceous palaeo-web, not a modern bounded ecosystem; no candidate was created. European tetrapod metawebs likewise provide potential interactions, not a French local community matrix.
- No resolved modern French terrestrial forest or non-grassland soil community matrix was found. Lake Annecy has an open printed diet table but remains appendix-only because freshwater is saturated and its abstract/table group counts require reconciliation.

### Primary literature — wetlands, estuaries and coasts

- Broad queries: `France wetland estuary "food web" trophic matrix Camargue Rhone Seine Gironde`; `France coastal marsh "food web" "linear inverse" model compartments`; `France Mediterranean lagoon "food web structure" "matrix" Carlier 2008`; `"Camargue" "food web" trophic matrix functional groups`.
- Restored marsh queries: `"Aquatic food webs in restored marshes" supplementary data matrix`; `"Aquatic food webs in restored marshes" authors 2025 e70071`.
- Brouage/mudflat query: `France "Brouage" "food web" trophic network compartments matrix`.
- Île Nouvelle has valuable local isotope data and MixSIAR diets for eel, thinlip mullet and Delta prawn, but no complete resolved community matrix; the other consumers and resources are shown as isotope groups/biplots. It is rejected rather than inflated into a full web.
- The Bay of Somme model has nine trophic compartments and cannot be padded to the 15-node minimum. Loire rare-earth-transfer and Mediterranean lagoon isotope studies provide partial food-chain evidence, not additional resolved whole-community matrices.

**Documents and records actually opened:** Web of Life networks CSV; Mangal dataset/network APIs; Netzschleuder GATEWAy entry and complete CSV archive; the [European EwE review](https://www.frontiersin.org/journals/marine-science/articles/10.3389/fmars.2023.1182921/full); [Arbach Leloup et al. 2008](https://www.vliz.be/imisdocs/publications/139832.pdf); [Lobry et al. 2008](https://www.int-res.com/articles/meps2008/358/m358p013.pdf); [Lobry et al. 2022](https://hal.inrae.fr/hal-03738729v1/document) and the `Irstea/escroc` repository tree; [Leguerrier et al. 2003](https://www.int-res.com/articles/meps2003/246/m246p017.pdf), the [R `LIM` manual](https://cran.r-universe.dev/LIM/doc/manual.html) and `cran/LIM` repository tree; [Degré et al. 2006](https://hal.science/hal-00096044/document); [Tecchio et al. 2015 landing and manuscript](https://archimer.ifremer.fr/doc/00270/38154/); [Carassou et al. 2025](https://onlinelibrary.wiley.com/doi/full/10.1111/rec.70071) and Crossref metadata; [Janjua & Gerdeaux 2009](https://pdfs.semanticscholar.org/8f63/3933047aba382d5b8239309ccf13cb0fc64c.pdf); [Calderón-Sanou et al. 2024](https://hal.science/hal-04409236v1/document); and [Zenodo 16984068](https://zenodo.org/records/16984068). The Canche ScienceDirect article returned HTTP 400 on both abstract and full-article routes; no matrix is claimed from it. Discovery-level access is not independent Stage-2 verification.

---

## Tier 1 — build next

### Bay of Mont-Saint-Michel, Normandy — `mont-saint-michel-bay`
- **Biome / Region:** Macrotidal estuarine/coastal bay, mudflats and salt-marsh-linked production · NW France · **Lat/Lng (approx):** 48.60, −1.55
- **Source:** Arbach Leloup, F., Desroy, N., Le Mao, P., Pauly, D. & Le Pape, O. (2008). Interactions between a natural food web, shellfish farming and exotic species: The case of the Bay of Mont Saint Michel (France). *Estuarine, Coastal and Shelf Science* 76: 111–120. DOI [10.1016/j.ecss.2007.06.011](https://doi.org/10.1016/j.ecss.2007.06.011), [open PDF](https://www.vliz.be/imisdocs/publications/139832.pdf).
- **Data access:** **ASSUMED (strong).** The open paper prints the 18-group list, local input provenance, Ecopath parameters and the complete predator–prey matrix in Table 3. The matrix was located and read at discovery level but not independently transcribed or checked for row/column orientation and balancing.
- **Raw size:** 18 functional groups / weighted diet links not counted · **Aggregation plan:** → 18 nodes at source resolution; retain phytoplankton, microphytobenthos, detritus, zooplankton, meiofauna, farmed oyster/mussel groups, *Crepidula fornicata*, natural intertidal/subtidal filter feeders, macrobenthic guilds, fish guilds, birds and marine mammals.
- **Data type:** weighted diet fractions and biomass flows · **Provenance:** empirical Ecopath synthesis based substantially on 2003 local PNEC surveys, fisheries data, literature and expert diets.
- **Hard gates:** peer-reviewed publication pass · printed matrix provisional pass · raw 18 groups pass · producer–filter-feeder–fish/bird/mammal structure pass · estuary/coastal-wetland biome pass (2 estuaries live)
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 3 = **15**
- **Tier:** 1 · **Notes:** Best overall candidate. The invasive slipper limpet dominates filter-feeder biomass and accounts for about 40% of primary-production/detritus consumption, yet little of its production reaches higher trophic levels: a concrete “trophic impasse” cascade story. Shellfish farming and fishing provide additional contrasting removals. Stage 2 must preserve the bay's substantial physical imports/exports and avoid interpreting static mixed-trophic impacts as dynamic predictions.

### Gironde Estuary, Nouvelle-Aquitaine — `gironde-estuary`
- **Biome / Region:** Large turbid macrotidal estuary · SW France · **Lat/Lng (approx):** 45.33, −0.75
- **Source:** Lobry, J., David, V., Pasquaud, S., Lepage, M., Sautour, B. & Rochard, E. (2008). Diversity and stability of an estuarine trophic network. *Marine Ecology Progress Series* 358: 13–25. DOI [10.3354/meps07294](https://doi.org/10.3354/meps07294), [open PDF](https://www.int-res.com/articles/meps2008/358/m358p013.pdf). Bayesian reanalysis: Lobry, J. et al. (2022). ESCROpath, a Bayesian mixing model to quantify diets and trophic flows in aquatic food webs. *Methods in Ecology and Evolution* 13: 894–907. DOI [10.1111/2041-210X.13808](https://doi.org/10.1111/2041-210X.13808), [open article](https://hal.inrae.fr/hal-03738729v1/document).
- **Data access:** **ASSUMED (strong).** The 2008 open paper prints the complete predator/prey diet matrix in Table 3 and parameters in Tables 1–2. The 2022 paper adds posterior diet matrices and points to open `escroc` code/data. Stage 2 should choose the 2008 18-compartment model or the reshaped 16-group ESCROpath model deliberately, not mix their edges or weights.
- **Raw size:** 18 ecological compartments plus fisheries and industrial-pumping impact compartments · **Aggregation plan:** → 18 nodes using the source's ecological groups; keep human removals as scenario metadata rather than trophic nodes.
- **Data type:** weighted diet fractions and carbon flows · **Provenance:** empirical Ecopath synthesis from local fish, shrimp, benthos and plankton studies plus literature estimates; Bayesian version additionally uses isotopes and contaminants.
- **Hard gates:** publication pass · printed matrices provisional pass · 16–18-node source versions pass · detritus/plankton/benthos–fish trophic structure pass · estuary biome pass
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 2 = **14**
- **Tier:** 1 · **Notes:** Detritus supplies 88% of first-trophic-level flows, with complementary benthic and pelagic pathways and strong seasonal consumer turnover. Fisheries and nuclear-power-plant impingement affect different parts of the web, while copepods form a key transfer bottleneck. The European sturgeon decline adds a flagship conservation thread, but the source excludes some migratory fish that do not feed locally; do not add them for charisma.

### Brouage Mudflat, Marennes-Oléron Bay — `brouage-mudflat`
- **Biome / Region:** Intertidal estuarine mudflat with oyster culture · SW France · **Lat/Lng (approx):** 45.88, −1.10
- **Source:** Leguerrier, D., Niquil, N., Boileau, N., Rzeznik, J., Sauriau, P.-G., Le Moine, O. & Bacher, C. (2003). Numerical analysis of the food web of an intertidal mudflat ecosystem on the Atlantic coast of France. *Marine Ecology Progress Series* 246: 17–37. DOI [10.3354/meps246017](https://doi.org/10.3354/meps246017), [open PDF](https://www.int-res.com/articles/meps2003/246/m246p017.pdf). Seasonal comparison: Degré, D. et al. (2006), *Estuarine, Coastal and Shelf Science* 69: 107–124, DOI [10.1016/j.ecss.2006.04.001](https://doi.org/10.1016/j.ecss.2006.04.001). Mirror: R `LIM` package, `LIMBrouageMudflat`, [manual](https://cran.r-universe.dev/LIM/doc/manual.html).
- **Data access:** **ASSUMED (strong).** The 2003 open paper prints compartments, constraints and internal/input/output flow results in Tables 1–6. The `LIM` manual independently documents 16 compartments, three external compartments and 95 flows, and the CRAN mirror contains the model RDA. Neither the printed matrix nor the RDA was independently parsed for verification.
- **Raw size:** 16 compartments / 95 a priori flows; 25 flows resolve to zero in the annual model · **Aggregation plan:** → 16 nodes at source resolution, including two detritus compartments, benthic/pelagic microbes, microphytobenthos, phytoplankton, meiofauna, macrofaunal guilds, oysters, nekton and birds.
- **Data type:** weighted carbon flows; inverse-model estimates rather than direct diet percentages · **Provenance:** empirical model synthesis from local biomass/production studies and literature constraints.
- **Hard gates:** publication pass · printed/model matrix provisional pass · raw 16 groups pass · coupled benthic–pelagic trophic structure pass · estuarine wetland pass
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 2 = **14**
- **Tier:** 1 · **Notes:** Microphytobenthos supplies 84% of primary production and drives the coupled mudflat web; shorebird production is constrained by macrofauna, while cultured oysters and migratory birds provide recognizable removal stories. Many flows are inverse-model solutions under sparse constraints, not measured links. Preserve zero-flow results and uncertainty rather than converting every a priori flow into an observed edge. Choose either the annual 2003 model or a source-published 2006 seasonal model during verification.

### Seine Estuary habitat mosaic, Normandy — `seine-estuary-mosaic`
- **Biome / Region:** Macrotidal estuary and adjacent eastern Seine Bay habitats · N France · **Lat/Lng (approx):** 49.43, 0.30
- **Source:** Tecchio, S., Rius, A., Dauvin, J.-C., Lobry, J., Lassalle, G., Morin, J., Bacq, N., Cachera, M., Chaalali, A., Villanueva, C.-M. & Niquil, N. (2015). The mosaic of habitats of the Seine estuary: Insights from food-web modelling and network analysis. *Ecological Modelling* 312: 91–101. DOI [10.1016/j.ecolmodel.2015.05.026](https://doi.org/10.1016/j.ecolmodel.2015.05.026), [open manuscript](https://archimer.ifremer.fr/doc/00270/38154/42026.pdf).
- **Data access:** **ASSUMED (verification risk).** The open manuscript describes six balanced models and their 15 shared groups, local diet/biomass provenance and Supplementary Material Tables 1–3. The Archimer record exposes only the article PDFs; no separate supplement or machine-readable diet matrix was obtained. Stage 2 must acquire the six diet matrices before assigning curation time.
- **Raw size:** six habitat models, each with 12 consumers, two primary producers and one detritus group · **Aggregation plan:** select one source-bounded estuarine habitat at 15 nodes (Southern Channel is a strong candidate); do not union all six models or add marine habitats merely to increase richness.
- **Data type:** weighted diets and carbon flows · **Provenance:** empirical Ecopath synthesis integrating 1996–2002 local research, with literature parameters for poorly measured groups.
- **Hard gates:** peer-reviewed publication pass · **complete matrix not yet obtained; provisional access only** · each source model has 15 nodes · trophic structure pass · estuary biome pass
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 2 = **14**
- **Tier:** 1 (access-dependent) · **Notes:** Dredging and maritime traffic shift the central navigation channel toward detrital/meiofaunal control, whereas the Southern Channel has high throughput and low omnivory. This is a compelling human-disturbance story without needing another open-marine web. Do not merge the 2003 whole-Seine model with the 2015 habitat models; they use different group definitions.

### Aiguillon Cove, Nouvelle-Aquitaine — `aiguillon-cove`
- **Biome / Region:** Intertidal estuarine mudflat and salt-marsh-linked cove · SW France · **Lat/Lng (approx):** 46.30, −1.15
- **Source:** Degré, D., Leguerrier, D., Armynot du Chatelet, E., Rzeznik, J., Auguet, J.-C., Dupuy, C., Marquis, E., Fichet, D., Struski, C., Joyeux, E., Sauriau, P.-G. & Niquil, N. (2006). Comparative analysis of the food webs of two intertidal mudflats during two seasons using inverse modelling: Aiguillon Cove and Brouage Mudflat, France. *Estuarine, Coastal and Shelf Science* 69: 107–124. DOI [10.1016/j.ecss.2006.04.001](https://doi.org/10.1016/j.ecss.2006.04.001), [open manuscript](https://hal.science/hal-00096044/document). Comparison: Leguerrier, D., Degré, D. & Niquil, N. (2007), *Estuarine, Coastal and Shelf Science* 74: 403–418, DOI [10.1016/j.ecss.2007.04.014](https://doi.org/10.1016/j.ecss.2007.04.014).
- **Data access:** **ASSUMED (strong).** The open 2006 manuscript defines the 16 groups and 106 a priori flows and prints seasonal flow results in Tables 4–5. These were located but not independently transcribed or compared with the 2007 analysis.
- **Raw size:** 16 compartments / 106 a priori flows per site, modelled jointly for summer and winter · **Aggregation plan:** use one Aiguillon source season at 16 nodes; do not pool Aiguillon and Brouage or average seasons unless a source-published average is used.
- **Data type:** weighted seasonal carbon flows · **Provenance:** empirical inverse-model synthesis using systematic local surveys, monitoring, literature diets and physiological constraints.
- **Hard gates:** publication pass · printed flow tables provisional pass · raw 16 groups pass · trophic layout pass · estuarine wetland pass
- **Scores:** data 3 · story 2 · geography 3 · cost 3 · recognition 1 = **12**
- **Tier:** 1 · **Notes:** Grazing mullets export locally produced microphytobenthos, migratory shorebirds increase winter consumption, and the web shifts between autotrophic and detrital pathways. It is less distinctive and less data-rich than Brouage; Stage 2 should select between them rather than assume both should become atlas exhibits.

## Appendix — recorded, not planned under current gates

### Canche Estuary, eastern English Channel — `canche-estuary`
- **Biome / Region:** Small, relatively low-impact macrotidal estuary · N France · **Lat/Lng (approx):** 50.40, 1.60
- **Source:** Selleslagh, J., Lobry, J., Amara, R., Brylinski, J.-M. & Boët, P. (2012). Trophic functioning of coastal ecosystems along an anthropogenic pressure gradient: A French case study with emphasis on a small and low impacted estuary. *Estuarine, Coastal and Shelf Science* 112: 73–85. DOI [10.1016/j.ecss.2011.08.004](https://doi.org/10.1016/j.ecss.2011.08.004).
- **Data access:** **INACCESSIBLE in this sweep.** The abstract confirms a 15-compartment Ecopath model and its trophic structure, but ScienceDirect returned HTTP 400 and no open full text, supplement or model file was located. Do not infer a matrix from comparative-review tables.
- **Raw size:** 15 compartments / links not counted · **Aggregation plan:** → 15 source groups if the paper's diet matrix is later obtained.
- **Data type:** weighted Ecopath diets and flows · **Provenance:** empirical model synthesis.
- **Scores:** data 3 · story 2 · geography 3 · cost 3 · recognition 1 = **12**
- **Tier:** appendix (**hard-gate fail: matrix inaccessible**) · **Notes:** A useful low-impact counterpart to the heavily modified Seine, but access must be resolved before promotion. Its numerical score would otherwise meet Tier 1.

### Lake Annecy, Haute-Savoie — `lake-annecy`
- **Biome / Region:** Oligotrophic subalpine freshwater lake · E France · **Lat/Lng (approx):** 45.83, 6.17
- **Source:** Janjua, M.Y. & Gerdeaux, D. (2009). Preliminary trophic network analysis of subalpine Lake Annecy (France) using an Ecopath model. *Knowledge and Management of Aquatic Ecosystems* 392: 02. DOI [10.1051/kmae/2009008](https://doi.org/10.1051/kmae/2009008), [open PDF](https://pdfs.semanticscholar.org/8f63/3933047aba382d5b8239309ccf13cb0fc64c.pdf).
- **Data access:** **ASSUMED (strong).** The open paper prints the diet matrix in Table II. The abstract states 14 functional groups, whereas Table II labels phytoplankton, macrophytes and detritus as groups 15–17; Stage 2 must reconcile whether the source total is 14 consumers plus three basal/detrital groups or another counting convention.
- **Raw size:** 14 stated in abstract; table indexing suggests 17 total compartments · **Aggregation plan:** use only the reconciled source groups; do not split fish stanzas or add a microbial loop to change richness.
- **Data type:** weighted diet percentages and flows · **Provenance:** empirical preliminary Ecopath synthesis with substantial literature estimates.
- **Hard gates:** publication and printed matrix provisional pass · exact node count unresolved · trophic structure pass · **freshwater saturation fail (3 live)**
- **Scores:** data 3 · story 2 · geography 2 · cost 3 · recognition 2 = **12**
- **Tier:** appendix (freshwater saturation; count reconciliation) · **Notes:** Detritus and zoobenthos support a fish community containing whitefish, Arctic char, perch and pike. Revisit only if freshwater reopens; do not hide the abstract/table discrepancy.

### Bay of Biscay continental shelf — `bay-of-biscay-shelf`
- **Biome / Region:** NE Atlantic continental shelf · France/Spain transboundary, source-bounded shelf model · **Lat/Lng (approx):** 46.0, −3.0
- **Source:** Lassalle, G. et al. (2011). Lower trophic levels and detrital biomass control the Bay of Biscay continental shelf food web: Implications for ecosystem management. *Progress in Oceanography* 91: 561–575. Isotope comparison: Lassalle, G., Chouvelon, T., Bustamante, P. & Niquil, N. (2014). An assessment of the trophic structure of the Bay of Biscay continental shelf food web. *Progress in Oceanography* 120: 205–215, [HAL record](https://hal.science/hal-00922534v1).
- **Data access:** **ASSUMED.** Multiple open model papers and a 43-group model lineage were located, but no complete diet matrix was extracted during this sweep. Stage 2 would need to select a particular model year/version and obtain its matrix.
- **Raw size:** 43 functional groups · **Aggregation plan:** → ~22–25 source-coherent guilds, retaining small pelagics, demersal fish, cephalopods, benthos and detritus; aggregation would be nontrivial.
- **Data type:** weighted Ecopath diets and flows · **Provenance:** empirical model synthesis.
- **Hard gates:** publication pass · matrix access provisional · aggregation plausible but nontrivial · trophic structure pass · **marine saturation fail (6 live)**
- **Scores:** data 3 · story 3 · geography 2 · cost 2 · recognition 2 = **12**
- **Tier:** appendix (marine saturation) · **Notes:** Strong lower-trophic-level/detritus and fisheries story, but the saturated marine biome and transboundary scope make the locally bounded estuarine candidates preferable.

### Port-Cros National Park MPA, Provence — `port-cros-mpa`
- **Biome / Region:** NW Mediterranean rocky coastal marine protected area · SE France · **Lat/Lng (approx):** 43.00, 6.40
- **Source:** Valls, A., Gascuel, D., Guénette, S. & Francour, P. (2012). Modeling trophic interactions to assess the effects of a marine protected area: case study in the NW Mediterranean Sea. *Marine Ecology Progress Series* 456: 201–214. DOI [10.3354/meps09701](https://doi.org/10.3354/meps09701), [author PDF](http://gemlemerou.org/cmsv2/images/stories/GEM/Bibliographie/2012_Vals_et_al_ECOPATH.pdf).
- **Data access:** **ASSUMED.** An author PDF and the 41-group Ecopath model were located; the complete diet matrix was not extracted or independently checked.
- **Raw size:** 41 functional groups · **Aggregation plan:** → ~20–25 source-defined fish, invertebrate, producer and detritus guilds; avoid arbitrary selection of charismatic taxa.
- **Data type:** weighted Ecopath diets and flows · **Provenance:** empirical model synthesis.
- **Hard gates:** publication pass · matrix provisional · aggregation plausible · trophic structure pass · **marine saturation fail**
- **Scores:** data 3 · story 3 · geography 2 · cost 2 · recognition 2 = **12**
- **Tier:** appendix (marine saturation) · **Notes:** Protection and fisheries effects make a useful MPA story, but there is no reason to prioritize another marine exhibit while the biome remains saturated.

## Rejected in sweep

### Île Nouvelle restored marshes, Gironde — `ile-nouvelle-restored-marsh`
- **Source:** Carassou, L., Vildier, M., Lobry, J., Lebreton, B., Savoye, N., Kohler, M., Bons, S., Lepage, M., Blanchet, H. & Cabral, H. (2025). Aquatic food webs in restored marshes: a stable-isotope approach in the Gironde estuary (SW France). *Restoration Ecology* 33(5): e70071. DOI [10.1111/rec.70071](https://doi.org/10.1111/rec.70071).
- **Reason:** The open paper supplies isotope groups, biplots and MixSIAR diets for only eel, thinlip mullet and Delta prawn. It does not publish a complete node/edge matrix for the other consumers, and its repository is access-on-request (DOI 10.57745/XGJDWH). Do not turn isotope-compatible rectangles into observed links. Tidal reconnection, eel conservation and introduced freshwater fish make this an excellent future candidate only if a complete source matrix becomes available.

### Bay of Somme, eastern English Channel — `bay-of-somme`
- **Source:** Rybarczyk, H., Elkaïm, B., Ochs, L. & Loquet, N. (2003). Analysis of the trophic network of a macrotidal ecosystem: The Bay of Somme (Eastern Channel). *Estuarine, Coastal and Shelf Science* 58: 405–421. DOI [10.1016/S0272-7714(02)00294-9](https://doi.org/10.1016/S0272-7714(02)00294-9).
- **Reason:** The published model has nine trophic compartments, below the 15-node richness minimum. Do not split source groups or merge it with the Canche or Seine to manufacture richness.

### French Alps Orchamp soil metaweb — `french-alps-soil-metaweb`
- **Source:** Calderón-Sanou, I. et al. (2024). Mountain soil multitrophic networks shaped by the interplay between habitat and pedoclimatic conditions. *Soil Biology and Biochemistry* 190: 109282. DOI [10.1016/j.soilbio.2023.109282](https://doi.org/10.1016/j.soilbio.2023.109282), [open manuscript](https://hal.science/hal-04409236v1/document).
- **Reason:** Local networks are potential-link subgraphs of a literature-derived metaweb under the explicit assumption that co-occurring groups interact locally. The paper itself states that interactions were not directly measured. This is valuable eDNA/community evidence but not an observed local food-web matrix under the current provenance rules.

### French pond/marsh invasive-predator metaweb — `french-pond-marsh-metaweb`
- **Source:** Lemasle, P.-G. et al. (2026). Invasive alien predators overturn the spatial-scaling laws of biocomplexity. Preprint, DOI [10.64898/2026.04.16.718936](https://doi.org/10.64898/2026.04.16.718936). Data/code: [Zenodo 16984068](https://zenodo.org/records/16984068).
- **Reason:** The deposit is admirably complete, but local webs are reconstructed by filtering a literature metaweb and missing links are imputed with a latent-link model. The source is also still a preprint. It is not a resolved empirical local web and should not be promoted merely because wetland coverage is needed.
