<template>
  <button
    class="theme-switcher"
    type="button"
    role="switch"
    :aria-checked="isDark ? 'true' : 'false'"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggle"
  >
    <span
      class="theme-switcher__icon theme-switcher__icon--sun"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" class="theme-switcher__icon-svg">
        <circle cx="12" cy="12" r="4" />
        <g>
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
          <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
          <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
          <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </span>

    <span class="theme-switcher__track">
      <span
        class="theme-switcher__thumb"
        :class="{ 'theme-switcher__thumb--dark': isDark }"
      />
    </span>

    <span
      class="theme-switcher__icon theme-switcher__icon--moon"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" class="theme-switcher__icon-svg">
        <path d="M21 12.79A9 9 0 0 1 12.21 3 7 7 0 1 0 21 12.79z" />
      </svg>
    </span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ThemeSwitcher',
  computed: {
    isDark(): boolean {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const theme = (this as any).$theme
      return theme && theme.theme === 'dark'
    },
  },
  methods: {
    toggle() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const theme = (this as any).$theme
      if (theme && typeof theme.toggleTheme === 'function') {
        theme.toggleTheme()
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'theme-switcher';
</style>
