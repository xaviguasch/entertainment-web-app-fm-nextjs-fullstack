'use client'

import React, { useState, useContext, useEffect } from 'react'
import classes from './Trending.module.css'
import TrendingItem from './TrendingItem'

import useFetchData from '../hooks/useFetchData'

const Trending = () => {
  const { data, isLoading } = useFetchData()

  return (
    <div className={classes.Trending}>
      <h2>Trending</h2>
      {data.results?.map((movie) => {
        return <h3 key={movie.id}>{movie.original_title}</h3>
      })}
    </div>
  )
}

export default Trending
