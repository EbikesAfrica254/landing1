import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { SegmentationSection } from "@/components/SegmentationSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ImpactSection } from "@/components/ImpactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <HeroSection />
        <DifferenceSection />
        <SegmentationSection />
        <ServicesSection />
        <ImpactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
