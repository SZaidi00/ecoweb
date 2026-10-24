# Region: Africa (multi-biome sweep)
**Researched:** 2026-10 · **Status:** complete (Stage 1 — awaiting verification)

**Repo context at sweep time:** 9 webs live; Africa has a single pin (Serengeti, grassland) and no marine, wetland, or lake web. Biome saturation: freshwater 3 (saturated), marine 2, grassland 2, estuary 1, wetland 1. Scope note: Namib desert systems were covered by the desert sweep (`namib-fog-oasis`, `welwitschia`); western Indian Ocean coral reefs were covered by the coral-reefs sweep (`caffee-wio-reef`, appendix); tropical rainforest is covered by the tropical-terrestrial sweep. This sweep covers sub-Saharan African marine shelves, wetlands, great lakes, and terrestrial systems not already claimed. Serengeti itself is live — its alternate plant–mammal dataset (Baskerville et al. 2011) is recorded, not re-candidated.

**Sweep log:**
- **Web of Life** (web-of-life.es): query "Web of Life web-of-life.es Africa food web dataset network" — no Africa-specific whole-web dataset surfaced; the site is JS-driven and the map data endpoint was not pulled directly this sweep (limitation recorded for Stage 2, same as desert and Australia sweeps).
- **Netzschleuder** (networks.skewed.de): query "networks.skewed.de Netzschleuder food web Africa Serengeti" — only Africa entry is `serengeti-foodweb` (Baskerville et al. 2011, 161 species / 592 links, plant–mammal web). Serengeti already live → recorded, not a candidate. No other African food-web entries.
- **GloBI**: query "GloBI globalbioticinteractions Africa food web dataset" — no African food-web dataset indexed; the Africa Tree Database (Seltzer et al. 2015) is plant–animal interactions, not a food web.
- **Mangal**: query "Mangal database Africa food web network savanna marine" — no Africa-specific dataset surfaced.
- **Ecopath publications + EcoBase** (ecobase.ecopath.org): queries "Shannon southern Benguela Ecopath model diet matrix trophic groups", "northern Benguela Ecopath model Heymans anchovy sardine regime shift", "Agulhas Bank South Africa Ecopath trophic model" (no dedicated model found), "Senegal Mauritania shelf Ecopath model Gascuel trophic", "Gulf of Guinea Ecopath model Ghana Nigeria Togo diet matrix", "Lake Victoria Ecopath model Nile perch trophic", "Lake Tanganyika Ecopath model trophic groups", "Lake Kariba Ecopath model Karenge Kolding trophic structure", "Lake Turkana Ecopath model Kolding food web", "Watermeyer Shannon Griffiths 2008 southern Benguela historical trophic models". EcoBase entries confirmed: **Southern Benguela** (1978 model 390/522; historical pre-fishing models 407), **Northern Benguela** (models 101/102; historical 406), **Sene-gambia continental shelf** (116/117), **Sierra Leone shelf & slope** (119, three periods), **Togo shelf** (388), **Nigeria EEZ** (408), **Lake Victoria 1971** (235, 16 groups), **Lake Tanganyika** (193, 7 groups), **Lake Nokoué** (511/514), **Lake Kivu** (515), **Ebrié Lagoon** (611, metadata incomplete). The Palomares & Pauly (2004) FCRR 12(7) volume compiles 17 Ecopath models of NW Africa (Mauritania, Cape Verde, Senegal, Gambia, Guinea, Guinea-Bissau, Sierra Leone) for multiple periods of 1960–2000 — open PDF.
- **figshare / Zenodo / Dryad**: query "zenodo OR figshare OR dryad Africa food web dataset matrix" — no African food-web matrix deposits found (Congo River isotope data exist on Dryad, but isotope mixing-model data are not link matrices).
- **Primary literature** (queries logged verbatim): "African savanna food web matrix published Kruger Kalahari trophic network" (0 results), "Congo Basin rainforest food web published matrix", "Okavango Delta food web trophic model Botswana", "Kafue Flats Zambezi floodplain food web trophic model Africa", "Bale Mountains Ethiopia food web Ethiopian wolf rodent trophic matrix". Open full/partial texts read: Shannon et al. 2020 *Front. Mar. Sci.* (southern Benguela revision, open, supplementary diet tables S1–S4), Heymans & Tomczak 2016 *Ecol. Model.* (northern Benguela regime shifts, open PDF via U. Lisboa), Guénette et al. 2014 *PLoS ONE* (Banc d'Arguin/Mauritanian shelf, open, diet matrix in File S1 Table S2), Watermeyer et al. 2008 *Afr. J. Mar. Sci.* (pre/post industrial-fishing Benguela models), Amorim et al. 2004 FCRR 12(7) synthesis (open PDF), Lindholm et al. 2007 *Wetlands* (Okavango floodplain webs), Soto et al. 2019 *Ecol. Evol.* (Congo isotopes, open), Gownaris et al. 2018 *J. Great Lakes Res.* (multi-lake trophic models incl. Lake Malawi, 25 groups).

---

## Tier 1 — build next

### Southern Benguela upwelling ecosystem, South Africa — `southern-benguela`
- **Biome / Region:** Temperate upwelling shelf · Africa (South Africa) · **Lat/Lng (approx):** −33.0, 17.5
- **Source:** Shannon, L.J. et al. (2020). Exploring temporal variability in the southern Benguela ecosystem over the past four decades using a time-dynamic ecosystem model. *Frontiers in Marine Science* 7:540 — open access; revised 1978 base model with parameters and diet updates in Supplementary Tables S1–S4. Lineage: Shannon et al. (2003, 2004a, 2008); historical pre-/post-industrial-fishing models in Watermeyer, Shannon & Griffiths (2008) *Afr. J. Mar. Sci.* 30: 351–382 (models for the 1600s/1900s/1960s; EcoBase 407).
- **Data access:** ASSUMED (strong) — Frontiers article and supplement are fully open; the supplement documents the diet matrix revisions explicitly. Matrix not yet transcribed.
- **Raw size:** ~37–40 functional groups (multi-stanza anchovy and sardine; hakes, linefish, seabirds incl. African penguin, Cape fur seals, cetaceans) · **Aggregation plan:** → ~20–24 nodes (merge demersal/linefish guilds, zooplankton groups; keep anchovy/sardine stanzas, hakes, penguin, seal distinct)
- **Data type:** weighted (Ecopath diet fractions) · **Provenance:** empirical (model)
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 2 = **13**
- **Tier:** 1 · **Notes:** Fulfils the §8 Tier-1 lead "Benguela Current". The classic wasp-waist upwelling: anchovy–sardine regime shifts (1980s anchovy regime → 1990s sardine regime), endangered African penguins and Cape gannets squeezed between fishery and forage-fish shifts, hake as both predator and fishery. The Watermeyer historical models add a Hauraki-style "before humans" dimension. First African marine web; marine biome at 2 live → fits.

### Northern Benguela upwelling ecosystem, Namibia — `northern-benguela`
- **Biome / Region:** Temperate upwelling shelf · Africa (Namibia) · **Lat/Lng (approx):** −22.0, 14.3
- **Source:** Heymans, J.J. & Tomczak, M.T. (2016). Regime shifts in the northern Benguela ecosystem: challenges for management. *Ecological Modelling* 331: 151–159 (open PDF via U. Lisboa repository) — re-analyses the 32-compartment model of Heymans et al. (2009), built on the 1956 model of Heymans & Baird (2000) *Afr. J. Mar. Sci.*; pre-/post-fishing historical models in Watermeyer et al. (2008) (EcoBase 406).
- **Data access:** ASSUMED — the 2016 paper is openly available but the diet matrix lives in the earlier AJMS papers (paywalled; obtainable via interlibrary/author request or EcoBase model download). Matrix not yet sighted this sweep.
- **Raw size:** 32 compartments (18 fish — six split into adult/juvenile stanzas, 2 mammals, 1 seabird, 8 invertebrates, primary producers, detritus) · **Aggregation plan:** → ~18–22 nodes, near-raw (merge stanza pairs, pool small pelagics/gobies per model structure)
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 2 · story 3 · geography 3 · cost 3 · recognition 2 = **13**
- **Tier:** 1 · **Notes:** The most dramatic documented marine regime shift: sardine collapse in the 1970s → jellyfish and goby takeover; energy flow re-routed from the sardine/anchovy chain to gobies/jellies and never returned. Sibling of `southern-benguela` — build one Benguela first (the southern model has the cleaner open data), then decide whether the northern adds enough to justify a second upwelling pin.

### Banc d'Arguin & Mauritanian shelf, Mauritania — `banc-d-arguin`
- **Biome / Region:** Tropical shallow shelf + intertidal seagrass flats · Africa (Mauritania) · **Lat/Lng (approx):** 20.0, −16.5
- **Source:** Guénette, S., Meissa, B., Gascuel, D. et al. (2014). A model for the Banc d'Arguin and the Mauritanian shelf: ecosystem structure and the effects of fishing. *PLoS ONE* — fully open access (PMC3984206); base Ecopath model for 1991, diet composition in File S1 Table S2, parameters in Table 1. Earlier Banc d'Arguin model: Sidi & Dipo (2004), FCRR 12(7).
- **Data access:** ASSUMED (strong) — PLoS ONE supplementary files are open and include the diet table. Matrix not yet transcribed.
- **Raw size:** not yet confirmed (~30 groups; six coastal fish groups split juvenile/adult; shelf vs Banc habitats separated for producers and invertebrates) · **Aggregation plan:** → ~20–24 nodes (merge stanza pairs and benthic guilds; keep meagre, groupers, octopus, and the bird/mammal groups distinct)
- **Data type:** weighted (Ecopath diet fractions) · **Provenance:** empirical (model)
- **Scores:** data 3 · story 3 · geography 3 · cost 2 · recognition 2 = **13**
- **Tier:** 1 · **Notes:** A World Heritage seascape where the Sahara meets the sea: vast intertidal flats and seagrass beds are the nursery for the shelf's fish, and the wintering ground for millions of Palearctic shorebirds. Model explicitly partitions Banc vs shelf production — a natural two-habitat web. Artisanal (Imraguen) vs industrial fishery contrast built in. No saturation conflict (shallow-shelf/intertidal).

### Okavango Delta seasonal floodplain, Botswana — `okavango-delta`
- **Biome / Region:** Inland delta / seasonal wetland · Africa (Botswana) · **Lat/Lng (approx):** −19.3, 22.9
- **Source:** Lindholm, M., Hessen, D.O., Mosepele, K., Wolski, P. (2007). Food webs and energy fluxes on a seasonal floodplain: the influence of flood size. *Wetlands* 27: 775–784 (DOI 10.1672/0277-5212(2007)27[775:FWAEFO]2.0.CO;2) — food webs and quantified energy fluxes for flood years of different size; companion: Högberg et al. (2002) *Hydrobiologia* 470: 23–30 (aquatic floodplain web dynamics); Bokhutlo et al. (2021) adds isotope-based seasonal energy channels.
- **Data access:** ASSUMED — *Wetlands* paper is paywalled (BioOne/Springer); web structure and fluxes published in paper figures/tables. Obtainability to be confirmed at Stage 2.
- **Raw size:** not yet confirmed (fish, zooplankton, macroinvertebrate and basal-source compartments across flood phases) · **Aggregation plan:** → ~18–22 nodes (floodplain aquatic guilds; potentially a two-phase wet/dry presentation)
- **Data type:** mixed (quantified energy fluxes; possibly qualitative links) · **Provenance:** empirical
- **Scores:** data 2 · story 3 · geography 3 · cost 2 · recognition 3 = **13**
- **Tier:** 1 · **Notes:** The most iconic inland wetland on Earth and the atlas's missing African wetland (wetland biome has only Cypress live → no saturation conflict). The flood-pulse web: a river that never reaches the sea floods the Kalahari in the dry season, zooplankton hatch from egg banks, fish production pulses, and grazers crowd the drying floodplain. The wet-vs-dry-year contrast is a built-in "what changes when the flood fails" story.

---

## Tier 2 — backlog

### Sene-Gambian continental shelf (Senegal/Gambia upwelling) — `sene-gambian-shelf`
- **Biome / Region:** Tropical upwelling shelf · Africa (Senegal/Gambia) · **Lat/Lng (approx):** 14.5, −17.3
- **Source:** Samb, B. & Mendy, A. (2004). Dynamique du réseau trophique de l'écosystème sénégambien en 1990. In: Palomares & Pauly (eds), *West African marine ecosystems: models and fisheries impacts*, Fisheries Centre Research Reports 12(7) — open PDF; EcoBase models 116/117 (1964–1981 and 1990 periods). Regional synthesis: Amorim et al. (2004), same volume (13-fold decline in demersal/large-pelagic fish biomass 1960→2000 across 17 NW Africa models).
- **Data access:** ASSUMED — FCRR volume is open; per-model diet tables presumed in chapters (French). Matrix not yet sighted.
- **Raw size:** not yet confirmed · **Aggregation plan:** → ~20 nodes (sardinella and small pelagics kept distinct — they are the story)
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 1 = **10**
- **Tier:** 2 · **Notes:** The sardinella story — one of the world's great artisanal small-pelagic fisheries, with the 1960→2000 biomass-collapse timeseries as backdrop. Held to Tier 2 by French-language sources and unconfirmed matrix location; the FCRR volume also contains Guinea coast (Guénette & Diallo 2003), Gambia shelf (Mendy 2003), Sierra Leone (Heymans & Vakily 2002) and Cape Verde models if alternates are needed.

### Bamboung bolong (Sine Saloum) marine protected area, Senegal — `senegal-bamboung-mpa`
- **Biome / Region:** Tropical estuarine mangrove creek · Africa (Senegal) · **Lat/Lng (approx):** 13.8, −16.5
- **Source:** Colléter, M., Gascuel, D. et al. (2012/2013). Modelling trophic flows in ecosystems to assess the efficiency of marine protected areas (MPA), a case study on the coast of Sénégal. *Ecological Modelling* — reference Ecopath model for 2003 + 2006–2008 MPA-period model, with a fished control creek (Sangako) modelled for contrast; underlying data in Colléter (2010) PhD thesis.
- **Data access:** ASSUMED — journal version paywalled; the Colléter (2010) thesis (Agrocampus Ouest) is likely openly archived and contains the parameter tables. To confirm at Stage 2.
- **Raw size:** not yet confirmed · **Aggregation plan:** → ~18–20 nodes (estuarine fish guilds; mangrove/detritus basal groups)
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 1 = **10**
- **Tier:** 2 · **Notes:** A built-in natural experiment: the same creek web modelled before/after fishing stopped, plus a still-fished sibling creek — an "MPA effect" demo few published webs can offer. Estuary biome has only Chesapeake live → no saturation conflict. Would be the atlas's first mangrove-channel web.

---

## Appendix — recorded, not planned

### Lake Victoria, East Africa — `lake-victoria`
- Moreau, J., Ligtvoet, W. & Palomares, M.L.D. (1993/1995) Winam Gulf Ecopath (16 groups; EcoBase 235); Matsuishi et al. (2006) whole-lake model; Natugonza, V. et al. (2019) *J. Great Lakes Res.* — re-parameterised Winam Gulf models (1971–72, 1985–86) plus a new whole-lake 2014 model (18 functional groups, parameters and diet tables published; an open GRO-FTP thesis PDF carries full tables).
- **Appendix (biome-saturation gate):** freshwater is saturated (3 live: Little Rock, Tuesday, Tapajós). Otherwise a top-tier candidate: the Nile perch introduction is the most famous human-caused food-web disruption on Earth, and the "fishing up then fishing through" catch-trophic-level story is tailor-made for the cascade simulator. First in line if a freshwater slot frees up.

### Lake Malawi / Nyasa, East Africa — `lake-malawi`
- Darwall, W.R. et al. (2010). Trophic model of Lake Malawi (25 groups; summarised in Gownaris et al. 2018 *J. Great Lakes Res.* water-level-fluctuations comparison, TST ≈ 6184 t/km²/yr).
- **Appendix (biome-saturation gate):** freshwater saturated. The cichlid radiation story (hundreds of endemic species in one lake) is unique; would need a deliberately coarse guild aggregation.

### Lake Tanganyika, East Africa — `lake-tanganyika`
- Moreau, J. & Nyakageni, B. — pelagic trophic model, Burundi sector (7 Ecopath groups; EcoBase 193).
- **Appendix (biome-saturation gate; also too coarse):** 7 groups is below satisfying cascade richness even before the saturation gate. A modern, higher-resolution model would be needed.

### Lake Turkana, Kenya — `lake-turkana`
- Kolding, J. (1993). Trophic interrelationships and community structure at two different periods of Lake Turkana: a comparison using the ECOPATH II box model + recent isotope work on energy-channel coupling (2025, open at PMC).
- **Appendix (biome-saturation gate):** freshwater saturated; the boom-and-bust O. niloticus fishery of a desert lake is a good story if ever revisited.

### Gulf of Guinea shelf models (Togo / Nigeria / Ghana) — `gulf-of-guinea-shelf`
- Sedzro, K.M. (2000) Togo shelf (EcoBase 388); Williams, A.B. (2005) Nigeria EEZ (EcoBase 408); Cross River estuary Ecopath (2023, weak-publisher venue); a newer Gulf-wide EwE model is under development (de Mutsert lab, USM).
- **Appendix (access unclear):** EcoBase entries have thin metadata; no openly published diet matrix located this sweep. Revisit if the newer Gulf of Guinea model publishes with supplements.

---

## Rejected in sweep

- **Serengeti plant–mammal web (Baskerville et al. 2011)** — excellent dataset (161 spp/592 links, on Netzschleuder) but the Serengeti is already live (de Visser et al. 2011). Recorded as an alternate dataset, not a candidate.
- **Lake Kariba pelagic model** — ECOPATH II model with only 3 trophic groups (tigerfish–kapenta–zooplankton); fails minimum richness.
- **Congo River (mainstream + tributaries)** — rich multi-isotope work (Soto et al. 2019, open, Dryad data) but no resolved node-link food web; mixing-model source contributions are not a link matrix. A labelled composite could be scoped deliberately later — the Congo is the atlas's biggest geographic hole.
- **Bale Mountains afroalpine (Ethiopian wolf–rodent–raptor system)** — superb story (Africa's most endangered carnivore, rodents at 2,000–4,000 kg/km²) and good diet data, but no resolved published web; the Bale Mountains Ecosystem Project itself notes predator functional responses are unmeasured. Not actionable this sweep.
- **African terrestrial savanna beyond Serengeti (Kruger, Kalahari, Kafue)** — query returned no resolved published matrices; isotope and diet-study literature only.
- **Agulhas Bank** — no dedicated published Ecopath model found; the southern Benguela models already extend into the Agulhas region (Watermeyer et al. 2016 connectivity study). Recorded as a lead, not a candidate.
- **Ebrié Lagoon, Lake Nokoué, Lake Kivu (Villanueva et al.)** — EcoBase metadata incomplete (Ebrié shows 0 groups recorded) and freshwater/lagoon slots gated; recorded for completeness.
- **Namib desert, WIO coral reefs, African rainforests** — cross-referenced to the desert, coral-reefs, and tropical-terrestrial sweeps; not duplicated here.
