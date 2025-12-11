import { LogOut } from "lucide-react";

const Logout = () => {
  return (
    <div>
      <li className="bg-red-400 cursor-pointer p hover:bg-red-300 active:bg-red-500 transition-all flex items-center gap-2 text-white p-2 font-secondary text-lg tracking-wider">
        <LogOut strokeWidth={1} />
        Logout
      </li>
    </div>
  );
};

export default Logout;
