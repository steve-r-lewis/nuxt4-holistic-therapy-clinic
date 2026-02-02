/**
 * ================================================================================
 *
 * @project:    @monorepo/theme-manager
 * @file:       ~/layers/theme-manager/plugins/theme-loader.client.ts
 * @version:    V3.3.0
 * @createDate: 2025 Nov 18
 * @createTime: 16:42
 * @author:     Steve R Lewis
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * Client-side plugin to dynamically apply CSS variables to the DOM.
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V3.3.0, 20251207-00:35
 * - Added defensive check in `applyTheme`. If `theme.colors` is undefined,
 * it now logs a warning and returns instead of throwing a TypeError.
 *
 * V3.2.0, 20251120-01:36
 * - Moved logic into 'app:created' hook to ensure Pinia is fully installed.
 * - This fixes the "Pinia not found" warning/error on initial load.
 *
 * V3.1.0, 20251120-00:56
 * - Fixes "getActivePinia()" race condition by explicitly passing the
 * pinia instance from nuxtApp to the store.
 *
 * V3.0.0, 20251119-23:28
 * - Removed datastore initialization logic (moved to 02.init-theme.global.ts).
 * - Removed complex race-condition checks (no longer needed).
 * - Focuses solely on reactive DOM manipulation.
 *
 * V2.0.0, 20251118-17:30
 *
 * V1.0.0, 20251118-16:42
 * Initial creation and release of theme-loader.client.ts
 *
 * ================================================================================
 */

import { watch } from 'vue'
import { defineNuxtPlugin } from '#app'
import { useThemeStore } from '../stores/storeTheme'
import type { ThemeProfile } from '../types/theme'

// --- Utility Functions ---

function applyTheme(theme: ThemeProfile) {
  // SAFETY GUARD: Prevent crash if partial datastore is loaded
  if (!theme || !theme.colors) {
    console.warn('[ThemeLoader] Skipping apply: Theme datastore is incomplete (missing colors).');
    return;
  }

  const style = document.documentElement.style;
  const lightColors = theme.colors.light || {};
  const darkColors = theme.colors.dark || {};

  // Apply light mode colors
  for (const [key, states] of Object.entries(lightColors)) {
    for (const [state, value] of Object.entries(states)) {
      if (value) {
        style.setProperty(`--ui-${key}-${state}-light`, value as string);
      }
    }
  }

  // Apply dark mode colors
  for (const [key, states] of Object.entries(darkColors)) {
    for (const [state, value] of Object.entries(states)) {
      if (value) {
        style.setProperty(`--ui-${key}-${state}-dark`, value as string);
      }
    }
  }
}

function clearTheme(theme: ThemeProfile) {
  if (!theme || !theme.colors) return;

  const style = document.documentElement.style;
  const lightColors = theme.colors.light || {};
  const darkColors = theme.colors.dark || {};

  // Clear light mode colors
  for (const [key, states] of Object.entries(lightColors)) {
    for (const [state] of Object.entries(states)) {
      style.removeProperty(`--ui-${key}-${state}-light`);
    }
  }

  // Clear dark mode colors
  for (const [key, states] of Object.entries(darkColors)) {
    for (const [state] of Object.entries(states)) {
      style.removeProperty(`--ui-${key}-${state}-dark`);
    }
  }
}

// --- Nuxt Plugin Implementation ---

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', (vueApp) => {
    const pinia = nuxtApp.$pinia;
    if (!pinia) return;

    const themeStore = useThemeStore(pinia);

    // Watch for changes (User switching themes via UI)
    watch(
      () => themeStore.activeThemeData,
      (newTheme, oldTheme) => {
        if (oldTheme) {
          clearTheme(oldTheme);
        }
        if (newTheme) {
          applyTheme(newTheme);
        }
      },
      { immediate: true }
    );
  });
});
