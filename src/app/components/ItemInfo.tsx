import React from 'react'
import classes from './ItemInfo.module.css'

import Image from 'next/image'

import { MovieProps, TVShowProps, MovieDetailProps } from '../types/Types.types'

interface MDProps {
  movieDetails: MovieDetailProps
}

const ItemInfo = ({ movieDetails }: MDProps) => {
  const {
    id,
    title,
    tagline,
    vote_average,
    runtime,
    release_date,
    spoken_languages,
    genres,
    overview,
    poster_path,
    cast,
    director,
  } = movieDetails

  return (
    <div className={classes.itemInfo}>
      <div
        className={classes.imgContainer}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
        }}
      ></div>

      <div className={classes.infoCol}>
        <div className={classes.mainInfo}>
          <h2 className='item-title'>{title}</h2>
          <div className={classes.director}>
            <span className='director-credits'>Directed by</span>
            {/* <span className='director-name'>{data.director}</span> */}
          </div>
          <span className='tagline'>{tagline}</span>
          <span className='votes'>{vote_average?.toFixed(1)}</span>
        </div>

        <div className={classes.secondaryInfo}>
          <div className={classes.pair}>
            <span className='info-tag'>Length</span>
            <span className='info-data'>{runtime + 'min' || 'N/A'}</span>
          </div>
          <div className={classes.pair}>
            <span className='info-tag'>Year</span>
            <span className='info-data'>{release_date}</span>
          </div>
          <div className={classes.pair}>
            <span className='info-tag'>Language</span>
            <span className='info-data'>{spoken_languages?.toUpperCase()}</span>
          </div>
        </div>

        <div className={classes.tertiaryInfo}>
          <h3 className='section-title'>Genres</h3>
          <ul className={classes.proList}>
            {genres.map((genre) => {
              return (
                <li key={genre} className='info-pill'>
                  {genre}
                </li>
              )
            })}
          </ul>
        </div>

        <div className={classes.tertiaryInfo}>
          <h3 className='section-title'>Synopsis</h3>
          <p className='text'>{overview}</p>
        </div>

        <div className={classes.tertiaryInfo}>
          <h3 className='section-title'>Cast</h3>
          <ul className={classes.proList}>
            {cast.map((actor) => {
              return (
                <li key={actor.id} className='info-pill'>
                  {actor}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ItemInfo
