import React from 'react'
import classes from './PopularMovies.module.css'
import Item from './Item'

import { MovieProps } from '../types/Types.types'

import { getMovies } from '../utils/fetchData'

export default async function PopularMovies() {
  const movies: MovieProps[] = await getMovies()

  return (
    <div className={classes.PopularMovies}>
      <h2 className='section-title'>Popular Movies</h2>

      <div className={classes.popularCols}>
        {movies
          .map((item: MovieProps) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.backdrop_path}
                year={+item.release_date.split('-')[0]}
                rating={+item.vote_average}
                category='movie'
              />
            )
          })
          .slice(0, 12)}
      </div>
    </div>
  )
}
