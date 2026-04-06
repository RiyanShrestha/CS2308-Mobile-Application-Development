import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([])

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  // Remove item from cart
  const removeFromCart = (index) => {
    setCartItems((prevItems) =>
      prevItems.filter((item, i) => i !== index)
    )
  }

  // Clear entire cart
  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}