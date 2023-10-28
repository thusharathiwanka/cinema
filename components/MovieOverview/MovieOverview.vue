<template>
  <div v-if="!isMovieEmpty" class="movie-overview">
    <MoviePoster :imageUrl="movie.imageUrl" :rating="movie.rating" />
    <div class="movie-overview__details">
      <div class="movie-overview__content">
        <Typography
          variant="h1"
          :title="movie.title"
          data-cy="movie-overview__title"
          >{{ movie.title }}</Typography
        >
        <Typography
          variant="h2"
          color="secondary"
          :truncate="true"
          :title="movie.genres"
          data-cy="movie-overview__subtitle"
        >
          <span v-for="(genre, index) in movie.genres" :key="genre">
            {{ genre }}
            <span v-if="index + 1 < movie.genres.length">, </span>
          </span>
        </Typography>
        <Typography
          color="secondary"
          data-cy="movie-overview__overview-content"
          >{{ movie.overview }}</Typography
        >
      </div>
      <div class="movie-overview__extra">
        <Typography color="secondary" data-cy="movie-overview__year">{{
          movie.year
        }}</Typography>
        <Typography color="secondary" data-cy="movie-overview__separator"
          >&nbsp; • &nbsp;</Typography
        >
        <Typography color="secondary" data-cy="movie-overview__runtime">{{
          movie.runtime
        }}</Typography>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { MovieOverviewProps } from './props'
import MoviePoster from '@/components/MoviePoster/MoviePoster.vue'
import Typography from '@/components/Typography/Typography.vue'

export default Vue.extend({
  name: 'MovieOverviewComponent',
  components: {
    MoviePoster,
    Typography,
  },
  props: {
    movie: {
      type: Object as PropType<MovieOverviewProps>,
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
@import 'movie-overview';
</style>
