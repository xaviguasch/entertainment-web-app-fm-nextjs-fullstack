import React from 'react'
import classes from './Trending.module.css'
import TrendingItem from './TrendingItem'
import { getTrendingCat } from '../utils/fetchData'

import { ContentItemProps } from '../types/Types.types'

const Trending = async () => {
  const trendingTitles: ContentItemProps[] | undefined = await getTrendingCat('all')

  console.log('------------')
  console.log(trendingTitles)
  console.log('------------')

  if (!trendingTitles) {
    return null
  }

  return (
    <div className={classes.Trending}>
      <h2 className='section-title'>Trending</h2>

      <div className={classes.horizontal}>
        {trendingTitles.map((item: ContentItemProps) => {
          return <TrendingItem key={item.id} data={...item} />
        })}
      </div>
    </div>
  )
}

export default Trending
