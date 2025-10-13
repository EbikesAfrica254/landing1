import { Card } from "@/components/ui/card";
import { TrendingDown, Zap, Users, Award } from "lucide-react";

const valueProps = [
  {
    icon: TrendingDown,
    title: "Reduce Costs",
    description: "Cut operational expenses by up to 60% compared to traditional fuel-powered vehicles. Our electric bikes cost just Ksh 15 for 80km of range.",
    stat: "60% Savings",
  },
  {
    icon: Zap,
    title: "Scale Seamlessly",
    description: "AI-powered fleet management (bEBA AI) enables businesses to scale delivery operations without the complexity of managing vehicle fleets.",
    stat: "Zero Fleet Hassle",
  },
  {
    icon: Users,
    title: "Empower People",
    description: "Vetted riders access brand new e-bikes through 0% interest lease-to-own, creating pathways to entrepreneurship and financial inclusion.",
    stat: "0% Interest",
  },
  {
    icon: Award,
    title: "Build Sustainable",
    description: "Join the electric revolution with durable, lightweight bikes that carry 50kg loads while preventing tons of CO₂ emissions annually.",
    stat: "2M kg CO₂ Saved",
  },
];

export const ValuePropositionSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-4">
            The Ebikes Africa Advantage
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto px-4">
            Four core pillars that make us Africa's leading electric mobility ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {valueProps.map((prop, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-md transition-shadow border-2 text-center"
            >
              <div className="mb-4 inline-flex p-4 bg-primary mx-auto">
                <prop.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{prop.stat}</div>
              <h3 className="text-xl font-bold mb-3">{prop.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{prop.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
