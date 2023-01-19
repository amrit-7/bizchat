import "./navbar.styles.scss";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Button } from "react-bootstrap";
const Navbar = ({ signout }) => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="ms-5 container-fluid">
          <h5 className="title"> WhatsApp Bussiness</h5>
          <Button
            className="logoutButton"
            style={{ display: "inline-flex" }}
            type="button"
            onClick={signout}
            name="logout"
          >
            Logout
          </Button>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
