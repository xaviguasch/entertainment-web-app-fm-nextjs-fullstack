'use client'

import React, { useState } from 'react'
import classes from './SearchResults.module.css'
import TrendingItem from './TrendingItem'

const SearchResults = ({ items }) => {
  return (
    <div>
      <div className={classes.horizontal}>
        {items.length > 0 &&
          items.map((item: object) => {
            return <TrendingItem key={item.id} data={...item} />
          })}
      </div>
    </div>
  )
}

export default SearchResults
