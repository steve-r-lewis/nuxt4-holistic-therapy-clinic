<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/pages/faq.vue
 * @version:    1.1.0
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
 * Uses <MDC> to render markdown content within the JSON answers.
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.1.0, 20260213
 * - Implemented <MDC> component to correctly render Markdown formatting from JSON data.
 * - Added specific styling for generated markdown tags (strong, em, p).
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
const openIndex = ref<number | null>(0); // Open the first item by default

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
});
</script>

<template>
  <div class="bg-white py-16 sm:py-24">
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
                <MDC
                  :value="item.answer"
                  tag="div"
                  class="text-base leading-7 text-gray-600 space-y-4 [&>p]:mb-4 [&>p:last-child]:mb-0 [&>strong]:font-bold [&>strong]:text-gray-900 [&>em]:italic"
                />
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
