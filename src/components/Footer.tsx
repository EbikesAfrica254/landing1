import logo from "@/assets/ebikes-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img src={logo} alt="Ebikes Africa" className="h-8 brightness-0 invert" />
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Powering Africa's electric mobility future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Business Logistics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">E-Bike Sales</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Rider Network</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Technician Program</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Impact Report</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          © {new Date().getFullYear()} Ebikes Africa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
