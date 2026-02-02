/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~//content.config.ts
 * @version:    1.0.0
 * @createDate: 2026 Feb 01
 * @createTime: 22:15
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * TODO: Create description here
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.0.0, 20260201-22:15
 * Initial creation and release of content.config.ts
 *
 * ================================================================================
 */

// content.config.ts
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: 'blog/*.md',
      type: 'page',
      // [NEW] Define schema to include optional image
      schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        image: z.string().optional() // <--- Added this
      })
    }),
    therapies: defineCollection({
      source: 'datastore/therapies/*.json', // Fragmented JSON files
      type: 'data',
      schema: z.object({
        name: z.string(),
        duration: z.string(),
        price: z.string(),
        desc: z.string()
      })
    })
  }
})
