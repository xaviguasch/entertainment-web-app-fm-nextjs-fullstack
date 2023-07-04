import { createContext, useContext, useState, useEffect } from 'react'
import { getTrendingCat, searchData } from '../hooks/tmdb'

export const EntAppContext = createContext()

function EntAppProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    // Tried implementing abortController to avoid too many
    // concurrent API calls, but haven't succeeded because I'm
    // using a helper helper fetcher function in another file.
    // PENDING! KEEP TRYING
    const fetchData = async () => {
      try {
        const data = await searchData(searchQuery)

        console.log(data)

        setSearchResults(data)
      } catch (err) {
        console.error(err)
      }
    }

    if (searchQuery.length >= 3) {
      fetchData()
    }
  }, [searchQuery])

  let entAppState = {
    searchQuery,
    setSearchQuery,
  }

  return <EntAppContext.Provider value={entAppState}>{children}</EntAppContext.Provider>
}

export default EntAppProvider
