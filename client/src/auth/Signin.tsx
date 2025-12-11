import { useEffect, useState } from "react";
import Logo from "../assets/Logo";
import LoginPoster from "../assets/loginPic.png";
import GoogleLogo from "../assets/googleLogo.svg";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import { useLocation } from "react-router";
import { signIn } from "./apis/auth.api";

const Signin = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //function to toggle visibility of the password
  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  //function to change the email and password
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //function to signin
  const handleSignIn = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signIn(formData);
      toast.success(`${res.message}`);
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("error") === "oauth_failed") {
      toast.error("Google sign-in failed!");
    }
  }, [location]);

  const handleOauth = () => {
    try {
      window.location.href = `${import.meta.env.VITE_SERVER_URL}/auth/google`;
    } catch (err) {
      toast.error("Server error!!");
    }
  };
  return (
    <div className="flex min-h-svh p-2 sm:p-0 justify-center items-center">
      <div className=" lg:basis-1/3 flex justify-center items-center flex-col space-y-2 shadow-2xl md:shadow-none p-2 rounded-lg">
        <span className="absolute top-0 left-0">
          <Logo />
        </span>
        <h2 className="font-semibold">Welcome Back</h2>
        <p className="text-secondary dark:text-darkSecondary text-center">
          Enter your email and password to access your account
        </p>
        <form
          onSubmit={handleSignIn}
          className="w-full sm:w-[80%] flex flex-col space-y-4"
        >
          <div className="input-container w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="input-base"
              placeholder="E.g youremail@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Mail strokeWidth={1} className="absolute top-11 left-2" />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-base"
              placeholder="E.g @yourPassword"
              required
            />
            <Lock strokeWidth={1} className=" absolute top-11 left-2" />
            <span
              className=" cursor-pointer absolute top-11 right-2"
              onClick={handlePasswordVisibility}
            >
              {isPasswordVisible ? (
                <EyeOff strokeWidth={1} />
              ) : (
                <Eye strokeWidth={1} />
              )}
            </span>
          </div>
          <button type="submit" className="p-2 rounded-lg">
            Sign In
          </button>
        </form>
        <span className="font-light">or</span>
        <span
          className="flex justify-center items-center gap-4 w-full md:w-[80%] rounded-lg p-2 cursor-pointer border border-darkSecondary dark:border-secondary hover:bg-neutral-200 active:bg-neutral-300 dark:hover:bg-neutral-800 dark:active:bg-neutral-700"
          onClick={handleOauth}
        >
          <img src={GoogleLogo} alt="google logo" className="w-8 h-8" />
          sign in with google
        </span>
      </div>
      <div className="hidden space-y-4 md:flex sm:flex-col p-2 justify-center items-center basis-1/2 lg:basis-2/3 bg-action min-h-svh ">
        <h2 className="text-white text-center">
          Effortlessly manage your internships and placements{" "}
          <p className="text-neutral-200 text-center">
            Signin to access your CIPMS dashboard to manage your placement
          </p>
        </h2>
        <div className="relative">
          <img
            src={LoginPoster}
            alt="Login Poster"
            className="sm:max-w-sm md:max-w-lg xl:max-w-3xl rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
