'use client'

import React from 'react'

import { usePathname } from 'next/navigation'

import Link from 'next/link'
import Image from 'next/image'

import BookmarkIcon from '../components/icons/BookmarkIcon'
import HomeIcon from '../components/icons/HomeIcon'
import MoviesIcon from './icons/MoviesIcon'
import TvSeriesIcon from './icons/TvSeriesIcon'
import LogoIcon from './icons/LogoIcon'

import classes from './Navbar.module.css'

// unable to change SVG fill via CSS currently

const Navbar = () => {
  const currentRoute = usePathname()

  return (
    <div className={classes.Navbar}>
      <Link href='/'>
        <LogoIcon />
      </Link>

      <nav className={classes.nav}>
        <Link href='/'>
          <HomeIcon classNameProp={`${currentRoute === '/' ? 'activeIcon' : null}`} />
        </Link>
        <Link href='/movies'>
          <MoviesIcon
            classNameProp={`${currentRoute === '/movies' ? 'activeIcon' : null}`}
          />
        </Link>
        <Link href='/tv-series'>
          <TvSeriesIcon
            classNameProp={`${currentRoute === '/tv-series' ? 'activeIcon' : null}`}
          />
        </Link>

        <Link href='/bookmarks'>
          <BookmarkIcon
            classNameProp={`${currentRoute === '/bookmarks' ? 'activeIcon' : null}`}
          />
        </Link>
      </nav>

      <Link href='/login'>
        <Image
          className={classes.avatar}
          priority
          src='/images/image-avatar.png'
          alt='user avatar'
          width={24}
          height={24}
        />
      </Link>
    </div>
  )
}

export default Navbar
