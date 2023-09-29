<template>
  <nav class="header" data-cy="header">
    <NuxtLink
      v-if="!isRoot"
      to="/"
      class="header__back-link"
      data-cy="header__back-link"
      >Back to Movies</NuxtLink
    >
    <img
      src="@/assets/images/logo.svg"
      alt="logo"
      class="header__logo"
      data-cy="header__logo"
    />
  </nav>
</template>

<script>
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
@import 'header.scss';
</style>
