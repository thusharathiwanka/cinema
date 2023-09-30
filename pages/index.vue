<template>
  <div>
    <h1 class="page-title">Now Showing</h1>
    <MovieCardList :movies="movies" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      movies: [
        {
          title: 'SAW X',
          genres: ['Crime', 'Horror', 'Thriller'],
          imageUrl:
            'https://image.tmdb.org/t/p/w500/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg',
          rating: 7.4,
        },
        {
          title: 'SAW X',
          genres: ['Crime', 'Horror', 'Thriller'],
          imageUrl:
            'https://image.tmdb.org/t/p/w500/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg',
          rating: 7.4,
        },
        {
          title: 'SAW X',
          genres: ['Crime', 'Horror', 'Thriller'],
          imageUrl:
            'https://image.tmdb.org/t/p/w500/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg',
          rating: 7.4,
        },
        {
          title: 'SAW X',
          genres: ['Crime', 'Horror', 'Thriller'],
          imageUrl:
            'https://image.tmdb.org/t/p/w500/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg',
          rating: 7.4,
        },
        {
          title: 'SAW X',
          genres: ['Crime', 'Horror', 'Thriller'],
          imageUrl:
            'https://image.tmdb.org/t/p/w500/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg',
          rating: 7.4,
        },
        {
          title: 'SAW X',
          genres: ['Crime', 'Horror', 'Thriller'],
          imageUrl:
            'https://image.tmdb.org/t/p/w500/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg',
          rating: 7.4,
        },
        {
          title: 'SAW X',
          genres: ['Crime', 'Horror', 'Thriller'],
          imageUrl:
            'https://image.tmdb.org/t/p/w500/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg',
          rating: 7.4,
        },
        {
          title: 'SAW X',
          genres: ['Crime', 'Horror', 'Thriller'],
          imageUrl:
            'https://image.tmdb.org/t/p/w500/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg',
          rating: 7.4,
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
