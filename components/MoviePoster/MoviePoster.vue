<template>
  <div v-if="imageUrl && rating" class="movie-poster">
    <img :src="imageUrl" alt="movie-poster" class="movie-poster__image" />
    <div class="movie-poster__rating">
      <Typography color="background">{{ rating }}</Typography>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import Typography from '../Typography/Typography.vue'
import { MoviePosterProps } from './props'

export default Vue.extend({
  name: 'MoviePosterComponent',
  components: { Typography },
  props: {
    imageUrl: {
      type: String as PropType<MoviePosterProps['imageUrl']>,
      default: null,
    },
    rating: {
      type: Number as PropType<MoviePosterProps['rating']>,
      default: null,
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'movie-poster';
</style>
