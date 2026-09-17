import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import Ajv2020 from 'ajv/dist/2020'
import addFormats from 'ajv-formats'
import { describe, expect, it } from 'vitest'

import { ecosystemWebSchema, parseEcosystemWeb } from '../src/index'

/**
 * Round-trip agreement test: every fixture is validated through BOTH the
 * JSON Schema (ajv, the same file scripts/pipeline/validate.py enforces via
 * the Python jsonschema library) and the zod schema, and both must produce
 * the same accept/reject outcome.
 */

const schema = JSON.parse(
  readFileSync(fileURLToPath(new URL('../schema/ecosystem-web.schema.json', import.meta.url)), 'utf8'),
)

// strictRequired is disabled: the edge schema uses `not: { required: [...] }`
// to enforce weight-XOR-qualitative, which ajv's strict mode otherwise rejects.
const ajv = new Ajv2020({ allErrors: true, strict: true, strictRequired: false })
addFormats(ajv)
const validateJsonSchema = ajv.compile(schema)

const fixturesDir = new URL('./fixtures/', import.meta.url)
const fixtureFiles = readdirSync(fixturesDir)
  .filter((f) => f.endsWith('.web.json'))
  .sort()

function loadFixture(file: string): unknown {
  return JSON.parse(readFileSync(fileURLToPath(new URL(file, fixturesDir)), 'utf8'))
}

describe('EcosystemWeb schema/zod round-trip agreement', () => {
  it('has at least one valid and several invalid fixtures', () => {
    expect(fixtureFiles.some((f) => f.startsWith('valid-'))).toBe(true)
    expect(fixtureFiles.filter((f) => f.startsWith('invalid-')).length).toBeGreaterThanOrEqual(4)
  })

  for (const file of fixtureFiles) {
    it(`agrees on ${file}`, () => {
      const data = loadFixture(file)
      const expectedValid = file.startsWith('valid-')

      const ajvValid = validateJsonSchema(data)
      const zodResult = ecosystemWebSchema.safeParse(data)

      expect(ajvValid, `ajv verdict for ${file}`).toBe(expectedValid)
      expect(zodResult.success, `zod verdict for ${file}`).toBe(expectedValid)
      expect(zodResult.success).toBe(ajvValid)
    })
  }

  it('parseEcosystemWeb returns typed data for a valid web', () => {
    const data = loadFixture('valid-minimal.web.json')
    const web = parseEcosystemWeb(data)
    expect(web.meta.id).toBe('example-estuary')
    expect(web.nodes).toHaveLength(3)
    expect(web.edges).toHaveLength(2)
  })
})
