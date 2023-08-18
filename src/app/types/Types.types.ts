export type TileProps = {
  year: number
  category: 'movie' | 'tv'
  rating: number
  title: string
  image?: string
  id: number
}

export type MovieProps = {
  id: number
  title: string
  tagline?: string
  overview?: string
  release_date: string
  vote_average: number
  backdrop_path?: string
  poster_path?: string
  budget?: number
  runtime?: number
}

export type TVShowProps = {
  id: number
  name: string
  tagline?: string
  overview?: string
  first_air_date: string
  vote_average: number
  backdrop_path?: string
  poster_path?: string
  episode_run_time?: number[]
}

export type ContentDetailProps = {
  id: string
  title: string
  tagline?: string
  vote_average: number
  runtime: number
  release_date: string
  spoken_languages: string
  genres: string[]
  overview: string
  poster_path: string
  director: string
  cast: string[]
}

export type SearchTitleProps = {
  id: number
  backdrop_path?: string
  original_language: string
  title?: string
  original_name?: string
  overview: string
  vote_average: number
  poster_path?: string
  release_date?: string
  first_air_date?: string
}
