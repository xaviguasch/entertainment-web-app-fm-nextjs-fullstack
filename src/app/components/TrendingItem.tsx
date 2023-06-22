import React from 'react'
import classes from './TrendingItem.module.css'

const TrendingItem = ({ data }) => {
  const { title, category, year, rating, backgroundImg } = data

  const styleBackground = {
    background: `url(${backgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  return (
    <div className={classes.TrendingItem} style={styleBackground}>
      <h3>{title}</h3>
      <span>{category}</span>
      <span>{year}</span>
      <span>{rating}</span>
    </div>
  )
}

export default TrendingItem
