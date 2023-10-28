<template>
  <form class="booking-form">
    <Typography variant="h1">Book My Show</Typography>
    <div class="booking-form__steps">
      <TimeDetailsForm
        v-if="isFirstStep"
        :errors="bookedDateError"
        :validate="validate"
      />
      <PersonalDetailsForm
        v-if="isSecondStep"
        :errors="[nameError, emailError, mobileNumberError]"
        :validate="validate"
      />
      <SeatDetailsForm
        v-if="isLastStep"
        :errors="seatSelectionError"
        :validate="validate"
      />
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
  saveDraftBookingForm,
} from '@/lib/utils/storage.util'
import { Seat } from '@/lib/types/seat.type'
import { DraftBookingForm } from '@/lib/types/storage.type'
import { NUMBER_OF_BOOKING_STEPS } from '@/configs/app.config'
import { validateEmail, validateMobileNumber } from '@/lib/utils/validator.util'

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
      bookedDateError: [] as string[],
      nameError: [] as string[],
      emailError: [] as string[],
      mobileNumberError: [] as string[],
      seatSelectionError: [] as string[],
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
      return this.activeStep === NUMBER_OF_BOOKING_STEPS
    },
  },
  mounted() {
    const draftForm = getDraftBookingForm()
    if (Object.keys(draftForm).length) {
      this.activeStep = draftForm.activeStep || 1
      saveDraftBookingForm('activeStep', this.activeStep)
    }
  },
  methods: {
    next() {
      if (
        !this.validateSteps() ||
        this.emailError.length ||
        this.mobileNumberError.length ||
        this.nameError.length
      )
        return
      this.activeStep = this.activeStep + 1
      saveDraftBookingForm('activeStep', this.activeStep)
    },
    previous() {
      if (this.activeStep <= 0) return
      this.activeStep = this.activeStep - 1
      saveDraftBookingForm('activeStep', this.activeStep)
    },
    submit() {
      const draftForm: DraftBookingForm = getDraftBookingForm()
      if (!draftForm.selectedSeats?.length && this.activeStep === 3) {
        this.seatSelectionError = ['Please select seats']
        return
      }

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
    validate(label: string, value: string) {
      if (!value) {
        if (this.isFirstStep) {
          this.bookedDateError = [`Please enter ${label}`]
          return
        }
        if (this.isSecondStep) {
          switch (label) {
            case 'name':
              this.nameError = ['Please enter name']
              break
            case 'email':
              this.emailError = ['Please enter email']
              break
            case 'mobileNumber':
              this.mobileNumberError = ['Please enter mobile number']
              break
          }
        }
        if (this.isLastStep) {
          this.seatSelectionError = ['Please select seats']
        }
      } else {
        if (this.isFirstStep) {
          this.bookedDateError = []
          return
        }
        if (this.isSecondStep) {
          switch (label) {
            case 'name':
              this.nameError = []
              break
            case 'email':
              this.emailError = []
              if (!validateEmail(value))
                this.emailError = ['Please enter valid email']
              break
            case 'mobileNumber':
              this.mobileNumberError = []
              if (!validateMobileNumber(value))
                this.mobileNumberError = ['Please enter valid mobile number']
              break
          }
        }
        if (this.isLastStep) {
          this.seatSelectionError = []
        }
      }
    },
    validateSteps() {
      if (this.bookedDateError?.length > 0) return false

      const draftForm: DraftBookingForm = getDraftBookingForm()

      if (!draftForm.bookedDate && this.isFirstStep) {
        this.validate('date', '')
        return false
      }

      if (
        (!draftForm.name || !draftForm.email || !draftForm.mobileNumber) &&
        this.isSecondStep
      ) {
        if (!draftForm.name) {
          this.validate('name', '')
        }
        if (!draftForm.email) {
          this.validate('email', '')
        }
        if (!draftForm.mobileNumber) {
          this.validate('mobileNumber', '')
        }
        return false
      }

      if (draftForm.selectedSeats?.length < 0 && this.isLastStep) {
        this.validate('name', '')
        return false
      }

      if (this.activeStep >= NUMBER_OF_BOOKING_STEPS) return false

      return true
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'movie-booking-form';
</style>
