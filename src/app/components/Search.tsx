'use client'

import React, { useState } from 'react'
import classes from './Search.module.css'

const Search = () => {
  const [searchInput, setSearchInput] = useState('')

  function searchInputHandler(e) {
    setSearchInput(e.target.value)
  }

  return (
    <div>
      <form action=''>
        <label htmlFor='searchInput'></label>
        <input
          type='text'
          id='searchInput'
          value={searchInput}
          onChange={searchInputHandler}
        />
      </form>
    </div>
  )
}

export default Search
