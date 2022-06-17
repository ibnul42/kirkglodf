import React, { useState } from "react";
import Login from "./Components/Login";
import OneTimePassword from "./Components/OneTimePassword";
import Header from "./Components/Header";

import MfaHome from "./Pages/MfaHome";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Register from "./Components/Register";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";

export default function App({ user, requireMfa }) {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState(false);
  const logouthandler = async (e) => {
    e.preventDefault();
    await fetch("/logout")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setLoginState(true);
  };
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/mfa"
          element={
            <MfaHome
              user={user}
              requireMfa={requireMfa}
              logouthandler={logouthandler}
              loginHandler={loginHandler}
              loginState={loginState}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
