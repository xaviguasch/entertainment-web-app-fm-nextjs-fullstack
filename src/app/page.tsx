'use client'

import { useContext } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

import MainContainer from './components/MainContainer'

import classes from './page.module.css'

// import { searchAPI } from '../../lib/tmdb'

// const result = searchAPI().then((res) => console.log(res))
// console.log('lalalal')

export default function Home() {
  return (
    <>
      <MainContainer />
    </>
  )
}
