<template>
  <div class="seat" @click="triggerSeatClickedEvent">
    <Typography :color="computedColor">{{ seat.seatNumber }}</Typography>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import Typography from '../Typography/Typography.vue'
import { SeatProps } from './props'
import { Seat } from '@/lib/types/seat.type'

export default Vue.extend({
  name: 'SeatComponent',
  components: { Typography },
  props: {
    seat: {
      type: Object as PropType<SeatProps['seat']>,
      default: () => ({} as Seat),
    },
    bookedDate: {
      type: String as PropType<SeatProps['bookedDate']>,
      default: '',
    },
  },
  computed: {
    computedColor() {
      const isBooked = this.seat?.bookings?.find(
        (booking) =>
          booking.status === 'booked' && booking.date === this.bookedDate
      )

      const isPending = this.seat?.bookings?.find(
        (booking) => booking.status === 'pending' && booking.date
      )

      return isBooked || isPending ? 'background' : 'secondary'
    },
  },
  methods: {
    triggerSeatClickedEvent() {
      this.$emit('seat-clicked', this.seat.seatNumber)
      this.$parent?.$emit('seat-clicked', this.seat.seatNumber)
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'seat.scss';
</style>
