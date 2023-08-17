import classes from './SearchResults.module.css'
import Item from './Item'

import { TitleProps } from '../types/Types.types'

const SearchResults = ({ items, searchQuery }) => {
  console.log('items: ', items)
  console.log('searchQuery: ', searchQuery)

  return (
    <div className={classes.SearchResults}>
      <h2 className='section-title'>
        Found {items.length} results for {searchQuery}
      </h2>

      <div className={classes.resultCols}>
        {items.length > 0 &&
          items.map((item: TitleProps) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                title={item.title || item.original_name}
                image={item.backdrop_path}
                year={
                  +item.release_date?.split('-')[0] || +item.first_air_date?.split('-')[0]
                }
                rating={+item.vote_average}
                category={item.media_type}
              />
            )
          })}
      </div>
    </div>
  )
}

export default SearchResults
