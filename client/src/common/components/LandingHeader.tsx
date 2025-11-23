import { useNavigate } from "react-router";
import Logo from "../../assets/Logo";

const LandingHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between py-4 md:px-10 mb-2 mx-3 border-b border-neutral-300">
      <Logo />
      <div className="flex justify-center items-center space-x-4">
        {/* <span className="font-light min-w-20 font-primary p-2 border rounded-md border-neutral-600 hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer" onClick={()=> navigate("/signup")}>Sign Up</span> */}
        <button className="min-w-20 p-2 text-white font-primary  rounded-md cursor-pointer bg-action hover:bg-hover active:bg-active" onClick={()=>navigate("/signin")}>Sign In</button>
      </div>
    </div>
  );
};

export default LandingHeader;
