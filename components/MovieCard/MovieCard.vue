<template>
  <div v-if="movie" class="movie-card">
    <MoviePoster :imageUrl="movie.imageUrl" :rating="movie.rating" />
    <div class="movie-card__text-container">
      <h2 class="movie-card__title text-truncate" :title="movie.title">
        {{ movie.title }}
      </h2>
      <span
        v-for="(genre, index) in movie.genres"
        :key="genre"
        class="movie-card__subtitle"
      >
        {{ genre }}
        <span v-if="index + 1 < movie.genres.length">,</span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { MovieCardProps } from './props'

export default Vue.extend({
  name: 'MovieCardComponent',
  props: {
    movie: {
      type: Object as PropType<MovieCardProps>,
      required: true,
      default: null,
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'movie-card';
@import '@/assets/scss/utility';
</style>
