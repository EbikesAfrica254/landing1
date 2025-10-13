import { Button } from "@/components/ui/button";
import ecommerceImg from "@/assets/persona-ecommerce.jpg";
import riderImg from "@/assets/persona-rider.jpg";
import commuterImg from "@/assets/persona-commuter.jpg";
import corporateImg from "@/assets/persona-corporate.jpg";
import fitnessImg from "@/assets/persona-fitness.jpg";
import hotelImg from "@/assets/persona-hotel.jpg";
import partnersImg from "@/assets/persona-partners.jpg";
import suppliersImg from "@/assets/persona-suppliers.jpg";

const personas = [
  {
    image: ecommerceImg,
    title: "E-commerce Businesses",
    description: "These businesses seek affordable, scalable, and stress-free delivery. Ebikes Africa provides on-demand, tech-enabled last-mile logistics (bEBA Logistic Service) that utilize the AI-powered fleet management system (bEBA AI). This offering helps businesses scale without the hassle of managing vehicle fleets, cutting operational expenses, and improving efficiency.",
    cta: "Optimize Logistics",
  },
  {
    image: riderImg,
    title: "Delivery Riders",
    description: "This group needs access to affordable vehicles and stable work opportunities. Ebikes Africa vets and trains riders, providing access to brand new electric bikes on a lease-to-own model at 0% interest, improving their access to financial services and placing them on a pathway to entrepreneurship.",
    cta: "Start Earning",
  },
  {
    image: commuterImg,
    title: "Commuters",
    description: "Individuals looking to switch from cars and public transport benefit from highly affordable, sustainable mobility solutions. The Adventurer electric bicycle retails at an affordable price and is extremely cost-effective to run, using approximately Ksh 15 worth of electricity for an 80-kilometer range.",
    cta: "Go Electric",
  },
  {
    image: corporateImg,
    title: "Corporate Mobility",
    description: "Businesses looking to reduce transport costs and increase field agent productivity. Ebikes Africa offers solutions including electric bikes and ownership schemes to improve the mobility of their staff and cut down on high operational expenses like fuel and maintenance.",
    cta: "Empower Your Team",
  },
  {
    image: fitnessImg,
    title: "Fitness & Leisure",
    description: "People seeking light exercise and local exploration. The electric bicycles are lightweight and easy to maintain, facilitating a light exercise regimen while allowing users to explore their environment easily.",
    cta: "Explore More",
  },
  {
    image: hotelImg,
    title: "Hotels & Adventures",
    description: "Businesses aiming to increase their activities or guest offerings. They can leverage electric bicycles, which are lightweight, durable (carrying up to 50 Kg loads), and easy to repair at any bike shop, making them suitable for commercial activities and rentals.",
    cta: "Enhance Experiences",
  },
  {
    image: partnersImg,
    title: "E-mobility Partners",
    description: "Partners seeking new customers or a scalable operational model. Ebikes Africa offers opportunities to leverage the AI-driven fleet management system (bEBA AI) to integrate into last-mile logistics operations or apply the successful lease-to-own financial model to their own customer base.",
    cta: "Partner With Us",
  },
  {
    image: suppliersImg,
    title: "Suppliers & Services",
    description: "Businesses looking to access the growing ecosystem of electric bike riders. Ebikes Africa facilitates these connections through negotiated favorable contracts, linking these suppliers directly to a consistent and financially engaged rider base who regularly purchase spare parts and require maintenance services.",
    cta: "Join Network",
  },
];

export const PersonaSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Who We Serve
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            From individual commuters to large enterprises, we provide tailored electric mobility solutions 
            that address your specific needs and challenges
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {personas.map((persona, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <img
                  src={persona.image}
                  alt={persona.title}
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{persona.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {persona.description}
                </p>
                <Button variant="default" size="lg">
                  {persona.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
