<template>
  <div class="not-found">
    <Typography variant="h1">{{ title }}</Typography>
    <Typography variant="h2" color="secondary">{{ subtitle }}</Typography>
    <nuxt-link :to="link">
      <Button>
        <Typography color="background">Back to Home</Typography>
      </Button>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import Typography from '../Typography/Typography.vue'
import { NotFoundProps } from './props'
import Button from '@/components/Button/Button.vue'

export default Vue.extend({
  name: 'NotFoundComponent',
  components: {
    Button,
    Typography,
  },
  props: {
    title: {
      type: String as PropType<NotFoundProps['title']>,
      default: '404',
    },
    subtitle: {
      type: String as PropType<NotFoundProps['title']>,
      default: 'We couldn’t find the page that you are looking for',
    },
    link: {
      type: String as PropType<NotFoundProps['link']>,
      default: '/',
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'not-found';
@import '@/assets/scss/utility';
</style>
