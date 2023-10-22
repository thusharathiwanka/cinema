<template>
  <div class="text-input">
    <label :for="label" class="text-input__label">
      <Typography>{{ label }}</Typography>
    </label>
    <input
      :id="label"
      :type="type"
      :name="label"
      :value="value"
      :required="required"
      :min="type === 'date' ? getMinDate() : undefined"
      :max="type === 'date' ? getMaxDate() : undefined"
      class="text-input__area"
      @input="triggerInputEvent($event)"
    />
    <div class="error-message">
      <Typography color="error">{{ error[0] }}</Typography>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { InputProps } from './props'
import Typography from '@/components/Typography/Typography.vue'

export default Vue.extend({
  name: 'InputComponent',
  components: { Typography },
  props: {
    label: { type: String as PropType<InputProps['label']>, default: null },
    placeholder: {
      type: String as PropType<InputProps['placeholder']>,
      default: null,
    },
    value: {
      type: String as PropType<InputProps['value']>,
      default: null,
    },
    type: {
      type: String as PropType<InputProps['type']>,
      default: 'text',
      validator: (value: string) =>
        ['text', 'date', 'email', 'tel'].includes(value),
    },
    required: {
      type: Boolean as PropType<InputProps['required']>,
      default: () => false,
    },
    error: {
      type: Array as PropType<InputProps['error']>,
      default: () => [],
    },
  },
  methods: {
    triggerInputEvent(event: Event) {
      if (event && event.target) {
        const newValue = (event.target as HTMLInputElement).value
        this.$emit('input', newValue.trim())
      }
    },
    getMinDate() {
      return new Date().toISOString().split('T')[0]
    },
    getMaxDate() {
      const today = new Date()
      today.setDate(today.getDate() + 7)

      return today.toISOString().split('T')[0]
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'input';
</style>
