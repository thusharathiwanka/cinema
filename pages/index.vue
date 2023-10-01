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
          title: 'Expend4bles',
          genres: ['Action', 'Adventure', 'Thriller'],
          imageUrl:
            'https://image.tmdb.org/t/p/w500/nbrqj9q8WubD3QkYm7n3GhjN7kE.jpg',
          rating: 6.7,
        },
        {
          title: 'Gran Turismo',
          genres: ['Action', 'Adventure', 'Drama'],
          imageUrl:
            'https://image.tmdb.org/t/p/w500/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg',
          rating: 7.4,
        },
        {
          title: 'The Creator',
          genres: ['Action', 'Adventure'],
          imageUrl:
            'https://image.tmdb.org/t/p/w500/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg',
          rating: 6.9,
        },
        {
          title: 'Quicksand',
          genres: ['Crime', 'Drama', 'Mystery'],
          imageUrl:
            'https://image.tmdb.org/t/p/w500/cVLfO3CbVg8p5Qcaifq6AidOe2w.jpg',
          rating: 7.4,
        },
        {
          title: 'Retribution',
          genres: ['Action', 'Crime', 'Drama'],
          imageUrl:
            'https://image.tmdb.org/t/p/w500/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg',
          rating: 6.6,
        },
        {
          title: 'Hypnotic',
          genres: ['Action', 'Mystery', 'Thriller'],
          imageUrl:
            'https://image.tmdb.org/t/p/w500/m0mYmlN9AewOGSOl7Q1ZgZvEeUU.jpg',
          rating: 5.5,
        },
        {
          title: 'Feed',
          genres: ['Horror'],
          imageUrl:
            'https://image.tmdb.org/t/p/w500/4U7lZe2BcuWgUKSJih97XFOWjr5.jpg',
          rating: 5.0,
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utility';
</style>
