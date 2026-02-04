<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/pages/treatments/[slug].vue.vue
 * @version:    1.0.0
 * @createDate: 2026 Feb 02
 * @createTime: 19:41
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
 * V1.0.0, 20260202-19:41
 * Initial creation and release of [slug].vue.vue
 *
 * ================================================================================
 */

const route = useRoute();

// 1. Fetch Content
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('treatments').path(route.path).first()
);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

// 2. Get Site URL from the SEO Module
const siteConfig = useSiteConfig();
const siteUrl = siteConfig.url || 'https://holistictherapyclinic.co.uk';

// 3. Compute Absolute Image URL
const relativeImage = page.value.image || '/logo.png';
const socialImage = `${siteUrl}${relativeImage}`;

// 4. UI Image Logic
const displayImage = computed(() => page.value?.image || '/logo.png');
const isFallback = computed(() => !page.value?.image);

// 5. SEO Metadata
useSeoMeta({
  title: `${page.value.title} | Holistic Therapy Clinic`,
  description: page.value.description,

  // Socials
  ogTitle: page.value.title,
  ogDescription: page.value.description,
  ogImage:  page.value?.image,
  ogType: 'article',
  ogSiteName: 'Holistic Therapy Clinic',

  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: page.value.title,
  twitterDescription: page.value.description,
  twitterImage: socialImage
});

// 6. [NEW] Structured Data (Schema.org)
// This helps Google understand this is an Article/Service
useSchemaOrg([
  defineArticle({
    headline: page.value.title,
    description: page.value.description,
    image: socialImage,
    datePublished: new Date().toISOString(), // You might want to add a 'date' field to your markdown later
  })
])
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-12" v-if="page">

    <header class="mb-10 text-center">
      <h1 class="text-4xl font-serif font-bold text-gray-900 leading-tight">
        {{ page.title }}
      </h1>
      <p class="text-gray-500 mt-4 text-lg">{{ page.description }}</p>
    </header>

    <div class="aspect-video rounded-xl mb-12 w-full overflow-hidden shadow-sm bg-gray-50 flex items-center justify-center">
      <NuxtImg
        v-if="displayImage"
        :src="displayImage"
        :alt="page.title"
        format="webp"
        loading="lazy"
        sizes="100vw sm:50vw md:33vw"
        class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        :class="isFallback ? 'object-contain p-12 opacity-50' : 'object-cover'"
      />
    </div>

    <article class="prose prose-lg prose-gray max-w-none hover:prose-a:text-brand-purple">
      <ContentRenderer :value="page" />
    </article>

    <div class="mt-12 pt-8 border-t border-gray-100 text-center">
      <NuxtLink to="/therapies" class="py-2 text-sm font-bold text-brand-purple hover:underline">
        ← Back to Treatments
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
