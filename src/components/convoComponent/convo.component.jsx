import React from "react";
import { Row, Badge, Col } from "react-bootstrap";
import "./convolist.styles.scss";
import { useNavigate } from "react-router-dom";

export default function Convo({ convo }) {
  const navigate = useNavigate();
  const { id, name, address } = convo;
  const goToUser = (userId) => {
    if (userId) {
      navigate(`/user/${userId}`);
    }
  };
  return (
    <div>
      <div onClick={() => goToUser(id)}>
        <ul className="mb-0">
          <li className="clearfix" key={id}>
            <Row className="g-0">
              <Col sm={2} className="profileimage">
                <img
                  src={`https://api.lorem.space/image/face?w=150&h=150&hash=${id}`}
                  alt="avatar"
                ></img>
              </Col>
              <Col sm={10}>
                <span className="about">
                  <span className="name">{name}</span>
                </span>
                <Badge bg="danger" className="ms-2">
                  2
                </Badge>
                <small className="text-muted pe-3" style={{ float: "right" }}>
                  Today
                </small>
                <p className="message">
                  {address.city},{address.street}
                </p>
              </Col>
            </Row>
          </li>
        </ul>
      </div>
    </div>
  );
}
