# Region: Arctic marine (sub-Arctic to High Arctic seas)

Researched 2026-10. Stage-1 research sweep (see ECOSYSTEMS.md §5 for scoring rubric).

Scope: the Arctic Ocean and its marginal seas plus sub-Arctic gateways (Bering, Barents, Baffin/Labrador, Hudson Bay, Greenland shelf). Terrestrial Arctic (tundra food webs) was already covered by `research/tundra-boreal.md`. Southern Ocean is excluded — Weddell Sea is live.

Note on "Arctic": several candidate systems (Eastern Bering Sea, West Greenland shelf) are technically sub-Arctic / Arctic-adjacent; they are included because the sweep treats the whole polar-marine belt and because the Bering Sea is the Pacific gateway to the Arctic.

**Sweep log (queries + results):**

1. `Ecopath Arctic Ocean ecosystem model` → broad review: 45+ published Ecopath models of Arctic/sub-Arctic systems exist (Aydin & Mueter 2007 synthesis, plus later work). Identified the major Ecopath hubs: Barents Sea, Eastern Bering Sea, Gulf of Alaska, Chukchi/Beaufort, Hudson Bay, West Greenland, Canadian Beaufort, Baffin Bay.
2. `Barents Sea Ecopath model trophic structure` → **Blanchard, Pinnegar & Mackinson (2002)**, CEFAS Technical Report 117: "Exploring marine mammals-fisheries interactions using Ecopath with Ecosim: the Barents Sea" — open-access CEFAS PDF. 41 functional groups, calibrated for 1990/1995; cod–capelin–herring dynamics. Plus **Pedersen et al. (2021, Frontiers in Marine Science)** updated Barents Sea model (open access). Strong node-data fit.
3. `Eastern Bering Sea ecosystem model Aydin 2007` → **Aydin et al. (2007)**, NOAA Technical Memorandum NMFS-AFSC-178: "Ecosystem modeling of the Eastern Bering Sea" — NOAA open PDF. 148 functional groups, trophic level up to 6; diet tables in appendices. Very aggregable.
4. `Chukchi Beaufort Sea food web Ecopath` → **Whitehouse et al. (2014)** and **Whitehouse & Aydin (2016)**: Eastern Chukchi Sea Ecopath model (NOAA AFSC, open report). Also **Suprenand et al.** (NOAA/USF) Beaufort Sea EwE model 1970–2014, open report via USF Digital Commons. Both benthic-dominated, strong ice dependence.
5. `Hudson Bay Ecopath model` → **Hoover et al. (2013, 2016)** ArcticNet / University of Manitoba: Hudson Bay marine ecosystem EwE models; thesis series openly accessible (UM space). Ice-algae-to-mammals chain; regime-shift story.
6. `West Greenland shelf Ecopath` → **Pedersen & Zeller (2001)** UBC Fisheries Centre report "A mass balance model for the West Greenland marine ecosystem" (Sea Around Us archive, open PDF). Post-cod-collapse regime story.

**Cross-sweep reference:** Weddell Sea (live) is the Antarctic counterpart — users can compare polar marine webs if one of these ships.

**Best practice notes:**
- All top candidates are **mass-balance (Ecopath) models** — that means every node has biomass and diet matrix fractions. This is the single best source type for this project (maps 1:1 onto the 0.001–0.01 edge-weight format).
- Ecopath functional groups are abundant (40–150) — heavy aggregation to 15–25 nodes is needed but mechanically straightforward (collapse by trophic level and taxonomic affinity).
- Ice (sea ice → ice algae) is a first-class node in Arctic webs and a distinctive story hook (the "ice algae" start of the chain) — no live web features it.

---

## Tier 1 — ready for curation

### barents-sea — Barents Sea cod–capelin system

**Sources:**
- **Blanchard, J.L., Pinnegar, J.K. & Mackinson, S. (2002).** Exploring marine mammals–fisheries interactions using Ecopath with Ecosim: the Barents Sea. *CEFAS Technical Report 117*. Open-access PDF (CEFAS). 41 functional groups; models calibrated to 1990 and 1995; full diet matrix; includes fisheries (trawlers) and marine mammals (minke whale, harp seal).
- **Pedersen, E.J. et al. (2021).** An updated ecosystem model for the Barents Sea. *Frontiers in Marine Science* 8. Open access. Updated mass-balance model; good for modern node set.
- Norwegian-Russian Barents Sea capelin–cod monitoring literature (Gjøsæter et al.; ICES surveys) for species lists.

**Status:** found + assumed-accessible (CEFAS reports and Frontiers are open access).

**Aggregation feasibility:** very high. 41 groups collapse naturally to ~18 nodes: cod; capelin; herring; polar cod (Arctic speciality); haddock; redfish; long rough dab / other flatfish; Greenland halibut; minke whale; harp seal; harp/other pinnipeds grouped; seabirds (kittiwake, puffin, guillemot); zooplankton (Calanus spp.); krill/amphipods (Thysanoessa); benthos; demersal fish (misc); detritus; phytoplankton; ice algae; fishery. Each Ecopath group has biomass + diet fractions directly usable as edge weights.

