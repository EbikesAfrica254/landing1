import heroImg from "@/assets/hero-ebike.jpg";
import valueTechImg from "@/assets/value-tech.jpg";
import solutionBusinessImg from "@/assets/solution-business.jpg";
import solutionIndividualImg from "@/assets/solution-individual.jpg";
import solutionPartnersImg from "@/assets/solution-partners.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ecosystemSections = [
  {
    title: "Tech",
    image: valueTechImg,
    description: "AI-powered logistics and battery management systems",
    cta: "Explore Technology"
  },
  {
    title: "Mobility",
    image: solutionIndividualImg,
    description: "Premium electric bikes for sustainable transportation",
    cta: "View Bikes"
  },
  {
    title: "Logistics",
    image: solutionBusinessImg,
    description: "Complete delivery solutions for businesses",
    cta: "Learn More"
  },
  {
    title: "Access to Work",
    image: solutionPartnersImg,
    description: "Opportunities for riders and technicians across Africa",
    cta: "Join Network"
  }
];

export const FullWidthImageSection = () => {
  return (
    <>
      <section className="relative w-full h-[40vh] overflow-hidden">
        <img 
          src={heroImg} 
          alt="Electric bikes showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            A Complete Ecosystem
          </h2>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
            {ecosystemSections.map((section) => (
              <div
                key={section.title}
                className="group cursor-pointer perspective-1000"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[2/3] transition-all duration-300 hover:scale-110 hover:rotate-2 hover:shadow-2xl">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4 text-center">
                    <h3 className="font-bold text-xl mb-2 text-primary-foreground">{section.title}</h3>
                    <p className="text-primary-foreground/90 text-sm mb-3">{section.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-background/20 backdrop-blur-sm border-primary-foreground/20 hover:bg-background/40 text-primary-foreground"
                    >
                      {section.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
