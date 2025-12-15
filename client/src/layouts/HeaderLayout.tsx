import { Outlet } from "react-router";
import Header from "../components/Header";
const HeaderLayout = () => {
  return (
    <div>
     <div className="fixed top-0 bg-white dark:bg-[#1f1f1f] w-full z-50">
        <Header />
      </div>
      <main className=" p-1 md:pl-[250px]  mt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default HeaderLayout;
