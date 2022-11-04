import { FC } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout : FC = () => {
  return (
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
