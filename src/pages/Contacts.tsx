import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { LocationMap } from "@/components/LocationMap";
import contactHero from "@/assets/contact-hero.jpg";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[33vh] min-h-[250px] overflow-hidden">
          <img 
            src={contactHero} 
            alt="Contact Ebikes Africa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/60 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground px-4 text-center">
              Contact Us
            </h1>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
              <Card className="p-6 border-2">
                <Mail className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm md:text-base break-words">info@ebikesafrica.com</p>
                <p className="text-muted-foreground text-sm md:text-base break-words">support@ebikesafrica.com</p>
              </Card>
              
              <Card className="p-6 border-2">
                <Phone className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm md:text-base">+254 700 000 000</p>
                <p className="text-muted-foreground text-sm md:text-base">+234 800 000 0000</p>
              </Card>
              
              <Card className="p-6 border-2">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Headquarters</h3>
                <p className="text-muted-foreground text-sm md:text-base">Nairobi, Kenya</p>
                <p className="text-muted-foreground text-sm md:text-base">Lagos, Nigeria</p>
              </Card>
            </div>
            
            {/* CTA Button */}
            <div className="text-center mb-12">
              <ContactFormDialog />
            </div>

            {/* Map Section */}
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Location</h2>
              <LocationMap />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contacts;
