import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/ebikes-logo.png";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border">
      <div className="container px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Ebikes Africa" className="h-8 md:h-10" />
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/electric-bicycles" className="text-sm font-medium hover:text-primary transition-colors">
            E-Bikes
          </Link>
          <Link to="/beba-ai" className="text-sm font-medium hover:text-primary transition-colors">
            bEBA AI
          </Link>
          <Link to="/beba-delivery" className="text-sm font-medium hover:text-primary transition-colors">
            Delivery
          </Link>
          <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">
            Contacts
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/electric-bicycles" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              E-Bikes
            </Link>
            <Link 
              to="/beba-ai" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              bEBA AI
            </Link>
            <Link 
              to="/beba-delivery" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Delivery
            </Link>
            <Link 
              to="/contacts" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacts
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
