import { createContext, useEffect, useMemo, useState } from "react"
import { ICart, ICartItem } from "../global/interfaces/cart.interfaces"
import items from "../data/items.json"
import { usePersistentData } from "../hooks/usePersistentData"

// children: JSX.Element|JSX.Element[];
interface CartProviderProps {
  children: React.ReactElement | React.ReactElement[]
  action?: string
}
const Context = createContext<ICart | null>(null)

export function CartProvider({ children, action }: CartProviderProps) {
  const [cartItem, setCartItem] = usePersistentData<ICartItem[]>(
    "cart-items",
    [],
  )
  const [showCart, setShowCart] = useState<boolean>(false)

  useEffect(() => {
    if (value.getCartItemQty() <= 0) value.handleCloseCart()
  }, [cartItem])

  const value = useMemo(() => {
    const getTotalAmountOfCartItems = cartItem.reduce((total, currItem) => {
      const item = items.find((item) => item.id === currItem.id)
      return total + (item?.unitPrice || 0) * currItem.quantity
    }, 0)

    const clearCart = () => {
      setCartItem((prevItems) => {
        return []
      })
    }

    const removeItemFromCart = (id: string) => {
      setCartItem((prevItems) => {
        return prevItems.filter((item) => item.id !== id)
      })
    }
    const addCartQty = (id: string) => {
      setCartItem((prevItems) => {
        const isItemExists = prevItems.find((item) => item.id === id)
        return isItemExists
          ? prevItems.map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : { ...item },
            )
          : [{ id, quantity: 1 }, ...prevItems]
      })
    }
    const subtractCartQty = (id: string) => {
      setCartItem((prevItems) => {
        const isItemExists = prevItems.find((item) => item.id === id)
        console.log(isItemExists, "hevvvv")
        return isItemExists
          ? prevItems.map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : { ...item },
            )
          : [...prevItems]
      })

      if (getCartItemQty() <= 0) handleCloseCart()
    }
    const getCartItemQty = () => {
      return cartItem.reduce((totalQty, item) => totalQty + item.quantity, 0)
    }
    const handleCloseCart = () => setShowCart(false)
    const handleOpenCart = () => setShowCart(true)
    return {
      showCart,
      handleCloseCart,
      handleOpenCart,

      cartItem,
      getTotalAmountOfCartItems,
      removeItemFromCart,
      clearCart,
      addCartQty,
      subtractCartQty,
      getCartItemQty,
    }
  }, [cartItem, setCartItem, showCart])
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Context
