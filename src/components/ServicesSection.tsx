import { Card } from "@/components/ui/card";
import { Cpu, Zap, Users } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Logistics & bEBA AI",
    description: "Revolutionary AI-powered platform optimizing delivery routes, fleet management, and operational efficiency for businesses across Africa.",
    gradient: "from-primary to-primary-glow",
  },
  {
    icon: Zap,
    title: "E-Bike Sales & Leasing",
    description: "Premium electric bikes with flexible ownership options—buy outright, lease-to-own, or join our battery-swap network for unlimited range.",
    gradient: "from-accent to-orange-500",
  },
  {
    icon: Users,
    title: "Rider & Technician Ecosystem",
    description: "Comprehensive training, certification, and support network connecting skilled riders and technicians with opportunities across the continent.",
    gradient: "from-secondary to-blue-500",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Powering Africa's Mobility Landscape
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Three interconnected pillars driving electric transformation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-card transition-all duration-300 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              <div className="relative">
                <div className={`mb-4 inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-xl`}>
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
