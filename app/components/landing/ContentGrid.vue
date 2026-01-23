<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/components/landing/ContentGrid.vue
 * @version:    1.0.0
 * @createDate: 2026 Jan 22
 * @createTime: 23:49
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
 * V1.0.0, 20260122-23:49
 * Initial creation and release of ContentGrid.vue
 *
 * ================================================================================
 */

const therapies = [
  {
    title: 'Swedish Massage',
    description: 'A gentle, full-body massage that targets surface muscles to release tension and improve circulation.',
    price: 'from $80'
  },
  {
    title: 'Deep Tissue',
    description: 'Intense pressure focused on the deeper layers of muscle tissue to treat chronic aches and pains.',
    price: 'from $95'
  },
  {
    title: 'Aromatherapy',
    description: 'Combines the physical benefits of massage with the emotional healing properties of essential oils.',
    price: 'from $85'
  },
  {
    title: 'Reflexology',
    description: 'Application of pressure to specific points on the feet and hands that correspond to organs and systems.',
    price: 'from $70'
  },
]
</script>

<template>
  <div>
    <section class="text-center max-w-3xl mx-auto mb-16">
      <span class="text-[10px] font-bold tracking-widest text-brand-purple uppercase mb-3 block">
        Our Therapies
      </span>
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
        Curated Treatments for Total Wellness
      </h2>
      <p class="text-gray-500 leading-relaxed">
        We believe every body tells a unique story. Our therapists listen to your needs
        to craft a personalized session that addresses your specific physical and emotional goals.
      </p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
      <div v-for="(item, i) in therapies" :key="i" class="p-8 lg:p-10 hover:bg-stone-50 transition duration-300">
        <div class="flex justify-between items-start mb-4">
          <h3 class="font-bold text-gray-900 text-lg font-serif">{{ item.title }}</h3>
          <span class="text-xs font-medium bg-brand-purple/5 text-brand-purple px-2 py-1 rounded">{{ item.price }}</span>
        </div>

        <p class="text-sm text-gray-500 leading-relaxed mb-6 min-h-[4rem]">
          {{ item.description }}
        </p>

        <NuxtLink to="/therapies" class="inline-flex items-center text-brand-purple hover:text-gray-900 transition text-sm font-medium group">
          Learn More
          <Icon name="lucide:arrow-right" class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
