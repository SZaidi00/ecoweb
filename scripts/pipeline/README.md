# Data pipeline

Python scripts that convert published food-web datasets into our `EcosystemWeb` JSON format and validate the results against the schema in `packages/schema` (which is the single source of truth for the data format).

- **Python:** 3.12+
- **Install:** `python3 -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt`
- **Validate all webs:** `python3 scripts/pipeline/validate.py` (currently a Phase 0 placeholder that performs basic sanity checks; real JSON Schema validation lands in Phase 1)
- **Tests:** `pytest` (no pipeline tests exist yet)

The pipeline never fabricates data: if a source study lacks edge weights or aggregates species into functional groups, the converted web must say so explicitly (see the master prompt's "Honest science" principle).
