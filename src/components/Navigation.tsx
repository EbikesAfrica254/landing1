import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ebikes-logo.png";
export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="container px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Ebikes Africa" className="h-8 md:h-10" />
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <Link to="/electric-bicycles" className="text-sm font-medium hover:text-primary hover:scale-110 transition-all duration-200">
            Buy an e-bike
          </Link>
          <Link to="/beba-delivery" className="text-sm font-medium hover:text-primary hover:scale-110 transition-all duration-200">
            Deliver Goods
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="dark">
            <Link to="/beba-ai">BEBA AI</Link>
          </Button>
          <Button asChild variant="dark">
            <Link to="/contacts">Contact Us</Link>
          </Button>
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
              to="/electric-bicycles"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Buy an e-bike
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
              Deliver Goods
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
