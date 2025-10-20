import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Button } from "@/components/ui/button";
import notFoundImg from "@/assets/404-phone-map.png";

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
          <div className="mb-8 animate-fade-in">
            <img 
              src={notFoundImg} 
              alt="Location not found - 404 error" 
              className="w-64 h-64 mx-auto object-contain animate-pulse"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-foreground animate-fade-in">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground/80 animate-fade-in">
            Location Not Found
          </h2>
          <p className="text-lg mb-8 text-muted-foreground animate-fade-in">
            Oops! The page you're looking for doesn't exist on our map.
          </p>
          
          <Button asChild size="lg" className="animate-fade-in">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      
      <div className="md:hidden">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default NotFound;
