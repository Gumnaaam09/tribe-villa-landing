import { Heart, AlertCircle, Check } from "lucide-react";

const Details = () => {
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
    <>
      {/* Considerations Section */}
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

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Pricing
          </h2>

          <div className="max-w-5xl mx-auto">
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* With Food */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border-2 border-primary shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-2 mb-4">
                  <Check className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">With Food</h3>
                </div>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-primary">₹____</span>
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
                  <span className="text-5xl font-bold text-foreground">₹____</span>
                  <span className="text-xl text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">
                  Includes utilities and amenities
                </p>
              </div>
            </div>

            {/* Price Breakdown Table */}
            <div className="bg-muted rounded-2xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Price Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 text-foreground font-semibold">Component</th>
                      <th className="text-right py-4 px-4 text-foreground font-semibold">Cost (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-4 px-4 text-muted-foreground">Rent</td>
                      <td className="py-4 px-4 text-right text-muted-foreground">_____</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-4 px-4 text-muted-foreground">Food</td>
                      <td className="py-4 px-4 text-right text-muted-foreground">_____</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-4 px-4 text-muted-foreground">Utilities (Wi-Fi, Power, Water)</td>
                      <td className="py-4 px-4 text-right text-muted-foreground">_____</td>
                    </tr>
                    <tr className="font-semibold">
                      <td className="py-4 px-4 text-foreground">Total</td>
                      <td className="py-4 px-4 text-right text-primary text-lg">_____</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
