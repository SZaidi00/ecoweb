# Region: Germany — terrestrial, freshwater, wetland and German coastal waters
**Researched:** 2026-11-23 · **Status:** complete (Stage 1 — awaiting independent verification)

**Scope:** Germany as one country-scale target, including forest and other terrestrial systems, inland freshwaters, wetlands, and locally bounded German or German–Danish coastal webs. Country-scale scope is consistent with the earlier Ireland, Netherlands, Scotland and Spain sweeps. Transboundary webs are retained only when the source defines a coherent German or German–Danish ecosystem. Whole-North-Sea and whole-Baltic models already in the ledger were not relabeled as German. Pollination-only and host–parasitoid-only networks are outside the current product surface; whole-food-web datasets that also include parasites remain eligible.

**Previous records:** No Germany file or candidate was present in `researched/`, `researched/notbuildable/`, `verified/`, `implemented/` or the sweep ledger. Existing European and circumpolar candidates were not re-scored, and no verified or implemented columns were changed.

**Repo context at sweep time:** 16 live webs in `data/webs/index.json`: marine 6 (saturated), freshwater 3 (saturated), grassland 3 (saturated), estuary 2, wetland 1, desert 1, and temperate terrestrial forest 0. No German or other European web is live. Marine, freshwater and grassland candidates are therefore appendix-only even when their matrices and numerical scores are strong. Temperate forest and other non-grassland terrestrial candidates remain eligible.

**Outcome:** two Tier 2 candidates pass discovery-level gates; no Tier 1 candidate was found. `german-forest-soil-webs` is the most practical lead: 48 replicated, plot-resolved forest webs with open qualitative matrices and a mixed empirical/literature evidence base. Its 89–168 taxa per plot require substantial, explicitly documented aggregation. `messel-shale-food-webs` is an exceptional open paleo-web but has the same problem at a larger scale and uses evidence-weighted reconstruction rather than observed modern diets. Seven appendix candidates are blocked primarily by biome saturation. Three attractive isotope/energy-flux studies were rejected because they do not publish resolved consumer–resource matrices or fall far below 15 nodes.

**Access terminology:** `ASSUMED` means a citable source and concrete matrix location were found but the matrix was not independently curated or fully reconciled with the primary paper in Stage 1. `INACCESSIBLE` means the required node/edge data were not obtained. Neither label is Stage-2 verification. Some public mirrors were downloaded and counted at discovery level; this does not change the Stage-1 `ASSUMED` label.

## Candidate table

Scores are data quality, story, geography, aggregation cost and recognition in that order. “Matrix” means the node/link, feeding-preference, flow or diet data needed for curation, not merely a food-web figure, isotope biplot or species-abundance table. A numerical score does not override a hard-gate failure.

| Candidate id | Ecosystem | Biome | Raw size | Data access | Scores | Total | Tier / decisive gate |
|---|---|---|---:|---|---|---:|---|
| `german-forest-soil-webs` | Schwäbische Alb, Hainich-Dün and Schorfheide-Chorin forest plots | Temperate forest soil | 48 webs; 89–168 taxa and 729–3,344 links per web in the paper | ASSUMED strong; open GATEWAy/Netzschleuder matrices parsed at discovery level | 3, 2, 3, 1, 1 | 10 | **2 — high-curation-risk** |
| `messel-shale-food-webs` | Messel Shale early-Eocene lake and forest | Paleo freshwater/terrestrial | 700 taxa / 6,444 directed links; source lake web 94 taxa and forest web 630 taxa | ASSUMED strong; Dryad workbook + Netzschleuder | 2, 2, 3, 1, 2 | 10 | **2 — high-curation-risk** |
| `jena-experiment-metaweb` | Jena Experiment grassland invertebrate metaweb | Grassland | 714-node mirror / 51,496 potential links | ASSUMED strong; Mangal and paper data | 2, 3, 2, 1, 2 | 10 | Appendix — grassland saturation + aggregation |
| `lake-constance-pelagic` | Lake Constance pelagic community | Freshwater lake | 22 trophic guilds in open 2026 dataset; related 2012 model has 24 guilds / 107 links | ASSUMED strong; FRED workbooks + Mangal | 2, 3, 2, 3, 2 | 12 | Appendix — freshwater saturation; version reconciliation |
| `sylt-tidal-basin-parasite-web` | Sylt tidal basin / Sylt–Rømø Bight | Intertidal coastal marine | 230 life-stage nodes, 161 species/assemblages / 3,338 links | ASSUMED strong; Ecological Archives + mirrors | 2, 3, 2, 1, 3 | 11 | Appendix — marine saturation + aggregation |
| `flensburg-fjord-parasite-web` | Flensburg Fjord, Germany–Denmark | Brackish coastal marine | 180 life-stage nodes, 123 species/assemblages / 1,577 links | ASSUMED strong; Ecological Archives + mirrors | 2, 3, 2, 1, 2 | 10 | Appendix — marine saturation + aggregation |
| `sylt-romo-bight-energy-flow` | Sylt–Rømø Bight intertidal habitats | Coastal marine/intertidal | 56 living + 3 nonliving compartments per subsystem | ASSUMED strong; open MEPS papers | 3, 3, 2, 2, 3 | 13 | Appendix — marine saturation |
| `german-bight-metaweb` | German Bight epibenthic and fish community | Coastal marine | 55 trophospecies / 588 links | ASSUMED strong; Dryad meta-web archive | 2, 3, 2, 2, 2 | 11 | Appendix — marine saturation |
| `sylt-outer-reef-ecopath` | Sylt Outer Reef MPA, eastern German Bight | Coastal marine | 44 functional groups, 8 fishing gears, four trophic levels | ASSUMED; open 2026 paper located, matrix not parsed | 3, 3, 2, 2, 2 | 12 | Appendix — marine saturation |
| `spiekeroog-mesofauna-isotope-web` | Spiekeroog salt-marsh soil mesofauna | Coastal salt-marsh/wetland soil | 86 taxa; isotope data for 27 dominant species | INACCESSIBLE pairwise edge matrix; isotope tables open | 2, 3, 3, 1, 2 | 11 | **Rejected — no resolved consumer–prey matrix** |
| `northern-germany-forest-energy-models` | Northern German beech, spruce and Douglas-fir stands | Temperate forest soil | Four animal nodes plus detritus per model; 40 stands | Open data, but only a four-node topology | 3, 3, 3, 1, 1 | 11 | **Rejected — richness gate** |
| `goettingen-solling-beech-isotope-web` | Göttinger Wald and Solling beech forests | Temperate forest soil | Species/taxa isotope series; no resolved link count | INACCESSIBLE complete pairwise matrix | 2, 2, 3, 1, 1 | 9 | **Rejected — isotope positions are not an edge matrix** |

