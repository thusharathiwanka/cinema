<template>
  <main class="empty-layout">
    <nuxt />
  </main>
</template>

<script>
import clearDraftFormMixin from '@/mixins/clearDraftForm.mixin'

export default {
  name: 'EmptyLayout',
  mixins: [clearDraftFormMixin],
}
</script>

<style lang="scss" scoped>
@import 'layout';
</style>
