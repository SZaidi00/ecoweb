# Region: South America
**Researched:** 2026-10 · **Status:** complete (Stage 1 — awaiting verification)

**Repo context at sweep time:** 8 webs live; South America entirely empty on the map. Biome saturation: freshwater 2 (both N. America lakes), marine 2, grassland 2, estuary 1, wetland 1. Tropical terrestrial = zero anywhere on the map.

**Sweep log:**
- **Mangal API** (`/api/v2/network?type=predation&count=500`): downloaded 500 networks, filtered to South America bbox (lon −85..−30, lat −60..15) → 3 hits, all non-food-web (2 pollination/frugivory Brazil, 1 Antarctic ice-edge). No usable SA food web in sample.
- **Netzschleuder** (networks.skewed.de, tag "Food web"): 7 entries total (Little Rock, Cypress wetlands, fresh webs, etc.) — none South American.
- **Web of Life**: searched dataset documentation / food-web catalog — food-web holdings are the canonical set (mostly N. temperate); no SA entries identified.
- **GloBI**: searched indexed-dataset inventory for South American trophic/diet datasets — no dedicated SA food-web dataset found (GoMexSI analogues are Gulf of Mexico only).
- **Ecopath publications**: queries "Ecopath model Amazon floodplain", "Pantanal food web Ecopath", "Itaipu reservoir Ecopath", "Brazilian coast Ecopath" → Tapajós, Pantanal oxbow lakes, Upper Paraná/Itaipu candidates. A Brazilian thesis (UFRPE) confirms most Brazilian Ecopath models are coastal/estuarine with published diet matrices.
- **figshare / Zenodo / Dryad**: San Jorge Gulf Zenodo deposit `10.5281/zenodo.6627973` + GitHub `EcoComplex/NetworkGolfoSanJorge` (cited in paper's data availability; direct Zenodo fetch returned HTTP 403 — bot-blocked, existence assumed); Pires et al. 2023 data+code deposited on figshare (per paper's STAR Methods).
- **Primary literature**: read Funes et al. 2022 (Sci Rep, via PMC, full text) and Pires et al. 2023 (Curr Biol, via UEA open PDF, full text).

---

## Tier 1 — build next

### Tapajós River (lower), Brazilian Amazon — `tapajos-river`
- **Biome / Region:** Freshwater river/floodplain · Amazonas/Pará, Brazil · **Lat/Lng (approx):** −2.5, −54.7 (Santarém reach)
- **Source:** Capitani, L., Angelini, R., Keppeler, F.W., Hallwass, G., Silvano, R.A.M. (2021). Food web modeling indicates the potential impacts of increasing deforestation and fishing pressure in the Tapajós River, Brazilian Amazon. *Regional Environmental Change* 21:42. DOI: 10.1007/s10113-021-01777-z
- **Data access:** ASSUMED — Ecopath/Ecosim model with flow diagram and fisheries landings published; underlying thesis (UFRGS Lume repository, open PDF) contains the food-web flow diagram (Fig. 4) and model tables. Diet matrix location to be confirmed at Stage 2.
- **Raw size:** ~20–40 functional groups (typical for Angelini-lab EwE models; exact count unconfirmed) · **Aggregation plan:** → ~20 nodes (merge small fish guilds, keep piscivores/catfish/characins distinct)
- **Data type:** weighted (diet %) · **Provenance:** empirical
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 3 = **14**
- **Tier:** 1 · **Notes:** The Amazon-deforestation-meets-fisheries cascade story — simulated biomass changes under deforestation + overfishing scenarios. Fills the biggest named-ecosystem gap on the map. Third freshwater web, but river/floodplain is structurally distinct from the two N. American lakes.

### San Jorge Gulf, Patagonia, Argentina — `san-jorge-gulf`
- **Biome / Region:** Marine (SW Atlantic shelf) · Chubut/Santa Cruz, Argentina · **Lat/Lng (approx):** −45.5, −66.5
- **Source:** Funes, M. et al. (2022). Network analysis suggests changes in food web stability produced by bottom trawl fishery in Patagonia. *Scientific Reports* 12. PMC9237026. Data+code: Zenodo 10.5281/zenodo.6627973, GitHub EcoComplex/NetworkGolfoSanJorge.
- **Data access:** ASSUMED (strong) — paper is open access (read in full); data availability statement cites Zenodo + GitHub repos. Direct fetch of Zenodo page returned 403 (bot-block); deposit not yet opened.
- **Raw size:** 165 trophic nodes (115 species + 50 trophospecies), 1015 links, ~5 trophic levels, weighted links · **Aggregation plan:** → ~22 nodes (aggregate to functional groups: hake, red shrimp, squid, demersal fish guilds, zooplankton, benthos, detritus)
- **Data type:** weighted · **Provenance:** empirical
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 2 = **13**
- **Tier:** 1 · **Notes:** Paper models the web *with and without* the bottom-trawl fishery — a ready-made cascade narrative (fishery node adds 69 links; stability metrics shift, suggesting a state change). Argentine hake + red shrimp fishery. Aggregation from 165 nodes is the main curation cost.

