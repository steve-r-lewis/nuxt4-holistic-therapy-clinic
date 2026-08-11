<script setup lang="ts">
/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~app/components/content/ProseA.vue
 * @version:    1.0.0
 * @createDate: 2026 Mar 16
 * @createTime: 00:57
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
 * V1.0.0, 20260316-00:57
 * Initial creation and release of ProseA.vue
 *
 * ================================================================================
 */

import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
})

// Auto-detect if the link is external
const isExternal = computed(() => props.href.startsWith('http'))

// Force external links to open in a new tab
const computedTarget = computed(() => isExternal.value ? '_blank' : props.target)
</script>

<template>
  <NuxtLink
    :to="href"
    :target="computedTarget"
    :external="isExternal"
    class="underline decoration-brand-purple/30 hover:decoration-brand-purple transition-colors"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
