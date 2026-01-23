<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/pages/therapies.vue
 * @version:    1.0.0
 * @createDate: 2026 Jan 23
 * @createTime: 00:43
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
 * V1.0.0, 20260123-00:43
 * Initial creation and release of therapies.vue
 *
 * ================================================================================
 */

useHead({
  title: 'Treatments & Therapies | Holistic Therapy Clinic',
  meta: [{ name: 'description', content: 'Explore our holistic massage treatments including Swedish, Deep Tissue, and Aromatherapy.' }]
});

const treatments = [
  {
    name: 'Swedish Massage',
    duration: '60 / 90 min',
    price: '$80 / $110',
    desc: 'Gentle, flowing strokes to promote relaxation and improve circulation.'
  },
  {
    name: 'Deep Tissue',
    duration: '60 / 90 min',
    price: '$95 / $130',
    desc: 'Intense pressure targeting deep muscle layers to release chronic tension.'
  },
  {
    name: 'Hot Stone Therapy',
    duration: '75 min',
    price: '$120',
    desc: 'Smooth, heated stones are placed on the body to melt away stress.'
  }
]
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-serif font-bold text-gray-900 mb-6">Our Treatments</h1>
    <p class="text-gray-600 mb-12 leading-relaxed">
      Each session is tailored to your specific needs. We recommend arriving 15 minutes early
      to discuss your goals with your therapist.
    </p>

    <div class="grid gap-6">
      <div v-for="t in treatments" :key="t.name" class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:border-brand-purple/30 transition">
        <div>
          <h3 class="text-xl font-bold text-gray-800">{{ t.name }}</h3>
          <p class="text-gray-500 text-sm mt-1">{{ t.desc }}</p>
        </div>
        <div class="text-right shrink-0">
          <div class="font-serif text-lg font-bold text-brand-purple">{{ t.price }}</div>
          <div class="text-xs text-gray-400 font-medium">{{ t.duration }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
