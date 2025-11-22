import Logo from "../../assets/Logo";

const LandingHeader = () => {
  return (
    <div className="flex justify-between py-4 md:px-10 mb-2 mx-3 border-b border-neutral-300">
      <Logo />
      <div className="flex justify-center items-center space-x-4">
        <button className="min-w-20 font-primary p-2 border rounded-md border-neutral-600 hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer">Sign Up</button>
        <button className="min-w-20 p-2 text-white font-primary  rounded-md bg-blue-500 cursor-pointer hover:bg-blue-400 active:bg-blue-600">Sign In</button>
      </div>
    </div>
  );
};

export default LandingHeader;
