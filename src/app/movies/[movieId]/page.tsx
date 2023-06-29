'use client'

import React from 'react'

import { useRouter } from 'next/navigation'

import classes from './page.module.css'
import useFetchItemData from '@/app/hooks/useFetchItemData'
import Image from 'next/image'

const MovieInfo = ({ params }) => {
  const router = useRouter()

  console.log(params)
  const { movieId } = params

  const { data, isLoading } = useFetchItemData(movieId, 'movie')

  return (
    <div className={classes.MovieInfo}>
      <button type='button' onClick={() => router.push('/')}>
        Go Back
      </button>

      {isLoading && <h2>Loading...</h2>}

      {/* Checks if the fetched data is not an empty object */}
      {Object.keys(data).length !== 0 && (
        <>
          {/* change this to Image component */}
          <div className={classes.imgContainer}>
            <img src={data.poster} alt={data.title} className={classes.poster} />
            {/* <Image
              href={data.poster}
              fill={true}
              alt={data.title}
              className={classes.poster}
            /> */}
          </div>

          <div className={classes.infoCol}>
            <div className={classes.mainInfo}>
              <h2 className='item-title'>{data.title}</h2>
              <div className={classes.director}>
                <span className='director-credits'>Directed by</span>
                <span className='director-name'>{data.director}</span>
              </div>
              <span className='tagline'>{data.tagline}</span>
              <span className='votes'>{data.votes?.toFixed(1)}</span>
            </div>

            <div className={classes.secondaryInfo}>
              <div className={classes.pair}>
                <span className='info-tag'>Length</span>
                <span className='info-data'>{data.runtime}</span>
              </div>
              <div className={classes.pair}>
                <span className='info-tag'>Year</span>
                <span className='info-data'>{data.year}</span>
              </div>
              <div className={classes.pair}>
                <span className='info-tag'>Language</span>
                <span className='info-data'>{data.language?.toUpperCase()}</span>
              </div>
            </div>

            <div className={classes.tertiaryInfo}>
              <h3 className='section-title'>Genres</h3>
              <ul>
                {data.genres.map((genre) => {
                  return <li key={genre}>{genre}</li>
                })}
              </ul>
            </div>

            <div className={classes.tertiaryInfo}>
              <h3 className='section-title'>Synopsis</h3>
              <p className='text'>{data.synopsis}</p>
            </div>

            <div className={classes.tertiaryInfo}>
              <h3 className='section-title'>Cast</h3>
              <ul>
                {data.cast.map((actor) => {
                  return <li key={actor.id}>{actor.name}</li>
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default MovieInfo
