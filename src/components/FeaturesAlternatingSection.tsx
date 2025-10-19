import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Users, Shield, CheckCircle } from "lucide-react";
import techImg from "@/assets/value-tech.jpg";
import businessImg from "@/assets/solution-business.jpg";

const features = [
  {
    tag: "SIMPLIFIED WORKFLOWS",
    title: "Experience the Ultimate Boost in Productivity",
    description: "Streamline your delivery operations with our cutting-edge electric fleet management. Unlock the potential of your team and take productivity to new heights.",
    features: [
      "Intelligent Fleet Management",
      "Real-time Route Optimization",
      "Data Security & Privacy"
    ],
    image: techImg,
    imageAlt: "Fleet management dashboard"
  },
  {
    tag: "AI-POWERED INSIGHTS",
    title: "Supercharge Your Business with Advanced Analytics",
    description: "Harness the potential of AI-driven analytics to optimize your operations, understand your customers better, and achieve unprecedented growth.",
    features: [
      "Smart Rider Matching",
      "Predictive Maintenance Alerts",
      "Performance Tracking Dashboard"
    ],
    image: businessImg,
    imageAlt: "Analytics dashboard"
  }
];

export const FeaturesAlternatingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            TWO-COL FEATURES
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Supercharge Your Workflows
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock your team's true potential with our state-of-the-art electric mobility platform. 
            From intelligent fleet management to real-time optimization and top-notch security.
          </p>
        </div>

        {features.map((feature, index) => (
          <div 
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <img 
                src={feature.image}
                alt={feature.imageAlt}
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            
            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                {feature.tag}
              </p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {feature.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {feature.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <Button size="lg">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
