<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/components/landing/HeroSection.vue
 * @version:    1.0.0
 * @createDate: 2026 Jan 22
 * @createTime: 23:48
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
 * V1.0.0, 20260122-23:48
 * Initial creation and release of HeroSection.vue
 *
 * ================================================================================
 */


import { h } from 'vue';

// Simple inline icons for the example
const IconGraph = h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' })
]);
const IconLock = h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' })
]);
const IconCloud = h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' })
]);
const IconAnalytics = h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
]);

const features = [
  { title: 'Growth', text: 'This is a section of some simple filler text, also known as placeholder text.', icon: IconGraph },
  { title: 'Security', text: 'This is a section of some simple filler text, also known as placeholder text.', icon: IconLock },
  { title: 'Cloud', text: 'This is a section of some simple filler text, also known as placeholder text.', icon: IconCloud },
  { title: 'Analytics', text: 'This is a section of some simple filler text, also known as placeholder text.', icon: IconAnalytics },
];
</script>

<template>
  <section class="bg-gray-50 rounded-3xl p-8 lg:p-12">
    <div class="grid lg:grid-cols-2 gap-12 items-center">

      <div class="grid sm:grid-cols-2 gap-8">
        <div v-for="(item, index) in features" :key="index">
          <div class="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-3">
            <component :is="item.icon" class="w-6 h-6" />
          </div>
          <h3 class="font-bold text-gray-900 mb-1">{{ item.title }}</h3>
          <p class="text-sm text-gray-500 leading-relaxed">{{ item.text }}</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 group">
        <div class="h-48 bg-gray-200 w-full relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
               alt="Abstract 3D"
               class="w-full h-full object-cover transition transform duration-500 group-hover:scale-105" />
        </div>
        <div class="p-6 flex items-center justify-between">
          <span class="text-sm text-gray-500">This is some simple filler text.</span>
          <button class="text-xs font-semibold text-brand-purple border border-gray-200 px-3 py-1 rounded hover:bg-gray-50 transition cursor-pointer">
            More
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

