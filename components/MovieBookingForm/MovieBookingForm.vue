<template>
  <form class="booking-form">
    <Typography type="h1">Book My Show</Typography>
    <div class="booking-form__steps">
      <TimeDetailsForm v-show="isFirstStep" />
      <PersonalDetailsForm v-show="isSecondStep" />
      <SeatDetailsForm v-show="isLastStep" />
    </div>
    <div class="booking-form__controls">
      <Button v-show="!isFirstStep" type="secondary" @click.prevent="previous">
        Back
      </Button>
      <Button v-show="!isLastStep" @click.prevent="next">Next</Button>
      <Button v-show="isLastStep" @click.prevent="submit">Book</Button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import TimeDetailsForm from '@/components/TimeDetailsForm/TimeDetailsForm.vue'
import PersonalDetailsForm from '@/components/PersonalDetailsForm/PersonalDetailsForm.vue'
import SeatDetailsForm from '@/components/SeatDetailsForm/SeatDetailsForm.vue'
import Typography from '@/components/Typography/Typography.vue'

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
      console.log('submitted')
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'movie-booking-form';
</style>
