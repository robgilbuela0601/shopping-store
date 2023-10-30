import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Alert from "react-bootstrap/Alert"

function CheckoutModal(props: any) {
  console.log(props, "asfasfasfsaf")
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      {/* <Modal.Body> */}
      <Alert style={{ margin: 0 }} variant="success">
        <Alert.Heading>Thank you for purchasing!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <div className="d-flex justify-content-end">
          <Button variant="outline-success" onClick={props.onHide}>
            Close
          </Button>
        </div>
      </Alert>
      {/* </Modal.Body> */}
    </Modal>
  )
}

export default CheckoutModal
