import React, { useContext } from 'react'
import { EntAppContext } from '../context/EntAppProvider'

import classes from './MainContainer.module.css'
import Search from './Search'
import Trending from './Trending'
import PopularMovies from './PopularMovies'
import PopularTvSeries from './PopularTvSeries'
import SearchResults from './SearchResults'

const MainContainer = () => {
  const { searchedData } = useContext(EntAppContext)

  return (
    <div className={classes.MainContainer}>
      <Search />
      {searchedData.length === 0 ? (
        <>
          <Trending />
          <PopularMovies />
          <PopularTvSeries />
        </>
      ) : (
        <SearchResults items={searchedData} />
      )}
    </div>
  )
}

export default MainContainer
