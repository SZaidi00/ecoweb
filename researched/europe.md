# Region: Europe — multi-biome sweep (temperate Europe + shelf seas)
**Researched:** 2026-10 · **Status:** complete (Stage 1 — awaiting verification)

**Repo context at sweep time:** 9 webs live. Biome saturation: freshwater 3 (saturated), marine 2, grassland 2, estuary 1, wetland 1. **Zero European webs on the map** — every pin sits in the Americas, Africa, or Antarctica. ECOSYSTEMS.md §8 already names Ythan Estuary (Tier 1 lead) and Skipwith Pond (Tier 2 lead); this sweep tests those leads and widens the search across European biomes. Scope note: European **tundra/boreal** was already covered by the tundra-boreal sweep (which logged two European candidates — `bear-island-bjornoya`, `varanger-peninsula-coat`); those rows are not duplicated here.

**Sweep log:**
- **Primary literature / citation indexes** (queries logged verbatim): "Ythan Estuary food web Hall Raffaelli 1991 trophic links matrix" → Hall & Raffaelli 1991 (*J. Anim. Ecol.* 60: 823–841) confirmed, web statistics independently corroborated by citing network papers (v1: 83 taxa / 395 links; v2: 174 taxa / 579 links); "Skipwith Pond food web Warren 1989" → Warren 1989 (*Oikos* 55: 299–311) confirmed (~25 taxa as published, 35 trophic species in later re-analyses); "Broadstone Stream food web Woodward Hildrew" → Hildrew et al. 1985 + Woodward & Hildrew 2001 confirmed (24–34 taxa; pre/post-invasion webs; six seasonal connectance webs circulate in the R `dynsbm` package); "Loch Leven Scotland food web parasites trophic links" → Huxham, Raffaelli & Pike 1995 confirmed (Loch Leven lake web expanded with metazoan endoparasites).
- **Ecopath publications** (queries logged verbatim): "North Sea Ecopath model food web diet matrix published" → 0 useful hits; "Baltic Sea food web Ecopath model diet composition" → open-access Ambio review of Baltic EwE food-web assessments (doi:10.1007/s13280-021-01692-x) + ICES CM 2010 Baltic cod–sprat–herring model confirmed; "Irish Sea Celtic Sea Ecopath model food web" → Celtic Sea EwE confirmed (Moullec et al. 2017; Bentley et al. 2020, *Front. Mar. Sci.* 7:578717, open access, 50 functional groups, EcoDiet-estimated diet matrix in supplementary appendices) + Irish Sea EwE thesis (UHI repository, matrix access unchecked); "Wadden Sea food web Ecopath model diet matrix" → 0 useful hits.
- **Primary literature, terrestrial** (queries logged verbatim): "Silwood Park grassland food web Martinez Hawkins Dawah 1999 source web" → UK grassland web (61 taxa / 97 links; Martinez et al. 1999) confirmed via citing network papers; "Scotch broom food web Hawkins 1997 insect herbivores parasitoids" → Memmott, Martinez & Cohen 2000 (*J. Anim. Ecol.*; 154 taxa / 370 links; full link list in Appendix I; open PDF located on the Rockefeller Cohen-lab site) confirmed; "Doñana marsh Guadalquivir food web Spain trophic network" → 0 useful hits.
- **Primary literature, marine** (query logged verbatim): "Lough Hyne Ireland marine food web trophic" → Lough Hyne confirmed as a highly resolved temperate marine web circulating in the GATEWAy database (used in Eskuche-Keith et al. 2023, *Front. Mar. Sci.* 9:1046150).
- **Netzschleuder** (networks.skewed.de): catalog probed via secondary citations — Ythan Estuary and the other classic UK webs are known to be hosted there (ECOSYSTEMS.md §8); entry pages not individually opened this sweep.
- **Web of Life** (web-of-life.es) / **GloBI** / **Mangal**: not queried directly this sweep; European entries cross-checked through citing literature instead. Recorded as a limitation for Stage 2.

---

## Tier 1 — build next

