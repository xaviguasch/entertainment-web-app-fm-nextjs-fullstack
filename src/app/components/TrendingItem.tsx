import React from 'react'
import classes from './TrendingItem.module.css'

const TrendingItem = ({ data }) => {
  return (
    <div className={classes.TrendingItem}>
      <h3>{data.title}</h3>
      <span>{data.year}</span>
    </div>
  )
}

export default TrendingItem
