'use client'

import React, { useState, useEffect } from 'react'
import classes from './PopularMovies.module.css'
import useFetchPopular from '../hooks/useFetchPopular'
import Item from './Item'

const PopularMovies = () => {
  const { data, isLoading } = useFetchPopular()

  return (
    <div className={classes.PopularMovies}>
      <h2 className='section-title'>Popular Movies</h2>
      {isLoading && <h2>Loading...</h2>}

      <div className={classes.popularCols}>
        {data.length > 0 &&
          data.map((item: object) => {
            return <Item key={item.id} data={...item} />
          })}
      </div>
    </div>
  )
}

export default PopularMovies
