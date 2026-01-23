/**
 * ================================================================================
 *
 * @project:    @monorepo/theme-manager
 * @file:       ~/layers/theme-manager/server/api/themes/index.post.ts
 * @version:    V1.1.0
 * @createDate: 2025 Nov 18
 * @createTime: 23:10
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * POST Handler: Creates a NEW theme.
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.1.0, 20251124-00:58
 * - Removed direct file system access.
 * - Uses Service Locator `getThemeRepository()`.
 * - Preserves "Conflict (409)" check if ID already exists.
 *
 * V1.0.0, 20251118-23:10
 * Initial creation and release of index.post.ts
 *
 * ================================================================================
 */

import { defineEventHandler, readBody, createError } from 'h3'
import type { ThemeProfile } from '../../../types/theme'

export default defineEventHandler(async (event) => {
  const body = await readBody<ThemeProfile>(event);

  // 1. Input Validation
  if (!body.id || !body.name) {
    throw createError({ statusCode: 400, statusMessage: 'Missing theme ID or name.' });
  }

  const repo = getThemeRepository();

  // 2. Conflict Check (Ensure ID doesn't already exist)
  const existingTheme = await repo.findThemeById(body.id);
  if (existingTheme) {
    throw createError({ statusCode: 409, statusMessage: `Theme ID '${body.id}' already exists.` });
  }

  // 3. Save (Create)
  try {
    await repo.saveTheme(body);
    return { success: true, id: body.id };
  } catch (e: any) {
    throw createError({ statusCode: 500, statusMessage: `Failed to create theme: ${e.message}` });
  }
})


















