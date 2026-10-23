# Region: Tundra & boreal — terrestrial polar sweep (circumpolar)
**Researched:** 2026-10 · **Status:** complete (Stage 1 — awaiting verification)

**Repo context at sweep time:** 9 webs live. Biome saturation: freshwater 3 (saturated), marine 2, grassland 2, estuary 1, wetland 1. **Zero tundra and zero boreal-forest webs**, and the overall map skews heavily aquatic — the only polar web (Weddell Sea) is marine. This sweep targets the terrestrial polar gap: tundra and boreal forest, explicitly excluding aquatic systems (lakes, streams, marine) even where they are the better-known "Arctic food webs."

**Sweep log:**
- **Mangal** (mangal.io API v2): queries `tundra` → 0 datasets; `boreal` → 0; `arctic` → 8 datasets, **all marine or freshwater** (lancraft_1991, gontikaki_2011, mackintosh_1967, knox_1970, dunbar_1953, hadfield_2014, cornejo-donoso_2008, parker_huryn_2006 — the last being Alaskan Arctic *stream* webs). **No terrestrial tundra/boreal web in Mangal.**
- **GloBI** (api.globalbioticinteractions.org): probed `interaction?sourceDOI=` for Wirta 2015, Legagneux 2012, Hodkinson & Coulson 2004, Krebs 2018 — the sourceDOI filter did not constrain results this session (endpoint returned unfiltered default records), so indexing of candidate sources is **unconfirmed, neither way**; Stage 2 should re-check via the GloBI web UI.
- **Netzschleuder** (networks.skewed.de): catalog scanned via web search; food-web entries are aquatic (e.g. `foodweb_baywet` Florida cypress wetlands, `fresh_webs` streams). **No tundra/boreal terrestrial entry found.**
- **Web of Life** (web-of-life.es): probe **timed out** (site unresponsive this sweep) — not catalogued; limitation recorded for Stage 2.
- **Ecopath / EcoBASE** (ecobase.ecopath.org): repository listing shows one boreal-terrestrial entry — "Ruesink, J.L., 1988–1989, Shakwak Trench, Kluane Boreal Forest Ecosystem Project" (mass-balance application). Otherwise the corpus is aquatic/fisheries, consistent with prior sweeps.
- **figshare / Zenodo / Dryad**: Dryad API confirmed live deposit `10.5061/dryad.cv8cr` ("Data from: Exposing the structure of an Arctic food web", Wirta et al. 2015). Bylot data paper (Moisan et al. 2025) names Dryad `10.5061/dryad.44j0zpcnt`, Zenodo `10.5281/zenodo.16794619` (code) and `10.5281/zenodo.16794620` (metadata) — deposits named in the article's data-availability statement, not yet opened. Nordicana D (CEN, Université Laval) hosts open, periodically updated Bylot monitoring datasets (lemming D22, snow goose D41, longspur D42, shorebirds D44, fox D49, avian predators D50, arthropods D43).
- **Primary literature** (queries logged verbatim): "Zackenberg Greenland terrestrial food web published matrix trophic interactions", "Svalbard terrestrial food web published species interactions", "Kluane boreal forest food web Yukon snowshoe hare trophic interactions quantitative", "Varanger peninsula tundra food web COAT lemming vole predators published", "Barrow Alaska tundra food web Batzli brown lemming 1980 published matrix", "Finnish mountain birch forest food web Kevo geometrid moth parasitoid trophic network published", "Iceland heathland food web published trophic web". Full/partial texts read: Legagneux et al. 2012 (Ecology, open PDF at UBC), Wirta et al. 2015 (PMC4567885, open), Gauthier et al. 2024 (Front. Ecol. Evol., open), Moisan et al. 2025 (PMC12501677, open), Zhemchuzhnikov et al. 2026 (PMC13107267, open), Krebs et al. 2018 (Wiley JAE full text), Hodkinson & Coulson 2004 (abstract + citing sources), Kluane book table of contents (zoology.ubc.ca/~krebs/kbook.html).

---

