import Side from "../side.component/side.component";
import "./dashboard.styles.scss";
import { Col } from "react-bootstrap";
import back from "../../assets/backchat.png";
export default function Dashboard(user) {
  return (
    <div className="dashboard">
      <Col>
        <div className="sideColumn d-flex">
          <Side user={user} />
          <img src={back} alt="backimage" className="imageBack" />
        </div>
      </Col>
    </div>
  );
}
