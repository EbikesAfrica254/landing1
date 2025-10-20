import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { TrustBadgesSection } from "@/components/TrustBadgesSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { FeaturesAlternatingSection } from "@/components/FeaturesAlternatingSection";
import { PersonaSection } from "@/components/PersonaSection";
import { ValuePropositionSection } from "@/components/ValuePropositionSection";
import { PricingSection } from "@/components/PricingSection";
import { ImpactSection } from "@/components/ImpactSection";
import { FAQSection } from "@/components/FAQSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero-header')?.getBoundingClientRect().height || 0;
      setIsSticky(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header section that navigation will scroll past */}
      <div className="hero-header bg-gradient-to-br from-primary/5 via-background to-primary/10 py-4">
        <div className="container px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Ebikes Africa</h2>
          <p className="text-sm text-muted-foreground">Powering Sustainable Transportation</p>
        </div>
      </div>
      
      {/* Navigation that becomes sticky */}
      <div className={isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : 'relative z-50'}>
        <Navigation />
      </div>
      
      <div>
        <HeroSection />
        <TrustBadgesSection />
        <FeaturesAlternatingSection />
        <DifferenceSection />
        <PersonaSection />
        <ValuePropositionSection />
        <PricingSection />
        <ImpactSection />
        <FAQSection />
        <NewsletterSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
