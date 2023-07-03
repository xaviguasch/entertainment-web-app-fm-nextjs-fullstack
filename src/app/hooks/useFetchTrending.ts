import { useState, useEffect } from 'react'
import { getTrendingCat } from './tmdb'

const useFetchTrending = (category) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCall = async () => {
      try {
        const fetchedData = await getTrendingCat(category)

        console.log(fetchedData)

        setData(fetchedData)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCall()
  }, [])

  return { data, isLoading }
}

export default useFetchTrending
