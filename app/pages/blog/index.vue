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

const siteConfig = useSiteConfig();

// 1. Fetch Data
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
);

// 2. SEO Configuration (Upgrade)
useSeoMeta({
  title: 'Wellness Journal | Holistic Therapy Clinic',
  description: 'Read our latest articles on holistic health, massage therapy benefits, and wellness tips.',
  ogTitle: 'Wellness Journal | Holistic Therapy Clinic',
  ogDescription: 'Read our latest articles on holistic health, massage therapy benefits, and wellness tips.',
  ogImage: '/logo.png',
  ogUrl: `${siteConfig.url}/blog`,
})

// 3. Helper: Format Date nicely (e.g., "12 October 2025")
const formatDate = (dateString: string) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-12">

    <header class="text-center max-w-2xl mx-auto mb-16">
      <span class="text-brand-purple font-bold tracking-widest text-xs uppercase mb-2 block">
        The Journal
      </span>
      <h1 class="text-4xl font-serif font-bold text-gray-900 mb-6">
        Wellness & Insights
      </h1>
      <p class="text-gray-500 text-lg leading-relaxed">
        Expert advice, clinic updates, and deep dives into the benefits of holistic therapy.
      </p>
    </header>

    <div v-if="posts && posts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      <NuxtLink
        v-for="post in posts"
        :key="post.path"
        :to="post.path"
        class="py-2 group flex flex-col h-full"
      >
        <div class="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-6 relative shadow-sm group-hover:shadow-md transition">
          <NuxtImg
            v-if="post.image"
            :src="post.image"
            :alt="post.title"
            format="webp"
            loading="lazy"
            sizes="100vw sm:50vw md:33vw"
            class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />

          <div v-else class="w-full h-full flex items-center justify-center bg-brand-purple/5">
            <Icon name="ph:plant-duotone" class="text-brand-purple/20 w-16 h-16" />
          </div>
        </div>

        <div class="flex flex-col flex-grow">
          <div class="text-xs font-bold text-brand-purple mb-3 uppercase tracking-wider">
            {{ formatDate(post.date) }}
          </div>

          <h2 class="text-xl font-bold text-gray-900 mb-3 font-serif group-hover:text-brand-purple transition leading-tight">
            {{ post.title }}
          </h2>

          <p class="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
            {{ post.excerpt }}
          </p>

          <div class="flex items-center text-sm font-bold text-gray-900 group-hover:text-brand-purple transition mt-auto">
            Read Article
            <Icon name="ph:arrow-right" class="ml-2 group-hover:translate-x-1 transition" />
          </div>
        </div>
      </NuxtLink>

    </div>

    <div v-else class="text-center py-24 bg-gray-50 rounded-3xl">
      <Icon name="ph:pencil-slash" class="w-12 h-12 text-gray-300 mb-4" />
      <h3 class="text-lg font-bold text-gray-900">No articles yet</h3>
      <p class="text-gray-500 mt-2">Check back soon for updates!</p>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
