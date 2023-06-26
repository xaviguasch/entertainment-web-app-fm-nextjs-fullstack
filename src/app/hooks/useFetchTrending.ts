import { useState, useEffect } from 'react'
import { getTrendingAll } from './tmdb'

const useFetchTrending = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCall = async () => {
      try {
        const fetchedData = await getTrendingAll()

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
