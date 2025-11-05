import { Users, Target, Building2 } from "lucide-react";

const About = () => {
  const roles = [
    {
      icon: Users,
      title: "What is a Tribe?",
      description: "A Tribe is a close-knit group of individuals who live and grow together — supporting one another's goals, building projects, and creating shared success stories.",
      color: "primary"
    },
    {
      icon: Target,
      title: "What is a Tribe Manager?",
      description: "The lead in 10 — a person who checks progress, suggests growth plans, and organizes events and sessions to keep the community thriving.",
      color: "secondary"
    },
    {
      icon: Building2,
      title: "What is a Villa Manager?",
      description: "A representative from SideHustle Villa who ensures smooth operations and acts as the bridge between the company and the residents.",
      color: "accent"
    }
  ];

  return (
    <>
      {/* Welcome Section */}
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

      {/* Tribe System Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Understanding the Tribe System
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Learn about the unique structure that makes SideHustle Villa a thriving community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border hover:shadow-[var(--shadow-strong)] transition-all duration-300"
                >
                  <div className={`inline-flex p-4 rounded-xl mb-6 ${
                    role.color === 'primary' ? 'bg-primary/10' :
                    role.color === 'secondary' ? 'bg-secondary/10' :
                    'bg-accent/10'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      role.color === 'primary' ? 'text-primary' :
                      role.color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {role.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
