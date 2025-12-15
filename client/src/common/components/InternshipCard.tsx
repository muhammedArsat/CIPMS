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
  mode,
}: {
  logo: string;
  title: string;
  companyName: string;
  tags: string[];
  duration: string;
  location: string;
  ctc: string;
  mode: string;
}) => {
  return (
    <div className="w-full md:max-w-sm rounded-lg shadow-lg px-2 py-2  dark:bg-secondary">
      {/* Top section  */}
      <div className="flex justify-between items-center  ">
        <span className="flex items-center space-x-1">
          <img
            src={logo}
            alt=""
            className="w-10 h-10 rounded-full object-cover "
          />
          <p>{companyName}</p>
        </span>

        <span className="font-light border border-neutral-400 dark:border-neutral-700 p-1 rounded-md flex justify-center gap-2 cursor-pointer active:bg-neutral-100 dark:active:bg-neutral-700">
          Save <Bookmark strokeWidth={1} />
        </span>
      </div>
      {/* middle section  */}
      <div className="px-2 py-1 flex flex-col space-y-1 mt-4">
        <span className="flex space-x-2 items-center ">
          <p>Posted</p>
          <text className="text-sm font-secondary font-light text-neutral-700 dark:text-neutral-400">
            1 hour ago
          </text>
        </span>
        <h3 className="">{title}</h3>
        <div className="flex items-center space-x-4 mt-1">
          {tags.map((tag, idx) => {
            return (
              <span
                key={idx}
                className="font-light text-sm bg-neutral-200 dark:bg-neutral-700 px-2 rounded-sm"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
      {/* Bottom section */}
      <div className="border-t border-neutral-200 dark:border-neutral-700 px-2 pt-4 mt-3 w-full flex just-between">
        <div className="flex flex-col w-full ">
          <span>{ctc}/month</span>
          <span className="text-sm font-light">{mode}</span>
        </div>
        <button className="w-[175px] rounded-lg">Apply Now</button>
      </div>
    </div>
  );
};

export default InternshipCard;
