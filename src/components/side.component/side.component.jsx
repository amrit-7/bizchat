import { Tab, Nav, Modal } from "react-bootstrap";
import React, { Fragment, useState } from "react";
import { ReactComponent as Add } from "../../assets/add.svg";
import "./side.styles.scss";
import Conversations from "../coversations/conversations.component";
import Contacts from "../contacts/contacts.component";
import Contact from "../newContactModal/contact.component";

const converstion = "Convesations";
const contacts = "Contacts";

export default function Side(user) {
  const [activeKey, setActiveKey] = useState(converstion);
  const [modalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <Fragment>
      <div
        style={{ width: "450px", borderRight: "1px solid grey" }}
        className="sideBar"
      >
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
          <Nav
            variant="tabs"
            className="tabs text-center justify-content-center"
          >
            <Nav.Item className="item">
              <Nav.Link eventKey={converstion}>Conversations</Nav.Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Nav.Link eventKey={contacts}>Contacts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => setModalOpen(true)}>
                <Add className="icon" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="border-right overflow-auto flex-grow-1">
            <Tab.Pane eventKey={converstion}>
              <Conversations />
            </Tab.Pane>
            <Tab.Pane eventKey={contacts}>
              <Contacts />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>

        <Modal show={modalOpen} onHide={closeModal}>
          <Contact closeModal={closeModal} />
        </Modal>
      </div>
    </Fragment>
  );
}
