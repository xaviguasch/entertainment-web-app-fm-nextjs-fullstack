'use client'

import React, { useContext, useEffect } from 'react'
import { EntAppContext } from '../context/EntAppProvider'

import classes from './MainContainer.module.css'
import Trending from './Trending'
import PopularMovies from './PopularMovies'
import PopularTvSeries from './PopularTvSeries'
import SearchResults from './SearchResults'
import Search from './Search'

const MainContainer = () => {
  const { searchedData, searchQuery, setSearchQuery } = useContext(EntAppContext)

  useEffect(() => {
    setSearchQuery([])
  }, [])

  return (
    <div className={classes.MainContainer}>
      {searchedData.length === 0 ? (
        <>
          <Search />
          <Trending />
          <PopularMovies />
          <PopularTvSeries />
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
