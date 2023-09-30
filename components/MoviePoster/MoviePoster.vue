<template>
  <div v-if="imageUrl && rating" class="movie-poster">
    <img :src="imageUrl" alt="movie-poster" class="movie-poster__image" />
    <div class="movie-poster__rating">{{ rating }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { MoviePosterProps } from './props'

export default Vue.extend({
  name: 'MoviePosterComponent',
  props: {
    imageUrl: {
      type: String as PropType<MoviePosterProps['imageUrl']>,
      required: true,
      default: null,
    },
    rating: {
      type: Number as PropType<MoviePosterProps['rating']>,
      required: true,
      default: null,
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'movie-poster.scss';
</style>
