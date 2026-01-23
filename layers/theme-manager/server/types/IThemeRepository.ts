/**
 * ================================================================================
 *
 * @project:    @monorepo/theme-manager
 * @file:       ~/layers/theme-manager/server/types/IThemeRepository.ts
 * @version:    V1.1.0
 * @createDate: 2025 Nov 24
 * @createTime: 00:21
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * Contract for Theme Data Access.
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.1.0, 20251124-01:09
 * Added deleteTheme method.
 *
 * V1.0.0, 20251124-00:21
 * Initial creation and release of IThemeRepository.ts
 *
 * ================================================================================
 */

import type { ThemeProfile } from '../../types/theme';

export interface IThemeRepository {
  findThemeById(id: string): Promise<ThemeProfile | null>;
  saveTheme(theme: ThemeProfile): Promise<void>;
  listThemes(): Promise<ThemeProfile[]>;
  deleteTheme(id: string): Promise<boolean>; // Added
}


















