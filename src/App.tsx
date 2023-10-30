// import logo from "./logo.svg"
// import { Counter } from "./features/counter/Counter"
import { Col, Container, Row } from "react-bootstrap"
import AppBar from "./components/AppBar"
import Store from "./pages/Store"
import { CartProvider } from "./context/cart.context"
import { ProductProvider } from "./context/product.context"
import SideBar from "./components/SideBar"

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <AppBar />

          <Container fluid>
            <Row>
              <Col xs={4} md={2}>
                <SideBar />
              </Col>
              <Col xs={12} md={10}>
                <Store />
              </Col>
            </Row>
          </Container>
        </CartProvider>
      </ProductProvider>
    </>
  )
}

export default App
