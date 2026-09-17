# Data pipeline

Python scripts that convert published food-web datasets into our `EcosystemWeb` JSON format and validate the results against the schema in `packages/schema/schema/ecosystem-web.schema.json` (which is the single source of truth for the data format, mirrored by the zod validator in `@foodweb/schema`).

- **Python:** 3.12+
- **Install:** `pip install -r scripts/pipeline/requirements.txt` (a venv works too: `python3 -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt`)
- **Validate all webs:** `npm run validate:data`, or directly `python3 scripts/pipeline/validate.py [--webs-dir DIR] [FILE ...]`
- **Convert a published web:** `python3 scripts/pipeline/convert_template.py [out.json]` — documented skeleton, see `docs/data-format.md`
- **Tests:** `npm run test:pipeline` (pytest; fixtures in `tests/fixtures/`)

The pipeline never fabricates data: if a source study lacks edge weights or aggregates species into functional groups, the converted web must say so explicitly (see the master prompt's "Honest science" principle and `docs/data-format.md`).
