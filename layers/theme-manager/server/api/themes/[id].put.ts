/**
 * ================================================================================
 *
 * @project:    @monorepo/theme-manager
 * @file:       ~/layers/theme-manager/server/api/themes/[id].put.ts
 * @version:    V1.0.0
 * @createDate: 2025 Nov 24
 * @createTime: 01:01
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * PUT Handler: Updates or Creates a theme.
 * Uses Service Locator.
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.0.0, 20251124-01:01
 * Initial creation and release of [id].put.ts
 *
 * ================================================================================
 */

import { defineEventHandler, getRouterParam, readBody, createError } from 'h3'
import type { ThemeProfile } from '../../../types/theme'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const body = await readBody<ThemeProfile>(event);

  if (!id || body.id !== id) {
    throw createError({ statusCode: 400, statusMessage: 'ID mismatch' });
  }

  const repo = getThemeRepository();
  await repo.saveTheme(body);

  return { success: true, id };
})










