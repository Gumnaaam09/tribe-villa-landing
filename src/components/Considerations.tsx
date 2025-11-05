import { Heart, AlertCircle } from "lucide-react";

const Considerations = () => {
  const loves = [
    "Networking & Collaboration Opportunities",
    "Shared Growth and Learning",
    "Affordable, Modern Living",
    "Built-in Community Support",
  ];

  const considerations = [
    "Limited Privacy",
    "Shared Responsibilities",
    "Fixed Move-In Date",
    "Community-First Lifestyle",
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          What to Expect
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* What You'll Love */}
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">What You&apos;ll Love</h3>
            </div>
            <ul className="space-y-4">
              {loves.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to Keep in Mind */}
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <AlertCircle className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">What to Keep in Mind</h3>
            </div>
            <ul className="space-y-4">
              {considerations.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Considerations;
