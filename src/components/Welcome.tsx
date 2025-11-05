const Welcome = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
            Welcome to SideHustle Villa
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-center mb-12">
            Welcome to SideHustle Villa — a home for ambitious creators, founders, and dreamers who believe growth happens faster together. The first Tribe is forming, bringing together people who want to live with purpose, collaborate deeply, and push each other toward their next stage of success. Every idea, meal, and moment here is designed to help you grow — personally and professionally.
          </p>

          <div className="bg-card rounded-2xl p-8 sm:p-10 shadow-[var(--shadow-soft)] border border-border">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              About the First Tribe
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Tribe isn&apos;t just a group — it&apos;s a micro-community of like-minded builders who live, learn, and support one another. The First Tribe marks the beginning of SideHustle Villa&apos;s vision — to build spaces where collaboration and creativity become a lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
