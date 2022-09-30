import { useState } from "react";
import { CartContext } from "./CartContext"

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  /////////////////////////////////////////////////////////////////////////////
  //FUNCIONES

  //Funcion para verificar si un producto existe en el carrito
  const isInCart = (id) => cart.some(item => item.item.id === id)

  //Funcion para agregar un producto al carrito
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map (product => {
        return product.item.id === item.id? {...product, quantity: product.quantity + quantity} : product
      }));
    } else {
      setCart([...cart, { item, quantity }])
    }
  }

  //Funcion para remover un producto del carrito
  const removeItem = (itemId) => {
    setCart(cart.filter(product => product.item.id !== itemId))
    if (!cart) {
      setCart([])
    }
  }

  //Funcion para remover una cantidad de un producto del carrito
  const removeItemQuantity = (item, quantityToRemove) => {
    setCart(cart.map (product => {
      return product.item.id === item.id && product.quantity > 1? {...product, quantity: product.quantity -quantityToRemove} : product
    }))
  }

  //Funcion para limpiar el carrito
  const clear = () => {
    setCart([])
  }

  //Funcion para que CartWidget muestre la cantidad de productos agregados al carrito
  const itemsInCart = () => cart.map(item => item.quantity).reduce((itemA, itemB) => itemA + itemB, 0)

  const totalPrice = () => cart.map(product => product.item.price * product.quantity).reduce((itemA, itemB) => itemA + itemB, 0)


  return (
    <CartContext.Provider value={{isInCart, addItem, removeItem, clear, itemsInCart, removeItemQuantity, totalPrice, cart}}>
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider