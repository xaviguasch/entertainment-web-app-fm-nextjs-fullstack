'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { getTrendingCat } from '../hooks/tmdb'

import { usePathname } from 'next/navigation'

export const EntAppContext = createContext()

import { searchData } from '../utils/fetchData'

function EntAppProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchedData, setSearchedData] = useState([])
  const [bookmarks, setBookmarks] = useState([])

  const tab = usePathname().substring(1)

  useEffect(() => {
    // Tried implementing abortController to avoid too many
    // concurrent API calls, but it's not clear it's working.
    // PENDING REVISION!

    const controller = new AbortController()

    const fetchData = async (type = 'multi') => {
      try {
        console.log('inside')
        const data = await searchData(type, searchQuery, controller.signal)

        console.log(data)

        setSearchedData(data)
      } catch (err) {
        console.error(err)
      }
    }

    if (tab === 'bookmarks') {
      console.log('inside bookmarks!')

      setSearchedData([])

      if (searchQuery.length >= 3) {
        const bookmarkSearchResults = bookmarks.filter((bm) => {
          return bm.title.toLowerCase().includes(searchQuery.toLowerCase())
        })

        setSearchedData(bookmarkSearchResults)
      }

      return
    }

    if (tab === 'movies') {
      setSearchedData([])

      console.log('searching only movies')

      fetchData('movie')

      return
    }

    if (tab === 'tv-series') {
      setSearchedData([])

      console.log('searching only tv series')

      fetchData('tv')

      return
    }

    if (searchQuery.length < 3) {
      // You don't make API calls when the search input has
      // less than 3 characters, and you also erase the results
      // whenever the input is blank again
      setSearchedData([])
      return
    }

    fetchData()

    console.log(searchedData)

    return () => controller.abort()
  }, [searchQuery])

  let entAppState = {
    searchQuery,
    setSearchQuery,
    searchedData,
    setSearchedData,
    bookmarks,
    setBookmarks,
  }

  return <EntAppContext.Provider value={entAppState}>{children}</EntAppContext.Provider>
}

export default EntAppProvider
