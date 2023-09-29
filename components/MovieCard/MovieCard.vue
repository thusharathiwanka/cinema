<template>
  <div class="movie-card">
    <div class="movie-card__image-container">
      <img
        src="https://image.tmdb.org/t/p/w500/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg"
        alt="movie-poster"
        class="movie-card__image"
      />
    </div>
    <div class="movie-card__rating">7.0</div>
    <div class="movie-card__text-container">
      <h2 class="movie-card__title">SAW X</h2>
      <p class="movie-card__subtitle">Horror, Mystery, Thriller</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import 'movie-card.scss';
</style>
