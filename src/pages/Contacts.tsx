import { useRef, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";

const Contacts = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!container || !scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-background">
      <Navigation />
      
      <div ref={containerRef} className="h-full pt-16">
        <div 
          ref={scrollContainerRef}
          className="flex h-full overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {/* Panel 1 - Hero */}
          <section 
            className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8 md:px-16"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
                Marcus Carter
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
                Available for freelance projects
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Currently freelancing as a product designer and front-end developer. 
                Design advisor to Circular and Acme. Formerly design lead at Untitled.
              </p>
            </div>
          </section>

          {/* Panel 2 - Contact Info */}
          <section 
            className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8 md:px-16"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="max-w-3xl w-full">
              <h2 className="text-4xl md:text-6xl font-bold mb-16">Get in touch</h2>
              
              <div className="space-y-12">
                <div className="group">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-muted rounded-2xl">
                      <Mail className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Email</h3>
                      <a 
                        href="mailto:hey@marcuscarter.com" 
                        className="text-xl text-muted-foreground hover:text-primary transition-colors"
                      >
                        hey@marcuscarter.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-muted rounded-2xl">
                      <MapPin className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Based in</h3>
                      <p className="text-xl text-muted-foreground">San Francisco, California, USA 🇺🇸</p>
                      <p className="text-lg text-muted-foreground mt-2">UTC/GMT -8 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Panel 3 - Social */}
          <section 
            className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8 md:px-16"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="max-w-3xl w-full">
              <h2 className="text-4xl md:text-6xl font-bold mb-16">Connect</h2>
              
              <div className="space-y-8">
                <a 
                  href="#" 
                  className="flex items-center gap-6 p-6 rounded-3xl hover:bg-muted transition-all duration-300 group"
                >
                  <div className="p-4 bg-muted group-hover:bg-background rounded-2xl transition-colors">
                    <Twitter className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Twitter</p>
                    <p className="text-2xl font-semibold">@marcar</p>
                    <p className="text-lg text-muted-foreground">5,215 followers</p>
                  </div>
                </a>

                <a 
                  href="#" 
                  className="flex items-center gap-6 p-6 rounded-3xl hover:bg-muted transition-all duration-300 group"
                >
                  <div className="p-4 bg-muted group-hover:bg-background rounded-2xl transition-colors">
                    <Linkedin className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                    <p className="text-2xl font-semibold">@marcus</p>
                    <p className="text-lg text-muted-foreground">488 connections</p>
                  </div>
                </a>

                <a 
                  href="#" 
                  className="flex items-center gap-6 p-6 rounded-3xl hover:bg-muted transition-all duration-300 group"
                >
                  <div className="p-4 bg-muted group-hover:bg-background rounded-2xl transition-colors">
                    <Instagram className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Instagram</p>
                    <p className="text-2xl font-semibold">@marcus</p>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Panel 4 - Image Grid */}
          <section 
            className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8 md:px-16"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="max-w-5xl w-full">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="aspect-square bg-muted rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10" />
                </div>
                <div className="aspect-square bg-muted rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10" />
                </div>
              </div>
              
              <div className="flex gap-6 justify-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i}
                    className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                  >
                    <div className="w-8 h-8 bg-foreground/20 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Panel 5 - Large Image */}
          <section 
            className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8 md:px-16"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="max-w-4xl w-full h-3/4 bg-muted rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-muted via-muted-foreground/10 to-muted" />
            </div>
          </section>

          {/* Panel 6 - Work Carousel */}
          <section 
            className="flex-shrink-0 w-screen h-full flex items-center px-8 md:px-16"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="flex gap-6 overflow-visible">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="flex-shrink-0 w-[400px] h-[500px] bg-muted rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500"
                >
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20" />
                </div>
              ))}
            </div>
          </section>

          {/* Panel 7 - Footer */}
          <section 
            className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8 md:px-16"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="text-center">
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                Let's work together
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12">
                Available for new projects starting January 2024
              </p>
              <a 
                href="mailto:hey@marcuscarter.com"
                className="inline-block px-12 py-6 bg-primary text-primary-foreground rounded-full text-xl font-semibold hover:scale-105 transition-transform"
              >
                Get in touch
              </a>
              
              <p className="text-sm text-muted-foreground mt-16">
                © 2025 Horizontal by @justinmfarrugia
              </p>
            </div>
          </section>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Contacts;
