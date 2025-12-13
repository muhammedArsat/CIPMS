import { Outlet } from "react-router";
import Header from "../components/Header";
const HeaderLayout = () => {
  return (
    <div>
      <Header />
      <main className="pl-2 md:pl-[250px] pr-3">
        <Outlet />
      </main>
    </div>
  );
};

export default HeaderLayout;
