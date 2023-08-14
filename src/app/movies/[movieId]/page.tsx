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

  console.log(movDet)

  return (
    <div className={classes.MovieInfo}>
      <Link href='/'>Go to homepage</Link>

      {Object.keys(movDet).length !== 0 && (
        <>
          <ItemInfo
            id={movDet.id}
            tagline={movDet.tagline}
            vote_average={movDet.vote_average}
            runtime={movDet.runtime}
            release_date={movDet.release_date}
            spoken_languages={movDet.spoken_languages}
            genres={movDet.genres}
            overview={movDet.overview}
            poster_path={movDet.poster_path}
            title={movDet.title}
          />
        </>
      )}
    </div>
  )
}
