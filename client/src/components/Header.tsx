import { useState } from "react";
import { Moon, Bell, Menu } from "lucide-react";
import Avatar from "../assets/avatar.svg";
import Logo from "../assets/Logo";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="flex justify-between py-2 md:px-2 mb-2 mx-3 border-b border-neutral-300 items-center">
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
        <Moon strokeWidth={1} className="cursor-pointer" />
        <span>
          <Bell strokeWidth={1} className="cursor-pointer" />
        </span>
        <img src={Avatar} alt="Profile" className="w-7 h-7" />
      </div>
    </header>
  );
};

export default Header;
