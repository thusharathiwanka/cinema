<template>
  <div class="seat-details-form">
    <Typography>Select Seat</Typography>
    <SeatLayout :seats="seats" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SeatLayout from '@/components/SeatLayout/SeatLayout.vue'
import Typography from '@/components/Typography/Typography.vue'
import { seatLayout } from '@/configs/movie.config'

export default Vue.extend({
  name: 'SeatDetailsFormComponent',
  components: {
    SeatLayout,
    Typography,
  },
  data() {
    return {
      seats: seatLayout,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utility';
@import 'seat-details-form';
</style>
