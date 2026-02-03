<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/pages/index.vue
 * @version:    1.0.0
 * @createDate: 2026 Jan 22
 * @createTime: 23:54
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
 * V1.0.0, 20260122-23:54
 * Initial creation and release of index.vue
 *
 * ================================================================================
 */

const siteConfig = useSiteConfig();

// 1. Fetch Dynamic Content (Limit to 4 items for the homepage grid)
const { data: homeTreatments } = await useAsyncData('home-treatments', () =>
  queryCollection('therapies').limit(4).all()
);

// 2. Advanced SEO Configuration
useSeoMeta({
  title: 'Holistic Therapy Clinic | Holistic Massage Therapy & Wellness',
  description: 'Professional holistic massage therapy clinic offering deep tissue, swedish, and aromatherapy treatments.',
  // Open Graph (Social Sharing)
  ogTitle: 'Holistic Therapy Clinic',
  ogDescription: 'Professional holistic massage therapy clinic offering deep tissue, swedish, and aromatherapy treatments.',
  ogImage: '/logo.png', // Fallback to logo or add a specific /images/og-home.jpg
  ogUrl: siteConfig.url,
  ogType: 'website',
  // Twitter Card
  twitterCard: 'summary_large_image',
});

// 3. Schema.org (Local Business Rich Snippet)
useSchemaOrg([
  defineLocalBusiness({
    name: 'Holistic Therapy Clinic',
    image: '/logo.png',
    telephone: '+44 7775 991523',
    email: 'susan.chinnery@holistictherapyclinic.co.uk',
    address: {
      streetAddress: 'Sunnybank',
      addressLocality: 'Westray',
      addressRegion: 'Orkney',
      postalCode: 'KW17 2DW',
      addressCountry: 'UK'
    },
    priceRange: '££',
    openingHoursSpecification: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      }
    ]
  })
])
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-10 space-y-24">
    <LandingHeroSection />

    <section v-if="homeTreatments">
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <span class="text-brand-purple font-bold tracking-widest text-xs uppercase mb-2 block">
          Our Therapies
        </span>
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
          Curated Treatments for Total Wellness
        </h2>
        <p class="text-gray-500 text-lg leading-relaxed">
          We believe every body tells a unique story. Our therapists listen to your needs to craft a personalized
          session that addresses your specific physical and emotional goals.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="t in homeTreatments"
          :key="t.id"
          class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col h-full group"
        >
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-serif text-xl font-bold text-gray-900 leading-tight group-hover:text-brand-purple transition">
              {{ t.name }}
            </h3>
            <span class="bg-purple-50 text-brand-purple text-xs font-bold px-2 py-1 rounded-md shrink-0">
              {{ t.price }}
            </span>
          </div>

          <p class="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
            {{ t.desc }}
          </p>

          <div class="mt-auto pt-4 border-t border-gray-50">
            <NuxtLink
              v-if="t.relatedPost"
              :to="`/treatments/${t.relatedPost}`"
              class="inline-flex items-center text-sm font-bold text-brand-purple hover:text-purple-700 transition"
            >
              Learn More
              <Icon name="ph:arrow-right" class="ml-2 group-hover:translate-x-1 transition" />
            </NuxtLink>

            <span v-else class="inline-flex items-center text-sm font-medium text-gray-300 cursor-not-allowed">
              Learn More
              <Icon name="ph:arrow-right" class="ml-2" />
            </span>
          </div>
        </div>
      </div>
    </section>

    <div class="flex flex-col items-center text-center space-y-6 py-12 bg-brand-purple/5 rounded-3xl">
      <h3 class="text-2xl font-serif font-bold text-gray-900">Ready to prioritize your wellness?</h3>
      <p class="text-gray-600 max-w-lg">
        Book your appointment today and take the first step towards a balanced, pain-free life.
      </p>
<!--      <button class="bg-brand-purple text-white px-8 py-3 rounded-full text-sm font-medium shadow-md hover:opacity-90 hover:shadow-lg transition cursor-pointer flex items-center gap-2">-->
<!--        <Icon name="lucide:calendar-check-2" class="w-4 h-4" />-->
<!--        Book an Appointment-->
<!--      </button>-->
    </div>
  </div>
</template>









<!--<template>-->
<!--  <div class="max-w-7xl mx-auto px-6 py-10 space-y-24">-->
<!--    <LandingHeroSection />-->

<!--    <LandingContentGrid />-->

<!--    <div class="flex flex-col items-center text-center space-y-6 py-12 bg-brand-purple/5 rounded-3xl">-->
<!--      <h3 class="text-2xl font-serif font-bold text-gray-900">Ready to prioritize your wellness?</h3>-->
<!--      <p class="text-gray-600 max-w-lg">-->
<!--        Book your appointment today and take the first step towards a balanced, pain-free life.-->
<!--      </p>-->
<!--      <button class="bg-brand-purple text-white px-8 py-3 rounded-full text-sm font-medium shadow-md hover:opacity-90 hover:shadow-lg transition cursor-pointer flex items-center gap-2">-->
<!--        <Icon name="lucide:calendar-check-2" class="w-4 h-4" />-->
<!--        Book an Appointment-->
<!--      </button>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<style scoped>
/* Scoped styles if necessary, currently relying on Tailwind utility classes */
</style>
