<template>
  <div class="multistep-form" data-cy="time-details-form">
    <Input
      v-model="bookedDate"
      label="Select Date*"
      variant="date"
      required
      :error="errors"
      data-cy="booked-date-input"
      @input="(e) => handleInputChange('date', 'bookedDate', e)"
    />

    <div v-if="showTime" class="time-details-form__showtime">
      <Typography>Show Time</Typography>
      <div class="time-details-form__showtime-value">
        <Typography variant="h1">{{ showTime }}</Typography>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { TimeDetailsFormProps, ValidationError } from './props'
import Input from '@/components/Input/Input.vue'
import Typography from '@/components/Typography/Typography.vue'
import {
  getDraftBookingForm,
  saveDraftBookingForm,
} from '@/lib/utils/storage.util'
import { getShowTime } from '@/lib/utils/movie.util'

export default Vue.extend({
  name: 'TimeDetailsFormComponent',
  components: { Input, Typography },
  props: {
    errors: {
      type: Array as PropType<TimeDetailsFormProps['errors']>,
      default: [] as ValidationError[],
    },
    validate: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      bookedDate: '',
      showTime: '',
    }
  },
  mounted() {
    const id = this.$route.params.id
    const draftForm = getDraftBookingForm()

    if (draftForm) {
      this.bookedDate = draftForm.bookedDate
    }

    this.showTime = getShowTime(+id)
    saveDraftBookingForm('showTime', this.showTime)
  },
  methods: {
    handleInputChange(errorLabel: string, label: string, value: string) {
      this.bookedDate = value
      saveDraftBookingForm(label, this.bookedDate)
      this.validate(errorLabel, this.bookedDate)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utility';
@import 'time-details-form';
</style>
