import { useLocation } from "react-router";

const Sidebar = () => {
  const links = [
    "internships",
    "dashboard",
    "Inbox",
    "Applications",
    "Completed",
    "My students",
    "Logout",
  ];
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  return (
    <div className="w-[220px] min-h-svh dark:bg-black shadow-xl">
      <ul className="w-full flex flex-col ">
        {links.map((link, idx) => {
          return (
            <li
              key={idx}
              className={`p-2 flex justify-start capitalize items-center cursor-pointer transition ${
                pathname.startsWith(`/${link}`)
                  ? "bg-gradient-to-r from-action border-l-4 border-active to-blue-300 text-white"
                  : ""
              }`}
            >
              {link}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
