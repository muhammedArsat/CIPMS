import { useContext } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRole: string[];
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRole,
}) => {
  const { auth } = useContext(AuthContext);
  if (auth.isLoading) {
    return <p>Loading...</p>;
  }

  /**
   * condition to check the user logged in or not by,
   * 1. is email is presented in token
   * 2. is role in the token is matched with allowedRoles 
   */
  if (!auth.email) {
    return <Navigate to="/" replace />;
  }
  if (!allowedRole.includes(auth.role)) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
