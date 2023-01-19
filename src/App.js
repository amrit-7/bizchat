import Login from "./components/login/login.component";
import React, { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar.component.jsx";
import ChatPage from "./components/chatpage/chatpage.component";
import { useNavigate } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard.component";
const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();
  const signout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <Fragment>
      <Routes>
        <Route path="/dashboard" element={<NavBar />}>
          <Route index element={<Dashboard />}></Route>
        </Route>
        <Route
          path="/user/:userId"
          element={<NavBar user={user} signout={signout} />}
        >
          <Route index element={<ChatPage user={user} />}></Route>
        </Route>
        <Route path="/" element={<Login setUser={setUser} />}></Route>
      </Routes>
    </Fragment>
  );
};
export default App;
