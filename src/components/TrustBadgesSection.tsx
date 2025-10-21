import andoFoodsLogo from "@/assets/partners/ando-foods-logo.png";
import artcaffeLogo from "@/assets/partners/artcaffe-logo.png";
import goodlifeLogo from "@/assets/partners/goodlife-logo.png";
import boltFoodLogo from "@/assets/partners/bolt-food-logo.png";
import pizzaInnLogo from "@/assets/partners/pizza-inn-logo.png";
import chickenInnLogo from "@/assets/partners/chicken-inn-logo.png";

export const TrustBadgesSection = () => {
  const partners = [
    { name: "Ando Foods", logo: andoFoodsLogo },
    { name: "ArtCaffe", logo: artcaffeLogo },
    { name: "Goodlife Pharmacy", logo: goodlifeLogo },
    { name: "Bolt Food", logo: boltFoodLogo },
    { name: "Pizza Inn", logo: pizzaInnLogo },
    { name: "Chicken Inn", logo: chickenInnLogo },
  ];

  return (
    <section className="h-[30vh] md:h-[25vh] lg:h-[20vh] max-h-[20vh] bg-muted/30 flex items-center py-4 overflow-hidden">
      <div className="container px-4 w-full">
        <p className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-wider">
          Trusted by industry leaders
        </p>
        <div className="relative group">
          <div className="flex gap-12 animate-none group-hover:animate-[scroll_20s_linear_infinite]">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div key={`first-${index}`} className="flex items-center justify-center flex-shrink-0">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="h-12 md:h-16 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`second-${index}`} className="flex items-center justify-center flex-shrink-0">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="h-12 md:h-16 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};
