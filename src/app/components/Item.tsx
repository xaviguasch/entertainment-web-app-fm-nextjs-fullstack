import React from 'react'
import { useRouter } from 'next/navigation'

import classes from './Item.module.css'

import MovieCatIcon from './icons/MovieCatIcon'
import TvCatIcon from './icons/TvCatIcon'

const Item = ({ data }) => {
  const { title, category, year, rating, backgroundImg, id } = data

  const router = useRouter()

  const handleClick = () => {
    if (category === 'Movie') {
      router.push(`/movies/${id}`)
    }

    if (category === 'TV Series') {
      router.push(`/tv-series/${id}`)
    }
  }

  return (
    <div className={classes.Item} onClick={handleClick}>
      <div className={classes.ImgContainer}>
        <img src={backgroundImg} alt={title} />
      </div>

      <div className={classes.nuggets}>
        <span className='info'>{year}</span>
        <span className={classes.dot}>&#8226;</span>

        {category === 'Movie' && <MovieCatIcon />}
        {category === 'TV Series' && <TvCatIcon />}

        <span className='info'>{category}</span>
        <span className={classes.dot}>&#8226;</span>

        <span className='info'>{rating}</span>
      </div>
      <h3 className='title-tile-item'>{title}</h3>
    </div>
  )
}

export default Item
