import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from "../common/LandingPage";
import Signin from "../auth/Signin";
import Internships from "../common/Internships";
import HeaderLayout from "../layouts/HeaderLayout";
import SidebarLayout from '../layouts/SidebarLayout'
// import Signup from "../auth/Signup";
const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route element={<HeaderLayout />}>
          <Route element={<SidebarLayout />}>
            <Route path="/internships" element={<Internships />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default routes;
