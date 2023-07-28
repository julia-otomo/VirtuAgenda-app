import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignPage from "./pages/Sign";

const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<SignPage />} />
  </Routes>
);

export default Router;
