# Region: Arctic marine (sub-Arctic to High Arctic seas)
**Researched:** 2026-10 · **Status:** complete (Stage 1 — awaiting verification)

**Repo context at sweep time:** 9 webs live. The Weddell Sea (Antarctic) is the live polar web; this sweep is its Arctic counterpart — the single most audience-recognizable climate-change theatre on Earth. Biome saturation: marine 2 (PWS, Weddell), estuary 1, freshwater 3 (saturated), grassland 2, wetland 1. Scope note: terrestrial Arctic systems were covered by the tundra-boreal sweep (Bylot, Zackenberg, Bear Island, Kluane); this sweep covers Arctic and sub-Arctic *seas*. The Eastern Bering Sea is technically sub-Arctic but is included as the Pacific gateway and because it anchors the best-documented Arctic-type shelf webs. Cross-reference: Prince William Sound is live and pins the sub-Arctic NE Pacific — geography scores for further Alaskan webs are penalized accordingly.

**Sweep log:**
- **Ecopath publications + EcoBase**: queries "Barents Sea Ecopath food web model diet matrix Blanchard 2002 cod capelin", "Eastern Bering Sea food web Ecopath model Aydin 2007 NOAA diet matrix", "Chukchi Sea Beaufort Sea Ecopath food web model Whitehouse Arctic", "Hudson Bay food web Ecopath model Arctic marine published", "Kara Sea Laptev Sea food web model Ecopath Russian Arctic", "Greenland shelf food web Ecopath model West Greenland Disko Bay trophic". EcoBase registers multiple of these models (Barents, EBS, Chukchi) as published-model entries.
- **Primary literature / open repositories**: CEFAS Technical Report 117 (Barents, open PDF), NOAA TM AFSC-178 (Bering/GOA/Aleutians comparison, open PDF with full diet tables C4–C26), NOAA repository entry for Whitehouse & Aydin 2016 (Chukchi, open), USF Digital Commons (Beaufort, open), Hoover et al. 2013 lineage (Hudson Bay), ULaval corpus (Baffin Bay tech report, open).
- **Cross-sweep reference**: Weddell Sea (live, Antarctic polar marine) and PWS (live, sub-Arctic NE Pacific) set the bar: an Arctic web must add ice-dependence (ice algae → under-ice amphipods → Arctic cod → ringed seal → polar bear) rather than duplicate the krill story.

---

## Tier 1 — build next

### Barents Sea — `barents-sea`
- **Biome / Region:** Arctic shelf sea (Atlantic gateway) · N. Atlantic Arctic (Norway/Russia) · **Lat/Lng (approx):** 72.0, 35.0
- **Source:** Blanchard, J.L. et al. (2002). Modelling the Barents Sea ecosystem. *CEFAS Technical Report* 117 — open PDF; 41 functional groups, Ecopath models for 1995 (low capelin) and 1990 (high capelin) with diet matrix documented in the report. A modern open alternative/upgrade: Pedersen et al. (2021) *Frontiers in Marine Science* "Overexploitation, Recovery, and Warming of the Barents Sea Ecosystem During 1950–2013" — open access, year-1950 and year-2000 Ecopath models (1,029 feeding interactions incl. snow crab and red king crab groups). Registered in EcoBase (Dommasnes lineage).
- **Data access:** ASSUMED (strong) — the CEFAS report is an open PDF with the diet matrix inside; Frontiers 2021 is open access with supplements. Matrix not yet transcribed.
- **Raw size:** 41 functional groups (1995 model) · **Aggregation plan:** → ~18–22 nodes (cod juvenile/adult, capelin by age class, herring, polar cod, krill/Thysanoessa, copepods, shrimp, benthos guilds, seals, whales, seabirds, fisheries)
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 3 · story 3 · geography 2 · cost 2 · recognition 2 = **12**
- **Tier:** 1 · **Notes:** Fulfils the §8 Tier-2 lead, promoted on evidence. The capelin boom–bust cycle is the finest documented example of a wasp-waist ecosystem on Earth: when capelin crash, cod cannibalize, seals starve and seabird colonies fail — a cascade the simulator can show by toggling one node, and the 1990-vs-1995 model pair is a built-in before/after. The ice-algae pathway and polar cod give the genuinely Arctic signature that Weddell (krill) doesn't cover. Geography docked one point for polar adjacency to Weddell; this is still the strongest Arctic-marine candidate found.

