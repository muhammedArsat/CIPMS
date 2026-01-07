import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from "../common/LandingPage";
import Signin from "../auth/Signin";
import NotFound from "../common/NotFound";
import Internships from "../common/Internships";
import HeaderLayout from "../layouts/HeaderLayout";
import ProtectedRoute from "./protectedRoute";
import Dashboard from "../common/Dashboard";
import Notification from "../common/components/Notification";
import NewInternship from "../placementOfficers/pages/NewInternship";
import InternshipsDetails from "../common/InternshipsDetails";
import PlacementDashboard from "../placementOfficers/pages/PlacementDashboard";

const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route element={<HeaderLayout />}>
          <Route
            path="/internships"
            element={
              <ProtectedRoute
                allowedRole={["PLACEMENTOFFICER", "MENTOR", "STUDENT"]}
              >
                <Internships />
              </ProtectedRoute>
            }
          />
         
          <Route
            path="/notification"
            element={
              <ProtectedRoute
                allowedRole={["PLACEMENTOFFICER", "MENTOR", "STUDENT"]}
              >
                <Notification />
              </ProtectedRoute>
            }
          />

          <Route
            path="/newInternship"
            element={
              <ProtectedRoute allowedRole={["PLACEMENTOFFICER"]}>
                <NewInternship />
              </ProtectedRoute>
            }
          />
          <Route
            path="/internshipDetails/:id"
            element={
              <ProtectedRoute
                allowedRole={["PLACEMENTOFFICER", "MENTOR", "STUDENT"]}
              >
                <InternshipsDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/placement/dashboard"
            element={
              <ProtectedRoute allowedRole={["PLACEMENTOFFICER"]}>
                <PlacementDashboard />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default routes;
