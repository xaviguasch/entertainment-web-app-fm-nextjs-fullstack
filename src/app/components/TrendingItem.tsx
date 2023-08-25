'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import classes from './TrendingItem.module.css'
import MovieCatIcon from './icons/MovieCatIcon'
import TvCatIcon from './icons/TvCatIcon'

import { TileProps } from '../types/Types.types'

const TrendingItem = (data: TileProps) => {
  const { title, category, year, rating, image, id } = data

  const router = useRouter()

  const handleClick = () => {
    if (category === 'movie') {
      router.push(`/movies/${id}`)
    }

    if (category === 'tv') {
      router.push(`/tv-series/${id}`)
    }
  }

  const styleBackground = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.75) 100%), url(https://image.tmdb.org/t/p/original${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    borderRadius: '8px',
  }

  return (
    <div className={classes.TrendingItem} style={styleBackground} onClick={handleClick}>
      <div className={classes.nuggets}>
        <span className='info'>
          {(year && year.slice(0, 4)) || (year && year.slice(0, 4))}
        </span>
        <span className={classes.dot}>&#8226;</span>

        {category === 'movie' && <MovieCatIcon />}
        {category === 'tv' && <TvCatIcon />}

        <span className='info'>{category}</span>
        <span className={classes.dot}>&#8226;</span>

        <span className='info'>{rating}</span>
      </div>
      <h3 className='trending-title'>{title}</h3>
    </div>
  )
}

export default TrendingItem
