import React, { useRef } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import "./login.styles.scss";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ChatLogo } from "../../assets/chat.svg";
// import useLocalStorage from "../../hooks/localStorage"

export default function Login({ setUser }) {
  const navigate = useNavigate();

  const idRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const newUser = e.target.username.value;
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser))
    navigate("/dashboard ");

  }

  return (
    <Container
      className="loginContainer d-flex align-items-center justify-content-center"
      style={{ height: "90vh" }}
    >
      <Row className="justify-content-center">
        <ChatLogo className="logo" />
      </Row>
      <Row className="justify-content-center">
        <Form onSubmit={handleSubmit} className=" ms-5 w-80">
          <Form.Group>
            <Form.Label>
              <h1 className="titleLogin">Enter Username or Phone</h1>
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
            <Button type="submit" className="start mt-4 col-sm-4">
              Login
            </Button>
          </Row>
        </Form>
      </Row>
    </Container>
  );
}
