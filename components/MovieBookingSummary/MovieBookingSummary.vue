<template>
  <div v-if="movie" class="booking-summary">
    <Typography type="h1" data-cy="booking-summary__title">
      Booking Summary
    </Typography>
    <div class="booking-summary__content">
      <MoviePoster :imageUrl="movie.imageUrl" :rating="movie.rating" />
      <div class="booking-summary__details">
        <div class="booking-summary__movie-details">
          <Typography
            type="h1"
            :title="movie.title"
            data-cy="booking-summary__movie-title"
          >
            {{ movie.title }}
          </Typography>
          <Typography
            type="h2"
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
            <Typography color="secondary">Booked Date:</Typography>
            <Typography>{{ movie.bookedDate }}</Typography>
          </div>
          <div class="booking-summary__booked-time">
            <Typography color="secondary">Booked Time:</Typography>
            <Typography>{{ movie.bookedTime }}</Typography>
          </div>
          <div class="booking-summary__seats">
            <Typography color="secondary">Seats: </Typography>
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
    <nuxt-link to="/" class="booking-summary__done">
      <Button>
        <Typography color="background">Done</Typography>
      </Button>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { MovieBookingSummaryProps } from './props'
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
})
</script>

<style lang="scss" scoped>
@import 'movie-booking-summary.scss';
@import '@/assets/scss/utility.scss';
</style>
