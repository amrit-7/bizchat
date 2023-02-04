import Side from "../side.component/side.component";
import "./dashboard.styles.scss";
import { Col, Container } from "react-bootstrap";
export default function Dashboard(user) {
  return (
    <div className="dashboard">
      <Col>
        <Container className="sideColumn d-flex">
          <Side user={user} />
        </Container>
      </Col>
    </div>
  );
}
