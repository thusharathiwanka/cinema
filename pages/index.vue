<template>
  <div>
    <Typography type="h1" class="page-title">Now Showing</Typography>
    <MovieCardList :movies="movies" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Typography from '@/components/Typography/Typography.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { Typography },
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
@import '@/assets/scss/utility';
</style>