---

## Tier 2 — backlog

### Eastern Bering Sea shelf, Alaska — `eastern-bering-sea`
- **Biome / Region:** Sub-Arctic shelf sea (Pacific gateway) · N. America (Alaska, USA) · **Lat/Lng (approx):** 58.0, −165.0
- **Source:** Aydin, K. et al. (2007). A comparison of the Bering Sea, Gulf of Alaska, and Aleutian Islands large marine ecosystems through food web modeling. *NOAA Technical Memorandum* NMFS-AFSC-178 — open PDF; 148-group EBS model with full diet tables (C4–C26) and data pedigrees. Earlier 41-group model: Aydin et al. (2002), data 1980–85.
- **Data access:** ASSUMED (strong) — NOAA TM is open with the diet matrix printed in appendices. Not yet transcribed.
- **Raw size:** 148 groups (modern) / 41 groups (1980s model) · **Aggregation plan:** → ~18–22 nodes (pollock adult/juvenile split, Pacific cod, flatfish guilds, snow crab, euphausiids, copepods, pinnipeds, whales, seabirds, fisheries)
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 3 · story 3 · geography 1 · cost 1 · recognition 2 = **10**
- **Tier:** 2 · **Notes:** Walleye pollock — the largest single-species fishery on Earth — sits at the centre of a web where over two-thirds of all groups link to it directly; the Steller sea lion decline controversy is exactly the kind of contested cascade the product handles well. Held back by geography (PWS already pins the NE Pacific) and aggregation cost (148 groups is the largest raw model in this sweep; the 41-group 1980s model is the fallback).

### Eastern Chukchi Sea, Alaska — `eastern-chukchi-sea`
- **Biome / Region:** High Arctic shelf sea · N. America (Alaska, USA) · **Lat/Lng (approx):** 70.0, −168.0
- **Source:** Whitehouse, G.A. & Aydin, K. (2016). Trophic structure of the eastern Chukchi Sea: an updated mass balance food web model. *NOAA Tech. Memo.* — open at the NOAA repository; 2010s update of the 1990s Ecopath model (93 parameters updated, 9 groups added — 6 seabird, 3 fish), diet compositions documented. Used in Whitehouse et al. (2020) three-web Alaska sensitivity analysis.
- **Data access:** ASSUMED (strong) — NOAA repository copy is open. Matrix not yet transcribed.
- **Raw size:** ~40 functional groups · **Aggregation plan:** → ~18–22 nodes
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 3 · story 2 · geography 1 · cost 2 · recognition 1 = **9**
- **Tier:** 2 · **Notes:** The most benthic-dominated web in the sweep — energy flows through clams and amphipods to walrus and gray whales rather than up the pelagic chain; a genuinely different architecture from every live web. Geography docked (third potential Alaskan pin). The walrus haul-out story is strong but narrower than capelin or pollock.

### Beaufort Sea — `beaufort-sea`
- **Biome / Region:** High Arctic coastal sea · N. America (Alaska/Canada) · **Lat/Lng (approx):** 71.5, −140.0
- **Source:** Suprenand, P.M. et al. — Ecosystem model of the entire Beaufort Sea marine ecosystem: a temporal tool for assessing food-web structure and marine animal populations from 1970 to 2014. *Ecological Modelling* lineage; open at USF Digital Commons (476,000 km² model; EwE with sea-ice and SST forcing; Inuit harvesting explicit).
- **Data access:** ASSUMED (moderate) — open institutional copy exists; full diet matrix availability to be confirmed at verification.
- **Raw size:** several dozen functional groups · **Aggregation plan:** → ~18–22 nodes (ice algae, under-ice amphipods, Arctic cod, ringed seal, polar bear, bowhead, beluga, fisheries/harvest)
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 2 · story 3 · geography 1 · cost 2 · recognition 2 = **10**
- **Tier:** 2 · **Notes:** The purest ice-dependence story in the sweep — ice algae → Arctic cod → ringed seal → polar bear, with documented 1993 climatological and 1998 biological tipping points and subsistence harvest as an explicit node. Held at Tier 2 until matrix access is confirmed (thesis-derived model; parameter tables must be checked at verification).

