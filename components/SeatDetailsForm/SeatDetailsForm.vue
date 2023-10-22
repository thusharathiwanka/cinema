<template>
  <div class="seat-details-form">
    <Typography>Select Seats*</Typography>
    <SeatLayout v-if="Object.keys(seats).length" :seats="seats" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SeatLayout from '@/components/SeatLayout/SeatLayout.vue'
import Typography from '@/components/Typography/Typography.vue'
import { Seat } from '@/lib/types/seat.type'
import { getSeatLayoutForMovie } from '@/lib/utils/storage.util'

export default Vue.extend({
  name: 'SeatDetailsFormComponent',
  components: {
    SeatLayout,
    Typography,
  },
  data() {
    return {
      seats: {} as Record<number, Seat[]>,
    }
  },
  mounted() {
    const id = this.$route.params.id
    if (id) {
      this.seats = getSeatLayoutForMovie(id)
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utility';
@import 'seat-details-form';
</style>
