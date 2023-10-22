<template>
  <div>
    <Spinner v-if="$fetchState.pending" />
    <FetchError v-else-if="$fetchState.error" :error="$fetchState.error">
      <Button @click="$fetch">Retry</Button>
    </FetchError>
    <div v-else>
      <MovieOverview :movie="modifiedMovie" />
      <MovieBookingForm />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MovieOverview from '@/components/MovieOverview/MovieOverview.vue'
import Spinner from '@/components/Spinner/Spinner.vue'
import FetchError from '@/components/FetchError/FetchError.vue'
import Button from '@/components/Button/Button.vue'
import { MovieDetailsResponse } from '@/lib/types/movie.type'
import { getMovieGenresFromArray, getMovieYear } from '@/lib/utils/movie.util'
import { convertMinutesToHoursAndMinutes } from '@/lib/utils/time.util'
import { MovieOverviewProps } from '@/components/MovieOverview/props'
import { saveSeatLayoutsAndShowTimeForMovies } from '@/lib/utils/storage.util'

export default Vue.extend({
  name: 'MoviePage',
  components: { MovieOverview, Spinner, FetchError, Button },
  data() {
    return {
      movie: {} as MovieDetailsResponse,
      movieId: this.$route.params.id,
    }
  },
  async fetch() {
    try {
      const response: MovieDetailsResponse = await this.$axios.$get(
        `movie/${this.movieId}`
      )
      this.movie = response
    } catch (error) {
      throw new Error('Something went wrong while fetching movie details.')
    }
  },
  computed: {
    modifiedMovie(): MovieOverviewProps {
      return {
        title: this.movie.title,
        genres: getMovieGenresFromArray(this.movie.genres),
        overview: this.movie.overview,
        year: getMovieYear(this.movie.release_date),
        runtime: convertMinutesToHoursAndMinutes(this.movie.runtime),
        imageUrl: `${this.$config.imageBaseUrl}${this.movie.poster_path}`,
        rating: Number(this.movie.vote_average.toFixed(1)),
      }
    },
  },
  mounted() {
    saveSeatLayoutsAndShowTimeForMovies(this.movieId)
  },
})
</script>

<style lang="scss" scoped></style>
