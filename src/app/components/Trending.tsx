'use client'

import React, { useState, useContext, useEffect } from 'react'
import classes from './Trending.module.css'
import { EntAppContext } from '../context/EntAppProvider'
import TrendingItem from './TrendingItem'

const Trending = () => {
  const [trendingItems, setTrendingItems] = useState([])

  const trendingContext = useContext(EntAppContext)

  useEffect(() => {
    const getData = async () => {
      const getTrendingContext = await trendingContext

      setTrendingItems(getTrendingContext.data.results.slice(0, 5))
    }

    getData()
  }, [trendingContext])

  return <div className={classes.Trending}></div>
}

export default Trending
