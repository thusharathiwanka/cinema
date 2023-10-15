<template>
  <div>
    <Spinner v-if="$fetchState.pending" />
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
import { MovieDetailsResponse } from '@/lib/types/movie.type'
import { getMovieGenresFromArray, getMovieYear } from '@/lib/utils/movie.util'
import { convertMinutesToHoursAndMinutes } from '@/lib/utils/time.util'
import { MovieOverviewProps } from '@/components/MovieOverview/props'

export default Vue.extend({
  name: 'MoviePage',
  components: { MovieOverview, Spinner },
  data() {
    return {
      movie: {} as MovieDetailsResponse,
    }
  },
  async fetch() {
    const id = this.$route.params.id

    try {
      const response: MovieDetailsResponse = await this.$axios.$get(
        `movie/${id}`
      )
      this.movie = response
    } catch (error) {
      console.error(error)
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
})
</script>

<style lang="scss" scoped></style>
