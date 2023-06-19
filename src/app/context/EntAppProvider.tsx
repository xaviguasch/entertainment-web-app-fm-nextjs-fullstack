import { createContext, useContext, useState, useEffect } from 'react'

import { getTrendingAll } from '../../../lib/tmdb'

export const EntAppContext = createContext()

function EntAppProvider({ children }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getTrendingAll()
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
