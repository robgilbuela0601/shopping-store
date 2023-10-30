import React from "react"
import { Button, Offcanvas, Stack } from "react-bootstrap"
import useCart from "../../hooks/useShoppingCart"
import CartItem from "../Item/CartItem"
import { OffcanvasPlacement } from "react-bootstrap/esm/Offcanvas"
import Currency from "../../global/utils/Currency"

interface IProps {
  placement: OffcanvasPlacement
  isOpen: boolean
  handleClose(): void
  showModal(): void
}

function AppDrawer({ showModal, ...props }: IProps) {
  const {
    cartItem,
    getTotalAmountOfCartItems,
    clearCart,
    handleCloseCart,
    getCartItemQty,
  } = useCart()

  return (
    <>
      <Offcanvas show={props.isOpen} onHide={props.handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItem.filter((item) => item.quantity !== 0).length > 0 ? (
            <>
              {" "}
              <Stack gap={2}>
                <Button
                  className="ms-auto"
                  variant="danger"
                  onClick={() => {
                    handleCloseCart()
                    clearCart()
                  }}
                >
                  Clear Cart
                </Button>
                {cartItem.filter((item) => item.quantity !== 0).length > 0
                  ? cartItem.map((item) => (
                      <CartItem key={item.id} {...item}></CartItem>
                    ))
                  : "No cart items"}
                <h6 className="ms-auto">
                  Total Item Quantity: {getCartItemQty()}
                </h6>
                <h5 className="ms-auto">
                  Total: <Currency price={getTotalAmountOfCartItems}></Currency>
                </h5>
              </Stack>
              <Button
                variant="success"
                onClick={() => {
                  showModal()
                  handleCloseCart()
                  clearCart()
                }}
              >
                Checkout
              </Button>
            </>
          ) : (
            "No items in cart"
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default AppDrawer
