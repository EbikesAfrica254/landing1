import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const stories = [
  {
    id: 1,
    title: "Empowering Delivery Riders",
    description: "Transforming lives through 0% interest lease-to-own programs, giving riders a pathway to entrepreneurship and financial independence.",
    image: "/src/assets/persona-rider.jpg",
    stat: "500+",
    statLabel: "Riders Empowered",
  },
  {
    id: 2,
    title: "Revolutionizing E-Commerce",
    description: "Cutting delivery costs by 60% with AI-powered fleet management and electric mobility solutions for businesses across Africa.",
    image: "/src/assets/persona-ecommerce.jpg",
    stat: "60%",
    statLabel: "Cost Reduction",
  },
  {
    id: 3,
    title: "Sustainable Commuting",
    description: "Just Ksh 15 for 80km of range. Making daily commutes affordable, efficient, and environmentally friendly.",
    image: "/src/assets/persona-commuter.jpg",
    stat: "80km",
    statLabel: "On Single Charge",
  },
  {
    id: 4,
    title: "Corporate Mobility",
    description: "Helping companies reduce transport expenses and boost field agent productivity with electric fleet solutions.",
    image: "/src/assets/persona-corporate.jpg",
    stat: "40%",
    statLabel: "Productivity Boost",
  },
  {
    id: 5,
    title: "Environmental Impact",
    description: "Leading Africa's electric revolution with durable bikes that prevent tons of CO₂ emissions annually.",
    image: "/src/assets/value-tech.jpg",
    stat: "2M kg",
    statLabel: "CO₂ Saved",
  },
];

export const HorizontalScrollSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container px-4 mb-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Impact Stories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Discover how we're transforming mobility and empowering communities across Africa
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <ScrollArea className="w-full">
        <div
          ref={scrollRef}
          className="flex gap-6 px-4 md:px-8 pb-4 scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {stories.map((story) => (
            <Card
              key={story.id}
              className="flex-shrink-0 w-[85vw] md:w-[600px] overflow-hidden hover:shadow-xl transition-all duration-300"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-baseline gap-3 mb-4">
                    <div className="text-5xl font-bold text-primary">{story.stat}</div>
                    <div className="text-sm font-medium opacity-90">{story.statLabel}</div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{story.title}</h3>
                  <p className="text-sm md:text-base opacity-90 mb-6 leading-relaxed">
                    {story.description}
                  </p>
                  <Button variant="ghost-primary" size="sm" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="container px-4 mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Scroll horizontally to explore more stories →
        </p>
      </div>
    </section>
  );
};
