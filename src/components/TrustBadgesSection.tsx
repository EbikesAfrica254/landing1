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
    <section className="h-[30vh] md:h-[25vh] lg:h-[20vh] max-h-[20vh] bg-muted/30 flex items-center py-4">
      <div className="container px-4 w-full">
        <p className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-wider">
          Trusted by industry leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`}
                className="h-12 md:h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
