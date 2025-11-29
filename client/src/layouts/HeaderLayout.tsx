import { Outlet } from "react-router";
import Header from "../components/Header";
const HeaderLayout = () => {
  return (
    <div>
      <Header />
      <main className="pl-2 md:pl-[250px]">
        <Outlet />
      </main>
    </div>
  );
};

export default HeaderLayout;
