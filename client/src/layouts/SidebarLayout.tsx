import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const SidebarLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default SidebarLayout;
