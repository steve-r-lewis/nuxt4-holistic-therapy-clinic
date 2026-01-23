/**
 * ================================================================================
 *
 * @project:    @monorepo/theme-manager
 * @file:       ~/layers/theme-manager/composables/useTheme.ts
 * @version:    V1.0.0
 * @createDate: 2025 Nov 18
 * @createTime: 16:30
 * @author:     Steve R Lewis
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * Composable wrapper around the Theme Pinia store.
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.0.0, 20251118-16:30
 * Initial creation and release of useTheme.ts
 *
 * ================================================================================
 */

import { storeToRefs } from 'pinia'
import { useThemeStore } from '../stores/storeTheme'

// ✅ ACCEPT PINIA ARG: This allows the plugin to inject the instance during SSR/Init
export const useTheme = (pinia?: any) => {
  const nuxtApp = useNuxtApp();
  // Use the passed pinia instance or fallback to the injected one
  const themeStore = useThemeStore(pinia || nuxtApp.$pinia);

  // Extract state as refs (so they stay reactive)
  const {
    activeThemeId,
    activeThemeData,
    loading,
    error,
    hasActiveTheme,
    activeThemeName
  } = storeToRefs(themeStore);

  return {
    // State
    activeThemeId,
    activeThemeData,
    loading,
    error,
    hasActiveTheme,
    activeThemeName,

    // Actions
    setTheme: themeStore.setTheme,
    clearTheme: themeStore.clearTheme,
    initialize: themeStore.initialize
  }
};


















