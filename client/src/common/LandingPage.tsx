import Ecosystem from "./components/Ecosystem";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import LandingFooter from "./components/LandingFooter";
import LandingHeader from "./components/LandingHeader";
const LandingPage = () => {
  return (
    <div>
      <LandingHeader />
      <HeroSection />
      <HowItWorks />
      <Ecosystem />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
