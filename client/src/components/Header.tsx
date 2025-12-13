import { useContext, useState } from "react";
import { Moon, Bell, Menu, Sun } from "lucide-react";
import Avatar from "../assets/avatar.svg";
import Logo from "../assets/Logo";
import Sidebar from "./Sidebar";
import { ThemeContext } from "../hooks/ThemeContext";
import { AuthContext } from "../hooks/AuthContext";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const {auth} = useContext(AuthContext);
  const location = useLocation();
  const pathName = location.pathname;
  const isNotification = pathName === "/notification"
  const navigate = useNavigate();
  return (
    <header className="flex justify-between py-2 md:px-2 mb-2 mx-3 border-b border-neutral-300 dark:border-secondary items-center">
      <Logo />
      {/* Hamburger for mobile */}
      <span
        className="md:hidden p-2 md:p-0 absolute left-0"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu size={28} />
      </span>
      {/* Sidebar for mobile */}
      <div className="fixed left-0 top-[4.1rem]  min-h-svh ">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
      {/* Other header content for desktop */}
      <div className=" flex justify-center items-center space-x-4">
        <span onClick={toggleTheme}>
          {!isDark ? (
            <Moon strokeWidth={1} className="cursor-pointer" />
          ) : (
            <Sun strokeWidth={1} className="cursor-pointer" />
          )}
        </span>
        <span onClick={()=>navigate("/notification")}>
          <Bell strokeWidth={1} className={`cursor-pointer ${isNotification ? "fill-black dark:fill-white":"fill-none"} fill-black`}  />
        </span>
        <img src={auth.profile}  referrerPolicy="no-referrer" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
