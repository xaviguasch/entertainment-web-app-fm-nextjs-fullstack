const BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

const url = `${BASE_URL}/movie/157336?api_key=${TMDB_API_KEY}`

const fetchData = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`)
  }
  const result = await response.json()

  return result
}

export const searchAPI = async () => {
  const data = await fetchData(url)

  return data
}