### Ythan Estuary, Aberdeenshire, Scotland — `ythan-estuary`
- **Biome / Region:** Estuary/coastal · Europe (Scotland) · **Lat/Lng (approx):** 57.35, −1.98
- **Source:** Hall, S.J. & Raffaelli, D. (1991). Food-web patterns: lessons from a species-rich web. *Journal of Animal Ecology* 60: 823–841. doi:10.2307/5419. Extensions: Raffaelli & Hall (1992, compartments analysis, *J. Anim. Ecol.*); Huxham, Raffaelli & Pike (1995, parasite-augmented version). Machine-readable copy downloadable via Netzschleuder per ECOSYSTEMS.md §8.
- **Data access:** ASSUMED (strong) — matrix circulates in open network repositories and its published statistics were re-verified this sweep through multiple citing papers; file itself not yet downloaded.
- **Raw size:** 83 taxa / 395 links (v1; v2: 174 taxa / 579 links) · **Aggregation plan:** → ~18–22 nodes (aggregate the ~40 small invertebrate taxa to sourced guilds — mudsnails *Hydrobia*, amphipods *Corophium*, polychaetes, shore crabs — while keeping flatfish, gobies, eels, waders, wildfowl and terns at species or small-group level; Raffaelli & Hall 1992 provide a published compartment aggregation as precedent)
- **Data type:** qualitative · **Provenance:** empirical
- **Scores:** data 2 · story 3 · geography 3 · cost 2 · recognition 2 = **12**
- **Tier:** 1 · **Notes:** The estuarine classic and Europe's most-cited food web — anchor of a generation of food-web theory. Story hooks: eutrophication-driven green algal mats smothering the mudflats; wader/tern declines; fish–bird–invertebrate coupling across the tidal cycle. Fills Europe and brings the estuary biome to 2 webs. Caveats: qualitative only (dashed edges); keep the bird nodes prominent — they carry the web's charisma and the removal-cascade story.

### Celtic Sea shelf ecosystem (Ecopath), NE Atlantic — `celtic-sea-shelf`
- **Biome / Region:** Marine shelf sea · Europe (UK/Ireland/France SW approaches) · **Lat/Lng (approx):** 50.0, −7.0
- **Source:** Bentley, J.W. et al. (2020). The Celtic Sea Through Time and Space: Ecosystem Modeling to Unravel Fishing and Climate Change Impacts on Food-Web Structure and Dynamics. *Frontiers in Marine Science* 7: 578717. doi:10.3389/fmars.2020.578717 (open access; supplementary appendices include the diet matrix estimated with the Bayesian EcoDiet model from EATME stomach-content and biotracer data). Underlying Ecopath models: Moullec et al. (2017).
- **Data access:** ASSUMED (strong) — Frontiers article and supplements confirmed open; diet matrix lives in the supplementary appendices; not yet extracted.
- **Raw size:** 50 single- and multispecies functional groups · **Aggregation plan:** → ~22–25 nodes (merge the five benthic-invertebrate groups to 2–3, four zooplankton groups to 2, keep commercial fish guilds and the mammal/seabird groups distinct)
- **Data type:** weighted (Bayesian-estimated diet proportions) · **Provenance:** empirical (model synthesis with directly measured diet data — document the EcoDiet estimation step in aggregation statements)
- **Scores:** data 3 · story 2 · geography 3 · cost 2 · recognition 2 = **12**
- **Tier:** 1 · **Notes:** The only weighted European shelf web located this sweep. Story: fishing, not climate, was the dominant restructuring force 1985–2016; hake / blue whiting / boarfish pathways through the central Celtic Sea. Bonus: six 5-year Ecopath snapshots (1985–2016) would allow a "then vs now" time slider. Caveat: diets are model-estimated (EcoDiet) — badge stays `empirical` but the estimation must be disclosed per the honesty rules.

