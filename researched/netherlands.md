# Region: Netherlands — terrestrial, freshwater, wetland, estuarine & Dutch coastal waters
**Researched:** 2026-11-23 · **Status:** complete (Stage 1 — awaiting independent verification)

**Scope:** The European Netherlands, including terrestrial and freshwater systems, inland and coastal wetlands, estuaries and locally bounded Dutch coastal webs. Country-scale scope is consistent with the earlier Ireland, Scotland and Spain sweeps. The Caribbean Netherlands is excluded and belongs in a separate tropical marine sweep. Transboundary systems are considered only where a Dutch, source-bounded web can be identified; the international Southern Bight of the North Sea model is not claimed as a Dutch candidate. Pollination, seed-dispersal and host–parasite networks are outside the current product surface.

**Previous records:** No Netherlands file or candidate was present in `researched/`, `researched/notbuildable/`, `verified/`, `implemented/` or the sweep ledger. Existing European candidates were not re-scored and no verified or implemented columns were changed.

**Repo context at sweep time:** 16 live webs in `data/webs/index.json`: marine 6 (saturated), freshwater 3 (saturated), grassland 3 (saturated), estuary 2, wetland 1, desert 1, temperate terrestrial forest/heathland/dune 0. No Dutch or other European web is live. Marine, freshwater and grassland candidates are therefore appendix-only even when their matrices and numerical scores are strong. Wetland and non-grassland terrestrial candidates remain eligible.

**Outcome:** four Tier 1 candidates pass discovery-level gates; no Tier 2 candidates were found. `schiermonnikoog-soil-succession` is the strongest: open Nature supplements and a 32-matrix repository document replicated salt-marsh soil webs, with mass-balanced flows and a clear primary-succession story. `hulshorsterzand-soil-succession` uses the parallel Veluwe dune series. `ex-arable-heathland-succession` has 21 source-defined groups and an open feeding diagram, biomass table and C/N-flow model. `wekerom-scots-pine-soil` fills the temperate-forest gap but has the weakest access position because its full matrix was not obtained. All Tier 1 access labels are **ASSUMED**, not verified. The Veluwe candidates are complementary research leads but should not become near-duplicate atlas exhibits; Stage 2 should compare scope and select between them if necessary.

## Candidate table

Scores are data quality, story, geography, aggregation cost and recognition in that order. “Matrix” means the node/link, feeding-preference, flow or diet data needed for curation, not merely a food-web figure or species-abundance table. A numerical score does not override a hard-gate failure.

| Candidate id | Ecosystem | Biome | Raw size | Data access | Scores | Total | Tier / decisive gate |
|---|---|---|---:|---|---|---:|---|
| `schiermonnikoog-soil-succession` | Schiermonnikoog salt-marsh primary succession | Coastal salt-marsh/wetland soil | 16 communities (4 stages × 4 replicates); 12–19 groups per web across the joint series | ASSUMED strong; Nature supplements + BAS 32-matrix repository | 3, 3, 3, 3, 2 | 14 | **1** |
| `hulshorsterzand-soil-succession` | Hulshorsterzand, Veluwe dune primary succession | Terrestrial dune/heathland soil | 16 communities; 12–19 groups per web across the joint series | ASSUMED strong; same Nature/BAS matrix lineage | 3, 3, 3, 3, 1 | 13 | **1** |
| `ex-arable-heathland-succession` | De Mossel and three ex-arable fields, central Veluwe | Restored heathland/terrestrial soil | 4 field webs; 21 functional groups | ASSUMED strong; open paper Fig. 1, Table 1 and flow equations | 3, 3, 3, 3, 1 | 13 | **1** |
| `wekerom-scots-pine-soil` | Wekerom Scots-pine forest, central Netherlands | Temperate coniferous forest soil | 16 soil-fauna groups plus microbial/basal compartments | ASSUMED, verification risk; full 2001 matrix not obtained | 3, 2, 3, 3, 1 | 12 | **1** |
| `lovinkhoeve-farming-soil` | Lovinkhoeve integrated vs conventional farming, Marknesse | Agricultural grassland soil | 2 treatment webs; 12–19 groups across the 15-web comparison | ASSUMED strong; 1993 model + open 2016 comparison | 3, 2, 2, 3, 1 | 11 | Appendix — grassland saturation |
| `soest-pasture-microfauna` | Abandoned pasture, Soest | Grassland soil | GATEWAy plots A/B/C: 96/845, 97/589 and 101/902 nodes/links | ASSUMED strong; GATEWAy + source Table S2 | 2, 3, 2, 2, 1 | 10 | Appendix — grassland saturation |
| `ijsselmeer-ecopath` | IJsselmeer shallow eutrophic lake | Freshwater lake | Not counted; five-page Ecopath chapter | INACCESSIBLE matrix text; open scanned chapter located | 3, 3, 2, 2, 2 | 12 | Appendix — freshwater saturation + access |
| `subtidal-wadden-interactions` | Dutch subtidal Wadden Sea hard-substrate/soft-bottom communities | Coastal marine benthos | 266×266 binary matrix / 6,522 links | ASSUMED strong; open NIOZ CSV + peer-reviewed paper | 2, 2, 2, 1, 3 | 10 | Appendix — marine saturation + high curation risk |
| `dutch-wadden-food-web-model` | Dutch Wadden Sea whole-system model | Coastal marine/estuarine | Not established | INACCESSIBLE preprint and model matrix | 2, 3, 2, 1, 3 | 11 | Appendix — preprint + access + marine saturation |
| `schrama-salt-marsh-assembly` | Schiermonnikoog green/brown ecosystem assembly | Coastal salt-marsh/wetland | 7 stages; 12 conceptual compartments plus species biomass tables | INACCESSIBLE complete edge matrix | 2, 3, 3, 1, 2 | 11 | **Rejected — no resolved matrix + richness** |
| `westerschelde-food-chains` | Westerschelde autotrophic and detrital chains | Estuary | 12 spatial compartments × 6 functional units | INACCESSIBLE resolved link matrix; biomass gradients only | 2, 3, 3, 1, 2 | 11 | **Rejected — no edge matrix + richness** |
| `dutch-grazing-arthropod-webs` | Four Dutch large-herbivore exclosure experiments | Grassland | Arthropod abundance/biomass by trophic group | INACCESSIBLE edge matrix; Dryad community data only | 2, 3, 2, 1, 1 | 9 | **Rejected — no edge matrix + grassland saturation** |

