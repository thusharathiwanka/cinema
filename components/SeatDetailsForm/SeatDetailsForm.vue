<template>
  <div>
    <Typography>Select Seat</Typography>
    <SeatLayout :seats="seats" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SeatLayout from '@/components/SeatLayout/SeatLayout.vue'
import { seatLayout } from '@/configs/movie.config'

export default Vue.extend({
  name: 'SeatDetailsFormComponent',
  components: {
    SeatLayout,
  },
  data() {
    return {
      seats: seatLayout,
    }
  },
})
</script>

<style scoped></style>
