import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <>
      {/* Meetup Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Upcoming Event</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Join the SideHustle Tribe Meetup
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              Before moving in, we&apos;re hosting a SideHustle Tribe Meetup — a casual gathering for all interested members to connect, learn more about the villa, and meet your potential tribe-mates in person.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-card rounded-xl p-6 border border-border">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Connect with</p>
                <p className="font-semibold text-foreground">Future Tribe-mates</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <MapPin className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Explore the</p>
                <p className="font-semibold text-foreground">Villa in Person</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Calendar className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Learn about</p>
                <p className="font-semibold text-foreground">Living Together</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              If you&apos;re excited to be part of this journey, click below to register your interest and get your exclusive invite to the meetup.
            </p>

            <Button variant="hero" size="lg" className="text-lg px-10">
              Join the Tribe Meetup →
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              [Google Form Link will be added here]
            </p>
          </div>
        </div>
      </section>

      {/* Interest Form Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Express Your Interest
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below to let us know you&apos;re interested in joining the first tribe
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 sm:p-10 shadow-[var(--shadow-soft)] border border-border">
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-2">Questions included in the form:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Are you okay with the rent? (Yes/No)</li>
                    <li>• Food preference: Veg / Non-Veg</li>
                    <li>• Will you be able to move in by 1st Dec? (Yes/No)</li>
                    <li>• If not, how soon can you move?</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-8 text-center border-2 border-dashed border-border">
                <p className="text-muted-foreground mb-4">
                  Google Form will be embedded here
                </p>
                <a 
                  href="#" 
                  className="text-primary hover:text-primary/80 font-semibold underline underline-offset-4 transition-colors"
                >
                  [Add Google Form Embed Code]
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
    </>
  );
};

export default CallToAction;
