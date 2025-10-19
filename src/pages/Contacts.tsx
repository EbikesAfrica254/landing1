import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container max-w-6xl mx-auto px-4 md:px-8">
          {/* Hero Text */}
          <div className="mb-20 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              Let's talk
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative">
                  <label 
                    htmlFor="name"
                    className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                      isFocused === 'name' || formData.name 
                        ? '-top-6 text-sm text-primary' 
                        : 'top-4 text-base text-muted-foreground'
                    }`}
                  >
                    Your name
                  </label>
                  <input 
                    id="name"
                    type="text" 
                    className="w-full bg-transparent border-b-2 border-border focus:border-primary py-4 outline-none transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setIsFocused('name')}
                    onBlur={() => setIsFocused(null)}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-2">{errors.name}</p>}
                </div>
                
                <div className="relative">
                  <label 
                    htmlFor="email"
                    className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                      isFocused === 'email' || formData.email 
                        ? '-top-6 text-sm text-primary' 
                        : 'top-4 text-base text-muted-foreground'
                    }`}
                  >
                    Email address
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    className="w-full bg-transparent border-b-2 border-border focus:border-primary py-4 outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setIsFocused('email')}
                    onBlur={() => setIsFocused(null)}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-2">{errors.email}</p>}
                </div>
                
                <div className="relative">
                  <label 
                    htmlFor="message"
                    className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                      isFocused === 'message' || formData.message 
                        ? '-top-6 text-sm text-primary' 
                        : 'top-4 text-base text-muted-foreground'
                    }`}
                  >
                    Your message
                  </label>
                  <textarea 
                    id="message"
                    className="w-full bg-transparent border-b-2 border-border focus:border-primary py-4 outline-none resize-none transition-colors"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setIsFocused('message')}
                    onBlur={() => setIsFocused(null)}
                  />
                  {errors.message && <p className="text-destructive text-sm mt-2">{errors.message}</p>}
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                  Whether you're looking to transform your business logistics, purchase an electric bike, 
                  or join our rider network, we're here to help.
                </p>
              </div>

              <div className="space-y-10">
                <div className="group cursor-pointer">
                  <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-muted/50 transition-colors">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email us</h3>
                      <a href="mailto:info@ebikesafrica.com" className="text-muted-foreground hover:text-primary transition-colors block">
                        info@ebikesafrica.com
                      </a>
                      <a href="mailto:support@ebikesafrica.com" className="text-muted-foreground hover:text-primary transition-colors block">
                        support@ebikesafrica.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-muted/50 transition-colors">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Call us</h3>
                      <a href="tel:+254700000000" className="text-muted-foreground hover:text-primary transition-colors block">
                        +254 700 000 000
                      </a>
                      <a href="tel:+2348000000000" className="text-muted-foreground hover:text-primary transition-colors block">
                        +234 800 000 0000
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-muted/50 transition-colors">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Visit us</h3>
                      <p className="text-muted-foreground">Nairobi, Kenya</p>
                      <p className="text-muted-foreground">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-muted/50 transition-colors">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Social media</h3>
                      <div className="flex gap-4 mt-3">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          Twitter
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          LinkedIn
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contacts;
