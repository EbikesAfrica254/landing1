import { Navigation } from "@/components/Navigation";
import { BottomNavigation } from "@/components/BottomNavigation";
import { HeroSection } from "@/components/HeroSection";
import { TrustBadgesSection } from "@/components/TrustBadgesSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { FeaturesAlternatingSection } from "@/components/FeaturesAlternatingSection";
import { PersonaSection } from "@/components/PersonaSection";
import { ValuePropositionSection } from "@/components/ValuePropositionSection";
import { AboutUsSection } from "@/components/AboutUsSection";
import { PricingSection } from "@/components/PricingSection";
import { ImpactSection } from "@/components/ImpactSection";
import { FAQSection } from "@/components/FAQSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
const Index = () => {
  const [isNavSticky, setIsNavSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        setIsNavSticky(window.scrollY >= heroBottom);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen bg-background">
      <HeroSection />
      <TrustBadgesSection />
      <div className={`${isNavSticky ? 'fixed top-0 left-0 right-0 z-50' : 'sticky top-0 z-50'}`}>
        <Navigation />
      </div>
      {/* Spacer to prevent content jump when nav becomes fixed */}
      {isNavSticky && <div className="h-16" />}
      <FeaturesAlternatingSection />
      <DifferenceSection />
      
      <ValuePropositionSection />
      <AboutUsSection />
      <PricingSection />
      <ImpactSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
      {isNavSticky && <BottomNavigation />}
      {/* Spacer to prevent content from being hidden behind bottom nav */}
      {isNavSticky && <div className="h-16" />}
    </div>;
};
export default Index;