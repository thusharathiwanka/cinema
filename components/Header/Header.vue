<template>
  <nav class="header">
    <nuxt-link
      v-if="!isRootRoute && !isBookingSummaryRoute"
      to="/"
      class="header__back-link"
    >
      <Typography color="accent" class="header__back-link--text"
        >Back to Movies</Typography
      >
      <img
        src="@/assets/images/back-arrow.svg"
        alt="back"
        class="header__back-link--img"
      />
    </nuxt-link>
    <client-only>
      <img
        v-if="!isDarkTheme"
        src="@/assets/images/logo-light.svg"
        alt="logo"
        class="header__logo"
      />
      <img
        v-else
        src="@/assets/images/logo-dark.svg"
        alt="logo"
        class="header__logo"
      />
      <ThemeSwitcher class="header__theme-switcher" />
    </client-only>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Typography from '@/components/Typography/Typography.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher.vue'

export default Vue.extend({
  name: 'HeaderComponent',
  components: {
    Typography,
    ThemeSwitcher,
  },
  computed: {
    isRootRoute(): boolean {
      return this.$route.path === '/'
    },
    isBookingSummaryRoute(): boolean {
      return this.$route.path.includes('booking-summary')
    },
    isDarkTheme(): boolean {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const theme = (this as any).$theme
      return !!(theme && theme.theme === 'dark')
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'header';
</style>
