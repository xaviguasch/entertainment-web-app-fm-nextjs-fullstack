import Image from 'next/image'
import styles from './page.module.css'
import Search from './components/Search'

import { searchAPI } from '../../lib/tmdb'

const result = searchAPI().then((res) => console.log(res))
console.log('lalalal')

export default function Home() {
  return (
    <main>
      <Search />
    </main>
  )
}
