'use client'

import React, { useState, useContext } from 'react'
import classes from './Search.module.css'

import { EntAppContext } from '../context/EntAppProvider'

const Search = () => {
  const [searchInput, setSearchInput] = useState('')

  const theme = useContext(EntAppContext)

  console.log(theme)

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
