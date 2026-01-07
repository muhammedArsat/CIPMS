import {
  Building2,
  Link,
  GraduationCap,
  FileText,
  Tags,
  Sparkles,
  TrendingDown,
  DollarSign,
  Hourglass,
  Globe,
  MapPin,
  Save,
} from "lucide-react";
import type React from "react";

interface Props {
  values: { [key: string]: any };
  setValues: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
  handleSubmit: () => void;
}

const NewInternshipForm = ({ values, setValues, handleSubmit }: Props) => {
  const internshipDetails = [
    {
      label: "Company Name",
      name: "companyName",
      icon: <Building2 size={18} />,
      placeholder: "Enter company name",
    },
    {
      label: "Company URL",
      name: "companyUrl",
      icon: <Link size={18} />,
      placeholder: "https://company.com",
    },
    {
      label: "Internship Title",
      name: "title",
      icon: <GraduationCap size={18} />,
      placeholder: "Software Intern",
    },
    {
      label: "Description",
      name: "description",
      icon: <FileText size={18} />,
      placeholder: "Describe role",
    },
    {
      label: "Tags",
      name: "tags",
      icon: <Tags size={18} />,
      placeholder: "Remote, Fullstack",
    },
    {
      label: "Skills",
      name: "skills",
      icon: <Sparkles size={18} />,
      placeholder: "React, Node.js",
    },
    {
      label: "Cutoff",
      name: "cutoff",
      icon: <TrendingDown size={18} />,
      placeholder: "CGPA",
    },
    {
      label: "CTC",
      name: "ctc",
      icon: <DollarSign size={18} />,
      placeholder: "20000",
    },
    {
      label: "Duration",
      name: "duration",
      icon: <Hourglass size={18} />,
      placeholder: "6 months",
    },
    {
      label: "Mode",
      name: "mode",
      icon: <Globe size={18} />,
      placeholder: "Remote / Onsite",
    },
    {
      label: "Location",
      name: "location",
      icon: <MapPin size={18} />,
      placeholder: "City / Remote",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "tags" || name === "skills") {
      setValues((prev) => ({
        ...prev,
        [name]: value.split(",").map((v) => v.trim()),
      }));
    } else if (name === "cutoff" || name === "ctc") {
      setValues((prev) => ({
        ...prev,
        [name]: value === "" ? "" : Number(value),
      }));
    } else {
      setValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {internshipDetails.map((field, idx) => (
        <div key={idx} className="relative flex flex-col">
          <label className="mb-1 font-medium">{field.label}</label>
          <input
            className="input-base pl-8"
            name={field.name}
            required
            placeholder={field.placeholder}
            value={
              Array.isArray(values[field.name])
                ? values[field.name].join(", ")
                : values[field.name] ?? ""
            }
            onChange={handleChange}
          />
          <span className="absolute left-2 top-11">{field.icon}</span>
        </div>
      ))}

      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 rounded-lg flex gap-2 items-center"
        >
          <Save size={18} /> Save Changes
        </button>
      </div>
    </form>
  );
};

export default NewInternshipForm;
