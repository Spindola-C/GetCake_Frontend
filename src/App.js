import React from 'react'

import Routes from './routes'
import CartProvider from './hooks/index'

function App () {
  return (
    <>
      <CartProvider>
        <Routes />
      </CartProvider>
    </>
  )
}

export default App
