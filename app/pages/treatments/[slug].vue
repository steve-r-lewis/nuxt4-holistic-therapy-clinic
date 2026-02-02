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

// Fetch the page content
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('treatments').path(route.path).first()
);

// SEO Metadata
useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
});

// Image Logic: Use page image OR fallback to site logo
const displayImage = computed(() => page.value?.image || '/logo.png')
// Check if we are using the fallback to apply specific "contain" styling
const isFallback = computed(() => !page.value?.image)
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
      <img
        :src="displayImage"
        :alt="page.title"
        class="w-full h-full"
        :class="isFallback ? 'object-contain p-12 opacity-50' : 'object-cover'"
      />
    </div>

    <article class="prose prose-lg prose-gray max-w-none hover:prose-a:text-brand-purple">
      <ContentRenderer :value="page" />
    </article>

    <div class="mt-12 pt-8 border-t border-gray-100 text-center">
      <NuxtLink to="/therapies" class="text-sm font-bold text-brand-purple hover:underline">
        ← Back to Treatments
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
