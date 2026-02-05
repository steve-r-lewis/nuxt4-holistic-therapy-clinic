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

// Fetch the hero data from the 'landing' collection
const { data: hero } = await useAsyncData('hero-section', () =>
  queryCollection('landing').path('/hero').first()
)
</script>

<template>
  <section class="bg-stone-50 rounded-[2rem] p-8 lg:p-12 border border-stone-100">

    <div v-if="hero" class="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div class="mb-10">
          <span class="inline-block py-1 px-3 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-wider uppercase mb-4">
            {{ hero.badge }}
          </span>
          <h2 class="text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
            {{ hero.title }}
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            {{ hero.description }}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 gap-x-6 gap-y-10">
          <div v-for="(item, index) in hero.features" :key="index" class="flex gap-4">
            <div class="shrink-0 w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-brand-purple shadow-sm">
              <Icon :name="item.icon" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="font-bold text-gray-900 text-sm mb-1">{{ item.title }}</h3>
              <p class="text-xs text-gray-500 leading-relaxed">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="relative group">
        <div class="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
          <NuxtImg
            :src="hero.image"
            :alt="hero.imageAlt"
            format="webp"
            loading="eager"
            sizes="100vw md:50vw lg:600px"
            class="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-sm border border-white/50 flex items-center justify-between">
            <div class="flex flex-col">
              <span class="text-xs font-bold text-brand-purple uppercase tracking-wider">{{ hero.promo.badge }}</span>
              <span class="text-sm text-gray-600">{{ hero.promo.text }}</span>
            </div>

            <NuxtLink
              :to="hero.promo.link"
              :aria-label="hero.promo.linkText"
              class="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-brand-purple transition"
            >
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="grid lg:grid-cols-2 gap-16 items-center animate-pulse">
      <div class="space-y-6">
        <div class="h-6 w-32 bg-gray-200 rounded-full"></div>
        <div class="h-12 w-3/4 bg-gray-200 rounded-lg"></div>
        <div class="h-4 w-full bg-gray-200 rounded"></div>
        <div class="h-4 w-5/6 bg-gray-200 rounded"></div>
      </div>
      <div class="aspect-[4/5] bg-gray-200 rounded-2xl"></div>
    </div>

  </section>
</template>


