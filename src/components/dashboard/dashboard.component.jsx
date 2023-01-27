import Side from "../side.component/side.component";
import "./dashboard.styles.scss";
import { Col } from "react-bootstrap";
import back from "../../assets/backchat.png";
import { Suspense } from "react";
import { PulseLoader } from "react-spinners";
export default function Dashboard(user) {
  return (
    <Suspense
      fallback={
        <div className="loader">
          <PulseLoader color="#00afef" size="50px" />
        </div>
      }
    >
      <div className="dashboard">
        <Col>
          <div className="sideColumn d-flex">
            <Side user={user} />
            <img src={back} alt="backimage" className="imageBack" />
          </div>
        </Col>
      </div>
    </Suspense>
  );
}
