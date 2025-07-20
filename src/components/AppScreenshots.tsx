import { Card } from "@/components/ui/card";

const screenshots = [
  {
    title: "Event Discovery",
    description: "Browse and discover events happening around you",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=400&h=800"
  },
  {
    title: "Event Creation",
    description: "Create beautiful events with rich media and details",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975cd17?auto=format&fit=crop&w=400&h=800"
  },
  {
    title: "Guest Management",
    description: "Manage attendees, send invites, and track RSVPs",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&h=800"
  }
];

export const AppScreenshots = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See EventConnect
            <span className="text-gradient"> in action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the intuitive interface designed to make event management 
            effortless and enjoyable for everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="overflow-hidden border-border/50 shadow-soft hover:shadow-medium transition-smooth">
                <div className="relative">
                  <div className="aspect-[9/16] bg-gradient-to-br from-primary/10 to-primary-light/10 flex items-center justify-center">
                    <img 
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {screenshot.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {screenshot.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};