<template>
  <div v-if="showTime" class="showtime">
    <Typography>Show Time</Typography>
    <div class="showtime__value">
      <Typography variant="h1">{{ showTime }}</Typography>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import Typography from '../Typography/Typography.vue'
import { ShowTimeProps } from './props'

export default Vue.extend({
  name: 'ShowTimeComponent',
  components: { Typography },
  props: {
    showTime: {
      type: String as PropType<ShowTimeProps['showTime']>,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'show-time';
</style>
