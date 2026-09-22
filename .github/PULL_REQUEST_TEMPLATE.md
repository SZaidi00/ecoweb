<!-- Thanks for contributing! Delete any section that doesn't apply. -->

## What does this PR do?

<!-- A sentence or two. Link the issue it closes, if any. -->

## How to review

<!-- Exact steps: commands to run, pages to open, what to click/look at. -->

## Checklist

- [ ] `npm run build`, `npm test`, `npm run lint` pass
- [ ] `npm run validate:data` and `npm run test:pipeline` pass (if data or pipeline touched)

### For new ecosystem webs additionally

- [ ] `npm run build:index` committed
- [ ] Node count ≤ 25; every non-species node states its aggregation
- [ ] Every edge weight traceable to a citation; unverifiable edges are `qualitative`
- [ ] Full citations, `sourceUrl`, and `licenseNote` present; provenance badge correct
- [ ] Screenshot of the web at default zoom attached (labels legible)
