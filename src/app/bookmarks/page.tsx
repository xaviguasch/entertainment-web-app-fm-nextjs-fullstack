'use client'

import React, { useContext } from 'react'
import { EntAppContext } from '../context/EntAppProvider'

import Item from '../components/Item'

import { getItemData } from '../hooks/tmdb'

import classes from './page.module.css'

const Bookmarks = () => {
  const { bookmarks, setBookmaks } = useContext(EntAppContext)

  console.log(bookmarks)

  return (
    <div className={classes.Bookmarks}>
      <div className={classes.group}>
        <h2 className='section-title'>Bookmarked Movies</h2>

        <div className={classes.bookmarkCols}>
          {bookmarks.length > 0 &&
            bookmarks
              .filter((item: object) => {
                return item.category === 'Movie'
              })
              .map((item: object) => {
                return <Item key={item.id} data={...item} />
              })
              .slice(0, 12)}
        </div>
      </div>

      <div className={classes.group}>
        <h2 className='section-title'>Bookmarked Series</h2>

        <div className={classes.bookmarkCols}>
          {bookmarks.length > 0 &&
            bookmarks
              .filter((item: object) => {
                return item.category === 'TV Series'
              })
              .map((item: object) => {
                return <Item key={item.id} data={...item} />
              })
              .slice(0, 12)}
        </div>
      </div>
    </div>
  )
}

export default Bookmarks
