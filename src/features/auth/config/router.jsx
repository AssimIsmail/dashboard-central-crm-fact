import { Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const authRoutes = [
  {
    path: "/",
    element: <Navigate to="/session" replace />,
  },
  {
    path: "session",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to="/session" replace />,
  },
];

export default authRoutes;