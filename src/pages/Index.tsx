import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AppScreenshots } from "@/components/AppScreenshots";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { DownloadApp } from "@/components/DownloadApp";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <AppScreenshots />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default Index;
