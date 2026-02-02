/**
 * ================================================================================
 *
 * @project:    @monorepo/theme-manager
 * @file:       ~/layers/theme-manager/types/theme.ts
 * @version:    V1.0.0
 * @createDate: 2025 Nov 14
 * @createTime: 00:39
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * Type definitions for the Theme Manager datastore structure.
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.0.0, 20251114-00:39
 * Initial creation and release of theme.ts
 *
 * ================================================================================
 */

export interface ThemeColorPalette {
  // FILL (Backgrounds)
  'fill-base': string; 'fill-primary': string; 'fill-secondary': string;
  'fill-tertiary': string; 'fill-accent': string; 'fill-muted': string;
  'fill-floor': string; 'fill-input': string; 'fill-link': string;

  // Status Fills
  'fill-success': string; 'fill-info': string; 'fill-warning': string;
  'fill-error': string; 'fill-notification': string;

  // PEN (Text/Icons)
  'pen-base': string; 'pen-primary': string; 'pen-secondary': string;
  'pen-tertiary': string; 'pen-accent': string; 'pen-muted': string;
  'pen-floor': string; 'pen-input': string; 'pen-link': string;

  // Status Pens
  'pen-success': string; 'pen-info': string; 'pen-warning': string;
  'pen-error': string; 'pen-notification': string;

  // EDGE (Borders)
  'edge-base': string; 'edge-primary': string; 'edge-secondary': string;
  'edge-tertiary': string; 'edge-accent': string; 'edge-muted': string;
  'edge-floor': string; 'edge-input': string; 'edge-link': string;

  // Status Edges
  'edge-success': string; 'edge-info': string; 'edge-warning': string;
  'edge-error': string; 'edge-notification': string;
}

export type ThemeStateVariant = {
  default: string
  hover: string
  active: string
  selected: string
  visited: string
  disabled: string
}

export type ThemeModeDefinition = Record<keyof ThemeColorPalette, ThemeStateVariant>

export interface ThemeProfile {
  id: string
  name: string
  description?: string
  version: string
  created: string
  updated: string
  colors: {
    light: ThemeModeDefinition
    dark: ThemeModeDefinition
  }
}


















