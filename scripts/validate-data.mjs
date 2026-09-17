// Phase 0 placeholder validator: real JSON Schema validation lands in Phase 1.
// For now: every JSON file in data/webs/ must parse, and index.json must
// contain a "webs" array.
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const websDir = path.join(repoRoot, 'data', 'webs')

const files = (await readdir(websDir)).filter((f) => f.endsWith('.json'))

for (const file of files) {
  const raw = await readFile(path.join(websDir, file), 'utf8')
  try {
    JSON.parse(raw)
  } catch (err) {
    console.error(`data/webs/${file}: invalid JSON — ${err.message}`)
    process.exit(1)
  }
}

const index = JSON.parse(await readFile(path.join(websDir, 'index.json'), 'utf8'))
if (!Array.isArray(index.webs)) {
  console.error('data/webs/index.json: must contain a "webs" array')
  process.exit(1)
}

console.log(
  `validate:data OK — ${files.length} JSON file(s) parsed; index.json has a "webs" array (${index.webs.length} entr${index.webs.length === 1 ? 'y' : 'ies'})`,
)
