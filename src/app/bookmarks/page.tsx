import MainContainer from '../components/MainContainer'
import BookmarkedItems from '../components/BookmarkedItems'

import classes from './page.module.css'

const Bookmarks = () => {
  return (
    <div className={classes.Bookmarks}>
      <MainContainer>
        <BookmarkedItems />
      </MainContainer>
    </div>
  )
}

export default Bookmarks
