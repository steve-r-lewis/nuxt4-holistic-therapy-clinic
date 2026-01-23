<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/pages/contact.vue
 * @version:    1.0.0
 * @createDate: 2026 Jan 23
 * @createTime: 00:51
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
 * V1.0.0, 20260123-00:51
 * Initial creation and release of contact.vue
 *
 * ================================================================================
 */

useHead({
  title: 'Contact Us | Holistic Therapy Clinic'
})
</script>

<template>
  <div class="max-w-xl mx-auto px-6 py-12">
    <h1 class="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Get in Touch</h1>

    <form class="space-y-6" @submit.prevent>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input type="text" class="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-purple focus:ring-brand-purple" placeholder="Your name">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" class="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-purple focus:ring-brand-purple" placeholder="you@example.com">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea rows="4" class="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-purple focus:ring-brand-purple" placeholder="How can we help you?"></textarea>
      </div>
      <button class="w-full bg-brand-purple text-white font-bold py-3 rounded-lg hover:opacity-90 transition shadow-md">
        Send Message
      </button>
    </form>

    <div class="mt-12 text-center text-sm text-gray-500">
      <p>Sunnybank, Westray</p>
      <p class="mt-1">susan.chinnery@holistictherapyclinic.co.uk • +44 7775 991523</p>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
