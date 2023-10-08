<template>
  <button
    :class="[
      'button',
      { 'button--primary': type === 'primary' },
      { 'button--secondary': type === 'secondary' },
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
    type: {
      type: String as PropType<ButtonProps['type']>,
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
