import React from 'react'

import Link from 'next/link'

import classes from './page.module.css'
import ItemInfo from '@/app/components/ItemInfo'

import { getItemDetails } from '@/app/utils/fetchData'

import { ContentDetailProps } from '@/app/types/Types.types'

import ArrowLeftIcon from '@/app/components/icons/ArrowLeft'

interface TVSeriesInfoProps {
  params: { seriesId: string }
}

export default async function TVSeriesInfo({ params }: TVSeriesInfoProps) {
  console.log(params)

  const { tvSeriesId } = params

  const tvSeriesDet: ContentDetailProps = await getItemDetails(tvSeriesId, 'tv')

  console.log(tvSeriesDet)

  return (
    <div className={classes.TVSerieInfo}>
      <div className={classes.iconLinkContainer}>
        <Link href='/'>
          <ArrowLeftIcon />
        </Link>
      </div>

      {Object.keys(tvSeriesDet).length !== 0 && (
        <>
          <ItemInfo itemDetails={tvSeriesDet} />
        </>
      )}
    </div>
  )
}
