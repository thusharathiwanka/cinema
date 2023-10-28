<template>
  <component :is="type" :class="computedClasses">
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
    type: {
      type: String as PropType<TypographyProps['type']>,
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
        'typography--title': this.type === 'h1',
        'typography--subtitle': this.type === 'h2',
        'typography--body': this.type === 'p',
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
