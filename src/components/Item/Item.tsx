import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { IItem } from "../../global/interfaces/items.interfaces"
import Currency from "../../global/utils/Currency"
import useCart from "../../hooks/useShoppingCart"
import capitalize from "../../global/utils/Capitalize"
import removeDot from "../../global/utils/RemoveDot"
function Item({
  id,
  productName,
  description,
  unitPrice,
  imageUrl,
  category,
  toggleButton,
}: IItem) {
  const { addCartQty } = useCart()
  return (
    <>
      {toggleButton ? (
        <Card
          className="m-5 border-0 shadow"
          style={{ padding: "3rem", height: toggleButton ? "800px" : "auto" }}
        >
          <Card.Img
            variant="bottom"
            src={imageUrl}
            height="300px"
            style={{ objectFit: toggleButton ? "fill" : "cover" }}
          ></Card.Img>
          <Card.Body>
            <Card.Title>{removeDot(productName)} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {capitalize(category)}
            </Card.Subtitle>
            <Card.Text>{description}</Card.Text>
            <Card.Title>
              <Currency price={unitPrice}></Currency>
            </Card.Title>

            <Button
              className="w-100"
              variant="success"
              onClick={() => addCartQty(id)}
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Container fluid>
          <Card
            className="m-5 border-0 shadow"
            style={{ padding: "3rem", height: toggleButton ? "800px" : "auto" }}
          >
            <Row>
              <Col>
                <Card.Img
                  variant="bottom"
                  src={imageUrl}
                  height="300px"
                  style={{ objectFit: "fill" }}
                ></Card.Img>
              </Col>

              <Col>
                <Card.Body>
                  <Card.Title>{removeDot(productName)} </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {capitalize(category)}
                  </Card.Subtitle>
                  <Card.Text>{description}</Card.Text>
                  <Card.Title>
                    <Currency price={unitPrice}></Currency>
                  </Card.Title>

                  <Button
                    className="w-100"
                    variant="success"
                    onClick={() => addCartQty(id)}
                  >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    Add to cart
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      )}
    </>
  )
}
export default Item
