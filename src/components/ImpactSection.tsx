import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const stats = [
  { value: "50K+", label: "Deliveries Completed" },
  { value: "2M kg", label: "CO₂ Emissions Prevented" },
  { value: "1,200+", label: "Active Riders" },
  { value: "15", label: "Cities & Growing" },
];

const testimonials = [
  {
    quote: "Ebikes Africa transformed our delivery operations. We're now 40% faster and our customers love the eco-friendly approach.",
    author: "Amara Okafor",
    role: "CEO, QuickCommerce Lagos",
    company: "QuickCommerce",
    avatar: "AO"
  },
  {
    quote: "As a rider, this platform gave me the flexibility and income I needed. The training and support are world-class.",
    author: "Kwame Mensah",
    role: "bEBA Rider, Accra",
    company: "Ebikes Africa",
    avatar: "KM"
  },
  {
    quote: "The fleet management tools are incredible. Real-time tracking and maintenance alerts have saved us thousands in operational costs.",
    author: "Sarah Johnson",
    role: "Operations Manager",
    company: "Urban Logistics",
    avatar: "SJ"
  }
];

export const ImpactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Real Growth. Real Impact.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming mobility across Africa, one electric journey at a time
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-8 hover:shadow-lg transition-all border-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all relative">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-base mb-6 text-foreground/90 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
