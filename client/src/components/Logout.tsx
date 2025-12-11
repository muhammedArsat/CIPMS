import { LogOut } from "lucide-react";
import { signOut } from "../auth/apis/auth.api";

const Logout = () => {
  const handleLogout = async () => {
    const res = await signOut();
    console.log(res);
  };
  return (
    <div onClick={handleLogout}>
      <li className="bg-red-400 dark:bg-red-500 cursor-pointer p hover:bg-red-300 active:bg-red-500 transition-all flex items-center gap-2 text-white p-2 font-secondary text-lg tracking-wider font-light">
        <LogOut strokeWidth={1} />
        Logout
      </li>
    </div>
  );
};

export default Logout;
