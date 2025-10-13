import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import businessImg from "@/assets/solution-business.jpg";
import individualImg from "@/assets/solution-individual.jpg";
import partnersImg from "@/assets/solution-partners.jpg";

const solutions = [
  {
    image: businessImg,
    category: "For Businesses",
    title: "bEBA Logistics & AI",
    description: "End-to-end last-mile delivery solution powered by AI fleet management. Perfect for e-commerce, corporates, and e-mobility partners seeking scalable operations.",
    features: [
      "AI-powered route optimization",
      "Real-time fleet tracking",
      "Scalable without vehicle ownership",
      "Significant cost reduction"
    ],
    cta: "Scale Your Business",
    highlight: true,
  },
  {
    image: individualImg,
    category: "For Individuals",
    title: "E-Bike Ownership",
    description: "Access premium electric bikes through affordable purchase or 0% interest lease-to-own. Ideal for commuters, riders, fitness enthusiasts, and adventurers.",
    features: [
      "The Adventurer: Ksh 15/80km range",
      "0% interest financing available",
      "Lightweight & easy maintenance",
      "Carries up to 50kg loads"
    ],
    cta: "Get Your E-Bike",
    highlight: false,
  },
  {
    image: partnersImg,
    category: "For Partners",
    title: "Ecosystem Integration",
    description: "Join our growing network of suppliers, technicians, hotels, and service providers connected to thousands of active riders and businesses.",
    features: [
      "Access to vetted rider base",
      "Favorable contract terms",
      "Consistent demand for services",
      "Growing market opportunity"
    ],
    cta: "Become a Partner",
    highlight: false,
  },
];

export const SolutionsSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-4">
            Complete Solutions for Every Need
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto px-4">
            Whether you're a business scaling logistics, an individual seeking mobility, or a partner 
            looking to grow—we have the right solution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className={`border-2 flex flex-col overflow-hidden ${
                solution.highlight ? 'border-primary' : ''
              }`}
            >
              <img 
                src={solution.image} 
                alt={solution.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
                  {solution.category}
                </div>
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={solution.highlight ? "default" : "outline"} 
                  className="w-full mt-auto"
                >
                  {solution.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