### Balbina Archipelago forest islands, Central Amazon — `balbina-forest-islands`
- **Biome / Region:** Tropical rainforest (terrestrial vertebrates) · Amazonas, Brazil · **Lat/Lng (approx):** −1.8, −59.5
- **Source:** Pires, M.M., Benchimol, M., Cruz, L.R., Peres, C.A. (2023). Terrestrial food web complexity in Amazonian forests decays with habitat loss. *Current Biology* 33(2):389–396.e3. DOI: 10.1016/j.cub.2022.11.066. Data+code: figshare (DOIs in paper's key resources table).
- **Data access:** ASSUMED — open-access PDF read in full (UEA repository); figshare deposit stated in STAR Methods, not yet opened.
- **Raw size:** regional pool ~28 vertebrates (5 carnivores, 2 omnivores, >20 prey: ungulates, rodents, xenarthrans, primates, terrestrial birds) · **Aggregation plan:** near-raw use (~25 nodes), no aggregation needed
- **Data type:** qualitative/probabilistic — **caveat:** links are *model-inferred potential interactions* from body-size relationships + field surveys, NOT observed diets · **Provenance:** empirical surveys + modeled links (would need an explicit honesty label; closer to `composite` than `empirical`)
- **Scores:** data 2 · story 3 · geography 3 · cost 3 · recognition 3 = **14**
- **Tier:** 1 (flag: **high-curation-risk** on provenance) · **Notes:** Only tropical-terrestrial candidate found — the thinnest published-web coverage globally. Jaguar/puma/ocelot vs. peccaries/tapir/agoutis is a flagship cast, and the habitat-fragmentation collapse story is dramatic. Stage 2 must decide whether inferred links meet the honesty bar; if not, demote.

### Pantanal oxbow lakes, Brazil — `pantanal-oxbow-lakes`
- **Biome / Region:** Freshwater wetland/floodplain lakes · South Pantanal, Mato Grosso do Sul, Brazil · **Lat/Lng (approx):** −19.5, −57.0
- **Source:** Angelini, R., de Morais, R.J., Catella, A.C., Resende, E.K., Libralato, S. (2013). Aquatic food webs of the oxbow lakes in the Pantanal: a new site for fisheries guaranteed by alternated control? *Ecological Modelling* 253:82–96.
- **Data access:** ASSUMED — published EwE models of three oxbow lakes; caiman diet composition sourced from Borteiro et al. (2009). Paywalled (ScienceDirect); matrix likely in article tables — confirm at Stage 2.
- **Raw size:** unknown (typical EwE ~15–25 groups per lake) · **Aggregation plan:** → ~18 nodes for one representative lake
- **Data type:** weighted · **Provenance:** empirical
- **Scores:** data 3 · story 2 · geography 2 · cost 2 · recognition 3 = **12**
- **Tier:** 1 (bottom of tier) · **Notes:** Yacaré caiman + piranhas flagship cast in the world's largest tropical wetland; fisheries-free reference system. Geography docked because freshwater already has 2 webs and cypress-wetland covers the wetland biome.

---

## Tier 2 — backlog

### Upper Paraná River Floodplain / Itaipu Reservoir, Brazil — `upper-parana-floodplain`
- **Biome / Region:** Freshwater river/reservoir · Paraná, Brazil · **Lat/Lng (approx):** −22.8, −53.3 (floodplain); −25.4, −54.6 (Itaipu)
- **Source:** Angelini, R. & Agostinho, A.A. (2005). Food web model of the Upper Paraná River Floodplain: description and aggregation effects. *Ecological Modelling*; and Angelini, R., Agostinho, A.A., Gomes, L.C. (2006). Modeling energy flow in a large Neotropical reservoir. *Neotropical Ichthyology* 4(2):253–260 (open access, SciELO) — includes Ecopath TL + diet-composition table (confirmed via UEM repository PDF).
- **Data access:** ASSUMED for 2005 (paywalled); VERIFIED-ish for 2006 Itaipu paper (open access, diet table present in PDF).
- **Raw size:** unknown · **Aggregation plan:** → ~18 nodes
- **Data type:** weighted · **Provenance:** empirical
- **Scores:** data 3 · story 2 · geography 2 · cost 2 · recognition 2 = **11**
- **Tier:** 2 · **Notes:** Solid, accessible weighted web, but no flagship species and a reservoir/dam narrative overlaps with Tapajós. Useful fallback if a Tier 1 freshwater candidate fails verification.

---

## Appendix — recorded, not planned

### Strait of Magellan, Chile — `strait-of-magellan`
- Andrade, C. et al. (2025). Marine Trophic Architecture and Hidden Ecological […] — Authorea preprint (DOI: 10.22541/au.174836891.12332650), 139 trophic species incl. 3 non-living nodes.
- **Why appendix:** peer-review status unconfirmed (preprint only at sweep time). Re-check if published; sub-Antarctic channel would be a distinctive biome entry.

---

## Rejected in sweep
- **Raw GloBI/Mangal mega-webs** — Mangal API sample contained zero SA predation networks; GloBI holds no dedicated SA food-web dataset. Fail the obtainable-matrix gate for a curated web.
- **"Amazon rainforest food web" educational diagrams** (Scribd etc.) — not citable, not data.
- **Cerrado / Llanos savanna webs** — no resolved published food web found; only niche-model and range papers. Recorded as a persistent gap (matches ECOSYSTEMS.md §9: tropical terrestrial is thin everywhere).

## Stage 2 priorities for the verifier
1. Open Zenodo 10.5281/zenodo.6627973 / GitHub EcoComplex/NetworkGolfoSanJorge — confirm the San Jorge matrix is really there and machine-readable.
2. Locate the Tapajós diet matrix (thesis PDF at UFRGS Lume vs. paper supplementary).
3. Decide the Balbina inferred-links provenance question against the project's honesty rules.
4. Confirm Pantanal model tables are in the ScienceDirect article (paywall access).
