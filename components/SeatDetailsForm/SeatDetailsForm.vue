<template>
  <div class="seat-details-form">
    <Typography>Select Seats*</Typography>
    <Typography v-if="errors.length > 0" color="error">{{
      errors[0]
    }}</Typography>
    <SeatLayout
      v-if="Object.keys(seats).length"
      :seats="seats"
      @seat-clicked="handleSeatClicked"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { SeatDetailsFormProps, ValidationError } from './props'
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
  props: {
    errors: {
      type: Array as PropType<SeatDetailsFormProps['errors']>,
      default: () => [] as ValidationError[],
    },
    validate: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      seats: {} as Record<number, Seat[]>,
    }
  },
  mounted() {
    const id = this.$route.params.id
    if (id) {
      this.seats = getSeatLayoutForMovie(id) || {}
    }
  },
  methods: {
    handleSeatClicked(e: string) {
      this.validate('seat', e)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utility';
@import 'seat-details-form';
</style>
