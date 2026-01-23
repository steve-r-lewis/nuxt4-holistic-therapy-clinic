/**
* ================================================================================
*
* @project:    @monorepo/theme-manager
* @file:       ~/layers/theme-manager/pages/account/themes/[id].vue
* @version:    V1.1.0
* @createDate: 2025 Nov 18
* @createTime: 16:59
* @author:     Steve R Lewis
*
* ================================================================================
*
* @description:
* Page for creating and editing a theme profile.
* It uses a dynamic route [id].vue:
* - /account/themes/new -> Creates a new theme
* - /account/themes/[id] -> Edits an existing theme
*
* V1 (This file): Uses a simple JSON editor to prove the data flow.
*
* A robust GUI for creating and editing theme profiles.
* Features a tabbed interface, visual color pickers for the semantic palette,
* and light/dark mode switching context.
* Editor for Theme Profiles.
* Supports Creating New (cloning default) and Editing Existing.
*
* ================================================================================
*
* @notes: Revision History
*
* V1.1.0, 20251207-03:45
* - Fixed "Broken Import" error (removed dependency on theme-default.json).
* - "Create New" logic now fetches the Default Theme from the API to use as a base template.
* - Deep clones the template to avoid reactivity issues.
*
* V1.0.0, 20251118-16:59
* Initial creation and release of [id].vue
*
* ================================================================================
*/

