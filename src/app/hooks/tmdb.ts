const BASE_URL = 'https://api.themoviedb.org/3'
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p'
const BACKDROP_IMG_SIZE = 'w500'
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

const fetchData = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`)
  }
  const result = await response.json()

  return result
}

const refineDataPoints = (data) => {
  return data.map((item) => ({
    id: item.id,
    category: item.title ? 'Movie' : 'TV Series',
    title: item.title || item.name,
    backgroundImg: `${BASE_IMAGE_URL}/${BACKDROP_IMG_SIZE}/${item.backdrop_path}?api_key=${TMDB_API_KEY}`,
    year: item.release_date?.slice(0, 4) || item.first_air_date?.slice(0, 4) || 'N/A',
    rating: item.adult ? 'Explicit' : 'Family',
    genreIds: item.genre_ids,
  }))
}

const getTrendingAll = async () => {
  const url = `${BASE_URL}/trending/all/day?api_key=${TMDB_API_KEY}`

  const data = await fetchData(url)

  // we extract and reestructure the correct data points
  const refinedData = refineDataPoints(data.results)
  return refinedData
}

const getMovieData = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}`

  const generalMovieData = await fetchData(url)
  console.log(generalMovieData)

  const creditsUrl = `${BASE_URL}/movie/${movieId}/credits?api_key=${TMDB_API_KEY}`

  const movieCredits = await fetchData(creditsUrl)
  console.log(movieCredits)

  const director = movieCredits.crew.find(
    (person) => person.job.toLowerCase() === 'director'
  )

  console.log(director)

  const movieInfo = {
    title: generalMovieData.title,
    tagline: generalMovieData.tagline,
    votes: generalMovieData.vote_average,
    runtime: generalMovieData.runtime,
    year: generalMovieData.release_date?.slice(0, 4),
    language: generalMovieData.original_language,
    genres: generalMovieData.genres.map((genre) => genre.name),
    synopsis: generalMovieData.overview,
    cast: movieCredits.cast.slice(0, 10),
  }

  return movieInfo
}

const getTvData = async (tvSeriesId) => {
  const url = `${BASE_URL}/tv/${tvSeriesId}?api_key=${TMDB_API_KEY}`

  const generalTvData = await fetchData(url)
  console.log(generalTvData)

  return ['hola from getTv']
}

const getItemData = async (itemId, category) => {
  if (category === 'movie') {
    return await getMovieData(itemId)
  }

  if (category === 'tvSeries') {
    return await getTvData(itemId)
  }
}

export { getTrendingAll, getItemData }