## Sweep log

Searches were run 2026-11-23. Query strings below are recorded verbatim. A zero-hit result means that no resolved German community matrix surfaced; it does not prove that a database has no German taxon records. Direct APIs, archives and document probes are logged separately from web queries.

### Web of Life

- Web query: `site:web-of-life.es Germany "food web"` → no results.
- Direct catalog/API: `https://www.web-of-life.es/api/v1/networks.csv` → 330 network rows. All fields were searched for `germany`, `german`, `sylt`, `flensburg`, `constance`, `bodensee`, `müggelsee`, `muggelsee`, `solling`, `hainich`, `schorfheide`, `messel`, `wadden`, `elbe` and `rhine`; no German location/country record of any interaction type was found. Broad term matches elsewhere were rejected as non-German records.

### GloBI

- Web query: `site:globalbioticinteractions.org Germany "food web"` → the Sylt dataset and GloBI source pages.
- Source-specific searches and records confirmed GloBI indexing for Sylt (`globalbioticinteractions/thieltges2011`), the German Bight (`globalbioticinteractions/olivier2019`) and GATEWAy/Digel feeding links. GloBI is a pointer to those primary datasets, not a replacement matrix citation.
- API probes used `GET https://api.globalbioticinteractions.org/interaction?sourceDOI=<doi>&interactionType=eats&resultType=json` for `10.1111/oik.00865`, `10.1002/ecy.2679`, `10.1098/rspb.2013.3280` and `10.1890/11-0351.1`. Each returned HTTP 200 with the same 588,087-byte generic payload, so no source-specific count was inferred from these probes.

### Mangal

- Web query: `site:mangal.io Germany "food web" network` → no useful result.
- Direct APIs: `GET https://mangal.io/api/v2/dataset?count=10000` → 175 datasets; `GET https://mangal.io/api/v2/network?count=10000` → 1,487 networks. Records were searched using the scope terms above.
- Relevant dataset records: `gaedke_straile_1994` and `boit_et_al_2012` for Lake Constance, and `hines_et_al_2019` for the Jena grassland. Their network ids are 1468, 1596 and 5013 respectively. Network 5013 has 714 API nodes; its interaction API is a large qualitative potential-link set. Mangal reference endpoints 95, 161 and 175 supplied the primary DOIs.
- Numerous `kolpelke_2007` German willow-galling sawfly/natural-enemy networks were excluded as host–parasitoid subwebs rather than whole-community food webs.

### Netzschleuder

- Web query: `site:networks.skewed.de Germany food web foodweb` → `messal_shale` and `flensburg_fjord`.
- Catalog entries opened: `messal_shale` (700 nodes / 6,444 links), `flensburg_fjord` (180 life-stage nodes), `coastal_parasite_webs` (species-aggregated Sylt and Flensburg versions), and `gateway_foodwebs`.
- The complete `gateway_foodwebs.csv.zip` archive was downloaded: 19,212 node rows and 222,151 edge rows. Exactly 48 webs have location `Germany` and ecosystem `terrestrial belowground`: 16 AEW, 16 HEW and 16 SEW plot webs. Discovery-level mirror counts are 89–168 nodes and 730–3,345 within-plot edges; the one-link difference from the paper's published range requires Stage-2 reconciliation, likely including parallel-edge handling.
- All 48 German plot webs carry Digel et al. (2014) edge citations. Sample plots retain species, genus, family, life-stage and basal-resource nodes; the archive does not provide a ready-made 15–25-node aggregation.

### Ecopath / EcoBase publications and aquatic network models

