import InternshipCard from "./components/InternshipCard";
import React, { useEffect, useState } from "react";
import { fetchAllInternships } from "../placementOfficers/apis/internships.api";
import Search from "./components/Search";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";
import Loader from "./components/Loader";
import { Navigate, useNavigate } from "react-router";
import Pagination from "./components/Pagination";
interface internshipType {
  id: number;
  companyName: string;
  companyUrl: string;
  createdAt: string;
  ctc: number;
  cutoff: number;
  description: string;
  duration: string;
  location: string;
  logoUrl: string;
  mode: string;
  skills: string[];
  tags: string[];
  title: string;
}
const Internships = () => {
  const [internships, setInternships] = useState<internshipType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [totalPage, setTotalPage] = useState(0);

  const navigate = useNavigate();
  const fetchInternships = async () => {
    try {
      setIsLoading(true);
      const res = await fetchAllInternships({
        search: debouncedSearch,
        page,
        limit,
      });
      setInternships(res.internships);
      setTotalPage(res.totalPages);
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400); // 400ms debounce

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    fetchInternships();
    // eslint-disable-next-line
  }, [debouncedSearch, page]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  if (isLoading) {
    return (
      <div className="flex w-full justify-center items-center min-h-svh">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      <span>
        <h3>Internships</h3>
        <p className="font-light">
          Kickstart your career with hands-on experience. Explore the latest
          internship opportunities from top companies and apply today!
        </p>
      </span>
      <div className="flex w-full space-x-2 ">
        <div className="basis-12/12">
          <Search value={search} handleSearch={handleSearch} />
        </div>
      </div>

      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 ">
        {internships.length === 0 ? (
          <p className="text-center w-full  col-span-4">No result found</p>
        ) : (
          internships.map((internship, idx) => {
            return (
              <div
                key={idx}
                onClick={() => navigate(`/internshipDetails/${internship.id}`)}
                className="hover:scale-105 transition-all cursor-pointer"
              >
                <InternshipCard
                  createdAt={internship.createdAt}
                  logo={internship.logoUrl}
                  title={internship.title}
                  companyName={internship.companyName}
                  tags={internship.tags}
                  duration={internship.duration}
                  location={internship.location}
                  ctc={internship.ctc}
                  mode={internship.mode}
                />
              </div>
            );
          })
        )}
      </div>

      <div className="md:fixed bottom-5 flex justify-center items-center  w-full  left-0 ">
        <Pagination
          page={page}
          totalPage={totalPage}
          onPrevious={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => Math.min(totalPage, p + 1))}
        />
      </div>
    </div>
  );
};

export default Internships;
