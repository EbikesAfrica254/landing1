import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[33vh] min-h-[250px] overflow-hidden">
          <img 
            src={aboutHero} 
            alt="Ebikes Africa office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/60 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground px-4 text-center">
              About Ebikes Africa
            </h1>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg">
              <p>
                Ebikes Africa is pioneering the electric mobility revolution across the African continent. 
                We're not just selling bikes—we're building the complete infrastructure that makes electric 
                transportation accessible, affordable, and sustainable for everyone.
              </p>
              
              <p>
                Founded with the vision of transforming how Africa moves, we combine cutting-edge technology 
                with deep local knowledge to create solutions that work for African cities, businesses, and people.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">Our Mission</h2>
              <p>
                To accelerate Africa's transition to sustainable electric mobility by providing comprehensive 
                solutions that empower businesses, create opportunities for riders and technicians, and reduce 
                environmental impact.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">Our Vision</h2>
              <p>
                A future where electric mobility is the standard across Africa—powering commerce, connecting 
                communities, and creating economic opportunities while preserving our environment for future generations.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">What We Do</h2>
              <ul className="space-y-3 list-disc list-inside">
                <li>Provide AI-powered logistics solutions for businesses</li>
                <li>Sell and lease premium electric bikes</li>
                <li>Train and support a network of professional riders</li>
                <li>Build a certified technician ecosystem</li>
                <li>Develop charging and battery-swap infrastructure</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
