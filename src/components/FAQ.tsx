import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can apply?",
      answer: "Early-stage founders, creators, students with startup projects, freelancers and curious hustlers who want to grow alongside like-minded people.",
    },
    {
      question: "How long is the stay?",
      answer: "Minimum 1 month. We run 3-month cohorts for onboarding and accountability to help you build meaningful connections.",
    },
    {
      question: "What about safety & parents?",
      answer: "Secure building with CCTV, verified residents, and formal receipts. We welcome family visits and are happy to address any concerns.",
    },
    {
      question: "What's included in the rent?",
      answer: "Furnished rooms, high-speed WiFi, utilities, access to coworking space, swimming pool, rooftop, and all community events.",
    },
    {
      question: "Is food included?",
      answer: "We offer two plans — with food (₹27,000/month) and without food (₹22,000/month). Choose what works best for you.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know before joining
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
