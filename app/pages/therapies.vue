<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/pages/therapies.vue
 * @version:    1.0.0
 * @createDate: 2026 Jan 23
 * @createTime: 00:43
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
 * V1.0.0, 20260123-00:43
 * Initial creation and release of therapies.vue
 *
 * ================================================================================
 */

useHead({
  title: 'Treatments & Therapies | Holistic Therapy Clinic',
  meta: [{ name: 'description', content: 'Explore our holistic massage treatments including Swedish, Deep Tissue, and Aromatherapy.' }]
});

const { data: treatments } = await useAsyncData('therapy-list', () =>
  queryCollection('therapies').all()
)
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 pt-4 pb-12">
    <div class="text-left mb-8 max-w-3xl mx-auto">
      <h1 class="text-4xl font-serif font-bold text-gray-900 mb-6">Your Treatments</h1>

      <p class="text-lg text-gray-600 mb-4 leading-relaxed"><span class="font-bold">Additional Therapy Technologies </span>, integrated where needed to accelerate your results:
      </p>

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

    <div class="text-center mb-8 max-w-3xl mx-auto">
      <p class="text-lg text-gray-600 leading-relaxed pb-2">
        <span class="font-bold">Appointment Times</span>
      </p>

      <p class="text-lg text-gray-600 mb-4 leading-relaxed">
        Monday, Wednesday, Thursday, Friday
      </p>

      <ul class="text-gray-600 mb-4 leading-relaxed py-2">
        <li>9:00</li>
        <li>11:00</li>
        <li>14:00</li>
        <li>16:00</li>
        <li>Last app  7:00PM</li>
      </ul>

      <p class="text-lg text-gray-600 mb-4 leading-relaxed">
        Tuesday – Home Visit Appointments Available
      </p>

      <p class="text-gray-600 mb-4 leading-relaxed">
        Professional therapeutic massage treatments in the comfort of your own home
      </p>

      <p class="text-lg text-gray-600 leading-relaxed">
        Saturday 09:00 & 11:00
      </p>
    </div>

    <div class="flex justify-center pt-6 pb-8">
      <a
        href="/documents/a5-price-list-version-03.pdf"
        download="Holistic-Therapy-Clinic-Prices.pdf"
        target="_blank"
        class="inline-flex items-center justify-center gap-2 bg-brand-purple text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:opacity-90 hover:shadow-lg transition cursor-pointer"
      >
        <Icon name="lucide:file-down" class="w-5 h-5" />
        Download Price List (PDF)
      </a>
    </div>

    <div class="grid gap-6" v-if="treatments">
      <template v-for="t in treatments" :key="t.id">

        <NuxtLink
          v-if="t.relatedPost"
          :to="`/treatments/${t.relatedPost}`"
          class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between md:items-center gap-4 transition relative group hover:border-brand-purple/50 cursor-pointer hover:shadow-md"
        >
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-xl font-bold text-gray-800 group-hover:text-brand-purple transition">
                {{ t.name }}
              </h3>
              <Icon name="ph:arrow-right" class="text-gray-300 group-hover:text-brand-purple group-hover:translate-x-1 transition" />
            </div>

            <p class="text-gray-500 text-sm mt-1">{{ t.desc }}</p>
          </div>

          <div class="text-right shrink-0">
            <div class="font-serif text-lg font-bold text-brand-purple">{{ t.price }}</div>
            <div class="text-xs text-gray-400 font-medium">{{ t.duration }}</div>
          </div>
        </NuxtLink>

        <div
          v-else
          class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between md:items-center gap-4"
        >
          <div>
            <h3 class="text-xl font-bold text-gray-800">{{ t.name }}</h3>
            <p class="text-gray-500 text-sm mt-1">{{ t.desc }}</p>
          </div>

          <div class="text-right shrink-0">
            <div class="font-serif text-lg font-bold text-brand-purple">{{ t.price }}</div>
            <div class="text-xs text-gray-400 font-medium">{{ t.duration }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
