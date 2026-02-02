/**
 * ================================================================================
 *
 * @project:    @monorepo/theme-manager
 * @file:       ~/layers/theme-manager/composables/02.init-theme.global.ts
 * @version:    V1.0.0
 * @createDate: 2025 Nov 19
 * @createTime: 23:25
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * High-priority global middleware to ensure the active theme datastore is loaded
 * into the store before the page renders.
 *
 * This runs AFTER '01.init-authentication' but BEFORE page components are mounted.
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.0.0, 20251119-23:25
 * Initial creation and release of 02.init-theme.global.ts
 *
 * ================================================================================
 */

import { useThemeStore } from '../stores/storeTheme'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const nuxtApp = useNuxtApp();

  // 1. Safe Access: Middleware runs after Pinia is installed.
  const themeStore = useThemeStore(nuxtApp.$pinia);

  // 2. Hydration: Ensure theme datastore is loaded from cookie/API.
  // We await this so the datastore is ready for the client plugin to use immediately.
  await themeStore.initialize();
})


















