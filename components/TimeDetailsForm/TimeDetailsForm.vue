<template>
  <div class="multistep-form" data-cy="personal-details-form">
    <Input
      v-model="bookedDate"
      label="Select Date"
      type="date"
      @input="(e) => handleInputChange('bookedDate', e)"
    />
    <ShowTime :showTime="showTime" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Input from '@/components/Input/Input.vue'
import ShowTime from '@/components/ShowTime/ShowTime.vue'
import {
  getDraftBookingForm,
  saveDraftBookingForm,
} from '~/lib/utils/storage.util'
import { getShowTime } from '~/lib/utils/movie.util'

export default Vue.extend({
  name: 'TimeDetailsFormComponent',
  components: { Input, ShowTime },
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
    handleInputChange(label: string, value: string) {
      saveDraftBookingForm(label, value)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utility';
</style>
