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
            booked: seat.status === 'booked' && seat.date === bookedDate,
            pending: seat.status === 'pending',
          }"
          :bookedDate="bookedDate"
          :date="seat.date"
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
  replaceSeatLayoutsForMovies,
  saveDraftBookingForm,
} from '@/lib/utils/storage.util'
import { Seat as SeatType } from '@/lib/types/seat.type'
import { NUMBER_OF_MAX_SEATS, SEAT_ROWS } from '~/configs/app.config'

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
      bookedDate: getDraftBookingFormPropertyValue('bookedDate') || '',
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
      const rowIndex = SEAT_ROWS.indexOf(rowLetter) + 1

      const seatIndexInSelectedSeats = this.selectedSeats.findIndex(
        (seat) => seat === seatNumber
      )

      if (seatIndexInSelectedSeats === -1) {
        this.selectedSeats.push(seatNumber)

        if (this.selectedSeats.length > NUMBER_OF_MAX_SEATS) {
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
            date:
              seat.status === 'idle'
                ? (getDraftBookingFormPropertyValue('bookedDate') as string)
                : '',
          }
        }

        const id = this.$route.params.id

        saveDraftBookingForm('selectedSeats', this.selectedSeats)
        saveDraftBookingForm('selectedSeatLayout', this.selectedSeatLayout)
        replaceSeatLayoutsForMovies(id, this.selectedSeatLayout)
        this.$forceUpdate()
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'seat-layout';
</style>
