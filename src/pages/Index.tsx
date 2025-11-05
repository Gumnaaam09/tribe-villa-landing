import Hero from "@/components/Hero";
import About from "@/components/About";
import VillaShowcase from "@/components/VillaShowcase";
import Details from "@/components/Details";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <VillaShowcase />
      <Details />
      <CallToAction />
    </div>
  );
};

export default Index;
