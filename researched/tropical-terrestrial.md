# Region: Tropical terrestrial (global biome sweep)
**Researched:** 2026-10 · **Status:** complete (Stage 1 — awaiting verification)

**Repo context at sweep time:** 9 webs live; zero tropical terrestrial webs. Biome saturation: freshwater 3 (saturated), marine 2, grassland 2, estuary 1, wetland 1, tropical terrestrial 0. This is ECOSYSTEMS.md §9 gap #1 ("thinnest published-web coverage; likely composite-only"). The sweep found that prediction half-wrong: two genuine build-ready candidates exist — the classic El Verde book web and a modern weighted guild web from Sumatra — though both carry accessibility or provenance caveats that Stage 2 must resolve.

**Sweep log:**
- **Web of Life** (web-of-life.es): food-web collection page (type=7) reached; listed entries confirmed (FW_001 Angelini & Agostinho 2005 Upper Paraná — already in ledger as `upper-parana-floodplain`; FW_002/FW_003 Angelini et al.). No tropical terrestrial entry surfaced; the JS map/API was not pulled programmatically this sweep (limitation recorded for Stage 2).
- **Netzschleuder** (networks.skewed.de): "food web" catalog scanned; direct probe of a guessed `foodweb_elverde` slug returned not-found. **No tropical terrestrial web confirmed in the catalog** (Coachella-style classics absent as well, consistent with the desert sweep).
- **GloBI** (globalbioticinteractions.org): sources page inspected — indexes the Gripenberg et al. 2019 BCI seed-predator web (see Tier 2) and many interaction datasets, but no whole-community tropical terrestrial web.
- **Mangal** (mangal.io): queried "tropical forest food web"; surfaced only generic client examples (Johnston 1956 salt marsh). **No tropical terrestrial dataset found.**
- **Ecopath publications**: query "Ecopath model tropical forest terrestrial ecosystem diet matrix" — **no terrestrial Ecopath model exists**; the corpus is aquatic/fisheries. Structural gap logged (same finding as the desert sweep).
- **figshare / Zenodo / Dryad**: chased via paper data-availability statements — confirmed deposits for Potapov et al. 2024 (figshare 10.6084/m9.figshare.24648438), Gripenberg et al. 2019 (Dryad 10.5061/dryad.230j5ch + GitHub jcdterry/BCI_Seed_Predator), Zimmerman 2023 (EDI). No standalone tropical terrestrial matrix deposits beyond these.
- **Primary literature** (queries logged verbatim): "tropical rainforest food web dataset published quantitative El Verde Luquillo Reagan Waide", "tropical forest food web matrix supplementary data links species", "Barro Colorado Island food web trophic network published", "La Selva Costa Rica food web trophic quantitative", "Madagascar rainforest food web published trophic network matrix", "tropical dry forest food web Chamela Mexico trophic", "soil food web tropical rainforest quantitative published nematode", "Amazon forest degradation trophic functioning camera trap metaweb". Open full/partial texts read: Potapov et al. 2024 (PMC10917685, open), Gripenberg et al. 2019 (PMC6852488, open), Bled et al. 2024 TEAM mammal webs (PMC10960815, open), Saito et al. 2024 (Wiley abstract + author blog), Antunes et al. 2026 (bioRxiv full text), Reagan & Waide 1996 front matter (U Chicago Press page, CABI abstract).

---

## Tier 1 — build next

### El Verde rain forest, Luquillo Experimental Forest, Puerto Rico — `el-verde-rainforest`
- **Biome / Region:** Tropical rainforest · Caribbean / North America · **Lat/Lng (approx):** 18.3, −65.8
- **Source:** Reagan, D.P. & Waide, R.B. (eds) (1996). *The Food Web of a Tropical Rain Forest.* University of Chicago Press, 616 pp. Community matrix in ch. 14 (Reagan, Camilo & Waide): 156 compartments spanning microorganisms, termites, litter and arboreal invertebrates, arachnids, amphibians (eleutherodactylid frogs), anoline lizards, reptiles, birds, mammals. Re-analyzed across network science (Dunne et al. 2002 PNAS; Solé & Montoya robustness studies; Johnson & Borgatti role analysis).
- **Data access:** ASSUMED — the 156-compartment matrix has circulated in machine-readable form for decades through the Dunne/Williams–Martinez food-web collections (and the defunct NCEAS Interaction Web DB); CABI's abstract states "the complete food web matrix used in" the volume is documented. A concrete surviving URL was NOT located this sweep — Stage 2 must obtain the matrix file (leads: Dunne lab archives, Williams & Martinez compilations, GloBI re-check) before any curation.
- **Raw size:** 156 compartments / thousands of links (compartments pre-aggregated; some single species, some 400+ species) · **Aggregation plan:** → ~20–25 nodes by collapsing compartments along the book's own functional chapters (plants/detritus → herbivorous insects → spiders/centipedes → frogs → anoles → snakes/birds → raptors)
- **Data type:** qualitative (binary) · **Provenance:** empirical (direct observation + literature; some links inferred — note in aggregation statements)
- **Scores:** data 2 · story 3 · geography 3 · cost 2 · recognition 3 = **13**
- **Tier:** 1 · **Notes:** THE canonical tropical rainforest web and the obvious flagship for this biome. Cascade hooks: anole–spider–insect chains, coquí frogs as mid-level hubs, hurricane disturbance (Hugo 1989 / Maria 2017) as a real-world "node shock" storyline. Caveats for Stage 2: matrix provenance per-link (observed vs inferred) needs the book's chapter 14 detail; accessibility is assumed, not verified — treat as the sweep's top verification target.

