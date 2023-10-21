<template>
  <div>
    <Typography type="h1" class="page-title">Now Showing</Typography>
    <Spinner v-if="$fetchState.pending" />
    <FetchError v-else-if="$fetchState.error" :error="$fetchState.error">
      <Button @click="$fetch">Retry</Button>
    </FetchError>
    <MovieCardList v-if="movies.length" :movies="modifiedMovies" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Typography from '@/components/Typography/Typography.vue'
import Spinner from '@/components/Spinner/Spinner.vue'
import FetchError from '@/components/FetchError/FetchError.vue'
import Button from '@/components/Button/Button.vue'
import { getMovieGenresById } from '~/lib/utils/movie.util'
import { MovieListMovie, MovieListResponse } from '~/lib/types/movie.type'
import { MovieCardProps } from '~/components/MovieCard/props'

export default Vue.extend({
  name: 'HomePage',
  components: { Typography, Spinner, FetchError, Button },
  data() {
    return {
      movies: [] as MovieListMovie[],
    }
  },
  async fetch() {
    try {
      const response: MovieListResponse = await this.$axios.$get('list/8272289')
      this.movies = response.items
    } catch (error) {
      throw new Error('Something went wrong while fetching movies.')
    }
  },
  computed: {
    modifiedMovies(): MovieCardProps[] {
      return this.movies.map((movie: MovieListMovie) => {
        return {
          id: movie.id,
          title: movie.title,
          genres: getMovieGenresById(movie.genre_ids),
          imageUrl: `${this.$config.imageBaseUrl}${movie.poster_path}`,
          rating: Number(movie.vote_average.toFixed(1)),
        }
      })
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utility';
</style>
