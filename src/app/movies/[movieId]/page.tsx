'use client'

import React from 'react'

import { useRouter } from 'next/navigation'

import classes from './page.module.css'
import useFetchItemData from '@/app/hooks/useFetchItemData'
import Image from 'next/image'
import ItemInfo from '@/app/components/ItemInfo'

const MovieInfo = ({ params }) => {
  const router = useRouter()

  console.log(params)
  const { movieId } = params

  const { data, isLoading } = useFetchItemData(movieId, 'movie')

  return (
    <div className={classes.MovieInfo}>
      <button type='button' onClick={() => router.push('/')}>
        Go Back
      </button>

      {isLoading && <h2>Loading...</h2>}

      {/* Checks if the fetched data is not an empty object */}
      {Object.keys(data).length !== 0 && (
        <>
          <ItemInfo data={data} />
        </>
      )}
    </div>
  )
}

export default MovieInfo
