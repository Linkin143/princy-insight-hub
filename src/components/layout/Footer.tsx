import { Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import companyLogo from "../../../public/PSC_logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-teal-dark text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                className="w-10 h-10 rounded-full object-cover border-2 border-primary-foreground/30" 
                src={companyLogo} 
                alt="Princy Shah Consulting"
              />
              <span className="font-display font-bold text-xl">
                Princy Shah Consulting
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Insight that thinks. Vision that leads.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Services", "Sample Work", "Testimonials"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Process Reviews", id: "process-reviews" },
                { name: "SOPs", id: "sops" },
                { name: "Business Models", id: "business-models" },
                { name: "Pitch Decks", id: "pitch-decks" },
                { name: "Financial Forecasting", id: "financial-forecasting" },
                { name: "Strategy Optimization", id: "strategy-optimization" },
                { name: "Advisory Support", id: "advisory-support" },
                { name: "Technology Support", id: "technology-support" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={`/services#${item.id}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary-foreground/70" />
                <a href="tel:9284261593" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  928-426-1593
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary-foreground/70" />
                <a href="mailto:princyshahconsulting@gmail.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  princyshahconsulting@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={16} className="text-primary-foreground/70" />
                <a href="https://www.linkedin.com/in/princy-shah-071882176/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 Princy Shah Consulting. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}