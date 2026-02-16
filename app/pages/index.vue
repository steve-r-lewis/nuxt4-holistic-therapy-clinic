<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/pages/index.vue
 * @version:    1.1.0
 * @createDate: 2026 Jan 22
 * @createTime: 23:54
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * Homepage component.
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.1.0, 20260216
 * - Removed .limit(4) from therapies query to fetch all services.
 * - Replaced LandingContentGrid with ServiceCarousel to allow scrolling through all services.
 *
 * V1.0.0, 20260122-23:54
 * Initial creation and release of index.vue
 *
 * ================================================================================
 */

import ServiceCarousel from '../components/ServiceCarousel';

const siteConfig = useSiteConfig();

// 1. Fetch Dynamic Content (Limit to 4 items for the homepage grid)
// const { data: homeTreatments } = await useAsyncData('home-treatments', () =>
//   queryCollection('therapies').limit(4).all()
// );

// 1. Fetch Dynamic Content
// CHANGED: Removed .limit(4) to allow all therapies to be loaded for the carousel
const { data: homeTreatments } = await useAsyncData('home-treatments', () =>
  queryCollection('therapies').all()
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

    <section v-if="homeTreatments && homeTreatments.length > 0" class="py-8">

      <div class="text-center mb-16 max-w-3xl mx-auto">
        <span class="text-brand-purple font-bold tracking-widest text-xs uppercase mb-2 block">
          Our Therapies
        </span>

        <h2 class="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
          Curated Treatments for Total Wellness
        </h2>

        <p class="text-gray-500 text-lg leading-relaxed">
          We believe every body has a unique story. I listen to your needs to craft a personalized
          session that addresses your specific physical and emotional goals.
        </p>
      </div>

      <div class="text-left mb-8 max-w-3xl mx-auto">
        <p class="text-lg text-gray-600 mb-4 leading-relaxed"><span class="font-bold">Advanced Recovery Technology Integrated</span>, where needed to accelerate your results:</p>

        <ul class="text-gray-600 mb-4 leading-relaxed">
          <li><span class="font-bold">Clinical Ultrasound:</span> Stimulates healing in ligaments, tendons, and muscle fibers.</li>
          <li><span class="font-bold">Dynamic Cupping:</span> Decompressive suction combined with red light therapy. Improves blood flow and cellular repair.</li>
          <li><span class="font-bold">Gua Sha:</span> Traditional technique to release deep-seated muscular tension.</li>
          <li><span class="font-bold">Practical Aftercare:</span> Simple home movements to maintain your progress.</li>
        </ul>

        <p class="text-lg text-gray-600 leading-relaxed">
          <span class="font-bold">📞 Book Your Appointment:</span> <span class="font-bold"><a href="tel:07775991523">07775 991523</a></span> Gift Vouchers & Loyalty Cards Available.
        </p>
      </div>

      <ServiceCarousel :services="homeTreatments" />
    </section>

    <div class="flex flex-col items-center text-center space-y-6 py-12 bg-brand-purple/5 rounded-3xl">
      <h3 class="text-2xl font-serif font-bold text-gray-900">Ready to prioritize your wellness?</h3>
      <p class="text-gray-600 max-w-lg">
        Book your appointment today and take the first step towards a balanced, pain-free life.
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles if necessary, currently relying on Tailwind utility classes */
</style>
