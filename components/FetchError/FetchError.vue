<template>
  <div v-if="hasError" class="fetch-error">
    <Typography type="h2">{{ error.message }}</Typography>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import Typography from '../Typography/Typography.vue'
import { FetchErrorProps } from './props'

export default Vue.extend({
  name: 'ErrorComponent',
  components: { Typography },
  props: {
    error: {
      type: Object as PropType<FetchErrorProps['error']>,
      default: () => ({} as Error),
    },
  },
  computed: {
    hasError() {
      return Object.keys(this.error).length > 0
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'fetch-error';
</style>
