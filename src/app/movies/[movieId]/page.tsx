import React from 'react'

import Link from 'next/link'

import classes from './page.module.css'
import useFetchItemData from '@/app/hooks/useFetchItemData'
import ItemInfo from '@/app/components/ItemInfo'
import { getMovieDetails } from '@/app/utils/fetchData'

export default async function MovieInfo({ params }) {
  const { movieId } = params

  const movDet = await getMovieDetails(movieId)

  console.log(movieDetails)

  return (
    <div className={classes.MovieInfo}>
      <Link href='/'>Go to homepage</Link>

      <h2>{movDet.title}</h2>

      {Object.keys(movDet).length !== 0 && (
        <>
          <ItemInfo poster={movDet.poster_path} title={movDet.title} />
        </>
      )}
    </div>
  )
}
