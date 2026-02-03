/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~/server/routes/sitemap.xml.ts
 * @version:    1.0.0
 * @createDate: 2026 Feb 03
 * @createTime: 02:57
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
 * V1.0.0, 20260203-02:57
 * Initial creation and release of sitemap.xml.ts
 *
 * ================================================================================
 */

import { defineEventHandler, setHeader } from 'h3'

export default defineEventHandler(async (event) => {
  // 1. Static Routes (Manually defined)
  const staticRoutes = [
    { loc: '/', changefreq: 'daily', priority: 1.0 },
    { loc: '/therapies', changefreq: 'weekly', priority: 0.8 },
    { loc: '/story', changefreq: 'monthly', priority: 0.5 },
    { loc: '/contact', changefreq: 'monthly', priority: 0.5 },
  ]

  // 2. Dynamic Routes (From Database)
  // We access the DB directly here - no HTTP fetch needed!
  const blogPosts = await queryCollection(event, 'blog').select('path', 'date').all()
  const treatmentPages = await queryCollection(event, 'treatments').select('path').all()

  // 3. Start XML String
  let sitemapString = '<?xml version="1.0" encoding="UTF-8"?>'
  sitemapString += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

  // 4. Add Static Routes
  for (const route of staticRoutes) {
    sitemapString += `
    <url>
      <loc>https://holistictherapyclinic.co.uk${route.loc}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>`
  }

  // 5. Add Dynamic Routes
  const allContent = [...blogPosts, ...treatmentPages]
  for (const page of allContent) {
    sitemapString += `
    <url>
      <loc>https://holistictherapyclinic.co.uk${page.path}</loc>
      <lastmod>${page.date || new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`
  }

  // 6. Close XML
  sitemapString += '</urlset>'

  // 7. Serve as XML
  setHeader(event, 'Content-Type', 'application/xml')
  return sitemapString
})
