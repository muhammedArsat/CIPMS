import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Loader from "./components/Loader";
import NewInternshipForm from "../placementOfficers/components/NewInternshipForm";
import {
  deleteInternshipById,
  fetchInternshipsById,
  updateInternshipById,
} from "../placementOfficers/apis/internships.api";
import { formatTimeSince } from "../utils";
import {
  Clock,
  Edit2,
  Globe,
  GraduationCap,
  IndianRupee,
  MapPin,
  Trash,
} from "lucide-react";
import { AuthContext } from "../hooks/AuthContext";
import toast from "react-hot-toast";
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
const InternshipsDetails = () => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const { id } = useParams();
  const [internshipDetails, setInternshipDetails] = useState<internshipType>();
  const [isLoading, setIsLoading] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [existingInternshipDetails, setExistingInternshipDetails] = useState({
    id: 0,
    companyName: "",
    title: "",
    companyUrl: "",
    description: "",
    tags: [],
    skills: [],
    cutoff: 0,
    ctc: 0,
    duration: "",
    mode: "",
    location: "",
  });

  const fetchInternshipDetails = async () => {
    try {
      setIsLoading(true);
      const res = await fetchInternshipsById(id);
     
      setInternshipDetails(res.internship);
      if (res.internship) {
        setExistingInternshipDetails({
          id: res.internship.id,
          companyName: res.internship.companyName,
          title: res.internship.title,
          companyUrl: res.internship.companyUrl,
          description: res.internship.description,
          tags: res.internship.tags,
          skills: res.internship.skills,
          cutoff: res.internship.cutoff,
          ctc: res.internship.ctc,
          duration: res.internship.duration,
          mode: res.internship.mode,
          location: res.internship.location,
        });
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchInternshipDetails();
  }, []);

  if (isLoading) {
    return (
      <div className=" flex justify-center items-center min-h-[80vh]">
        <Loader />
      </div>
    );
  }

  const handleEdit = async () => {
    try {
      const res = await updateInternshipById(existingInternshipDetails);
      if (res.success === true) {
        toast.success("Edited successfully");
        setIsEdit(false);
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await deleteInternshipById(Number(id));
      if (res.success === true) {
        toast.success("Successfully deleted");
        navigate("/internships");
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className="flex  flex-col space-y-4 py-2">
      <div className="bg-gradient-to-r from-action to-blue-500 w-full h-[200px] rounded-lg relative mb-10">
        <img
          src={`https://img.logokit.com/${internshipDetails?.logoUrl}?token=pk_fr4c695c8a2bece7a74fb4`}
          alt=""
          className=" shadow-xl p-1 bg-white dark:bg-secondary w-15 h-15 md:w-24 md:h-24 absolute -bottom-8 md:-bottom-10 left-4 md:left-8 border border-neutral-200 dark:border-neutral-700 rounded-full object-cover"
        />
      </div>
      <div>
        <h3>{internshipDetails?.title}</h3>
        <p className="text-neutral-600 dark:text-neutral-200">
          {internshipDetails?.companyUrl}
        </p>
      </div>

      <div className="flex flex-col space-y-3 md:flex-row justify-between md:pr-10 ">
        <div className="basis-2/4 space-y-2">
          <div>
            <h3 className="">Description</h3>
            <span className="font-light text-neutral-700 dark:text-neutral-300">
              {internshipDetails?.description}
            </span>
          </div>
          <div className="space-y-2">
            <h3>Skills</h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {internshipDetails?.skills.map((skill, idx) => (
                <p
                  key={idx}
                  className="font-light text-center bg-neutral-200 dark:bg-neutral-700 min-w-[75px] p-1 rounded-lg"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="basis-2/4 flex justify-center ">
          <div className="border border-neutral-300 dark:border-neutral-700 h-fit rounded-lg max-w-[350px] flex flex-col px-2 py-3 space-y-3 ">
            <span className="flex">
              <MapPin size={25} strokeWidth={1} />
              {internshipDetails?.location}
            </span>
            <p className="font-light text-neutral-700 dark:text-neutral-300">
              Please send us your detailed CV to apply for this job
            </p>

            <span className="flex flex-col">
              <h3 className="flex items-center">
                {" "}
                <IndianRupee />
                {internshipDetails?.ctc}/month
              </h3>
              <span className="font-light text-sm">Monthly salary</span>
            </span>
            <p>Job related to</p>
            <span className="flex  items-center  space-x-2">
              {internshipDetails?.tags.map((tag, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-neutral-200 dark:bg-neutral-700 px-2  max-w-[150px] font-light rounded-lg text-center"
                  >
                    {tag}
                  </p>
                );
              })}
            </span>
            <div className="flex items-center gap-2">
              <div className="bg-neutral-200 dark:bg-neutral-700  p-1 rounded-lg w-fit">
                <GraduationCap strokeWidth={1} />
              </div>
              <p className="font-light">
                {" "}
                above {internshipDetails?.cutoff} CGPA in academics
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-neutral-200  dark:bg-neutral-700  p-1 rounded-lg w-fit">
                <Clock strokeWidth={1} />
              </div>
              <p className="font-light">
                {" "}
                {formatTimeSince(internshipDetails?.createdAt ?? "")}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-neutral-200 dark:bg-neutral-700 p-1 rounded-lg w-fit">
                <Globe strokeWidth={1} />
              </div>
              <p className="font-light"> {internshipDetails?.mode}</p>
            </div>
            {auth.role === "STUDENT" && (
              <button className="p-2 rounded-lg">Apply now</button>
            )}
            {auth.role === "PLACEMENTOFFICER" && (
              <div className="flex w-full space-x-3">
                <button
                  onClick={() => setIsEdit(true)}
                  className="w-full rounded-lg p-2 gap-3 flex justify-center items-center"
                >
                  <Edit2 size={18} /> Edit
                </button>
                <span
                  onClick={() => setIsDelete(true)}
                  className="w-full cursor-pointer hover:bg-red-300 active:bg-red-500 rounded-lg gap-3 bg-red-400 flex justify-center items-center text-white gap-2"
                >
                  <Trash size={18} /> Delete
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      {isDelete && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black/30 backdrop-blur-2xl"
          onClick={() => setIsDelete(false)}
        >
          <div className="flex flex-col bg-white dark:bg-secondary p-2 space-x-3 rounded-lg shadow-xl space-y-3">
            <p>Confirm deletion?</p>
            <div className="flex w-full space-x-2">
              <button className="w-full p-2 rounded-lg">Cancel</button>
              <span
                className="w-full p-2 rounded-lg cursor-pointer bg-red-500 text-center text-white"
                onClick={handleDelete}
              >
                Delete
              </span>
            </div>
          </div>
        </div>
      )}

      {isEdit && (
        <div className="fixed z-50 inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center" onClick={()=>setIsEdit(false)}>
          <div className="w-full max-w-lg md:max-w-full mx-2 bg-white dark:bg-secondary rounded-lg shadow-xl p-4 max-h-[90vh] md:max-h-[100vh] overflow-y-auto md:overscroll-y-none" onClick={(e)=>e.stopPropagation()}>
            <NewInternshipForm
              values={existingInternshipDetails}
              handleSubmit={handleEdit}
              setValues={setExistingInternshipDetails}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipsDetails;
