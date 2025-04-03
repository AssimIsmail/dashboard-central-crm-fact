import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import LoaderSplash from "../components/LoaderSplash";
import { useAuthContext } from "../../auth/context/AuthProvider";
import useAuthActions from "../../auth/hooks/useAuthActions";

export default function SplashPage() {
  const { authState } = useAuthContext();
  const { getCurrentUser } = useAuthActions();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getCurrentUser();
  }, []);

  useEffect(() => {
    if (!authState.isLoading) {
      const user = authState.currentUser;
      if (user) {
        if (user.role === "ADMIN_CENTRAL") {
          navigate("/central");
        } else if (user === null) {
          navigate("/session");
        }
      }
    }
  }, [authState.currentUser, authState.isLoading, location.pathname]);

  if (authState.isLoading) {
    return <LoaderSplash />;
  }

  return <Outlet />;
}
