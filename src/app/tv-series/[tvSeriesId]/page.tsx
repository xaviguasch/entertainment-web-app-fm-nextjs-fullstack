'use client'

import React from 'react'
import classes from './page.module.css'
import useFetchItemData from '@/app/hooks/useFetchItemData'
import ItemInfo from '@/app/components/ItemInfo'

import { useRouter } from 'next/navigation'

const TVSeriesInfo = ({ params }) => {
  const { tvSeriesId } = params

  const router = useRouter()

  const { data, isLoading } = useFetchItemData(tvSeriesId, 'tvSeries')

  return (
    <div className={classes.TVSerieInfo}>
      <button type='button' onClick={() => router.push('/')}>
        Go Back
      </button>
      {isLoading && <h2>Loading...</h2>}

      {Object.keys(data).length !== 0 && (
        <>
          <ItemInfo data={data} />
        </>
      )}
    </div>
  )
}

export default TVSeriesInfo