## Tier 1 — build next

### Bylot Island tundra, Nunavut, Canada — `bylot-island-tundra`
- **Biome / Region:** High Arctic tundra · North America (Canadian Arctic Archipelago) · **Lat/Lng (approx):** 73.0, −80.0
- **Source:** Legagneux, P., Gauthier, G., Berteaux, D., et al. (2012). Disentangling trophic relationships in a High Arctic tundra ecosystem through food web modeling. *Ecology* 93(7). doi:10.1890/11-1973.1 (open PDF via UBC: zoology.ubc.ca/~krebs/papers/266.pdf). 17-year study (1993–2009); trophic mass-balance models over **19 functional groups**, parameterized per lemming-cycle phase (peak / intermediate / crash); diet from regurgitation pellets, automated cameras, direct observation, stable isotopes (literature only for lemmings, weasels, arthropods). Companion data: Moisan, L. et al. (2025). Long-term abundance time-series of the High Arctic terrestrial vertebrate community of Bylot Island. *Ecology* 106(10): e70223. doi:10.1002/ecy.70223 ("no copyright restrictions on the data or code") + Nordicana D monitoring series.
- **Data access:** ASSUMED (strong) — paper PDF confirmed open and read this sweep; parameter/diet values live in Appendix Tables A1–A4 (per the paper's methods); monitoring databases openly downloadable from Nordicana D; Moisan 2025 deposits on Dryad + Zenodo named in the article. Appendix tables not yet extracted.
- **Raw size:** 19 functional groups · **Aggregation plan:** usable essentially raw — 19 groups is already inside the 15–25 gate (plants split mosses/graminoids/shrubs/forbs; herbivores incl. snow goose, brown & collared lemmings; predators incl. Arctic fox, weasel, snowy owl, jaegers, glaucous gull)
- **Data type:** weighted (mass-balance flows; empirical + allometric parameters, sensitivity-checked by Monte Carlo) · **Provenance:** empirical
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 2 = **14**
- **Tier:** 1 · **Notes:** Best-shaped candidate of the sweep — the source's own functional groups are salmon-rule-ready, and the web is *weighted*. Cascade hooks: the lemming cycle as a literal three-state web (peak/crash variants of the same network — a "time-travel" feature); predators consume 20–100% of annual herbivore production while herbivores eat <10% of plant production (pure top-down story); greater snow goose overabundance as a real-world management narrative. Caveat for Stage 2: some links literature-derived (lemming diet) — flag in aggregation statements; moss-dominated producer base (90% of biomass) is an unusual but honest basal layer.

### Zackenberg terrestrial web, NE Greenland — `zackenberg-arctic-web`
- **Biome / Region:** High Arctic tundra · Greenland · **Lat/Lng (approx):** 74.5, −21.0
- **Source:** Wirta, H.K., Hebert, P.D.N., Kaartinen, R., et al. (2015). Exposing the structure of an Arctic food web. *Ecology and Evolution* 5(21). doi:10.1002/ece3.1647 (open, PMC4567885). DNA-verified reconstruction of **207 trophic links**: 8 bird, 10 spider and 33 lepidopteran-parasitoid taxa vs 29+ dipteran and 11+ lepidopteran prey; full link list in **Table S1 ("Matrix of trophic interactions")**. Same-station companions for adjacent layers: Wirta et al. 2014 (parasitoids), Roslin et al. 2013 (herbivore–plant links), Rasmussen et al. 2013 (pollinators — out of product surface).
- **Data access:** ASSUMED (strong) — Dryad deposit **confirmed live via API this sweep** (doi:10.5061/dryad.cv8cr, "Data from: Exposing the structure of an Arctic food web"); Table S1 attached to the open-access article.
- **Raw size:** ~90 taxa / 207 links in Table S1 · **Aggregation plan:** → ~18–22 nodes (dipteran families/guilds + lepidopterans as herbivore layer; spiders, insectivorous birds, parasitoids as predator layers; add plant base from Roslin et al. 2013 same-site data)
- **Data type:** qualitative (binary molecular detections) · **Provenance:** empirical — but assembling the full plant→herbivore→predator stack requires stitching same-station papers: Stage 2 must decide whether this stays `empirical` (one station, one program) or needs composite labeling.
- **Scores:** data 3 · story 2 · geography 3 · cost 2 · recognition 2 = **12**
- **Tier:** 1 · **Notes:** The most rigorously resolved terrestrial Arctic web that exists — every link DNA-verified from droppings/guts/hosts. Story is the hidden engine of tundra: flies and moths, not lemmings, as the mid-web hub; Zackenberg is also the flagship monitoring station for "the fastest-warming place on Earth." Caveats: no muskox/fox in the measured matrix (the iconic vertebrates sit outside Table S1 — adding them from Zackenberg BioBasis monitoring data is possible but composite territory); dense invertebrate web aggregates well by guild but loses species-level charm.

### Bear Island (Bjørnøya), Svalbard, Norway — `bear-island-bjornoya`
- **Biome / Region:** High Arctic island tundra · Europe (Svalbard) · **Lat/Lng (approx):** 74.4, 19.0
- **Source:** Summerhayes, V.S. & Elton, C.S. (1923). Contributions to the ecology of Spitsbergen and Bear Island. *Journal of Ecology* 11: 214–286. doi:10.2307/2255864 (JSTOR). — **the first food web ever published in ecology**, drawn as a "nitrogen cycle" with 47 nodes. Revision: Hodkinson, I.D. & Coulson, S.J. (2004). Are high Arctic terrestrial food chains really that simple? – The Bear Island food web revisited. *Oikos* 106: 427–431. doi:10.1111/j.0030-1299.2004.13091.x (31 terrestrial invertebrate nodes + 7 vertebrate nodes, from 12 years of Spitsbergen fieldwork).
- **Data access:** ASSUMED — both papers published and indexed (JSTOR / Wiley); the webs are presented as figures + text, not a machine-readable matrix; node/link lists must be transcribed from the figures. No digital deposit exists (pre- and early-digital era).
- **Raw size:** 38 nodes (2004 revision) / 47 mixed nodes (1923, includes inorganic nitrogen pools) · **Aggregation plan:** → ~18–22 nodes, keeping the 2004 guild structure (springtails/mites diptera guilds, seabird-subsidized fertilization loop, arctic fox apex)
- **Data type:** qualitative · **Provenance:** empirical (observational; historic + revision pair)
- **Scores:** data 2 · story 3 · geography 3 · cost 3 · recognition 2 = **13**
- **Tier:** 1 · **Notes:** The story writes itself: Elton's 1923 Bear Island web is *the* origin of the food-web concept — a museum piece that is also a living, monitored island ecosystem; the 2004 revision showing the "simple Arctic web" was an illusion is a built-in two-layer narrative (1923 vs 2004 views of the same island). Fills Europe + Svalbard. Caveats: figure transcription needed; mixed-node 1923 original must follow the 2004 revision for the build; the seabird-guano subsidy loop is the web's best feature — keep it visible in curation.

### Kluane boreal forest, Yukon, Canada — `kluane-boreal-forest`
- **Biome / Region:** Boreal forest · North America · **Lat/Lng (approx):** 61.0, −138.4
- **Source:** Krebs, C.J., Boonstra, R., Boutin, S., Sinclair, A.R.E. (eds) (2001). *Ecosystem Dynamics of the Boreal Forest: The Kluane Project.* Oxford University Press — vertebrate food web in ch. 2.4; **trophic mass-flow models in ch. 19 (Ruesink & Hodges)**. Review with published web figure: Krebs, C.J. et al. (2018). Using experimentation to understand the 10-year snowshoe hare cycle in the boreal forest of North America. *Journal of Animal Ecology*. doi:10.1111/1365-2656.12720 (Figure 6: herbivore + carnivore web of major species). EcoBASE lists a mass-balance entry: "Ruesink, J.L., 1988–1989, Shakwak Trench, Kluane Boreal Forest Ecosystem Project."
- **Data access:** ASSUMED (moderate friction) — book is paywalled (chapter PDFs circulate via UBC/Toronto repositories: conclusions chapter confirmed open); the ch. 19 mass-flow parameters and the EcoBASE entry not yet obtained. 40+ years of monitoring continues; review paper read in full this sweep.
- **Raw size:** ~15–20 vertebrate groups in the mass-flow models · **Aggregation plan:** → ~15–20 nodes nearly raw (spruce/willow/birch base; hare, squirrels, voles/mice, grouse; lynx, coyote, great horned owl, goshawk, marten, bears)
- **Data type:** mixed (quantified kill rates + mass-flow model; web figure qualitative) · **Provenance:** empirical
- **Scores:** data 2 · story 3 · geography 3 · cost 2 · recognition 3 = **13**
- **Tier:** 1 · **Notes:** THE textbook boreal web and the world's most famous vertebrate cycle: 95% of snowshoe hares die from predation; hare removal would collapse the boreal vertebrate community (the project's own conclusion). Predator-exclusion + fertilization experiments at 1-km² scale are a real perturbation story matching the simulator's removal mechanic. Fills boreal forest (empty). Caveats: machine-readable matrix not confirmed — worst case is careful transcription from ch. 19 tables / EcoBASE; forest plant layer (cones, berries, browse) is quantified more loosely than the animal layer.

