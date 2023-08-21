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
      {/* {searchedData.length === 0 ? (
        <>
          <Search />
          <div className={classes.group}>
            <h2 className='section-title'>Bookmarked Movies</h2>

            <div className={classes.bookmarkCols}>
              {bookmarks &&
                bookmarks.length > 0 &&
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
        </>
      ) : (
        <>
          <Search />
          <SearchResults items={searchedData} searchQuery={searchQuery} />
        </>
      )} */}
    </div>
  )
}

export default Bookmarks
