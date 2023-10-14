<template>
  <div class="multistep-form" data-cy="personal-details-form">
    <Input v-model="bookedDate" label="Select Date" type="date" />
    <SelectInput v-model="bookedTime" :options="options" label="Select Time" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Input from '@/components/Input/Input.vue'
import SelectInput from '@/components/SelectInput/SelectInput.vue'
import { movieTimeSlots } from '@/configs/movie.config'

export default Vue.extend({
  name: 'TimeDetailsFormComponent',
  components: { Input, SelectInput },
  data() {
    return {
      bookedDate: '',
      bookedTime: '10:30 AM',
      options: movieTimeSlots,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utility';
</style>
