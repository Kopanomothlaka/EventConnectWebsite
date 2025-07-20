import { Card } from "@/components/ui/card";
import Img1 from "@/assets/IMG-20250720-WA0008.jpg";
import Img2 from "@/assets/IMG-20250720-WA0009.jpg";
import Img3 from "@/assets/IMG-20250720-WA0010.jpg";
import Img4 from "@/assets/IMG-20250720-WA0011.jpg";
import Img5 from "@/assets/IMG-20250720-WA0012.jpg";
import Img6 from "@/assets/IMG-20250720-WA0013.jpg";
import Img7 from "@/assets/IMG-20250720-WA0014.jpg";
import Img8 from "@/assets/IMG-20250720-WA0015.jpg";
import Logo from "@/assets/Sleek__EventConnect__Logo_with_Overlapping_Circles-removebg-preview.png";

const screenshots = [
  { image: Img1 },
  { image: Img2 },
  { image: Img3 },
  { image: Img4 },
  { image: Img5 },
  { image: Img6 },
  { image: Img7 },
  { image: Img8 },
  { image: Logo },
];

export const AppScreenshots = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See our app
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
                      alt={`App Screenshot ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};