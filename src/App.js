import Login from "./components/login/login.component";
import React, { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar.component.jsx";
import ChatPage from "./components/chatpage/chatpage.component";
import Dashboard from "./components/dashboard/dashboard.component";
import { PrivateRoutes } from "./utils/privateRoutes";
const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <Fragment>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<NavBar />}>
            <Route index element={<Dashboard />}></Route>
          </Route>
          <Route path="/user/:userId" element={<NavBar user={user} />}>
            <Route index element={<ChatPage user={user} />}></Route>
          </Route>
        </Route>
        <Route path="/" element={<Login setUser={setUser} />}></Route>
      </Routes>
    </Fragment>
  );
};
export default App;
