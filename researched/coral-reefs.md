# Region: Coral Reefs (global biome sweep)
**Researched:** 2026-10 · **Status:** complete (Stage 1 — awaiting verification)

**Repo context at sweep time:** 9 webs live; zero coral reef webs on the map. Biome saturation: freshwater 3 (saturated), marine 2 (both cold-water: Alaska, Antarctica), grassland 2, estuary 1, wetland 1. A reef web fills a whole-biome gap (ECOSYSTEMS.md §9 gap #2) and would be the first tropical marine entry. Asia and the Pacific islands are entirely empty regions.

**Sweep log:**
- **Web of Life** (web-of-life.es): list pages are JS-only; pulled the public JSON API directly (`get_networks.php` — 321 networks, 33 food-web entries; per-network datasheets via `map_networkdetails.php`). Reef hits: FW_008 (Caribbean reef, 249 spp / 3313 links, weighted, Bascompte et al. 2005 PNAS) and FW_017_01–06 (six weighted reef fish webs, Pozas-Schacre et al. 2021). FW_007 St. Marks = seagrass, not reef.
- **Netzschleuder** (networks.skewed.de): full catalog swept; 7 "Food web" tag entries — **zero reef entries** (St. Martin and St. Marks are NOT in the current catalog, despite older mirrors suggesting so).
- **Mangal** (mangal.io API v2): all ~175 datasets swept. Reef hits: `roopnarine_2013` (Cayman/Cuba/Jamaica, 265 guilds each, binary), `hiatt_1960` (Marshallese reefs — only a 14-node fragment), `niering_1963` (Kapingamarangi — terrestrial atoll ecology). `christian_1999` = St. Marks seagrass again.
- **GloBI**: Roopnarine & Hertog 2013 and Bascompte et al. 2005 are GloBI-indexed (`globalbioticinteractions/roopnarine` repo documents source-data quality fixes). No other reef web datasets indexed.
- **Ecopath publications**: queries "coral reef Ecopath model diet matrix", "Takapoto atoll Ecopath", "French Frigate Shoals Ecopath", "Uvea New Caledonia lagoon Ecopath", "Caribbean coral reef Ecopath Puerto Rico Cuba Banco Chinchorro", "Great Barrier Reef Ecopath", "Ecopath Red Sea / Maldives / Chagos reef", "Weijerman West Hawaii Ecopath", "Opitz 1996 ICLARM". EcoBase model registry checked directly. Full texts read: Polovina 1984, Bozec et al. 2004, Guénette & Hill 2009, Rodríguez-Zaragoza et al. 2016, Gribble 2005 (MODSIM), Zhang et al. 2022.
- **figshare / Zenodo / Dryad**: Dryad productive — Roopnarine & Hertog deposit `10.5061/dryad.c213h` (CC0, three 265×265 adjacency matrices + guild tables, file list confirmed via Dryad API); Cirtwill & Eklöf deposit `10.5061/dryad.1mv20r6` (CC0, contains the Opitz 1996 Caribbean reef matrix as `reef_spnames.csv`); Casey et al. 2019 deposit `10.5061/dryad.t7pd371` (Mo'orea metabarcoding OTU table). Zenodo `10.5281/zenodo.5341340` (Pozas-Schacre 2021 `foodweb_final.csv`, file list confirmed via Zenodo API) + GitHub `ChloePZS/foodweb`; GitHub `valerianoparravicini/Trophic_Fish_2020` (global gut-content database). figshare: **no** reef food-web matrix deposits found at all.
- **Primary literature**: as per Ecopath log above, plus Parravicini et al. 2020 (PLoS Biology gut-content synthesis) and Casey et al. 2019 (Methods Ecol Evol).

---

## Tier 1 — build next

### Xisha Islands (Paracel), South China Sea — `xisha-islands`
- **Biome / Region:** Coral reef · South China Sea · **Lat/Lng (approx):** 16.8, 112.3
- **Source:** Zhang, X. et al. (2022). Effects of ocean warming and fishing on the coral reef ecosystem: A case study of Xisha Islands, South China Sea. *Frontiers in Marine Science* 9. DOI: 10.3389/fmars.2022.1046106 (open access; full text read).
- **Data access:** ASSUMED — paper's data availability statement says everything is in the article/supplementary material; supplementary files not yet opened. Confirm at Stage 2.
- **Raw size:** 23 functional groups (algae, coral, seabirds, sharks, fish guilds) · **Aggregation plan:** near-raw use (~20–23 nodes)
- **Data type:** weighted (Ecopath diet fractions + Ecosim scenarios) · **Provenance:** empirical
- **Scores:** data 3 · story 3 · geography 3 · cost 3 · recognition 2 = **14**
- **Tier:** 1 · **Notes:** Best-scoring candidate. The warming × fishing scenario structure is a ready-made cascade narrative for a climate-stressed reef. Fills Asia — an entirely empty continent on the map. At 23 groups it lands inside the 15–25 gate with minimal curation.

### Uvea (Ouvéa) atoll lagoon, Loyalty Islands, New Caledonia — `uvea-atoll`
- **Biome / Region:** Coral reef atoll lagoon · SW Pacific · **Lat/Lng (approx):** −20.6, 166.6
- **Source:** Bozec, Y.-M., Gascuel, D., Kulbicki, M. (2004). Trophic model of lagoonal communities in a large open atoll (Uvea, Loyalty islands, New Caledonia). *Aquatic Living Resources* 17:151–162. Open PDF at halieutique.institut-agro.fr (verified reachable, HTTP 206 application/pdf); EcoBase-registered.
- **Data access:** ASSUMED (strong) — full text read; paper states the final diet matrix is in Appendix B of the document. Transcription from PDF needed.
- **Raw size:** 25 trophic groups (23 living + 2 detritus): sharks, pelagic/demersal piscivores, planktivores, herbivores, omnivores, cephalopods, 5 macrobenthos groups, meiofauna, zooplankton, corals, phytoplankton, macrophytes, microphytes · **Aggregation plan:** near-raw use (~23 nodes, drop or fold 1–2 detritus/meiofauna boxes)
- **Data type:** weighted (Ecopath, g C m⁻²) · **Provenance:** empirical
- **Scores:** data 3 · story 2 · geography 3 · cost 3 · recognition 2 = **13**
- **Tier:** 1 · **Notes:** Complete benthic-to-apex web at exactly the right size — the lowest-risk reef candidate found. Story is subtler (oligotrophic atoll where >80% of biomass is benthic but subsidized by imported pelagic food) — no single flagship, but a clean "lagoon circulation feeds the reef" narrative. First Pacific-island entry.

### French Frigate Shoals, NW Hawaiian Islands — `french-frigate-shoals`
- **Biome / Region:** Coral reef atoll · central North Pacific · **Lat/Lng (approx):** 23.9, −166.3
- **Source:** Polovina, J.J. (1984). Model of a coral reef ecosystem. I. The ECOPATH model and its application to French Frigate Shoals. *Coral Reefs* 3:1–11. Companion: Atkinson & Grigg 1984, *Coral Reefs* 3:13–22 (DOI 10.1007/BF00306136). Open full-text PDF at georgehbalazs.com (read); EcoBase-registered ("FrigateShoals").
- **Data access:** ASSUMED (strong) — full text read; diet matrix is Table 1 ("Diet of species groups … as a percentage of total diet") in the paper itself, plus Table 4 consumption vectors. Transcription from PDF needed.
- **Raw size:** 15 species groups (tiger sharks, monk seals, seabirds, reef sharks, sea turtles, small pelagics, jacks, reef fishes, lobsters/crabs, bottom fishes, nearshore scombrids, benthic algae, heterotrophic benthos, zooplankton, phytoplankton) · **Aggregation plan:** usable raw (15 nodes, bottom of the size gate)
- **Data type:** weighted (Ecopath diet %) · **Provenance:** empirical
- **Scores:** data 3 · story 3 · geography 2 · cost 3 · recognition 2 = **13**
- **Tier:** 1 · **Notes:** The ancestral Ecopath model — a genuine piece of science-history storytelling. Tiger shark apex + endangered Hawaiian monk seal + green turtle flagship cast. At 15 nodes it sits at the minimum richness bound; check against the "satisfying cascade" bar at Stage 2. A 1998-update model exists (Parrish et al. 2011, monk-seal carrying capacity, via UNL DigitalCommons) as a possible modern supplement.

### La Parguera, Puerto Rico — `la-parguera`
- **Biome / Region:** Coral reef · Caribbean · **Lat/Lng (approx):** 17.95, −67.05
- **Source:** Guénette, S., Hill, R.L. (2009). A trophic model of the coral reef ecosystem of La Parguera, Puerto Rico: synthesizing fisheries and ecological data. *Caribbean Journal of Science* 45(2–3):317–337. Open full text as SEDAR-103-RD-33 (sedarweb.org); read in full.
- **Data access:** ASSUMED (strong) — diet matrices published in the paper's appendices (Tables A7/A8: initial and balanced diet compositions, group by group). Transcription from PDF needed.
- **Raw size:** 62 groups (49 fish groups incl. juvenile/adult stanzas, 1 turtle, 10 invertebrates, 2 producers, detritus) · **Aggregation plan:** → ~22 nodes (merge stanza splits, collapse fish guilds to trophic groups, keep parrotfish/grouper/shark distinct)
- **Data type:** weighted (Ecopath, t/km², year-2000 snapshot) · **Provenance:** empirical
- **Scores:** data 3 · story 3 · geography 2 · cost 2 · recognition 2 = **12**
- **Tier:** 1 · **Notes:** The overfished-Caribbean-reef story with numbers attached: model implies total biomass ~5.6× below a 1970s–80s Caribbean reference. Parrotfish "underutilized as prey" anomaly is a nice teaching moment. Aggregation from 62 groups is the main cost. Overlaps geographically with `banco-chinchorro` — build at most one Caribbean reef from this pair.

### Banco Chinchorro Biosphere Reserve, Mexican Caribbean — `banco-chinchorro`
- **Biome / Region:** Coral reef atoll · Mexican Caribbean · **Lat/Lng (approx):** 18.4, −87.3
- **Source:** Rodríguez-Zaragoza, F.A., Ortiz, M., Berrios, F., et al. (2016). Trophic models and short-term dynamic simulations for benthic-pelagic communities at Banco Chinchorro Biosphere Reserve (Mexican Caribbean): a conservation case. *Community Ecology* 17(1):48–60. DOI: 10.1556/168.2016.17.1.7. Open access PDF (real.mtak.hu); main text read in full.
- **Data access:** ASSUMED — diet matrices live in the paper's electronic appendices (Appendix D–G, online-only); not yet obtained. Confirm at Stage 2.
- **Raw size:** five separate Ecopath sub-models (La Caldera, La Baliza, El Colorado, Chancay, Cueva de Tiburones), each ~17+ compartments (corals, sponges, urchins, epifauna, zooplankton, phytoplankton, zooxanthellae, detritus + queen conch, spiny lobster, black/Nassau grouper, barracuda, snappers, hogfish) · **Aggregation plan:** pick one sub-model near-raw (~17 nodes)
- **Data type:** weighted (Ecopath, g ww m⁻²) · **Provenance:** empirical
- **Scores:** data 3 · story 3 · geography 2 · cost 2 · recognition 2 = **12**
- **Tier:** 1 · **Notes:** Lobster + queen conch overexploitation-and-recovery story, macroalgal phase shift, hurricanes Dean/Karl, and Ecosim predator-release simulations in the paper. The five-sub-model structure is unusual — Stage 2 must confirm one sub-model stands alone as a coherent web.

---

## Tier 2 — backlog

### Global reef fish webs (six regions), Pozas-Schacre et al. 2021 — `global-reef-fish-webs`
- **Biome / Region:** Coral reef · Madagascar (Toliara, −23.4, 43.7) · Okinawa (26.6, 128.0) · New Caledonia (−22.3, 166.5) · Marshall Islands (9.5, 167.7) · Hawaii/Kona (19.6, −155.9) · West Indies/Puerto Rico (18.2, −67.0)
- **Source:** Pozas-Schacre, C. et al. (2021). Congruent trophic pathways underpin global coral reef food webs. *PNAS* 118(39):e2100966118. DOI: 10.1073/pnas.2100966118. Data: Zenodo 10.5281/zenodo.5341340 (CC-BY-4.0; `foodweb_final.csv` confirmed via Zenodo API) + GitHub ChloePZS/foodweb; also in Web of Life as FW_017_01–06.
- **Data access:** ASSUMED (strong) — deposit located and file list confirmed; files not yet opened.
- **Raw size:** per-region webs of 120–217 fish taxa / 491–875 links (species-level); the analysis version is 84 fish families × 31 prey categories · **Aggregation plan:** → ~18 nodes per region (fish to families/guilds, prey categories kept) — but note the web is **fish-predators-only**
- **Data type:** weighted (gut-content frequency) · **Provenance:** empirical
- **Scores:** data 3 · story 1 · geography 3 · cost 2 · recognition 2 = **11**
- **Tier:** 2 · **Notes:** Best machine-readable reef data found anywhere — but predators are exclusively fish, so basal levels and non-fish predators (sharks as entities, invertebrates as predators) are missing; the cascade story is weak (removing a fish family just fattens prey categories). Best used as a diet cross-check source for other reef candidates rather than a standalone web. Underlying diet sources: Randall 1967, Hiatt & Strasburg 1960, Harmelin-Vivien 1979, Hobson 1974, Kulbicki et al. 2005, Sano et al. 1984.

### West Hawai'i reefs — `west-hawaii-reefs`
- **Biome / Region:** Coral reef · Hawai'i · **Lat/Lng (approx):** 19.7, −156.0
- **Source:** Weijerman, M. et al. (2018). Evaluating management strategies to optimise coral reef ecosystem services. *Journal of Applied Ecology* 55(4):1823–1833. DOI: 10.1111/1365-2664.13105. Predecessor: Weijerman et al. 2013, *PLoS ONE* 8:e63797 (open access, fishing-pressure gradient).
- **Data access:** ASSUMED — Wiley page confirmed to exist; supplementary materials not checked. Group count unverified.
- **Raw size:** unknown · **Aggregation plan:** → ~20 nodes
- **Data type:** weighted (Ecopath) · **Provenance:** empirical
- **Scores:** data 3 · story 3 · geography 2 · cost 1 · recognition 2 = **11**
- **Tier:** 2 · **Notes:** Modern NOAA-backed model built for management-scenario testing (size limits, gear, land-based pollution) — an ideal cascade-simulation fit *if* the matrix is obtainable. Promote to Tier 1 the moment the diet matrix is confirmed.

### Danajon Bank (double barrier reef), Central Philippines — `danajon-reef`
- **Biome / Region:** Coral reef · Bohol, Philippines · **Lat/Lng (approx):** 10.3, 124.1
- **Source:** Bacalso, R.T.M., Wolff, M. (2014). Trophic flow structure of the Danajon ecosystem (Central Philippines) and impacts of illegal and destructive fishing practices. *Journal of Marine Systems* 139:103–118. EcoBase-registered.
- **Data access:** ASSUMED — EcoBase registration confirmed; paper paywalled; matrix location unconfirmed. Group count unknown.
- **Raw size:** unknown · **Aggregation plan:** → ~20 nodes
- **Data type:** weighted (Ecopath) · **Provenance:** empirical
- **Scores:** data 3 · story 3 · geography 3 · cost 1 · recognition 1 = **11**
- **Tier:** 2 · **Notes:** Blast-fishing / Malthusian-overfishing story on one of the world's most degraded reefs; SE Asia coverage. Everything hinges on obtaining the matrix — paywall + unknown structure keep it at Tier 2.

### Opitz Caribbean reef web (classic) — `opitz-caribbean-reef`
- **Biome / Region:** Coral reef · Caribbean regional synthesis (US Virgin Islands base) · **Lat/Lng (approx):** 18.3, −64.8
- **Source:** Opitz, S. (1996). Trophic Interactions in Caribbean Coral Reefs. *ICLARM Technical Report 43*, 341 pp (WorldFish). Matrix re-deposited via Cirtwill, A.R., Eklöf, A. (2018). *Ecology Letters* 21 (DOI: 10.1111/ele.12955), Dryad 10.5061/dryad.1mv20r6 (CC0; `reef_spnames.csv` binary predator×prey matrix confirmed via Dryad API).
- **Data access:** ASSUMED (strong) — deposit located and file list confirmed; not yet opened. The 341-page source report itself not read.
- **Raw size:** ~250 taxa / ~3,300 links (commonly cited figure; NOT verified from the deposit) · **Aggregation plan:** → ~22 nodes (heavy guild aggregation)
- **Data type:** qualitative (binary) · **Provenance:** composite (regional synthesis — five balanced ECOPATH II models in the source report)
- **Scores:** data 2 · story 3 · geography 2 · cost 1 · recognition 2 = **10**
- **Tier:** 2 · **Notes:** THE reference Caribbean reef web — most later models borrow its parameters. But it's binary and big; La Parguera and Banco Chinchorro offer weighted, place-specific Caribbean alternatives that rank higher. Useful fallback if both fail verification.

### Mo'orea metabarcoding web, French Polynesia — `moorea-metabarcoding`
- **Biome / Region:** Coral reef · Mo'orea, French Polynesia · **Lat/Lng (approx):** −17.5, −149.8
- **Source:** Casey, J.M. et al. (2019). Reconstructing hyperdiverse food webs: gut content metabarcoding as a tool to disentangle trophic interactions on coral reefs. *Methods in Ecology and Evolution*. DOI: 10.1111/2041-210X.13206. Dryad 10.5061/dryad.t7pd371 (CC0; OTU table confirmed via Dryad API).
- **Data access:** ASSUMED (strong) — deposit located; OTU table (predator gut samples × prey OTUs with taxonomy) is effectively an incidence matrix.
- **Raw size:** 22 predator fish species × 4,341 prey OTUs · **Aggregation plan:** → ~18 nodes (OTUs to broad prey groups) — **high-curation-risk**
- **Data type:** weighted (sequence read counts — a presence/abundance proxy, not diet fractions) · **Provenance:** empirical
- **Scores:** data 2 · story 2 · geography 2 · cost 1 · recognition 3 = **10**
- **Tier:** 2 · **Notes:** Cutting-edge method, famous study site (Mo'orea Gump Station), open data. But read-count "weights" are not diet proportions, and aggregating 4,341 OTUs without destroying the signal is genuinely hard. Record for the day a metabarcoding-informed web is explicitly wanted.

### Greater Antillean reef webs (Cayman / Cuba / Jamaica), Roopnarine & Hertog 2013 — `roopnarine-greater-antilles`
- **Biome / Region:** Coral reef · Caribbean · **Lat/Lng (approx):** Cayman 19.4, −81.3 · Cuba 21.7, −80.3 · Jamaica 17.8, −76.8
- **Source:** Roopnarine, P.D., Hertog, R. (2013). Detailed Food Web Networks of Three Greater Antillean Coral Reef Systems. *Dataset Papers in Ecology* 2013:857470. DOI: 10.7167/2013/857470. Dryad 10.5061/dryad.c213h (CC0); also Mangal dataset 180 and GloBI-indexed (with documented source-data fixes).
- **Data access:** ASSUMED (strong) — three 265×265 binary adjacency matrices + guild key confirmed in the Dryad file list via API.
- **Raw size:** 265 guilds per region (169 producers + 513 invertebrate/protist spp + 159–178 vertebrates underlying) · **Aggregation plan:** → ~22 nodes (guilds already exist; merge guild hierarchy) — heavy
- **Data type:** qualitative (binary) · **Provenance:** composite (literature-assembled guild web)
- **Scores:** data 2 · story 2 · geography 2 · cost 1 · recognition 2 = **9**
- **Tier:** 2 · **Notes:** Most thoroughly mirrored reef dataset in existence (Dryad + Mangal + GloBI), but binary, guild-based, and 265 nodes — the aggregation would be a from-scratch editorial act. GloBI's README flags malformed guild lists in the source CSVs. Behind the weighted Caribbean candidates.

---

## Appendix — recorded, not planned

### Tiahura reef sector, Mo'orea — `moorea-tiahura`
- Arias-González, J.E., Delesalle, B., Salvat, B., Galzin, R. (1997). Trophic functioning of the Tiahura reef sector, Moorea Island, French Polynesia. *Coral Reefs* 16:231–246. EcoBase-registered.
- **Why appendix:** paywalled (Springer); matrix location assumed but not obtainable at sweep time. Would otherwise be a strong candidate (Ecopath, famous site). Re-check with library access.

### Great Barrier Reef models (Gribble) — `gbr-gribble-models`
- Gribble, N. (2000) far-northern GBR model (book chapter, CRC Press); Gribble (2003) *Fisheries Research* 65:493–506 (25 guilds); expanded 32-guild mangrove–seagrass–reef model in Gribble 2005 (MODSIM, full text read) and Gribble 2009 (open report, era.dpi.qld.gov.au). EcoBase-registered. Also Tudman 2001 (JCU honours thesis, central GBR).
- **Why appendix:** diet matrices are referenced ("see Gribble 2000") but never published in the open documents — the matrix trail ends at a paywalled book chapter. GBR would be the single highest-recognition reef on Earth; worth a targeted access attempt (author contact / library) outside this sweep.

### St. Martin Island, Caribbean (classic) — `st-martin-island`
- Goldwasser, L., Roughgarden, J. (1993). Classic small reef-associated web, historically distributed via the NCEAS Interaction Web DB.
- **Why appendix:** **inaccessible** — absent from Web of Life, Netzschleuder, Mangal, and GloBI at sweep time; the historic host (globalwebdb.com) is defunct. Matrix location unconfirmed. Recorded because the strategy shortlist (ECOSYSTEMS.md §8) lists it as a Tier 2 lead — that lead is now downgraded.

### Takapoto atoll planktonic web, French Polynesia — `takapoto-planktonic`
- Niquil, N. et al. (1998). Inverse model analysis of the planktonic food web of Takapoto Atoll. *Mar. Ecol. Prog. Ser.* 165:17–29 (+ Niquil et al. 1999 *Oecologia* 118:232–241; Sakka et al. 2001 *Aquat. Living Resour.* 14). 7-compartment weighted carbon-flow web, shipped in the R package `NetIndices` (`data(Takapoto)`).
- **Why appendix:** **correction to the strategy shortlist** — there is no full-lagoon Takapoto Ecopath model; what exists is a 7-compartment *planktonic* subsystem web. Fails the minimum-richness gate (7 nodes) for a standalone web. Could only work as the plankton module of a composite lagoon web — not planned.

### CAFFEE model, Western Indian Ocean — `caffee-wio-reef`
- 27-group W. Indian Ocean coral reef food-web model with a supplementary table (ScienceDirect, likely paywalled); surfaced in repository sweep. Citation not fully confirmed at sweep time.
- **Why appendix:** too little verified information to score; W. Indian Ocean coverage would be valuable if the paper and matrix are confirmed.

---

## Rejected in sweep
- **Young et al. 2024** (Palmyra vs Tabuaeran atolls, *Ecological Applications*, Dryad kprr4xhcg) — deposit holds stable-isotope values and biomass surveys only; no node–link matrix.
- **Discovery Bay, Jamaica zooplankton Ecopath** (Persad & Webber 2009, *Open Mar. Biol. J.* 3:95–104, open access) — zooplankton community only; too narrow to be a reef food web.
- **Hiatt & Strasburg 1960 Marshallese reefs** — the original monograph (*Ecol. Monogr.* 30(1):65–127) is a classic, but the only machine-readable version (Mangal `hiatt_1960`) is a 14-node fragment. Superseded as a candidate by `global-reef-fish-webs` (which uses Hiatt & Strasburg as its Marshall Islands diet source).
- **Kapingamarangi Atoll** (Niering 1963, Mangal `niering_1963`) — terrestrial ecology of the atoll, not a reef web.
- **St. Marks seagrass web** (Christian & Luczkovich 1999; WoL FW_007, Mangal `christian_1999`) — seagrass, not coral reef; out of biome scope for this sweep.
- **FW_008 Caribbean reef** (Bascompte, Melián & Sala 2005, PNAS; 249 spp / 3313 links, weighted, downloadable from Web of Life) — real and weighted, but node weights are relative-frequency summaries of the same Opitz-style Caribbean synthesis; `opitz-caribbean-reef` covers this lineage with a cleaner citation trail. Recorded here to avoid double-counting.
- **Red Sea / Maldives / Chagos Ecopath models** — targeted searches found none; region remains a genuine data gap.
- **Artificial/temperate "reef" Ecopath models** (North Yellow Sea, Juehua Island, Bohai oyster reef) — not natural coral reefs.
- **figshare** — zero coral-reef food-web matrix deposits; logged for completeness.

## Stage 2 priorities for the verifier
1. **Xisha**: open the *Frontiers* supplementary files and confirm the 23-group diet matrix is really there (DOI: 10.3389/fmars.2022.1046106).
2. **Uvea**: transcribe Appendix B diet matrix from the open PDF (halieutique.institut-agro.fr) and confirm group list = 25.
3. **French Frigate Shoals**: transcribe Polovina 1984 Table 1 from the open PDF; decide whether 15 nodes clears the "satisfying cascade" bar.
4. **La Parguera vs Banco Chinchorro**: pick ONE Caribbean candidate — La Parguera's matrices are confirmed in-document; Chinchorro needs its online-only appendices (D–G) located first.
5. **West Hawai'i**: check Wiley supplementary for the Weijerman 2018 diet matrix; promotes to Tier 1 if found.
