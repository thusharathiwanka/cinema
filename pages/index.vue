<template>
  <main>
    <MovieCard :movie="movie" />
    <MovieCard :movie="movie" />
    <MovieCard :movie="movie" />
    <MovieCard :movie="movie" />
    <MovieCard :movie="movie" />
    <MovieCard :movie="movie" />
    <MovieCard :movie="movie" />
    <MovieCard :movie="movie" />
    <MovieCard />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      movie: {
        title: 'SAW X',
        genres: ['1', '2'],
        imageUrl:
          'https://image.tmdb.org/t/p/w500/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg',
        rating: 7.4,
      },
    }
  },
})
</script>

<style lang="scss" scoped>
@import 'page.scss';
</style>