### Sumatra lowland rainforest, Jambi (Bukit Duabelas & Harapan), Indonesia — `sumatra-rainforest-energy-web`
- **Biome / Region:** Tropical lowland rainforest · SE Asia · **Lat/Lng (approx):** −1.9, 103.3
- **Source:** Potapov, A.M. et al. (2024). Rainforest transformation reallocates energy from green to brown food webs. *Nature* 627:116–122. doi:10.1038/s41586-024-07083-y (open access, PMC10917685). EFForTS project; 62 trophic guilds across canopy arthropods, birds, soil arthropods, earthworms; weighted energy fluxes (mW m⁻²); rainforest system measured at 8 sites, validated by an independent re-survey 4 years later.
- **Data access:** ASSUMED (strong) — raw data + reconstruction code deposited on figshare (doi:10.6084/m9.figshare.24648438) per the paper's data-availability statement; supplementary xlsx tables included. Deposit not yet opened/downloaded.
- **Raw size:** 62 consumer guilds + 5 basal resources (living plants, litter, fungi, bacteria, soil organic matter) · **Aggregation plan:** → ~20–24 nodes using the paper's own structure (5 basal + canopy arthropod guilds + bird guilds + soil arthropod guilds + earthworms); guild definitions are already the salmon-rule-friendly aggregation level
- **Data type:** weighted (energy fluxes; fluxes estimated from empirical biomass + trait-based topology) · **Provenance:** empirical biomasses, **partly model-inferred link topology** — Stage 2 must check this against the honesty rules (cf. `balbina-forest-islands` rejection for model-inferred links; here fluxes are computed, so provenance is stronger, but the web may need explicit labeling of reconstructed links)
- **Scores:** data 3 · story 2 · geography 3 · cost 3 · recognition 2 = **13**
- **Tier:** 1 · **Notes:** The only modern *weighted* tropical terrestrial web found. Story: >90% of rainforest animal energy runs through arthropods, and the belowground "brown" web dominates — remove soil arthropods and the forest's engine stalls; the oil-palm transformation contrast is a built-in before/after narrative. Fills SE Asia (empty). Caveat: no iconic vertebrates (birds only aboveground); cascade drama is guild-level.

---

## Tier 2 — backlog

### Barro Colorado Island seed-predator web, Panama — `bci-seed-predators`
- **Biome / Region:** Tropical semi-deciduous forest · Central America · **Lat/Lng (approx):** 9.15, −79.85
- **Source:** Gripenberg, S. et al. (2019). A highly resolved food web for insect seed predators in a species-rich tropical forest. *Ecology Letters* 22:1638–1649. doi:10.1111/ele.13359 (open, PMC6852488). 478 woody plant species × 369 insect seed-predator species from >200,000 fruits; quantitative (seeds killed).
- **Data access:** ASSUMED (strong) — Dryad deposit doi:10.5061/dryad.230j5ch named in the paper; analysis code at github.com/jcdterry/BCI_Seed_Predator; indexed by GloBI. Deposit not yet opened.
- **Raw size:** 847 species · **Aggregation plan:** → ~20 nodes (plant families/orders as basal guilds + beetle/moth seed-predator families) — **but 80% of insects are monophagous**, so aggregation dissolves the web's defining structure
- **Data type:** weighted (quantitative frequencies) · **Provenance:** empirical
- **Scores:** data 3 · story 2 · geography 3 · cost 1 · recognition 2 = **11**
- **Tier:** 2 · **Notes:** Spectacular data, wrong shape: bipartite plant→herbivore web with essentially two trophic levels, so the cascade simulator has almost nothing to cascade. Janzen–Connell is a great sidebar story but not a removal-experiment story. Revisit only if a predator/parasitoid layer can be honestly attached from the same site.

