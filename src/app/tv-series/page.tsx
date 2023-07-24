'use client'

import React, { useContext, useEffect } from 'react'
import classes from './page.module.css'
import { EntAppContext } from '../context/EntAppProvider'
import PopularTvSeries from '../components/PopularTvSeries'
import SearchResults from '../components/SearchResults'
import Search from '../components/Search'

const SeriesPage = () => {
  const { searchedData, searchQuery, setSearchQuery } = useContext(EntAppContext)

  useEffect(() => {
    setSearchQuery([])
  }, [])

  return (
    <div className={classes.SeriesPage}>
      {searchedData.length === 0 ? (
        <>
          <Search />
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

export default SeriesPage
