<template>
  <nuxt-link
    v-if="!isMovieEmpty"
    :to="`movies/${movie.id}`"
    data-cy="movie-card"
  >
    <div class="movie-card">
      <MoviePoster :imageUrl="movie.imageUrl" :rating="movie.rating" />
      <div class="movie-card__text-container">
        <Typography
          variant="h2"
          :truncate="true"
          :title="movie.title"
          data-cy="movie-card__title"
        >
          {{ movie.title }}
        </Typography>
        <Typography
          color="secondary"
          :truncate="true"
          data-cy="movie-card__subtitle"
          :title="movie.genres"
        >
          <span v-for="(genre, index) in movie.genres" :key="genre">
            {{ genre }}
            <span v-if="index + 1 < movie.genres.length">, </span>
          </span>
        </Typography>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { MovieCardProps } from './props'
import Typography from '@/components/Typography/Typography.vue'
import MoviePoster from '@/components/MoviePoster/MoviePoster.vue'

export default Vue.extend({
  name: 'MovieCardComponent',
  components: { Typography, MoviePoster },
  props: {
    movie: {
      type: Object as PropType<MovieCardProps>,
      default: null,
    },
  },
  computed: {
    isMovieEmpty() {
      return Object.keys(this.movie).length <= 0
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'movie-card';
</style>
