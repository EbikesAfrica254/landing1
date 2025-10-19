import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export const NewsletterSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-12 w-12 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Electric Mobility News
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get the latest updates on electric mobility trends, new features, and exclusive offers delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-primary-foreground text-foreground border-0 flex-1"
            />
            <Button 
              size="lg" 
              variant="secondary"
              className="whitespace-nowrap"
            >
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm mt-4 opacity-75">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};
