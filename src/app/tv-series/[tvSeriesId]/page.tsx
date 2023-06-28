'use client'

import React from 'react'
import classes from './page.module.css'
import useFetchItemData from '@/app/hooks/useFetchItemData'

const TVSeriesInfo = ({ params }) => {
  const { tvSeriesId } = params

  const { data, isLoading } = useFetchItemData(tvSeriesId, 'tvSeries')

  return (
    <div className={classes.MovieInfo}>
      {isLoading && <h2>Loading...</h2>}

      <h2>TV Series Info</h2>
      <p>{params.tvSeriesId}</p>
    </div>
  )
}

export default TVSeriesInfo
