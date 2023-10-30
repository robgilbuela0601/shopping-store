import {
  Row,
  Col,
  InputGroup,
  Form,
  Container,
  ToggleButton,
} from "react-bootstrap"
import Item from "../components/Item/Item"
import { useState } from "react"
import useStoreProduct from "../hooks/useStoreProduct"

function Store() {
  const { products, searchProductBy, sortProductBy, getProductItemQty } =
    useStoreProduct()

  const [toggleButton, setToggleButton] = useState(false)

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <InputGroup style={{ width: "500px" }}>
              <Form.Control
                onChange={(e) => searchProductBy(e.target.value)}
                placeholder="Search Product or Description"
              />
            </InputGroup>
          </Col>

          <Col>
            <Form.Select
              className="ms-auto"
              style={{ width: "130px" }}
              onChange={(e) => sortProductBy(e.target.value)}
              size="sm"
            >
              <option value={"lowest"}>Price (lowest)</option>
              <option disabled></option>
              <option value={"highest"}>Price (highest)</option>
              <option disabled></option>
              <option value={"a-z"}>Product (a-z)</option>
              <option disabled></option>
              <option value={"z-a"}>Product (z-a)</option>
            </Form.Select>
          </Col>
        </Row>
        <ToggleButton
          className="ms-auto"
          style={{ marginTop: "10px", marginRight: "10px" }}
          id="toggle-check"
          type="checkbox"
          variant="outline-success"
          checked={toggleButton}
          value="1"
          onChange={(e) => setToggleButton(e.currentTarget.checked)}
        >
          <i className="fa fa-list" aria-hidden="true"></i>
        </ToggleButton>
        <ToggleButton
          className="ms-auto"
          style={{ marginTop: "10px", marginRight: "10px" }}
          id="toggle-check"
          type="checkbox"
          variant="outline-success"
          checked={!toggleButton}
          value="1"
          onChange={(e) => setToggleButton(!e.currentTarget.checked)}
        >
          <i className="fa fa-th-large" aria-hidden="true"></i>
        </ToggleButton>

        <h4 className="text-center">
          {getProductItemQty()} Products available
        </h4>
      </Container>
      {toggleButton && (
        <Row md={2} xs={1} lg={3} className="g-3">
          {products.map((item) => {
            return (
              <Col key={item.id}>
                <Item toggleButton {...item} />
              </Col>
            )
          })}
        </Row>
      )}
      {!toggleButton &&
        products.map((item) => {
          return (
            <Col key={item.id}>
              <Item toggleButton={toggleButton} {...item} />
            </Col>
          )
        })}
    </>
  )
}

export default Store
