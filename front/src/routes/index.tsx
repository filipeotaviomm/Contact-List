import React from "react";
import LoginPage from "../pages/LoginPage/loginPage";
import RegisterPage from "../pages/RegisterPage/registerPage";
import { Route, Routes } from "react-router-dom";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export { RoutesMain };
