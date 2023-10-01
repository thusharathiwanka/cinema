<template>
  <button
    :class="[
      'button',
      { 'button--primary': type === 'primary' },
      { 'button--secondary': type === 'secondary' },
    ]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { ButtonProps } from './props'

export default Vue.extend({
  name: 'ButtonComponent',
  props: {
    type: {
      type: String as PropType<ButtonProps['type']>,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary'].includes(value),
    },
    onClick: {
      type: Function as PropType<ButtonProps['onClick']>,
      default: () => null,
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'button';
</style>
