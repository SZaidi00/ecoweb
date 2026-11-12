# Region: Patagonia (gap-fill sweep)
**Researched:** 2026-11-12 · **Status:** complete (Stage 1 — awaiting verification)

**Scope note:** Southern South American terrestrial, freshwater, and coastal systems in Argentina and Chile. This extends rather than repeats the Patagonian records in `researched/south-america.md`: `san-jorge-gulf` (Tier 1, already verified) and `strait-of-magellan` (appendix, already verification-recorded) are excluded from the new candidate table and their ledger rows are unchanged. No new candidate duplicates either system.

**Repo context at sweep time:** 10 webs live; South America has one implemented pin (Tapajós River). Biome saturation: marine 4 (saturated), freshwater 3 (saturated), grassland 2, estuary 1, wetland 1. Patagonian terrestrial/steppe is empty, so it receives the strongest geography score. Marine and freshwater candidates are held to the biome-saturation hard gate even when their numerical scores would otherwise reach Tier 1/2.

## Candidate table

| Candidate id | System | Biome | Access at Stage 1 | Score | Verdict |
|---|---|---|---|---:|---|
| `magellanic-rabbit-steppe` | Magellanic/Fuegian steppe and scrub, Chile | Terrestrial steppe/scrub | assumed | 11 | **Tier 2** (high aggregation cost) |
| `golfo-nuevo-green-crab` | Golfo Nuevo rocky intertidal, Argentina | Marine intertidal | assumed | 11 | Appendix (marine-saturation gate) |
| `lake-moreno` | Lake Moreno, NW Patagonia, Argentina | Freshwater lake | inaccessible | 11 | Appendix (freshwater saturation; matrix not located) |
| `beagle-channel` | Beagle Channel, Argentina | Sub-Antarctic marine | assumed | 9 | Appendix (marine-saturation gate) |
| `chilean-patagonia-ewe` | Chilean Patagonia, 41°28.6′S–57°S | Marine shelf/fjord | inaccessible | 12 | Appendix (marine saturation; diet matrix not located) |
| `south-patagonia-paleo-web` | South Patagonia, Pleistocene–Holocene | Paleo terrestrial vertebrate web | assumed | — | **Rejected** (model-inferred potential links) |
| `patagonia-chinook-subsidy` | Patagonian spawning streams/riparian zones | Freshwater–terrestrial subsidy | assumed | — | **Rejected** (partial interaction study, not a community web) |

## Sweep log

- **Web of Life:** `site:web-of-life.es Patagonia food web`; `Patagonia food web site:web-of-life.es OR site:mangal.io OR site:networks.skewed.de` → no Patagonian food-web entry found. The only Nahuel Huapi result elsewhere in the network catalog is plant–pollinator, out of scope.
- **GloBI:** `site:globalbioticinteractions.org Patagonia food web dataset`; `Patagonia food web site:globalbioticinteractions.org` → taxon-level search pages and literature references only; no dedicated resolved Patagonian matrix identified.
- **Mangal:** `site:mangal.io Patagonia predation network`; `site:mangal.io "Beagle Channel" OR "Golfo Nuevo" OR "Magallanes"` → no hits. Prior South America API sweep also found no usable South American predation network.
- **Netzschleuder:** `site:networks.skewed.de Patagonia food web` → no food-web hit; Nahuel Huapi plant–pollinator networks are a different interaction type. No new Patagonian candidate.
- **Ecopath publications / EcoBase leads:** `Patagonia Ecopath model diet matrix`; `"Patagonia" "Ecopath" ecosystem model`; `"Chilean Patagonia" Ecopath 2025 103631 groups diet matrix` → Chilean Patagonia dynamic EwE model (Neira et al., DOI 10.1016/j.pocean.2025.103631), plus references to earlier Patagonian multispecies models. No open diet matrix located for the 2025/2026 article.
- **figshare / Zenodo / Dryad:** `Patagonia food web Dryad Zenodo figshare`; `site:figshare.com Patagonia "food web"`; `site:zenodo.org Patagonia "food web"`; `site:datadryad.org Patagonia "food web" OR "trophic network"`; figshare API `search_for="Impacts of green crab Patagonia"` → public CC BY 4.0 ODS deposit for Golfo Nuevo (`10.6084/m9.figshare.20670378.v1`); San Jorge's existing Zenodo deposit not duplicated; no new Dryad matrix.
- **Primary literature:** `Patagonia food web trophic network matrix species`; `"Patagonia" "trophic network"`; `"Patagonian steppe" "food web"`; `Patagonian lake food web network trophic links`; `"red trófica" Patagonia matriz`; `"redes tróficas" Patagonia datos`; `"Patagonian" "terrestrial food web" published network` → Magellanic rabbit web, Golfo Nuevo green-crab web, Beagle Channel web, Lake Moreno/Nahuel Huapi isotope webs, Pleistocene–Holocene reconstructions, and Chinook-salmon interaction study.
- **Primary sources read:** Mann-Vollrath et al. 2024 full text (PMC11344046); Cordone et al. 2023 abstract/Crossref record and public figshare metadata; Pires et al. 2020 author PDF; Rodríguez et al. 2022 publication record/open author PDF located. Repository filenames were identified for the rabbit and green-crab candidates; independent matrix verification remains Stage 2 work.

