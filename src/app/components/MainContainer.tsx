'use client'

import React, { useContext, useEffect } from 'react'
import { EntAppContext } from '../context/EntAppProvider'

import { usePathname } from 'next/navigation'

import classes from './MainContainer.module.css'

import SearchResults from './SearchResults'
import Search from './Search'

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const { searchedData, searchQuery, setSearchQuery } = useContext(EntAppContext)
  const currentRoute = usePathname()

  useEffect(() => {
    console.log(currentRoute)
    setSearchQuery('')

    console.log(searchQuery)
  }, [currentRoute])

  console.log('searchedData length: ', searchedData.length)
  console.log(currentRoute)
  console.log('searchQueryLength: ', searchQuery.length)

  return (
    <div className={classes.MainContainer}>
      {searchedData.length === 0 ? (
        <>
          <Search />
          {children}
        </>
      ) : (
        <>
          <Search />
          <SearchResults items={searchedData} searchQuery={searchQuery} />
        </>
      )}
    </div>
  )
}

export default MainContainer
