import React from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Contact({ contact }) {
  const { id, name, phone } = contact;
  const navigate = useNavigate();
  const goToUser = (userId) => {
    if (userId) {
      navigate(`/user/${userId}`);
    }
  };
  return (
    <div onClick={() => goToUser(id)}>
      <ul className=" mt-0 mb-0" key={id} style={{ listStyleType: "none" }}>
        <li className="clearfix">
          <Row className="g-0">
            <Col sm={2} className="text-center">
              <img
                src={`https://api.lorem.space/image/face?w=150&h=150&hash=${id}`}
                alt="avatar"
              ></img>
            </Col>
            <Col sm={10}>
              <span className="name">{name}</span>
              <p> {phone} </p>
            </Col>
          </Row>
        </li>
      </ul>
    </div>
  );
}
