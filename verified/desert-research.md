# Region: Desert (global biome sweep)
**Researched:** 2026-10 · **Status:** complete (Stage 1 — awaiting verification)

**Repo context at sweep time:** 9 webs live; zero desert webs on the map. Biome saturation: freshwater 3 (saturated), marine 2, grassland 2, estuary 1, wetland 1, desert 0. A desert web fills a whole-biome gap (ECOSYSTEMS.md §9 gap #4) and would be the first terrestrial arid entry. Note: §9 predicted "no obvious classic web; expect composite" — this sweep found that prediction half-wrong: one genuine classic (Coachella Valley) and one modern weighted candidate (Namib fog oases) exist.

**Sweep log:**
- **Web of Life** (web-of-life.es): queries "Web of Life desert food web dataset" + food-web map page (type=5). The food-web collection is confirmed live, but no desert-located web surfaced; the JS map/API was not pulled this sweep (limitation recorded for Stage 2).
- **Netzschleuder** (networks.skewed.de): "Food web" tag catalog scanned — entries are Florida cypress wetlands, freshwater stream webs, Vázquez & Simberloff pollination webs, etc. **Zero desert entries**; Coachella Valley is NOT in the current catalog.
- **Mangal**: not swept directly; indirect searches surfaced no desert food-web dataset.
- **GloBI**: queries "GloBI Coachella Polis food web" — no confirmed Coachella/desert dataset indexing found at sweep time. Check again at Stage 2.
- **Ecopath publications**: query "Ecopath model arid desert ecosystem terrestrial" — **no terrestrial desert Ecopath model exists**; the Ecopath corpus is overwhelmingly aquatic. Logged as a structural gap: the usual "best source of weighted webs" route is closed for this biome.
- **figshare / Zenodo / Dryad**: query "desert food web matrix supplementary data figshare zenodo dryad" — **no desert food-web matrix deposits found**.
- **Primary literature** (queries logged verbatim): "Polis Coachella Valley desert food web published taxa links", "Gulf of California desert island food web Polis Hurd spider scorpion marine subsidy", "Namib Desert food web trophic network published", "Negev desert food web trophic network study matrix", "Chihuahuan desert Jornada food web trophic species published", "Sonoran desert food web network published dataset", "Australian desert food web trophic study", "Kalahari desert food web network published", "Atacama desert food web trophic network published", "Welwitschia food web Namib Dobson three trophic levels published network", "Coachella Valley food web trophic species dataset Dunne Williams Martinez download". Open full/partial texts read: Namib fog-oasis paper (PMC, open), Moran et al. 2019 (PMC, open), Polis & Hurd 1996 AmNat (open PDF incl. appendix family lists).

---

## Tier 1 — build next

### Coachella Valley (Sonoran Desert), California, USA — `coachella-valley`
- **Biome / Region:** Hot desert · North America · **Lat/Lng (approx):** 33.7, −116.2
- **Source:** Polis, G.A. (1991). Complex desert food webs: an empirical critique of food web theory. *American Naturalist* 138(1):123–155. The trophic-species version is one of the most re-analyzed webs in network science: S=29, L=262 (Camacho et al. 2007, PMC2128744); S=29, C=0.312 (Williams & Martinez 2008, J. Anim. Ecol.); S=30, L=241 (Martinez-group compilations).
- **Data access:** ASSUMED — the aggregated trophic-species matrix circulated for decades via the Dunne/Williams–Martinez collections and the NCEAS Interaction Web DB (now defunct). Concrete lead for Stage 2: Dunne et al. 2008 *PLoS Biology* "Compilation and Network Analyses of Cambrian Food Webs" publishes the full trophic-species matrices of its comparison webs (incl. Coachella) as supplementary tables. If that fails, reconstruct from Polis 1991 directly.
- **Raw size:** underlying field data ≥174 vascular plant species, 138 vertebrate species + arthropods (per Polis's two-decade study); published analysis version = 29–30 trophic species · **Aggregation plan:** use the canonical trophic-species version near-raw (~25–29 nodes), trimming to the 25-node ceiling if needed
- **Data type:** qualitative (binary) · **Provenance:** empirical
- **Scores:** data 2 · story 2 · geography 3 · cost 3 · recognition 2 = **12**
- **Tier:** 1 · **Notes:** THE classic desert web — the paper that demolished the "complexity implies instability" dogma by showing a real web with extreme connectance, omnivory, and cannibalism. That history is the hook ("the web that broke food-web theory"); scorpions sit near the top as intraguild predators. Cascade drama is subtler than krill/otter stories — removing scorpions releases spiders/insects rather than collapsing the web. Only N. America desert candidate found; pairs naturally with the existing N. America cluster without duplicating a biome.

### Namib fog-plant-oases (Namib Desert dunes), Namibia — `namib-fog-oasis`
- **Biome / Region:** Hyperarid coastal desert · southern Africa · **Lat/Lng (approx):** −23.5, 15.1 (Gobabeb dune field area)
- **Source:** "The hidden oases: unveiling trophic dynamics in Namib's fog plant ecosystem" (2024; open access, PMC11164947). Stable-isotope (δ13C, δ15N) study with Bayesian mixing-model (simmr) diet estimates; diet contribution proportions tabulated (Table 4); taxa span detritivores (oribatid mites, darkling beetles) to predators (salticids, crab spiders), with vertebrate predators (dune lizards *Meroles cuneirostris*, *Aporosaura anchietae*; dune lark *Mirafra erythrochlamys*) documented via cited diet studies.
- **Data access:** ASSUMED (strong) — paper is open access and the diet-contribution tables are stated to be in-article; tables not yet transcribed.
- **Data type:** weighted (mixing-model diet proportions — inferred, not observed) · **Provenance:** empirical
- **Raw size:** exact taxon count unconfirmed (~20–30 invertebrate taxa + the foundation grass + belowground module) · **Aggregation plan:** → ~15–18 nodes (S. sabulicola + detritus as basal; invertebrate guilds; lizards/lark/spiders as tops). **Size risk:** the aboveground web alone may fall under the 15-node gate; Stage 2 must decide whether the belowground nematode module (distinct δ13C pathway, wind-blown sediment base) is included as a second basal chain.
- **Scores:** data 3 · story 2 · geography 3 · cost 2 · recognition 2 = **12**
- **Tier:** 1 · **Notes:** The cleanest "foundation species" story in the sweep: fog condenses on one grass → the grass is the sole aboveground carbon source → remove it and the oasis collapses. Namib dunes are globally iconic; fills southern-Africa AND desert gaps simultaneously. Caveat for Stage 2: mixing-model proportions are model estimates — confirm this clears the "no invented weights" honesty bar (published estimates with citations should).

---

## Tier 2 — backlog

### Gulf of California desert islands, Baja California, Mexico — `gulf-of-california-islands`
- **Biome / Region:** Desert island (marine-subsidized) · North America/Mexico · **Lat/Lng (approx):** 29.0, −113.5 (Midriff Islands)
- **Source:** Polis, G.A., Hurd, S.D. (1995). Extraordinarily high spider densities on islands… *PNAS* 92:4382–4386 (open, PMC41948); Polis & Hurd (1996). Linking marine and terrestrial food webs… *American Naturalist* 147:813–832 (open PDF, includes appendix with family-level prey/predator lists); Due & Polis 1985.
- **Data access:** ASSUMED — no single link matrix exists; the AmNat appendix lists scavenger/detritivore and arthropod-predator families, and narrative diet observations (coyotes eating ghost crabs, scorpions limiting spiders) would need assembling. This would be a **composite** web built from 2–3 Polis-group papers.
- **Raw size:** ~40+ family-level arthropod groups listed in the appendix + vertebrates · **Aggregation plan:** → ~18–20 nodes (drift algae/seabird inputs → detritivore guilds → spiders/scorpions/lizards → raptors/coyotes)
- **Data type:** qualitative (binary, family-level) · **Provenance:** composite
- **Scores:** data 1 · story 3 · geography 3 · cost 1 · recognition 2 = **10**
- **Tier:** 2 (high-curation-risk) · **Notes:** The single best story in the sweep — the ocean feeding a desert island: 50–200 spiders per m³ of cactus on small islands, powered by shore drift and seabird colonies, with scorpions imposing top-down control. But there is no matrix to transcribe; building it is an editorial act. Promote only when a composite build is explicitly wanted.

### Lake Eyre Basin desert springs, arid South Australia — `lake-eyre-springs`
- **Biome / Region:** Desert mound springs (aquatic) · Australia · **Lat/Lng (approx):** −29.4, 136.7 (Dalhousie/Witjira spring complex area)
- **Source:** Moran, N.P. et al. (2019). Communities at the extreme: Aquatic food webs in desert landscapes. *Ecology and Evolution* (open access, PMC6802011). Stable-isotope + community-comparison study across 5 springs and 6 river sites; isotope niche metrics by functional group; the desert goby (*Chlamydogobius eremius*) is the only fish in the springs.
- **Data access:** ASSUMED — no binary link matrix; isotope tables and presence/absence by site are in-article (open). A web here would be assembled from isotope guilds + gut-content observations → composite-leaning.
- **Raw size:** per-site communities of ~10–20 invertebrate taxa + goby + basal sources · **Aggregation plan:** → ~15 nodes for one spring (algae/biofilm, FPOM → gastropods, amphipods, detritivores → predatory invertebrates → desert goby)
- **Data type:** mixed (qualitative structure + isotope-derived trophic positions) · **Provenance:** empirical (structure) / composite (links)
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 1 = **10**
- **Tier:** 2 · **Notes:** Ancient, hydrologically stable springs with endemic fish in the middle of a desert — "waterholes that never dry" is a good hook, and Australia is an empty continent on the map. Narrow taxonomic stage (invertebrates + one fish) limits cascade drama. Verify supplementary tables at Stage 2 before promoting.

### Australian arid-zone brown food web (Boolcoomatta Station), South Australia — `australian-brown-web`
- **Biome / Region:** Arid shrubland/grassland desert · Australia · **Lat/Lng (approx):** −32.5, 140.0
- **Source:** Wijas, B., Letnic, M. (2023, *Ecosystems*) — kangaroo-exclosure experiment inside the dingo fence showing overgrazing collapses the brown web: dead vegetation → termites → lizards/dunnarts → larger predators. Coverage via UNSW newsroom (2023-01) and journal page.
- **Data access:** ASSUMED weak — the paper is a mechanism/abundance study; a full node-link matrix is assumed NOT published. Building this web = composite from diet literature on each guild (termites, dunnarts, goannas, dingos).
- **Raw size:** not enumerated in sources reviewed · **Aggregation plan:** → ~16 nodes (live grass, dead grass → kangaroos, termites → lizards/dunnarts → goannas/raptors → dingo as apex)
- **Data type:** qualitative (would be composite) · **Provenance:** composite
- **Scores:** data 1 · story 3 · geography 3 · cost 2 · recognition 1 = **10**
- **Tier:** 2 (high-curation-risk) · **Notes:** Textbook trophic cascade with a real apex predator: dingo functionally extinct inside the fence → kangaroo overgrazing → dead-grass/termite base starved → small-vertebrate collapse. Ideal "remove the apex" hero story — but every edge would need its own literature citation. Backlog until a composite desert web is on the roadmap.

---

## Appendix — recorded, not planned

### Welwitschia three-trophic-level web, Namib Desert — `welwitschia-web`
- Dobson, A. (2023). Plant communities and food webs. *Frontiers in Ecology and Evolution* 11:1253084 (open access) — includes a three-trophic-level web figure built around *Welwitschia mirabilis*.
- **Why appendix:** figure-level conceptual web in a review paper; no underlying matrix, data availability points to the article itself. Too shallow to stand alone; *Welwitschia* could instead appear as a named basal node inside `namib-fog-oasis` if geography allows (different dune habitat — check at curation).

---

## Rejected in sweep
- **Jornada Basin / Chihuahuan Desert (LTER)** — rich herbivore-community science (2024 PMC11610684: cattle/oryx/rodent dynamics), but no resolved trophic link matrix found. Revisit if a Jornada web is ever published.
- **Negev Desert** — queries returned network-methodology papers and education content only; no resolved Negev food web found.
- **Sonoran Desert (broad)** — the only Sonoran datasets found are ethnobotanical (349 human food plants, Flower et al. 2021) — not trophic networks. Coachella Valley *is* Sonoran Desert and covers the region.
- **Mojave Desert** — only educational diagrams (Study.com tier-lists). No published matrix.
- **Sahara / Kalahari / Atacama** — no resolved published food webs found at any database or in the literature; Kalahari/Sahara hits were educational content. Genuine data deserts, consistent with ECOSYSTEMS.md §9.
- **Terrestrial desert Ecopath models** — none exist; the Ecopath route (normally the best source of weighted webs) is closed for this biome. Logged as a structural finding.
- **Raw GloBI/Mangal desert mega-web build** — deliberately out of scope per ECOSYSTEMS.md §8 (100+ species webs fail the ≤25-node gate).

## Stage 2 priorities for the verifier
1. **Coachella**: obtain the 29–30 trophic-species matrix — first check Dunne et al. 2008 *PLoS Biology* supplementary tables, then GloBI, then Williams & Martinez collection mirrors. Confirm node list and whether trimming to ≤25 keeps the story.
2. **Namib**: transcribe the diet-contribution tables from PMC11164947; count taxa; decide on the belowground module to clear the 15-node gate; sanity-check that mixing-model proportions satisfy the weight-honesty rules.
3. **Gulf of California**: only if a composite is wanted — scope the build from Polis & Hurd 1996 appendix + PNAS 1995 + Due & Polis 1985.
4. **Lake Eyre**: open the Moran et al. 2019 supplements; confirm whether per-site taxa lists are complete enough to assemble one spring web.
5. **Australian brown web**: confirm whether Wijas & Letnic publish any species-level interaction table; if not, keep as composite backlog.
