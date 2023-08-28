import React from 'react'

import classes from './PopularTvSeries.module.css'
import { ContentItemProps } from '../types/Types.types'
import { getShows } from '../utils/fetchData'

import Item from './Item'

export default async function PopularTvSeries() {
  // const series: ContentItemProps[] = await getShows()

  return (
    <div className={classes.PopularTvSeries}>
      <h2 className='section-title'>Popular TV Series</h2>

      {/* <div className={classes.popularCols}>
        {series
          .map((item: ContentItemProps) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                title={item.name}
                image={item.backdrop_path}
                year={+item.first_air_date.split('-')[0]}
                rating={+item.vote_average}
                category='tv'
              />
            )
          })
          .slice(0, 12)}
      </div> */}
    </div>
  )
}
