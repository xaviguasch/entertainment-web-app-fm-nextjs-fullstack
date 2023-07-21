'use client'

import React, { useContext, useEffect } from 'react'
import { EntAppContext } from '../context/EntAppProvider'

import { useRouter } from 'next/navigation'

import classes from './Item.module.css'

import MovieCatIcon from './icons/MovieCatIcon'
import TvCatIcon from './icons/TvCatIcon'
import BookmarkIcon from './icons/BookmarkIcon'
import EmptyBookmarkIcon from './icons/EmpytBookmarkIcon'

// replace fallback image icon
const fallbackSrc = 'https://img.icons8.com/?size=512&id=Lm8LDO41sshR&format=png'

const Item = ({ data }) => {
  // PENDING: re-do the click on picture functionalitiy
  // now in "handleClick"
  const { bookmarks, setBookmarks } = useContext(EntAppContext)

  const { title, category, year, rating, backgroundImg, id } = data

  console.log(bookmarks, id)
  console.log(bookmarks[0] === id)
  const router = useRouter()

  const isBookmarked = bookmarks.some((bm) => bm.id === data.id)

  const handleClick = () => {
    if (category === 'Movie') {
      router.push(`/movies/${id}`)
    }

    if (category === 'TV Series') {
      router.push(`/tv-series/${id}`)
    }
  }

  // refactor function so it adds the whole object instead
  // of just the ID

  const handleBookmark = (e) => {
    if (isBookmarked) {
      setBookmarks((prev) => {
        return prev.filter((bm) => bm.id !== data.id)
      })
    } else {
      setBookmarks((prev) => [...prev, data])
    }
  }

  return (
    <div className={classes.Item} onClick={handleClick}>
      <div className={classes.ImgContainer}>
        <img
          src={backgroundImg}
          alt={title}
          onError={(e) => {
            e.target.onError = null
            e.target.src = fallbackSrc
          }}
        />
      </div>

      <div className={classes.bookmarkWrapper} onClick={handleBookmark}>
        <div className={classes.bmInnerWrapper}>
          {isBookmarked ? <BookmarkIcon classNameProp='mini' /> : <EmptyBookmarkIcon />}
        </div>
      </div>

      <div className={classes.nuggets}>
        <span className='info'>{year}</span>
        <span className={classes.dot}>&#8226;</span>

        {category === 'Movie' && <MovieCatIcon />}
        {category === 'TV Series' && <TvCatIcon />}

        <span className='info'>{category}</span>
        <span className={classes.dot}>&#8226;</span>

        <span className='info'>{rating}</span>
      </div>
      <h3 className='title-tile-item'>{title}</h3>
    </div>
  )
}

export default Item
