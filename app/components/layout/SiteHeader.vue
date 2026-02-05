<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/components/layout/SiteHeader.vue
 * @version:    1.0.0
 * @createDate: 2026 Jan 22
 * @createTime: 23:21
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
 * V1.0.0, 20260122-23:21
 * Initial creation and release of SiteHeader.vue
 *
 * ================================================================================
 */

// NEW (Correct for Data Files)
const { data: header } = await useAsyncData('site-header', () =>
  queryCollection('layout').where('stem', '=', 'layout/header').first()
)
</script>

<template>
  <header class="w-full px-6 py-5 flex justify-between items-center max-w-7xl mx-auto bg-white/90 backdrop-blur-sm sticky top-0 z-50">

    <div v-if="header" class="flex items-center gap-10 w-full justify-between">
      <div class="flex items-center gap-10">
        <NuxtLink :to="header.logo?.link || '/'" class="flex items-center gap-2 font-serif text-2xl font-bold text-gray-800 tracking-tight">
          <img
            v-if="header.logo?.image"
            :src="header.logo.image"
            :alt="header.logo.alt"
            class="w-10 h-10 object-contain"
          />
          {{ header.logo?.text }}
        </NuxtLink>

        <nav class="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <NuxtLink
            v-for="link in header.navigation"
            :key="link.to"
            :to="link.to"
            class="hover:text-brand-purple hover:underline underline-offset-4 transition-all"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <NuxtLink
          v-if="header.cta"
          :to="header.cta.to"
          class="hidden sm:block text-sm font-medium text-gray-600 hover:text-brand-purple transition"
        >
          {{ header.cta.label }}
        </NuxtLink>
      </div>
    </div>

    <div v-else class="flex items-center justify-between w-full animate-pulse">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
        <div class="w-48 h-6 bg-gray-200 rounded"></div>
      </div>
      <div class="hidden sm:block w-20 h-4 bg-gray-200 rounded"></div>
    </div>

  </header>
</template>
