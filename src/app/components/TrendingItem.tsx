import React from 'react'
import classes from './TrendingItem.module.css'
import MovieCatIcon from './icons/MovieCatIcon'
import TvCatIcon from './icons/TvCatIcon'

const TrendingItem = ({ data }) => {
  const { title, category, year, rating, backgroundImg } = data

  const styleBackground = {
    background: `url(${backgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    borderRadius: '8px',
  }

  return (
    <div className={classes.TrendingItem} style={styleBackground}>
      <div className={classes.nuggets}>
        <span className='info'>{year}</span>
        <span className={classes.dot}>&#8226;</span>

        {category === 'Movie' && <MovieCatIcon />}
        {category === 'TV Series' && <TvCatIcon />}

        <span className='info'>{category}</span>
        <span className={classes.dot}>&#8226;</span>

        <span className='info'>{rating}</span>
      </div>
      <h3 className='trending-title'>{title}</h3>
    </div>
  )
}

export default TrendingItem
