import React, { useState } from "react";
import NewInternshipForm from "../components/NewInternshipForm";
import { Save } from "lucide-react";
import toast from "react-hot-toast";
import {
  createNewInternship,
  deleteInternshipById,
} from "../apis/internships.api";
export interface NewInternshipFormValues {
  companyName: string;
  title: string;
  companyUrl: string;
  description: string;

  tags: string[];
  skills: string[];

  cutoff: number;
  ctc: number;
  duration: string;
  mode: string;
  location: string;
}

const defaultNewInternshipFormValues: NewInternshipFormValues = {
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
};
const NewInternship = () => {
  const [newInternshipDetails, setNewInternshipDetails] = useState({});
  const handleSubmit = async (e: React.FormEvent) => {
    try {
  
      const res = await createNewInternship(newInternshipDetails);
      toast.success(res.message);
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col space-y-3">
      <span className="flex flex-col space-y-1">
        <h3>Create a new internship</h3>
        <p className="text-neutral-600 dark:text-neutral-300">
          Fill out the form below to post a new internship opportunity. Make
          sure to provide accurate details.
        </p>
      </span>

      <NewInternshipForm
        values={newInternshipDetails}
        handleSubmit={handleSubmit}
        setValues={setNewInternshipDetails}
      />
    </div>
  );
};

export default NewInternship;
