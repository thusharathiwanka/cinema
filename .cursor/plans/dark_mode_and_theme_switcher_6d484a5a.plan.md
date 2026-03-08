---
name: Dark mode and theme switcher
overview: Add dark mode to the cinema app using dark palette from the provided Figma file, refactor colors to CSS custom properties, persist theme in localStorage, and add a theme switcher (switch with sun/moon icons) in the Header without changing film content or layout.
todos: []
isProject: false
---

# Dark Mode and Theme Switcher Plan

## Goals

- Add **dark mode** using colors from [Figma file](https://www.figma.com/design/cH9t3YOu09oefBo1tbQGvH/Cinema?node-id=0-1&p=f&t=zS5CuliA8TIbGrpM-0) (light mode stays as-is).
- Implement a **theme switcher**: switch control with sun (light) and moon (dark) icons; no Figma design for this—design and implement in line with the app.
- **Do not** change film/movie content, layout, or copy to match the Figma UI; only add dark theme colors and the switcher.

---

## Current state

- **Styling:** SCSS with a single [assets/scss/_variables.scss](assets/scss/_variables.scss) defining Sass color variables (`$primary-background-color`, `$primary-accent-color`, etc.). No CSS custom properties; no theme switching.
- **Entry:** [assets/scss/main.scss](assets/scss/main.scss) imports variables and sets `body { background: $primary-background-color }`.
- **Usage:** All component SCSS files `@import` the same variables (Typography, Button, Header, Input, Seat, MoviePoster, etc.).
- **Layout:** [layouts/default.vue](layouts/default.vue) renders `<Header />` and `<main><nuxt /></main>`. No Vuex store; Nuxt 2 + Vue 2.

---

## 1. Get dark mode colors from Figma

**Figma file:** `cH9t3YOu09oefBo1tbQGvH`, node `0-1` (root).

- Call `**get_metadata`** with `fileKey="cH9t3YOu09oefBo1tbQGvH"` and `nodeId="0-1"` to see the file structure. If there is a dedicated “Dark” frame or page, note its node ID.
- Call `**get_variable_defs`** (and if needed `**get_design_context`**) on the root node or the dark-mode frame to get color tokens (backgrounds, text, accent, secondary, error, modal). Map these to the existing token names used in the app (`primary-background`, `primary-accent`, `primary-font`, etc.).
- If the file uses Figma variables/modes, capture the **dark mode** values and record them (e.g. in a small comment or `_variables.scss` section) for the next step.

**Output:** A concrete list of dark-mode hex (or rgba) values for each token used in [assets/scss/_variables.scss](assets/scss/_variables.scss).

---

## 2. Theme-aware CSS (custom properties)

- **Keep** non-color tokens in Sass as-is (typography sizes, breakpoints, font stack).
- **Introduce CSS custom properties** for every color used in the app and use them everywhere instead of raw Sass color variables where theme matters.

**Approach:**

- In [assets/scss/main.scss](assets/scss/main.scss) (or a new `_themes.scss` imported by `main.scss`):
  - Define `**:root`** (light theme) with the current values from `_variables.scss` (e.g. `--primary-background-color: #ffffff;`, `--primary-accent-color: #f98f01;`, etc.).
  - Define `**[data-theme="dark"]`** (or `html[data-theme="dark"]`) with the dark values from Figma.
- In [assets/scss/_variables.scss](assets/scss/_variables.scss): either (a) keep Sass variables as wrappers around `var(--primary-background-color)` etc. so existing component SCSS keeps working, or (b) replace Sass color variables with the same `var(...)` in one place and then update all component SCSS to use `var(--primary-background-color)` instead of `$primary-background-color`. Option (a) minimizes file touches.

**Recommendation:** Add a “Theme” section in `_variables.scss` that defines Sass variables from CSS vars, e.g. `$primary-background-color: var(--primary-background-color);`, and define the actual `--`* values only in `main.scss` for `:root` and `[data-theme="dark"]`. Then no component SCSS needs to change.

**Apply theme on `<html>`:** Set `document.documentElement.setAttribute('data-theme', 'light' | 'dark')` from the theme plugin so the right set of custom properties is active.

---

## 3. Theme state and persistence

- **No Vuex:** Use a small **Nuxt plugin** (client-only) that:
  - Reads initial theme from `localStorage.getItem('theme')` or `'light'` default.
  - Sets `html.dataset.theme` (or `setAttribute('data-theme', ...)`) and keeps a reactive source of truth (e.g. `Vue.observable({ theme: 'light' })` or a simple reactive object provided via `inject`).
  - Exposes a method to toggle theme, update the reactive state, write to `localStorage`, and update `document.documentElement`.
- **Provide/inject:** e.g. `provide('theme', { theme, setTheme, toggleTheme })` from the plugin (or from the layout that mounts the plugin’s logic) so the Header (and any future consumers) can `inject('theme')` and use current theme + toggle.

**Files:** New plugin, e.g. `plugins/theme.client.ts` (or `.js`), and register it in [nuxt.config.js](nuxt.config.js) in the `plugins` array.

---

## 4. Theme switcher UI (Header)

- **Component:** New component e.g. `ThemeSwitcher` or `ThemeSwitch`: a control that looks like a **switch** with **icons** (sun for light, moon for dark). Toggling switches between `light` and `dark` and calls the injected `toggleTheme` (or `setTheme`).
- **Placement:** Add the theme switcher in [components/Header/Header.vue](components/Header/Header.vue) (e.g. right side of the nav, or next to the logo), without changing the existing “Back to Movies” link or logo layout. Use flexbox so the switcher doesn’t overlap the back link on small screens.
- **Assets:** Use inline SVG or small icon components for sun and moon (no new icon library). Prefer icons that read clearly at ~20–24px.
- **Accessibility:** Use a `<button>` or a switch with `role="switch"` and `aria-checked`/`aria-label` (e.g. “Switch to dark mode” / “Switch to light mode”) and keyboard support.

**Files:** New `components/ThemeSwitcher/ThemeSwitcher.vue` (and optional `theme-switcher.scss`), and update [components/Header/Header.vue](components/Header/Header.vue) to include it and inject theme.

---

## 5. Files to add or change (summary)


| Action | File                                                                                                                                                           |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add    | `plugins/theme.client.ts` – theme state, localStorage, `data-theme` on `<html>`, provide theme API                                                             |
| Add    | `components/ThemeSwitcher/ThemeSwitcher.vue` (and optional SCSS) – switch + sun/moon icons                                                                     |
| Edit   | [nuxt.config.js](nuxt.config.js) – register `plugins/theme.client.ts`                                                                                          |
| Edit   | [assets/scss/main.scss](assets/scss/main.scss) – define `:root` and `[data-theme="dark"]` CSS custom properties for all colors                                 |
| Edit   | [assets/scss/_variables.scss](assets/scss/_variables.scss) – map Sass color variables to `var(--...)` so components keep using existing variable names         |
| Edit   | [layouts/default.vue](layouts/default.vue) – ensure root can receive `data-theme` (plugin will set it on `html`; no layout change needed if plugin runs early) |
| Edit   | [components/Header/Header.vue](components/Header/Header.vue) – inject theme, add `<ThemeSwitcher />` in the nav                                                |


**No changes** to film/movie content components beyond what’s required for them to use the same color variables (which will now resolve to theme-dependent values). No layout or copy changes to match Figma.

---

## 6. Order of implementation

1. **Figma:** Run `get_metadata` then `get_variable_defs` (and if needed `get_design_context`) to extract dark mode colors and document them.
2. **CSS:** Add custom properties in `main.scss` for light and dark; refactor `_variables.scss` to use `var(--...)` for colors.
3. **Plugin:** Implement theme plugin (state, localStorage, `data-theme` on `html`, provide/inject).
4. **Switcher:** Implement ThemeSwitcher component and add it to the Header.
5. **Smoke test:** Toggle theme, reload page, and verify all main screens (home, movie detail, booking, summary) and components (buttons, inputs, typography, seats, modals) use the correct light/dark colors.

