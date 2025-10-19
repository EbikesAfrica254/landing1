import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const pricingPlans = [
  {
    name: "Individual Riders",
    price: "$0",
    period: "Lease-to-own",
    description: "Perfect for individual riders looking to start their journey",
    features: [
      { name: "0% Interest Financing", included: true },
      { name: "Basic Training Program", included: true },
      { name: "Standard Maintenance Support", included: true },
      { name: "Mobile App Access", included: true },
      { name: "Priority Support", included: false },
      { name: "Advanced Analytics", included: false }
    ],
    highlighted: false,
    cta: "Get Started"
  },
  {
    name: "Business Fleet",
    price: "Custom",
    period: "per fleet",
    description: "Complete fleet solutions for businesses of all sizes",
    features: [
      { name: "0% Interest Financing", included: true },
      { name: "Comprehensive Training", included: true },
      { name: "Premium Maintenance", included: true },
      { name: "Fleet Management Dashboard", included: true },
      { name: "Priority Support 24/7", included: true },
      { name: "Advanced Analytics & Insights", included: true }
    ],
    highlighted: true,
    cta: "Contact Sales"
  },
  {
    name: "Enterprise Partners",
    price: "Custom",
    period: "tailored solutions",
    description: "Full-scale partnerships with dedicated support",
    features: [
      { name: "Custom Financing Terms", included: true },
      { name: "White-Label Solutions", included: true },
      { name: "Dedicated Account Manager", included: true },
      { name: "API Integration Support", included: true },
      { name: "Priority Support 24/7", included: true },
      { name: "Custom Analytics & Reporting", included: true }
    ],
    highlighted: false,
    cta: "Talk to Us"
  }
];

export const PricingSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            PRICING
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Choose Your Path to Electric Mobility
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible options designed to meet your needs, whether you're an individual rider or a large enterprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 ${
                plan.highlighted 
                  ? 'border-2 border-primary shadow-lg scale-105' 
                  : 'border'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.highlighted ? 'default' : 'outline'}
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
