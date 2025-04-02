import { createBrowserRouter } from "react-router-dom";
import SplashPage from "../features/core/pages/SplashPage";
import authRoutes from "../features/auth/config/router";
import centralRoutes from "../features/dashboard-central/config/router";

const router = createBrowserRouter([
  {
    path: "",
    element: <SplashPage />,
    children: [...authRoutes,...centralRoutes],
  },
]);

export { router };