**Data quality:** 3 — calibrated mass-balance model with published diet matrix; multiple eras (1990/1995) allow a "regime" variant later.
**Story clarity:** 3 — textbook "capelin collapse → cod starvation → seabird failure" wasp-waist trophic cascade; the Barents Sea is one of the world's best-documented marine cascades; polar cod vs capelin alternation is climate-linked (Atlantification).
**Geography:** 2 — Arctic is new (no live Arctic web), but Norway-area is adjacent to UK shelf (live North Sea-ish? No — live marine are PWS and Weddell; check: live marine = PWS (Alaska) + Weddell (Antarctica)) → effectively new region; slightly docked because sub-Arctic Atlantic could compete with a future North Sea candidate.
**Build cost:** 2 — open model tables; aggregation well-defined.
**Name recognition:** 2 — Barents Sea is known to marine-science audiences; capelin–cod collapse taught in fisheries courses.
**Total: 12 (Tier 1).**

---

## Tier 2 — needs a decision before building

### eastern-bering-sea — Eastern Bering Sea shelf

**Sources:**
- **Aydin, K.Y. et al. (2007).** Ecosystem modeling of the Eastern Bering Sea. NOAA Technical Memorandum NMFS-AFSC-178. Open PDF. 148 groups incl. fisheries; appendices with full diet tables.
- **Whitehouse, G.A. & Aydin, K.Y. (2016).** Assessing the sensitivity of three Alaska marine food webs to perturbations. (Ecosystem / US Dept of Commerce) — comparative analysis of EBS, Gulf of Alaska, Aleutian models.

**Status:** found + assumed-accessible (NOAA tech memos are open).

**Aggregation feasibility:** very high mechanically (148 → 18–22 nodes: walleye pollock; Pacific cod; arrowtooth flounder; flathead sole; halibut; salmon (5 spp. or grouped); forage fish (capelin, herring, sand lance); euphausiids; large copepods; jellyfish; snow crab; Tanner crab; king crab; benthic infauna; Steller sea lion; northern fur seal; bearded seal; seabirds; orca; phytoplankton; ice algae; detritus; fishery).

**Data quality:** 3 — flagship NOAA model; enormous literature backing.
**Story clarity:** 2 — pollock-centric "fish factory" ecosystem; ice-edge bloom timing; oscillating control hypothesis (crab-vs-fish regime). Less folkloric than Barents collapse but scientifically rich.
**Geography:** 1 — penalized: Prince William Sound (Alaska) is already live; EBS is the same broad region (Alaskan shelf). Would add Alaska again.
**Build cost:** 1 — 148 groups is a LOT of aggregation; diet matrix huge; expect the most curation effort of any candidate.
**Name recognition:** 1 — Bering Sea has popular recognition (Deadliest Catch) but not as a food web.
**Total: 8–10 → 10 (Tier 2, borderline).** Downgrade risk: duplication with PWS; if a cleaner non-Alaskan Arctic candidate verifies at 12+, this drops.

### hudson-bay — Hudson Bay marine ecosystem

**Sources:**
- **Hoover, C. et al. (2013).** The ecosystem services and marine food web of Hudson Bay (ArcticNet / University of Manitoba theses and reports; Manitoba M.Sc. thesis open via UMspace). EwE model of the Hudson Bay System; ice-algae-based production; beluga, ringed seal, polar bear, anadromous chars.
- ArcticNet project reports (open).

**Status:** found + assumed-accessible (Canadian university open repositories).

**Aggregation feasibility:** high (~35–45 groups → ~16–18 nodes: polar bear; beluga; ringed seal; bearded seal; walrus (marginal); Arctic char; capelin; sand lance; Greenland cod; sculpins; ice algae; phytoplankton; zooplankton; benthos; seabirds (eider, guillemot); orca (increasing); detritus; fishery/community harvest).

**Data quality:** 2 — thesis-grade model, fewer calibrations than NOAA; uncertainty high in parts.
**Story clarity:** 3 — longest ice-season ecosystem under direct climate regime shift; "the Mediterranean of the Arctic" losing its ice; beluga + polar bear + community harvest = strong human dimension; sea-ice-algae node as web's foundation is a signature hook.
**Geography:** 2 — Canadian Arctic, new continent-scale region for marine; different from both live marine webs.
**Build cost:** 2 — thesis PDFs are well-organized; moderate effort.
**Name recognition:** 2 — Hudson Bay has name recognition (HBC, polar bears of Churchill).
**Total: 11 (Tier 2, high).**

### beaufort-sea — Canadian/US Beaufort Sea

