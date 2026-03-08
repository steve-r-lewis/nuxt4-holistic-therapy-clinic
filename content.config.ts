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

import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: 'blog/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        image: z.string().optional()
      })
    }),

    therapies: defineCollection({
      source: 'datastore/therapies/*.json',
      type: 'data',
      schema: z.object({
        name: z.string(),
        duration: z.string(),
        price: z.string(),
        desc: z.string(),
        relatedPost: z.string().optional()
      })
    }),

    treatments: defineCollection({
      source: 'treatments/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional()
      })
    }),

    landing: defineCollection({
      type: 'data',
      source: 'landing/*.json',
      schema: z.object({
        badge: z.string(),
        title: z.string(),
        description: z.string(),
        image: z.string(),
        imageAlt: z.string(),
        promo: z.object({
          badge: z.string(),
          text: z.string(),
          link: z.string(),
          linkText: z.string()
        }),
        features: z.array(z.object({
          title: z.string(),
          text: z.string(),
          icon: z.string()
        }))
      })
    }),

    faq: defineCollection({
      type: 'data',
      source: 'landing/faq.json',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        items: z.array(z.object({
          question: z.string(),
          answer: z.string()
        }))
      })
    }),

    layout: defineCollection({
      type: 'data',
      source: 'layout/*.json',
      schema: z.object({
        logo: z.object({
          text: z.string(),
          image: z.string(),
          alt: z.string(),
          link: z.string()
        }).optional(),
        navigation: z.array(z.object({
          label: z.string(),
          to: z.string()
        })),
        socials: z.array(z.object({
          icon: z.string(),
          link: z.string(),
          label: z.string()
        })).optional(),
        copyrightText: z.string().optional(),
        cta: z.object({
          label: z.string(),
          to: z.string(),
          style: z.string().optional()
        }).optional()
      })
    })
  }
})
