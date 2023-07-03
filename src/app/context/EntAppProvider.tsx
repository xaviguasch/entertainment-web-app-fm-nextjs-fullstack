import { createContext, useContext, useState, useEffect } from 'react'
import { getTrendingCat } from '../hooks/tmdb'

export const EntAppContext = createContext()

function EntAppProvider({ children }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getTrendingCat('all')
        setData(fetchedData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  let entAppState = {
    data,
  }

  return <EntAppContext.Provider value={entAppState}>{children}</EntAppContext.Provider>
}

export default EntAppProvider
