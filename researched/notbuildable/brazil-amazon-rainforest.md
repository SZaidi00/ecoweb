# Region: Brazil — Amazon rainforest (terrestrial)
**Researched:** 2026-11-23 · **Status:** complete — NOT BUILDABLE (Stage 1; no Tier 1/2 candidates)

**Scope:** Brazilian Amazon terra firme and other terrestrial rainforest habitats. Aquatic rivers, floodplains, lakes, and streams are excluded; the implemented Tapajós River web already covers Amazon freshwater. Existing `balbina-forest-islands` and `amazon-vertebrate-metaweb` entries were not re-screened or duplicated. Nearby Amazonian studies outside Brazil were checked as leads but rejected on scope.

**Repo context at sweep time:** 15 webs live; tropical terrestrial remains empty. Biome saturation: marine 6, freshwater 3 (saturated), grassland 3, estuary 2, desert 1, wetland 1. South America has one implemented web (Tapajós River). The target has maximum audience recognition and would fill a priority biome gap, but the sweep found no published, resolved, Brazil-specific terrestrial food web that passes the data and richness gates.

## Candidate summary

| Candidate id | Ecosystem | Score | Tier | Blocking gate |
|---|---|---:|---|---|
| `central-amazon-biomass-flow` | Central Amazon terra firme biomass/energy-flow web, Manaus | 12 | appendix | Six schematic compartments; no resolved 15–25-node diet matrix |
| `bdffp-beetle-trophic-web` | Biological Dynamics of Forest Fragments Project leaf-litter beetles | 10 | appendix | Species occurrences and trophic assignments only; no feeding links |
| `amazon-dark-earth-macrofauna` | Amazonian Dark Earths and adjacent-soil macrofauna | 10 | appendix | Community/site abundance data only; no feeding links |

## Sweep log

- **Web of Life:** site query `site:web-of-life.es Amazon food web`; database home reached. No Amazon terrestrial food-web entry surfaced. Prior catalog checks also identify the canonical food-web collection as predominantly non-Amazonian.
- **GloBI:** queries `site:globalbioticinteractions.org Amazon food web Brazil`, `site:globalbioticinteractions.org Amazon food web`; indexed-sources page inspected. Results were individual fish-diet records and non-trophic Amazon interaction datasets, not a terrestrial community matrix.
- **Mangal API:** `GET /api/v2/network?type=predation&count=500`; 500 networks returned, filtered to northern South America (longitude −85..−30, latitude −20..10). Zero predation networks in the bounding box in this response. This is a 500-network sample, not a claim that the entire database is empty.
- **Netzschleuder:** full network catalog retrieved; searched `Amazon`, `food web`, and `rainforest`. Amazon hits were retail/cloud/social networks; no Amazon ecological food web. Query `site:networks.skewed.de Amazon food web` likewise found no relevant entry.
- **Ecopath publications:** queries `Ecopath Amazon rainforest terrestrial model`, `Ecopath Amazon forest Brazil -river -floodplain`. Hits were aquatic/fisheries models; no terrestrial Amazon Ecopath model found.
- **Zenodo API:** queries `"food web" AND Amazon` (85 hits), `"trophic network" AND Amazon` (2 hits), `"food web" AND "Brazilian Amazon"` (13 hits). Screened returned titles/records; no terrestrial Brazilian community link matrix. Most were aquatic studies, taxonomic papers, or unrelated records.
- **figshare API:** queries `Amazon food web` (25 returned), `Amazon trophic network` (11), `Brazil rainforest food web` (3). No terrestrial Brazilian community matrix; relevant hits were aquatic supplements or unrelated material. Web query `site:figshare.com Amazon food web Brazil terrestrial` also produced no matrix.
- **Dryad:** web queries `site:datadryad.org Amazon food web Brazil`, `site:datadryad.org Amazon food web`; followed candidate deposits `10.5061/dryad.3tx95x6cc` and `10.5061/dryad.41ns1rnt9`. The former is macrofauna/site data with no links; the latter is Ecuadorian bromeliad community data and outside scope.
- **OpenAlex API:** queries `Amazon food web`, `Amazon trophic network`, `Brazil rainforest food web` (25 works each). No additional in-scope resolved terrestrial web; useful nearby leads were followed to primary sources.
- **Crossref API:** queries `Amazon food web`, `Amazon trophic network` (20 works each). Same leads as OpenAlex; a third planned query (`Brazil rainforest food web`) was rate-limited and not retried.
- **Primary-literature web queries:** `Amazon rainforest food web dataset matrix Brazil terrestrial`; `Amazon forest trophic network Brazil food web`; `Amazon rainforest quantitative food web published species links Brazil`; `Ducke Reserve food web trophic network`; `Amazon soil food web energy flux Brazil forest`; `Amazon rainforest food web supplementary data trophic links`; `Amazonian food web species links forest`; `Amazon forest food web network species`; `Amazon rainforest food-web study`; `Brazilian Amazon food web terrestrial`; `Amazonian soil food web data matrix Yasuni species links 2017`; `Brazil Amazon insect food web trophic network matrix forest`; `Brazilian Amazon leaf litter food web species interactions`; `food web Central Amazon forest`; `food web Amazonas Brazil rainforest species`; `Fittkau Klinge 1973 biomass trophic structure central Amazonian rain forest ecosystem food web matrix`; `On biomass and trophic structure PDF`; `Amazon forest food web Fittkau Klinge trophic groups`; `Central Amazon rainforest ecosystem energy flow food web model`; `food web Manaus forest trophic`; `trophic network Amazon forest Brazil species interactions predation`; `food-web Brazilian Amazon forest terrestrial`; `food webs Amazonia terrestrial invertebrates`; `Amazon food web structure terrestrial forest Brazil`; `Amazon trophic interactions forest food web Brazil -fish -stream`; `Amazon rainforest predator-prey network`; `Amazon forest ecological network predation food web`; `food web Manaus Brazil trophic`; `food web Ducke`; `food web Biological Dynamics of Forest Fragments`; `Amazon multitrophic food web Brazil`; `Amazon multi-trophic network Brazil rainforest`; Portuguese queries `teia alimentar Amazônia floresta dados`, `rede trófica floresta amazônica`, `rede alimentar Amazônia floresta`, `teia trófica Amazônia terrestre`.
- **Primary sources read:** Fittkau & Klinge 1973 full open PDF (including Fig. 3); Didham et al. 1998 abstract/full-text record; Demetrio et al. 2021 article metadata and Dryad abstract; Cárdenas et al. 2017 full text; O'Reilly-Berkeley et al. 2025 article metadata and Dryad abstract. No missing links were reconstructed from trophic labels or ecological knowledge.

