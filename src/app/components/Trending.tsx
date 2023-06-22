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
      {isLoading && <h2>Loading...</h2>}
      {data.length > 0 &&
        data.map((item: object) => <TrendingItem key={item.id} data={...item} />)}
    </div>
  )
}

export default Trending
