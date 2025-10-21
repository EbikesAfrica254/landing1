import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage1 from "@/assets/hero-ebike.jpg";
import heroImage2 from "@/assets/hero-ebike-2.jpg";
import heroImage3 from "@/assets/hero-ebike-3.jpg";
import logo from "@/assets/ebikes-logo.png";
import { useState, useEffect } from "react";
export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const heroImages = [heroImage1, heroImage2, heroImage3];
  const rotatingWords = ["Move People Sustainably", "Move Goods Affordably", "Move Fleets Intelligently"];
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % rotatingWords.length);
    }, 7000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return <section id="hero-section" className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-black/5 via-black/10 to-background">
      {/* Background Images with Overlay and Parallax */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => <img key={index} src={image} alt={`Electric bike scene ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`} style={{
        transform: `translateY(${scrollY * 0.1}px)`,
        willChange: 'transform'
      }} />)}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Logo at top center */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-3xl text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">AI + ELECTRIC TWO WHEELERS</h3>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="transition-all duration-1000 inline-block">{rotatingWords[currentWordIndex]}</span>
          </h1>

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

      {/* Trusted by Section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-muted py-8">
        <div className="container px-4">
          <p className="text-center text-white/60 mb-6 text-sm uppercase tracking-wider">
            Trusted by industry leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center max-w-5xl mx-auto">
            {["Stripe", "HubSpot", "Intercom", "Asana", "Zoom", "Shopify"].map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <span className="text-2xl font-bold text-white/40 hover:text-white/80 transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};