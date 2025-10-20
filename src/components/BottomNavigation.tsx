import { Link } from "react-router-dom";
import { Bike, Bot, Truck } from "lucide-react";

export const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border animate-in slide-in-from-bottom duration-300">
      <div className="container px-4 h-16 flex items-center justify-around">
        <Link to="/electric-bicycles" className="flex flex-col items-center gap-1 text-xs hover:text-primary transition-colors">
          <Bike className="h-5 w-5" />
          <span>E-Bikes</span>
        </Link>
        <Link to="/beba-ai" className="flex flex-col items-center gap-1 text-xs hover:text-primary transition-colors">
          <Bot className="h-5 w-5" />
          <span>bEBA AI</span>
        </Link>
        <Link to="/beba-delivery" className="flex flex-col items-center gap-1 text-xs hover:text-primary transition-colors">
          <Truck className="h-5 w-5" />
          <span>Delivery</span>
        </Link>
      </div>
    </nav>
  );
};
