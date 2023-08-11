'use client'

import React, { useContext, useEffect } from 'react'
import { EntAppContext } from '../context/EntAppProvider'

import PopularMovies from '../components/PopularMovies'
import SearchResults from '../components/SearchResults'
import Search from '../components/Search'

import classes from './page.module.css'

const MoviesPage = ({ params }) => {
  const { searchedData, searchQuery, setSearchQuery } = useContext(EntAppContext)

  useEffect(() => {
    setSearchQuery([])
  }, [])

  return (
    <div className={classes.MoviesPage}>
      {searchedData.length === 0 ? (
        <>
          <Search />
          <PopularMovies />
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

export default MoviesPage
