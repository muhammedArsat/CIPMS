import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface PaginationType {
  page: number;
  totalPage: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Pagination = ({ page, totalPage,onPrevious,onNext }: PaginationType) => {
 
  return (
    <div className="flex justify-center items-center gap-3 md:pl-52">
      <ChevronLeft onClick={onPrevious} className="bg-neutral-300 dark:bg-neutral-700 rounded-full hover:cursor-pointer p-1" />
      {page}/{totalPage}
      <ChevronRight onClick={onNext} className="bg-neutral-300 dark:bg-neutral-700 rounded-full hover:cursor-pointer p-1" />
    </div>
  );
};

export default Pagination;
