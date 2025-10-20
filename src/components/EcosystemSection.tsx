import { useState, useEffect } from "react";
import valueTech from "@/assets/value-tech.jpg";
import { Zap, Bike, Package, Users } from "lucide-react";

interface EcosystemItem {
  title: string;
  icon: typeof Zap;
  image: string;
  description: string;
}

const ecosystemItems: EcosystemItem[] = [
  {
    title: "Tech",
    icon: Zap,
    image: valueTech,
    description: "AI-powered logistics and smart fleet management"
  },
  {
    title: "Mobility",
    icon: Bike,
    image: valueTech,
    description: "Electric bikes and sustainable transportation"
  },
  {
    title: "Logistics",
    icon: Package,
    image: valueTech,
    description: "Efficient delivery and supply chain solutions"
  },
  {
    title: "Access to Work",
    icon: Users,
    image: valueTech,
    description: "Empowering riders and creating opportunities"
  }
];

export const EcosystemSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={valueTech} 
          alt="Ecosystem background" 
          className="w-full h-full object-cover"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            willChange: 'transform'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          A Complete Ecosystem
        </h2>

        {/* Ecosystem Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {ecosystemItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-background/90 backdrop-blur-sm">
                  <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
                    <Icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
