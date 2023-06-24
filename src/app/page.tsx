'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Search from './components/Search'
import EntAppProvider from './context/EntAppProvider'
import Trending from './components/Trending'
import PopularMovies from './components/PopularMovies'

// import { searchAPI } from '../../lib/tmdb'

// const result = searchAPI().then((res) => console.log(res))
// console.log('lalalal')

export default function Home() {
  return (
    <>
      <EntAppProvider>
        <main>
          <Search />
          <Trending />
          <PopularMovies />
        </main>
      </EntAppProvider>
    </>
  )
}
