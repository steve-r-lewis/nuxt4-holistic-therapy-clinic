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
    return {
      loc: article.path,
      // Forces the use of the Zod-validated ISO 8601 string
      lastmod: article.date,
      // Forces the use of the custom frontmatter attribute
      changefreq: article.changefreq
    }
  })
})
