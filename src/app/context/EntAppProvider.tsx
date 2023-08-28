'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { getTrendingCat } from '../hooks/tmdb'

import { usePathname } from 'next/navigation'

export const EntAppContext = createContext<any>(null)

import { searchData } from '../utils/fetchData'

import { SearchTitleProps } from '../types/Types.types'

function EntAppProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchedData, setSearchedData] = useState<SearchTitleProps[]>([])
  const [bookmarks, setBookmarks] = useState([])

  console.log(searchedData)

  const tab = usePathname().substring(1)

  useEffect(() => {
    // Tried implementing abortController to avoid too many
    // concurrent API calls, but it's not clear it's working.
    // PENDING REVISION!
    console.log('test')

    const fetchData = async (type = 'multi') => {
      try {
        if (searchQuery.length >= 3) {
          const data: SearchTitleProps[] | undefined = await searchData(type, searchQuery)

          setSearchedData(data)
        }
      } catch (err) {
        console.error(err)
      }
    }

    if (tab === 'bookmarks') {
      console.log('inside bookmarks!')

      if (searchQuery.length >= 3) {
        const bookmarkSearchResults = bookmarks.filter((bm) => {
          return bm.title.toLowerCase().includes(searchQuery.toLowerCase())
        })

        setSearchedData(bookmarkSearchResults)
      } else {
        setSearchedData([])
      }

      return
    }

    if (tab === 'movies') {
      console.log('searching only movies')

      fetchData('movie')

      return
    }

    if (tab === 'tv-series') {
      console.log('searching only tv series')

      fetchData('tv')

      return
    }

    if (searchQuery.length < 3) {
      // You don't make API calls when the search input has
      // less than 3 characters, and you also erase the results
      // whenever the input is blank again
      console.log('hola')
      setSearchedData([])
      return
    }

    fetchData()

    console.log(searchedData)
  }, [searchQuery])

  useEffect(() => {
    console.log('change tab alert!!!!!')
    // This resets the searched results whenever the tab changes
    setSearchedData([])
  }, [tab])

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
