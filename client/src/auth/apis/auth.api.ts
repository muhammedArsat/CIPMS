import { api } from "../../api";

//interface for manual sign in payload
interface formDataType {
  email: string;
  password: string;
}

/**
 * -----------------------------------------------------------------
 * @param formData 
 * @description function to sign in manually using email and password
 * ------------------------------------------------------------------
 */
export const signIn = async (formData: formDataType) => {
  const res = await api.post(`auth/signin`, formData);
  return res.data;
};


/**
---------------------------------------------------------
* @description function to logout to delete the cookies from the browser
---------------------------------------------------------
*/
export const signOut = async () => {
  const res = await api.post("/auth/signout");

  return res.data;
};

/**
 * ------------------------------------------------------------------
 * @description function to fetch the user's details for every refresh of the page
 * ----------------------------------------------------------------
 */
export const fetchUserDetails = async () => {
  const res = await api.get("/auth/getMe");
  return res.data;
};
