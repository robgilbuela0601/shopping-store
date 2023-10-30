import { Stack, Image, Container, Button } from "react-bootstrap"
import { ICartItem as ICartItemProps } from "../../global/interfaces/cart.interfaces"
import items from "../../data/items.json"
import Currency from "../../global/utils/Currency"
import useCart from "../../hooks/useShoppingCart"
function CartItem({ id, quantity }: ICartItemProps) {
  const { addCartQty, subtractCartQty, removeItemFromCart } = useCart()

  const item = items.find((item) => item.id === id)
  if (item == null) return

  return (
    quantity > 0 && (
      <>
        <Container
          style={{
            fontFamily: "Light 300",
            fontSize: ".7em",
            paddingBottom: "10px",
            borderBottom: "1px solid gray",
          }}
        >
          <Stack direction="horizontal" gap={3}>
            <Image
              src={item.imageUrl}
              style={{ objectFit: "cover", maxWidth: "80px" }}
              rounded
            />
            <Container>
              <Stack
                direction="horizontal"
                style={{ justifyContent: "space-between" }}
                gap={3}
              >
                <p style={{ fontWeight: "bold" }}>{item.productName}</p>
                <Button
                  onClick={() => {
                    removeItemFromCart(id)
                  }}
                  size="sm"
                  variant="outline-danger"
                  style={{ marginBottom: "15px", paddingBottom: "8px" }}
                >
                  x
                </Button>
              </Stack>
              <Stack
                direction="horizontal"
                style={{ justifyContent: "space-between" }}
                gap={3}
              >
                <p>
                  Price: <Currency price={item.unitPrice}></Currency>
                </p>
                <p>
                  Total: <Currency price={item.unitPrice * quantity}></Currency>
                </p>
              </Stack>
              <Stack
                direction="horizontal"
                style={{ display: "flex", justifyContent: "space-between" }}
                gap={3}
              >
                <Button
                  onClick={() => {
                    subtractCartQty(id)
                  }}
                  variant="secondary"
                >
                  -
                </Button>
                <p style={{ marginTop: "15px" }}>{quantity}</p>
                <Button
                  onClick={() => {
                    addCartQty(id)
                  }}
                  variant="secondary"
                >
                  +
                </Button>
              </Stack>
            </Container>
          </Stack>
        </Container>
      </>
    )
  )
}

export default CartItem
