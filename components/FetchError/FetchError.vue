<template>
  <div v-if="Object.keys(error).length" class="fetch-error">
    <Typography type="h2">{{ error.message }}</Typography>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import Typography from '../Typography/Typography.vue'
import { FetchErrorProps, FetchError } from './props'

export default Vue.extend({
  name: 'ErrorComponent',
  components: { Typography },
  props: {
    error: {
      type: Object as PropType<FetchErrorProps['error']>,
      default: () => ({} as FetchError),
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'fetch-error';
</style>
