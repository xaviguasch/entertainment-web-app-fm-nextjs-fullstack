'use client'

import React, { useState, useEffect } from 'react'
import classes from './PopularTvSeries.module.css'
import useFetchTrending from '../hooks/useFetchTrending'
import Item from './Item'

const PopularTvSeries = () => {
  const { data, isLoading } = useFetchTrending('tv')

  return (
    <div className={classes.PopularTvSeries}>
      <h2 className='section-title'>Popular TV Series</h2>
      {isLoading && <h2>Loading...</h2>}

      <div className={classes.popularCols}>
        {data.length > 0 &&
          data
            .map((item: object) => {
              return <Item key={item.id} data={...item} />
            })
            .slice(0, 12)}
      </div>
    </div>
  )
}

export default PopularTvSeries
