import {

  ContentItemProps,
  ContentDetailProps,
} from '../types/Types.types'

const BASE_URL = 'https://api.themoviedb.org/3'
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
  try {
    const res = await fetch(
      `${BASE_URL}/trending/movie/day?language=en-US&api_key=${TMDB_API_KEY}`
    )

    const movies = await res.json()
    const moviesArr: ContentItemProps[] = movies.results

    console.log(moviesArr)
    return moviesArr
  } catch (error) {
    console.error(error)
  }
}

export async function getShows() {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/tv/day?language=en-US&api_key=${TMDB_API_KEY}`
    )

    const tvShows = await res.json()
    const showsArr: ContentItemProps[] = tvShows.results

    return showsArr
  } catch (error) {
    console.error(error)
  }
}

export async function getMovieDetails(id: string) {
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
      (person: any) => person.job.toLowerCase() === 'director'
    )

    const movieInfo: ContentDetailProps = {
      id: id,
      title: movieDetails.title,
      tagline: movieDetails.tagline,
      vote_average: movieDetails.vote_average,
      runtime: movieDetails.runtime,
      release_date: movieDetails.release_date?.slice(0, 4),
      spoken_languages: movieDetails.original_language,
      genres: movieDetails.genres.map(
        (genre: { id: string; name: string }) => genre.name
      ),
      overview: movieDetails.overview,
      poster_path: movieDetails.poster_path,
      cast: credits.cast.slice(0, 10).map((actor: any) => actor.name),
      director: director.name,
    }

    return movieInfo
  } catch (error) {
    console.error(error)
  }
}

export async function searchData(type: string, query: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/search/${type}?query=${query}&include_adult=false&language=en-US&page=1&api_key=${TMDB_API_KEY}`
    )

    const titles = await res.json()
    const titlesArr: ContentItemProps[] = titles.results

    return titlesArr
  } catch (error) {
    console.error(error)
  }
}

export async function getTrendingCat(category: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/${category}/day?api_key=${TMDB_API_KEY}`
    )

    const titles = await res.json()
    const titlesArr: ContentItemProps[] = titles.results

    return titlesArr
  } catch (error) {
    console.error(error)
  }
}
