import { Link } from "react-router-dom";
import { Home, Info, Bike, Bot, Truck, Mail } from "lucide-react";

export const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border animate-in slide-in-from-bottom duration-300">
      <div className="container px-4 h-16 flex items-center justify-around">
        <Link to="/" className="flex flex-col items-center gap-1 text-xs hover:text-primary transition-colors">
          <Home className="h-5 w-5" />
          <span>Home</span>
        </Link>
        <Link to="/about" className="flex flex-col items-center gap-1 text-xs hover:text-primary transition-colors">
          <Info className="h-5 w-5" />
          <span>About</span>
        </Link>
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
        <Link to="/contacts" className="flex flex-col items-center gap-1 text-xs hover:text-primary transition-colors">
          <Mail className="h-5 w-5" />
          <span>Contacts</span>
        </Link>
      </div>
    </nav>
  );
};
