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
        variant="secondary"
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
  replaceSeatLayoutsForMovies,
} from '@/lib/utils/storage.util'
import { Seat } from '@/lib/types/seat.type'
import { DraftBookingForm } from '@/lib/types/storage.type'

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
      const draftForm: DraftBookingForm = getDraftBookingForm()
      if (!draftForm.bookedDate && this.activeStep === 1) return
      if (
        (!draftForm.name || !draftForm.email || !draftForm.mobileNumber) &&
        this.activeStep === 2
      )
        return
      if (this.activeStep >= NUMBER_OF_STEPS) return
      this.activeStep = this.activeStep + 1
    },
    previous() {
      if (this.activeStep <= 0) return
      this.activeStep = this.activeStep - 1
    },
    submit() {
      const draftForm: DraftBookingForm = getDraftBookingForm()
      if (!draftForm.selectedSeats.length && this.activeStep === 3) return

      const id = this.$route.params.id
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
        this.$router.replace(`${id}/booking-summary`)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'movie-booking-form';
</style>
