import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Screenshots", href: "#screenshots" },
    { name: "Download", href: "#download" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
    { name: "Press Kit", href: "#press" },
  ],
  support: [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ],
  resources: [
    { name: "API Documentation", href: "#api" },
    { name: "Event Templates", href: "#templates" },
    { name: "Best Practices", href: "#guides" },
    { name: "Community", href: "#community" },
  ]
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="text-center mb-16 pb-16 border-b border-background/20">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay updated with EventConnect
          </h3>
          <p className="text-background/80 mb-8 max-w-2xl mx-auto">
            Get the latest news, tips, and exclusive offers delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email"
              placeholder="Enter your email"
              className="bg-background/10 border-background/20 text-background placeholder:text-background/60 focus:ring-2 focus:ring-primary/50"
            />
            <Button className="gradient-primary text-primary-foreground hover:opacity-90 transition-smooth">
              Subscribe
            </Button>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">EventConnect</h2>
            <p className="text-background/80 mb-6 leading-relaxed">
              The ultimate event management platform that connects people and creates 
              unforgettable experiences. Join thousands of event organizers worldwide.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@eventconnect.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Event Street, Tech City</span>
              </div>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-background transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-background transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-background transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-background transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-background/60 text-sm">
            © 2024 EventConnect. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-spring"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};