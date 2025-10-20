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
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
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
