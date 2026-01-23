<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/pages/index.vue
 * @version:    1.0.0
 * @createDate: 2026 Jan 22
 * @createTime: 23:54
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
 * V1.0.0, 20260122-23:54
 * Initial creation and release of index.vue
 *
 * ================================================================================
 */

useHead({
  title: 'Flowrift - Home'
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-10 space-y-24">
    <LandingHeroSection />
    <LandingContentGrid />

    <div class="flex justify-center">
      <button class="bg-brand-purple text-white px-8 py-3 rounded text-sm font-medium shadow-md hover:opacity-90 hover:shadow-lg transition cursor-pointer">
        Button
      </button>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