- Broad queries: `Germany Ecopath food web model diet matrix`; `Germany "food web" trophic matrix community ecosystem`; `Germany "food web" "Ecological Archives"`.
- Sylt/Wadden queries: `Sylt Rømø Bight food web Ecopath network matrix Baird`; `"Sylt-Rømø" "diet matrix" Baird 2004`; `"Sylt-Rømø Bight" "56 living" "3 nonliving"`; `"Energy flow of a boreal intertidal ecosystem" pdf 2004 Sylt`; `"Energy flow of a boreal intertidal ecosystem" "Table" food web 59`; `"Trophic dynamics of eight intertidal communities" 2004 Baird 56 59 DOI`; `"Trophic dynamics of eight intertidal communities" pdf Baird Asmus 2007`.
- German Bight queries: `"German Bight" food web metaweb trophic links dataset`; `"German Bight" Ecopath model diet composition functional groups`; `"Exploring the temporal variability of a food web" Dryad 9tg3t75 authors 2019`.
- Sylt Outer Reef queries: `"Trophic modelling as a pathway to ecosystem-based management" Sylt Outer Reef 2026 DOI`; `"Sylt Outer Reef" "44 functional groups" Ecopath 2026`; `"Sylt Outer Reef" "diet matrix" Slila Horn 2026`; `"Sylt Outer Reef" 102724 DOI`.
- Lake Constance queries: `Lake Constance food web matrix trophic network Germany published`; `"Lake Constance" Gaedke Straile 1994 food web 22 guilds 107 links`; `"Food web structure of the mesoeutrophic Lake Constance" 1994 nodes links`; `"Lake Constance" "Ecopath" diet matrix Gaedke Straile 1994`.
- Other aquatic queries: `Müggelsee food web network Germany matrix Gsell`; `"Müggelsee" "125 years" food web model matrix`; `"125 years of change" food web Habedank Germany 2026`; `Germany wetland "food web" trophic network matrix peatland marsh`; `"A comparative analysis of biodiversity and food web structures" Rhine Elbe`; `Germany floodplain food web Rhine Elbe trophic matrix Schreier Nickel`.
- The Rhine/Elbe floodplain work found only conference abstracts, not a published matrix. Müggelsee MAR(1) work estimates statistical interactions rather than publishing an empirical feeding matrix and is additionally freshwater-saturated. The 2026 Habedank coastal paper is outside the already logged source candidates but does not change the marine-saturation verdict.

### figshare / Zenodo / Dryad / other open repositories

- Broad query: `Germany "food web" site:zenodo.org OR site:figshare.com OR site:datadryad.org` → Sylt GloBI/Zenodo archive, Flensburg Wiley/figshare collection and unrelated records.
- Forest/soil queries: `site:zenodo.org Germany "food web" "matrix" forest`; `Germany forest "food web" "Data S2" interaction matrix`; `"Digel" "48 forest" "GATEWAy" food webs Germany`; `"Biotic filtering by species' interactions" Dryad forest soil data files`; `"Biotic filtering" "48 forest" food web Germany matrix Dryad`; `Germany "food web" "Dryad" forest soil Digel`; `"Digel et al. (2014)" "GATEWAy"`; `"48 forest soil" GATEWAy Brose 2019`; `"Forest soil food web" "Digel" "Brose" 2019 data 290`.
- Messel queries: `Messel Shale food web Dunne 2014 nodes links matrix`; Dryad API `10.5061/dryad.ps0f0` confirmed the public `LabanderiaDunne2014DryadData.xls` workbook and README. The workbook was not independently transcribed.
- German Bight: Dryad API `10.5061/dryad.9tg3t75` confirmed `Olivier et al. 2019_Ecography - Meta-foodweb.zip` and README.
- Forest reanalysis: Dryad API `10.5061/dryad.2280gb5tw` confirmed the public Bauer et al. archive and explicitly identifies GATEWAy 1.0 as the food-web source.
- Lake Constance: FRED package 1135 / DOI `10.18728/igb-fred-1135.0` contains `Binary_food_web_structure_community_matrix.xlsx`, a biomass workbook and supplement under CC BY 4.0.
- Other queries: `site:zenodo.org "Deadwood" "soil food-web" Zhang 2026`; `"Deadwood Mitigates Declines" Zenodo datasets code`; `"Reduced predation and energy flux" data availability soil food webs 14696`. These found abundance/biomass and model repositories, not a richer ready-made German matrix than Digel/GATEWAy.

### Primary literature — forest and other terrestrial systems