## Sweep log

Searches were run 2026-11-23. Query strings below are recorded verbatim. A zero-hit result means that no resolved Dutch community matrix surfaced; it does not prove that a database has no Dutch taxon records. Direct APIs and document probes are logged separately from web queries.

### Web of Life

- Web query: `site:web-of-life.es Netherlands "food web"` → no results.
- Direct catalog/API: `https://www.web-of-life.es/api/v1/networks.csv` → 330 network rows, filtered locally for `netherlands`, `dutch`, `wadden`, `ijssel`, `schelde`, `hoge veluwe`, `veluwe`, `loosdrecht`, `friesland`, `zeeland` and `groningen` → no matching record of any interaction type.

### GloBI

- Web queries: `site:globalbioticinteractions.org Netherlands "food web" trophic network`; `site:globalbioticinteractions.org (Schiermonnikoog OR Hulshorsterzand OR Soest) food web`; `GloBI "Trophic Interactions in the Subtidal Wadden Sea"` → no bounded Dutch whole-community matrix surfaced. The last query returned the original NIOZ deposit rather than a GloBI mirror.
- GloBI remains useful for Stage-2 taxon-level cross-checks, not as a replacement for the source matrices below.

### Mangal

- Web query: `site:mangal.io Netherlands "food web" ecological network` → no results.
- Direct APIs: `GET https://mangal.io/api/v2/dataset?count=10000` → 175 datasets; `GET https://mangal.io/api/v2/network?count=10000` → 1,487 networks. Records were searched for `netherlands`, `dutch`, `wadden`, `ijssel`, `schelde`, `hoge veluwe`, `veluwe`, `loosdrecht`, `friesland`, `zeeland` and `groningen` → no match.

### Netzschleuder

- Web query: `site:networks.skewed.de Netherlands foodweb "food web"` → no useful result.
- Catalog opened at `https://networks.skewed.de/net/gateway_foodwebs`; complete `gateway_foodwebs.csv.zip` downloaded. All 19,212 node records were searched using the scope terms above.
- Exactly three Dutch location webs were found: **Dutch Microfauna food web PlotA/B/C**, all at Soest, Netherlands. Discovery-level counts are PlotA 96 nodes/845 directed links, PlotB 97/589 and PlotC 101/902. Every link is attributed in the mirror to Mulder & Elser (2009).

### Ecopath / EcoBase publications and aquatic models

- Broad queries: `Netherlands Ecopath "food web" model "diet matrix"`; `Wadden Sea Ecopath food web diet matrix Netherlands`; `Netherlands estuary "food web" "diet matrix" Wadden Scheldt Ecopath`; `Netherlands coastal "Ecopath" "functional groups" model`; `"North Sea" Dutch "Ecopath" model diet matrix food web`.
- IJsselmeer queries: `"IJsselmeer" "food web" Ecopath diet matrix model`; `"Elements of a trophic model for IJsselmeer"`; `"IJsselmeer" "diet matrix" trophic model Lammens`; `"Elements of a trophic model for IJsselmeer" "Table"`; `"IJsselmeer" "Ecopath" "functional groups" Buijse`; `"IJsselmeer" "trophic model" "groups" 1993 Buijse Dekker`; `"Trophic models of aquatic ecosystems" ICLARM 26 pdf 1993`.
- Wadden queries: `"Dutch Wadden Sea" "food web" "interaction matrix" Witte`; `"Wadden Sea" "food web" "Ecopath" Dutch`; `"Food Web Structure and Resilience" "Dutch Wadden Sea"`; `"Dutch Wadden Sea" "Romero" "Steenbeek" Ecopath functional groups diet`; `"50862243" Wadden Sea`; `"Romero" "Food Web Structure and Resilience" Wadden PDF diet`; `"Dutch Wadden Sea" "Ecopath" "diet" Romero`; `site:ssrn.com/abstract=5336477`; `"Food web structure and resilience" "Dutch Wadden Sea" journal`; `"Joana Romero" "Wadden Sea" food web 2026`; `"10.2139/ssrn.5336477"`.
- Scheldt queries: `(Oosterschelde OR Westerschelde) "food web" Ecopath diet matrix model`; `"Oosterschelde" "food web" model trophic network`; `"Westerschelde" "food web" model trophic network`; `"The Westerschelde estuary: two food webs and a nutrient rich desert"`; `"Westerschelde" "linear inverse model" food web compartments`.
- The 2024–2026 Southern Bight model has 43 groups and an open model repository, but its Belgian/French/Dutch regional scope and the saturated marine biome make it an excluded lead rather than a Netherlands candidate.
- Sylt–Rømø Bight and other German/Danish Wadden models were excluded as outside scope. No peer-reviewed, Dutch-bounded whole-Wadden Ecopath model was obtained. The Romero et al. whole-Dutch-Wadden work remains a preprint at discovery level.

