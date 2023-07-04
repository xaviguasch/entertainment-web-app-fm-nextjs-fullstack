'use client'

import React, { useState, useContext } from 'react'
import classes from './Search.module.css'

import { EntAppContext } from '../context/EntAppProvider'
import SearchIcon from './icons/SearchIcon'

const Search = () => {
  const { searchQuery, setSearchQuery } = useContext(EntAppContext)

  function searchInputHandler(e) {
    setSearchQuery(e.target.value)
  }

  return (
    <div className={classes.Search}>
      <label className={classes.label} htmlFor='searchInput'>
        <SearchIcon />
        <input
          type='text'
          id='searchInput'
          placeholder='Search for movies or TV series'
          value={searchQuery}
          onChange={searchInputHandler}
          className={classes.inputText}
        />
      </label>
    </div>
  )
}

export default Search
