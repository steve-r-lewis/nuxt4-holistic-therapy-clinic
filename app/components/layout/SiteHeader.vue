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

/**
 * TODO: TypeScript code for the component goes here with suitable DocBlock type comments as necessary
 * for new/changed logic.
 */
</script>

<template>
  <header class="w-full px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
    <div class="flex items-center gap-10">
      <NuxtLink to="/" class="flex items-center gap-2 font-bold text-xl text-gray-900">
        <svg class="w-6 h-6 text-brand-purple" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
        </svg>
        Flowrift
      </NuxtLink>

      <nav class="hidden md:flex gap-8 text-sm font-medium text-gray-600">
        <NuxtLink to="#" class="hover:text-brand-purple transition">Home</NuxtLink>
        <div class="group relative flex items-center gap-1 cursor-pointer hover:text-brand-purple transition">
          Features
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
        <NuxtLink to="#" class="hover:text-brand-purple transition">Pricing</NuxtLink>
        <NuxtLink to="#" class="hover:text-brand-purple transition">About</NuxtLink>
      </nav>
    </div>

    <div class="flex items-center gap-4">
      <NuxtLink to="#" class="text-sm font-medium hover:text-brand-purple transition">Sign in</NuxtLink>
      <button class="bg-brand-purple text-white px-5 py-2 rounded-md text-sm font-medium hover:opacity-90 transition shadow-md hover:shadow-lg cursor-pointer">
        Sign up
      </button>
    </div>
  </header>
</template>
