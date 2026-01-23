/**
 * ================================================================================
 *
 * @project:    @monorepo/theme-manager
 * @file:       ~/layers/theme-manager/nuxt.config.ts
 * @version:    V1.1.0
 * @createDate: 2025 Oct 19
 * @createTime: 20:53
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * This is the foundational config for all styling. It is the only layer that
 * registers the global CSS entry point (main.css). It has no extends
 * dependencies, making it the base of the visual architecture.
 *
 * Nuxt configuration for the @monorepo/theme-manager layer.
 *
 * Manages themes, UI styling, and presentation configuration.
 * - Works with ui-library for component styling
 * - Supports runtime theme switching
 * - Audit, logging, caching provide operational support
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.1.0, 20251114-13:52
 * 1. Import createResolver from @nuxt/kit
 * import { createResolver } from '@nuxt/kit';
 * 2. Import tsconfigPaths plugin
 * import tsconfigPaths from 'vite-tsconfig-paths';
 * 3. Import the 'resolve' function from the created resolver
 * Instantiate the resolver relative to this file's URL
 * const { resolve } = createResolver(import.meta.url);
 *
 * V1.0.0, 20251019-20:53
 * Initial creation and release of nuxt.config.ts
 *
 * ================================================================================
 */

import tsconfigPaths from 'vite-tsconfig-paths';
import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
	compatibilityDate: '2025-10-08',
	devtools: { enabled: true },

	css: [
		resolve('./assets/css/main.css')
	],

	vite: {
		plugins: [
			tsconfigPaths()
		],

		// Optional but recommended configs
		css: {
			devSourcemap: true
		},

		build: {
			cssMinify: true
		}
	},
});