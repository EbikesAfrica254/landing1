import { Card } from "@/components/ui/card";
import { Cpu, Zap, Users } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Logistics & bEBA AI",
    description: "Revolutionary AI-powered platform optimizing delivery routes, fleet management, and operational efficiency for businesses across Africa.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "E-Bike Sales & Leasing",
    description: "Premium electric bikes with flexible ownership options—buy outright, lease-to-own, or join our battery-swap network for unlimited range.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Rider & Technician Ecosystem",
    description: "Comprehensive training, certification, and support network connecting skilled riders and technicians with opportunities across the continent.",
    color: "secondary",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Powering Africa's Mobility Landscape
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Three interconnected pillars driving electric transformation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-md transition-shadow group border-2"
            >
              <div className="mb-4 inline-flex p-4 bg-primary">
                <service.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