---

## Tier 2 — backlog

### Varanger Peninsula tundra (COAT), Norway — `varanger-peninsula-coat`
- **Biome / Region:** Sub-Arctic/low-Arctic tundra · Europe (Finnmark) · **Lat/Lng (approx):** 70.35, 30.0
- **Source:** COAT (Climate-Ecological Observatory for Arctic Tundra) program, UiT/NINA — food-web module structure published in program literature (Ims, Yoccoz, Killengreen, Ehrich et al.); web structure: Norwegian lemming + grey-sided/tundra voles → stoat, least weasel, Arctic fox, rough-legged buzzard, snowy owl, long-tailed skua; red fox expansion and collapsing rodent cycles as the climate-change narrative.
- **Data access:** ASSUMED (weak) — monitoring is long-running and web-structured, but **no published whole-web link matrix located this sweep**; COAT data portal access terms not yet checked.
- **Raw size:** ~15–25 functional nodes across modules · **Aggregation plan:** → ~18 nodes if a matrix can be assembled from module publications
- **Data type:** qualitative to semi-quantitative · **Provenance:** empirical (if assembled from program data) — composite risk high
- **Scores:** data 2 · story 3 · geography 3 · cost 2 · recognition 1 = **11**
- **Tier:** 2 · **Notes:** The best *story* in European tundra (lemming cycles fading under warming; red fox displacing Arctic fox), but behind Bylot/Bear Island on data access. Revisit when a COAT synthesis matrix or thesis appendix surfaces.

