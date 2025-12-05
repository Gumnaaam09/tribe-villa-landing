import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VillaShowcase from "@/components/VillaShowcase";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";
import Details from "@/components/Details";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <VillaShowcase />
      <Philosophy />
      <Testimonials />
      <Details />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
