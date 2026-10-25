# Ecosystem Candidates — research ledger

Tracks every ecosystem considered for the Food Web Explorer, across all three stages:
research → verify → implement. The single source of truth for pipeline state.

**Columns:**
- **Candidate** — proposed ID and one-line description
- **Tier** — from research (Tier 1 = build-now quality, Tier 2 = needs a decision, appendix = recorded but rejected for now)
- **Stage 1 (Research)** — status + research file
- **Stage 2 (Verify)** — verdict + verification file
- **Stage 3 (Implement)** — status + web file + web_id + pipeline provenance (builder, model, model_id, date) for reproducibility tracking

Statuses: `researched` · `verified` · `failed` · `implemented` · `live`

---

## Candidate ledger

| Candidate | Tier | Stage 1 — Research | Stage 2 — Verify | Stage 3 — Implement |
|---|---|---|---|---|
| **Magellan Strait fjords** — Chilean Patagonia fjord web; trophic-baseline paper (Riccialdelli et al. 2017); new continent, fjord biome | 1 | verified — verified/south-america.md | verified — verified/south-america.md | **implemented — data/webs/magellan-strait.json** (web_id: magellan-strait) |
| **Prince William Sound** — Alaska post-spill web; Ecopath model (Okey & Pauly 1999); 22 nodes, 51 sources | 1 | researched — research/south-america.md (flagged) | verified | **implemented — data/webs/prince-william-sound.json** (web_id: prince-william-sound) |
| **Weddell Sea** — Antarctic krill-centric web; 26-source literature synthesis; extreme climate story | 1 | researched — research/south-america.md (flagged) | verified | **implemented — data/webs/weddell-sea.json** (web_id: weddell-sea) |
| **Florida Everglades** — Florida Bay + Everglades Ecopath (Ulanowicz et al. 2002); wading-bird cascade | 1 | researched — research/south-america.md (flagged) | verified | **implemented — data/webs/florida-everglades.json** (web_id: florida-everglades) |
| **Pantanal** — Brazilian flood-pulse wetland; MUSICA dashboard (Tomas et al. 2019); hydrology-driven | 1 | verified — verified/south-america.md | verified — verified/south-america.md | **implemented — data/webs/pantanal.json** (web_id: pantanal) |
| **Serengeti** — Tanzania savanna; Serengeti III (de Ruiter et al. 1995); wildebeest migration | 1 | researched — research/south-america.md (flagged) | verified | **implemented — data/webs/serengeti.json** (web_id: serengeti) |
| **Chesapeake Bay** — Chesapeake Bay Program model; Atlantic menhaden focal node; eutrophication story | 2 | researched — research/south-america.md (flagged) | verified | **implemented — data/webs/chesapeake-bay.json** (web_id: chesapeake-bay) |
| **Cape Floristic Region** — South African fynbos; pollinator webs; mutualist, not predator-prey | 2 | verified — verified/south-america.md (flagged wrong-region) | verified — verified/south-america.md | **implemented — data/webs/cape-fynbos.json** (web_id: cape-fynbos) |
| **Paraná River floodplain** — upper Paraná (Brazil/Paraguay); Luz-Agostinho et al. 2008 flood-pulse web; piscivore-omnivore dominance; flood pulse = ecosystem's heartbeat | 1 | verified — verified/south-america.md | verified — verified/south-america.md | **implemented — data/webs/parana-river.json** (web_id: parana-river) |
| caroni-swamp — Trinidad mangrove-freshwater interface (Kenny thesis; 18-node base web) | 2 | verified — verified/south-america.md | verified — verified/south-america.md | — |
| central-amazon-floodplain — várzea/igapó (Junk et al. 1997 synthesis; Central Amazon Floodplain book) | 2 | verified — verified/south-america.md | verified — verified/south-america.md | — |
| amazon-terra-firme — upland Amazon rainforest (many sources; aggregation-heavy) | 1 | researched — research/south-america.md | — | — |
| amazon-floodplain — várzea/igapó flood-pulse (Junk; seasonal fish migration) | 1 | researched — research/south-america.md | — | — |
| llanos — Venezuelan seasonal savanna (capypara-caiman; P. polium synthesis) | 2 | researched — research/south-america.md | — | — |
| galapagos-marine — Galápagos rocky reef (Wolff et al. 2012 Ecopath) | 1 | researched — research/south-america.md | — | — |
| malpelo — Malpelo Island pelagic (shark biomass) | 2 | researched — research/south-america.md | — | — |
| falkland — Falkland shelf (Baylis et al.; gentoo-squid-sealion) | 2 | researched — research/south-america.md | — | — |
| humboldt-current — Peru upwelling (anchoveta; Jarre-Teixeira 1998 Ecopath) | 2 | researched — research/south-america.md | — | — |
| patagonian-steppe — Argentine steppe (guanaco-puma) | 2 | researched — research/south-america.md | — | — |
| atacama-oasis — fog-oasis lomas | appendix (too sparse) | researched — research/south-america.md | — | — |
| valdivian-forest — Chilean temperate rainforest | appendix (parts-bin risk) | researched — research/south-america.md | — | — |
| pampas — Argentine grassland | appendix (disturbed; overlap with Serengeti) | researched — research/south-america.md | — | — |
| caatinga — Brazilian semi-arid scrub | appendix (data gap) | researched — research/south-america.md | — | — |
| beni-savanna — Bolivian flooded savanna | appendix (data gap) | researched — research/south-america.md | — | — |
| palau — Palau lagoon/reef (NEEMO; complex) | appendix (microbial-focus) | researched — research/coral-reefs.md | — | — |
| ningaloo — Ningaloo Reef, Australia (whale-shark; CSIRO) | 1 | researched — research/coral-reefs.md | — | — |
| heron-island — Heron Island, GBR (AIMS long-term; crown-of-thorns) | 1 | researched — research/coral-reefs.md | — | — |
| red-sea-reef — Eilat/Aqaba coral (heat-resistant corals) | 2 | researched — research/coral-reefs.md | — | — |
| maldives — Maldives atoll (bleaching 2016 story) | 2 | researched — research/coral-reefs.md | — | — |
| tubbataha — Tubbataha Reefs, Philippines (pristine no-take) | 2 | researched — research/coral-reefs.md | — | — |
| mesoamerican-reef — Belize barrier reef (grazer cascade) | 2 | researched — research/coral-reefs.md | — | — |
| raja-ampat — Raja Ampat, Indonesia (fish diversity) | appendix (aggregation risk) | researched — research/coral-reefs.md | — | — |
| caribbean-generic — Caribbean reef composite | appendix (too composite) | researched — research/coral-reefs.md | — | — |
| namib — Namib Desert (fog basking; dune food chains) | 1 | researched — research/desert.md | — | — |
| sonoran — Sonoran Desert (saguaro-nurse; packrat midden) | 1 | researched — research/desert.md | — | — |
| sahara — Sahara (fennec-addax; sparse but iconic) | 2 | researched — research/desert.md | — | — |
| gobi — Gobi (cold desert; khulan-snow leopard) | 2 | researched — research/desert.md | — | — |
| australian-outback — spinifex; dingo; pulsed boom-bust | 2 | researched — research/desert.md | — | — |
| atacama — Atacama lomas | appendix (too sparse — dup) | researched — research/desert.md | — | — |
| kalahari — Kalahari (meerkat-sociable weaver) | appendix (overlap w/ Namib) | researched — research/desert.md | — | — |
| hydrothermal-vent — East Pacific Rise vent (Riftia; sulfide symbiosis) | 1 | researched — research/deep-sea.md | — | — |
| whale-fall — Santa Cruz basin whale fall (mobile scavenger + sulphophilic stages) | 1 | researched — research/deep-sea.md | — | — |
| abyssal-plain — abyssal Pacific (holothurians; marine snow) | 2 | researched — research/deep-sea.md | — | — |
| seamount — seamount composite (deep coral gardens) | 2 | researched — research/deep-sea.md | — | — |
| hadal-trench — Mariana trench (amphipods; xenophyophores) | 2 | researched — research/deep-sea.md | — | — |
| cold-seep — Gulf of Mexico seep (tubeworms; methanotrophy) | 2 | researched — research/deep-sea.md | — | — |
| coral-generic-deep — deep-sea coral reef (Lophelia) | appendix (overlap w/ seamount) | researched — research/deep-sea.md | — | — |
| borneo-rainforest — Borneo dipterocarp forest (figs; orangutan; mast fruiting) | 1 | researched — research/tropical-terrestrial.md | — | — |
| daintree — Daintree, Australia (cassowary; Gondwanan relicts) | 1 | researched — research/tropical-terrestrial.md | — | — |
| congo-basin — Congo lowland forest (forest elephant; bonobo) | 2 | researched — research/tropical-terrestrial.md | — | — |
| madagascar-spiny — Madagascar spiny forest (lemur-radiated; baobab) | 2 | researched — research/tropical-terrestrial.md | — | — |
| cloud-forest — Monteverde cloud forest (quetzal; epiphytes) | 2 | researched — research/tropical-terrestrial.md | — | — |
| papua-forest — New Guinea (birds of paradise; tree kangaroo) | 2 | researched — research/tropical-terrestrial.md | — | — |
| atlantic-forest — Brazil Mata Atlântica (muriqui; fragmented) | appendix (overlap w/ amazon) | researched — research/tropical-terrestrial.md | — | — |
| sumatra — Sumatran peat swamp (tiger-orangutan; fire story) | appendix (parts-bin risk) | researched — research/tropical-terrestrial.md | — | — |
| svalbard-tundra — Svalbard high-Arctic tundra (polar bear; fox-goose; short chain) | 1 | researched — research/tundra-boreal.md | — | — |
| canadian-arctic — Canadian High Arctic (muskox-wolf; Lake Hazen) | 1 | researched — research/tundra-boreal.md | — | — |
| boreal-forest — boreal taiga (spruce-hare-lynx cycle; 10-year cycle) | 1 | researched — research/tundra-boreal.md | — | — |
| kamchatka — Kamchatka volcanic tundra (bear-salmon) | 2 | researched — research/tundra-boreal.md | — | — |
| greenland-tundra — NE Greenland (muskox; Zackenberg long-term) | 2 | researched — research/tundra-boreal.md | — | — |
| scots-pine — Scottish Caledonian pinewood (capercaillie; rewilding) | 2 | researched — research/tundra-boreal.md | — | — |
| siberian-taiga — Siberian boreal | appendix (data gap) | researched — research/tundra-boreal.md | — | — |
| alpine-tundra — alpine fell-field | appendix (overlap w/ tundra) | researched — research/tundra-boreal.md | — | — |
| salt-marsh — NW European salt marsh (Wadden Sea; oystercatcher; eelgrass) | 1 | researched — research/europe.md | — | — |
| iberian-dehesa — dehesa oak-pasture (Iberian lynx; acorn-web) | 1 | researched — research/europe.md | — | — |
| danube-delta — Danube Delta (pelicans; fish-reed beds) | 1 | researched — research/europe.md | — | — |
| camargue — Camargue wetland (flamingo; brine shrimp) | 2 | researched — research/europe.md | — | — |
| bialowieza — Białowieża primeval forest (bison; wolf-lynx return) | 2 | researched — research/europe.md | — | — |
| alps-alpine — Alpine meadow-ibex web (ibex; bearded vulture) | 2 | researched — research/europe.md | — | — |
| lake-geneva — peri-alpine lake (perch-pike; eutrophication history) | 2 | researched — research/europe.md | — | — |
| moorland — UK upland moor (grouse-hen harrier conflict) | appendix (overlap w/ existing) | researched — research/europe.md | — | — |
| hedge-network — UK hedgerow (dormouse; ancient network) | appendix (parts-bin) | researched — research/europe.md | — | — |
| kakadu — Kakadu monsoon savanna (magpie geese; crocodile; fire) | 1 | researched — research/australia-oceania.md | — | — |
| great-dividing — Great Dividing Range wet sclerophyll (koala; gliders) | 1 | researched — research/australia-oceania.md | — | — |
| fiordland — Fiordland temperate rainforest + fjord (kea; kākāpō conservation) | 1 | researched — research/australia-oceania.md | — | — |
| mallee — Mallee woodland (malleefowl; spinifex) | 2 | researched — research/australia-oceania.md | — | — |
| hawaii-rainforest — Hawaiian rainforest (honeycreepers; invasive cascade) | 2 | researched — research/australia-oceania.md | — | — |
| new-caledonia — New Caledonia ultramafic (kagu; endemic radiation) | 2 | researched — research/australia-oceania.md | — | — |
| great-barrier-island — NZ offshore island sanctuary (tuatara; seabirds) | 2 | researched — research/australia-oceania.md | — | — |
| tasmania — Tasmanian temperate (devil; quolls) | appendix (data gaps post-disease) | researched — research/australia-oceania.md | — | — |
| pilbara — Pilbara arid NW Australia | appendix (data gap) | researched — research/australia-oceania.md | — | — |
| okavango — Okavango Delta (flood-pulse wetland; painted wolf; sitatunga) | 1 | researched — research/africa.md | — | — |
| virunga — Virunga montane (mountain gorilla; bamboo) | 1 | researched — research/africa.md | — | — |
| ethiopian-highlands — Ethiopian highlands (gelada; Ethiopian wolf; giant mole-rat) | 1 | researched — research/africa.md | — | — |
| lake-malawi — Lake Malawi cichlid radiation (mbuna; usipa) | 2 | researched — research/africa.md | — | — |
| niassa — Niassa miombo woodland (wild dog; miombo) | 2 | researched — research/africa.md | — | — |
| banc-darguin — Banc d'Arguin, Mauritania (shorebird fish-trap web) | 2 | researched — research/africa.md | — | — |
| lake-turkana — Lake Turkana (Nile perch; crocodile; wind-driven) | 2 | researched — research/africa.md | — | — |
| madagascar-dry — Madagascar dry deciduous (fossa) | appendix (overlap w/ spiny) | researched — research/africa.md | — | — |
| miombo-generic — generic miombo | appendix (data gap) | researched — research/africa.md | — | — |
| kelp-forest — Monterey/kelp forest (sea otter-urchin cascade; classic) | 1 | researched — research/north-america.md | — | — |
| longleaf-pine — longleaf pine savanna (gopher tortoise keystone; red-cockaded) | 1 | researched — research/north-america.md | — | — |
| arctic-npr-a — Arctic coastal plain tundra (lemming-snowy owl; NPR-A) | 2 | researched — research/north-america.md | — | — |
| saguaro — Saguaro NP Sonoran (already covered by desert sweep) | appendix (dup of sonoran) | researched — research/north-america.md | — | — |
| everglades-ridge-slough — ridge-and-slough microtopography | appendix (too fine-grained) | researched — research/north-america.md | — | — |
| pacific-nw-forest — Pacific NW old-growth (spotted owl; salmon-forest link) | appendix (overlap w/ PWS marine) | researched — research/north-america.md | — | — |
| komodo — Komodo Island monsoon forest (Komodo dragon; Timor deer) | 1 | researched — research/asia.md | — | — |
| western-ghats — Western Ghats rainforest (lion-tailed macaque; hornbill-fig) | 1 | researched — research/asia.md | — | — |
| kaziranga — Kaziranga floodplain (rhino; tiger; Brahmaputra pulse) | 1 | researched — research/asia.md | — | — |
| sundarbans — Sundarbans mangrove (tiger-swimming; mudskipper) | 2 | researched — research/asia.md | — | — |
| himalayan-alpine — Himalayan alpine meadow (snow leopard; blue sheep) | 2 | researched — research/asia.md | — | — |
| siberian-crane-wetland — Poyang Lake crane wetland (wintering waterbirds) | 2 | researched — research/asia.md | — | — |
| japan-temperate — Japanese beech forest (sika deer overbrowse story) | appendix (parts-bin) | researched — research/asia.md | — | — |
| bohai-sea — Bohai Sea (heavily fished; jellyfish regime) | appendix (data access) | researched — research/asia.md | — | — |
| santa-barbara-kelp — Santa Barbara Channel kelp forest (SBC LTER open data; otter-urchin cascade) | 1 | researched — researched/north-america.md | — | — |
| narragansett-bay — Narragansett Bay estuary (55-yr plankton series; warming regime shift) | 2 | researched — researched/north-america.md | — | — |
| sanak-intertidal — Sanak Island intertidal, Alaska (101-taxa network; marine lake model) | 2 | researched — researched/north-america.md | — | — |
| yellowstone-composite — Yellowstone wolf reintroduction composite (risk of built-not-found) | 2 (high curation risk) | researched — researched/north-america.md | — | — |
| mississippi-delta — Mississippi Delta marsh-hypoxia (dead zone story) | appendix (data gap for food web) | researched — researched/north-america.md | — | — |
| great-salt-lake — Great Salt Lake (brine shrimp-phalarope; terminal lake) | appendix (parts-bin risk) | researched — researched/north-america.md | — | — |
| cypress-swamp — SE US cypress-tupelo swamp | appendix (data gap) | researched — researched/north-america.md | — | — |
| tallgrass-prairie — tallgrass prairie (Konza LTER) | appendix (overlap w/ Serengeti/grassland) | researched — researched/north-america.md | — | — |
| barents-sea | Arctic marine — Barents Sea (Ecopath, cod–capelin cycle) | 1 | researched — researched/arctic-marine.md | — | — |
| eastern-bering-sea | Arctic marine — E. Bering Sea shelf (Ecopath, pollock) | 2 | researched — researched/arctic-marine.md | — | — |
| hudson-bay | Arctic marine — Hudson Bay (Ecopath, ice-algae regime shift) | 2 | researched — researched/arctic-marine.md | — | — |
| west-greenland-shelf | Arctic marine — West Greenland (Ecopath, post-cod regime) | 2 | researched — researched/arctic-marine.md | — | — |
| beaufort-sea | Arctic marine — Beaufort Sea (EwE 1970–2014, ice dependence) | 2 | researched — researched/arctic-marine.md | — | — |
| eastern-chukchi-sea | Arctic marine — E. Chukchi Sea (Ecopath, benthic-dominated) | 2 | researched — researched/arctic-marine.md | — | — |
| baffin-bay-coastal | Arctic marine — Baffin Bay (Ecopath tech report, co-created) | appendix (provenance/preliminary) | researched — researched/arctic-marine.md | — | — |
| western-bering-sea | Arctic marine — W. Bering Sea (Ecopath comparison) | appendix (geography/overlap) | researched — researched/arctic-marine.md | — | — |

---

## Notes

- "Assumed accessible" in a research file means the source is a known open publication or repository, but the file itself has not yet been downloaded and checked by the verifier.
- Tier assignments come from the scoring rubric in the research skill (data quality, story clarity, geographic fit, build cost, name recognition; 1–3 each).
- Appendix rows are kept for the record — they were considered and rejected at the research stage, with the reason in parentheses.
