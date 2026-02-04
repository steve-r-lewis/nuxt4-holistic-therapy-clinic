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

const links = [
  { label: 'Home', to: '/' },
  { label: 'Therapies', to: '/therapies' },
  { label: 'Our Story', to: '/about' },
  { label: 'Journal', to: '/blog' }, // Geared towards the "static blog" requirement
];
</script>

<template>
  <header class="w-full px-6 py-5 flex justify-between items-center max-w-7xl mx-auto bg-white/90 backdrop-blur-sm sticky top-0 z-50">
    <div class="flex items-center gap-10">
      <NuxtLink to="/" class="py-2 flex items-center gap-2 font-serif text-2xl font-bold text-gray-800 tracking-tight">
        <NuxtImg
          src="/logo.png"
          alt="Holistic Therapy Clinic Logo"
          width="40"
          height="40"
          format="webp"
          loading="eager"
          class="w-10 h-10 object-contain"
        />

        Holistic Therapy Clinic
      </NuxtLink>

      <nav class="hidden md:flex gap-8 text-sm font-medium text-gray-600">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="py-2 block hover:text-brand-purple hover:underline underline-offset-4 transition-all"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>

    <div class="flex items-center gap-4">
      <NuxtLink to="/contact" class="py-2 hidden sm:block text-sm font-medium text-gray-600 hover:text-brand-purple transition">
        Contact
      </NuxtLink>
    </div>
  </header>
</template>