---

## Tier 2 — backlog

### Magellanic/Fuegian steppe and scrub, southernmost Chile — `magellanic-rabbit-steppe`
- **Biome / Region:** Terrestrial steppe/scrub (with forest and peat-bog taxa in the regional pool) · Magallanes/Tierra del Fuego, Chile · **Lat/Lng (approx):** −53.0, −71.0
- **Source:** Mann-Vollrath, F., Correa-Cuadros, J.P., Ávila-Thieme, M.I., Duclos, M. & Jaksic, F.M. (2024). The ecological roles of the European rabbit in the Magellanic/Fuegian ecosystem of southernmost Chile. *Scientific Reports* 14:19581. DOI: [10.1038/s41598-024-70511-6](https://doi.org/10.1038/s41598-024-70511-6). Open full text: [PMC11344046](https://pmc.ncbi.nlm.nih.gov/articles/PMC11344046/).
- **Data access:** **ASSUMED** — paper's data statement names [`IsidoraAvilaThieme/Magellanic_food_web`](https://github.com/IsidoraAvilaThieme/Magellanic_food_web). Repository contains `Interaction list.xlsx` (edge list), `Network properties from Network 3D.xlsx`, and extinction-analysis R code. Workbook contents and the 206/535 counts still require independent Stage 2 verification.
- **Raw size:** 206 nodes / 535 qualitative links; 82% basal, 10% intermediate, 8% top predators · **Aggregation plan:** → ~20–24 nodes (retain rabbit, guanaco, huemul, sheep, puma, foxes, condor and other narrative species; aggregate the very large plant pool into documented native/exotic and growth-form guilds, and small vertebrates into trophic guilds)
- **Data type:** qualitative binary adjacency · **Provenance:** composite (systematic diet-literature assembly plus specialist review; not a single empirical dataset)
- **Scores:** data 2 · story 3 · geography 3 · cost 1 · recognition 2 = **11**
- **Tier:** 2 (**high-curation-risk**) · **Notes:** Best non-marine lead. European rabbit is the most connected node (56 links), with a published removal experiment: herbivory release on native plants and diet loss for predators/scavengers. Aggregation is substantial, and the source itself cautions that uneven diet sampling and missing links remain. Its rule treating some taxa without prey data as basal (including insectivorous birds/insects) must be handled explicitly rather than silently imported. Stage 2 should test whether a ≤25-node aggregation preserves the rabbit–plant–predator story without arbitrary omission.

---

## Appendix — recorded, not planned

### Golfo Nuevo rocky intertidal, Chubut, Argentina — `golfo-nuevo-green-crab`
- **Biome / Region:** Marine rocky intertidal · **Lat/Lng (approx):** −42.8, −64.9
- **Source:** Cordone, G., Galván, D.E. & Momo, F.R. (2023). Impacts of an invasion by green crab *Carcinus maenas* on the intertidal food web of a Patagonian rocky shore, Argentina. *Marine Ecology Progress Series* 713:97–115. DOI: [10.3354/meps14336](https://doi.org/10.3354/meps14336).
- **Data access:** **ASSUMED** — public CC BY 4.0 figshare deposit [10.6084/m9.figshare.20670378.v1](https://doi.org/10.6084/m9.figshare.20670378.v1), `DataBase_Cordonegreencrab.ods`, contains the pre/post-invasion adjacency data and bibliography; independent verification pending.
- **Raw size:** 88 nodes / 485 links in the post-invasion ODS sheet (pre-invasion counts still to confirm at Stage 2) · **Aggregation plan:** → ~20 nodes (macroalgae/biofilm/detritus, polychaete and mollusc guilds, native crabs, invasive green crab, shorebirds and other top consumers)
- **Data type:** qualitative · **Provenance:** composite (compiled diet studies)
- **Scores:** data 2 · story 3 · geography 2 · cost 2 · recognition 2 = **11**
- **Tier:** appendix · **Notes:** Strong invasion cascade and open data, but marine is already saturated at four live webs. Reconsider when a marine slot opens or if intertidal is deliberately treated as a distinct biome.

### Lake Moreno, NW Patagonia, Argentina — `lake-moreno`
- **Biome / Region:** Ultra-oligotrophic freshwater lake · Nahuel Huapi National Park · **Lat/Lng (approx):** −41.05, −71.48
- **Source:** Arcagni, M., Campbell, L.M., Arribére, M.A., Kyser, K., Klassen, K., Casaux, R., Miserendino, M.L. & Ribeiro Guevara, S. (2013). Food web structure in a double-basin ultra-oligotrophic lake in Northwest Patagonia, Argentina, using carbon and nitrogen stable isotopes. *Limnologica* 43(2):131–142. DOI: [10.1016/j.limno.2012.08.009](https://doi.org/10.1016/j.limno.2012.08.009).
- **Data access:** **INACCESSIBLE** — paper and isotope/SIAR approach identified, but no obtainable node-by-node edge/diet matrix or repository deposit located in this sweep.
- **Raw size:** not counted · **Aggregation plan:** potentially ~18–22 native/exotic fish, plankton and benthic groups if diet proportions are recovered
- **Data type:** weighted (isotope mixing-model diet proportions) · **Provenance:** empirical
- **Scores:** data 3 · story 2 · geography 2 · cost 2 · recognition 2 = **11**
- **Tier:** appendix · **Notes:** Native percichthyids/galaxiids versus introduced salmonids would be useful, but freshwater is saturated at three live webs and the matrix was not located. Nahuel Huapi (Arcagni et al. 2015, DOI 10.1016/j.jglr.2015.05.008) is the same class of isotope-based lead and was not promoted separately.

### Beagle Channel, Argentina — `beagle-channel`
- **Biome / Region:** Sub-Antarctic coastal marine · Lapataia and Ushuaia bays · **Lat/Lng (approx):** −54.85, −68.45
- **Source:** Rodriguez, I.D., Marina, T.I., Schloss, I.R. & Saravia, L.A. (2022). Marine food webs are more complex but less stable in sub-Antarctic (Beagle Channel, Argentina) than in Antarctic (Potter Cove, Antarctic Peninsula) regions. *Marine Environmental Research* 174:105561. DOI: [10.1016/j.marenvres.2022.105561](https://doi.org/10.1016/j.marenvres.2022.105561). Open author PDF: [lsaravia.github.io](https://lsaravia.github.io/publication/rodriguez2022/rodriguez2022.pdf).
- **Data access:** **ASSUMED** — published network and supplementary construction details exist; no standalone matrix deposit was confirmed. Exact file/appendix location remains Stage 2 work if this candidate is reactivated.
- **Raw size:** 145 nodes / 1,115 links, including 3 non-living nodes · **Aggregation plan:** → ~20 nodes (detritus/necromass, producers, zooplankton, benthic guilds, fishes, birds and mammals)
- **Data type:** qualitative · **Provenance:** composite
- **Scores:** data 2 · story 2 · geography 2 · cost 1 · recognition 2 = **9**
- **Tier:** appendix · **Notes:** Real high-latitude network, but large aggregation burden, substantial overlap with the already-logged Strait of Magellan system, and marine-saturation gate.

### Chilean Patagonia dynamic Ecopath model — `chilean-patagonia-ewe`
- **Biome / Region:** Marine shelf/fjord system, 41°28.6′S–57°S · Chile · **Lat/Lng (approx):** −49.0, −74.0
- **Source:** Neira, S., Arancibia, H., Barros, M.E., Arriagada, A., Alarcón, R. & Gatica, C. (2026; online 2025). Analysing ecosystem and demersal stocks dynamics in the Chilean Patagonia system (41°28.6′S–57°S) from 1980 to 2020 using food web modelling. *Progress in Oceanography* 241:103631. DOI: [10.1016/j.pocean.2025.103631](https://doi.org/10.1016/j.pocean.2025.103631).
- **Data access:** **INACCESSIBLE** — publisher record and citation verified, but article/diet matrix was not openly obtainable and no repository deposit was found.
- **Raw size:** not yet counted; dynamic food-web model covering 1980–2020 · **Aggregation plan:** likely ~20–24 Ecopath functional groups if the diet matrix is obtained
- **Data type:** weighted · **Provenance:** empirical/model-balanced Ecopath
- **Scores:** data 3 · story 3 · geography 2 · cost 2 · recognition 2 = **12**
- **Tier:** appendix · **Notes:** Score would otherwise reach Tier 1, but both matrix-access and marine-saturation gates fail. Juvenile fish as prey for higher trophic levels and fishing/primary-production changes offer a strong story if access improves.

---

## Rejected in sweep

### South Patagonia Pleistocene–Holocene networks — `south-patagonia-paleo-web`
- **Source:** Pires, M.M., Rindel, D., Moscardi, B., Cruz, L.R., Guimarães Jr., P.R., dos Reis, S.F. & Perez, S.I. (2020). Before, during and after megafaunal extinctions: Human impact on Pleistocene-Holocene trophic networks in South Patagonia. *Quaternary Science Reviews* 250:106696. DOI: [10.1016/j.quascirev.2020.106696](https://doi.org/10.1016/j.quascirev.2020.106696). Open [author PDF](https://ecologia.ib.usp.br/guimaraes/papers/2020_PiresQSR.pdf).
- **Why rejected:** compelling humans–guanaco–megafauna story, but non-human predator links are probabilistic potential interactions inferred from body-mass ratios, with 1,000 simulated networks per period. This is the same provenance problem as `balbina-forest-islands`; it cannot be labeled `empirical` or a diet-literature `composite` under current rules. Revisit only if a `modeled` badge is added.

### Chinook salmon invasion interaction web, Patagonia — `patagonia-chinook-subsidy`
- **Source:** Muñoz, N.J., Reid, B., Correa, C., Madriz, R.I., Neff, B.D. & Reynolds, J.D. (2022). Emergent trophic interactions following the Chinook salmon invasion of Patagonia. *Ecosphere* 13(2):e3910. DOI: [10.1002/ecs2.3910](https://doi.org/10.1002/ecs2.3910).
- **Why rejected:** valuable observations of carcass/egg consumers and emerging cross-ecosystem links, but the paper documents a salmon-centered interaction subset rather than a resolved community food web with 15–25 coherent trophic nodes. Useful supporting literature for a future composite, not a standalone matrix.

## Stage 2 priorities for the verifier

1. Download and parse `Interaction list.xlsx` in `IsidoraAvilaThieme/Magellanic_food_web`; independently confirm 206 nodes/535 links, edge direction, bundled nodes, and whether source references accompany each interaction.
2. Audit the rabbit web's basal-node rule and uneven source quality. Decide whether the proposed plant/animal aggregation is defensible under the salmon rule before promoting it.
3. Only if a marine slot opens, independently verify the Golfo Nuevo ODS matrix and exact pre/post-invasion counts; it is the strongest fallback data package from this sweep.
