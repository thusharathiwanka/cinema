<template>
  <nav v-cloak class="header">
    <nuxt-link v-if="!isRoot" to="/" class="header__back-link">
      <Typography v-if="!isTablet" color="accent">Back to Movies</Typography>
      <img
        v-else
        src="@/assets/images/back-arrow.svg"
        alt="back"
        data-cy="header__back-link--arrow"
      />
    </nuxt-link>
    <img src="@/assets/images/logo.svg" alt="logo" class="header__logo" />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Typography from '@/components/Typography/Typography.vue'
import { TABLET_MAX_WIDTH } from '@/lib/constants/viewport.constant'

export default Vue.extend({
  name: 'HeaderComponent',
  components: {
    Typography,
  },
  data() {
    return {
      windowWidth: TABLET_MAX_WIDTH,
    }
  },
  computed: {
    isRoot(): boolean {
      return this.$route.path === '/'
    },
    isTablet(): boolean {
      return this.windowWidth < TABLET_MAX_WIDTH
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
    this.windowWidth = window.innerWidth
  },
})
</script>

<style lang="scss" scoped>
@import 'header';
</style>
