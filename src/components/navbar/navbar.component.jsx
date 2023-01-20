import "./navbar.styles.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { Fragment, useContext } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../../context/user.context";
const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const signout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };
  // console.log(currentUser);
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
            Logout {currentUser}
          </Button>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
