<template>
  <div class="seat-layout">
    <div v-for="(row, index) in seats" :key="index" class="seat-layout__row">
      <Seat
        v-for="seat in row"
        :key="seat.seatNumber"
        :name="seat.seatNumber"
        @seat-clicked="handleSeatClicked"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { SeatLayoutProps } from './props'
import Seat from '@/components/Seat/Seat.vue'

export default Vue.extend({
  name: 'SeatLayoutComponent',
  components: {
    Seat,
  },
  props: {
    seats: {
      type: Object as PropType<SeatLayoutProps['seats']>,
      default: null,
    },
  },
  data() {
    return {
      selectedSeats: [] as string[],
    }
  },
  methods: {
    handleSeatClicked(seatNumber: string) {
      this.selectedSeats.push(seatNumber)
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'seat-layout';
</style>
