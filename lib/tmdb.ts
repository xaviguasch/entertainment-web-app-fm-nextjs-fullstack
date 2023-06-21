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
    rating: item.adult ? 'Adult' : 'E',
    genreIds: item.genre_ids,
  }))
}

export const getTrendingAll = async () => {
  const url = `${BASE_URL}/trending/all/day?api_key=${TMDB_API_KEY}`

  const data = await fetchData(url)

  // we extract and reestructure the correct data points
  const refinedData = refineDataPoints(data.results)
  return refinedData
}
