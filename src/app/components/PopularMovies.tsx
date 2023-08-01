'use client'

import React, { useState, useEffect } from 'react'
import classes from './PopularMovies.module.css'
import useFetchPopular from '../hooks/useFetchPopular'
import Item from './Item'

import { usePathname } from 'next/navigation'

const PopularMovies = () => {
  const { data, isLoading } = useFetchPopular('movie')
  // console.log(data)

  const tab = usePathname().substring(1)
  let title = ''

  if (tab === '') {
    title = 'Popular Movies'
  } else if (tab === 'movies') {
    title = 'Movies'
  }

  return (
    <div className={classes.PopularMovies}>
      <h2 className='section-title'>{title}</h2>
      {isLoading && <h2>Loading...</h2>}

      <div className={classes.popularCols}>
        {data.length > 0 &&
          data
            .map((item: object) => {
              return <Item key={item.id} data={...item} />
            })
            .slice(0, 12)}
      </div>
    </div>
  )
}

export default PopularMovies