<template>
  <div class="max-w-6xl mx-auto px-4 py-6">

    <header class="sticky top-0 z-30 bg-fill-base-default/95 backdrop-blur-sm border-b border-edge-base-default -mx-4 px-4 py-4 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-2 text-sm text-pen-muted-default mb-1">
          <NuxtLink to="/account/themes" class="hover:text-pen-primary-default transition-colors">Library</NuxtLink>
          <Icon name="lucide:chevron-right" class="w-4 h-4" />
          <span class="text-pen-base-default">Editor</span>
        </div>
        <h1 class="text-2xl font-bold text-pen-base-default flex items-center gap-3">
          <span v-if="loading" class="animate-pulse bg-fill-tertiary-default h-8 w-48 rounded"></span>
          <span v-else>
             {{ isNew ? 'Create New Theme' : (themeData?.name || 'Edit Theme') }}
          </span>
        </h1>
      </div>

      <div class="flex items-center gap-3">
        <NuxtLink
          to="/account/themes"
          class="px-4 py-2 text-sm font-medium text-pen-muted-default hover:text-pen-base-default transition-colors"
        >
          Cancel
        </NuxtLink>

        <button
          @click="handleSave"
          :disabled="loading || pending || hasErrors"
          class="btn bg-fill-primary-default hover:bg-fill-primary-hover text-pen-base-default px-6 py-2 rounded-lg font-bold transition-all shadow-sm-base flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Icon v-if="loading" name="lucide:loader-2" class="w-4 h-4 animate-spin" />
          <Icon v-else name="lucide:save" class="w-4 h-4" />
          <span>{{ isNew ? 'Create Theme' : 'Save Changes' }}</span>
        </button>
      </div>
    </header>

    <div v-if="error" class="bg-fill-error-default border border-edge-error-default text-pen-error-default rounded-xl p-4 mb-6 flex items-start gap-3 shadow-sm-error">
      <Icon name="lucide:alert-triangle" class="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div>
        <strong class="font-bold">Error:</strong> {{ error }}
      </div>
    </div>

    <div v-if="pending" class="space-y-8 animate-pulse">
      <div class="h-12 bg-fill-tertiary-default rounded-lg w-full max-w-md"></div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="h-96 bg-fill-tertiary-default rounded-xl"></div>
        <div class="h-96 bg-fill-tertiary-default rounded-xl md:col-span-2"></div>
      </div>
    </div>

    <div v-if="themeData && !pending" class="grid grid-cols-1 lg:grid-cols-12 gap-8">

      <aside class="lg:col-span-4 space-y-6">

        <div class="bg-fill-base-default p-6 rounded-2xl border border-edge-base-default shadow-sm-base">
          <h2 class="text-lg font-bold text-pen-base-default mb-4 flex items-center gap-2">
            <Icon name="lucide:settings-2" class="w-5 h-5" />
            General Settings
          </h2>

          <div class="space-y-4">
            <div>
              <label for="theme-name" class="block text-xs font-bold uppercase tracking-wider text-pen-muted-default mb-1.5">Theme Name</label>
              <input
                id="theme-name"
                v-model="themeData.name"
                type="text"
                class="w-full bg-fill-input-default border border-edge-input-default rounded-lg px-3 py-2.5 text-pen-base-default focus:ring-2 focus:ring-edge-primary-default focus:border-transparent outline-none transition-all"
                placeholder="e.g. Ocean Blue"
              />
            </div>

            <div>
              <label for="theme-desc" class="block text-xs font-bold uppercase tracking-wider text-pen-muted-default mb-1.5">Description</label>
              <textarea
                id="theme-desc"
                v-model="themeData.description"
                rows="3"
                class="w-full bg-fill-input-default border border-edge-input-default rounded-lg px-3 py-2.5 text-pen-base-default focus:ring-2 focus:ring-edge-primary-default focus:border-transparent outline-none transition-all resize-none"
                placeholder="Describe the look and feel..."
              ></textarea>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-pen-muted-default mb-1.5">ID</label>
                <input disabled :value="themeData.id" class="w-full bg-fill-floor-default border border-edge-base-default rounded-lg px-3 py-2 text-pen-muted-default text-xs font-mono cursor-not-allowed truncate" />
              </div>
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-pen-muted-default mb-1.5">Version</label>
                <input disabled :value="themeData.version" class="w-full bg-fill-floor-default border border-edge-base-default rounded-lg px-3 py-2 text-pen-muted-default text-xs font-mono cursor-not-allowed" />
              </div>
            </div>
          </div>
        </div>

        <div class="bg-fill-base-default p-6 rounded-2xl border border-edge-base-default shadow-sm-base">
          <h2 class="text-lg font-bold text-pen-base-default mb-4 flex items-center gap-2">
            <Icon name="lucide:eye" class="w-5 h-5" />
            Preview Mode
          </h2>
          <p class="text-xs text-pen-muted-default mb-4">
            Toggle the editor's appearance to preview your palette changes in real-time.
          </p>

          <div class="flex bg-fill-floor-default p-1 rounded-xl">
            <button
              @click="setPreviewMode('light')"
              class="flex-1 py-2 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2"
              :class="activeColorMode === 'light' ? 'bg-white text-gray-900 shadow-sm' : 'text-pen-muted-default hover:text-pen-base-default'"
            >
              <Icon name="lucide:sun" class="w-4 h-4" />
              Light
            </button>
            <button
              @click="setPreviewMode('dark')"
              class="flex-1 py-2 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2"
              :class="activeColorMode === 'dark' ? 'bg-gray-900 text-white shadow-sm' : 'text-pen-muted-default hover:text-pen-base-default'"
            >
              <Icon name="lucide:moon" class="w-4 h-4" />
              Dark
            </button>
          </div>
        </div>

        <div v-if="!isNew" class="bg-fill-base-default p-6 rounded-2xl border border-edge-error-default/30 shadow-sm-base">
          <h3 class="text-sm font-bold text-pen-error-default flex items-center gap-2 mb-3">
            <Icon name="lucide:trash-2" class="w-4 h-4" />
            Delete Theme
          </h3>
          <button
            @click="handleDelete"
            :disabled="loading"
            class="w-full btn bg-fill-floor-default hover:bg-fill-error-default text-pen-muted-default hover:text-pen-error-default border border-edge-base-default hover:border-edge-error-default text-sm py-2 rounded-lg transition-colors"
          >
            Delete Permanently
          </button>
        </div>
      </aside>

      <main class="lg:col-span-8">

        <div class="flex items-center gap-1 border-b border-edge-base-default mb-6">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            class="px-4 py-3 text-sm font-medium border-b-2 transition-colors duration-200 flex items-center gap-2"
            :class="activeTab === tab.id
              ? 'border-edge-primary-default text-pen-primary-default'
              : 'border-transparent text-pen-muted-default hover:text-pen-base-default hover:border-edge-tertiary-default'"
          >
            <Icon :name="tab.icon" class="w-4 h-4" />
            {{ tab.name }}
          </button>
        </div>

        <div v-show="activeTab === 'palette'" class="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">

          <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              v-for="cat in categories"
              :key="cat.id"
              @click="activeCategory = cat.id"
              class="px-4 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap"
              :class="activeCategory === cat.id
                ? 'bg-fill-primary-default border-edge-primary-default text-pen-base-default'
                : 'bg-fill-base-default border-edge-base-default text-pen-muted-default hover:border-edge-tertiary-default'"
            >
              {{ cat.label }}
            </button>
          </div>

          <div class="grid grid-cols-1 gap-6">
            <template v-for="(paletteGroup, key) in filteredColors" :key="key">
              <div class="bg-fill-base-default rounded-xl border border-edge-base-default overflow-hidden shadow-sm-base">

                <div class="px-5 py-3 border-b border-edge-base-default bg-fill-floor-default flex justify-between items-center">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-8 rounded bg-fill-primary-default"></span>
                    <h3 class="font-mono font-bold text-pen-base-default text-base capitalize">
                      {{ key.replace(activeCategory + '-', '') }}
                    </h3>
                  </div>
                  <code class="text-xs text-pen-muted-default bg-fill-base-default px-2 py-1 rounded border border-edge-base-default">
                    {{ activeCategory }}-{{ key.replace(activeCategory + '-', '') }}
                  </code>
                </div>

                <div class="p-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  <div v-for="(colorValue, stateKey) in paletteGroup" :key="stateKey" class="flex flex-col gap-1.5">
                    <label class="text-xs font-bold text-pen-muted-default uppercase tracking-wide">
                      {{ stateKey }}
                    </label>
                    <div class="flex items-center gap-2 bg-fill-input-default border border-edge-input-default rounded-lg p-1.5 focus-within:ring-2 focus-within:ring-edge-primary-default transition-all">
                      <div class="relative shrink-0 overflow-hidden w-8 h-8 rounded-md border border-edge-base-default shadow-sm">
                        <input
                          type="color"
                          v-model="paletteGroup[stateKey]"
                          @input="updateLivePreview"
                          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] p-0 m-0 border-0 cursor-pointer"
                        />
                      </div>
                      <input
                        type="text"
                        v-model="paletteGroup[stateKey]"
                        @input="updateLivePreview"
                        class="flex-1 min-w-0 bg-transparent border-none p-0 text-sm font-mono text-pen-base-default focus:ring-0"
                        maxlength="9"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </template>

            <div v-if="Object.keys(filteredColors).length === 0" class="text-center py-12">
              <p class="text-pen-muted-default">No colors found for this category.</p>
            </div>
          </div>
        </div>

        <div v-show="activeTab === 'raw'" class="animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div class="bg-fill-base-default rounded-xl border border-edge-base-default shadow-sm-base overflow-hidden">
            <div class="bg-fill-floor-default border-b border-edge-base-default px-4 py-2 flex justify-between items-center">
              <span class="text-xs font-mono text-pen-muted-default">theme.json</span>
              <button @click="syncJsonToData" class="text-xs text-pen-primary-default hover:underline">Format JSON</button>
            </div>
            <textarea
              v-model="themeDataString"
              @input="handleRawInput"
              rows="30"
              class="w-full bg-fill-base-default p-4 font-mono text-xs text-pen-base-default leading-relaxed outline-none focus:bg-fill-input-default transition-colors"
              spellcheck="false"
            ></textarea>
          </div>
        </div>

      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { ThemeProfile } from '../../../types/theme'
