import { z } from 'zod'

/**
 * Shape of data/webs/index.json. Phase 0 placeholder — the real index
 * listing (biomes, ecosystems, provenance) is defined in Phase 1 and
 * validated against @foodweb/schema.
 */
export const webIndexSchema = z.object({
  webs: z.array(z.string()),
})

export type WebIndex = z.infer<typeof webIndexSchema>
