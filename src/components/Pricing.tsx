import { Check } from "lucide-react";

const Pricing = () => {
  return (
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
  );
};

export default Pricing;