import { useTheme } from '../../../composables/useTheme'

// --- Setup & Meta ---
definePageMeta({
  layout: 'account',
  middleware: 'authentication'
});

const route = useRoute();
const router = useRouter();
const { activeThemeId, clearTheme } = useTheme();

// --- State ---
const themeId = computed(() => route.params.id as string);
const isNew = computed(() => themeId.value === 'new');
const loading = ref(false);
const pending = ref(true);
const error = ref<string | null>(null);

const themeData = ref<ThemeProfile | null>(null);
const themeDataString = ref('');

// UI State
const activeTab = ref('palette');
const activeColorMode = ref<'light' | 'dark'>('light');
const activeCategory = ref('fill');

const tabs = [
  { id: 'palette', name: 'Design Tokens', icon: 'lucide:palette' },
  { id: 'raw', name: 'Raw JSON', icon: 'lucide:code' },
];

const categories = [
  { id: 'fill', label: 'Fill (Backgrounds)' },
  { id: 'pen', label: 'Pen (Text & Icons)' },
  { id: 'edge', label: 'Edge (Borders)' },
];

// --- Computed ---

const hasErrors = computed(() => !themeData.value?.name);

/**
 * Filters the massive colors object based on current Mode (light/dark)
 * and current Category (fill/pen/edge).
 */
