import React, { useContext } from 'react'
import { EntAppContext } from '../context/EntAppProvider'

import classes from './MainContainer.module.css'
import Trending from './Trending'
import PopularMovies from './PopularMovies'
import PopularTvSeries from './PopularTvSeries'
import SearchResults from './SearchResults'

const MainContainer = () => {
  const { searchedData, searchQuery } = useContext(EntAppContext)

  return (
    <div className={classes.MainContainer}>
      {searchedData.length === 0 ? (
        <>
          <Trending />
          <PopularMovies />
          <PopularTvSeries />
        </>
      ) : (
        <SearchResults items={searchedData} searchQuery={searchQuery} />
      )}
    </div>
  )
}

export default MainContainer
