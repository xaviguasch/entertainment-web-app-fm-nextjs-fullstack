'use client'

import React from 'react'
import classes from './page.module.css'
import useFetchMovieData from '@/app/hooks/useFetchMovieData'

const MovieInfo = ({ params }) => {
  const { data, isLoading } = useFetchMovieData()

  return (
    <div className={classes.MovieInfo}>
      <h2>Movie Info</h2>
      <p>{params.movieId}</p>

      {data && <p>{data}</p>}
    </div>
  )
}

export default MovieInfo
