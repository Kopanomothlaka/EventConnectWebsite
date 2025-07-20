import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Users, 
  MessageCircle, 
  Bell, 
  Map, 
  Camera,
  CheckCircle,
  Share2
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Event Management",
    description: "Create, organize, and manage events with intuitive tools and automated scheduling."
  },
  {
    icon: Users,
    title: "Guest Management",
    description: "Send invitations, track RSVPs, and manage attendee lists with ease."
  },
  {
    icon: MessageCircle,
    title: "Live Event Chat",
    description: "Keep attendees connected with real-time messaging and announcements."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Never miss important updates with customizable push notifications."
  },
  {
    icon: Map,
    title: "Location Integration",
    description: "Share event locations with integrated maps and navigation assistance."
  },
  {
    icon: Camera,
    title: "Photo Sharing",
    description: "Capture and share memorable moments with built-in photo galleries."
  },
  {
    icon: CheckCircle,
    title: "RSVP Tracking",
    description: "Real-time attendance tracking with detailed analytics and insights."
  },
  {
    icon: Share2,
    title: "Social Integration",
    description: "Share events across social platforms and increase attendance."
  }
];

export const Features = () => {
  return (
    <section className="py-20 lg:py-32 gradient-feature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need to
            <span className="text-gradient"> create amazing events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From planning to execution, EventConnect provides all the tools you need 
            to make your events successful and memorable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-smooth border-border/50 bg-card/50 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-spring">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};