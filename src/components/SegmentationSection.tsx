import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Package, Bike, Wrench, ShoppingBag } from "lucide-react";

const segments = [
  {
    icon: Package,
    title: "Business Logistics",
    description: "Scale your delivery operations with our AI-powered fleet management",
    cta: "Optimize My Deliveries",
  },
  {
    icon: Bike,
    title: "Become a Rider",
    description: "Join our network and earn with flexible electric mobility",
    cta: "Start Riding",
  },
  {
    icon: ShoppingBag,
    title: "Buy an E-Bike",
    description: "Own your electric future with our range of premium e-bikes",
    cta: "Browse E-Bikes",
  },
  {
    icon: Wrench,
    title: "Technician Network",
    description: "Build a career maintaining Africa's electric mobility infrastructure",
    cta: "Join as Technician",
  },
];

export const SegmentationSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How can we power your journey today?
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Select your path to electric mobility
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {segments.map((segment, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-md transition-shadow cursor-pointer group border-2"
            >
              <div className="mb-4 inline-flex p-3 bg-primary">
                <segment.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{segment.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{segment.description}</p>
              <Button variant="ghost" className="w-full">
                {segment.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
