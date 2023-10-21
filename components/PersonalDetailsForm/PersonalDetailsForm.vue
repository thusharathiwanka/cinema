<template>
  <div class="multistep-form" data-cy="personal-details-form">
    <Input
      v-model="name"
      label="Your Name"
      @input="(e) => handleInputChange('name', e)"
    />
    <Input
      v-model="email"
      label="Your Email"
      @input="(e) => handleInputChange('email', e)"
    />
    <Input
      v-model="mobileNumber"
      label="Your Mobile Number"
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
      name: '',
      email: '',
      mobileNumber: '',
    }
  },
  mounted() {
    const draftForm = getDraftBookingForm()

    if (draftForm) {
      this.name = draftForm.name
      this.email = draftForm.email
      this.mobileNumber = draftForm.mobileNumber
    }
  },
  methods: {
    handleInputChange(label: string, value: string) {
      saveDraftBookingForm(label, value)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utility';
</style>
