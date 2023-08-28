'use client'

import React, { useState, useContext } from 'react'
import classes from './Search.module.css'

import { usePathname } from 'next/navigation'

import { EntAppContext } from '../context/EntAppProvider'
import SearchIcon from './icons/SearchIcon'

const Search = () => {
  const { searchQuery, setSearchQuery } = useContext(EntAppContext)

  const tab = usePathname().substring(1)
  let placeholderText = ''

  if (tab === '') {
    placeholderText = 'Search for movies or TV series'
  } else if (tab === 'bookmarks') {
    placeholderText = 'Search for bookmarked movies and shows'
  } else if (tab === 'movies') {
    placeholderText = 'Search for movies'
  } else if (tab === 'tv-series') {
    placeholderText = 'Search for TV series'
  }

  function searchInputHandler(e: any) {
    // add functionality that changes the searched items
    // depending on the page you're in

    setSearchQuery(e.target.value)
  }

  return (
    <div className={classes.Search}>
      <label className={classes.label} htmlFor='searchInput'>
        <SearchIcon />
        <input
          type='text'
          id='searchInput'
          placeholder={placeholderText}
          value={searchQuery}
          onChange={searchInputHandler}
          className={classes.inputText}
        />
      </label>
    </div>
  )
}

export default Search
