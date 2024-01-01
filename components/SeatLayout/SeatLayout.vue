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
          :class="computeClasses(seat)"
          :bookedDate="bookedDate"
          :seat="seat"
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
import Typography from '@/components/Typography/Typography.vue'
import {
  getDraftBookingFormPropertyValue,
  replaceSeatLayoutsForMovies,
  saveDraftBookingForm,
} from '@/lib/utils/storage.util'
import { Booking, Seat as SeatType } from '@/lib/types/seat.type'
import { NUMBER_OF_MAX_SEATS, SEAT_ROWS } from '~/configs/app.config'
import { getColumnFromSeatNumber } from '~/lib/utils/movie.util'

export default Vue.extend({
  name: 'SeatLayoutComponent',
  components: {
    Seat,
    Typography,
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
    computeClasses(seat: SeatType) {
      const isBooked = seat?.bookings?.find(
        (booking) =>
          booking.status === 'booked' && booking.date === this.bookedDate
      )

      const isPending = seat?.bookings?.find(
        (booking) => booking.status === 'pending' && booking.date
      )

      return {
        booked: isBooked,
        pending: isPending,
      }
    },
    handleSeatClicked(seatNumber: string) {
      const rowLetter = seatNumber[0]
      const rowIndex = SEAT_ROWS.indexOf(rowLetter) + 1

      const seatIndexInSelectedSeats = this.selectedSeats?.findIndex(
        (seat) => seat === seatNumber
      )

      if (seatIndexInSelectedSeats === -1) {
        this.selectedSeats?.push(seatNumber)

        if (this.selectedSeats.length > NUMBER_OF_MAX_SEATS) {
          this.error = 'You cannot book more than 3 seats'
          this.selectedSeats?.pop()
          return
        }
      } else {
        this.error = ''
        this.selectedSeats?.splice(seatIndexInSelectedSeats, 1)
      }

      const column = getColumnFromSeatNumber(seatNumber)

      if (rowIndex !== -1) {
        const pendingBookingIndex = this.seats[rowIndex][
          column - 1
        ]?.bookings?.findIndex(
          (booking) =>
            booking.status === 'pending' && booking.date === this.bookedDate
        )

        if (pendingBookingIndex !== -1) {
          this.selectedSeatLayout[rowIndex][column - 1]?.bookings?.splice(
            pendingBookingIndex,
            1
          )
        } else {
          const booking = {
            status: 'pending',
            date: this.bookedDate,
          } as Booking
          this.selectedSeatLayout[rowIndex][column - 1]?.bookings?.push(booking)
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
