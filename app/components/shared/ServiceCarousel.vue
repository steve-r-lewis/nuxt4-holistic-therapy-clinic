<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/components/shared/ServiceCarousel.vue
 * @version:    1.0.0
 * @createDate: 2026 Feb 16
 * @createTime: 01:03
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * A responsive carousel component for displaying service cards.
 * Uses native CSS Scroll Snap for performance and touch-friendly navigation.
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.0.0, 20260216-01:03
 * Initial creation and release of ServiceCarousel.vue
 *
 * ================================================================================
 */

import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  services: any[] | null
}>();

const scrollContainer = ref<HTMLElement | null>(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(true);

// Update scroll buttons state
const updateScrollState = () => {
  if (!scrollContainer.value) return;

  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value;
  canScrollLeft.value = scrollLeft > 0
  // Allow a small buffer (1px) for calculation errors
  canScrollRight.value = scrollLeft < scrollWidth - clientWidth - 1
}

// Scroll handlers
const scroll = (direction: 'left' | 'right') => {
  if (!scrollContainer.value) return;

  const cardWidth = 320 // approximate card width + gap
  const scrollAmount = direction === 'left' ? -cardWidth : cardWidth

  scrollContainer.value.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  })
};

// Add event listeners for scroll state
onMounted(() => {
  const el = scrollContainer.value;
  if (el) {
    el.addEventListener('scroll', updateScrollState);
    // Initial check
    updateScrollState();
    // Check on resize
    window.addEventListener('resize', updateScrollState)
  }
});

onUnmounted(() => {
  const el = scrollContainer.value;
  if (el) {
    el.removeEventListener('scroll', updateScrollState)
  }
  window.removeEventListener('resize', updateScrollState)
})
</script>

<template>
  <div class="relative group w-full max-w-7xl mx-auto px-4 sm:px-6">

    <div
      ref="scrollContainer"
      class="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
      style="scrollbar-width: none; -ms-overflow-style: none;"
    >
      <div
        v-for="service in services"
        :key="service.id || service._path"
        class="snap-center shrink-0 w-[85vw] sm:w-[350px] flex flex-col h-full"
      >
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 h-full flex flex-col hover:shadow-md transition-shadow duration-300">
          <div class="mb-4">
            <h3 class="font-serif text-2xl font-bold text-gray-900 mb-2">
              {{ service.name }}
            </h3>
            <div class="flex items-center gap-4 text-sm font-medium text-gray-500">
              <span class="flex items-center gap-1">
                <Icon name="lucide:clock" class="w-4 h-4" />
                {{ service.duration }}
              </span>
              <span class="flex items-center gap-1 text-brand-purple">
                <Icon name="lucide:tag" class="w-4 h-4" />
                {{ service.price }}
              </span>
            </div>
          </div>

          <p class="text-gray-600 mb-6 flex-grow leading-relaxed">
            {{ service.desc }}
          </p>

          <div class="mt-auto pt-6 border-t border-gray-50">
            <NuxtLink
              :to="service._path?.replace('/datastore', '') || '/contact'"
              class="inline-flex items-center text-brand-purple font-semibold hover:text-brand-purple/80 transition-colors group/link"
            >
              Learn more
              <Icon name="lucide:arrow-right" class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <button
      @click="scroll('left')"
      class="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 lg:-ml-6 bg-white/90 backdrop-blur shadow-lg border border-gray-100 text-gray-700 p-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none hidden sm:flex disabled:opacity-0 disabled:pointer-events-none z-10"
      :disabled="!canScrollLeft"
      aria-label="Previous slide"
    >
      <Icon name="lucide:chevron-left" class="w-6 h-6" />
    </button>

    <button
      @click="scroll('right')"
      class="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 lg:-mr-6 bg-white/90 backdrop-blur shadow-lg border border-gray-100 text-gray-700 p-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none hidden sm:flex disabled:opacity-0 disabled:pointer-events-none z-10"
      :disabled="!canScrollRight"
      aria-label="Next slide"
    >
      <Icon name="lucide:chevron-right" class="w-6 h-6" />
    </button>

  </div>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
