import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Battery, Zap, Shield, Bike } from "lucide-react";
import heroImage from "@/assets/hero-ebike.jpg";

const ElectricBicycles = () => {
  const features = [
    {
      icon: Battery,
      title: "Long Battery Life",
      description: "Up to 80km range on a single charge with our advanced lithium-ion batteries"
    },
    {
      icon: Zap,
      title: "Powerful Motor",
      description: "250W-750W motors delivering smooth acceleration and hill-climbing power"
    },
    {
      icon: Shield,
      title: "Built to Last",
      description: "Durable aluminum frames and weather-resistant components for African conditions"
    },
    {
      icon: Bike,
      title: "Smart Features",
      description: "Integrated GPS tracking, mobile app connectivity, and anti-theft systems"
    }
  ];

  const models = [
    {
      name: "City Commuter",
      price: "From $899",
      image: heroImage,
      features: ["50km range", "250W motor", "Lightweight frame", "LED lights"],
      badge: "Most Popular"
    },
    {
      name: "Cargo Pro",
      price: "From $1,299",
      image: heroImage,
      features: ["80km range", "500W motor", "150kg capacity", "Reinforced frame"],
      badge: null
    },
    {
      name: "Mountain Trail",
      price: "From $1,499",
      image: heroImage,
      features: ["70km range", "750W motor", "Full suspension", "All-terrain tires"],
      badge: "New"
    }
  ];

  const specs = [
    "Pedal assist and throttle modes",
    "Disc brakes for reliable stopping",
    "USB charging port",
    "Adjustable seat and handlebars",
    "Smartphone holder included",
    "1-year warranty"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Electric Bicycles for Africa
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Affordable, reliable, and built for African roads. Transform your daily commute with our range of electric bicycles.
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="hero">
                Browse Models
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose Our E-Bikes?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Engineered specifically for African conditions with world-class quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our E-Bike Models
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From city commuting to cargo delivery, we have the perfect e-bike for your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <Card key={index} className="overflow-hidden">
                {model.badge && (
                  <div className="bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-3 py-2 text-center">
                    {model.badge}
                  </div>
                )}
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${model.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-6">{model.price}</p>
                  <ul className="space-y-2 mb-6">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" size="lg">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Standard Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specs.map((spec, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4">
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-primary/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Go Electric?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get started with 0% interest financing and make your first electric bicycle affordable today.
            </p>
            <Button size="lg" variant="hero">
              Get Started Now
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ElectricBicycles;
