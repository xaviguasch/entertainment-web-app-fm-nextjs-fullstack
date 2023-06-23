'use client'

import React, { useState, useContext, useEffect } from 'react'
import classes from './Trending.module.css'
import TrendingItem from './TrendingItem'

import useFetchData from '../hooks/useFetchData'

const Trending = () => {
  const { data, isLoading } = useFetchData()

  return (
    <div className={classes.Trending}>
      <h2 className='section-title'>Trending</h2>
      {isLoading && <h2>Loading...</h2>}

      <div className={classes.horizontal}>
        {data.length > 0 &&
          data.map((item: object) => {
            return <TrendingItem key={item.id} data={...item} />
          })}
      </div>
    </div>
  )
}

export default Trending
