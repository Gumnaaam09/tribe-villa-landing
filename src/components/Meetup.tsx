import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin } from "lucide-react";

const Meetup = () => {
  return (
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
  );
};

export default Meetup;
