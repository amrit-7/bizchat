import { Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Send } from "@mui/icons-material";
import "./uploadmodal.styles.scss";
import { useState } from "react";

function MyVerticallyCenteredModal(props) {
  const [file, setFile] = useState();

  const fileupload = (event) => {
    const newFile = event.target.files[0];
    setFile(newFile);
  };
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Upload Files
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Choose your files or photos</h4>

        <Form.Control type="file" onChange={fileupload} />
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