### Hudson Bay, Canada — `hudson-bay`
- **Biome / Region:** Sub-Arctic inland sea · N. America (Canada) · **Lat/Lng (approx):** 57.0, −85.0
- **Source:** Hoover, C. et al. (2013). Effects of hunting, fishing and climate change on the Hudson Bay marine ecosystem (parts I–II). *Ecological Modelling* — Ecopath model 1970–2009 with environmental forcing; future-scenario simulations project extirpation risk for narwhal, eastern beluga, polar bear and walrus under combined harvest + ice-loss scenarios.
- **Data access:** ASSUMED (moderate) — journal articles; diet matrix in supplements to be confirmed at verification.
- **Raw size:** several dozen functional groups · **Aggregation plan:** → ~18–22 nodes
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 2 · story 3 · geography 2 · cost 2 · recognition 2 = **11**
- **Tier:** 2 · **Notes:** The ice-algae→benthos→spring-bloom→pelagic regime shift is the clearest mechanistic "what climate change does to a food web" narrative in the Arctic literature. Just misses Tier 1 on data verification; narwhal + beluga + polar bear in one web is strong audience pull.

### West Greenland shelf — `west-greenland-shelf`
- **Biome / Region:** Sub-Arctic shelf (Atlantic) · N. Atlantic (Greenland) · **Lat/Lng (approx):** 66.0, −53.0
- **Source:** Pedersen, S.A. & Zeller, D. — A mass balance model for the West Greenland marine ecosystem (Ecopath, 1997 conditions; 0–1,500 m). Feeds the newer Baffin Bay community model (see appendix).
- **Data access:** ASSUMED (moderate) — older model; matrix access to be confirmed at verification.
- **Raw size:** several dozen groups · **Aggregation plan:** → ~18–22 nodes (shrimp, Greenland halibut, cod, capelin, sandeel, Calanus copepods, seals, whales)
- **Data type:** weighted (Ecopath) · **Provenance:** empirical (model)
- **Scores:** data 2 · story 2 · geography 3 · cost 2 · recognition 2 = **11**
- **Tier:** 2 · **Notes:** Best geography score in the sweep (Atlantic Arctic, far from all live pins). The story is the northern shrimp fishery and the post-cod-collapse regime — historically important but less dramatic than capelin. Access age is the risk.

---

## Appendix — recorded, not planned

### Baffin Bay coastal & shelf, Nunavut — `baffin-bay-coastal`
- ULaval / MEOPAR Ecopath technical report (open at corpus.ulaval.ca) — community co-created model with Qikiqtarjuaq for Inuit food security; adapted from the West Greenland model.
- **Appendix (provenance/preliminary):** recent technical report, parameters still evolving through community co-creation; revisit once the peer-reviewed version and stable diet matrix appear. The co-creation angle is notable for future outreach.

### Western Bering Sea shelf, Russia — `western-bering-sea`
- Aydin et al. — WBS Ecopath model built for the EBS/WBS comparison (open PDF, same TM lineage).
- **Appendix (geography/overlap):** same family and lineage as the EBS candidate; cephalopod-nexus structure is interesting but a second Bering pin is not justified while the Arctic is otherwise empty.

---

## Rejected in sweep

- **Kara Sea / Laptev Sea / East Siberian Sea** — no resolved published food web or Ecopath model surfaced; only qualitative ecosystem descriptions (ice-meiofauna communities, Arctic cod under ice). Recorded as a data gap: the Russian Arctic is the empty quadrant of this biome.
- **Central Arctic Ocean basin** — no resolved food web; observational effort is plankton-focused. Data gap.
- **Disko Bay plankton webs (W. Greenland)** — PhD-level grazing studies, not a resolved community web; parts-bin only.
- **Antarctic systems** — deliberately out of scope: Weddell Sea is live, and the deep-sea sweep already recorded East Scotia Ridge vents.
