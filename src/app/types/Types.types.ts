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
  director?: string
  cast: string[]
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
  media_type?: 'movie' | 'tv' | 'N/A'
}

export type TileProps = {
  category: 'movie' | 'tv' | 'N/A' | undefined
  rating: number | string
  title: string | undefined
  image?: string
  id: number
  year: number | string
}
