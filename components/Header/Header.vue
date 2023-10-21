<template>
  <nav v-cloak class="header">
    <nuxt-link v-if="!isRoot" to="/" class="header__back-link">
      <Typography color="accent" class="header__back-link--text"
        >Back to Movies</Typography
      >
      <img
        src="@/assets/images/back-arrow.svg"
        alt="back"
        class="header__back-link--img"
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
  },
})
</script>

<style lang="scss" scoped>
@import 'header';
</style>
