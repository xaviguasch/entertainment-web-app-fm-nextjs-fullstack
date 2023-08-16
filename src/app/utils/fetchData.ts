import { MovieProps, TVShowProps, MovieDetailProps } from '../types/Types.types'

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
    const movieDetailsRes = await fetch(
      `${BASE_URL}/movie/${id}?language=en-US&api_key=${TMDB_API_KEY}`
    )
    const movieDetails = await movieDetailsRes.json()

    const creditsRes = await fetch(
      `${BASE_URL}/movie/${id}/credits?api_key=${TMDB_API_KEY}`
    )

    const credits = await creditsRes.json()

    const director = credits.crew.find(
      (person) => person.job.toLowerCase() === 'director'
    )

    const movieInfo: MovieDetailProps = {
      id: id,
      title: movieDetails.title,
      tagline: movieDetails.tagline,
      vote_average: movieDetails.vote_average,
      runtime: movieDetails.runtime,
      release_date: movieDetails.release_date?.slice(0, 4),
      spoken_languages: movieDetails.original_language,
      genres: movieDetails.genres.map((genre) => genre.name),
      overview: movieDetails.overview,
      poster_path: movieDetails.poster_path,
      cast: credits.cast.slice(0, 10).map((actor) => actor.name),
      director: director.name,
    }

    return movieInfo
  } catch (error) {
    console.error(error)
  }
}
