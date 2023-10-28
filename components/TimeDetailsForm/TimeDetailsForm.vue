<template>
  <div class="multistep-form" data-cy="personal-details-form">
    <Input
      v-model="bookedDate"
      label="Select Date*"
      type="date"
      required
      :error="errors"
      @input="(e) => handleInputChange('date', 'bookedDate', e)"
    />
    <ShowTime :showTime="showTime" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { TimeDetailsFormProps, ValidationError } from './props'
import Input from '@/components/Input/Input.vue'
import ShowTime from '@/components/ShowTime/ShowTime.vue'
import {
  getDraftBookingForm,
  saveDraftBookingForm,
} from '@/lib/utils/storage.util'
import { getShowTime } from '@/lib/utils/movie.util'

export default Vue.extend({
  name: 'TimeDetailsFormComponent',
  components: { Input, ShowTime },
  props: {
    errors: {
      type: Array as PropType<TimeDetailsFormProps['errors']>,
      default: [] as ValidationError[],
    },
    validate: {
      type: Function,
      default: null,
    },
    isStepValidated: {
      type: Boolean as PropType<TimeDetailsFormProps['isStepValidated']>,
      default: false,
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

    this.showTime = getShowTime(Number(id))
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
</style>
