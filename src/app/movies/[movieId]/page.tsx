import React from 'react'

import Link from 'next/link'

import classes from './page.module.css'
import ItemInfo from '@/app/components/ItemInfo'
import { getItemDetails } from '@/app/utils/fetchData'

import { ContentDetailProps } from '@/app/types/Types.types'

import ArrowLeftIcon from '@/app/components/icons/ArrowLeft'

interface MovieInfoProps {
  params: { movieId: string }
}

export default async function MovieInfo({ params }: MovieInfoProps) {
  const { movieId } = params

  const movDet: ContentDetailProps = await getItemDetails(movieId, 'movie')

  return (
    <div className={classes.MovieInfo}>
      <div className={classes.iconLinkContainer}>
        <Link href='/'>
          <ArrowLeftIcon />
        </Link>
      </div>

      {Object.keys(movDet).length !== 0 && (
        <>
          <ItemInfo itemDetails={movDet} />
        </>
      )}
    </div>
  )
}
