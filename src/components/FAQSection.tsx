import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the lease-to-own financing work?",
    answer: "Our 0% interest financing allows you to acquire an electric bike through affordable monthly payments. After completing your payment plan, you own the bike outright. No hidden fees, no interest charges."
  },
  {
    question: "What kind of training and support do you provide?",
    answer: "We offer comprehensive training programs for all riders, covering bike operation, maintenance basics, safety protocols, and route optimization. Business customers receive additional training on fleet management tools and analytics."
  },
  {
    question: "What areas do you currently serve?",
    answer: "We currently operate in 15 cities across Kenya, Nigeria, Ghana, and South Africa, with plans to expand to more African cities throughout 2024. Contact us to see if we serve your area."
  },
  {
    question: "How do I maintain the electric bikes?",
    answer: "We provide regular maintenance support through our network of trained technicians. Fleet customers get predictive maintenance alerts through our dashboard, and all bikes come with a comprehensive warranty."
  },
  {
    question: "Can I integrate your fleet management with my existing systems?",
    answer: "Yes! Our Enterprise plan includes API access for seamless integration with your existing logistics, HR, and accounting systems. Our technical team will work with you to ensure smooth implementation."
  },
  {
    question: "What happens if a bike needs repairs?",
    answer: "All our bikes come with warranty coverage. We have a network of certified technicians across our service areas who can perform repairs quickly. Fleet customers get priority service with loaner bikes available during repairs."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our electric mobility solutions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
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
