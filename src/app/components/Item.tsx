'use client'

import { TileProps } from '../types/Types.types'

import React, { useContext, useEffect } from 'react'
import { EntAppContext } from '../context/EntAppProvider'

import Image from 'next/image'

import { useRouter } from 'next/navigation'

import classes from './Item.module.css'

import MovieCatIcon from './icons/MovieCatIcon'
import TvCatIcon from './icons/TvCatIcon'
import BookmarkIcon from './icons/BookmarkIcon'
import EmptyBookmarkIcon from './icons/EmpytBookmarkIcon'

// replace fallback image icon
const fallbackSrc = 'https://img.icons8.com/?size=512&id=Lm8LDO41sshR&format=png'

const Item = (tileObj: TileProps) => {
  // PENDING: re-do the click on picture functionalitiy
  // now in "handleClick"
  const { bookmarks, setBookmarks } = useContext(EntAppContext)

  // console.log(bookmarks, id)
  // console.log(bookmarks[0] === id)
  const router = useRouter()

  const { title, image, year, rating, category, id } = tileObj

  const isBookmarked = bookmarks.some((bm) => bm.id === id)

  const handleClick = () => {
    if (category === 'movie') {
      router.push(`/movies/${id}`)
    }

    if (category === 'tv') {
      router.push(`/tv-series/${id}`)
    }
  }

  // refactor function so it adds the whole object instead
  // of just the ID

  const handleBookmark = (e) => {
    e.stopPropagation()

    if (isBookmarked) {
      setBookmarks((prev) => {
        return prev.filter((bm) => bm.id !== id)
      })
    } else {
      setBookmarks((prev) => [...prev, tileObj])
    }
  }

  return (
    <div className={classes.Item} onClick={handleClick}>
      <div
        className={classes.ImgContainer}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${image})`,
          backgroundSize: 'cover',
        }}
      ></div>

      <div className={classes.bookmarkWrapper} onClick={handleBookmark}>
        <div className={classes.bmInnerWrapper}>
          {isBookmarked ? <BookmarkIcon classNameProp='mini' /> : <EmptyBookmarkIcon />}
        </div>
      </div>

      <div className={classes.nuggets}>
        <span className='info'>{year}</span>
        <span className={classes.dot}>&#8226;</span>

        {category === 'movie' && <MovieCatIcon />}
        {category === 'tv' && <TvCatIcon />}

        <span className='info'>{category === 'movie' ? 'Movie' : 'TV Series'}</span>
        <span className={classes.dot}>&#8226;</span>

        <span className='info'>{Math.round(10 * rating) / 10}</span>
      </div>
      <h3 className='title-tile-item'>{title}</h3>
    </div>
  )
}

export default Item
