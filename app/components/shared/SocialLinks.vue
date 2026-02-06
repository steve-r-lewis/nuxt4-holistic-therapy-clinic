<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/components/shared/SocialLinks.vue
 * @version:    1.0.0
 * @createDate: 2026 Feb 06
 * @createTime: 20:51
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
 * V1.0.0, 20260206-20:51
 * Initial creation and release of SocialLinks.vue
 *
 * ================================================================================
 */

defineProps<{
  items: {
    icon: string
    link: string
    label: string
  }[]
}>()
</script>

<template>
  <div class="flex gap-6 text-gray-400">
    <NuxtLink
      v-for="(social, index) in items"
      :key="index"
      :to="social.link"
      :aria-label="social.label"
      class="hover:text-brand-purple transition transform hover:scale-110"
    >
      <Icon :name="social.icon" class="w-5 h-5" />
    </NuxtLink>
  </div>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
