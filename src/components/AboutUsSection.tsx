import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const AboutUsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Ebikes Africa
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We're on a mission to revolutionize urban mobility across Africa through 
            sustainable electric bicycle solutions. Our innovative approach combines 
            cutting-edge technology with deep understanding of local needs, creating 
            accessible and eco-friendly transportation for everyone.
          </p>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            From individual riders to corporate fleets, we're building a cleaner, 
            more efficient future for African cities—one electric bike at a time.
          </p>
          <Link to="/about">
            <Button variant="dark" size="lg" className="group">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
