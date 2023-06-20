'use client'

import React, { useState, useContext, useEffect } from 'react'
import classes from './Trending.module.css'
import TrendingItem from './TrendingItem'

import useSWR from 'swr'

const BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

const url = `${BASE_URL}/trending/all/day?api_key=${TMDB_API_KEY}`

async function fetcher(endpoint: string) {
  const response = await fetch(endpoint)
  const json = await response.json()

  console.log(json)

  return json
}

const Trending = () => {
  const { data, error, isLoading } = useSWR(url, fetcher)

  console.log(data, error)

  if (error) return <div>failed to load</div>

  if (isLoading) return <div>loading...</div>

  return (
    <div className={classes.Trending}>
      <h2>Trending</h2>
      {data.results?.map((movie) => {
        return <h3 key={movie.id}>{movie.original_title}</h3>
      })}
    </div>
  )
}

export default Trending
