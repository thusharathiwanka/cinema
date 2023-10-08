<template>
  <div class="multistep-form" data-cy="personal-details-form">
    <Input v-model="name" label="Your Name" />
    <Input v-model="email" label="Your Email" />
    <Input v-model="mobileNumber" label="Your Mobile Number" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Input from '@/components/Input/Input.vue'

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
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utility';
</style>