### Baltic Sea (Ecopath), Northern Europe — `baltic-sea-ecopath`
- **Biome / Region:** Marine brackish sea · Europe · **Lat/Lng (approx):** 58.5, 19.8
- **Source:** Multiple published Baltic Ecopath models synthesized in the open-access review: Tomczak, M.T. et al. (2022). Food web assessments in the Baltic Sea. *Ambio*. doi:10.1007/s13280-021-01692-x; cod–sprat–herring core additionally modeled in ICES CM 2010/L:03. Stage 2 must pin down ONE specific model with a documented diet-composition matrix (Baltic proper models are the obvious first check).
- **Data access:** ASSUMED — the review confirms Baltic EwE models take documented diet-composition inputs, but no single diet matrix was obtained this sweep. Highest verification risk of the Tier 1 set.
- **Raw size:** model-dependent (tens of functional groups) · **Aggregation plan:** → ~20 nodes built around the cod–sprat–herring–zooplankton core, with seals and seabirds as top layer
- **Data type:** weighted · **Provenance:** empirical
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 2 = **13**
- **Tier:** 1 · **Notes:** Europe's most famous fisheries cascade — the cod↔sprat predator–prey reversal after cod collapse, in a brackish sea where the whole web runs on a handful of species (a natural fit for the ≤25-node gate). Caveats: "Baltic Ecopath" is a crowded model soup — curation hinges on choosing one well-documented, citable model; if no matrix is obtainable, drop to Tier 2 and promote Celtic Sea as the sole European shelf build.

---

## Tier 2 — backlog

### Scotch broom community, Silwood Park, England — `scotch-broom-silwood`
- **Biome / Region:** Terrestrial (heath/grassland scrub) · Europe (England) · **Lat/Lng (approx):** 51.41, −0.64
- **Source:** Memmott, J., Martinez, N.D. & Cohen, J.E. (2000). Predators, parasitoids and pathogens: species richness, trophic generality and body sizes in a natural food web. *Journal of Animal Ecology* 69: 1–15. doi:10.1046/j.1365-2656.2000.00367.x — full taxon-and-prey list in Appendix I (open PDF located this sweep). Built on Waloff's 12-year study of the broom fauna at Silwood Park (Waloff 1968).
- **Data access:** ASSUMED (strong) — Appendix I link list confirmed to exist in the open PDF; not yet transcribed.
- **Raw size:** 154 taxa / 370 links (82 trophic species) · **Aggregation plan:** → ~18–22 nodes (herbivores aggregated by their six published feeding guilds — external feeders, miners, gallers, concealed, root feeders; parasitoids and predators aggregated by order/guild)
- **Data type:** qualitative · **Provenance:** empirical
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 1 = **10**
- **Tier:** 2 · **Notes:** The richest documented terrestrial web in Europe and a rare fully terrestrial candidate — valuable because the map skews aquatic. Caveats: parasitoid-heavy (66 of 154 taxa) — parasitoids sit at the edge of the product surface; a single-plant source web has a trivial top-down removal story (kill the plant, lose everything) so the cascade mechanic shines less here. Do NOT build together with `silwood-grassland` — same site, same research group.

### Silwood Park grassland web, England — `silwood-grassland`
- **Biome / Region:** Terrestrial grassland · Europe (England) · **Lat/Lng (approx):** 51.41, −0.64
- **Source:** Martinez, N.D., Hawkins, B.A., Dawah, H.A. & Feifarek, B.P. (1999). Effects of sampling effort on characterization of food-web structure. *Ecology* 80: 1044–1055 — the "Grassland" web of the network-literature canon (61 taxa / 97 links).
- **Data access:** ASSUMED — web widely re-published in network studies; original matrix location not yet confirmed.
- **Raw size:** 61 taxa / 97 links · **Aggregation plan:** → ~18–20 nodes by trophic guild
- **Data type:** qualitative · **Provenance:** empirical
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 1 = **10**
- **Tier:** 2 · **Notes:** Famous in network theory (it anchored the sampling-effort debate) but narratively flat for a general audience. Keep as backup to `scotch-broom-silwood`; building both would double-count Silwood Park.

