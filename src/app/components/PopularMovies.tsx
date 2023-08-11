import React from 'react'
import classes from './PopularMovies.module.css'
import Item from './Item'

import { MovieProps } from '../types/Types.types'

import { getMovies } from '../utils/fetchData'

// import { usePathname } from 'next/navigation'

export default async function PopularMovies() {
  const movies: MovieProps[] = await getMovies()

  // const tab = usePathname().substring(1)
  let title = ''

  // if (tab === '') {
  //   title = 'Popular Movies'
  // } else if (tab === 'movies') {
  //   title = 'Movies'
  // }

  return (
    <div className={classes.PopularMovies}>
      <h2 className='section-title'>Popular Movies</h2>

      <div className={classes.popularCols}>
        {movies
          .map((item: object) => {
            return <Item key={item.id} data={...item} />
          })
          .slice(0, 12)}
      </div>
    </div>
  )
}
