import InternshipCard from "./components/InternshipCard";

const Internships = () => {
  return (
    <div className="flex flex-col space-y-4">
      <span>
        <h3>Internships</h3>
        <p>
          Kickstart your career with hands-on experience. Explore the latest
          internship opportunities from top companies and apply today!
        </p>
      </span>

      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 ">
        <InternshipCard
          logo="https://img.logokit.com/google.com?token=pk_fr4c695c8a2bece7a74fb4"
          title="Junior Developer"
          companyName="Google"
          tags={["Fulltime", "Remote", "Fullstack"]}
          duration="6 months"
          location="Bengaluru"
          ctc="1 Lakh"
          mode="Offline"
        />

        <InternshipCard
          logo="https://img.logokit.com/google.com?token=pk_fr4c695c8a2bece7a74fb4"
          title="Junior Developer"
          companyName="Google"
          tags={["Fulltime", "Remote", "Fullstack"]}
          duration="6 months"
          location="Bengaluru"
          ctc="1 Lakh"
          mode="Offline"
        />

        <InternshipCard
          logo="https://img.logo.dev/cdw.com?token=pk_R5aWp096SYKfSM8nQRo8xA"
          title="Junior Developer"
          companyName="CDW"
          tags={["Fulltime", "Remote", "Fullstack"]}
          duration="6 months"
          location="Chennai"
          ctc="20k"
          mode="Offline"
        />

        <InternshipCard
          logo="https://img.logo.dev/hashedin.com?token=pk_R5aWp096SYKfSM8nQRo8xA"
        
          title="Junior Developer"
          companyName="Hashed in"
          tags={["Fulltime", "Remote", "Fullstack"]}
          duration="6 months"
          location="Bengaluru"
          ctc="20k"
          mode="Offline"
        />
      </div>
    </div>
  );
};

export default Internships;
