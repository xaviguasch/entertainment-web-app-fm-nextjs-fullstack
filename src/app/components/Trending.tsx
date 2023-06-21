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
      {data?.map((item: object) => (
        <TrendingItem key={item.id} data={...item} />
      ))}
    </div>
  )
}

export default Trending
