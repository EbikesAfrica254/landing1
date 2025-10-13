import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <section className="py-16">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mb-12">
              <Card className="p-6 border-2">
                <Mail className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">info@ebikesafrica.com</p>
                <p className="text-muted-foreground">support@ebikesafrica.com</p>
              </Card>
              
              <Card className="p-6 border-2">
                <Phone className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground">+254 700 000 000</p>
                <p className="text-muted-foreground">+234 800 000 0000</p>
              </Card>
              
              <Card className="p-6 border-2">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Headquarters</h3>
                <p className="text-muted-foreground">Nairobi, Kenya</p>
                <p className="text-muted-foreground">Lagos, Nigeria</p>
              </Card>
            </div>
            
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-input bg-background"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-input bg-background"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 border border-input bg-background h-32"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contacts;
