import React, { useContext } from 'react'
import { EntAppContext } from '../context/EntAppProvider'

import classes from './MainContainer.module.css'
import Search from './Search'
import Trending from './Trending'
import PopularMovies from './PopularMovies'
import PopularTvSeries from './PopularTvSeries'

const MainContainer = () => {
  const contextData = useContext(EntAppContext)

  return (
    <div className={classes.MainContainer}>
      <Search />
      <Trending />
      <PopularMovies />
      <PopularTvSeries />
      {/* {contextData && <p>{contextData.searchQuery}</p>} */}
    </div>
  )
}

export default MainContainer
