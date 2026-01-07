import {
  Activity,
  Briefcase,
  Building2,
  CheckCircle,
  Clock,
  FileText,
  UserCheck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { placementDashboardDetails } from "../apis/Dashboard.api";

const PlacementDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState({
    totalInternships: 0,
    completedStudents: 0,
   
    totalApplications: 0,
    approvedApplications: 0,
    pendingApprovals: 0,
    companyCount: 0,
  });

  const fetchDashboardDetails = async () => {
    try {
      setIsLoading(true);
      const res = await placementDashboardDetails();
      if (res.success === true) {
        console.log(res)
        setStats({
          totalInternships: res.totalInternships,
          completedStudents: res.completedStudents,
          totalApplications: res.applications,
          approvedApplications: res.approvedApplication,
          pendingApprovals: res.pendingApprovals,
          companyCount: res.companyCount
        });
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardDetails();
  }, []);
  const dashboardStats = [
    {
      label: "Total Internships",
      key: "totalInternships",
      icon: <Briefcase className="bg-blue-800 rounded-lg p-1" color="white" />,
      quote: "Opportunities Await",
    },
    {
      label: "Active Internships",
      key: "approvedApplications",
      icon: <Activity className="bg-green-800 rounded-lg p-1" color="white" />,
      quote: "Stay Engaged",
    },
    {
      label: "Applications",
      key: "totalApplications",
      icon: <FileText className="bg-yellow-600 rounded-lg p-1" color="white" />,
      quote: "Keep Applying",
    },
    {
      label: "Pending Approvals",
      key: "pendingApprovals",
      icon: <Clock className="bg-orange-600 rounded-lg p-1" color="white" />,
      quote: "Review in Progress",
    },
    {
      label: "Completed Students",
      key: "completedStudents",
      icon: (
        <UserCheck className="bg-purple-700 rounded-lg p-1" color="white" />
      ),
      quote: "Success Stories",
    },
    {
      label: "Companies",
      key: "companyCount",
      icon: <Building2 className="bg-pink-700 rounded-lg p-1" color="white" />,
      quote: "Partners in Growth",
    },
  ];
  return (
    <div className="flex flex-col space-y-3">
      <h3>Dashboard</h3>
      <p className="font-light">
        Welcome to your Placement Dashboard — track internship postings, manage
        applications, and monitor student progress all in one place.
      </p>

      {/* Container for showing statistics */}
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {dashboardStats.map((stat) => {
          return (
            <div
              key={stat.key}
              className="shadow-xl w-full  md:min-w-[175px] flex flex-col space-y-2 rounded-lg  p-2 dark:bg-secondary"
            >
              {stat.icon}
              <p>{stat.label}</p>
              <div className="flex flex-col">
                <span className="text-xl">{stats[stat.key]} </span>
                <span className="font-light text-[12px]">{stat.quote}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlacementDashboard;
