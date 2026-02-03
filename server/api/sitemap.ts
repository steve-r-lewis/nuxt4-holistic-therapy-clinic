/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~/server/api/sitemap.ts
 * @version:    1.0.0
 * @createDate: 2026 Feb 03
 * @createTime: 01:22
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
 * V1.0.0, 20260203-01:22
 * Initial creation and release of sitemap.ts
 *
 * ================================================================================
 */

// import { asSitemapUrl, defineSitemapEventHandler } from '#imports'
//
// export default defineSitemapEventHandler(async (e) => {
//   try {
//     // 1. Fetch Blog Posts (Select path and date for SEO)
//     const blogPosts = await queryCollection(e, 'blog')
//       .select('path', 'date')
//       .all();
//
//     // 2. Fetch Treatment Pages
//     const treatmentPages = await queryCollection(e, 'treatments')
//       .select('path')
//       .all();
//
//     // 3. Merge them into one list
//     const allRoutes = [...blogPosts, ...treatmentPages].map(page => {
//       return asSitemapUrl({
//         loc: page.path,
//         // Use the post date, or fallback to today if missing
//         lastmod: page.date || new Date().toISOString()
//       })
//     });
//
//     return allRoutes
//
//   } catch (error) {
//     console.error('Sitemap Generation Failed:', error);
//     return [] // Return empty array to prevent crashing
//   }
// })

import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async (e) => {
  // 1. Define Static Routes (Always safe to render)
  const staticRoutes = [
    { loc: '/', changefreq: 'daily', priority: 1.0 },
    { loc: '/therapies', changefreq: 'weekly', priority: 0.8 },
    { loc: '/story', changefreq: 'monthly', priority: 0.5 },
    { loc: '/contact', changefreq: 'monthly', priority: 0.5 },
  ]

  try {
    // 2. Attempt to fetch Dynamic Content
    const blogPosts = await queryCollection(e, 'blog').select('path', 'date').all()
    const treatmentPages = await queryCollection(e, 'treatments').select('path').all()

    // 3. Convert to Sitemap Format
    const dynamicRoutes = [...blogPosts, ...treatmentPages].map(page => {
      return asSitemapUrl({
        loc: page.path,
        lastmod: page.date || new Date().toISOString(),
        priority: 0.7,
        changefreq: 'monthly'
      })
    })

    // Success: Return Merged List
    return [...staticRoutes, ...dynamicRoutes]

  } catch (error) {
    // Failure: Log error but keep site running with just static pages
    console.error('Sitemap DB Error:', error)
    return staticRoutes
  }
})
