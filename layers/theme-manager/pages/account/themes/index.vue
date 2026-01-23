/**
* ================================================================================
*
* @project:    @monorepo/theme-manager
* @file:       ~/layers/theme-manager/pages/account/themes/index.vue
* @version:    V1.2.0
* @createDate: 2025 Nov 19
* @createTime: 01:24
* @author:     Steve R Lewis
*
* ================================================================================
*
* @description:
* Theme Library Index Page.
* Displays the default theme and user-created themes.
*
* ================================================================================
*
* @notes: Revision History
*
* V1.1.0, 20251207-02:45
* - Fixed duplicate identifier error.
*
* V1.0.0, 20251119-01:24
* Initial creation and release of index.vue
*
* ================================================================================
*/

<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <header class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
      <div>
        <h1 class="text-3xl font-bold text-pen-base-default">Theme Library</h1>
        <p class="text-pen-muted-default mt-1">Manage your application's visual language and style profiles.</p>
      </div>
      <NuxtLink
        to="/account/themes/new"
        class="btn bg-fill-primary-default text-pen-base-default hover:bg-fill-primary-hover px-5 py-2.5 rounded-lg font-medium inline-flex items-center gap-2 transition-all shadow-sm-base hover:shadow-md-base"
      >
        <Icon name="lucide:plus" class="w-5 h-5" />
        <span>Create New Theme</span>
      </NuxtLink>
    </header>

    <div v-if="status === 'pending'" class="py-20 text-center text-pen-muted-default">
      <Icon name="lucide:loader-2" class="w-10 h-10 mx-auto mb-4 animate-spin" />
      <p>Loading your library...</p>
    </div>

    <div v-else-if="(!customThemes || customThemes.length === 0) && !defaultTheme" class="text-center py-20 bg-fill-floor-default rounded-2xl border-2 border-dashed border-edge-base-default">
      <div class="inline-flex p-4 rounded-full bg-fill-tertiary-default text-pen-muted-default mb-4">
        <Icon name="lucide:palette" class="w-8 h-8" />
      </div>
      <h3 class="text-lg font-bold text-pen-base-default">No themes found</h3>
      <p class="text-pen-muted-default mt-1 mb-6 max-w-md mx-auto">
        You haven't created any custom themes yet. Start by creating one to customize your app's look.
      </p>
      <NuxtLink to="/account/themes/new" class="text-pen-primary-default font-medium hover:underline">
        Create your first theme &rarr;
      </NuxtLink>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">

      <div
        v-if="defaultTheme"
        class="group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 bg-fill-base-default overflow-hidden"
        :class="!activeThemeId ? 'border-edge-primary-default shadow-lg-primary ring-1 ring-edge-primary-default' : 'border-edge-base-default hover:border-edge-tertiary-default shadow-sm-base hover:shadow-md-base'"
      >
        <div v-if="!activeThemeId" class="absolute top-0 right-0 bg-fill-primary-default text-pen-base-default text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl z-10">
          Active
        </div>

        <div class="flex justify-between items-start mb-4">
          <div class="p-3 rounded-xl bg-fill-tertiary-default text-pen-base-default">
            <Icon name="lucide:shield-check" class="w-6 h-6" />
          </div>
          <span class="text-xs font-mono text-pen-muted-default bg-fill-floor-default px-2 py-1 rounded">
            v{{ defaultTheme.version }}
          </span>
        </div>

        <h3 class="font-bold text-xl text-pen-base-default mb-2">{{ defaultTheme.name }}</h3>
        <p class="text-sm text-pen-muted-default line-clamp-2 mb-6 flex-grow">
          {{ defaultTheme.description || 'The immutable system default theme.' }}
        </p>

        <div class="flex items-center justify-between pt-4 border-t border-edge-floor-default mt-auto">
          <button
            @click="clearTheme()"
            :disabled="!activeThemeId"
            class="px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
            :class="!activeThemeId
              ? 'bg-fill-success-default text-pen-success-default cursor-default'
              : 'bg-fill-floor-default hover:bg-fill-tertiary-default text-pen-base-default'"
          >
            <Icon v-if="!activeThemeId" name="lucide:check-circle-2" class="w-4 h-4" />
            <span>{{ !activeThemeId ? 'Applied' : 'Apply Theme' }}</span>
          </button>

          <span class="text-xs text-pen-muted-default italic">Read-only</span>
        </div>
      </div>

      <div
        v-for="theme in customThemes"
        :key="theme.id"
        class="group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 bg-fill-base-default overflow-hidden"
        :class="activeThemeId === theme.id ? 'border-edge-primary-default shadow-lg-primary ring-1 ring-edge-primary-default' : 'border-edge-base-default hover:border-edge-tertiary-default shadow-sm-base hover:shadow-md-base'"
      >
        <div v-if="activeThemeId === theme.id" class="absolute top-0 right-0 bg-fill-primary-default text-pen-base-default text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl z-10">
          Active
        </div>

        <div class="flex justify-between items-start mb-4">
          <div class="p-3 rounded-xl transition-colors duration-300"
               :class="activeThemeId === theme.id ? 'bg-fill-primary-default text-pen-base-default' : 'bg-fill-tertiary-default text-pen-base-default group-hover:bg-fill-accent-default'">
            <Icon name="lucide:paintbrush" class="w-6 h-6" />
          </div>
          <span class="text-xs font-mono text-pen-muted-default bg-fill-floor-default px-2 py-1 rounded">
            v{{ theme.version }}
          </span>
        </div>

        <h3 class="font-bold text-xl text-pen-base-default mb-2">{{ theme.name }}</h3>
        <p class="text-sm text-pen-muted-default line-clamp-2 mb-6 flex-grow">
          {{ theme.description || 'No description provided.' }}
        </p>

        <div class="grid grid-cols-2 gap-3 pt-4 border-t border-edge-floor-default mt-auto">
          <button
            @click.stop="setTheme(theme)"
            :disabled="activeThemeId === theme.id"
            class="px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            :class="activeThemeId === theme.id
              ? 'bg-fill-success-default text-pen-success-default cursor-default'
              : 'bg-fill-floor-default hover:bg-fill-tertiary-default text-pen-base-default'"
          >
            <Icon v-if="activeThemeId === theme.id" name="lucide:check-circle-2" class="w-4 h-4" />
            <span>{{ activeThemeId === theme.id ? 'Applied' : 'Apply' }}</span>
          </button>

          <NuxtLink
            :to="`/account/themes/${theme.id}`"
            class="px-3 py-2 text-sm font-medium rounded-lg bg-fill-base-default border border-edge-base-default hover:border-edge-primary-default text-pen-base-default text-center transition-colors flex items-center justify-center gap-2"
          >
            <Icon name="lucide:edit-3" class="w-4 h-4" />
            <span>Edit</span>
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { ThemeProfile } from '../../../types/theme'
import { useTheme } from '../../../composables/useTheme'

