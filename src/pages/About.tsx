import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { useState } from "react";
import aboutHero from "@/assets/about-hero.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Kwame Osei",
    role: "CEO & Founder",
    image: teamMember1,
    bio: "Kwame founded Ebikes Africa with a vision to revolutionize transportation across the continent. With over 15 years of experience in sustainable technology and logistics, he leads our mission to make electric mobility accessible to all Africans.",
    linkedin: "https://linkedin.com/in/kwame-osei"
  },
  {
    name: "Amara Nkosi",
    role: "Chief Technology Officer",
    image: teamMember2,
    bio: "Amara leads our technology development, focusing on AI-powered logistics solutions and battery management systems. Her expertise in software engineering and clean energy technology drives our innovation forward.",
    linkedin: "https://linkedin.com/in/amara-nkosi"
  },
  {
    name: "Zara Mensah",
    role: "Head of Operations",
    image: teamMember3,
    bio: "Zara oversees our network of riders, technicians, and charging infrastructure across multiple cities. Her background in supply chain management ensures seamless operations and exceptional service delivery.",
    linkedin: "https://linkedin.com/in/zara-mensah"
  },
  {
    name: "Chiwetel Adeyemi",
    role: "Head of Business Development",
    image: teamMember4,
    bio: "Chiwetel drives our partnerships with businesses and organizations across Africa. His expertise in market expansion and strategic partnerships has been instrumental in scaling our impact across the continent.",
    linkedin: "https://linkedin.com/in/chiwetel-adeyemi"
  }
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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

        {/* Team Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group cursor-pointer perspective-1000"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[3/4] transition-all duration-300 hover:scale-110 hover:rotate-2 hover:shadow-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 backdrop-blur-sm p-4 text-center">
                      <h3 className="font-bold text-lg mb-1 text-primary-foreground">{member.name}</h3>
                      <p className="text-primary-foreground/90 text-sm mb-3">{member.role}</p>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-background/20 backdrop-blur-sm border-primary-foreground/20 hover:bg-background/40"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(member.linkedin, '_blank');
                        }}
                      >
                        <Linkedin className="h-4 w-4 text-primary-foreground" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Team Member Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-4xl p-0 gap-0 overflow-hidden">
          {selectedMember && (
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-2xl md:text-3xl mb-2">
                    {selectedMember.name}
                  </DialogTitle>
                  <p className="text-primary font-semibold">{selectedMember.role}</p>
                </DialogHeader>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedMember.bio}
                </p>
                <Button
                  variant="default"
                  className="w-full md:w-auto"
                  onClick={() => window.open(selectedMember.linkedin, '_blank')}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default About;
