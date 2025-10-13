import { Card } from "@/components/ui/card";

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
  },
  {
    quote: "As a rider, this platform gave me the flexibility and income I needed. The training and support are world-class.",
    author: "Kwame Mensah",
    role: "bEBA Rider, Accra",
  },
];

export const ImpactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Real Growth. Real Impact.
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Transforming mobility across Africa, one electric journey at a time
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gradient-electric/5 hover:bg-gradient-electric/10 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-card transition-shadow">
              <p className="text-lg mb-6 italic text-foreground/90">"{testimonial.quote}"</p>
              <div className="border-l-4 border-primary pl-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
