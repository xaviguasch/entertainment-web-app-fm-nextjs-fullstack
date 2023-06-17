import { createContext, useContext, useState, useEffect } from 'react'

import { searchAPI } from '../../../lib/tmdb'

export const EntAppContext = createContext()

function EntAppProvider({ children }) {
  const [cartItems, setCartItems] = useState(['la', 'li'])
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await searchAPI()
        console.log('hola')
        console.log(fetchedData)
        setData(fetchedData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  let entAppState = {
    cartItems,
    setCartItems,
    data,
  }

  return <EntAppContext.Provider value={entAppState}>{children}</EntAppContext.Provider>
}

export default EntAppProvider
