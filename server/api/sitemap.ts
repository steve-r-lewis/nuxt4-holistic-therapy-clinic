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

import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async (e) => {
  // 1. Fetch all blog posts
  const blogPosts = await queryCollection(e, 'blog').select('path', 'date').all();

  // 2. Fetch all treatment pages
  const treatmentPages = await queryCollection(e, 'treatments').select('path').all();

  // 3. Merge and map to Sitemap format
  const allRoutes = [...blogPosts, ...treatmentPages].map(page => {
    return asSitemapUrl({
      loc: page.path,
      lastmod: page.date || new Date().toISOString()
    })
  })

  return allRoutes
})
