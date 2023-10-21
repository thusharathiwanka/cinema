<template>
  <form class="booking-form">
    <Typography type="h1">Book My Show</Typography>
    <div class="booking-form__steps">
      <TimeDetailsForm v-if="isFirstStep" />
      <PersonalDetailsForm v-if="isSecondStep" />
      <SeatDetailsForm v-if="isLastStep" />
    </div>
    <div class="booking-form__controls">
      <Button
        v-show="!isFirstStep"
        type="secondary"
        data-cy="booking-form__back"
        @click.prevent="previous"
      >
        Back
      </Button>
      <Button
        v-show="!isLastStep"
        data-cy="booking-form__next"
        @click.prevent="next"
        >Next</Button
      >
      <Button
        v-show="isLastStep"
        data-cy="booking-form__book"
        @click.prevent="submit"
        >Book</Button
      >
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import TimeDetailsForm from '@/components/TimeDetailsForm/TimeDetailsForm.vue'
import PersonalDetailsForm from '@/components/PersonalDetailsForm/PersonalDetailsForm.vue'
import SeatDetailsForm from '@/components/SeatDetailsForm/SeatDetailsForm.vue'
import Typography from '@/components/Typography/Typography.vue'
import {
  getDraftBookingForm,
  removeDraftBookingForm,
  replaceSeatLayoutsForMovies,
} from '~/lib/utils/storage.util'
import { Seat } from '~/lib/types/seat.type'

const NUMBER_OF_STEPS = 3

export default Vue.extend({
  name: 'MovieBookingFormComponent',
  components: {
    TimeDetailsForm,
    PersonalDetailsForm,
    SeatDetailsForm,
    Typography,
  },
  data() {
    return {
      activeStep: 1,
      steps: 3,
    }
  },
  computed: {
    isFirstStep(): boolean {
      return this.activeStep === 1
    },
    isSecondStep(): boolean {
      return this.activeStep === 2
    },
    isLastStep(): boolean {
      return this.activeStep === NUMBER_OF_STEPS
    },
  },
  methods: {
    next() {
      if (this.activeStep >= NUMBER_OF_STEPS) return
      this.activeStep = this.activeStep + 1
    },
    previous() {
      if (this.activeStep <= 0) return
      this.activeStep = this.activeStep - 1
    },
    submit() {
      const id = this.$route.params.id
      const draftForm = getDraftBookingForm()
      const seats: Record<number, Seat[]> = draftForm.selectedSeatLayout

      if (seats && id) {
        const updatedSeatLayout = {} as Record<number, Seat[]>

        for (const rowIndex in seats) {
          updatedSeatLayout[rowIndex] = seats[rowIndex].map((seat: Seat) => ({
            ...seat,
            status: seat.status === 'pending' ? 'booked' : seat.status,
          }))
        }

        replaceSeatLayoutsForMovies(id, updatedSeatLayout)
        removeDraftBookingForm()
        this.$router.push(`${id}/booking-summary`)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'movie-booking-form';
</style>
