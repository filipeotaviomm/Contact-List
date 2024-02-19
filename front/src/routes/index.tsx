import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/loginPage";
import RegisterPage from "../pages/RegisterPage/registerPage";
import DashboardPage from "../pages/DashboardPage/dashboardPage";
import { PrivateRoutes } from "./PrivateRoutes/privateRoutes";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};

export { RoutesMain };
