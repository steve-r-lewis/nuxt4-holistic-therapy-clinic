/**
 * ================================================================================
 * @description: Nitro route to map Nuxt Content v3 blog collection to Sitemap XML
 * ================================================================================
 */

export default defineEventHandler(async (event) => {
  // Query the strictly validated internal SQLite database
  const articles = await queryCollection(event, 'blog').all()

  // Map the internal schema to the sitemap module schema
  return articles.map((article) => {
    // Enforce absolute W3C Datetime compliance, bypassing module heuristics
    const strictDate = new Date(article.date).toISOString()

    return {
      loc: article.path,
      lastmod: strictDate,
      // Fallback to 'yearly' if the frontmatter parser fails to map the Zod schema
      changefreq: article.changefreq || 'yearly'
    }
  })
})
