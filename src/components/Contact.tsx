import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get in
            <span className="text-gradient"> touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions or need support? We're here to help you make your events successful. 
            Reach out to our friendly team.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's start a conversation
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you need technical support, have questions about pricing, 
                or want to explore enterprise solutions, our team is ready to assist you.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  description: "support@eventconnect.com",
                  action: "Get support within 24 hours"
                },
                {
                  icon: MessageCircle,
                  title: "Live Chat",
                  description: "Available 9 AM - 6 PM EST",
                  action: "Start chat for instant help"
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  description: "+1 (555) 123-4567",
                  action: "Mon-Fri, 9 AM - 6 PM EST"
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  description: "123 Event Street, Tech City",
                  action: "Schedule an appointment"
                }
              ].map((contact, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-smooth group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="gradient-primary w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-spring">
                    <contact.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {contact.title}
                    </h4>
                    <p className="text-muted-foreground font-medium mb-1">
                      {contact.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {contact.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-medium border-border/50 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input 
                      placeholder="John"
                      className="transition-smooth focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="transition-smooth focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input 
                    type="email"
                    placeholder="john@example.com"
                    className="transition-smooth focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input 
                    placeholder="How can we help you?"
                    className="transition-smooth focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="transition-smooth focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-smooth"
                  size="lg"
                >
                  Send Message
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  We'll get back to you within 24 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};