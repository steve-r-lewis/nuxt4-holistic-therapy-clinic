<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/pages/about.vue
 * @version:    1.0.0
 * @createDate: 2026 Jan 23
 * @createTime: 00:47
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
 * V1.0.0, 20260123-00:47
 * Initial creation and release of about.vue
 *
 * ================================================================================
 */

useHead({
  title: 'My Story | Holistic Therapy Clinic'
})
</script>

<template>
  <div class="max-w-3xl mx-auto px-6 py-12 space-y-8">
    <h1 class="text-4xl font-serif font-bold text-gray-900">My Story</h1>

    <div class="prose prose-gray max-w-none text-gray-600">
      <p class="text-lg leading-relaxed">
        Holistic Therapy Clinic began with a simple belief: that the body has an innate intelligence to heal itself when given the right space and support.
      </p>

      <p>
        Founded in 2000, my clinic moves away from the "rush-in, rush-out" mentality of modern spas.
        I focus on slow, deliberate practice, ensuring every client feels heard, understood, and restored.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold text-gray-900">How I got here</h2>

    <div class="prose prose-gray max-w-none text-gray-600">
      <p class="text-lg leading-relaxed">
        Following a period of significant personal change in my thirties, I chose to re-evaluate my priorities and return to education to follow a lifelong fascination with how the human body functions. Massage therapy became the perfect bridge for my curiosity between biomechanical anatomy and a deep-seated desire to help others. I had the privilege of training under Sara Thomas, a founder of the Massage Training Institute (MTI), whose mentorship shaped my foundational approach to touch and healing.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold text-gray-900">My Qualifications & Approach</h2>

    <div class="prose prose-gray max-w-none text-gray-600">
      <p class="text-lg leading-relaxed">
        My appetite for learning only grew as I sought to understand the 'why' behind my clients' pain. This led to a year of Clinical & Remedial Studies at The Middlesex School of Complementary Medicine, focusing on common overuse conditions like tennis elbow. To deepen my expertise, I completed a two-year Sports Therapy qualification at the Raworth Centre. This training was invaluable, integrating nutrition, gait analysis, and specialized bodywork to create a truly holistic approach to recovery.
      </p>
    </div>

    <div>
      <p>
        A key focus of my work is Fascia, the body’s interconnected support network that wraps every muscle, organ, bone, and nerve.
      </p>

      <p>
        When fascia becomes restricted due to injury, stress, or posture, it limits your movement and sensation. By using targeted techniques that address both the fascial and muscular layers, I help release built-up tension, ease chronic pain, and restore your body’s natural mobility.
      </p>

      <p>
        Understanding the connection between body and tissue has transformed how I approach treatment, allowing me to address not just where you hurt, but why you hurt—and how we can work together to help you feel better.
      </p>
    </div>

    <div class="bg-stone-50 p-8 rounded-2xl border border-stone-100 mt-8">
      <h2 class="font-bold text-gray-900 mb-2">Our Philosophy</h2>
      <p class="text-gray-600 italic">"Wellness is not a luxury; it is a necessity for a balanced life."</p>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
