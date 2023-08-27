'use client'

import React, { useContext, useEffect } from 'react'
import { EntAppContext } from '../context/EntAppProvider'

import MainContainer from '../components/MainContainer'
import BookmarkedItems from '../components/BookmarkedItems'

import classes from './page.module.css'

const Bookmarks = () => {
  const { bookmarks, setSearchQuery, searchQuery, searchedData } =
    useContext(EntAppContext)

  console.log(bookmarks)

  useEffect(() => {
    // resets the search query on page load
    setSearchQuery('')
  }, [])

  return (
    <div className={classes.Bookmarks}>
      <MainContainer>
        <BookmarkedItems />
      </MainContainer>
    </div>
  )
}

export default Bookmarks
