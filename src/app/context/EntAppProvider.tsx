import { createContext, useContext, useState } from 'react'

export const EntAppContext = createContext()

function EntAppProvider({ children }) {
  const [cartItems, setCartItems] = useState(['la', 'li'])

  let entAppState = {
    cartItems,
    setCartItems,
  }

  return <EntAppContext.Provider value={entAppState}>{children}</EntAppContext.Provider>
}

export default EntAppProvider
