import { api } from "../../api";

interface formDataType {
  email: string;
  password: string;
}

export const signIn = async (formData: formDataType) => {
  const res = await api.post(`auth/signin`, formData);
  return res.data;
};

export const signOut = async () => {
    console.log("logout clicked")
  await api.post("/auth/signout");
};
