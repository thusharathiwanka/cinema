<template>
  <div>
    <h1 v-if="type === textTypes.TITLE"><slot /></h1>
    <h3 v-if="type === textTypes.SUBTITLE"><slot /></h3>
    <p v-if="type === textTypes.BODY"><slot /></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { TextProps } from './props'
import { TextTypes } from './types'

export default Vue.extend({
  name: 'TextComponent',
  props: {
    type: {
      type: String as PropType<TextProps['type']>,
      required: false,
      default: TextTypes.TITLE,
    },
  },
  data() {
    return {
      textTypes: TextTypes,
    }
  },
})
</script>

<style lang="scss" scoped></style>
