import classes from './SearchResults.module.css'
import Item from './Item'

import { SearchTitleProps } from '../types/Types.types'

interface SRes {
  items: SearchTitleProps[]
  searchQuery: string
}

const SearchResults = ({ items, searchQuery }: SRes) => {
  console.log('items: ', items)
  console.log('searchQuery: ', searchQuery)

  return (
    <div className={classes.SearchResults}>
      <h2 className='section-title'>
        Found {items.length} results for {searchQuery}
      </h2>

      <div className={classes.resultCols}>
        {items.length > 0 &&
          items.map((item: SearchTitleProps) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                title={item.title || item.original_name}
                image={item.image || item.backdrop_path || item.poster_path}
                year={
                  item.year ||
                  Number(item.release_date?.split('-')[0]) ||
                  Number(item.first_air_date?.split('-')[0]) ||
                  'N/A'
                }
                rating={item.rating || +item.vote_average || 'N/A'}
                category={
                  item.release_date ? 'movie' : item.first_air_date ? 'tv' : 'N/A'
                }
              />
            )
          })}
      </div>
    </div>
  )
}

export default SearchResults
