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

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('blog').path(route.path).first()
)

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  image: page.value?.image // [NEW] Add to SEO metadata
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-12" v-if="page">

    <header class="mb-10 text-center">
      <div class="text-xs font-bold tracking-widest text-brand-purple uppercase mb-3">
        {{ page.date }}
      </div>
      <h1 class="text-4xl font-serif font-bold text-gray-900 leading-tight">
        {{ page.title }}
      </h1>
    </header>

    <div v-if="page.image" class="aspect-video rounded-xl mb-12 w-full overflow-hidden shadow-sm">
      <img :src="page.image" :alt="page.title" class="w-full h-full object-cover" />
    </div>

    <article class="prose prose-lg prose-gray max-w-none hover:prose-a:text-brand-purple">
      <ContentRenderer :value="page" />
    </article>

    <div class="mt-12 pt-8 border-t border-gray-100 text-center">
      <NuxtLink to="/blog" class="text-sm font-bold text-brand-purple hover:underline">
        ← Back to Journal
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
