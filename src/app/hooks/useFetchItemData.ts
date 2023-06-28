import { useState, useEffect } from 'react'
import { getItemData } from './tmdb'

const useFetchItemData = (itemId, category) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  category ===
    useEffect(() => {
      const fetchCall = async () => {
        try {
          const fetchedData = await getItemData(itemId, category)
          console.log(itemId, category)
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

export default useFetchItemData
