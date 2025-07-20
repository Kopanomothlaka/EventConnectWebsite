import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Crown } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for personal events and small gatherings",
    features: [
      "Up to 5 events per month",
      "Up to 50 guests per event",
      "Basic RSVP tracking",
      "Event notifications",
      "Mobile app access"
    ],
    popular: false,
    cta: "Get Started Free"
  },
  {
    name: "Premium",
    price: "$19",
    period: "per month",
    description: "Ideal for professional event organizers and businesses",
    features: [
      "Unlimited events",
      "Unlimited guests",
      "Advanced analytics",
      "Custom branding",
      "Priority support",
      "Live chat integration",
      "Photo galleries",
      "Social media integration"
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored solutions for large organizations",
    features: [
      "Everything in Premium",
      "Custom integrations",
      "Dedicated account manager",
      "SSO authentication",
      "Advanced security",
      "Custom reporting",
      "24/7 phone support"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

export const Pricing = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple,
            <span className="text-gradient"> transparent pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your event management needs. 
            Start free and upgrade as you grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative group transition-smooth hover:shadow-medium animate-slide-up ${
                plan.popular 
                  ? 'border-primary shadow-medium scale-105' 
                  : 'border-border/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period !== "pricing" && (
                    <span className="text-muted-foreground ml-2">
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button 
                  className={`w-full mb-6 transition-smooth ${
                    plan.popular 
                      ? 'gradient-primary text-primary-foreground hover:opacity-90' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};