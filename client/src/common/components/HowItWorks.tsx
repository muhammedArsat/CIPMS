import HowItWorkCard from "./HowItWorkCard";
import { User,Link,BriefcaseBusinessIcon } from "lucide-react";
const HowItWorks = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-neutral-50 dark:bg-neutral-950 mt-24 md:m-10 p-4 space-y-3">
      <p className="font-semibold">How it work</p>
      <h2>Let's How CIPMS works</h2>
      <p>The steps will help you to track your jobs</p>
    <div className="flex flex-col md:flex-row md:justify-center md:px-10 md:items-center w-full md:space-x-16">
        <HowItWorkCard image={<User strokeWidth={1}/>} title="Create your account" desc="First step to find job or internship by register your college email" number="1"/>
        <HowItWorkCard image={<Link strokeWidth={1}/>} title="Link your portfolio" desc="Update your profile to make job apply at one click" number="2"/>
        <HowItWorkCard image={<BriefcaseBusinessIcon strokeWidth={1}/>}title="Let's start find your job" desc="Start finding a job that's suits your skill set" number="3"/>

    </div>

    </div>
  );
};

export default HowItWorks;
