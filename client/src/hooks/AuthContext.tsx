import React, { createContext, useEffect, useState } from "react";
import { fetchUserDetails } from "../auth/apis/auth.api";
interface AuthProviderProps {
  children: React.ReactNode;
}

/**
 * types for AuthContext Type
 * types for Auth
 * value for DefaultAuth
 */
interface AuthContextType {
  auth: AuthData;
  fetchUserDetail: () => void;
}
interface AuthData {
  email: string;
  role: string;
  name: string;
  profile: string;
  isLoading: boolean;
}
const defaultAuth: AuthData = {
  email: "",
  role: "",
  name: "",
  profile: "",
  isLoading: true,
};

/**
 * AuthContext for providing value globally
 */
const AuthContext = createContext<AuthContextType>({
  auth: defaultAuth,
  fetchUserDetail: () => {},
});

/**
 * AuthProvider for handling auth and fetchUser detail after every refresh page
 */
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthData>(defaultAuth);

  /**
   * ---------------------------------------------------------------------
   * @description function to fetchUserDetails for the current logged in user
   * @access all
   * ------------------------------------------------------------------
   */
  const fetchUserDetail = async () => {
    setAuth((prev) => ({ ...prev, isLoading: true }));
    try {
      const res = await fetchUserDetails();
      setAuth({
        email: res.user.email,
        name: res.user.name,
        role: res.user.role,
        profile: res.user.profile,
        isLoading: false,
      });
    } catch (err) {
      setAuth((prev) => ({ ...prev, isLoading: false }));
    }
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);
  return (
    <AuthContext.Provider value={{ auth, fetchUserDetail }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
