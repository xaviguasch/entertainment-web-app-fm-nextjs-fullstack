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