### Lough Hyne marine lough, Co. Cork, Ireland — `lough-hyne`
- **Biome / Region:** Marine (tidal rapids lough) · Europe (Ireland) · **Lat/Lng (approx):** 51.50, −9.30
- **Source:** Lough Hyne food web as circulated in the GATEWAy database and used in Eskuche-Keith, P. et al. (2023). Trophic structuring of modularity alters energy flow through marine food webs. *Frontiers in Marine Science* 9: 1046150. doi:10.3389/fmars.2022.1046150 — one of only four highly resolved marine webs in that study (species/genus-level nodes; benthic, intertidal and pelagic compartments).
- **Data access:** ASSUMED — the web circulates in the GATEWAy database; original compilation citation and download route not yet confirmed (Stage 2 task).
- **Raw size:** tens of species-level nodes with five-module structure · **Aggregation plan:** → ~20 nodes (macrophyte module, filter-feeder module, benthic-consumer module, bentho-pelagic fishes, top predators)
- **Data type:** qualitative · **Provenance:** likely composite (compiled from direct observation + wider literature — needs checking against the original compilation)
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 1 = **10**
- **Tier:** 2 · **Notes:** Europe's only long-term marine reserve and a genuinely unusual system (tidal rapids, warm-water outliers). Behind the Tier 1 marine candidates on provenance clarity and recognition.

---

## Appendix — recorded, not planned

### Skipwith Pond, England — `skipwith-pond`
- **Source:** Warren, P.H. (1989). Spatial and temporal variation in the structure of a freshwater food web. *Oikos* 55: 299–311 (~25 taxa as published; 35 trophic species in later re-analyses).
- **Tier:** appendix (**hard-gate fail: biome saturation** — freshwater already at 3 webs: Little Rock, Tapajós, Tuesday) · **Notes:** Would score ~11 (nearly raw usable, charming ephemeral-pond story) and was a §8 Tier 2 lead before Tuesday Lake shipped. First in line if the freshwater cap lifts.

### Broadstone Stream, Ashdown Forest, England — `broadstone-stream`
- **Source:** Hildrew, Townsend & Hasham (1985); Woodward & Hildrew (2001, *J. Anim. Ecol.*, pre/post-invasion webs); six seasonal webs circulate in the R `dynsbm` package (Woodward et al. 2005).
- **Tier:** appendix (**hard-gate fail: biome saturation**) · **Notes:** Would score ~12 on merit — the documented invasion of the dragonfly *Cordulegaster boltonii* into a 25-year-studied invertebrate web is one of the best removal-cascade stories in Europe. Revisit when freshwater reopens.

### Loch Leven, Scotland — `loch-leven`
- **Source:** Huxham, M., Raffaelli, D. & Pike, A. (1995). Parasites and food web patterns. *J. Anim. Ecol.* — Loch Leven lake web expanded with metazoan endoparasites.
- **Tier:** appendix (**hard-gate fail: biome saturation**) · **Notes:** Historically important (one of the first parasite-augmented webs); freshwater cap applies.

### Irish Sea Ecopath model — `irish-sea-ecopath`
- **Source:** University of the Highlands and Islands PhD thesis (2020): an Irish Sea EwE model built at the science–policy interface (ICES WKIrish).
- **Tier:** appendix (access unclear) · **Notes:** Grey-literature route; diet matrix not located this sweep. The Celtic Sea model covers the NW European shelf with better documentation and open supplements.

**Rejected in sweep:**
- *Wadden Sea Ecopath* — query returned no accessible published diet matrix; route closed for now.
- *North Sea shelf Ecopath/ICES multispecies models* — no directly accessible diet matrix located; model ecosystem is large and institutionally maintained.
- *Doñana / Guadalquivir marsh webs (Spain)* — no resolved published food web located; Mediterranean wetlands remain an open gap.
- *Kongsfjorden marine web (Svalbard)* — Svalbard is already covered by the tundra-boreal sweep (`bear-island-bjornoya`, `svalbard-metaweb`); aquatic anyway.
- *Bylot, Zackenberg, Varanger and other Arctic/sub-Arctic European systems* — inside the tundra-boreal sweep's scope; not duplicated here.
