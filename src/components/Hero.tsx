import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-villa.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="SideHustle Villa community collaborating" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-background leading-tight">
          Welcome to the Next Stage:<br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            The First Tribe
          </span>
          {" "}of SideHustle Villa
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-background/90 mb-8 max-w-3xl mx-auto font-light">
          Live, grow, and hustle together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="group">
            Join the Tribe
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="secondary" size="lg">
            Attend the Meetup
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
