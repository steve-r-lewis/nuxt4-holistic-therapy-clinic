/**
 * ================================================================================
 *
 * @project:    nuxt4-holistic-therapy-clinic
 * @file:       ~/nuxt.config.ts
 * @version:    1.0.0
 * @createDate: 2025 Dec 13
 * @createTime: 17:27
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * This is the main application "Integrator" config. It is responsible for
 * assembling all the application's features by extending the primary layers
 * (@monorepo/{layerName}). It also provides global, singleton modules
 * (like @pinia/nuxt and @nuxt/icon) to be shared across all layers
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.0.0, 20251213-17:27
 * Initial creation and release of nuxt.config.ts
 *
 * ================================================================================
 */

import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-10-08',
  devtools: { enabled: true },

  /**
   * ------------------------------------------------------------------------------
   * @EXTENDS:
   * ------------------------------------------------------------------------------
   */
  extends: [
    "@monorepo/ui-library",
    "@monorepo/uuidv7-generator"
  ],

  /**
   * ------------------------------------------------------------------------------
   * @NUXT-MODULES:
   * ------------------------------------------------------------------------------
   */
  modules: [
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxt/content' // Add this module
  ],

  /**
   * ------------------------------------------------------------------------------
   * @NUXT-PLUGINS:
   * ------------------------------------------------------------------------------
   */
  plugins: [
  ],

  /**
   * ------------------------------------------------------------------------------
   * @AUTO-IMPORT-DIRECTORIES:
   * ------------------------------------------------------------------------------
   */
  imports: {
  },

  /**
   * ------------------------------------------------------------------------------
   * @NUXT-CONTENT-CONFIGURATION:
   * ------------------------------------------------------------------------------
   */
  content: {
    // Content module configuration
    database: {
      type: 'sqlite' // Nuxt 4 recommended database
    }
  },

  /**
   * ------------------------------------------------------------------------------
   * @NUXT-ICONS-CONFIGURATION:
   * ------------------------------------------------------------------------------
   */
  icon: {
    size: '24',
    class: 'inline-block',

    serverBundle: 'remote',
    provider: 'iconify',
    collections: [] // explicitly prevent auto-discovery
  },

  /**
   * ------------------------------------------------------------------------------
   * @OPTIONAL: alias for Layer
   * ------------------------------------------------------------------------------
   */
  alias: {
  },

  // Disable sourcemaps for server and client
  sourcemap: {
    server: false,
    client: false
  },

  /**
   * ------------------------------------------------------------------------------
   * @VITE-PLUGINS:
   * ------------------------------------------------------------------------------
   */
  vite: {
    plugins: [
      // tsconfigPaths(), // Keep if needed for root
      tailwindcss()
    ],

    server: {
      hmr: {
        port: 11500,       // Pin to main port (avoids random ports like 24678 that fail intermittently)
        host: '127.0.0.1', // Force IPv4 (macOS/Windows often defaults to IPv6, causing mismatches)
        protocol: 'ws',    // Explicit WebSocket protocol for stability
        timeout: 30000,    // Bump from default 10s to prevent idle disconnects
        overlay: true,     // Enable error overlay for debugging HMR fails
      },
    },

    css: {
      devSourcemap: true // Debug CSS issues
    },

    build: {
      cssMinify: true // Minify CSS in production
    }
  },

  /**
   * ------------------------------------------------------------------------------
   * @NITRO-CONFIGURATION:
   * ------------------------------------------------------------------------------
   */
  nitro: {
    //dev: true,  // Ensure Nitro HMR is active
    preset: 'netlify'
  },

  /**
   * ------------------------------------------------------------------------------
   * @APP-CONFIGURATION:
   * ------------------------------------------------------------------------------
   */
  // app: {
  //   head: {
  // link: [
  //   {
  //     rel: 'preload',
  //     href: '/_nuxt/assets/css/main.css.old',
  //     as: 'style'
  //   },
  //   {
  //     rel: 'stylesheet',
  //     href: '/_nuxt/assets/css/main.css.old'
  //   }
  // ]
  //   }
  // },

  /**
   * ------------------------------------------------------------------------------
   * @RUNTIME-CONFIGURATION: global defaults
   * ------------------------------------------------------------------------------
   */
  runtimeConfig: {
    // Private keys (Server-side only)
    zohoSmtpHost: process.env.ZOHO_SMTP_SERVER_NAME,
    zohoSmtpPort: process.env.ZOHO_SMTP_SERVER_PORT,
    zohoSmtpSecure: process.env.ZOHO_SMTP_SERVER_SECURITY,
    zohoUser: process.env.ZOHO_EMAIL,
    zohoPassword: process.env.ZOHO_PASSWORD,

    // Public keys (Client-side)
    public: {
      contactEmail: process.env.ZOHO_EMAIL || 'susan.chinnery@holistictherapyclinic.co.uk'
    }
  },

  /**
   * ------------------------------------------------------------------------------
   * @DEVELOPMENT-CONFIGURATION:
   * ------------------------------------------------------------------------------
   */
  development: {
    runtimeConfig: {
    },
  },

  /**
   * ------------------------------------------------------------------------------
   * @PRODUCTION-CONFIGURATION:
   * ------------------------------------------------------------------------------
   */
  production: {
    runtimeConfig: {
    },
  }
});
