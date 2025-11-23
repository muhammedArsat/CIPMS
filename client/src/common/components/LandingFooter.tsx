import Logo from "../../assets/Logo";

const LandingFooter = () => {
  return (
    <div className="bg-neutral-100 py-6 flex flex-col items-center space-y-4">
      <div className="flex flex-col items-center space-y-2">
        <Logo />
        <h4 className="font-semibold">Empowering Technical Education</h4>

        <div className="flex space-x-6 mt-2">
          <a href="/student-portal" className="text-action hover:underline">
            Student Portal
          </a>
          <a href="/faculty-login" className="text-action hover:underline">
            Faculty Login
          </a>
          <a href="/admin-dashboard" className="text-action hover:underline">
            Admin Dashboard
          </a>
          <a href="/support" className="text-action hover:underline">
            Support
          </a>
        </div>
        <p className="text-sm text-neutral-600">
          © 2025 Campus Internship and Placement Management System.
        </p>
      </div>
    </div>
  );
};

export default LandingFooter;
