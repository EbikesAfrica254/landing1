import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Clock, MapPin, Shield, Smartphone, DollarSign } from "lucide-react";
import deliveryImage from "@/assets/hero-ebike.jpg";

const BebaDelivery = () => {
  const features = [
    {
      icon: Clock,
      title: "Same-Day Delivery",
      description: "Lightning-fast delivery within hours, not days. Perfect for urgent shipments and time-sensitive goods."
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Track your package every step of the way with live GPS updates and delivery notifications."
    },
    {
      icon: Shield,
      title: "Secure & Insured",
      description: "Every delivery is insured and handled with care. Your packages are in safe hands."
    },
    {
      icon: Smartphone,
      title: "Easy Booking",
      description: "Book deliveries in seconds through our mobile app or web platform. No hassle, no delays."
    },
    {
      icon: Package,
      title: "Flexible Options",
      description: "From documents to large parcels, we handle it all. Choose the service that fits your needs."
    },
    {
      icon: DollarSign,
      title: "Affordable Rates",
      description: "Competitive pricing with no hidden fees. Pay only for what you ship."
    }
  ];

  const serviceTypes = [
    {
      name: "Express",
      time: "1-2 hours",
      price: "From $5",
      description: "Urgent delivery for time-sensitive items",
      features: ["Priority handling", "Direct route", "SMS updates", "Signature on delivery"]
    },
    {
      name: "Same Day",
      time: "4-6 hours",
      price: "From $3",
      description: "Reliable same-day delivery across the city",
      features: ["Scheduled pickup", "Live tracking", "Photo confirmation", "Eco-friendly"]
    },
    {
      name: "Scheduled",
      time: "Next day",
      price: "From $2",
      description: "Plan ahead and save with next-day delivery",
      features: ["Time slot selection", "Bulk discounts", "Route optimization", "Carbon neutral"]
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Book Online",
      description: "Use our app or website to enter pickup and delivery details in seconds"
    },
    {
      step: "2",
      title: "We Pick Up",
      description: "Our rider arrives at your location to collect the package"
    },
    {
      step: "3",
      title: "Track Live",
      description: "Watch your package move in real-time with GPS tracking"
    },
    {
      step: "4",
      title: "Delivered",
      description: "Recipient receives the package with photo confirmation"
    }
  ];

  const benefits = [
    "Zero emissions with electric bikes",
    "Navigate traffic faster than cars",
    "Access to restricted areas",
    "Lower delivery costs",
    "Dedicated customer support",
    "Flexible payment options",
    "Bulk delivery discounts",
    "API integration for businesses"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${deliveryImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/60" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-2xl">
            <Badge className="mb-6" variant="outline">
              Fast, Green & Reliable
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              bEBA Delivery: Your Package, Our Mission
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Same-day delivery powered by electric bikes. Fast, eco-friendly, and affordable delivery services across Africa's cities.
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="hero">
                Book a Delivery
              </Button>
              <Button size="lg" variant="outline">
                Download App
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
              Why Choose bEBA Delivery?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern delivery solutions designed for today's fast-paced world
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Choose Your Delivery Speed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible options to match your urgency and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
              <Card key={index} className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">{service.price}</div>
                  <div className="text-sm text-muted-foreground mb-4">Delivery in {service.time}</div>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                  Book Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four simple steps to get your package delivered
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              The bEBA Advantage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-4 flex items-center gap-3">
                  <Package className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 to-primary/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Ship?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust bEBA for their delivery needs.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="hero">
                Book Your First Delivery
              </Button>
              <Button size="lg" variant="outline">
                For Businesses
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BebaDelivery;
