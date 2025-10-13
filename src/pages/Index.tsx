import { HeroSection } from "@/components/HeroSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { SegmentationSection } from "@/components/SegmentationSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ImpactSection } from "@/components/ImpactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <DifferenceSection />
      <SegmentationSection />
      <ServicesSection />
      <ImpactSection />
      <Footer />
    </div>
  );
};

export default Index;
