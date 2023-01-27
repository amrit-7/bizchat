import { Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Send } from "@mui/icons-material";
import "./uploadmodal.styles.scss";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Upload Files
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Choose your files or photos</h4>
        <Form.Control type="file" />
      </Modal.Body>
      <Modal.Footer>
        <Button className="filesend" variant="outline-dark">
          <Send />
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
