import { type ReactNode } from "react";
import { Bookmark } from "lucide-react";
const InternshipCard = ({
  logo,
  companyName,
  duration,
  title,
  ctc,
  tags,
  location,
  mode
}: {
  logo: ReactNode;
  title: string;
  companyName: string;
  tags: string[];
  duration: string;
  location: string;
  ctc: string;
  mode:string
}) => {
  return (
    <div className="bg-white dark:bg-secondary rounded-lg hidden md:flex  flex-col  space-y-4 shadow-lg p-4  max-w-sm ">
      <span className="flex justify-between">
        <span className="border border-darkSecondary flex justify-center items-center rounded-full p-1">
          {logo}
        </span>
        <span className="font-light border flex justify-center items-center gap-2 p-1 min-w-[50px] border-neutral-200 rounded-lg">
          save <Bookmark strokeWidth={1} />
        </span>
      </span>
      <span className="flex items-center space-x-2">
        <p>{companyName}</p>
        <h4 className="font-light text-secondary">{duration}</h4>
      </span>
      <span className="flex flex-col">
        <h3>{title}</h3>
        <div className="grid grid-cols-3 gap-3">
          {tags.map((data, idx) => {
            return <span key={idx} className="text-[.8rem] font-normal flex justify-center items-center rounded-sm bg-neutral-200 dark:bg-neutral-800">{data}</span>;
          })}
        </div>
      </span>

      <div className="flex justify-between items-center border-t pt-1 border-darkSecondary dark:border-neutral-500 ">
        <span className="flex items-center space-x-2">
          <h4 className="font-semibold">{ctc}</h4>
          <h4 className="font-light text-secondary">{location}</h4>
        </span>

        <button disabled className="p-1 disabled:cursor-none rounded-sm">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default InternshipCard;
