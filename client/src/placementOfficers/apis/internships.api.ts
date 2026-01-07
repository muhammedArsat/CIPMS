import { api } from "../../api";

/**
 * @description function to fetch all internships
 */

interface fetchAllInternshipsProps {
  search: string;
  page: number;
  limit: number;
}
export const fetchAllInternships = async ({
  search,
  page,    
  limit,
}: fetchAllInternshipsProps) => {
  const res = await api.get(
    `/internships?page=${page}&limit=${limit}&search=${search}`
  );
  return res.data;
};
