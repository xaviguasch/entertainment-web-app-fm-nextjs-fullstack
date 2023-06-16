'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Search from './components/Search'

// import { searchAPI } from '../../lib/tmdb'

// const result = searchAPI().then((res) => console.log(res))
// console.log('lalalal')
import EntAppProvider from '../app/context/EntAppProvider'

export default function Home() {
  return (
    <>
      <EntAppProvider>
        <main>
          <Search />
        </main>
      </EntAppProvider>
    </>
  )
}
