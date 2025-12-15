import NotFoundLogo from "../assets/404-logo.svg";
const NotFound = () => {
  return (
    <div className="min-h-screen flex  flex-col justify-center items-center">
      <h1>404 Page Not found!</h1>
      <img src={NotFoundLogo} alt="Not found" className="max-w-sm" />
    </div>
  );
};

export default NotFound;
