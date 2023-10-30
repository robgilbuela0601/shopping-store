import { Col, ListGroup, Row, Tab } from "react-bootstrap"
import items from "../data/items.json"

import capitalize from "../global/utils/Capitalize"
import useStoreProduct from "../hooks/useStoreProduct"

function SideBar() {
  const { category, onChangeCategory } = useStoreProduct()
  // const [category, setCategory] = useState("All")
  const ids = items.map(({ category }: any) => category)
  const categories = items
    .filter(
      ({ category }: any, index: number) => !ids.includes(category, index + 1),
    )

    .map((item) => item.category)
    .sort()

  return (
    <>
      <Tab.Container id="list-group-tabs-example" activeKey={category}>
        <Row style={{ marginTop: "7rem" }}>
          <Col>
            <ListGroup>
              <ListGroup.Item
                action
                variant="success"
                eventKey={"All"}
                onClick={() => onChangeCategory("All")}
              >
                All
              </ListGroup.Item>
              {categories.map((category) => {
                return (
                  <ListGroup.Item
                    action
                    variant="success"
                    eventKey={capitalize(category)}
                    onClick={() => onChangeCategory(category)}
                  >
                    {capitalize(category)}
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>
    </>
  )
}
export default SideBar
