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
});

const config = useRuntimeConfig()

// Form State
const form = reactive({
  name: '',
  email: '',
  message: ''
});

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle');
const errorMessage = ref('');

// Submit Handler
const sendMessage = async () => {
  status.value = 'sending';
  errorMessage.value = '';

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })

    status.value = 'success';
    // Clear form data
    form.name = '';
    form.email = '';
    form.message = '';

  } catch (err: any) {
    console.error(err);
    status.value = 'error';
    errorMessage.value = err.statusMessage || 'Something went wrong. Please try again.';
  }
}
</script>

<template>
  <div class="max-w-xl mx-auto px-6 py-12">
    <h1 class="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Get in Touch</h1>

    <div v-if="status === 'success'" class="bg-green-50 border border-green-200 text-green-800 px-8 py-10 rounded-xl mb-6 text-center shadow-sm">
      <Icon name="ph:check-circle-fill" class="text-5xl text-green-500 mb-4" />
      <h2 class="text-2xl font-bold mb-2">Thank You!</h2>
      <p class="mb-8 text-green-700">
        Your message has been sent successfully. <br>
        We have emailed you a confirmation.
      </p>

      <NuxtLink
        to="/"
        class="inline-block bg-brand-purple text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition shadow-md"
      >
        Return to Home
      </NuxtLink>
    </div>

    <div v-if="status === 'error'" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-center">
      <p class="font-bold">Error Sending Message</p>
      <p class="text-sm">{{ errorMessage }}</p>
      <button @click="status = 'idle'" class="mt-2 text-xs underline">Try Again</button>
    </div>

    <form v-if="status !== 'success'" class="space-y-6" @submit.prevent="sendMessage">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          v-model="form.name"
          type="text"
          required
          class="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-purple focus:ring-brand-purple p-3"
          placeholder="Your name"
        >
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          v-model="form.email"
          type="email"
          required
          class="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-purple focus:ring-brand-purple p-3"
          placeholder="you@example.com"
        >
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          v-model="form.message"
          rows="4"
          required
          class="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-purple focus:ring-brand-purple p-3"
          placeholder="How can we help you?"
        ></textarea>
      </div>
      <button
        type="submit"
        :disabled="status === 'sending'"
        class="w-full bg-brand-purple text-white font-bold py-3 rounded-lg hover:opacity-90 transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
      >
        <Icon v-if="status === 'sending'" name="ph:spinner-gap" class="animate-spin mr-2" />
        <span v-if="status === 'sending'">Sending...</span>
        <span v-else>Send Message</span>
      </button>
    </form>

    <div class="mt-12 text-center text-sm text-gray-500">
      <p>Sunnybank, Westray</p>
      <p class="mt-1">{{ config.public.contactEmail }} • +44 7775 991523</p>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
