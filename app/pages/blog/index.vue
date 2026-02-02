<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/pages/blog/index.vue
 * @version:    1.0.0
 * @createDate: 2026 Jan 23
 * @createTime: 00:49
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
 * V1.0.0, 20260123-00:49
 * Initial creation and release of index.vue
 *
 * ================================================================================
 */

useHead({
  title: 'Wellness Journal | Holistic Therapy Clinic'
});

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-12">
    <div class="text-center mb-16">
      <span class="text-xs font-bold tracking-widest text-brand-purple uppercase">The Journal</span>
      <h1 class="text-4xl font-serif font-bold text-gray-900 mt-3">Wellness & Insights</h1>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <article v-for="post in posts" :key="post.path" class="group cursor-pointer">
        <NuxtLink :to="post.path">

          <div class="aspect-video rounded-lg mb-4 overflow-hidden bg-gray-100">
            <img
              v-if="post.image"
              :src="post.image"
              :alt="post.title"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-gray-300">
              <Icon name="ph:plant-duotone" size="48" />
            </div>
          </div>

          <div class="text-xs text-gray-400 font-medium mb-2">{{ post.date }}</div>
          <h2 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-purple transition">
            {{ post.title }}
          </h2>
          <p class="text-sm text-gray-500 leading-relaxed line-clamp-3">{{ post.excerpt }}</p>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
