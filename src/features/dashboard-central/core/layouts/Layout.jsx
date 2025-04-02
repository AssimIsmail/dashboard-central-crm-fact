import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import TopMenu from "../components/TopMenu";
import SideNavbar from "../components/SideNavbar";
import { useAuthContext } from "../../../auth/context/AuthProvider";

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
    const { authState } = useAuthContext();
  
  return (
    <div className="flex w-full flex-col text-xs ">
      <Toaster position="top-left" reverseOrder={false} />
      <TopMenu me={authState?.currentUser} />
      <div className="flex !min-h-screen w-full  bg-gray-50">
        <div className="hidden md:block">
          <SideNavbar />
        </div>
        <div className="flex !h-full w-full gap-2 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}