### figshare / Zenodo / Dryad / other open repositories

- Broad queries: `Netherlands "food web" (site:figshare.com OR site:zenodo.org OR site:datadryad.org) trophic matrix`; `(site:zenodo.org OR site:datadryad.org OR site:figshare.com) Netherlands "soil food web" matrix`; `site:datadryad.org Netherlands "food web" trophic interactions`; `site:figshare.com Netherlands "food web" trophic interactions matrix ecosystem`; `site:zenodo.org Netherlands "food web" trophic interactions matrix ecosystem`.
- Succession queries: `(site:zenodo.org OR site:datadryad.org OR site:figshare.com) (Schiermonnikoog OR Hulshorsterzand) food web`; `"GB/NERC/BAS/PDC/00911" download matrices`; `"Soil food webs, Successions - Jacobian Matrices" "32"`; `site:data.bas.ac.uk "Schiermonnikoog" "Hulshorsterzand" "zip"`.
- Grazing queries: `"Large mammalian herbivores affect arthropod food webs" Netherlands location`; `"Large mammalian herbivores affect arthropod food webs" matrix species links`; `Netherlands arthropod "food web" "Dryad" herbivores`; `Oostvaardersplassen "food web" arthropod matrix`; `Hoge Veluwe "food web" arthropod trophic links`.
- Useful deposits found: NIOZ `10.25850/nioz/7b.b.gg`; BAS Polar Data Centre `10.5285/1acea44e-44da-4225-8e98-203d742a0a82`; Dryad `10.5061/dryad.7m0cfxq0x` (abundance data only, rejected as an atlas web). The Dryad coastal habitat-modification dataset concerns North American marsh and West African seagrass, not the Netherlands. The cold-water coral Zenodo record concerns Norwegian communities, not a Dutch web.
- ICES figshare file `50862243` surfaced in Wadden searches but returned HTTP 202 with an empty body during the direct download probe; no matrix is claimed from it.

### Primary literature — terrestrial soil, heathland and grassland

- Broad queries: `Netherlands terrestrial "food web" trophic network matrix soil forest`; `Netherlands heathland "food web" matrix trophic links`; `Netherlands forest "food web" "interaction matrix" soil pine`.
- Scots-pine queries: `Netherlands "soil food web" "Scots pine" matrix Berg 2007`; `"Community food web, decomposition and nitrogen mineralisation" matrix`; `"Community food web" "stratified Scots pine forest soil" PDF`; `"Temporal and spatial variability in soil food web structure" PDF matrix`; `"Temporal and spatial variability" "Scots pine" "functional groups"`; `Berg Bengtsson 2007 soil food web Netherlands supplementary data`; `"Community food web" "Kootwijk" Berg 2001`; `"Temporal and spatial variability in soil food web structure" location forest Netherlands`; `"stratified Scots pine forest soil" "location" Berg`; `"Scots pine forest" "Matty Berg" Netherlands site`; `"Ecological characteristics of a nitrogen-saturated coniferous forest" location Netherlands`.
- Grassland/soil queries: `Dutch "soil food web" "matrix" functional groups agricultural grasslands`; `"Dutch Microfauna food web" Soest PlotA PlotB PlotC`; `Soest Netherlands soil food web Plot A Plot B Plot C microfauna`; `"Mulder" "Elser" 2009 "Soest" food web Plot`; `"Soil resource supply influences faunal" supplementary food web matrix`; `"Dutch Microfauna" "Mulder & Elser"`; `"Dutch pasture" "food web" "supplementary" Mulder matrix`; `"Testing for top-down cascading effects" "Data Availability"`; `"Soil acidity, ecological stoichiometry and allometric scaling in grassland food webs" 62 taxa`.
- Ex-arable queries: `"Soil food web structure during ecosystem development after land abandonment" matrix`; `"Soil food web structure during ecosystem development" "functional groups" Netherlands`; `"Modelling C and N mineralisation" Holtkamp "21 functional groups"`; `"Soil food web structure during ecosystem development after land abandonment" DOI 2008 Holtkamp`; `"Holtkamp" 2011 ex-arable "central Netherlands" field locations`; `"Soil food web structure during ecosystem development" "Mossel"`; `"De Mossel" "Holtkamp" food web`.
- Lovinkhoeve query: `"Calculation of nitrogen mineralization in soil food webs" DOI`.
- The open 2009 Mulder & Elser article confirms 22 literature-derived trophic guilds and potential, not observed pairwise, links. The open 2020 Conti et al. article uses 62 taxa from one abandoned pasture and points back to Table S2. These source statements must be reconciled with GATEWAy's larger replicate node counts before curation.

### Primary literature — salt marsh and aquatic systems

- Salt-marsh queries: `"The interplay of green and brown webs during salt marsh succession" food web functional groups`; `Schiermonnikoog salt marsh "food web" matrix Schrama`; `"Schiermonnikoog" "food web" "functional groups"`; `"Ecosystem assembly rules" Schrama "Appendix C" food web links`; `"Ecosystem assembly rules" "10.1890/11-1102.1"`.
- Neutel succession queries: `"Schiermonnikoog" "Neutel" "food webs" functional groups 2007`; `"Reconciling complexity with stability in naturally assembling food webs" data matrix`; `"Food web stability and weighted connectance" "15 soil food webs" functional groups`; `"nature06154" "Supplementary Table" food web biomass feeding`; `"Neutel" 2007 Schiermonnikoog "Table S" food web data`; `"Schiermonnikoog Primary Succession Stage" "19" food web`; `"Hulshorsterzand Primary Succession" "12" "19"`; `"Hulshorsterzand" food web data matrix supplementary`; `"Neutel_Additional_data_file_1" "functional groups"`; `"SCH-1" "SCH-2" "SCH-3" "SCH-4" food web groups`; `"HUL-1" "HUL-2" "HUL-3" "HUL-4" food web groups`.
- Other aquatic queries: `Netherlands wetland "food web" trophic matrix Oostvaardersplassen`; `Netherlands lake stream "food web" trophic network matrix`; `Netherlands freshwater "food web" "interaction matrix" lake pond stream`; `"Enhancing ecological complexity in soft-bottom coastal ecosystems" authors 2024 DOI`.
- Cross-database query: `Netherlands "food web" "Ecological Archives" matrix` → no additional resolved Dutch web; the relevant open access routes are the Nature/BAS, institutional-repository and NIOZ files documented here.

