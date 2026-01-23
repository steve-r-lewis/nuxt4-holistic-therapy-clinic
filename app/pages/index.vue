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
  title: 'Holistic Therapy Clinic | Holistic Massage Therapy & Wellness',
  meta: [
    { name: 'description', content: 'Professional holistic massage therapy clinic offering deep tissue, swedish, and aromatherapy treatments.' }
  ]
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-10 space-y-24">
    <LandingHeroSection />

    <LandingContentGrid />

    <div class="flex flex-col items-center text-center space-y-6 py-12 bg-brand-purple/5 rounded-3xl">
      <h3 class="text-2xl font-serif font-bold text-gray-900">Ready to prioritize your wellness?</h3>
      <p class="text-gray-600 max-w-lg">
        Book your appointment today and take the first step towards a balanced, pain-free life.
      </p>
      <button class="bg-brand-purple text-white px-8 py-3 rounded-full text-sm font-medium shadow-md hover:opacity-90 hover:shadow-lg transition cursor-pointer flex items-center gap-2">
        <Icon name="lucide:calendar-check-2" class="w-4 h-4" />
        Book an Appointment
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles if necessary, currently relying on Tailwind utility classes */
</style>
