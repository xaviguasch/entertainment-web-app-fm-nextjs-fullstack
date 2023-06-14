import Image from 'next/image'
import styles from './page.module.css'
import Search from './components/Search'

export default function Home() {
  return (
    <main>
      <h1>Entertainment Web App</h1>
      <Search />
    </main>
  )
}