### Barrow (Utqiaġvik) coastal tundra, Alaska — `barrow-ibp-tundra`
- **Biome / Region:** High Arctic coastal tundra · North America (Alaska North Slope) · **Lat/Lng (approx):** 71.3, −156.8
- **Source:** Brown, J., Miller, P.C., Tieszen, L.L., Bunnell, F.L. (eds) (1980). *An Arctic Ecosystem: The Coastal Tundra at Barrow, Alaska.* US/IBP Synthesis Series 12, Dowden, Hutchinson & Ross — trophic-system chapters by Batzli and colleagues quantify the brown-lemming-centered energy-flow web; lemming cycles documented 1946–1974 (Pitelka, Batzli, MacLean).
- **Data access:** ASSUMED (moderate) — book scan circulates online (academia.edu mirror seen this sweep); matrices embedded in book figures/tables, not machine-readable.
- **Raw size:** tens of compartments across IBP system models · **Aggregation plan:** → ~18–22 nodes (sedges/mosses base; brown & collared lemmings; jaegers, snowy owl, short-eared owl, weasel, Arctic fox)
- **Data type:** weighted (IBP energy budgets) · **Provenance:** empirical
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 2 = **11**
- **Tier:** 2 · **Notes:** The classic IBP tundra energy web — historically important, but Bylot covers the same lemming-cycle story with modern open data and better provenance. Keep as backup if Bylot verification fails.

