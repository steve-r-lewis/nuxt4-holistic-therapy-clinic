<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/pages/about.vue
 * @version:    1.0.0
 * @createDate: 2026 Jan 23
 * @createTime: 00:47
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
 * V1.0.0, 20260123-00:47
 * Initial creation and release of about.vue
 *
 * ================================================================================
 */

useHead({
  title: 'Our Story | Holistic Therapy Clinic'
})
</script>

<template>
  <div class="max-w-3xl mx-auto px-6 py-12 space-y-8">
    <h1 class="text-4xl font-serif font-bold text-gray-900">Healing with Intention</h1>

    <div class="prose prose-gray max-w-none text-gray-600">
      <p class="text-lg leading-relaxed">
        Holistic Therapy Clinic began with a simple belief: that the body has an innate intelligence to heal itself when given the right space and support.
      </p>

      <p>
        Founded in 2024, our clinic moves away from the "rush-in, rush-out" mentality of modern spas.
        We focus on slow, deliberate practice, ensuring every client feels heard, understood, and restored.
      </p>
    </div>

    <div class="bg-stone-50 p-8 rounded-2xl border border-stone-100 mt-8">
      <h3 class="font-bold text-gray-900 mb-2">Our Philosophy</h3>
      <p class="text-gray-600 italic">"Wellness is not a luxury; it is a necessity for a balanced life."</p>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
