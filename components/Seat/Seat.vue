<template>
  <div class="seat" @click="toggleSeatStatus">
    <Typography color="secondary">{{ name }}</Typography>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import Typography from '../Typography/Typography.vue'
import { SeatProps } from './props'

export default Vue.extend({
  name: 'SeatComponent',
  components: { Typography },
  props: {
    name: {
      type: String as PropType<SeatProps['name']>,
      default: '',
    },
    status: {
      type: Boolean as PropType<SeatProps['status']>,
      default: false,
    },
  },
  methods: {
    toggleSeatStatus() {
      this.$emit('seat-clicked', this.name)
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'seat.scss';
</style>
