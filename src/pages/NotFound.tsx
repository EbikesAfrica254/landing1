import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center bg-background py-16 px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-foreground animate-fade-in">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground/80 animate-fade-in">
            Location Not Found
          </h2>
          <p className="text-lg mb-8 text-muted-foreground animate-fade-in">
            Oops! The page you're looking for doesn't exist on our map.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg">
              <Link to="/">Return to Home</Link>
            </Button>
            <Button asChild size="lg">
              <Link to="/contacts">Book a Free Test Ride</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <div className="md:hidden">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default NotFound;
