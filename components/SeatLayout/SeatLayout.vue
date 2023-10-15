<template>
  <div class="seat-layout">
    <div v-for="(row, index) in seats" :key="index" class="seat-layout__row">
      <Seat
        v-for="seat in row"
        :key="seat.seatNumber"
        :class="{ selected: seat.status }"
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
import { saveDraftBookingForm } from '@/lib/utils/storage.util'
import { Seat as SeatType } from '@/lib/types/seat.type'

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
      selectedSeats: this.seats,
    }
  },
  mounted() {
    saveDraftBookingForm('seats', this.selectedSeats)
  },
  methods: {
    handleSeatClicked(seatNumber: string) {
      let rowIndex
      const rowLetter = seatNumber.split('')[0]

      switch (rowLetter) {
        case 'A':
          rowIndex = 1
          break
        case 'B':
          rowIndex = 2
          break
        case 'C':
          rowIndex = 3
          break
      }

      if (rowIndex) {
        const seatIndex = this.selectedSeats[rowIndex].findIndex(
          (seat: SeatType) =>
            seat.seatNumber === seatNumber && seat.status === false
        )
        if (seatIndex !== -1) {
          this.selectedSeats[rowIndex][seatIndex] = {
            seatNumber,
            status: true,
          }
        }
        saveDraftBookingForm('seats', this.selectedSeats)
        this.$forceUpdate()
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'seat-layout';
</style>
