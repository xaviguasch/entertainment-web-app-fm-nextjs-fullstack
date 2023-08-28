import React from 'react'

import classes from './page.module.css'
import PopularTvSeries from '../components/PopularTvSeries'

import MainContainer from '../components/MainContainer'

const SeriesPage = ({}) => {
  return (
    <div className={classes.SeriesPage}>
      <MainContainer>
        <PopularTvSeries />
      </MainContainer>
    </div>
  )
}

export default SeriesPage
