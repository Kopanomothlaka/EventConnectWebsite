import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/assets/Sleek__EventConnect__Logo_with_Overlapping_Circles-removebg-preview.png";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Our app", href: "#screenshots" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="EventConnect Logo" className="w-10 h-10 mr-3 rounded-xl bg-white object-contain" />
            <span className="text-2xl font-bold text-foreground">
              EventConnect
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-smooth font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              className="border-border hover:bg-muted transition-smooth"
              onClick={() => window.location.href = '/sign-in'}
            >
              Sign In
            </Button>
            <Button 
              className="gradient-primary text-primary-foreground hover:opacity-90 transition-smooth group"
              onClick={() => window.location.href = '/try-free'}
            >
              Try Free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-md animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-smooth"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="flex flex-col gap-3 px-4 pt-4 border-t border-border/50">
                <Button 
                  variant="outline" 
                  className="w-full justify-center"
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = '/sign-in';
                  }}
                >
                  Sign In
                </Button>
                <Button 
                  className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-smooth group"
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = '/try-free';
                  }}
                >
                  Try Free
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};