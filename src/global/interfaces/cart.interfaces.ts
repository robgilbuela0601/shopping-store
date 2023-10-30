export interface ICart {
  showCart: boolean
  handleCloseCart: () => void
  handleOpenCart: () => void

  removeItemFromCart: (id: string) => void
  addCartQty: (id: string) => void
  subtractCartQty: (id: string) => void
  getCartItemQty: () => number

  cartItem: ICartItem[]
  clearCart: () => void
  getTotalAmountOfCartItems: number
}

export interface ICartItem {
  id: string
  quantity: number
}
export type CartItem = {
  id: string
  quantity: number
}