### Svalbard archipelago metaweb — `svalbard-metaweb`
- **Biome / Region:** High Arctic (archipelago-wide) · Europe (Svalbard) · **Lat/Lng (approx):** 78.2, 15.6
- **Source:** Zhemchuzhnikov, M.K. et al. (2026). Assessing the ecological network of Svalbard through interaction strengths. *Ecology and Evolution* (open access, PMC13107267). Semi-quantitative **weighted multilayer metaweb** from a Scopus literature survey (704 vertebrate + 239 invertebrate papers screened); interaction layers: predation, scavenging, kleptoparasitism, herbivory, pollination; summer network, with marine–terrestrial crossover links.
- **Data access:** ASSUMED (strong) — article open access; network presented in figures (Figs. 3–5); supplementary appendices S1–S5 referenced.
- **Raw size:** tens of nodes across 5 layers · **Aggregation plan:** → ~20 nodes from terrestrial + crossover layers only — **but** literature-survey links include extrapolated interactions (marked transparent in the paper)
- **Data type:** weighted (scaled interaction strength, semi-quantitative) · **Provenance:** composite (literature synthesis; some links extrapolated)
- **Scores:** data 2 · story 2 · geography 3 · cost 1 · recognition 2 = **10**
- **Tier:** 2 (high-curation-risk) · **Notes:** Modern weighted Arctic web with the best polar bear / reindeer / Arctic fox crossover story — but it is a composite metaweb with extrapolated links, pollination and kleptoparasitism layers outside the product surface, and regional (not site) scale. Behind Bear Island for Svalbard; consider only if a `composite` build of Svalbard is wanted later.

---

## Appendix — recorded, not planned

### Pan-Canadian Arctic 17-site trophic models — `krebs-canadian-arctic-17-sites`
- **Source:** Krebs et al. 2003 (cited in Legagneux et al. 2012): trophic interactions quantified at 17 sites scattered across the Canadian Arctic, single year of data.
- **Tier:** appendix · **Notes:** Same mass-balance approach as Bylot but one-shot and 17-site; no matrix located this sweep. Recorded as provenance context for `bylot-island-tundra`; not a standalone candidate.

### Kevo / Utsjoki mountain-birch moth system, northern Finland — `kevo-mountain-birch`
- **Source:** mountain birch – autumnal moth (*Epirrita autumnata*) – ~15 hymenopteran parasitoid species tritrophic system (Tenow 1972; Ruohomäki et al. 2000; Klemola et al. 2002 and successors).
- **Tier:** appendix · **Notes:** Real published interactions and a dramatic defoliation-cycle story, but host–parasitoid networks are explicitly out of the product surface (ECOSYSTEMS.md §2/§10) and no whole-community web matrix exists. Recorded for completeness.

**Rejected in sweep:**
- *All 8 Mangal "arctic" datasets* — marine benthos or Alaskan stream webs; aquatic, out of target (and freshwater already saturated at 3 webs).
- *Icelandic marine Ecopath model (arXiv 1810.00613)* — marine; out of target.
- *Svalbard high-Arctic stream webs (Polar Biol. 2025, doi:10.1007/s00300-025-03424-3)* — freshwater; out of target and biome-saturated.
- *Nenetski Zapovednik / Ostrov Dolgi and Wrangel Island (Russia)* — ArcticWOLVES field-site catalog gives community descriptions but no published link matrix; route closed for now.
- *Manlick et al. 2024 (Nat. Clim. Change) high-latitude diet shifts* — stable-isotope study of diet change, no resolved link matrix; also the famous Toolik Field Station program is lake/stream-centered (aquatic).
- *Pollination layers (Rasmussen et al. 2013, Zackenberg; Gillespie et al., Svalbard)* — mutualistic networks out of product surface.
