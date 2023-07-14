'use client'

import React, { useContext } from 'react'
import { EntAppContext } from '../context/EntAppProvider'

import { getItemData } from '../hooks/tmdb'

import classes from './page.module.css'

const Bookmarks = () => {
  const { bookmarks, setBookmaks } = useContext(EntAppContext)

  console.log(bookmarks)

  return (
    <div className={classes.Bookmarked}>
      <h2>Bookmarks</h2>
    </div>
  )
}

export default Bookmarks
