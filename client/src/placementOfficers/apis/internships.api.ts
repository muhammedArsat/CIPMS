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
  console.log(res.data)
  return res.data;
};

export const createNewInternship = async (data: any) => {
  const res = await api.post("/internships", data);
  return res.data;
};

export const fetchInternshipsById = async (id: any) => {
  const res = await api.get(`/internships/detail/${id}` );
  return res.data;
};


export const deleteInternshipById = async(id:number) =>{
  const res = await api.delete(`internships/${id}`);
  return res.data;
}

export const updateInternshipById = async(data:any) => {
  const res = await api.put(`internships`, data);
  return res.data;
}