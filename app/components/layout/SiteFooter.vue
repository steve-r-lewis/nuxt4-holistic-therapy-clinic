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

/**
 * TODO: TypeScript code for the component goes here with suitable DocBlock type comments as necessary
 * for new/changed logic.
 */
</script>

<template>
  <footer class="border-t border-gray-100 mt-12 py-12">
    <div class="max-w-7xl mx-auto px-6 text-center">

      <div class="flex justify-center items-center gap-2 mb-6">
        <svg class="w-7 h-7 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
        <span class="font-bold text-xl text-gray-900">Pagedone</span>
      </div>

      <div class="flex flex-wrap justify-center gap-8 mb-8 text-gray-600 font-medium text-sm">
        <NuxtLink to="#" class="hover:text-brand-purple transition">Pagedone</NuxtLink>
        <NuxtLink to="#" class="hover:text-brand-purple transition">Products</NuxtLink>
        <NuxtLink to="#" class="hover:text-brand-purple transition">Resources</NuxtLink>
        <NuxtLink to="#" class="hover:text-brand-purple transition">Blogs</NuxtLink>
        <NuxtLink to="#" class="hover:text-brand-purple transition">Support</NuxtLink>
      </div>

      <div class="border-t border-gray-100 pt-8 flex flex-col items-center gap-4">
        <div class="flex gap-6 text-gray-400">
          <NuxtLink to="#" class="hover:text-brand-purple transition"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></NuxtLink>
          <NuxtLink to="#" class="hover:text-brand-purple transition"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></NuxtLink>
        </div>
        <p class="text-sm text-gray-400">©Pagedone 2024, All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
