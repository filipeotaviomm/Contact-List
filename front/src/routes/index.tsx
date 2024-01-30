import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/loginPage";
import RegisterPage from "../pages/RegisterPage/registerPage";
import DashboardPage from "../pages/DashboardPage/dashboardPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export { RoutesMain };
