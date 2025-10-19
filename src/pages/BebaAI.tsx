import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, BarChart3, Users, Clock, Shield } from "lucide-react";

const BebaAI = () => {
  const features = [
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "AI-powered insights that predict demand patterns and optimize fleet deployment"
    },
    {
      icon: TrendingUp,
      title: "Route Optimization",
      description: "Smart routing algorithms that reduce delivery times and fuel costs by up to 30%"
    },
    {
      icon: BarChart3,
      title: "Performance Metrics",
      description: "Real-time dashboards tracking KPIs, rider performance, and business growth"
    },
    {
      icon: Users,
      title: "Driver Management",
      description: "AI-assisted rider matching, training recommendations, and performance coaching"
    },
    {
      icon: Clock,
      title: "Demand Forecasting",
      description: "Predict peak hours and seasonal trends to always stay ahead of demand"
    },
    {
      icon: Shield,
      title: "Fraud Detection",
      description: "Machine learning models that identify and prevent fraudulent activities"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Platforms",
      description: "Integrate bEBA AI to optimize your last-mile delivery operations with smart routing and real-time tracking.",
      metrics: ["40% faster deliveries", "25% cost reduction", "99% on-time rate"]
    },
    {
      title: "Fleet Management",
      description: "Manage hundreds of e-bikes with AI-driven insights on maintenance, battery health, and rider behavior.",
      metrics: ["Predictive maintenance", "Battery optimization", "Fleet utilization tracking"]
    },
    {
      title: "Business Intelligence",
      description: "Make data-driven decisions with comprehensive analytics on operations, customer behavior, and market trends.",
      metrics: ["Custom dashboards", "Revenue forecasting", "Market analysis"]
    }
  ];

  const capabilities = [
    "Real-time GPS tracking and geofencing",
    "Automated dispatch and load balancing",
    "Customer behavior analysis",
    "Weather and traffic integration",
    "Multi-language support",
    "API integration with existing systems",
    "Mobile and web dashboards",
    "Customizable alerts and notifications"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6" variant="outline">
              Powered by AI
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              bEBA AI: Intelligence That Drives Results
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your delivery operations with artificial intelligence. Our advanced platform learns, adapts, and optimizes every aspect of your electric mobility business.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="hero">
                Request Demo
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
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
              AI-Powered Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced machine learning capabilities that give you a competitive edge
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

      {/* Use Cases */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Built for Every Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startups to enterprises, bEBA AI scales with your needs
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Core Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <Card key={index} className="p-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-lg">{capability}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Easy Integration
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Seamlessly integrate bEBA AI into your existing systems with our comprehensive API and dedicated support team.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" variant="hero">
                    API Documentation
                  </Button>
                  <Button size="lg" variant="outline">
                    Contact Integration Team
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join leading businesses across Africa that are already using bEBA AI to optimize their delivery operations.
            </p>
            <Button size="lg" variant="hero">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BebaAI;
