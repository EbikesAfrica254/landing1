import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 bg-primary">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold">Ebikes Africa</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">
            Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
};
