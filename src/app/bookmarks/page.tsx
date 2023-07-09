'use client'

import React, { useContext } from 'react'
import { EntAppContext } from '../context/EntAppProvider'

import classes from './page.module.css'

const Bookmarks = () => {
  const { bookmarks, setBookmaks } = useContext(EntAppContext)

  return (
    <div className={classes.Bookmarked}>
      <h2>Bookmarks</h2>
      <p>{bookmarks[0].title}</p>
    </div>
  )
}

export default Bookmarks
