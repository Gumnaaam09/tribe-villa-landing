import { MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-sidehustle-villa.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="SideHustle Villa" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="font-semibold text-foreground">Side Hustle Villa</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A Bangalore-based co-living space for founders, creators, and hustlers. 
              Built for builders, by builders.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Koramangala, Bangalore</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hello@sidehustlevilla.com" className="hover:text-primary transition-colors">
                  hello@sidehustlevilla.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9XXXXXXXXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
                What We Offer
              </a>
              <a href="#philosophy" className="block text-muted-foreground hover:text-primary transition-colors">
                Philosophy
              </a>
              <a href="#apply" className="block text-muted-foreground hover:text-primary transition-colors">
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Side Hustle Villa — Built for builders.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
