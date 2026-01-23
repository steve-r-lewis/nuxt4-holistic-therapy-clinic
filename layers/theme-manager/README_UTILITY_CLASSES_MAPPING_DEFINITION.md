### `README_UTILITY_CLASSES_MAPPING_DEFINITION.md`

# Utility Class & Token Grammar

## 1\. Guiding Philosophy

This document defines the semantic grammar for the theme manager.

This architecture is intentionally pragmatic and designed to work *with* Tailwind CSS, not against it. It is built on a simple principle: **The theme system defines the *palette*; Tailwind applies the *logic*.**

We do not create complex, 6-part class names. Instead, we create a rich palette of semantic tokens. Tailwind's variants (like `hover:`, `active:`, `dark:`) are then used to apply them.

## 2\. The Semantic Palette

Our palette is divided into three core categories, which are exposed to Tailwind's `color-*` namespace.

* **`fill-[name]-[state]`**

  * **Purpose:** Defines background and shadow colors.
  * **Generates:** `bg-fill-...`, `shadow-fill-...`, etc.

* **`pen-[name]-[state]`**

  * **Purpose:** Defines foreground content colors (text and icons).
  * **Generates:** `text-pen-...`, `text-shadow-pen-...`, etc.

* **`edge-[name]-[state]`**

  * **Purpose:** Defines border colors.
  * **Generates:** `border-edge-...`

## 3\. Semantic Names (`[name]`)

The `[name]` token describes the color's purpose in the UI.

### Core Palette

| Name | Purpose |
| :--- | :--- |
| **`base`** | The default, base layer for components (often white in light mode, dark grey in dark mode). |
| **`primary`** | The main brand or interactive color for primary actions. |
| **`secondary`** | A supporting brand color. |
| **`tertiary`** | A subtle, neutral-adjacent color, often for backgrounds. |
| **`accent`** | A special highlight color. |
| **`muted`** | A subtle color used for placeholders or subdued content. |
| **`floor`** | The very bottom-layer page background, sitting behind all components. |
| **`input`** | Colors specifically for form input fields. |
| **`link`** | Colors specifically for hyperlink text. |

### Status Palette

| Name | Purpose |
| :--- | :--- |
| **`success`** | Indicates a successful operation. |
| **`info`** | Indicates informational content. |
| **`warning`** | Indicates a non-critical warning. |
| **`error`** | Indicates a critical error or failure. |
| **`notification`** | A general-purpose notification color. |

## 4\. State Model (`[state]`)

The `[state]` token provides a value for every step of a component's life-cycle.

| State | CSS / Trigger | Duration | Purpose |
| :--- | :--- | :--- | :--- |
| **`default`** | (none) | Persistent | The resting state of a component. |
| **`hover`** | `:hover` | Ephemeral | When a user's mouse is over the component. |
| **`active`** | `:active` | Milliseconds | The *event* of a user pressing down on the component. |
| **`selected`**| `.router-link-active`, `.is-selected`, `aria-selected="true"` | Persistent | The *state* of a component being "on," "current," or "chosen." |
| **`visited`** | `:visited` | Persistent | The browser-tracked state for a link that has been visited. |
| **`disabled`** | `:disabled`, `aria-disabled="true"` | Persistent | The component is not interactive. |
