import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-creative-orange/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-creative-terracotta/20 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Creative</span>
              <br />
              <span className="text-foreground">Designer</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Crafting meaningful visual experiences that bridge cultures and tell powerful stories through thoughtful design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:opacity-90 transition-opacity text-lg px-8"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8"
              >
                Download CV
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl shadow-soft hover-lift">
              <img
                src={heroPortrait}
                alt="Lotessa - Creative Designer"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-creative-orange rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-creative-terracotta rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-accent" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;