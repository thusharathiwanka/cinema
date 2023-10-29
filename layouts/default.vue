<template>
  <div class="default-layout">
    <Header />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import clearDraftFormMixin from '@/mixins/clearDraftForm.mixin'

export default {
  name: 'DefaultLayout',
  mixins: [clearDraftFormMixin],
}
</script>

<style lang="scss" scoped>
@import 'layout';
</style>
