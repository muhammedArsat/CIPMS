import {
  Briefcase,
  LayoutDashboard,
  FileText,
  CheckCircle,
  User,
  Bookmark,
  Users,
  Mail,
  UserCheck,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import Logout from "./Logout";
import { useContext } from "react";
import { AuthContext } from "../hooks/AuthContext";

const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  /**
   * -------------------------------------------------------------------------------------------
   * json for links with its path, role and icon
   * for students, mentor and placement officers
   */
  const allLinks = [
    // STUDENT order
    {
      label: "Internships",
      path: "internships",
      icon: <Briefcase size={18} className="mr-2" />,
      roles: ["STUDENT"],
    },
    {
      label: "Dashboard",
      path: "dashboard",
      icon: <LayoutDashboard size={18} className="mr-2" />,
      roles: ["STUDENT"],
    },

    {
      label: "Applications",
      path: "applications",
      icon: <FileText size={18} className="mr-2" />,
      roles: ["STUDENT"],
    },
    {
      label: "Completed",
      path: "completed",
      icon: <CheckCircle size={18} className="mr-2" />,
      roles: ["STUDENT"],
    },
    {
      label: "Profile",
      path: "profile",
      icon: <User size={18} className="mr-2" />,
      roles: ["STUDENT"],
    },
    {
      label: "Saved",
      path: "saved",
      icon: <Bookmark size={18} className="mr-2" />,
      roles: ["STUDENT"],
    },

    // MENTOR order
    {
      label: "Internships",
      path: "internships",
      icon: <Briefcase size={18} className="mr-2" />,
      roles: ["MENTOR"],
    },
    {
      label: "Dashboard",
      path: "dashboard",
      icon: <LayoutDashboard size={18} className="mr-2" />,
      roles: ["MENTOR"],
    },

    {
      label: "Students",
      path: "students",
      icon: <Users size={18} className="mr-2" />,
      roles: ["MENTOR"],
    },
    {
      label: "Inbox",
      path: "inbox",
      icon: <Mail size={18} className="mr-2" />,
      roles: ["MENTOR"],
    },

    // PLACEMENTOFFICER order
    {
      label: "Dashboard",
      path: "dashboard",
      icon: <LayoutDashboard size={18} className="mr-2" />,
      roles: ["PLACEMENTOFFICER"],
    },
    {
      label: "Internships",
      path: "internships",
      icon: <Briefcase size={18} className="mr-2" />,
      roles: ["PLACEMENTOFFICER"],
    },
    {
      label: "Students",
      path: "students",
      icon: <Users size={18} className="mr-2" />,
      roles: ["PLACEMENTOFFICER"],
    },
    {
      label: "Mentors",
      path: "mentors",
      icon: <UserCheck size={18} className="mr-2" />,
      roles: ["PLACEMENTOFFICER"],
    },
  ];

  const { auth } = useContext(AuthContext);
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const role = auth.role;
  const links = allLinks.filter((link) => link.roles.includes(role));

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0  bg-opacity-40  z-10 md:hidden transition-opacity ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed flex-col z-50 justify-between items-center top-16 left-0 min-h-screen w-[220px] dark:bg-[#1f1f1f] shadow-xl  transition-transform duration-300
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:translate-x-0 md:flex`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="w-full flex flex-col">
          {links.map((link, idx) => (
            <li
              key={idx}
              className={`p-2 flex text-lg font-secondary font-light  tracking-widest justify-start capitalize items-center cursor-pointer transition ${
                pathname.startsWith(`/${link.path}`)
                  ? "bg-gradient-to-r from-action border-l-2 border-white to-blue-300 text-white"
                  : ""
              }`}
              onClick={() => navigate(`/${link.path}`)}
            >
              {link.icon}
              {link.label}
            </li>
          ))}
        </ul>
        <ul className="absolute bottom-16 w-full py-1">
          <Logout />
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
