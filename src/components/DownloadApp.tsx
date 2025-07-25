import { Button } from "@/components/ui/button";
import { Smartphone, ArrowRight } from "lucide-react";

export const DownloadApp = () => {
  return (
    <section className="py-20 lg:py-32 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="gradient-primary w-20 h-20 rounded-full flex items-center justify-center animate-float">
              <Smartphone className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Ready to transform your
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {" "}events?
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Download EventConnect today and start creating unforgettable experiences. 
            Join hundreds of thousands of event organizers worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* App Store Button */}
            <Button 
              size="lg"
              className="bg-black hover:bg-gray-800 text-white border-0 px-8 py-6 h-auto transition-smooth group"
            >
              <div className="flex items-center gap-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </div>
            </Button>
            
            {/* Google Play Button */}
            <Button 
              size="lg"
              className="bg-black hover:bg-gray-800 text-white border-0 px-8 py-6 h-auto transition-smooth group"
            >
              <div className="flex items-center gap-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </div>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>4.9★ Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>500K+ Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Free to Start</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};