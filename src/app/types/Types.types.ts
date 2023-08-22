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
  title?: string
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
  media_type: 'movie' | 'tv' | 'N/A'
}

export type TileProps = {
  category: 'movie' | 'tv' | 'N/A'
  rating: number
  title: string | undefined
  image?: string
  id: number
  year: number | string
}

export type ContentItemProps = {
  id: number
  title?: string
  name?: string
  tagline?: string
  original_language?: string
  overview: string
  backdrop_path?: string
  poster_path?: string
  release_date?: string
  first_air_date?: string
  vote_average: number
  episode_run_time?: number[]
}
