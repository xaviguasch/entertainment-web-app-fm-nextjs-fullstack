'use client'

import React from 'react'

import { usePathname } from 'next/navigation'

import Link from 'next/link'
import Image from 'next/image'

import classes from './Navbar.module.css'

// unable to change SVG fill via CSS currently

const Navbar = () => {
  const currentRoute = usePathname()

  return (
    <div className={classes.Navbar}>
      <Link href='/'>
        <Image priority src='/images/logo.svg' alt='logo icon' width={25} height={20} />
      </Link>

      <nav className={classes.nav}>
        <Link href='/'>
          <Image
            className={`${currentRoute === '/' ? classes.activeIcon : null}`}
            priority
            src='/images/icon-nav-home.svg'
            alt='home icon'
            width={16}
            height={16}
          />
        </Link>
        <Link href='/movies'>
          <Image
            priority
            src='/images/icon-nav-movies.svg'
            alt='movies icon'
            width={16}
            height={16}
          />
        </Link>
        <Link href='/tvseries'>
          <Image
            priority
            src='/images/icon-nav-tv-series.svg'
            alt='movies icon'
            width={16}
            height={16}
          />
        </Link>
        <Link href='/bookmarks'>
          <Image
            priority
            src='/images/icon-nav-bookmark.svg'
            alt='movies icon'
            width={16}
            height={16}
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
