import {
  BriefcaseBusiness,
  MapPin,
  Navigation,
  ArrowRight,
} from "lucide-react";
import googleLogo from "../../assets/googleLogo.svg";
const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center md:px-10 min-h-[60vh] ">
      <div className="basis-2/4 space-y-2 flex flex-col items-center justify-center pl-8">
        <h1>Bridge the Gap Between Campus Learning and Industry Success.</h1>
        <h3>
          Stop chasing signatures and digging through WhatsApp groups. CIPMS
          centralizes internships, placement tracking, and approvals in one
          seamless digital hub.
        </h3>
        <div className="flex justify-start items-center  w-full">
          <button className=" flex justify-between items-center gap-4 min-w-20 p-2 text-lg tracking-wide text-white font-primary  rounded-full px-4 bg-blue-500 cursor-pointer hover:bg-blue-400 active:bg-blue-600">
            Get started
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="basis-2/4 flex justify-center items-center relative ">
        <div className="bg-white shadow-2xl min-w-[20rem] flex space-y-4 flex-col py-4 px-4 ">
          <h3 className="text-center">Start find a job</h3>
          <div className="relative">
            <BriefcaseBusiness
              className="absolute top-2 left-1"
              strokeWidth={1}
            />

            <input
              type="text"
              disabled
              className="border-neutral-400 border  pl-9 p-2 rounded-lg"
              placeholder="Job Role"
            />
          </div>
          <div className="relative">
            <MapPin className="absolute top-2 left-2" strokeWidth={1} />
            <input
              type="text"
              disabled
              className="border-neutral-400 border pl-9 p-2 rounded-lg"
              placeholder="Location"
            />
          </div>
          <div className="relative">
            <Navigation className="absolute top-2 left-2" strokeWidth={1} />

            <input
              type="text"
              disabled
              className="border-neutral-400 border pl-9 p-2 rounded-lg"
              placeholder="Distance"
            />
          </div>

          <span className=" text-center min-w-20 p-2 text-white font-primary  rounded-md bg-action ">
            Apply Now
          </span>
        </div>
        <div className="absolute  hover:scale-105 transition duration-300 hover:shadow-xl space-y-3 bg-white shadow-lg p-4 -bottom-20 md:-bottom-10  left-0 md:left-4 rotate-7 md:-rotate-7 ">
          <div className="flex justify-between items-center space-x-4">
            <img src={googleLogo} alt="google" className="w-7 h-7" />
            <span>
              <h4> Junior Ui Designer</h4>
              <p>Google.inc - Bengaluru, India</p>
            </span>
          </div>

          <span className="bg-green-900 text-white text-[13px] p-1 ">
            Approved
          </span>
        </div>

        <div className="bg-white hover:scale-105 transition duration-300 hover:shadow-xl  hidden md:flex  flex-col -rotate-8 md:rotate-8 space-y-4 shadow-lg p-4 md:top-0   absolute md:right-5 ">
          <span className="font-light flex justify-between items-center w-full ">
            <img src={googleLogo} alt="google" className="w-7 h-7" />
            15 days ago
          </span>
          <div>
            <h4> Junior Ui Designer</h4>
            <p>Google.inc - Bengaluru, India</p>
          </div>
          <div className="flex justify-start items-center w-full space-x-4">
            <span className="bg-neutral-200 p-1 font-secondary font-light text-[12px]">
              Remote
            </span>
            <span className="bg-neutral-200 p-1 font-secondary font-light text-[12px]">
              Fulltime
            </span>

            <span className="bg-neutral-200 p-1 font-secondary font-light text-[12px]">
              Designer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
