import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignPage from "./pages/Sign";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { Dashboard } from "./pages/Dashboard";
import { ContactProvider } from "./contexts/contactContext";

const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<SignPage />} />
    <Route path="/dashboard" element={<ProtectedRoute />}>
      <Route
        index
        element={
          <ContactProvider>
            <Dashboard />
          </ContactProvider>
        }
      />
    </Route>
  </Routes>
);

export default Router;
