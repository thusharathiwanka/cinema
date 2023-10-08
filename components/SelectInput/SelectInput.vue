<template>
  <div class="select-input">
    <label class="text-input__label">
      <Typography>{{ label }}</Typography>
    </label>
    <select
      v-model="selectedValue"
      class="select-input__area"
      @change="triggerChangeEvent"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { SelectInputProps } from './props'
import Typography from '@/components/Typography/Typography.vue'

export default Vue.extend({
  name: 'SelectInputComponent',
  components: { Typography },
  props: {
    label: {
      type: String as PropType<SelectInputProps['label']>,
      default: null,
    },
    options: {
      type: Array as PropType<SelectInputProps['options']>,
      default: () => [],
    },
    value: {
      type: String as PropType<SelectInputProps['value']>,
      default: null,
    },
  },
  data() {
    return {
      selectedValue: this.value,
    }
  },
  methods: {
    triggerChangeEvent(event: Event) {
      if (event && event.target) {
        const newValue = (event.target as HTMLInputElement).value
        this.$emit('input', newValue)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'select-input';
</style>
