<template>
  <div class="multistep-form" data-cy="personal-details-form">
    <Input
      v-model="inputValues.name"
      label="Your Name*"
      required
      :error="errors[0]"
      @input="(e) => handleInputChange('name', e)"
    />
    <Input
      v-model="inputValues.email"
      label="Your Email*"
      variant="email"
      required
      :error="errors[1]"
      @input="(e) => handleInputChange('email', e)"
    />
    <Input
      v-model="inputValues.mobileNumber"
      label="Your Mobile Number*"
      variant="tel"
      required
      :error="errors[2]"
      @input="(e) => handleInputChange('mobileNumber', e)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { PersonalDetailsFormProps, ValidationError } from './props'
import Input from '@/components/Input/Input.vue'
import {
  getDraftBookingForm,
  saveDraftBookingForm,
} from '@/lib/utils/storage.util'

export default Vue.extend({
  name: 'PersonalDetailsFormComponent',
  components: { Input },
  props: {
    errors: {
      type: Array as PropType<PersonalDetailsFormProps['errors']>,
      default: () => [] as ValidationError[],
    },
    validate: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      inputValues: { name: '', email: '', mobileNumber: '' },
    }
  },
  mounted() {
    const draftForm = getDraftBookingForm()

    if (draftForm) {
      this.inputValues.name = draftForm.name
      this.inputValues.email = draftForm.email
      this.inputValues.mobileNumber = draftForm.mobileNumber
    }
  },
  methods: {
    handleInputChange(label: string, value: string) {
      this.inputValues = { ...this.inputValues, [label]: value }

      if (!label) return

      saveDraftBookingForm(label, value)
      this.validate(label, value)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utility';
</style>
