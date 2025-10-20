import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ebike.jpg";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero-section" className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-black/5 via-blue-50 to-background">
      {/* Background Image with Overlay and Parallax */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Electric bike rider on African street at sunset" 
          className="w-full h-full object-cover opacity-30"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Africa's Future is Electric
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Powering Work, Life, and Mobility Across the Continent with cutting-edge electric solutions
          </p>
          
          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