const filteredColors = computed(() => {
  if (!themeData.value || !themeData.value.colors) return {};

  const modeColors = themeData.value.colors[activeColorMode.value];
  if (!modeColors) return {};

  const filtered: Record<string, any> = {};

  // Iterate keys like "fill-base", "pen-primary"
  Object.keys(modeColors).forEach(key => {
    if (key.startsWith(`${activeCategory.value}-`)) {
      // @ts-ignore - Dynamic access key
      filtered[key] = modeColors[key];
    }
  });

  return filtered;
});

// --- Lifecycle ---

onMounted(async () => {
  pending.value = true;
  try {
    if (isNew.value) {
      // --- NEW THEME STRATEGY ---
      // Fetch the default theme from the API to use as a template.
      // This ensures we always have the latest schema.
      // Use your specific Default ID here (e.g. 'dJKnu...').
      const templateId = 'dJKnu457dh387dgasdjgysaH';
      const template = await $fetch<ThemeProfile>(`/api/themes/${templateId}`);

      if (!template) throw new Error('Could not load base template.');

      // Deep clone to detach from original
      const newTheme = JSON.parse(JSON.stringify(template));
      const now = new Date().toISOString();

      newTheme.id = `theme-${Date.now()}`; // Simple Timestamp ID
      newTheme.name = 'Untitled Theme';
      newTheme.description = '';
      newTheme.created = now;
      newTheme.updated = now;
      newTheme.version = '1.0.0';

      themeData.value = newTheme;

    } else {
      // Fetch existing
      const existingTheme = await $fetch<ThemeProfile>(`/api/themes/${themeId.value}`);
      themeData.value = existingTheme;
    }
    syncJsonToData();

    // Init preview mode based on system preference or default
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setPreviewMode('dark');
    } else {
      setPreviewMode('light');
    }

    // Apply initial preview
    updateLivePreview();

  } catch (e: any) {
    error.value = e.message || "Failed to load theme.";
  } finally {
    pending.value = false;
  }
});

// --- Actions ---

function setPreviewMode(mode: 'light' | 'dark') {
  activeColorMode.value = mode;
  const html = document.documentElement;
  if (mode === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  updateLivePreview();
}

function updateLivePreview() {
  if (!themeData.value) return;

  const style = document.documentElement.style;
  const mode = activeColorMode.value;
  const colors = themeData.value.colors[mode];

  // @ts-ignore
  for (const [key, states] of Object.entries(colors)) {
    for (const [state, value] of Object.entries(states as any)) {
      style.setProperty(`--ui-${key}-${state}-${mode}`, value as string);
    }
  }
}

function syncJsonToData() {
  if (themeData.value) {
    themeDataString.value = JSON.stringify(themeData.value, null, 2);
  }
}

function handleRawInput() {
  try {
    themeData.value = JSON.parse(themeDataString.value);
    error.value = null;
    updateLivePreview();
  } catch (e) {
    // Invalid JSON, ignore update
  }
}

watch(themeData, () => {
  if (activeTab.value !== 'raw') {
    syncJsonToData();
  }
}, { deep: true });

async function handleSave() {
  if (!themeData.value) return;

  loading.value = true;
  error.value = null;

  try {
    if (activeTab.value === 'raw') {
      themeData.value = JSON.parse(themeDataString.value);
    }

    themeData.value.updated = new Date().toISOString();

    const method = isNew.value ? 'POST' : 'PUT';
    const endpoint = isNew.value ? '/api/themes' : `/api/themes/${themeId.value}`;

    await $fetch(endpoint, {
      method,
      body: themeData.value
    });

    if (activeThemeId.value === themeData.value.id) {
      const store = useTheme();
      store.setTheme(themeData.value);
    }

    router.push('/account/themes');

  } catch (e: any) {
    error.value = `Failed to save: ${e.message}`;
  } finally {
    loading.value = false;
  }
}

async function handleDelete() {
  if (!themeData.value || isNew.value) return;

  if (confirm(`Are you sure you want to delete "${themeData.value.name}"? This cannot be undone.`)) {
    loading.value = true;
    try {
      await $fetch(`/api/themes/${themeId.value}`, { method: 'DELETE' });
      if (activeThemeId.value === themeId.value) {
        clearTheme();
      }
      router.push('/account/themes');
    } catch (e: any) {
      error.value = `Failed to delete: ${e.message}`;
      loading.value = false;
    }
  }
}
</script>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
