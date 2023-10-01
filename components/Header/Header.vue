<template>
  <nav class="header">
    <nuxt-link v-if="!isRoot" to="/" class="header__back-link"
      ><Typography>Back to Movies</Typography></nuxt-link
    >
    <img src="@/assets/images/logo.svg" alt="logo" class="header__logo" />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderComponent',
  computed: {
    isRoot() {
      return this.$route.path === '/'
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'header';
</style>
