import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroPhoneMockup from "@/assets/hero-phone-mockup.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Connect Every
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                {" "}Event
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Discover, manage, and attend events seamlessly. From invitations to RSVPs, 
              EventConnect makes every gathering unforgettable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-blue-50 transition-smooth shadow-medium group text-lg px-8 py-4"
              >
                Try for Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 transition-smooth text-lg px-8 py-4"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>100k+ Events Created</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>500k+ Downloads</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="relative animate-float">
            <div className="relative mx-auto max-w-sm">
              <img 
                src={heroPhoneMockup} 
                alt="EventConnect App Interface" 
                className="w-full h-auto shadow-large rounded-3xl"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/20 backdrop-blur-sm rounded-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-white text-sm font-semibold">Live Event</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
    </section>
  );
};