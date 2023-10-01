<template>
  <component
    :is="type"
    :class="[
      { truncate: truncate },
      { 'typography--title': type === 'h1' },
      { 'typography--subtitle': type === 'h2' },
      { 'typography--body': type === 'p' },
      { primary: color === 'primary' },
      { secondary: color === 'secondary' },
      { accent: color === 'accent' },
      { background: color === 'background' },
    ]"
  >
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
        ['primary', 'secondary', 'accent', 'background'].includes(value),
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'typography';
</style>
