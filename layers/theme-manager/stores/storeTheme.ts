/**
 * ================================================================================
 *
 * @project:    @monorepo/theme-manager
 * @file:       ~/layers/theme-manager/stores/storeTheme.ts
 * @version:    V1.4.0
 * @createDate: 2025 Nov 18
 * @createTime: 00:59
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * Pinia store for managing the active theme state.
 *
 * STRATEGY:
 * - Active Theme = JSON Object loaded in 'activeThemeData'.
 * - Default Theme = 'activeThemeData' is NULL.
 *
 * When the state is null, the 'theme-loader' plugin clears all inline styles,
 * allowing the browser to fall back to 'theme-default.css' naturally.
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.4.0, 20251207-01:30
 * - Removed static import of 'default-fresh.json'.
 * - Implemented "CSS Fallback" strategy: The default theme is now represented
 * by a NULL state, allowing the native CSS to take over.
 *
 * V1.2.0, 20251207-00:45
 * - Refactored to Strict TypeScript.
 * - Added explicit imports for Vue/Nuxt composables.
 * - Defined `ThemeSummary` type to handle partial theme objects safely.
 * - Updated `setTheme` to accept `ThemeProfile | ThemeSummary`.
 *
 * V1.1.0, 20251207-00:30
 * - Updated `setTheme` to handle "Summary" objects and auto-fetch.
 *
 * V1.0.0, 20251118-00:59
 * Initial creation and release of storeTheme.ts
 *
 * ================================================================================
 */

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useCookie, useState, useFetch } from '#imports'
import type { ThemeProfile } from '../types/theme'

/**
 * Represents the lightweight object found in 'theme-list.json'.
 */
export type ThemeSummary = Pick<ThemeProfile, 'id' | 'name' | 'version' | 'description'> & {
  colors?: never;
}

export const useThemeStore = defineStore('theme', () => {

  // --- State ---

  const activeThemeId = useCookie<string | null>('active-theme-id', {
    default: () => null,
    maxAge: 60 * 60 * 24 * 365
  });

  const activeThemeData = useState<ThemeProfile | null>('active-theme-data', () => null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // --- Computed ---

  const hasActiveTheme = computed((): boolean => !!activeThemeData.value);
  const activeThemeName = computed((): string => activeThemeData.value?.name || 'Default Theme');

  // --- Actions ---

  function clearTheme(): void {
    activeThemeData.value = null;
    activeThemeId.value = null;
    error.value = null;
  }

  async function setTheme(theme: ThemeProfile | ThemeSummary): Promise<void> {
    // 1. Check for Default
    if (theme.id === 'default-fresh') {
      clearTheme();
      return;
    }

    loading.value = true;
    error.value = null;

    try {
      let fullTheme: ThemeProfile;

      // 2. Fetch Data if missing colors
      if (!('colors' in theme) || !theme.colors) {
        const fetched = await $fetch<ThemeProfile>(`/api/themes/${theme.id}`);
        if (!fetched) {
          throw new Error(`Theme data for '${theme.id}' could not be retrieved.`);
        }
        fullTheme = fetched;
      } else {
        fullTheme = theme as ThemeProfile;
      }

      // 3. Verify Data
      if (!fullTheme.colors || !fullTheme.colors.light) {
        throw new Error(`Invalid theme definition: Color palette missing for '${fullTheme.name}'`);
      }

      // 4. Commit
      activeThemeData.value = fullTheme;
      activeThemeId.value = fullTheme.id;

    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      console.error('[ThemeStore] Failed to set theme:', msg);
      error.value = msg;
    } finally {
      loading.value = false;
    }
  }

  async function initialize(): Promise<void> {
    const themeId = activeThemeId.value;

    // If no ID, or ID is default, ensure we are in "Fallback Mode" (null state)
    if (!themeId || themeId === 'default-fresh') {
      if (activeThemeData.value) clearTheme();
      return;
    }

    // Optimization: If state is already hydrated (SSR), skip
    if (activeThemeData.value && activeThemeData.value.id === themeId) return;

    loading.value = true;
    error.value = null;

    try {
      // Fetch user theme
      const response = await $fetch<ThemeProfile>(`/api/themes/${themeId}`);

      if (response) {
        activeThemeData.value = response;
      } else {
        // 404: Theme deleted? Fallback to default CSS.
        console.warn(`[ThemeStore] Theme '${themeId}' not found. Resetting to default CSS.`);
        clearTheme();
      }

    } catch (e: unknown) {
      // API Error: Fallback to default CSS.
      console.error('[ThemeStore] Initialization failed:', e);
      clearTheme();
    } finally {
      loading.value = false;
    }
  }

  return {
    activeThemeId,
    activeThemeData,
    loading,
    error,
    hasActiveTheme,
    activeThemeName,
    setTheme,
    clearTheme,
    initialize
  }
});
