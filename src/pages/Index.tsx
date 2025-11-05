import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import VillaShowcase from "@/components/VillaShowcase";
import Considerations from "@/components/Considerations";
import Pricing from "@/components/Pricing";
import Meetup from "@/components/Meetup";
import InterestForm from "@/components/InterestForm";
import TribeSystem from "@/components/TribeSystem";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Welcome />
      <VillaShowcase />
      <Considerations />
      <Pricing />
      <Meetup />
      <InterestForm />
      <TribeSystem />
      <FinalCTA />
    </div>
  );
};

export default Index;