---

## Appendix — recorded, not planned

### Central Amazonian rain forest biomass and organic-matter flow, Manaus, Brazil — `central-amazon-biomass-flow`
- **Biome / Region:** Tropical terra firme rainforest · Central Amazon, Brazil · **Lat/Lng (approx):** −2.6, −60.0 (Manaus–Itacoatiara study area)
- **Source:** Fittkau, E.J. & Klinge, H. (1973). On biomass and trophic structure of the central Amazonian rain forest ecosystem. *Biotropica* 5(1):2–14. DOI: [10.2307/2989676](https://doi.org/10.2307/2989676). Open author/archival PDF: https://www.zin.ru/animalia/coleoptera/pdf/fittkau_klinge_1973_amazonian_rain_forest.pdf
- **Data access:** INACCESSIBLE as a resolved web — article and Fig. 3 are accessible, but the figure contains only living plant biomass, dead plant biomass, fungi, soil fauna, herbivore animal biomass, and carnivore animal biomass as broad schematic compartments. No species/guild link matrix or diet fractions are published.
- **Raw size:** 6 ecological compartments in the core detrital/grazer diagram (plus external nutrient/rain and primary-production flows) / no enumerated feeding-link set · **Aggregation plan:** none; splitting the five compartments would require unsourced nodes and links
- **Data type:** qualitative schematic flows with biomass-stock estimates, not weighted diet data · **Provenance:** empirical field study with literature-informed estimates
- **Scores:** data 1 · story 2 · geography 3 · cost 3 · recognition 3 = **12**
- **Tier:** appendix (hard-gate fail despite score) · **Notes:** Historically important and ecologically compelling: fungi transform litter into the main animal-energy pathway. It is not rich enough for the 15–25-node product, and the biomass values cannot be converted into diet weights.

### Biological Dynamics of Forest Fragments Project leaf-litter beetles, Central Amazon, Brazil — `bdffp-beetle-trophic-web`
- **Biome / Region:** Tropical rainforest leaf litter · BDFFP, north of Manaus, Brazil · **Lat/Lng (approx):** −2.4, −59.8
- **Source:** Didham, R.K., Lawton, J.H., Hammond, P.M. & Eggleton, P. (1998). Trophic structure stability and extinction dynamics of beetles (Coleoptera) in tropical forest fragments. *Philosophical Transactions of the Royal Society B* 353:437–451. DOI: [10.1098/rstb.1998.0221](https://doi.org/10.1098/rstb.1998.0221); open record: [PMC1692223](https://pmc.ncbi.nlm.nih.gov/articles/PMC1692223/).
- **Data access:** INACCESSIBLE as a food web — the published study reports occurrences, abundances, and six trophic groups, not beetle–resource or predator–prey links. No supplementary edge list was located.
- **Raw size:** 993 beetle species from 920 m² of litter at 46 sites / no feeding-link set · **Aggregation plan:** six trophic groups would be only a guild summary; expanding to 15–25 nodes would not create trophic edges
- **Data type:** occurrence/abundance with trophic assignments · **Provenance:** empirical community survey, not an empirical interaction web
- **Scores:** data 1 · story 3 · geography 3 · cost 1 · recognition 2 = **10**
- **Tier:** appendix (hard-gate fail) · **Notes:** Strong fragmentation story and a real finding that predators are disproportionately extinction-prone, but a histogram of trophic guilds is not a food-web matrix. Do not infer pairwise links from guild membership.

### Amazonian Dark Earths and adjacent-soil macrofauna, Brazil — `amazon-dark-earth-macrofauna`
- **Biome / Region:** Tropical rainforest soils and anthropogenic dark earths · Central (Iranduba), southwestern (Porto Velho), and lower (Belterra) Amazon · **Lat/Lng (approx):** site-dependent; central Amazon lead −3.3, −60.2
- **Source:** Demetrio, W.C. et al. (2021). A “Dirty” Footprint: Macroinvertebrate diversity in Amazonian Anthropic Soils. *Global Change Biology* 27(19):4575–4591. DOI: [10.1111/gcb.15752](https://doi.org/10.1111/gcb.15752); open article: [PMC9292437](https://pmc.ncbi.nlm.nih.gov/articles/PMC9292437/). Data: Dryad [10.5061/dryad.3tx95x6cc](https://datadryad.org/dataset/doi:10.5061/dryad.3tx95x6cc).
- **Data access:** INACCESSIBLE as a food web — the open deposit contains soil macroinvertebrate biodiversity (26 taxa), site/soil properties, and activity measurements, not feeding interactions or a diet matrix.
- **Raw size:** 26 taxa across 18 sampling sites / no feeding-link set · **Aggregation plan:** taxa could fit the node ceiling, but every trophic edge would be external or invented
- **Data type:** abundance/community and environmental measurements · **Provenance:** empirical community survey, not an empirical interaction web
- **Scores:** data 1 · story 2 · geography 3 · cost 2 · recognition 2 = **10**
- **Tier:** appendix (hard-gate fail) · **Notes:** Interesting human-shaped-soil narrative and open data, but no resolved food web. Revisit only alongside a genuinely linked soil-food-web dataset from the same sites.

## Rejected and excluded leads

- **`balbina-forest-islands`:** already independently rejected in `verified/south-america.md` because links are probabilistic/model-inferred. Not duplicated here.
- **`amazon-vertebrate-metaweb`:** already appendix in `researched/tropical-terrestrial.md` (preprint; SCFN-model-predicted links). Not duplicated here.
- **Yasuní soil food web:** Cárdenas, R.E., Donoso, D.A., Argoti, A. & Dangles, O. (2017), *Ecosphere* 8:e01692, DOI [10.1002/ecs2.1692](https://doi.org/10.1002/ecs2.1692). Ecuador, outside this Brazil sweep. It reports 541 morphospecies and 12 functional groups, but functional feeding assignments and exclusion treatments are not a resolved pairwise matrix.
- **Amazon bromeliad invertebrate communities:** O'Reilly-Berkeley et al. (2025), DOI [10.1111/een.70030](https://doi.org/10.1111/een.70030), Dryad [10.5061/dryad.41ns1rnt9](https://datadryad.org/dataset/doi:10.5061/dryad.41ns1rnt9). Ecuador, outside scope; community measurements rather than a link matrix.
- **Peruvian tri-trophic plant–gall–microhymenopteran networks:** Grandez-Rios et al. (2025), DOI [10.1007/s42690-025-01606-4](https://doi.org/10.1007/s42690-025-01606-4). Peru, outside scope, and host–parasitoid networks are outside the current product surface.
- **Global scorpion–insect trophic synthesis:** Yang et al. (2025), *Zoological Systematics* 50(4):281–292, DOI [10.11865/zs.2025401](https://doi.org/10.11865/zs.2025401). A geographically pooled literature synthesis, not a local Brazilian Amazon community web.
- **Amazon aquatic food webs and Ecopath models:** excluded by scope; freshwater is already saturated and Tapajós is implemented.
- **Educational Amazon diagrams (Prezi, Insight Maker, Exploring Nature, etc.):** not citable empirical datasets; rejected without transcribing any links.
- **Pollination, frugivory, and disease-transmission networks:** different product surface; not treated as food-web candidates.

## Verdict

**NOT BUILDABLE.** Zero Tier 1 or Tier 2 candidates. This file is the do-not-repeat record for the Brazilian Amazon terrestrial-rainforest sweep. Re-run only on explicit request or when new evidence supplies a published, obtainable edge/diet matrix; the appendix candidates cannot be promoted merely by adding literature-inferred links.
