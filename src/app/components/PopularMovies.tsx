'use client'

import React, { useState, useEffect } from 'react'
import classes from './PopularMovies.css'
import useFetchPopular from '../hooks/useFetchPopular'

const PopularMovies = () => {
  const { data, isLoading } = useFetchPopular()

  return (
    <div className={classes.PopularMovies}>
      <h2 className='section-title'>Popular Movies</h2>
      {isLoading && <h2>Loading...</h2>}
    </div>
  )
}

export default PopularMovies
