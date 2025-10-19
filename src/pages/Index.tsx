import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { HorizontalScrollSection } from "@/components/HorizontalScrollSection";
import { PersonaSection } from "@/components/PersonaSection";
import { ValuePropositionSection } from "@/components/ValuePropositionSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ImpactSection } from "@/components/ImpactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <HeroSection />
        <DifferenceSection />
        <HorizontalScrollSection />
        <PersonaSection />
        <ValuePropositionSection />
        <SolutionsSection />
        <ImpactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
