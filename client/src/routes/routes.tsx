import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from "../common/LandingPage";
import Signin from "../auth/Signin";
import Internships from "../common/Internships";
import HeaderLayout from "../layouts/HeaderLayout";
import ProtectedRoute from "./protectedRoute";


const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route element={<HeaderLayout />}>
          <Route path="/internships" element={<ProtectedRoute allowedRole={["PLACEMENTOFFICER","MENTOR","STUDENT"]} ><Internships /></ProtectedRoute>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default routes;
