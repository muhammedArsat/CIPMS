import { Briefcase, CheckCircle, Users } from "lucide-react";
import { useLocation } from "react-router";
import Logout from "./Logout";

const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const allLinks = [
    {
      label: "Internships",
      path: "internships",
      icon: <Briefcase size={18} className="mr-2" />,
      roles: ["ADMIN"],
    },
    {
      label: "Completed",
      path: "Completed",
      icon: <CheckCircle size={18} className="mr-2" />,
      roles: ["ADMIN"],
    },
    {
      label: "My students",
      path: "My students",
      icon: <Users size={18} className="mr-2" />,
      roles: ["ADMIN"],
    },
  ];

  const location = useLocation();
  const pathname = location.pathname;
  const role = "ADMIN";
  const links = allLinks.filter((link) => link.roles.includes(role));

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0  bg-opacity-40 z-40 md:hidden transition-opacity ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed flex-col justify-between items-center top-16 left-0 min-h-screen w-[220px] dark:bg-black shadow-xl  transition-transform duration-300
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:translate-x-0 md:flex`}
      >
        <ul className="w-full flex flex-col">
          {links.map((link, idx) => (
            <li
              key={idx}
              className={`p-2 flex text-lg font-secondary font-light tracking-wider justify-start capitalize items-center cursor-pointer transition ${
                pathname.startsWith(`/${link.path}`)
                  ? "bg-gradient-to-r from-action border-l-4 border-active to-blue-300 text-white"
                  : ""
              }`}
            >
              {link.icon}
              {link.label}
            </li>
          ))}
        </ul>
        <ul className="absolute bottom-16 w-full">
          <Logout />
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
