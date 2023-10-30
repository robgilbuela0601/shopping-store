import React from "react"
import { ListGroup, ListGroupItem } from "react-bootstrap"

function AppBarDrawer() {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Drawer onClose={handleDrawerToggle} show={isOpen}>
      <ListGroup>
        <ListGroupItem>
          <a href="#">Home</a>
        </ListGroupItem>
        <ListGroupItem>
          <a href="#">About</a>
        </ListGroupItem>
      </ListGroup>
    </Drawer>
  )
}
export default AppBarDrawer
