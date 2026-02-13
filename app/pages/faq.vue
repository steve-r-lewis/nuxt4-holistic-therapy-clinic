<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/pages/faq.vue
 * @version:    1.0.0
 * @createDate: 2026 Feb 13
 * @createTime: 00:05
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * FAQ Page component. Fetches data from the 'faq' content collection and
 * displays it in an accordion layout.
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.0.0, 20260213-00:05
 * Initial creation and release of faq.vue
 *
 * ================================================================================
 */

// Fetch FAQ data
const { data: faq } = await useAsyncData('faq-page', () =>
  queryCollection('faq').first()
);

// Accordion state management
const openIndex = ref<number | null>(0) // Open the first item by default

const toggleAccordion = (index: number) => {
  if (openIndex.value === index) {
    openIndex.value = null
  } else {
    openIndex.value = index
  }
};

useHead({
  title: 'FAQ - Holistic Therapy Clinic',
  meta: [
    { name: 'description', content: faq.value?.description || 'Frequently Asked Questions' }
  ]
})
</script>

<template>
  <div class="bg-white py-16 sm:py-24">

    <h1 class="text-4xl font-serif font-bold text-gray-900">Your Appointment: What to Expect</h1>

    <div class="prose prose-gray max-w-none text-gray-600">

      <h2 class="text-4xl font-serif font-bold text-gray-900">Full Hands-on Time:</h2>
      <p class="text-lg leading-relaxed">
        I value your recovery. The time listed for each massage is the **actual treatment time**. Please allow an additional 10–15 minutes for your initial consultation, postural assessment, and post-treatment advice.
      </p>

      <h2 class="text-4xl font-serif font-bold text-gray-900">First Appointments:</h2>
      <p class="text-lg leading-relaxed">
        Your first visit will include a comprehensive health intake. There is no extra charge for this—it’s part of my commitment to safe, effective care.
      </p>

      <h2 class="text-4xl font-serif font-bold text-gray-900">Arrival:</h2>
      <p class="text-lg leading-relaxed">
        Please arrive precisely at your appointment time. Early arrival is not necessary as I allow a buffer between clients to ensure the room is fully sanitised and ready for you.
      </p>

      <h2 class="text-4xl font-serif font-bold text-gray-900">Cancellations:</h2>
      <p class="text-lg leading-relaxed">
        As a small business, "no-shows" have a big impact. Please provide at least 24 hours' notice if you need to reschedule.
      </p>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <div v-if="faq" class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <div class="mb-10 text-center">
          <h2 class="text-4xl font-serif font-bold leading-10 tracking-tight text-gray-900">
            {{ faq.title }}
          </h2>
          <p class="mt-6 text-base leading-7 text-gray-600">
            {{ faq.description }}
          </p>
        </div>

        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <div v-for="(item, index) in faq.items" :key="index" class="pt-6">
            <dt>
              <button
                type="button"
                class="flex w-full items-start justify-between text-left text-gray-900 focus:outline-none group"
                @click="toggleAccordion(index)"
                :aria-expanded="openIndex === index"
              >
                <span class="text-base font-semibold leading-7 group-hover:text-brand-purple transition-colors">
                  {{ item.question }}
                </span>
                <span class="ml-6 flex h-7 items-center">
                  <Icon
                    name="lucide:chevron-down"
                    class="h-6 w-6 transition-transform duration-200 ease-in-out"
                    :class="{ '-rotate-180': openIndex === index }"
                  />
                </span>
              </button>
            </dt>
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform scale-95 opacity-0 -translate-y-2"
              enter-to-class="transform scale-100 opacity-100 translate-y-0"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100 translate-y-0"
              leave-to-class="transform scale-95 opacity-0 -translate-y-2"
            >
              <dd v-if="openIndex === index" class="mt-2 pr-12">
                <p class="text-base leading-7 text-gray-600">
                  {{ item.answer }}
                </p>
              </dd>
            </Transition>
          </div>
        </dl>
      </div>

      <div v-else class="mx-auto max-w-4xl animate-pulse">
        <div class="h-10 w-1/3 bg-gray-200 rounded mx-auto mb-6"></div>
        <div class="h-4 w-2/3 bg-gray-200 rounded mx-auto mb-16"></div>
        <div class="space-y-8">
          <div class="h-8 w-full bg-gray-200 rounded"></div>
          <div class="h-8 w-full bg-gray-200 rounded"></div>
          <div class="h-8 w-full bg-gray-200 rounded"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
