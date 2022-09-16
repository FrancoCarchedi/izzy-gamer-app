import { useState } from "react";
import { CartContext } from "./CartContext"

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  //Console.log para visualizar carro en consola y hacer pruebas
  console.log(cart)

  /////////////////////////////////////////////////////////////////////////////
  //FUNCIONES
  const isInCart = (id) => cart.find(item => item.item.id === id) ? true : false

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
  }

  const clear = () => {
    setCart([])
  }


  return (
    <CartContext.Provider value={{addItem, removeItem, clear, cart, isInCart}}>
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider