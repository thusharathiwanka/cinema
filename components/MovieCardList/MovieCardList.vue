<template>
  <div v-if="movies.length > 0" class="movie-card-list">
    <MovieCard v-for="movie in movies" :key="movie.title" :movie="movie" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types'
import { MovieCardListProps } from './props'
import MovieCard from '@/components/MovieCard/MovieCard.vue'

export default Vue.extend({
  name: 'MovieCardListComponent',
  components: { MovieCard },
  props: {
    movies: {
      type: Array as PropType<MovieCardListProps['movies']>,
      required: true,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'movie-card-list.scss';
</style>
