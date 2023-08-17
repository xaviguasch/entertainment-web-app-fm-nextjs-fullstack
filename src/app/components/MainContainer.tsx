'use client'

import React, { useContext, useEffect } from 'react'
import { EntAppContext } from '../context/EntAppProvider'

import classes from './MainContainer.module.css'

import SearchResults from './SearchResults'
import Search from './Search'

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const { searchedData, searchQuery, setSearchQuery } = useContext(EntAppContext)

  useEffect(() => {
    setSearchQuery([])
  }, [])

  console.log(searchedData.length)

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
