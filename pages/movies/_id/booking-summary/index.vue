<template>
  <div>
    <Spinner v-if="$fetchState.pending" />
    <FetchError v-else-if="$fetchState.error" :error="$fetchState.error">
      <Button @click="$fetch">Retry</Button>
    </FetchError>
    <MovieBookingSummary v-else :movie="modifiedMovie" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MovieBookingSummary from '@/components/MovieBookingSummary/MovieBookingSummary.vue'
import { MovieDetailsResponse } from '@/lib/types/movie.type'
import { getMovieGenresFromArray } from '@/lib/utils/movie.util'
import { MovieBookingSummaryProps } from '@/components/MovieBookingSummary/props'
import { getDraftBookingForm } from '~/lib/utils/storage.util'
import { DraftBookingForm } from '~/lib/types/storage.type'

export default Vue.extend({
  name: 'MoviePage',
  components: { MovieBookingSummary },
  data() {
    return {
      movie: {} as MovieDetailsResponse,
      movieId: this.$route.params.id,
      bookedTime: '',
      bookedDate: '',
      seats: [] as string[],
    }
  },
  async fetch() {
    try {
      const response: MovieDetailsResponse = await this.$axios.$get(
        `movie/${this.movieId}`
      )
      this.movie = response
    } catch (error) {
      throw new Error('Something went wrong while fetching booking summary.')
    }
  },
  computed: {
    modifiedMovie(): MovieBookingSummaryProps {
      return {
        title: this.movie.title,
        genres: getMovieGenresFromArray(this.movie.genres),
        overview: this.movie.overview,
        imageUrl: `${this.$config.imageBaseUrl}${this.movie.poster_path}`,
        rating: Number(this.movie.vote_average?.toFixed(1)),
        bookedTime: this.bookedTime,
        bookedDate: this.bookedDate,
        seats: this.seats,
      }
    },
  },
  mounted() {
    const draftForm: DraftBookingForm = getDraftBookingForm()

    if (draftForm) {
      this.bookedDate = draftForm.bookedDate
      this.bookedTime = draftForm.showTime
      this.seats = draftForm.selectedSeats
    }
  },
})
</script>

<style lang="scss" scoped></style>
