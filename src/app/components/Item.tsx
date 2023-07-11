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
  const { bookmarks, setBookmarks } = useContext(EntAppContext)

  const { title, category, year, rating, backgroundImg, id } = data

  console.log(bookmarks, id)
  console.log(bookmarks[0] === id)
  const router = useRouter()

  const isBookmarked = bookmarks.includes(id)

  console.log(isBookmarked)

  const handleClick = () => {
    if (category === 'Movie') {
      router.push(`/movies/${id}`)
    }

    if (category === 'TV Series') {
      router.push(`/tv-series/${id}`)
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
      {isBookmarked ? <BookmarkIcon /> : <EmptyBookmarkIcon />}

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
