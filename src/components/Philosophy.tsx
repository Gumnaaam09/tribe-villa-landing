import { Users, Lightbulb, Target } from "lucide-react";
import philosophyImage from "@/assets/community-event.jpg";

const Philosophy = () => {
  const bullets = [
    {
      icon: Users,
      title: "Collaboration beats isolation",
      text: "Hard problems become solvable when a group digs in together.",
    },
    {
      icon: Lightbulb,
      title: "Design for creation",
      text: "Every corner is intentionally built to ship ideas — not just to sleep.",
    },
    {
      icon: Target,
      title: "Extreme accountability",
      text: "Small rituals, big results. Daily standups, weekly demos.",
    },
  ];

  return (
    <section id="philosophy" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Philosophy — why we exist
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe environment matters more than talent. When you live among builders, 
              your habits change, your ideas grow, and your network becomes your biggest asset. 
              Side Hustle Villa exists to make ambition the default.
            </p>

            <div className="space-y-6">
              {bullets.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
            <img 
              src={philosophyImage} 
              alt="Community collaboration" 
              className="w-full h-80 lg:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