definePageMeta({
  layout: 'account',
  middleware: 'authentication'
});

const { activeThemeId, setTheme, clearTheme } = useTheme();

// 1. Fetch ALL themes (Registry)
const { data: allThemes, status } = await useFetch<ThemeProfile[]>('/api/themes', {
  lazy: true,
  default: () => []
});

// 2. Resolve Default Theme (DB Preference -> Fallback)
const defaultTheme = computed(() => {
  // Use "dJKnu..." (from your theme-list.json) OR "default-fresh" depending on what ID you settled on
  const dbDefault = allThemes.value.find(t => t.id === 'dJKnu457dh387dgasdjgysaH' || t.id === 'default-fresh');
  if (dbDefault) return dbDefault;

  // Fallback Fail-Safe (Hardcoded just in case API fails completely)
  return {
    id: 'default-fresh',
    name: 'Default Fresh',
    description: 'The immutable system default theme (Muted Green & Dusty Lavender).',
    version: '1.2.0',
    created: '',
    updated: '',
    colors: { light: {} as any, dark: {} as any }
  } as ThemeProfile;
});

// 3. Resolve Custom Themes (Exclude default if present in list)
const customThemes = computed(() => {
  return allThemes.value.filter(t => t.id !== defaultTheme.value.id && t.id !== 'default-fresh');
});
</script>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
</style>
