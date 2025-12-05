import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aisha — Creator",
      text: "Grew her podcast from 0 to 3k listeners in 90 days living here.",
    },
    {
      name: "Rohit — Founder",
      text: "Found his cofounder inside the villa and launched an MVP together.",
    },
    {
      name: "Maya — Designer",
      text: "Shipped client work faster thanks to focused days and peer support.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Meet your future tribe
          </h2>
          <p className="text-lg text-muted-foreground">
            Stories from builders who called this place home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-[var(--shadow-soft)] border border-border hover:shadow-[var(--shadow-strong)] transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground mb-4 leading-relaxed">{item.text}</p>
              <p className="font-semibold text-foreground">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
