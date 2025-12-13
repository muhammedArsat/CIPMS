import { LogOut } from "lucide-react";
import { signOut } from "../auth/apis/auth.api";
import {useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();

  /**
   * -------------------------------------------------------------------
   * function to logout to clear the cookie from the browser
   * -------------------------------------------------------------------
   */
  const handleLogout = async () => {
    const res = await signOut();
    if (res.success === true) {
    
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
      navigate("/", { replace: true });
    }
  };
  
  return (
    <div onClick={handleLogout}>
      <li className="bg-red-400 dark:bg-red-500 cursor-pointer  hover:bg-red-300 active:bg-red-500 transition-all flex items-center gap-2 text-white p-2 font-secondary text-lg tracking-wider font-light">
        <LogOut strokeWidth={1} />
        Logout
      </li>
    </div>
  );
};

export default Logout;
