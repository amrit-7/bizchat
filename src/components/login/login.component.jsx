import React, { useRef, useContext } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./login.styles.scss";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ChatLogo } from "../../assets/chat.svg";
import { UserContext } from "../../context/user.context";

export default function Login({ setUser }) {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const idRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const newUser = e.target.username.value;
    setUser(newUser);
    setCurrentUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("/dashboard");
  }

  return (
    <Container
      className="loginContainer d-flex align-items-center justify-content-center"
      style={{ height: "90vh" }}
    >
      <Row className="justify-content-center">
        <Col sm={4} class="justify-content-center text-center">
          <Row className="justify-content-center mb-4">
            <ChatLogo className="logo" />
          </Row>
        </Col>
        <Col sm={8}>
          <Form onSubmit={handleSubmit} className=" ms-5 w-80">
            <Form.Group>
              <Form.Label>
                <h1 className="titleLogin">Enter Phone</h1>
              </Form.Label>
              <Form.Control
                type="text"
                name="username"
                ref={idRef}
                placeholder="Enter Username or phone"
                required
              ></Form.Control>
              <Form.Label>
                <h1 className="titleLogin mt-3">Enter Password</h1>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                required
              ></Form.Control>
            </Form.Group>
            <Row className="justify-content-center">
              <Button type="submit" className="start mt-4 col-4">
                Login
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
