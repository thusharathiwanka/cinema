export type MovieListMovie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  media_type: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type MovieListResponse = {
  created_by: string
  description: string
  favorite_count: number
  id: string
  item_count: number
  iso_639_1: string
  name: string
  poster_path: string | null
  items: MovieListMovie[]
}

export type Genres = {
  id: number
  name: string
}

export type ProductionCompany = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export type ProductionCountry = {
  iso_3166_1: string
  name: string
}

export type SpokenLanguages = {
  english_name: string
  iso_639_1: string
  name: string
}

export type MovieDetailsResponse = {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: boolean | null
  budget: number
  genres: Genres[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: Date
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguages[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
