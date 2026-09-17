# Food Web Explorer

An open-source, interactive web app that lets a general audience explore real-world food webs: see how species in an ecosystem are connected, trace what a species depends on (and what depends on it), and simulate what happens when a species is removed. Think "interactive documentary of ecosystems," not "network analysis tool."

<!-- Screenshot placeholder: replace with an app screenshot before launch (Phase 6). -->
![Screenshot coming soon](docs/screenshot-placeholder.png)

## Quick Start

Requires Node.js 22 LTS (see `.nvmrc`) and npm. The data pipeline additionally needs Python 3.12+ (`pip install -r scripts/pipeline/requirements.txt`).

```sh
npm install
npm run dev
```

Then open the printed local URL in your browser.

Other useful commands (from the repo root):

- `npm run build` — typecheck and build all workspaces
- `npm test` — run unit tests
- `npm run lint` — lint the codebase
- `npm run validate:data` — validate the ecosystem data files in `data/webs/`
- `npm run test:pipeline` — run the Python data-pipeline tests (pytest)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT (code). Data attribution is documented per ecosystem web.