**Sources:**
- **Suprenand, P.M. et al.** Ecopath with Ecosim model of the Beaufort Sea (1970–2014). University of South Florida / NOAA report — open via USF Digital Commons.
- Bellman et al. / Arctic Eis (Arctic Ecosystem Integrated Survey) NOAA program outputs.

**Status:** found + assumed-accessible.

**Aggregation feasibility:** moderate (~50 groups → 15–20 nodes: polar cod (keystone); Arctic cod; capelin; Arctic char; beluga; bowhead whale; ringed seal; bearded seal; polar bear; seabirds; ice algae; phytoplankton; copepods; euphausiids; benthos (bivalves, amphipods); detritus; fishery (minimal/subsistence)).

**Data quality:** 2 — real EwE model but the Beaufort is among the most data-poor Arctic shelves; many groups estimated.
**Story clarity:** 3 — polar cod as THE keystone species (single-species wasp waist); ice-dependent production; bowhead recovery story; oil-and-gas tension.
**Geography:** 2 — Alaskan/Canadian Arctic — partial overlap with PWS (Alaska) penalty, but High Arctic is distinct.
**Build cost:** 2 — open report; moderate aggregation.
**Name recognition:** 1 — low popular recognition.
**Total: 10 (Tier 2).**

### eastern-chukchi-sea — Eastern Chukchi Sea

**Sources:**
- **Whitehouse, G.A. & Aydin, K.Y. et al. (2014/2016).** Eastern Chukchi Sea Ecopath model. NOAA AFSC open reports; comparative food-web analysis with EBS and Gulf of Alaska.

**Status:** found + assumed-accessible.

**Aggregation feasibility:** moderate-high (~40 groups → 15–18 nodes; benthic-dominated: clams, amphipods; walrus; gray whale feeding; bearded seal; polar cod; seabirds; ice algae; phytoplankton; copepods; euphausiids; detritus; subsistence fishery).

**Data quality:** 2 — NOAA-quality but genuinely data-poor region; model acknowledged to be uncertain.
**Story clarity:** 2 — benthic-pelagic coupling; gray whale + walrus benthic feeding; Pacific inflow gateway. Good science story, less punch than Barents/Hudson.
**Geography:** 2 — Alaskan Arctic; some PWS-region overlap penalty.
**Build cost:** 2.
**Name recognition:** 1.
**Total: 9 (Tier 2).**

### west-greenland-shelf — West Greenland marine ecosystem

**Sources:**
- **Pedersen, S.A. & Zeller, D. (2001).** A mass balance model for the West Greenland marine ecosystem. UBC Fisheries Centre Research Reports (Sea Around Us open archive).
- Later updates in the Sea Around Us / DTU Aqua literature.

**Status:** found + assumed-accessible (UBC archive is open).

**Aggregation feasibility:** moderate (~30 groups → 15 nodes: cod (collapsed stock); Greenland halibut; redfish; shrimp (Pandalus borealis — the post-cod dominant); capelin; polar cod; harp seal; hooded seal; minke/fin whales; seabirds; benthos; zooplankton; phytoplankton; ice algae; detritus; fishery).

**Data quality:** 2 — 2001-era model; old calibration, but the cod-collapse regime is well documented elsewhere.
**Story clarity:** 3 — the clearest "regime shift" story in the North Atlantic: cod collapse (overfishing + cold period) → shrimp takeover; direct fishing-policy lesson.
**Geography:** 3 — Greenland/Atlantic Arctic, entirely new region for the project.
**Build cost:** 2 — compact old model; easy aggregation.
**Name recognition:** 1 — low.
**Total: 11 (Tier 2, high).**

---

## Appendix — recorded but gated out

### baffin-bay-coastal — Baffin Bay / Canadian Eastern Arctic coastal web
- Source: Université Laval / MEOPAR technical reports (community co-created EwE models, e.g. Qikiqtarjuaq region). Real models exist but are preliminary and partially community-knowledge based.
- Gated by: data confidence (provenance mixed: published + grey + community knowledge). Revisit if a clean published Baffin model appears.

### western-bering-sea — Western Bering Sea (Russian side)
- Source: exists in comparative literature (Whitehouse & Aydin 2016 reference a Russian-side model; Aydin & Mueter 2007).
- Gated by: geography/overlap — EBS is the stronger representative of the Bering system; WBS would duplicate. Revisit only if EBS is rejected and a Russian-side angle is wanted.

---

## Rejected this sweep

- **Kara / Laptev / East Siberian seas** — no resolved published food-web models found; Russian Arctic data gap. Recorded as a genuine gap, not a candidate.
- **Central Arctic Ocean basin** — too data-poor; no mass-balance model exists (only conceptual diagrams).
- **Antarctic systems** — out of scope (Weddell Sea live).
- **Disko Bay (Greenland) plankton-focused webs** — exist as partial plankton networks; parts-bin risk, not a full food web.
