import { useState, useEffect } from 'react'
import { getMovieData } from './tmdb'

const useFetchMovieData = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCall = async () => {
      try {
        const fetchedData = await getMovieData()

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

export default useFetchMovieData
