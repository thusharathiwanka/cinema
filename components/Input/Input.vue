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
      class="text-input__area"
      @input="triggerInputEvent($event)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { InputProps } from './props'

export default Vue.extend({
  name: 'InputComponent',
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
  },
  methods: {
    triggerInputEvent(event: Event) {
      if (event && event.target) {
        const newValue = (event.target as HTMLInputElement).value
        this.$emit('input', newValue)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'input';
</style>
