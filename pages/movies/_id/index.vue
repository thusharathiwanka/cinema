<template>
  <div>
    <MovieOverview :movie="movie" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MovieOverview from '~/components/MovieOverview/MovieOverview.vue'

export default Vue.extend({
  name: 'MoviePage',
  components: { MovieOverview },
  data() {
    return {
      movie: {
        title: 'The Creator',
        genres: ['Action', 'Adventure'],
        imageUrl:
          'https://image.tmdb.org/t/p/w500/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg',
        rating: 6.9,
        year: '2023',
        runtime: 90,
        overview:
          'Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.',
      },
    }
  },
})
</script>

<style lang="scss" scoped></style>
