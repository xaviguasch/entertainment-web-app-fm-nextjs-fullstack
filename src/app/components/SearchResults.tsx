'use client'

import React, { useState } from 'react'
import classes from './SearchResults.module.css'
import Item from './Item'

const SearchResults = ({ items, searchQuery }) => {
  return (
    <div className={classes.SearchResults}>
      <h2 className='section-title'>
        Found {items.length} results for '{searchQuery}'
      </h2>

      <div className={classes.resultCols}>
        {items.length > 0 &&
          items.map((item: object) => {
            return <Item key={item.id} data={...item} />
          })}
      </div>
    </div>
  )
}

export default SearchResults
