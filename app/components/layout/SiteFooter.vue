<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/components/layout/SiteFooter.vue
 * @version:    1.0.0
 * @createDate: 2026 Jan 22
 * @createTime: 23:46
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
 * V1.0.0, 20260122-23:46
 * Initial creation and release of SiteFooter.vue
 *
 * ================================================================================
 */

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-gray-100 mt-24 py-12 bg-white">
    <div class="max-w-7xl mx-auto px-6 text-center">

      <div class="flex justify-center items-center gap-2 mb-6 text-gray-900">
        <img
          src="/logo.png"
          alt="Holistic Therapy Clinic Logo"
          class="w-10 h-10 object-contain"
        />
        <span class="font-serif font-bold text-xl tracking-tight">Holistic Therapy Clinic</span>
      </div>

      <div class="flex flex-wrap justify-center gap-8 mb-8 text-gray-600 font-medium text-sm">
        <NuxtLink to="/" class="hover:text-brand-purple transition">Home</NuxtLink>
        <NuxtLink to="/therapies" class="hover:text-brand-purple transition">Treatments</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-brand-purple transition">Wellness Journal</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-brand-purple transition">Contact Us</NuxtLink>
        <NuxtLink to="/privacy" class="hover:text-brand-purple transition">Privacy Policy</NuxtLink>
      </div>

      <div class="border-t border-gray-100 pt-8 flex flex-col items-center gap-4">
        <div class="flex gap-6 text-gray-400">
          <NuxtLink to="#" class="hover:text-brand-purple transition" aria-label="Instagram">
            <Icon name="lucide:instagram" class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink to="#" class="hover:text-brand-purple transition" aria-label="Facebook">
            <Icon name="lucide:facebook" class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink to="#" class="hover:text-brand-purple transition" aria-label="Twitter">
            <Icon name="lucide:twitter" class="w-5 h-5" />
          </NuxtLink>
        </div>
        <p class="text-sm text-gray-400">
          © {{ currentYear }} Holistic Therapy Clinic. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