**Documents and records actually opened:** Web of Life networks CSV; Mangal dataset/network APIs; Netzschleuder GATEWAy entry and complete node/edge CSV archive; [NIOZ dataset landing and CKAN metadata](https://doi.nioz.nl/dataset/7bbgg), its interaction matrix, references, metadata and R script; [Witte et al. 2024 DOI record](https://doi.org/10.1111/rec.14126); [Mulder & Elser 2009](https://pmc.ncbi.nlm.nih.gov/articles/PMC3597259/); [Conti et al. 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7391537/); [Mulder et al. 2009 related meadow/heathland study](https://pmc.ncbi.nlm.nih.gov/articles/PMC2705724/); [Neutel additional data file](https://research-portal.uu.nl/ws/files/63743058/Neutel_Additional_data_file_1_.pdf); [BAS dataset record](https://data.bas.ac.uk/full-record.php?id=GB/NERC/BAS/PDC/00911) and RAMADDA entry; [van Altena et al. 2016 open PDF](https://pure.uva.nl/ws/files/26420703/Food_web_stability_and_weighted_connectance.pdf); [Holtkamp et al. 2011 open PDF](https://edepot.wur.nl/161234); [Schrama et al. 2012 open PDF](https://research.vu.nl/ws/portalfiles/portal/686098/295851.pdf); [Hamerlynck et al. 1993 open PDF](https://www.vliz.be/imisdocs/publications/370050.pdf); [WorldFish book record](https://www.worldfishcenter.org/publication/trophic-models-aquatic-ecosystems) and complete scanned PDF; [Zhu et al. Dryad record](https://datadryad.org/stash/dataset/doi:10.5061/dryad.7m0cfxq0x); Crossref metadata for the principal DOIs. The Berg et al. 2001 Wiley PDF and 2007 Wiley article returned HTTP 403; the Romero preprint page and ICES file did not yield a readable model. Discovery-level access is not independent Stage-2 verification.

---

## Tier 1 — build next

### Schiermonnikoog salt-marsh primary-succession soil webs — `schiermonnikoog-soil-succession`
- **Biome / Region:** Coastal salt-marsh/wetland belowground web · Schiermonnikoog, northern Netherlands · **Lat/Lng (approx):** 53.50, 6.25
- **Source:** Neutel, A.-M., Heesterbeek, J.A.P., van de Koppel, J., Hoenderboom, G., Vos, A., Kaldeway, C., Berendse, F. & de Ruiter, P.C. (2007). Reconciling complexity with stability in naturally assembling food webs. *Nature* 449: 599–602. DOI [10.1038/nature06154](https://doi.org/10.1038/nature06154). Open [additional data file](https://research-portal.uu.nl/ws/files/63743058/Neutel_Additional_data_file_1_.pdf). Dataset: Neutel et al. (2016), *Soil food webs, Successions — Jacobian Matrices*, BAS Polar Data Centre, DOI [10.5285/1acea44e-44da-4225-8e98-203d742a0a82](https://doi.org/10.5285/1acea44e-44da-4225-8e98-203d742a0a82). Reanalysis: van Altena, Hemerik & de Ruiter (2016), *Theoretical Ecology* 9: 49–58, DOI [10.1007/s12080-015-0291-7](https://doi.org/10.1007/s12080-015-0291-7).
- **Data access:** **ASSUMED (strong).** Nature Supplementary Table 1 contains observed group biomass; Added Table 2 contains the feeding-relation/prey-preference matrix; the BAS record describes all 32 Jacobian matrices (two successions × four stages × four replicates). The additional file was opened, but the 32 matrices were not independently parsed or compared against the paper. Do not mistake Jacobian interaction strengths for diet fractions.
- **Raw size:** 16 Schiermonnikoog communities; the joint Schiermonnikoog/Hulshorsterzand webs contain 12–19 trophic groups each · **Aggregation plan:** select one source web that independently contains 15–19 nodes; no new aggregation. Do not union stages or replicates merely to reach the minimum. An averaged stage web from van Altena et al. is an alternative because that averaging is source-published.
- **Data type:** weighted, mass-balanced biomass flows and Jacobian interaction strengths; not direct diet percentages · **Provenance:** empirical model synthesis from local biomass observations, literature feeding preferences and physiological parameters.
- **Hard gates:** peer-reviewed publication and repository pass · matrix provisional pass · a source-resolved 15–19-node selection plausible · detritus/root–microbe–consumer–predator structure pass · wetland biome pass (1 live)
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 2 = **14**
- **Tier:** 1 · **Notes:** Best overall candidate. Four stages show how productivity and food-web complexity assemble over a natural salt-marsh chronosequence, while weak links in long loops maintain stability. The Wadden Sea provides audience recognition without using the saturated whole-marine biome. Stage 2 must choose a stage/replicate on scientific rather than richness grounds, verify exact node membership and preserve the belowground-only scope. Do not merge Schrama's aboveground groups into this web to make it look more charismatic.

### Hulshorsterzand dune primary-succession soil webs, Veluwe — `hulshorsterzand-soil-succession`
- **Biome / Region:** Terrestrial sandy dune/heathland belowground web · Hulshorsterzand, Veluwe, central Netherlands · **Lat/Lng (approx):** 52.23, 5.74
- **Source:** Neutel et al. (2007), *Nature* 449: 599–602, DOI [10.1038/nature06154](https://doi.org/10.1038/nature06154); Neutel et al. (2016) BAS dataset, DOI [10.5285/1acea44e-44da-4225-8e98-203d742a0a82](https://doi.org/10.5285/1acea44e-44da-4225-8e98-203d742a0a82); van Altena et al. (2016), DOI [10.1007/s12080-015-0291-7](https://doi.org/10.1007/s12080-015-0291-7). These are the same source and matrix files cited for `schiermonnikoog-soil-succession`, not independent replications.
- **Data access:** **ASSUMED (strong).** The BAS record explicitly includes Hulshorsterzand's four stages and four replicates per stage. Added Table 2 supplies the master feeding-preference matrix and Supplementary Table 1 identifies groups present. Matrix files not independently parsed.
- **Raw size:** 16 communities; 12–19 groups per web across the joint series · **Aggregation plan:** one source-resolved stage/replicate with 15–19 nodes; no pooling or splitting.
- **Data type:** weighted biomass flows and Jacobian interaction strengths · **Provenance:** empirical model synthesis from local biomass and literature parameters.
- **Hard gates:** publication pass · matrix provisional pass · 15–19-node selection plausible · trophic layout pass · terrestrial dune/heathland biome pass (0 live)
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 1 = **13**
- **Tier:** 1 · **Notes:** Strong terrestrial counterpart to the salt-marsh candidate, with the same scientifically valuable succession/stability story and open data route. Hulshorsterzand has less audience recognition and overlaps thematically with the ex-arable Veluwe candidate below. Stage 2 should compare their exact sites and narratives; building both would risk two similar Veluwe soil-succession exhibits.

### De Mossel and ex-arable fields, central Veluwe — `ex-arable-heathland-succession`
- **Biome / Region:** Restored heathland and ex-arable terrestrial soil · central Netherlands · **Lat/Lng (approx):** De Mossel 52.061, 5.752
- **Source:** Holtkamp, R., van der Wal, A., Kardol, P., van der Putten, W.H., de Ruiter, P.C. & Dekker, S.C. (2011). Modelling C and N mineralisation in soil food webs during secondary succession on ex-arable land. *Soil Biology and Biochemistry* 43(2): 251–260. DOI [10.1016/j.soilbio.2010.10.004](https://doi.org/10.1016/j.soilbio.2010.10.004), [open PDF](https://edepot.wur.nl/161234). Field structure: Holtkamp, R., Kardol, P., van der Wal, A., Dekker, S.C., van der Putten, W.H. & de Ruiter, P.C. (2008). Soil food web structure during ecosystem development after land abandonment. *Applied Soil Ecology* 39(1): 23–34. DOI [10.1016/j.apsoil.2007.11.002](https://doi.org/10.1016/j.apsoil.2007.11.002).
- **Data access:** **ASSUMED (strong).** The open 2011 paper prints the 21-group feeding diagram (Fig. 1), group biomasses and physiological parameters (Table 1), feeding-preference equations and calculated C/N mineralisation flows. Fig. 1 was read at discovery level; a numerical edge/flow matrix was not independently reconstructed or checked against the 2008 field paper.
- **Raw size:** four field webs / 21 functional groups · **Aggregation plan:** use one field's 21 source groups; no aggregation. The reference heathland, De Mossel, is a coherent first choice; the 2-, 9- and 22-year ex-arable fields are alternatives, not nodes to pool.
- **Data type:** weighted model feeding rates and C/N mineralisation flows · **Provenance:** empirical model synthesis using seasonal field biomass and mineralisation measurements plus literature parameters and limited calibration.
- **Hard gates:** publication pass · feeding structure and model inputs provisional pass · raw 21 groups pass · explicit trophic levels and energy channels pass · heathland biome pass (0 live)
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 1 = **13**
- **Tier:** 1 · **Notes:** Land abandonment drives a shift from root toward fungal/bacterial energy channels; higher predators have small direct but much larger indirect effects on C and N mineralisation. This is an unusually clear bottom-up restoration and top-down cascade story with no aggregation work. Do not describe model-generated flows as measured diets. Stage 2 must extract feeding links from Fig. 1 and verify whether source-published feeding rates can be normalized honestly for the atlas.

### Wekerom Scots-pine forest soil, central Netherlands — `wekerom-scots-pine-soil`
- **Biome / Region:** Temperate coniferous plantation forest floor · Wekerom, central Netherlands · **Lat/Lng (approx):** 52.10, 5.70 (Stage 2 must verify the stand centroid)
- **Source:** Berg, M., de Ruiter, P., Didden, W., Janssen, M., Schouten, T. & Verhoef, H. (2001). Community food web, decomposition and nitrogen mineralisation in a stratified Scots pine forest soil. *Oikos* 94(1): 130–142. DOI [10.1034/j.1600-0706.2001.09121.x](https://doi.org/10.1034/j.1600-0706.2001.09121.x). Temporal extension: Berg, M.P. & Bengtsson, J. (2007). Temporal and spatial variability in soil food web structure. *Oikos* 116(11): 1789–1804. DOI [10.1111/j.0030-1299.2007.15748.x](https://doi.org/10.1111/j.0030-1299.2007.15748.x), [abstract record](https://publications.slu.se/?file=publ/show&id=14957). Site corroboration: Berg & Verhoef (1998), *Biology and Fertility of Soils* 26: 258–267, DOI [10.1007/s003740050377](https://doi.org/10.1007/s003740050377).
- **Data access:** **ASSUMED (verification risk).** The 2001 paper and Appendix 1 are citable, and the 2007 study confirms 16 soil-fauna functional groups and an appendix. Full texts and the complete feeding/flow matrix were not obtained in this sweep (Wiley HTTP 403). Stage 2 must obtain the 2001 paper's group/feeding tables and establish the total including microbes, roots and detritus; this candidate should be downgraded if no complete matrix can be read.
- **Raw size:** 16 soil-fauna functional groups plus microbial and basal resource compartments; exact total not established · **Aggregation plan:** use one source-coherent horizon/season and its existing functional groups, expected ~20 nodes; do not pool litter, fermentation and humus horizons or years simply to reach 15.
- **Data type:** weighted carbon/nitrogen flows, with qualitative feeding structure · **Provenance:** empirical model synthesis from stratified field sampling and literature physiological parameters.
- **Hard gates:** publication pass · **complete matrix not yet obtained; provisional access only** · source groups make 15–25 plausible · stratified detrital trophic structure pass · temperate forest biome pass (0 live)
- **Scores:** data 3 · story 2 · geography 3 · cost 3 · recognition 1 = **12**
- **Tier:** 1 (access-dependent) · **Notes:** The only forest-floor candidate, with litter–microbe–microbivore–predator channels and measured decomposition/mineralisation. Its story is less immediately dramatic than succession or predator removal, and access is materially weaker than for the other Tier 1 candidates. Verify the Wekerom stand and the 2001 matrix before assigning curation time.

---

## Appendix — recorded, not planned under current gates

### Lovinkhoeve integrated and conventional farming soil webs, Marknesse — `lovinkhoeve-farming-soil`
- **Biome / Region:** Agricultural grassland soil · Marknesse, Flevoland · **Lat/Lng (approx):** 52.72, 5.87
- **Source:** de Ruiter, P.C., van Veen, J.A., Moore, J.C., Brussaard, L. & Hunt, H.W. (1993). Calculation of nitrogen mineralization in soil food webs. *Plant and Soil* 157: 263–273. DOI [10.1007/BF00011055](https://doi.org/10.1007/BF00011055). Open comparison and biomass table: van Altena et al. (2016), DOI [10.1007/s12080-015-0291-7](https://doi.org/10.1007/s12080-015-0291-7).
- **Data access:** ASSUMED (strong) — original feeding preferences/parameters plus open 2016 Appendix Table 1 and flow methods; original matrix not independently transcribed.
- **Raw size:** two treatment webs; 12–19 groups across the 15-web comparison · **Aggregation plan:** select one source treatment web with at least 15 groups; no new aggregation.
- **Data type:** weighted biomass flows · **Provenance:** empirical model synthesis.
- **Hard gates:** publication and plausible matrix pass · aggregation plausible · trophic structure pass · **grassland saturation fail (3 live)**
- **Scores:** data 3 · story 2 · geography 2 · cost 3 · recognition 1 = **11**
- **Tier:** appendix (biome-saturation gate) · **Notes:** A classic integrated-versus-conventional farming comparison with nutrient-cycling relevance. Revisit if agricultural grassland reopens; do not relabel it as forest or wetland to bypass saturation.

### Soest abandoned-pasture microfauna webs — `soest-pasture-microfauna`
- **Biome / Region:** Abandoned low-input pasture soil · Soest, Netherlands · **Lat/Lng:** 52.149957, 5.300059 (GATEWAy)
- **Source:** Mulder, C. & Elser, J.J. (2009). Soil acidity, ecological stoichiometry and allometric scaling in grassland food webs. *Global Change Biology* 15: 2730–2738. DOI [10.1111/j.1365-2486.2009.01899.x](https://doi.org/10.1111/j.1365-2486.2009.01899.x), [open article](https://pmc.ncbi.nlm.nih.gov/articles/PMC3597259/). Cascade application: Conti, E., Di Mauro, L.S., Pluchino, A. & Mulder, C. (2020). Testing for top-down cascading effects in a biomass-driven ecological network of soil invertebrates. *Ecology and Evolution* 10: 7062–7072. DOI [10.1002/ece3.6408](https://doi.org/10.1002/ece3.6408). Mirror: Brose et al., GATEWAy v1.0, DOI [10.25829/idiv.283-3-756](https://doi.org/10.25829/idiv.283-3-756), [Netzschleuder](https://networks.skewed.de/net/gateway_foodwebs).
- **Data access:** ASSUMED (strong) — GATEWAy CSVs parsed at discovery level; source Table S2 is the complete inventory of literature-consistent guild links. Mirror and original source were not compared link by link.
- **Raw size:** PlotA 96 taxa/845 links, PlotB 97/589, PlotC 101/902; Conti et al. describe 62 taxa in 5 main guilds and the source uses 22 guilds · **Aggregation plan:** choose one replicate and use the source's 22 literature-derived guilds or a defensible coarser subset no smaller than 15; never expand the 2020 model's five simulation guilds into species without the original matrix.
- **Data type:** qualitative potential links; biomass and body-mass annotations · **Provenance:** composite — local community observations expanded through literature-derived feeding guilds.
- **Hard gates:** publication and matrix provisional pass · aggregation plausible · trophic structure pass · **grassland saturation fail (3 live)**
- **Scores:** data 2 · story 3 · geography 2 · cost 2 · recognition 1 = **10**
- **Tier:** appendix (biome-saturation gate) · **Notes:** Omnivore removal has a much larger simulated effect than carnivore removal, offering a real cascade narrative. The mirror labels most links “direct observation,” whereas the original article explicitly says links were inferred from literature and all taxa in a resource guild were linked to every taxon in a consumer guild. Resolve that discrepancy and the 62-taxon versus 96–101-node mismatch before any future use.

### IJsselmeer Ecopath model — `ijsselmeer-ecopath`
- **Biome / Region:** Large shallow eutrophic freshwater lake · central Netherlands · **Lat/Lng (approx):** 52.65, 5.35
- **Source:** Buijse, A.D., van Eerden, M.R., Dekker, W. & van Densen, W.L.T. (1993). Elements of a trophic model for IJsselmeer (The Netherlands), a shallow eutrophic lake. In Christensen, V. & Pauly, D. (eds), *Trophic Models of Aquatic Ecosystems*, ICLARM Conference Proceedings 26, pp. 90–94. [WorldFish record and open scanned volume](https://www.worldfishcenter.org/publication/trophic-models-aquatic-ecosystems).
- **Data access:** INACCESSIBLE for the complete machine-readable diet matrix in this sweep — the chapter and Tables 1/4 were located in the scanned volume, but the scan has no text layer and no separate model deposit was found. No group count or diet value is guessed.
- **Raw size:** not established; five-page model chapter · **Aggregation plan:** use only the source's published functional groups after the tables are read; do not split pooled fish or plankton groups.
- **Data type:** weighted Ecopath parameters and diet matrix · **Provenance:** empirical model synthesis.
- **Hard gates:** citable agency volume pass · **matrix access and exact aggregation unconfirmed** · trophic structure expected from Ecopath · **freshwater saturation fail (3 live)**
- **Scores:** data 3 · story 3 · geography 2 · cost 2 · recognition 2 = **12**
- **Tier:** appendix (freshwater saturation and access) · **Notes:** Smelt, bream, pikeperch, cormorants and fisheries offer a strong eutrophic-lake story. Revisit only if freshwater reopens and the printed diet table is transcribed and independently checked.

### Dutch subtidal Wadden Sea interaction matrix — `subtidal-wadden-interactions`
- **Biome / Region:** Subtidal coastal marine benthos · Dutch Wadden Sea · **Lat/Lng (approx):** 53.35, 6.20
- **Source:** Witte, S., Dickson, J., Franken, O., Holthuijsen, S., Govers, L.L., Olff, H. & van der Heide, T. (2024). Enhancing ecological complexity in soft-bottom coastal ecosystems: the impact of introducing hard substrates. *Restoration Ecology* 32(4): e14126. DOI [10.1111/rec.14126](https://doi.org/10.1111/rec.14126). Dataset: Witte et al. (2024), *Trophic Interactions in the Subtidal Wadden Sea*, NIOZ, DOI [10.25850/nioz/7b.b.gg](https://doi.org/10.25850/nioz/7b.b.gg), CC0.
- **Data access:** ASSUMED (strong) — open `Interaction Matrix.csv`, `References.csv`, metadata and R script were downloaded and counted. Stage 2 must check taxonomy and whether a single source-coherent sampled community can be isolated.
- **Raw size:** 266×266 binary matrix / 6,522 directed links; 268 unique labels occur across row and column names because they are not identical · **Aggregation plan:** first select an observed hard-substrate or soft-bottom sample web, then use only defensible source-supported coarse groups (~20–25). The mixed species/genus/family labels and duplicate higher taxa make aggregation high risk; arbitrary taxonomic pooling would destroy provenance.
- **Data type:** qualitative potential interactions from literature, subset by locally observed taxa · **Provenance:** composite — two-year hard-substrate experiment and two subtidal campaigns combined with literature feeding links.
- **Hard gates:** peer-reviewed paper and open matrix pass · **plausible aggregation high risk** · trophic layout pass · **marine saturation fail (6 live)**
- **Scores:** data 2 · story 2 · geography 2 · cost 1 · recognition 3 = **10**
- **Tier:** appendix (marine saturation; high-curation-risk) · **Notes:** Introduced hard substrates and invasive species provide a restoration story, but this is a regional potential-interaction library for constructing sample webs, not one ready-made whole-Wadden web. Basal resources are added to every sample by the R script. Do not use the full 266-node matrix as an atlas exhibit or present literature-inferred links as locally observed feeding.

### Dutch Wadden Sea whole-system food-web model — `dutch-wadden-food-web-model`
- **Biome / Region:** Coastal marine/estuarine · Dutch Wadden Sea · **Lat/Lng (approx):** 53.35, 6.20
- **Source:** Romero, J., Steenbeek, J., Bijleveld, A., de la Barra, P., Kleefstra, R., Brasseur, S., Overzee, H. & Peck, M. (2025). Food Web Structure and Resilience of an UNESCO World Heritage Site, the Dutch Wadden Sea. Preprint. DOI [10.2139/ssrn.5336477](https://doi.org/10.2139/ssrn.5336477).
- **Data access:** INACCESSIBLE — the preprint page and associated ICES file did not yield a readable model or matrix. No peer-reviewed version was located, and raw group count, model family and diet type remain unconfirmed.
- **Raw size:** not established · **Aggregation plan:** none until the model and source group list are obtained.
- **Data type:** unknown · **Provenance:** preprint food-web model; details not established.
- **Hard gates:** **peer-reviewed/agency provenance and access fail** · aggregation unconfirmed · trophic structure likely but unverified · **marine saturation fail (6 live)**
- **Scores:** data 2 · story 3 · geography 2 · cost 1 · recognition 3 = **11**
- **Tier:** appendix (preprint, inaccessible matrix and marine saturation) · **Notes:** UNESCO status, migratory birds, seals and fisheries make this an attractive future lead, not a buildable candidate now. Revisit upon peer-reviewed publication with an obtainable diet matrix; do not fill the gap using the separate NIOZ benthic matrix.

---

## Rejected scored candidates

### Schiermonnikoog green/brown ecosystem assembly — `schrama-salt-marsh-assembly`
- **Biome / Region:** Coastal salt-marsh/wetland · Schiermonnikoog · **Lat/Lng (approx):** 53.50, 6.17
- **Source:** Schrama, M., Berg, M.P. & Olff, H. (2012). Ecosystem assembly rules: the interplay of green and brown webs during salt marsh succession. *Ecology* 93(11): 2353–2364. DOI [10.1890/11-1102.1](https://doi.org/10.1890/11-1102.1), [open PDF](https://research.vu.nl/ws/portalfiles/portal/686098/295851.pdf).
- **Data access:** INACCESSIBLE as a complete edge matrix — open appendices describe species biomass and feeding-guild assignment, but Fig. 1 is a 12-compartment conceptual model and the paper explicitly cautions that biomass does not quantify interaction strength.
- **Raw size:** seven stages and 12 conceptual compartments, plus species-level biomass tables · **Aggregation plan:** none; cannot invent links among the 12 groups or splice them into Neutel's belowground webs.
- **Data type:** biomass by feeding guild, not edge data · **Provenance:** local field observations plus literature guild assignments.
- **Hard gates:** publication pass · **node/edge matrix fail** · **15-node richness fail** · trophic structure conceptual only · wetland biome pass
- **Scores:** data 2 · story 3 · geography 3 · cost 1 · recognition 2 = **11**
- **Tier:** rejected (no resolved edge matrix and richness) · **Notes:** Excellent ecological narrative of marine-subsidised brown webs, intermediate green-web dominance and late brown-web dominance, but not an atlas-ready food web. It may contextualize the Neutel candidate, never supply unsourced edges.

### Westerschelde autotrophic and detrital food chains — `westerschelde-food-chains`
- **Biome / Region:** Estuary · Dutch–Belgian Westerschelde · **Lat/Lng (approx):** 51.35, 3.85
- **Source:** Hamerlynck, O., Mees, J., Craeymeersch, J.A., Soetaert, K., Hostens, K., Cattrijsse, A. & van Damme, P.A. (1993). The Westerschelde Estuary: two food webs and a nutrient rich desert. *Progress in Belgian Oceanographic Research*, 217–234. [Open PDF](https://www.vliz.be/imisdocs/publications/370050.pdf).
- **Data access:** INACCESSIBLE as a resolved link matrix — the open paper reports biomass gradients for six functional units across 12 spatial compartments. It does not print a community adjacency or diet matrix.
- **Raw size:** 12 spatial compartments × 6 functional units; spatial boxes are not trophic nodes · **Aggregation plan:** none; do not turn a 12-compartment hydrodynamic grid into atlas nodes.
- **Data type:** biomass gradients, not edge data · **Provenance:** empirical/model synthesis.
- **Hard gates:** citable proceedings pass · **edge matrix fail** · **15-node trophic richness fail** · two-chain trophic hypothesis present · estuary biome pass (2 live)
- **Scores:** data 2 · story 3 · geography 3 · cost 1 · recognition 2 = **11**
- **Tier:** rejected (no resolved matrix and richness) · **Notes:** The nutrient-rich desert, hypoxia, detrital subsidy and mysid bottleneck are compelling, but the source cannot support a link atlas. A different, fully resolved Westerschelde model would be needed.

### Dutch large-herbivore grassland arthropod experiments — `dutch-grazing-arthropod-webs`
- **Biome / Region:** Grassland · four long-term exclosure sites in the Netherlands · **Lat/Lng (approx):** site-specific coordinates required from the paper
- **Source:** Zhu, Y., Veen, G.F., Heinen, R., Wang, D., Jiang, M., Jin, H. & Bakker, E.S. (2023). Large mammalian herbivores affect arthropod food webs via changes in vegetation characteristics and microclimate. *Journal of Ecology* 111(9): 2077–2089. DOI [10.1111/1365-2745.14163](https://doi.org/10.1111/1365-2745.14163). Dryad DOI [10.5061/dryad.7m0cfxq0x](https://doi.org/10.5061/dryad.7m0cfxq0x).
- **Data access:** INACCESSIBLE as an edge matrix — the paper and Dryad record contain arthropod abundance, biomass and community composition by trophic group, vegetation and microclimate, not consumer–resource links.
- **Raw size:** four experiments; trophic-group abundance/biomass tables · **Aggregation plan:** none; structural-equation paths are not feeding links.
- **Data type:** community and environmental measurements · **Provenance:** manipulative field experiment, but not a resolved food-web matrix.
- **Hard gates:** publication pass · **edge matrix fail** · aggregation impossible without invented links · grassland biome saturated
- **Scores:** data 2 · story 3 · geography 2 · cost 1 · recognition 1 = **9**
- **Tier:** rejected (no edge matrix and grassland saturation) · **Notes:** Grazing changes herbivores, predators, parasitoids and detritivores through different vegetation and microclimate pathways, but those indirect causal paths cannot be converted into a food web. The related cattle metabarcoding paper found in the same sweep is in Israel and is out of scope.