- Broad queries: `Germany "soil food web" matrix forest functional groups`; `Germany forest soil food web "functional groups" energy flux matrix beech`; `Germany terrestrial "food web" "interaction matrix" forest soil dataset`; `Germany "forest soil" "food web" "15" "functional groups"`; `Germany terrestrial ecosystem "trophic network" dataset forest invertebrate`; `Germany heathland "food web" trophic matrix`; `"Germany" "soil food web" "interaction matrix" empirical`; `"Germany" "food web" "trophic guilds" forest`; `"Global change effects on a mechanistic decomposer food web" Germany`. The last source is a Wekerom, Netherlands model, not a German candidate.
- Digel forest queries: `"Unravelling the complex structure of forest soil food webs" Germany species 2015`; `"Unravelling the complex structure" "Germany" "food webs" Digel`; `Digel Curtsdotter Riede Klarner Brose 2014 forest soil food web "48" Germany`; `Digel 2014 forest soil food web data matrix supplementary Germany`; `"Unravelling the complex structure of forest soil food webs" "Germany" "species" nodes links`; `"Unravelling the complex structure" "Data" "supplement" food webs`; `"Digel" "Curtsdotter" "89" "168" food web data`; `"German forest soil" food web GATEWAy location`.
- Beech-forest queries: `Scheu Falca 2000 "soil food web" beech forests Germany`; `Solling forest "food web" soil trophic groups Germany`; `Göttinger Wald "food web" soil functional groups`; `Hainich forest "soil food web" trophic links matrix`; `"The soil food web of two beech forests" pdf Fig food web species taxa`; `"The soil food web of two beech forests" "species" "Fig."`; `"Scheu" "Falca" 2000 "Fig. 4" food web`.
- Schaefer/Solling queries: `Schaefer 1990 "soil fauna of a beech forest on limestone" food web groups energy budget`; `"The soil fauna of a beech forest on limestone" pdf`; `"Schaefer" 1990 beech forest "trophic structure" "Fig"`; `Göttinger Wald soil food web energy budget Schaefer functional groups`; `Solling "soil food web" energy flow model groups Schauermann`; `"Schaefer" 1990 "Göttinger Wald" "trophic" "groups"`; `"soil fauna of a beech forest on limestone" "Table"`; `"soil fauna of a beech forest on limestone" "food web"`.
- Newer energy-flux queries: `Germany "soil food web" "energy flux" forest matrix`; `"Diversity and functional structure of soil animal communities" food webs forest land use Germany`; `"Warming alters the energetic structure" soil food web beech forests Germany matrix`; `"Deadwood Mitigates Declines in Soil Food-Web Energy Fluxes" data matrix Germany`; `"Soil food web interaction (feeding) matrix" "34"`; `"Energy flux through the soil food web in European beech forests" Germany 2026`; `Germany "forest disturbances reshape soil food webs" interaction matrix`; `Germany soil food web "feeding matrix" "34" entities`; `"Deadwood Mitigates Declines" "Data S2"`; `"Deadwood Mitigates Declines" "food web" "groups"`; `"Deadwood Mitigates Declines" PDF`; `"Deadwood Mitigates Declines" "Data Availability Statement"`; `"gcb.71197" data availability`.
- The 34-entity warming preprint `10.64898/2026.04.29.721540` is a microbial TOLseq/energetic model, not a new German local matrix candidate. The Schwarz et al. warming experiment is at a boreal–temperate ecotonal forest in Minnesota, not Germany. Lu et al. (2025) uses a four-animal-node model. Pollierer et al. (2021) and Junggebauer et al. (2025) supply valuable community, isotope and energy-channel evidence but not a replacement for the Digel pairwise matrices.
- Grassland queries: `Hines et al 2019 "Meta-food web" Germany grassland nodes links`; `"Meta-food web structure of invertebrate community" Germany`; `"A meta food web for invertebrate" "51,496" 714 data`; `"A meta food web" Hines 2019 data availability supplementary links`; `"A meta food web for invertebrate species" Ecological Archives data`.

### Primary literature — coastal wetland and parasite-inclusive webs

- Salt-marsh queries: `Germany "salt marsh" "soil food web" matrix Haynert`; `"The structure of salt marsh soil mesofauna food webs" nodes links species Germany`; `"The structure of salt marsh soil mesofauna food webs" data availability matrix`; `Haynert Klagén Klarner Maraun Scheu 2017 salt marsh food web "Fig 6"`; `"Spiekeroog" "food web" matrix trophic interactions`.
- Parasite-web queries: `"Sylt tidal basin" food web 2011 nodes species links Thieltges`; `"Sylt" "230 nodes" food web links`; `"Flensburg Fjord" food web 2011 180 nodes 123 species data`.
- Spiekeroog has excellent local stable-isotope and basal-resource mixing data, but no pairwise consumer–prey matrix. Sylt and Flensburg do have typed link CSVs; their marine biome and large node counts, not access, are the blockers.

