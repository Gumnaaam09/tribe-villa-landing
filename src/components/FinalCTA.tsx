import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-background rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Users className="w-5 h-5 text-background" />
            <span className="text-background font-semibold">Join the First Tribe</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-background">
            Join the first-ever SideHustle Tribe
          </h2>

          <p className="text-xl sm:text-2xl text-background/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Where ambition meets community. Live better, build smarter, and grow faster together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-background text-primary hover:bg-background/90 shadow-[var(--shadow-strong)] text-lg px-10 group"
            >
              Join the Tribe
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-background bg-transparent text-background hover:bg-background hover:text-primary text-lg px-10"
            >
              Attend the Meetup
            </Button>
          </div>

          <p className="text-sm text-background/70 mt-8">
            Limited spots available for the first tribe
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
