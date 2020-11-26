import React from 'react'

import { CartProvider } from './useCart'

export default function AppProvider ({ children }) {
  return <CartProvider>{children}</CartProvider>
}