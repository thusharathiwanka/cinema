<template>
  <div class="seat" @click="triggerSeatClickedEvent">
    <Typography :color="status === 'idle' ? 'secondary' : 'background'">{{
      name
    }}</Typography>
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
      type: String as PropType<SeatProps['status']>,
      default: 'idle',
    },
  },
  methods: {
    triggerSeatClickedEvent() {
      this.$emit('seat-clicked', this.name)
      this.$parent?.$emit('seat-clicked', this.name)
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'seat.scss';
</style>
