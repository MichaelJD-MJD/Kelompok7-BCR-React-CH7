import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();
    const {user} = useSelector((state) => state.auth);

    // Show only Outlet on "/login" and "/register"
    const showOnlyOutlet =
      location.pathname === "/login" || location.pathname === "/register" ||
      location.pathname === "/searchCar";

    return (
      <>
        {showOnlyOutlet ? (
          <Outlet />
        ) : user?.role_id == 1 && location.pathname.startsWith("/admin") ? (
          // Template admin
          <>
            <div className="container-fluid p-0">
              <div className="row">
                <Sidebar />
                <div className="col-lg-10 ps-0 main-content-container">
                  <Navbar />
                  <Outlet />
                </div>
              </div>
            </div>
            <TanStackRouterDevtools />
          </>
        ) : (
          // Template user
          <Outlet />
        )}
      </>
    );
  },
});
