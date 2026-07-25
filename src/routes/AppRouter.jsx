import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout.jsx";
import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import ProjectDetailPage from "../pages/ProjectDetailPage.jsx";
import StudioPage from "../pages/StudioPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/studio"
            element={
              <ProtectedRoute>
                <StudioPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}