import PopularMovies from '../components/PopularMovies'

import MainContainer from '../components/MainContainer'

import classes from './page.module.css'

const MoviesPage = ({ params }) => {
  return (
    <div className={classes.MoviesPage}>
      <MainContainer>
        <PopularMovies />
      </MainContainer>
    </div>
  )
}

export default MoviesPage
