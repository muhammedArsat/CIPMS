import type { ReactNode } from "react";

const HowItWorkCard = ({
  image,
  title,
  desc,
  number,
}: {
  image: ReactNode;
  title: string;
  desc: string;
  number: string;
}) => {
  return (
    <div className="md:min-w-sm h-[200px] hover:scale-105 transition duration-300 bg-white dark:bg-neutral-800 shadow-xl flex justify-center items-center flex-col border border-neutral-300 p-2">
      <div className="flex justify-center items-center relative">
        <span className="border rounded-full p-3 relative">
          {image}
          <span className="absolute -top-1 -right-1 bg-neutral-200 dark:bg-neutral-800 p-1 w-4 h-4 rounded-full text-[13px] flex justify-center items-center">
            {number}
          </span>
        </span>
      </div>
      <h3 className="text-center font-semibold ">{title}</h3>
      <p className="text-center">{desc}</p>
    </div>
  );
};

export default HowItWorkCard;
