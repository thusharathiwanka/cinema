<template>
  <div v-if="!isMovieEmpty" class="booking-summary">
    <Typography variant="h1" data-cy="booking-summary__title">
      Booking Summary
    </Typography>
    <div class="booking-summary__content">
      <MoviePoster :imageUrl="movie.imageUrl" :rating="movie.rating" />
      <div class="booking-summary__details">
        <div class="booking-summary__movie-details">
          <Typography
            variant="h1"
            :title="movie.title"
            data-cy="booking-summary__movie-title"
          >
            {{ movie.title }}
          </Typography>
          <Typography
            variant="h2"
            color="secondary"
            :truncate="true"
            :title="movie.genres"
            data-cy="booking-summary__movie-subtitle"
          >
            <span v-for="(genre, index) in movie.genres" :key="genre">
              {{ genre }}
              <span v-if="index + 1 < movie.genres.length">, </span>
            </span>
          </Typography>
          <Typography
            color="secondary"
            data-cy="booking-summary__movie-overview"
            >{{ movie.overview }}</Typography
          >
        </div>
        <div class="booking-summary__time-details">
          <div class="booking-summary__booked-date">
            <Typography>Booked Date:&nbsp; {{ movie.bookedDate }}</Typography>
          </div>
          <div class="booking-summary__booked-time">
            <Typography>Booked Time:&nbsp; {{ movie.bookedTime }}</Typography>
          </div>
          <div class="booking-summary__seats">
            <Typography>Seats:</Typography>
            <Typography>
              <span v-for="(seat, index) in movie.seats" :key="seat">
                {{ seat }}
                <span v-if="index + 1 < movie.seats.length">, </span>
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
    <div class="booking-summary__back">
      <Button @click="handleClick">
        <Typography color="background">Back to Movies</Typography>
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { MovieBookingSummaryProps } from './props'
import { removeDraftBookingForm } from '@/lib/utils/storage.util'
import MoviePoster from '@/components/MoviePoster/MoviePoster.vue'
import Typography from '@/components/Typography/Typography.vue'

export default Vue.extend({
  name: 'MovieBookingSummaryComponent',
  components: { MoviePoster, Typography },
  props: {
    movie: {
      type: Object as PropType<MovieBookingSummaryProps>,
      default: null,
    },
  },
  computed: {
    isMovieEmpty() {
      return Object.keys(this.movie).length <= 0
    },
  },
  methods: {
    handleClick() {
      removeDraftBookingForm()
      this.$router.replace('/')
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'movie-booking-summary';
</style>
