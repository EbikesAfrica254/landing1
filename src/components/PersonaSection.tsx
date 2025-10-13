import { Card } from "@/components/ui/card";
import { Package, Bike, Users, Building2, Heart, Palmtree, Network, Wrench } from "lucide-react";

const personas = [
  {
    icon: Package,
    title: "E-commerce Businesses",
    description: "Affordable, scalable last-mile delivery with AI-powered fleet management",
    value: "Cut operational costs and scale without managing vehicle fleets",
    cta: "Optimize Logistics",
  },
  {
    icon: Bike,
    title: "Delivery Riders",
    description: "Access to brand new e-bikes on 0% interest lease-to-own",
    value: "Pathway to entrepreneurship with stable work opportunities",
    cta: "Start Earning",
  },
  {
    icon: Users,
    title: "Commuters",
    description: "Sustainable mobility at Ksh 15 for 80km range",
    value: "Affordable alternative to cars and public transport",
    cta: "Go Electric",
  },
  {
    icon: Building2,
    title: "Corporate Mobility",
    description: "Reduce staff transport costs and boost field agent productivity",
    value: "Cut fuel and maintenance expenses with e-bike solutions",
    cta: "Empower Your Team",
  },
  {
    icon: Heart,
    title: "Fitness & Leisure",
    description: "Lightweight bikes for exercise and local exploration",
    value: "Easy to maintain, perfect for light exercise regimen",
    cta: "Explore More",
  },
  {
    icon: Palmtree,
    title: "Hotels & Adventures",
    description: "Durable e-bikes carrying 50kg loads for guest activities",
    value: "Expand offerings with easy-to-repair commercial rentals",
    cta: "Enhance Experiences",
  },
  {
    icon: Network,
    title: "E-mobility Partners",
    description: "Leverage AI-driven fleet management and lease-to-own models",
    value: "Scalable operational framework for last-mile logistics",
    cta: "Partner With Us",
  },
  {
    icon: Wrench,
    title: "Suppliers & Services",
    description: "Connect with growing ecosystem of e-bike riders",
    value: "Access financially engaged customer base needing parts and maintenance",
    cta: "Join Network",
  },
];

export const PersonaSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-4">
            Who We Serve
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto px-4">
            From individual commuters to large enterprises, we provide tailored electric mobility solutions 
            that address your specific needs and challenges
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {personas.map((persona, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-md transition-shadow cursor-pointer group border-2 flex flex-col"
            >
              <div className="mb-4 inline-flex p-3 bg-primary w-fit">
                <persona.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{persona.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{persona.description}</p>
              <div className="mt-auto pt-4 border-t border-border">
                <p className="text-xs font-semibold text-primary mb-3">{persona.value}</p>
                <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  {persona.cta} →
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
