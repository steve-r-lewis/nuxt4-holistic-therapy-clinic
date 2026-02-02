/**
 * ================================================================================
 *
 * @project:    @monorepo/theme-manager
 * @file:       ~/layers/theme-manager/server/api/themes/index.get.ts
 * @version:    V1.1.0
 * @createDate: 2025 Nov 18
 * @createTime: 22:49
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * GET Handler: Lists all available themes.
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.1.0, 20251124-00:56
 * - Removed direct file system access.
 * - Uses Service Locator `getThemeRepository()` to fetch datastore.
 *
 * V1.0.0, 20251118-22:49
 * Initial creation and release of index.get.ts
 *
 * ================================================================================
 */

import { defineEventHandler, createError } from 'h3'

// Nitro Auto-Import: getThemeRepository()

export default defineEventHandler(async (event) => {
  try {
    const repo = getThemeRepository();
    const themes = await repo.listThemes();
    return themes;
  } catch (e: any) {
    // Log error internally, return 500 to client
    console.error('Failed to load themes:', e);
    throw createError({ statusCode: 500, statusMessage: 'Failed to load themes.' });
  }
})


















