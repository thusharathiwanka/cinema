<template>
  <div class="default-layout">
    <Header />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped>
@import 'layout';
</style>
