import React from 'react'

import Link from 'next/link'

import classes from './page.module.css'
import useFetchItemData from '@/app/hooks/useFetchItemData'
import ItemInfo from '@/app/components/ItemInfo'
import { getMovieDetails } from '@/app/utils/fetchData'

import { MovieDetailProps } from '@/app/types/Types.types'

export default async function MovieInfo({ params }) {
  const { movieId } = params

  const movDet: MovieDetailProps = await getMovieDetails(movieId)

  return (
    <div className={classes.MovieInfo}>
      <Link href='/'>Go to homepage</Link>

      {Object.keys(movDet).length !== 0 && (
        <>
          <ItemInfo movieDetails={movDet} />
        </>
      )}
    </div>
  )
}
