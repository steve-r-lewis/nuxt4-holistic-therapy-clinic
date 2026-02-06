<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/components/layout/SiteFooter.vue
 * @version:    1.0.0
 * @createDate: 2026 Jan 22
 * @createTime: 23:46
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
 * V1.0.0, 20260122-23:46
 * Initial creation and release of SiteFooter.vue
 *
 * ================================================================================
 */

const currentYear = new Date().getFullYear();

// Fetch footer data
const { data: footer } = await useAsyncData('site-footer', () =>
  queryCollection('layout').where('stem', '=', 'layout/footer').first()
)
</script>

<template>
  <footer class="border-t border-gray-100 mt-24 py-12 bg-white">

    <div v-if="footer" class="max-w-7xl mx-auto px-6 text-center">

      <div class="flex justify-center items-center gap-2 mb-6 text-gray-900">
        <NuxtImg
          v-if="footer.logo?.image"
          :src="footer.logo.image"
          :alt="footer.logo.alt"
          width="40"
          height="40"
          format="webp"
          loading="lazy"
          class="w-10 h-10 object-contain"
        />
        <span class="font-serif font-bold text-xl tracking-tight">
          {{ footer.logo?.text }}
        </span>
      </div>

      <nav class="flex flex-wrap justify-center gap-8 mb-8 text-gray-600 font-medium text-sm">
        <NuxtLink
          v-for="link in footer.navigation"
          :key="link.to"
          :to="link.to"
          class="py-2 block hover:text-brand-purple transition"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="border-t border-gray-100 pt-8 flex flex-col items-center gap-4">

        <SharedSocialLinks
          v-if="footer.socials"
          :items="footer.socials"
        />

        <p class="text-sm text-gray-400">
          © {{ currentYear }} {{ footer.copyrightText }}
        </p>
      </div>
    </div>

    <div v-else class="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-6 animate-pulse">
      <div class="h-10 w-48 bg-gray-200 rounded"></div>
      <div class="h-4 w-96 bg-gray-200 rounded"></div>
      <div class="h-4 w-32 bg-gray-200 rounded mt-8"></div>
    </div>

  </footer>
</template>
