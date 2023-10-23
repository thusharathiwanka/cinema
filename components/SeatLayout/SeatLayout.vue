<template>
  <div>
    <div>
      <Typography v-show="error" color="error">{{ error }}</Typography>
    </div>
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
          :status="seat.status"
          @seat-clicked="handleSeatClicked"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { SeatLayoutProps } from './props'
import Seat from '@/components/Seat/Seat.vue'
import {
  getDraftBookingFormPropertyValue,
  saveDraftBookingForm,
} from '@/lib/utils/storage.util'
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
      selectedSeatLayout: {} as Record<number, SeatType[]>,
      selectedSeats: [] as string[],
      error: '',
    }
  },
  mounted() {
    this.selectedSeatLayout = this.seats
    const selectedSeats = getDraftBookingFormPropertyValue('selectedSeats')
    if (Array.isArray(selectedSeats)) this.selectedSeats = selectedSeats
    saveDraftBookingForm('selectedSeatLayout', this.selectedSeatLayout)
  },
  methods: {
    handleSeatClicked(seatNumber: string) {
      const rowLetter = seatNumber[0]
      const rowIndex = ['A', 'B', 'C'].indexOf(rowLetter) + 1

      const seatIndexInSelectedSeats = this.selectedSeats.findIndex(
        (seat) => seat === seatNumber
      )

      if (seatIndexInSelectedSeats === -1) {
        this.selectedSeats.push(seatNumber)

        if (this.selectedSeats.length > 3) {
          this.error = 'You cannot book more than 3 seats'
          this.selectedSeats.pop()
          return
        }
      } else {
        this.error = ''
        this.selectedSeats.splice(seatIndexInSelectedSeats, 1)
      }

      if (rowIndex !== -1) {
        const seatIndex = this.seats[rowIndex].findIndex((seat: SeatType) => {
          return (
            seat.seatNumber === `${seatNumber}` &&
            (seat.status === 'idle' || seat.status === 'pending')
          )
        })

        if (seatIndex !== -1) {
          const seat = this.seats[rowIndex][seatIndex]
          this.selectedSeatLayout[rowIndex][seatIndex] = {
            seatNumber,
            status: seat.status === 'idle' ? 'pending' : 'idle',
          }
        }

        saveDraftBookingForm('selectedSeats', this.selectedSeats)
        saveDraftBookingForm('selectedSeatLayout', this.selectedSeatLayout)
        this.$forceUpdate()
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'seat-layout';
</style>
