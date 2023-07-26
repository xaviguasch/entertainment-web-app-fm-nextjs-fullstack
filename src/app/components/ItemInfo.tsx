import React from 'react'
import classes from './ItemInfo.module.css'

const ItemInfo = ({ data }) => {
  return (
    <div className={classes.itemInfo}>
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
          <ul className={classes.proList}>
            {data.genres.map((genre) => {
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
          <p className='text'>{data.synopsis}</p>
        </div>

        <div className={classes.tertiaryInfo}>
          <h3 className='section-title'>Cast</h3>
          <ul className={classes.proList}>
            {data.cast.map((actor) => {
              return (
                <li key={actor.id} className='info-pill'>
                  {actor.name}
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
