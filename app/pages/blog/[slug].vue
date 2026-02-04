<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/pages/blog/[slug].vue
 * @version:    1.0.0
 * @createDate: 2026 Feb 01
 * @createTime: 23:00
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
 * V1.0.0, 20260201-23:00
 * Initial creation and release of [slug].vue
 *
 * ================================================================================
 */

const route = useRoute();

// 1. Fetch the specific post
// We define the variable as 'post'
const { data: post, status } = await useAsyncData(route.path, () =>
  queryCollection('blog').path(route.path).first()
);

// [FIX] Changed 'page' to 'post'
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

// 2. Get Site URL
const siteConfig = useSiteConfig()
const siteUrl = siteConfig.url || 'https://holistictherapyclinic.co.uk';

// 3. Compute Absolute Image URL
// [FIX] Changed 'page' to 'post'
const relativeImage = post.value.image || '/logo.png';
const socialImage = `${siteUrl}${relativeImage}`;

// 4. SEO Metadata
useSeoMeta({
  // [FIX] Changed 'page' to 'post' everywhere below
  title: `${post.value.title} | Holistic Therapy Clinic`,
  description: post.value.description,

  // Socials
  ogTitle: post.value.title,
  ogDescription: post.value.description,
  ogImage: socialImage, // Use the computed absolute URL
  ogType: 'article',
  ogSiteName: 'Holistic Therapy Clinic',

  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: post.value.title,
  twitterDescription: post.value.description,
  twitterImage: socialImage
});

// 5. Structured Data
useSchemaOrg([
  defineArticle({
    // [FIX] Changed 'page' to 'post'
    headline: post.value.title,
    description: post.value.description,
    image: socialImage,
    datePublished: new Date().toISOString(),
  })
])
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-12">

    <div v-if="status === 'pending'" class="text-center py-20 text-gray-400">
      <Icon name="svg-spinners:180-ring" class="w-10 h-10 mx-auto mb-4" />
      <p>Loading article...</p>
    </div>

    <article v-else-if="post">
      <header class="mb-10 text-center">
        <div class="text-xs font-bold tracking-widest text-brand-purple uppercase mb-3">
          {{ new Date(post.date).toLocaleDateString('en-GB') }}
        </div>
        <h1 class="text-4xl font-serif font-bold text-gray-900 leading-tight">
          {{ post.title }}
        </h1>
      </header>

      <div v-if="post.image" class="aspect-video rounded-xl mb-12 w-full overflow-hidden shadow-sm bg-gray-100">
        <NuxtImg
          :src="post.image"
          :alt="post.title"
          format="webp"
          loading="eager"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="prose prose-lg prose-gray max-w-none hover:prose-a:text-brand-purple mx-auto text-gray-600">
        <ContentRenderer :value="post" />
      </div>

      <div class="mt-12 pt-8 border-t border-gray-100 text-center">
        <NuxtLink to="/blog" class="py-2 text-sm font-bold text-brand-purple hover:underline inline-flex items-center gap-2">
          <Icon name="ph:arrow-left" /> Back to Journal
        </NuxtLink>
      </div>
    </article>

    <div v-else class="text-center py-20">
      <h1 class="text-3xl font-bold text-gray-300">Article not found</h1>
      <NuxtLink to="/blog" class="text-brand-purple mt-4 inline-block hover:underline">
        Back to Journal
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