**Documents and records actually inspected:** Web of Life networks CSV; Mangal dataset, network, node, interaction and reference APIs; Netzschleuder `messal_shale`, `flensburg_fjord`, `coastal_parasite_webs` and `gateway_foodwebs`, including the complete GATEWAy CSV archive; [Digel et al. abstract](https://nsojournals.onlinelibrary.wiley.com/doi/10.1111/oik.00865); [Biodiversity Exploratories project and dataset inventory](https://www.biodiversity-exploratories.de/en/projects/veraenderungen-in-der-struktur-von-boden-nahrungsnetzen-mit-der-intensitaet-der-nutzung-von-waldoekosystemen-2/); [Bauer et al. Dryad record](https://datadryad.org/dataset/doi:10.5061/dryad.2280gb5tw); [Messel Dryad record](https://datadryad.org/dataset/doi:10.5061/dryad.ps0f0); [Hines et al. PubMed record](https://pubmed.ncbi.nlm.nih.gov/30838635/); [Lake Constance FRED package](https://fred.igb-berlin.de/data/package/1135); [Sylt Ecological Archives metadata](https://esapubs.org/archive/ecol/E092/172/metadata.htm); [Flensburg Ecological Archives metadata](https://esapubs.org/archive/ecol/E092/174/metadata.htm); [Baird et al. 2004 open PDF record](https://www.vliz.be/imisdocs/publications/351001.pdf); [Olivier et al. GloBI configuration](https://github.com/globalbioticinteractions/olivier2019) and Dryad API; [Slila et al. 2026 abstract](https://www.sciencedirect.com/science/article/pii/S1385110126000584); [Haynert et al. 2017 open article](https://pmc.ncbi.nlm.nih.gov/articles/PMC5730192/); [Lu et al. 2025 open article](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/1365-2435.14696); [Pollierer et al. 2021 open article](https://pmc.ncbi.nlm.nih.gov/articles/PMC8139884/); [Junggebauer et al. 2025 open article](https://pmc.ncbi.nlm.nih.gov/articles/PMC12061547/). Discovery-level access is not independent Stage-2 verification.

---

## Tier 1 — build next

None under the current gates.

## Tier 2 — backlog

### German Biodiversity Exploratories forest-soil webs — `german-forest-soil-webs`
- **Biome / Region:** Temperate beech/conifer forest soil · Schwäbische Alb, Hainich-Dün and Schorfheide-Chorin · **Lat/Lng (approx):** representative Hainich plots 51.20, 10.35; all plot coordinates occur in GATEWAy
- **Source:** Digel, C., Curtsdotter, A., Riede, J., Klarner, B. & Brose, U. (2014). Unravelling the complex structure of forest soil food webs: higher omnivory and more trophic levels. *Oikos* 123(10): 1157–1172. DOI [10.1111/oik.00865](https://doi.org/10.1111/oik.00865). Dataset: Brose, U. (2018), GATEWAy v1.0, DOI [10.25829/idiv.283-3-756](https://doi.org/10.25829/idiv.283-3-756); [Netzschleuder mirror](https://networks.skewed.de/net/gateway_foodwebs). Reanalysis: Bauer, B. et al. (2022), *Ecology Letters*, DOI [10.1111/ele.13995](https://doi.org/10.1111/ele.13995), [Dryad](https://doi.org/10.5061/dryad.2280gb5tw).
- **Data access:** **ASSUMED (strong).** The public GATEWAy node and edge CSVs were downloaded and the 48 German components counted. The original paper reports the matching size range and mixed link evidence. Stage 2 must compare a selected plot against the original publication and resolve mirror/paper edge-count and parallel-edge conventions.
- **Raw size:** 48 local webs / 89–168 taxa and 729–3,344 feeding interactions per web in the paper; mirror discovery counts 730–3,345 · **Aggregation plan:** choose one source plot, then aggregate only with a documented trophic-guild scheme supported by the source taxonomy and evidence, targeting ~20–25 nodes. Do not union plots, years or regions to make a synthetic national web.
- **Data type:** qualitative links with body-mass, taxonomic and life-stage annotations · **Provenance:** composite — local community sampling combined with literature, molecular gut-content, stable-isotope and feeding-experiment evidence.
- **Hard gates:** peer-reviewed publication and open matrix pass · one plot has ample richness, but **aggregation to 25 is high risk** · explicit multilevel soil structure pass · temperate-forest biome pass (0 live)
- **Scores:** data 3 · story 2 · geography 3 · cost 1 · recognition 1 = **10**
- **Tier:** 2 (high-curation-risk) · **Notes:** Best modern German lead. The webs contain unusual omnivory, cannibalism and intraguild predation across a forest-management gradient, and the 48-plot design is scientifically exceptional. The atlas story would be the hidden complexity of forest soil rather than a single charismatic apex predator. Aggregation is the entire curation problem; do not select only familiar species or infer diet percentages from link counts.

### Messel Shale early-Eocene lake and forest webs — `messel-shale-food-webs`
- **Biome / Region:** Fossil lake and surrounding tropical forest · Messel, Hesse · **Lat/Lng (approx):** 49.92, 8.76
- **Source:** Dunne, J.A., Labandeira, C.C. & Williams, R.J. (2014). Highly resolved early Eocene food webs show development of modern trophic structure after the end-Cretaceous extinction. *Proceedings of the Royal Society B* 281:20133280. DOI [10.1098/rspb.2013.3280](https://doi.org/10.1098/rspb.2013.3280). Data: Labandeira & Dunne (2014), Dryad DOI [10.5061/dryad.ps0f0](https://doi.org/10.5061/dryad.ps0f0); [Netzschleuder mirror](https://networks.skewed.de/net/messal_shale).
- **Data access:** **ASSUMED (strong).** Dryad's public API confirms the source workbook and README; Netzschleuder exposes nodes, links, certainty and evidence types. The workbook was not parsed or reconciled sheet by sheet.
- **Raw size:** 700 taxa / 6,444 links; source-defined lake web 94 taxa and forest web 630 taxa · **Aggregation plan:** prefer the source-bounded 94-taxon lake web and aggregate to ~20–25 evidence-supported trophic groups only if the source supplies a defensible grouping; never cherry-pick iconic fossils. Stage 2 may reject aggregation without changing the access verdict.
- **Data type:** qualitative links annotated by certainty and evidence, not diet weights · **Provenance:** composite paleo-reconstruction from gut contents, coprolites, plant damage, morphology, body size and closest-living-relative diets.
- **Hard gates:** publication and matrix location pass · **aggregation high risk** · source trophic structure pass · paleo freshwater/forest coverage pass
- **Scores:** data 2 · story 2 · geography 3 · cost 1 · recognition 2 = **10**
- **Tier:** 2 (high-curation-risk) · **Notes:** A unique 48-million-year-old exhibit about the development of modern trophic organization, not a modern cascade dataset. Preserve the source's lake/forest distinction and certainty annotations. Taxonomic-uniformity links must not be presented as direct fossil gut observations.

---

## Appendix — recorded, not planned under current gates

### Jena Experiment invertebrate meta-food web — `jena-experiment-metaweb`
- **Biome / Region:** Experimental temperate grassland · Jena, Thuringia · **Lat/Lng:** 50.9167, 11.5833
- **Source:** Hines, J., Giling, D.P., Rzanny, M., Voigt, W., Meyer, S.T., Weisser, W.W., Eisenhauer, N. & Ebeling, A. (2019). A meta food web for invertebrate species collected in a European grassland. *Ecology* 100(6):e02679. DOI [10.1002/ecy.2679](https://doi.org/10.1002/ecy.2679). Mangal network 5013.
- **Data access:** ASSUMED (strong) — Mangal exposes 714 nodes and a very large qualitative interaction set; the paper supplies the underlying data paper. Links were not independently reconciled with the supplement.
- **Raw size:** 714-node mirror / 51,496 potential links; later descriptions resolve 63 plants, 647 invertebrates and resource nodes, while the abstract refers to 714 sampled invertebrate species · **Aggregation plan:** one source-defined plot realization, then ~20–25 feeding guilds; do not treat the entire regional potential metaweb as one observed local community.
- **Data type:** qualitative potential links · **Provenance:** composite literature/trait-based links subset by locally sampled taxa.
- **Hard gates:** publication and matrix pass · aggregation high risk · trophic structure pass · **grassland saturation fail (3 live)**
- **Scores:** data 2 · story 3 · geography 2 · cost 1 · recognition 2 = **10**
- **Tier:** appendix · **Notes:** Plant-diversity effects on motifs and multitrophic control are attractive, but the source/mirror node wording must be reconciled and grassland is saturated.

### Lake Constance pelagic food web — `lake-constance-pelagic`
- **Biome / Region:** Large deep freshwater lake, pelagic zone · Lake Constance, Germany/Switzerland/Austria · **Lat/Lng:** FRED Überlingen sampling location 47.762909, 9.130241
- **Source:** Gaedke, U. (2026). *Lake Constance, Binary food web with 22 trophic guilds and their biomasses*. IGB FRED, DOI [10.18728/igb-fred-1135.0](https://doi.org/10.18728/igb-fred-1135.0). Related model: Boit, A., Martinez, N.D., Williams, R.J. & Gaedke, U. (2012). *Ecology Letters* 15:594–602. DOI [10.1111/j.1461-0248.2012.01777.x](https://doi.org/10.1111/j.1461-0248.2012.01777.x). Earlier network analysis: Gaedke & Straile (1994), *Ecological Modelling* 75–76:435–445, DOI [10.1016/0304-3800(94)90038-8](https://doi.org/10.1016/0304-3800(94)90038-8).
- **Data access:** ASSUMED (strong) — FRED lists the binary community matrix, biomass workbook and supplement under CC BY 4.0; Mangal has the 1994 and 2012 networks. Files were not independently compared.
- **Raw size:** 22 source guilds in FRED; Boit et al. report 24 guilds / 107 links · **Aggregation plan:** use one documented version with no new aggregation; reconcile why the current dataset and 2012 model differ.
- **Data type:** qualitative links plus biomass; not direct diet fractions · **Provenance:** empirical long-term model synthesis.
- **Hard gates:** publication/data access pass · source size pass · pelagic trophic structure pass · **freshwater saturation fail (3 live)**
- **Scores:** data 2 · story 3 · geography 2 · cost 3 · recognition 2 = **12**
- **Tier:** appendix · **Notes:** Technically the easiest German candidate, with eutrophication/re-oligotrophication and plankton succession stories. It remains appendix-only under the current biome gate.

### Sylt tidal-basin parasite-inclusive web — `sylt-tidal-basin-parasite-web`
- **Biome / Region:** Intertidal coastal marine · Sylt–Rømø Bight, Germany/Denmark · **Lat/Lng (approx):** 55.00, 8.50
- **Source:** Thieltges, D.W., Reise, K., Mouritsen, K.N., McLaughlin, J.P. & Poulin, R. (2011). Food web including metazoan parasites for a tidal basin in Germany and Denmark. *Ecology* 92:2005. DOI [10.1890/11-0351.1](https://doi.org/10.1890/11-0351.1); [Ecological Archives E092-172](https://esapubs.org/archive/ecol/E092/172/metadata.htm).
- **Data access:** ASSUMED (strong) — node and typed-link CSVs are published; Netzschleuder/GloBI mirrors were located. No independent link-by-link check was performed.
- **Raw size:** 230 life-stage nodes, 161 species/assemblages / 3,338 links; species-aggregated mirror has 161 nodes and 1,052 free-living links · **Aggregation plan:** use a source-published subset/version and aggregate to ~20–25 trophic groups without conflating predation, parasite transmission and concomitant predation.
- **Data type:** qualitative typed links · **Provenance:** composite — long-term local sampling plus published sources and expert knowledge.
- **Hard gates:** publication/access pass · aggregation high risk · trophic structure pass · **marine saturation fail (6 live)**
- **Scores:** data 2 · story 3 · geography 2 · cost 1 · recognition 3 = **11**
- **Tier:** appendix · **Notes:** Parasites, seagrass, mussel/oyster beds and migratory birds make a strong story. Do not relabel this coastal web as forest/wetland merely to bypass the marine gate.

### Flensburg Fjord parasite-inclusive web — `flensburg-fjord-parasite-web`
- **Biome / Region:** Brackish shallow coastal inlet · Flensburg Fjord, Germany/Denmark · **Lat/Lng (approx):** 54.83, 9.60
- **Source:** Zander, C.D., Josten, N., Detloff, K.C., Poulin, R., McLaughlin, J.P. & Thieltges, D.W. (2011). Food web including metazoan parasites for a brackish shallow water ecosystem in Germany and Denmark. *Ecology* 92:2007. DOI [10.1890/11-0374.1](https://doi.org/10.1890/11-0374.1); [Ecological Archives E092-174](https://esapubs.org/archive/ecol/E092/174/metadata.htm).
- **Data access:** ASSUMED (strong) — open node and typed-link CSVs plus Netzschleuder mirror.
- **Raw size:** 180 life-stage nodes, 123 species/assemblages / 1,577 realized links · **Aggregation plan:** source species-aggregated version → ~20–25 source-supported trophic groups; keep benthic/pelagic and infectious/free-living distinctions explicit.
- **Data type:** qualitative typed links · **Provenance:** composite field/literature/expert synthesis.
- **Hard gates:** publication/access pass · aggregation high risk · trophic structure pass · **marine saturation fail**
- **Scores:** data 2 · story 3 · geography 2 · cost 1 · recognition 2 = **10**
- **Tier:** appendix · **Notes:** A genuine resolved local web, but lower recognition and the same saturation/aggregation constraints as Sylt.

### Sylt–Rømø Bight quantitative energy-flow models — `sylt-romo-bight-energy-flow`
- **Biome / Region:** Intertidal coastal marine · Sylt–Rømø Bight · **Lat/Lng (approx):** 55.00, 8.50
- **Source:** Baird, D., Asmus, H. & Asmus, R. (2004). Energy flow of a boreal intertidal ecosystem, the Sylt–Rømø Bight. *Marine Ecology Progress Series* 279:45–61. DOI [10.3354/meps279045](https://doi.org/10.3354/meps279045), [open PDF](https://www.vliz.be/imisdocs/publications/351001.pdf). Habitat extension: Baird, Asmus & Asmus (2007), *MEPS* 351:25–41, DOI [10.3354/meps07137](https://doi.org/10.3354/meps07137).
- **Data access:** ASSUMED (strong) — open model papers and diet/flow lineage located; no complete numerical matrix was independently transcribed in Stage 1.
- **Raw size:** 56 living + 3 nonliving compartments; eight benthic and one pelagic subsystem in the 2007 extension · **Aggregation plan:** select one source subsystem and merge only source-coherent functional compartments to ~20–25 nodes; never merge habitats to create an artificial average.
- **Data type:** weighted biomass/energy flows · **Provenance:** empirical quantitative network model.
- **Hard gates:** publication and provisional matrix pass · aggregation plausible · trophic/flow structure pass · **marine saturation fail**
- **Scores:** data 3 · story 3 · geography 2 · cost 2 · recognition 3 = **13**
- **Tier:** appendix · **Notes:** Highest-scoring aquatic dataset, with seagrass recovery, invasive species and habitat contrast stories. It is a distinct quantitative model lineage from the 2011 parasite web; do not splice their edges or weights.

### German Bight long-term metaweb — `german-bight-metaweb`
- **Biome / Region:** Coastal marine epibenthos and fish · German Bight, North Sea · **Lat/Lng (approx):** 54.50, 7.50
- **Source:** Olivier, P. et al. (2019). Exploring the temporal variability of a food web using long-term biomonitoring data. *Ecography* 42:2107–2121. DOI [10.1111/ecog.04461](https://doi.org/10.1111/ecog.04461). Dryad DOI [10.5061/dryad.9tg3t75](https://doi.org/10.5061/dryad.9tg3t75).
- **Data access:** ASSUMED (strong) — Dryad API confirms the meta-food-web ZIP and README; GloBI indexes the same source.
- **Raw size:** 55 trophospecies / 588 links, selected from 152 monitored taxa; 21 epifaunal invertebrate and 27 fish taxa plus seven functional groups · **Aggregation plan:** one source-defined annual realization or the published metaweb, aggregated to ~25 only within documented trophospecies/functional groups; never present the metaweb as every year's observed web.
- **Data type:** qualitative · **Provenance:** composite — long-term monitoring plus literature links and essential functional groups not sampled by the surveys.
- **Hard gates:** publication/access pass · aggregation plausible but nontrivial · explicit trophic layout pass · **marine saturation fail**
- **Scores:** data 2 · story 3 · geography 2 · cost 2 · recognition 2 = **11**
- **Tier:** appendix · **Notes:** Strong temporal-variability story, but basal groups were added during model construction and must not be described as directly surveyed local taxa.

### Sylt Outer Reef Ecopath model — `sylt-outer-reef-ecopath`
- **Biome / Region:** Coastal marine protected area · eastern German Bight · **Lat/Lng (approx):** 55.20, 7.50
- **Source:** Slila, C., Horn, S., Püts, M., Haslob, H., Beermann, J., Riekhof, M.-C., Gutow, L. & Wiltshire, K.H. (2026). Trophic modelling as a pathway to ecosystem-based management — the Marine Protected Area “Sylt Outer Reef – Eastern German Bight”. *Journal of Sea Research* 212:102724. DOI [10.1016/j.seares.2026.102724](https://doi.org/10.1016/j.seares.2026.102724).
- **Data access:** ASSUMED — the peer-reviewed open paper, model group list and four-trophic-level structure were located; the complete diet matrix was not parsed.
- **Raw size:** 44 functional groups and 8 fishing gears · **Aggregation plan:** merge source functional groups to ~22–25 while retaining flagship fish, seabirds/mammals and basal groups only where source aggregation supports it.
- **Data type:** weighted Ecopath diet/flow model · **Provenance:** empirical model synthesis.
- **Hard gates:** publication pass · matrix provisional pass · aggregation plausible · trophic structure pass · **marine saturation fail**
- **Scores:** data 3 · story 3 · geography 2 · cost 2 · recognition 2 = **12**
- **Tier:** appendix · **Notes:** Current fisheries-management relevance and MPA setting are strengths; marine saturation is decisive.

---

## Rejected scored candidates

### Spiekeroog salt-marsh mesofauna isotope study — `spiekeroog-mesofauna-isotope-web`
- **Biome / Region:** Coastal salt-marsh/wetland soil · Spiekeroog, Lower Saxony · **Lat/Lng (approx):** 53.77, 7.72
- **Source:** Haynert, K., Kiggen, M., Klarner, B., Maraun, M. & Scheu, S. (2017). The structure of salt marsh soil mesofauna food webs — the prevalence of disturbance. *PLoS ONE* 12(12):e0189645. DOI [10.1371/journal.pone.0189645](https://doi.org/10.1371/journal.pone.0189645), [open article](https://pmc.ncbi.nlm.nih.gov/articles/PMC5730192/).
- **Data access:** INACCESSIBLE as a pairwise edge matrix — the open supplement contains community, isotope and basal-source mixing tables. Figure 4 shows isotope space and trophic-level bands, not consumer-specific prey links.
- **Raw size:** 86 taxa; 27 dominant species isotopically analyzed · **Aggregation plan:** none; do not connect every taxon in one isotope band to every taxon in another.
- **Data type:** trophic positions and modeled basal-resource percentages · **Provenance:** empirical isotope study, not a resolved link web.
- **Hard gates:** publication pass · **node/edge matrix fail** · four trophic levels present · wetland biome pass
- **Scores:** data 2 · story 3 · geography 3 · cost 1 · recognition 2 = **11**
- **Tier:** rejected · **Notes:** Attractive inundation-gradient and intraguild-predation narrative, but isotope positions cannot be converted into pairwise links. The mixing-model percentages apply to basal resources, not the full consumer matrix.

### Northern German introduced-tree soil energy models — `northern-germany-forest-energy-models`
- **Biome / Region:** Temperate forest soil · eight locations in northern Germany · **Lat/Lng (approx):** 52.0, 10.0
- **Source:** Lu, J.-Z. et al. (2025). Reduced predation and energy flux in soil food webs by introduced tree species: Bottom-up control of multitrophic biodiversity across size compartments. *Functional Ecology* 39. DOI [10.1111/1365-2435.14696](https://doi.org/10.1111/1365-2435.14696). Data: Zenodo DOI [10.5281/zenodo.13986711](https://doi.org/10.5281/zenodo.13986711).
- **Data access:** open community data and a fully described model, but only four animal functional nodes plus detritus.
- **Raw size:** 40 stands / four-node animal web · **Aggregation plan:** none; species-level abundance tables cannot justify new pairwise links. Do not pad the model with unrelated taxa.
- **Data type:** modeled energy fluxes on an assumed qualitative topology · **Provenance:** empirical biomass/body-size measurements plus model-assumed links.
- **Hard gates:** publication pass · **15-node richness fail** · simple trophic structure present · forest biome pass
- **Scores:** data 3 · story 3 · geography 3 · cost 1 · recognition 1 = **11**
- **Tier:** rejected · **Notes:** Douglas-fir reductions in decomposition and predation are compelling, but this is a four-node energy model, not a candidate community atlas web.

### Göttinger Wald and Solling beech-forest isotope webs — `goettingen-solling-beech-isotope-web`
- **Biome / Region:** Temperate beech-forest soil · northern Germany · **Lat/Lng (approx):** Göttinger Wald 51.75, 9.85; Solling 51.70, 9.50
- **Source:** Scheu, S. & Falca, M. (2000). The soil food web of two beech forests (*Fagus sylvatica*) of contrasting humus type: stable isotope analysis of a macro- and a mesofauna-dominated community. *Oecologia* 123:285–296. DOI [10.1007/s004420051015](https://doi.org/10.1007/s004420051015).
- **Data access:** INACCESSIBLE as a complete resolved link matrix — the abstract and searchable excerpts document taxon isotope signatures and trophic structure, not an obtainable pairwise matrix. The related Schaefer (1990) energy budget likewise did not yield a complete auditable edge matrix in this sweep.
- **Raw size:** species/taxa isotope series; resolved link count not established · **Aggregation plan:** none without the original links; trophic-level assignment alone is insufficient.
- **Data type:** stable-isotope trophic positions · **Provenance:** empirical isotope field study.
- **Hard gates:** publication pass · **edge-matrix access fail** · trophic structure present · forest biome pass
- **Scores:** data 2 · story 2 · geography 3 · cost 1 · recognition 1 = **9**
- **Tier:** rejected · **Notes:** Use these papers to contextualize or cross-check the Digel forest candidate, not to manufacture links from isotope clusters.

## Other rejected or out-of-scope leads

- **Willow-galling sawfly and natural-enemy networks** — numerous German Mangal networks, but host–parasitoid subwebs outside the current product surface.
- **Müggelsee plankton MAR(1) networks** — statistically inferred temporal interactions, not an empirical feeding matrix; freshwater is also saturated.
- **Rhine/Elbe floodplain comparison** — conference abstracts found, but no peer-reviewed resolved matrix or repository deposit.
- **Schaefer (1990) beech-forest energy budget** — citable and historically important, but no complete pairwise matrix obtained; do not infer links from energetic summaries.
- **Four-node forest disturbance/deadwood models** — useful functional experiments but fail richness; newer isotope papers do not supply a replacement edge matrix.
- **Trait-generated European forest-soil matrices** — not promoted as empirical German diets; the same provenance restriction applied in the Finland sweep remains in force.
- **Whole-Baltic and whole-North-Sea models** — existing ledger candidates or broader-than-Germany systems; not duplicated as German local webs.

## Recommendation

Germany is **buildable but backlog-only**: retain `researched/germany.md` for independent verification of two Tier 2 candidates. Start Stage 2 with one Digel plot and the original 2014 paper, testing whether a source-honest ≤25-node aggregation exists before investing in UI curation. Messel is a distinctive alternative only if its lake/forest scope, evidence certainty and aggregation can be preserved. Do not promote the higher-scoring marine, freshwater or grassland appendix candidates while those biomes remain saturated, and do not convert isotope bands or four-node energy models into pairwise food webs.
