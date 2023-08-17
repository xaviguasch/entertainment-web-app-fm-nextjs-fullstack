import React from 'react'

// import React, { useContext, useEffect } from 'react'
// import { EntAppContext } from '../context/EntAppProvider'

import classes from './page.module.css'
import PopularTvSeries from '../components/PopularTvSeries'
// import SearchResults from '../components/SearchResults'
// import Search from '../components/Search'

import MainContainer from '../components/MainContainer'

const SeriesPage = ({ params }) => {
  // const { searchedData, searchQuery, setSearchQuery } = useContext(EntAppContext)

  // useEffect(() => {
  //   setSearchQuery([])
  // }, [])

  return (
    <div className={classes.SeriesPage}>
      <MainContainer>
        {/* {searchedData.length === 0 ? (
          <>
            <Search />
            <PopularTvSeries />
          </>
        ) : (
          <>
            <Search />
            <SearchResults items={searchedData} searchQuery={searchQuery} />
          </>
        )} */}

        <PopularTvSeries />
      </MainContainer>
    </div>
  )
}

export default SeriesPage
