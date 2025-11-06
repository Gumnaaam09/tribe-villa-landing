import { Heart, Check } from "lucide-react";

const Details = () => {
  const loves = [
    "Networking & Collaboration Opportunities",
    "Shared Growth and Learning",
    "Affordable, Modern Living",
    "Built-in Community Support",
  ];

  return (
    <>
      {/* What You'll Love Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Pricing
          </h2>

          <div className="max-w-5xl mx-auto">
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* With Food */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border-2 border-primary shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-2 mb-4">
                  <Check className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">With Food (Veg)</h3>
                </div>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-primary">₹27,000</span>
                  <span className="text-xl text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">
                  Includes all meals, utilities, and amenities
                </p>
              </div>

              {/* Without Food */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-[var(--shadow-soft)]">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Without Food</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-foreground">₹22,000</span>
                  <span className="text-xl text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">
                  Includes utilities and amenities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
