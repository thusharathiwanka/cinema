<template>
  <div class="multistep-form" data-cy="personal-details-form">
    <Input
      v-model="inputValues.name"
      label="Your Name*"
      required
      :error="nameError"
      @input="(e) => handleInputChange('name', e)"
    />
    <Input
      v-model="inputValues.email"
      label="Your Email*"
      type="email"
      required
      :error="emailError"
      @input="(e) => handleInputChange('email', e)"
    />
    <Input
      v-model="inputValues.mobileNumber"
      label="Your Mobile Number*"
      type="tel"
      required
      :error="mobileNumberError"
      @input="(e) => handleInputChange('mobileNumber', e)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Input from '@/components/Input/Input.vue'
import {
  getDraftBookingForm,
  saveDraftBookingForm,
} from '@/lib/utils/storage.util'

export default Vue.extend({
  name: 'PersonalDetailsFormComponent',
  components: { Input },
  data() {
    return {
      inputValues: { name: '', email: '', mobileNumber: '' },
      nameError: [] as string[],
      emailError: [] as string[],
      mobileNumberError: [] as string[],
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

      switch (label) {
        case 'name':
          this.nameError = !value ? ['Please input name'] : []
          break
        case 'email':
          this.emailError = !value ? ['Please input email'] : []
          break
        case 'mobileNumber':
          this.mobileNumberError = !value ? ['Please input mobile number'] : []
          break
      }

      saveDraftBookingForm(label, value)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utility';
</style>
