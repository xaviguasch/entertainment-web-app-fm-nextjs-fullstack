import { MovieProps, TVShowProps } from '../types/Types.types'

const BASE_URL = 'https://api.themoviedb.org/3'
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p'
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

// This doesn't work, don't know why
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
//   },
// }

export async function getMovies() {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?language=en-US&api_key=${TMDB_API_KEY}`
  )

  const movies = await res.json()
  const moviesArr: MovieProps[] = movies.results

  console.log('heeeeeeeeeeeeeeee')
  console.log(moviesArr)
  return moviesArr
}

export async function getShows() {
  const res = await fetch(
    `${BASE_URL}/trending/tv/day?language=en-US&api_key=${TMDB_API_KEY}`
  )

  const tvShows = await res.json()
  const showsArr: TVShowProps[] = tvShows.results

  return showsArr
}

export async function getMovieDetails(id) {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/${id}?language=en-US&api_key=${TMDB_API_KEY}`
    )
    const details = await res.json()
    return details
  } catch (error) {
    console.error(error)
  }
}
