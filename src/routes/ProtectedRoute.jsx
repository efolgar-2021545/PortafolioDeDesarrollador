import { Navigate, useLocation } from "react-router-dom";
import useProtectedAccess from "../hooks/useProtectedAccess.jsx";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const { hasAccess } = useProtectedAccess();

  if (!hasAccess) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}