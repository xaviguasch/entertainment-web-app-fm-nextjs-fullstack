'use client'

import React from 'react'

import { useRouter } from 'next/navigation'

import classes from './page.module.css'
import useFetchItemData from '@/app/hooks/useFetchItemData'
import Image from 'next/image'

const MovieInfo = ({ params }) => {
  const router = useRouter()

  console.log(params)
  const { movieId } = params

  const { data, isLoading } = useFetchItemData(movieId, 'movie')

  return (
    <div className={classes.MovieInfo}>
      <button type='button' onClick={() => router.push('/')}>
        Dashboard
      </button>

      {isLoading && <h2>Loading...</h2>}

      {data && (
        <>
          {/* change this to Image component */}
          <div className={classes.imgContainer}>
            <img src={data.poster} alt={data.title} className={classes.poster} />
            {/* <Image
              href={data.poster}
              fill={true}
              alt={data.title}
              className={classes.poster}
            /> */}
          </div>

          <div className={classes.mainInfo}>
            <h2 className='item-title'>{data.title}</h2>
            <span className='tagline'>{data.tagline}</span>
            <span className='votes'>{data.votes?.toFixed(1)}</span>
          </div>

          <div>
            <span>length</span>
            <span>{data.runtime}</span>
          </div>
        </>
      )}
    </div>
  )
}

export default MovieInfo
