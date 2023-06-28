'use client'

import React from 'react'
import classes from './page.module.css'
import useFetchItemData from '@/app/hooks/useFetchItemData'

const MovieInfo = ({ params }) => {
  console.log(params)
  const { movieId } = params

  const { data, isLoading } = useFetchItemData(movieId, 'movie')

  return (
    <div className={classes.MovieInfo}>
      {isLoading && <h2>Loading...</h2>}

      <h2>Movie Info</h2>
      <p>{params.movieId}</p>
    </div>
  )
}

export default MovieInfo
