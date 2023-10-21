<template>
  <div class="seat-layout">
    <div v-for="(row, index) in seats" :key="index" class="seat-layout__row">
      <Seat
        v-for="seat in row"
        :key="seat.seatNumber"
        :class="{
          booked: seat.status === 'booked',
          pending: seat.status === 'pending',
        }"
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
      selectedSeats: {} as Record<number, SeatType[]>,
    }
  },
  mounted() {
    this.selectedSeats = this.seats
    saveDraftBookingForm('selectedSeatLayout', this.selectedSeats)
  },
  methods: {
    handleSeatClicked(seatNumber: string) {
      const rowLetter = seatNumber[0]
      const rowIndex = ['A', 'B', 'C'].indexOf(rowLetter) + 1

      if (rowIndex !== -1) {
        const seatIndex = this.seats[rowIndex].findIndex((seat: SeatType) => {
          return (
            seat.seatNumber === `${seatNumber}` &&
            (seat.status === 'idle' || seat.status === 'pending')
          )
        })

        if (seatIndex !== -1) {
          const seat = this.seats[rowIndex][seatIndex]
          this.selectedSeats[rowIndex][seatIndex] = {
            seatNumber,
            status: seat.status === 'idle' ? 'pending' : 'idle',
          }
        }
        saveDraftBookingForm('selectedSeatLayout', this.selectedSeats)
        this.$forceUpdate()
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'seat-layout';
</style>
