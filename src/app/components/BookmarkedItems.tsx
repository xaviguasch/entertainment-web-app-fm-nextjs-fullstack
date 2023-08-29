'use client'

import React, { useContext } from 'react'

import classes from './BookmarkedItems.module.css'
import Item from './Item'
import { EntAppContext } from '../context/EntAppProvider'

import { TileProps } from '../types/Types.types'

type BookmarkedItemsProps = {
  bookmarks: TileProps[]
}

const BookmarkedItems = () => {
  const { bookmarks }: BookmarkedItemsProps = useContext(EntAppContext)

  console.log(bookmarks)

  return (
    <div className={classes.BookmarkedItems}>
      <div className={classes.group}>
        <h2 className='section-title'>Bookmarked Movies</h2>

        <div className={classes.bookmarkCols}>
          {bookmarks &&
            bookmarks.length > 0 &&
            bookmarks
              .filter((item: TileProps) => {
                return item.category === 'movie'
              })
              .map((item: TileProps) => {
                return (
                  <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    year={item.year}
                    rating={+item.rating}
                    category='movie'
                  />
                )
              })
              .slice(0, 12)}
        </div>
      </div>

      <div className={classes.group}>
        <h2 className='section-title'>Bookmarked Series</h2>

        <div className={classes.bookmarkCols}>
          {bookmarks.length > 0 &&
            bookmarks
              .filter((item: TileProps) => {
                return item.category === 'tv'
              })
              .map((item: TileProps) => {
                return (
                  <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    year={+item.year}
                    rating={+item.rating}
                    category='tv'
                  />
                )
              })
              .slice(0, 12)}
        </div>
      </div>
    </div>
  )
}

export default BookmarkedItems
