import React from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import AppDrawer from "./AppDrawer/AppDrawer"
import useCart from "../hooks/useShoppingCart"
import CheckoutModal from "../components/Modal/Modal"

function AppBar() {
  const { showCart, handleCloseCart, handleOpenCart, getCartItemQty } =
    useCart()
  // const [show, setShow] = useState(false)
  const [modalShow, setModalShow] = React.useState(false)

  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">Shopping Store</Navbar.Brand>
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavItem>
              <a href="#">Home</a>
            </NavItem>
            <NavItem>
              <a href="#">About</a>
            </NavItem>
          </Nav>
        </Navbar.Collapse> */}

        {/* Nav drawer toggle button */}
        {getCartItemQty() > 0 && (
          <Nav.Item>
            <Button
              className="rounded-circle border border-success"
              variant="outline-dark"
              onClick={handleOpenCart}
              style={{ position: "relative", width: "3rem", height: "3rem" }}
            >
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span
                style={{
                  position: "absolute",
                  color: "white",
                  width: "2em",
                  height: "1.5rem",
                  bottom: 0,
                  right: -8,
                }}
                className="badge bg-danger d-flex justify-content-center align-items-center rounded-circle"
              >
                {getCartItemQty()}
              </span>
            </Button>
            <AppDrawer
              isOpen={showCart}
              handleClose={handleCloseCart}
              placement="end"
              showModal={() => setModalShow(true)}
            ></AppDrawer>
          </Nav.Item>
        )}
        <CheckoutModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </Navbar>
  )
}
export default AppBar
