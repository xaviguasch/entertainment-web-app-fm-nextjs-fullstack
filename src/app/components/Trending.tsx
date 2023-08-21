// 'use client'

import React from 'react'
import classes from './Trending.module.css'
import TrendingItem from './TrendingItem'
import { getTrendingCat } from '../utils/fetchData'

// import useFetchTrending from '../hooks/useFetchTrending'

const Trending = async () => {
  // const { data, isLoading } = useFetchTrending('all')

  const trendingTitles = await getTrendingCat('all')

  console.log('------------')
  console.log(trendingTitles)
  console.log('------------')

  return (
    <div className={classes.Trending}>
      <h2 className='section-title'>Trending</h2>

      <div className={classes.horizontal}>
        {trendingTitles.map((item: object) => {
          return <TrendingItem key={item.id} data={...item} />
        })}
      </div>
    </div>
  )
}

export default Trending
