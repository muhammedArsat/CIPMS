import { api } from "../../api";

export const placementDashboardDetails = async () => {
  const res = await api.get("/placement/dashboard");
  return res.data;
};
