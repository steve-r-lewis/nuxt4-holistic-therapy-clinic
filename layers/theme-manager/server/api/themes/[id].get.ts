/**
 * ================================================================================
 *
 * @project:    @monorepo/theme-manager
 * @file:       ~/layers/theme-manager/server/api/themes/[id].get.ts
 * @version:    V1.0.0
 * @createDate: 2025 Nov 24
 * @createTime: 01:00
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * GET Handler: Reads a specific theme.
 * Uses Service Locator.
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.0.0, 20251124-01:00
 * Initial creation and release of [id].get.ts
 *
 * ================================================================================
 */

import { defineEventHandler, getRouterParam, createError } from 'h3'

// Nitro Auto-Import: getThemeRepository()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  if (!id) throw createError({ statusCode: 400, statusMessage: 'Theme ID required' });

  const repo = getThemeRepository();
  const theme = await repo.findThemeById(id);

  if (!theme) {
    throw createError({ statusCode: 404, statusMessage: 'Theme not found' });
  }

  return theme;
})










