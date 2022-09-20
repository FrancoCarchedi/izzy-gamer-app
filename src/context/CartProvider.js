import { useState } from "react";
import { CartContext } from "./CartContext"

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  //Console.log para visualizar carro en consola y hacer pruebas
  console.log(cart)

  /////////////////////////////////////////////////////////////////////////////
  //FUNCIONES
  const isInCart = (id) => cart.some(item => item.item.id === id)

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map (product => {
        return product.item.id === item.id? {...product, quantity: product.quantity + quantity} : product
      }));
    } else {
      setCart([...cart, { item, quantity }])
    }
  }

  const removeItem = (itemId) => {
    setCart(cart.filter(product => product.item.id !== itemId))
    if (!cart) {
      setCart([])
    }
  }

  const clear = () => {
    setCart([])
  }

  const itemsInCart = () => cart.map(item => item.quantity).reduce((itemA, itemB) => itemA + itemB, 0)


  return (
    <CartContext.Provider value={{isInCart, addItem, removeItem, clear, itemsInCart,cart}}>
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider