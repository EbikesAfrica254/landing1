import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage1 from "@/assets/hero-ebike.jpg";
import heroImage2 from "@/assets/hero-ebike-2.jpg";
import heroImage3 from "@/assets/hero-ebike-3.jpg";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const heroImages = [heroImage1, heroImage2, heroImage3];
  const rotatingWords = ["People", "Goods", "Fleets"];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 7000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-black/5 via-black/10 to-background"
    >
      {/* Background Images with Overlay and Parallax */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Electric bike scene ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Move <span className="transition-all duration-1000 inline-block">{rotatingWords[currentWordIndex]}</span>
            Sustainably
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
    </section>
  );
};
