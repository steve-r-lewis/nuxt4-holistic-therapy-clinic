<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/components/layout/SiteHeader.vue
 * @version:    1.1.0
 * @createDate: 2026 Jan 22
 * @createTime: 23:21
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * Site Header component with responsive mobile navigation.
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.1.0, 20260212
 * - Added mobile navigation menu and toggle functionality.
 *
 * V1.0.0, 20260122-23:21
 * Initial creation and release of SiteHeader.vue
 *
 * ================================================================================
 */

const route = useRoute();

// State for mobile menu
const isMobileMenuOpen = ref(false);

// Close mobile menu when route changes
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
};

// NEW (Correct for Data Files)
const { data: header } = await useAsyncData('site-header', () =>
  queryCollection('layout').where('stem', '=', 'layout/header').first()
)
</script>

<template>
  <header class="w-full px-6 py-5 flex justify-between items-center max-w-7xl mx-auto bg-white/90 backdrop-blur-sm sticky top-0 z-50">

    <div v-if="header" class="flex items-center gap-10 w-full justify-between">
      <div class="flex items-center gap-10">
        <NuxtLink :to="header.logo?.link || '/'" class="flex items-center gap-2 font-serif text-2xl font-bold text-gray-800 tracking-tight z-50 relative">
          <img
            v-if="header.logo?.image"
            :src="header.logo.image"
            :alt="header.logo.alt"
            class="w-10 h-10 object-contain"
          />
          {{ header.logo?.text }}
        </NuxtLink>

        <nav class="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <NuxtLink
            v-for="link in header.navigation"
            :key="link.to"
            :to="link.to"
            class="hover:text-brand-purple hover:underline underline-offset-4 transition-all"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <NuxtLink
          v-if="header.cta"
          :to="header.cta.to"
          class="hidden sm:block text-sm font-medium text-gray-600 hover:text-brand-purple transition"
        >
          {{ header.cta.label }}
        </NuxtLink>

        <button
          @click="toggleMobileMenu"
          class="md:hidden relative z-50 p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <div class="w-6 h-6 flex flex-col justify-center gap-1.5">
            <span
              class="block h-0.5 w-6 bg-current transition-all duration-300"
              :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"
            ></span>
            <span
              class="block h-0.5 w-6 bg-current transition-all duration-300"
              :class="{ 'opacity-0': isMobileMenuOpen }"
            ></span>
            <span
              class="block h-0.5 w-6 bg-current transition-all duration-300"
              :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <div v-else class="flex items-center justify-between w-full animate-pulse">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
        <div class="w-48 h-6 bg-gray-200 rounded"></div>
      </div>
      <div class="hidden sm:block w-20 h-4 bg-gray-200 rounded"></div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen && header"
        class="fixed inset-0 top-[80px] bg-white z-40 md:hidden flex flex-col px-6 py-8 border-t border-gray-100 h-[calc(100vh-80px)]"
      >
        <nav class="flex flex-col gap-6 text-lg font-medium text-gray-800">
          <NuxtLink
            v-for="link in header.navigation"
            :key="link.to"
            :to="link.to"
            class="py-2 border-b border-gray-50 hover:text-brand-purple transition-colors"
            @click="isMobileMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>

          <NuxtLink
            v-if="header.cta"
            :to="header.cta.to"
            class="sm:hidden py-2 text-brand-purple font-semibold"
            @click="isMobileMenuOpen = false"
          >
            {{ header.cta.label }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>

  </header>
</template>
