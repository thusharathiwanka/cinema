<template>
  <component :is="variant" :class="computedClasses">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { TypographyProps } from './props'

export default Vue.extend({
  name: 'TypographyComponent',
  props: {
    variant: {
      type: String as PropType<TypographyProps['variant']>,
      default: 'p',
      validator: (value: string) => ['h1', 'h2', 'p'].includes(value),
    },
    truncate: {
      type: Boolean as PropType<TypographyProps['truncate']>,
      default: false,
    },
    color: {
      type: String as PropType<TypographyProps['color']>,
      default: 'primary',
      validator: (value: string) =>
        ['primary', 'secondary', 'accent', 'background', 'error'].includes(
          value
        ),
    },
  },
  computed: {
    computedClasses(): Object {
      return {
        truncate: this.truncate,
        'typography--title': this.variant === 'h1',
        'typography--subtitle': this.variant === 'h2',
        'typography--body': this.variant === 'p',
        primary: this.color === 'primary',
        secondary: this.color === 'secondary',
        accent: this.color === 'accent',
        background: this.color === 'background',
        error: this.color === 'error',
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'typography';
</style>
