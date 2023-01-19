import React, { useRef } from "react";
import { Modal, Form, Button, Row } from "react-bootstrap";
import "./newContact.styles.scss";

export default function Contact({ closeModal }) {
  const nameRef = useRef();
  const numRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    closeModal();
  }

  return (
    <div>
      <Modal.Header closeButton>
        <h5>Create Contact</h5>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label> Enter Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              ref={nameRef}
            ></Form.Control>
            <Form.Label className="mt-3"> Enter Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="(+91) 78945-78945"
              ref={numRef}
            ></Form.Control>
          </Form.Group>
          <Row className="justify-content-center">
            <Button type="submit" className="create mt-3 col-sm-10">
              Create Contact and start Chat
            </Button>
          </Row>
        </Form>
      </Modal.Body>
    </div>
  );
}
