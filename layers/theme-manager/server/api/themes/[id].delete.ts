/**
 * ================================================================================
 *
 * @project:    @monorepo/theme-manager
 * @file:       ~/layers/theme-manager/server/api/themes/[id].delete.ts
 * @version:    V1.0.0
 * @createDate: 2025 Nov 24
 * @createTime: 01:01
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * DELETE Handler: Removes a theme.
 * Uses Service Locator.
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.0.0, 20251124-01:01
 * Initial creation and release of [id].delete.ts
 *
 * ================================================================================
 */

import { defineEventHandler, getRouterParam, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  if (!id) throw createError({ statusCode: 400, statusMessage: 'ID required' });

  const repo = getThemeRepository();
  const success = await repo.deleteTheme(id);

  if (!success) {
    throw createError({ statusCode: 404, statusMessage: 'Theme not found' });
  }

  return { success: true, id };
})










