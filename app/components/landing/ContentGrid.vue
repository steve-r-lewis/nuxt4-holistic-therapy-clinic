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

const items = [
  { title: 'Shooting Stars' },
  { title: 'The Catalyzer' },
  { title: 'Neptune' },
  { title: 'Melanchole' },
]
</script>

<template>
  <div>
    <section class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-[10px] font-bold tracking-widest text-brand-sage uppercase mb-3 block">
          Roof Party Polaroid
        </span>
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Master Cleanse Reliac Heirloom
      </h1>
      <p class="text-gray-500 leading-relaxed">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.
      </p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
      <div v-for="(item, i) in items" :key="i" class="lg:px-6 first:pl-0 last:pr-0 pt-8 lg:pt-0 first:pt-0">
        <h3 class="font-bold text-gray-900 mb-3 text-lg">{{ item.title }}</h3>
        <p class="text-sm text-gray-500 leading-relaxed mb-4">
          Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
        </p>
        <NuxtLink to="#" class="inline-flex items-center text-brand-purple hover:text-brand-sage transition text-sm font-medium group">
          Learn More
          <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