### TEAM pan-tropical forest mammal webs (15 sites) — `team-tropical-mammal-webs`
- **Biome / Region:** Tropical forest (pan-tropical: Neo-/Afro-/Asian tropics + Madagascar) · **Lat/Lng (approx):** site-dependent (e.g., Yasuní −0.6, −76.4)
- **Source:** Bled, F. et al. (2024). Geographic differences in body size distributions underlie food web connectance of tropical forest mammals. *Scientific Reports* 14. doi:10.1038/s41598-024-57500-5 (open, PMC10960815). Mammal communities (21–35 spp.) from TEAM camera traps; predator–prey links from a literature meta-web.
- **Data access:** ASSUMED — "all data generated or analyzed are included in the article and its supplementary information files" per the data-availability statement; site webs shown in Fig. S1.
- **Raw size:** 21–35 mammal species per site (no producers, no non-mammal prey resolved) · **Aggregation plan:** → ~15–20 nodes for one site; basal "plants" and "non-mammal prey" nodes would have to be added from outside sources → composite risk
- **Data type:** qualitative (binary) · **Provenance:** composite/model-inferred (meta-web subsampled to site composition; second meta-web adds genus- and size-inferred links)
- **Scores:** data 1 · story 2 · geography 3 · cost 2 · recognition 2 = **10**
- **Tier:** 2 (high-curation-risk) · **Notes:** Jaguars, pumas, bush dogs — charismatic cast, but the web is mammals-eating-mammals over an assumed base, with literature-inferred links. Same provenance family as the rejected `balbina-forest-islands` candidate; promote only if verification judges "literature meta-web" distinct enough from "model-inferred."

### El Yunque experimental understory food web, Luquillo, Puerto Rico — `el-yunque-understory-web`
- **Biome / Region:** Tropical rainforest understory (experimental) · Caribbean · **Lat/Lng (approx):** 18.3, −65.8
- **Source:** Zimmerman, J. (2023). Experimental Understory Food Web data in the El Verde area of the Luquillo Experimental Forest. Environmental Data Initiative, dataset 1621004 (via LTER/Luquillo program).
- **Data access:** ASSUMED — EDI deposits are open by policy; dataset not yet inspected (structure, taxonomic resolution, and link data unknown).
- **Raw size:** unknown (understory arthropods across experimental plots) · **Aggregation plan:** unknown — pending dataset inspection
- **Data type:** unknown (likely qualitative or abundance-based) · **Provenance:** empirical
- **Scores:** data 2 · story 2 · geography 2 · cost 2 · recognition 1 = **9**
- **Tier:** 2 · **Notes:** Modern complement to the 1996 El Verde web (same forest, hurricane-manipulation context). If the matrix is clean, it could pair with `el-verde-rainforest` as a "then vs now" story; alone it's too small a stage. Low priority behind the Tier 1 pair.

---

## Appendix — recorded, not planned

### Atlantic rainforest stream meta-food webs, Brazil — `atlantic-rainforest-streams`
- **Source:** Saito, V.S. et al. (2024). Untangling the complex food webs of tropical rainforest streams. *Journal of Animal Ecology*. doi:10.1111/1365-2656.14121. Stable meta-web of 61 components / 307 links with energy-proportional link weights; 5 local webs in Atlantic Forest streams.
- **Scores:** data 3 · story 2 · geography 3 · cost 2 · recognition 1 = **11** — **but fails the biome-saturation hard gate**: the repo maps streams to freshwater, which already holds 3 webs (Little Rock, Tapajós, Tuesday Lake).
- **Tier:** appendix · **Notes:** Genuinely good weighted tropical data, blocked only by bookkeeping. Revisit if the repo ever splits "tropical stream" from "freshwater lake/river" as a category, or once other biomes catch up.

### Amazonian vertebrate metaweb (camera traps + fluxweb) — `amazon-vertebrate-metaweb`
- **Source:** Antunes, A.C. et al. (2026). Forest degradation reshapes trophic functioning in vertebrate food webs across Amazonian forests. bioRxiv preprint, posted 2026-07. Curated metaweb of 2,234 potential links among 107 mammal/bird species; 85 cluster-level local webs; EltonTraits diets + SCFN-model-predicted links (manually validated).
- **Tier:** appendix (preprint; model-inferred links) · **Notes:** Charismatic, pan-Amazon, and flux-weighted — but links are model-predicted (SCFN) even if expert-curated, and the work is a preprint. Watch for journal publication; reassess provenance then.

**Rejected in sweep:**
- *ATFW (Hale et al. 2024, Phil. Trans. R. Soc. B)* — 580,000 links / 3,800 species, but the site is the temperate University of Michigan Biological Station. Not tropical; also far beyond the 25-node ceiling. Out of scope.
- *Chamela gall-insect/parasitoid webs (Mexican tropical dry forest)* — host–parasitoid networks are explicitly out of the product surface (ECOSYSTEMS.md §2/§10).
- *Nematode energy-flow micro-webs (forest-to-plantation studies, subtropical China)* — guild-level soil microfauna webs with no aboveground stage; subtropical, not core tropical forest; no cascade story.
- *Terrestrial Ecopath models* — do not exist; route closed (logged under Ecopath in sweep log).
