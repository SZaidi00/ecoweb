# Region: North America — Great Plains interior (gap-fill sweep)
**Researched:** 2026-11 · **Status:** complete (Stage 1 — awaiting verification)

**Repo context at sweep time:** 10 webs live; biome saturation: freshwater 3 (saturated — hard gate for streams/lakes), marine 3, grassland 2, estuary 1, wetland 1. North America holds 6 of 10 pins (Chesapeake, Little Rock, Tuesday, Cypress, Shortgrass, PWS) — geography scores penalized throughout, per prior sweep convention. **Scope note (boundaries):** Yellowstone/montane → `researched/north-america.md` (`yellowstone-composite`); shortgrass steppe already live (`shortgrass-prairie`); Alaska → tundra-boreal / arctic-marine sweeps; Sonoran & Chihuahuan desert and Gulf of California → desert sweep; prairie streams/rivers → freshwater-saturation gate. This sweep covers the interior grassland–wetland belt from the Texas/Oklahoma panhandles to the Canadian prairie provinces.

**Sweep log:**
- **Netzschleuder** (full network index via API): relevant entries only `grassland_web` (= Dawah et al. 1995, UK — already recorded in Europe sweep), `sanak_food_webs` and `alaska_subsistence` (Alaska — excluded by scope). No plains-interior web indexed.
- **EcoBase**: landing page fetched (234 models downloadable; EwE mass-balance requires aquatic production data → no terrestrial plains model expected). SOAP endpoint unreachable from sweep environment; map-based discovery not completed — flagged for Stage 2 if needed.
- **Web of Life**: API endpoint (`/api/v1/networks`) 404 this sweep; prior sweep established the classic NA webs live there are freshwater-gated. Not re-counted.
- **Mangal** API (`ecosystem_type=terrestrial`) JS-rendered, fetch failed; **GloBI** not queried (link-level records only; §8 mega-web exclusion stands). Prior sweeps covered both for NA classics.
- **Ecopath publications**: query "Ecopath with Ecosim grassland OR prairie ecosystem model diet matrix" → 0 terrestrial plains models; all hits aquatic (Louisiana coastal marsh CPRA docs, generic EwE methods).
- **Primary literature** (queries logged): "prairie pothole wetland food web trophic model published" → Hanson & Butler 1994 (biomanipulation, shallow prairie lake, CJFAS 51:1180–1188), Hanson & Riggs 1995 (fathead-minnow exclusion, Wetlands 15:167–175), Batzer & Wissinger prairie-wetland chapters — all process/experiment studies, no link matrix. "tallgrass prairie food web published matrix" → Konza/LTER interaction-plot studies only (confirms prior sweep's Konza rejection). "mixed-grass prairie food web" → arthropod predation studies; one unretrieved lead: an article cited as *Food Webs* 31:e00224 re mixed-grass prairie. "playa lake food web" → Hall et al. 2004 (Wetlands 24:77–91, diversity only), Yee et al. 2005 (Hydrobiologia 541:139–148, microcosm). "Delta Marsh Manitoba food web" → Kowal et al. 2022 (Front. Environ. Sci. 10:992690, open — common-carp exclusion → clarity/SAV recovery), Sandilands 2000 & Badiou theses (open via Library & Archives Canada / MSpace) — cascade evidence without a published matrix. "Chaplin Lake / Quill Lakes food web" → IBA Canada conservation plan (open PDF, brine-shrimp food-web account), De Silva/McKellar/Morrissey 2022–23 conference abstracts (U. Saskatchewan, brine-shrimp production vs sanderling foraging), Wilson's phalarope ESA petition (Mono Lake Committee PDF summarizing saline-lake food webs). "macrophyte inputs to food webs of inland saline wetlands" → pinned Hart & Lovvorn 2003, *Ecology* 84(12):3317–3326, DOI 10.1890/02-0629; citing literature places it in the north-central inland-saline-wetland canon alongside Andrei & Smith 2008 (J. Wildl. Manage., DOI 10.2193/2007-144 — "saline lakes of the northern Great Plains") and a 2022 *Ecosystems* model paper (DOI 10.1007/s10021-022-00768-3 — Rocky Mountain basin, out of sub-region).

---

## Tier 1 — build next

*(none — no candidate clears the 12-point bar with North America's geography penalty; see Sweep findings)*

---

## Tier 2 — backlog

### Great Plains saline wetlands (inland saline-lake belt) — `great-plains-saline-wetlands`
- **Biome / Region:** Saline wetland / endorheic lake · N. America (Great Plains interior: southern SK–ND–MT belt; exact system pinned at Stage 2) · **Lat/Lng (approx):** 49.0, −105.0 (±3°, pending Stage 2 pin)
- **Source:** Hart, E.A. & Lovvorn, J.R. (2003). Algal vs. macrophyte inputs to food webs of inland saline wetlands. *Ecology* 84(12):3317–3326 — DOI 10.1890/02-0629; plus Andrei, A.E. & Smith, L.M. (2008), *J. Wildl. Manage.* — DOI 10.2193/2007-144 (shorebird–prey links, "saline lakes of the northern Great Plains"). No single consolidated matrix exists → build would be a labelled composite across these two sources (Weddell-sea precedent).
- **Data access:** ASSUMED — both papers published; Hart & Lovvorn is isotope/gut-based dietary-source work (consumer × resource assignments expected in tables); Andrei & Smith lists prey use by shorebird species. Neither matrix downloaded this sweep.
- **Raw size:** tens of invertebrate taxa (brine shrimp *Artemia*, brine flies, chironomids, corixids) + waterfowl/shorebirds (10–20 species) across sources · **Aggregation plan:** → ~18–22 nodes (salinity-tolerance functional groups: microalgae/detritus → brine shrimp & brine-fly guilds → migrant shorebirds/avocets/phalaropes; carp/minnow turbidity cascade as optional fish nodes)
- **Data type:** mixed (isotope-derived qualitative + gut-content links) · **Provenance:** composite (two-source assembly, labelled)
- **Scores:** data 2 · story 2 · geography 1 · cost 2 · recognition 1 = **8**
- **Tier:** 2 · **Notes:** The only resolved-web pathway this sweep found for the plains interior. Cascade hook: hypersalinity excludes fish → brine shrimp/brine flies bloom → half a million migrant shorebirds refuel; remove the invertebrate node and the flyway starves. Honesty angle built in (Hart & Lovvorn is literally about which basal source — algal vs macrophyte — fuels the web). Geography score 1 is structural (6 NA pins already); the wetland/saline flavor is new. If Stage 2 finds Hart & Lovvorn alone resolves a single system, promote to empirical and re-score.

---

## Appendix — recorded, not planned

### Delta Marsh (Manitoba) carp–turbidity cascade — `delta-marsh-carp-cascade`
- Source: Kowal, P.D. et al. (2022). Improvements in water clarity and SAV cover after exclusion of invasive common carp, Delta Marsh. *Front. Environ. Sci.* 10:992690 — open; plus Sandilands, K. (2000) MSc thesis (fathead-minnow × nutrient experiments, Library & Archives Canada) and Badiou, P.H.J. thesis (large experimental wetlands, MSpace).
- **Appendix (composite path):** North America's largest freshwater coastal wetland (18,500 ha, 50.2, −98.2) with a dramatic, measured trophic cascade (carp exclusion → clarity → SAV → invertebrate/waterfowl recovery) — but no published link matrix; buildable only as a labelled composite. Promote if composite scoping is opened (Weddell precedent) — story score would be 3.

### Chaplin–Old Wives–Reed saline lakes (Saskatchewan) — `chaplin-saline-lakes`
- Source: IBA Canada conservation plan for the Chaplin/Old Wives/Reed Lake complex (open PDF — brine-shrimp food-web account); De Silva, McKellar & Morrissey 2022–23 U. Saskatchewan symposium abstracts (brine-shrimp production vs sanderling foraging at Chaplin Lake); Wilson's phalarope ESA petition (Mono Lake Committee PDF — saline-lake food-web synthesis).
- **Appendix (grey literature):** hemispherically important shorebird staging site with a genuine two-step cascade (sodium-sulfate water management → brine shrimp → phalaropes/sanderlings), but no peer-reviewed web matrix. Revisit if the De Silva work publishes.

### Rocky Mountain basin saline wetlands (Ecosystems 2022) — `rocky-mountain-saline-wetlands`
- "Modeling Patterns and Controls of Food Web Structure in Saline Wetlands of a Rocky Mountain Basin", *Ecosystems* (2022) — DOI 10.1007/s10021-022-00768-3.
- **Appendix (out of sub-region scope):** intermountain-basin system; recorded here for the methods; better placed in a future Mountain West sweep.

### Black-tailed prairie-dog colony web — `prairie-dog-colony-web`
- Parker, R.A. et al. (2019). Trophic Ecology Warrants Multispecies Management in a Grassland Setting: Proposed Species Interactions on Black-tailed Prairie Dog Colonies — open PDF (Bird Conservancy of the Rockies).
- **Appendix (provenance gate):** links are *proposed* (expert-elicited), not measured — fails the empirical gate as recorded (cf. `balbina-forest-islands` rejection). Prairie dogs as keystone would be a great cascade story if a measured colony web surfaces.

### Mixed-grass prairie arthropod web — `mixed-grass-arthropod-web`
- Lead cited as "*Food Webs* (journal) 31:e00224" re mixed-grass prairie in Cambridge-core citing literature; article not retrieved this sweep.
- **Appendix (unretrieved lead):** re-run target; if resolved it would be a true terrestrial grassland web (biome at 2/3 has one slot).

---

## Rejected in sweep

- **Konza Prairie / tallgrass LTER (again)** — second consecutive sweep returns plant–herbivore interaction studies (mycorrhizal, spider, grasshopper work) but no published link matrix. Lead stays closed unless a matrix surfaces.
- **Prairie-pothole minnow/plankton experiments** (Hanson & Butler 1994 CJFAS 51:1180–1188; Hanson & Riggs 1995 Wetlands 15:167–175) — classic whole-wetland manipulations, but process studies with no link matrix (same class as the Okavango rejection). Recorded as cascade-support literature for any future pothole composite.
- **Playa-lake invertebrate studies** (Hall et al. 2004 Wetlands 24:77–91; Yee et al. 2005 Hydrobiologia 541:139–148) — diversity and microcosm work; no web.
- **GloBI/Mangal/Netzschleuder raw mega-webs** — §8 exclusion stands (100+ species; no curated composite explicitly scoped).

---

## Sweep findings

- The Great Plains interior is genuinely web-poor: the classic canon holds no resolved grassland food web for the entire region (confirming §2's terrestrial bias). Realistic builds are (a) the saline-wetland composite above, or (b) a future composite scoping effort (Delta Marsh / pothole cascade literature) under the Weddell precedent.
- Freshwater biome is saturated (3/3 live) — any future plains *lake* web needs a slot to open or a wetland/estuary badge.
