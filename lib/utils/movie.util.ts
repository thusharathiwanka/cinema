import { Genres } from '@/lib/types/movie.type'
import { movieGenres, movieShowTimesWithMovie } from '@/configs/movie.config'

export const getMovieGenresById = (genresById: number[]): string[] => {
  return genresById
    .map((genreId) => {
      const genre = movieGenres.find((movieGenre) => movieGenre.id === genreId)
      return genre ? genre.name : null
    })
    .filter((genreName) => genreName !== null) as string[]
}

export const getMovieGenresFromArray = (genresArray: Genres[]) =>
  !genresArray || genresArray.length <= 0
    ? []
    : genresArray.map((genre) => genre.name)

export const getMovieYear = (releaseDate: Date) =>
  !releaseDate ? '' : new Date(releaseDate).getFullYear().toString()

export const getShowTime = (movieId: number) => {
  const movieWithShowTime = movieShowTimesWithMovie.find(
    (showtime) => showtime.id === movieId
  )

  if (movieWithShowTime) return movieWithShowTime.showtime

  return ''
}
