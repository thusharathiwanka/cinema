<template>
  <button
    :class="[
      'button',
      { 'button--primary': variant === 'primary' },
      { 'button--secondary': variant === 'secondary' },
    ]"
    @click="triggerClickEvent"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { ButtonProps } from '../../components/Button/props'

export default Vue.extend({
  name: 'ButtonComponent',
  props: {
    variant: {
      type: String as PropType<ButtonProps['variant']>,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary'].includes(value),
    },
  },
  methods: {
    triggerClickEvent(event: Event) {
      this.$emit('click', event)
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'button';
</style>
