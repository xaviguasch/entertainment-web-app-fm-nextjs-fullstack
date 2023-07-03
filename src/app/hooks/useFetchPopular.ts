import { useState, useEffect } from 'react'
import { getPopular } from './tmdb'

const useFetchPopular = (category) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCall = async () => {
      try {
        const fetchedData = await getPopular(category)

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

export default useFetchPopular
