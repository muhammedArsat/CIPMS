import { useState, useRef, useEffect } from "react";

const tabList = ["Student", "Mentor", "Placement"];

const Ecosystem = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const tabRefs = [
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
  ];
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const ref = tabRefs[currentPage].current;
    if (ref) {
      setIndicatorStyle({
        left: ref.offsetLeft,
        width: ref.offsetWidth,
      });
    }
  }, [currentPage]);

  return (
    <div className="flex flex-col space-y-4 md:mx-20 my-2">
      <h2 className="text-center">An Unified ecosystem</h2>
      <div className="w-full flex justify-evenly items-center  relative">
        {tabList.map((tab, idx) => (
          <span
            key={tab}
            ref={tabRefs[idx]}
            className={`font-secondary md:text-lg font-light cursor-pointer ${
              currentPage === idx ? "text-action" : ""
            }`}
            onClick={() => setCurrentPage(idx)}
          >
            {tab}
          </span>
        ))}
        {/* Sliding indicator */}
        <div
          className="absolute bottom-0 h-1 bg-action rounded transition-all duration-300"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />
      </div>
      <div className="mt-4 text-center">
        {currentPage === 0
          ? "Student Page"
          : currentPage === 1
          ? "Faculty Page"
          : "Placement Page"}
      </div>
    </div>
  );
};

export default Ecosystem;
