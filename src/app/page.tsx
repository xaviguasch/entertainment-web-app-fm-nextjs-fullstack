import MainContainer from './components/MainContainer'
import PopularMovies from './components/PopularMovies'
import PopularTvSeries from './components/PopularTvSeries'
import Trending from './components/Trending'

export default async function Home() {
  return (
    <>
      <MainContainer>
        <Trending />
        <PopularMovies />
        {/* <PopularTvSeries /> */}
      </MainContainer>
    </>
  )
}
