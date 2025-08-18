import { Download, Users } from "lucide-react";
import phoneMockups from "@/assets/phone-mockups.jpg";

const HeroSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Your Health Companion for GLP1 Medication
              </h1>
              
              <h2 className="text-xl lg:text-2xl font-semibold text-foreground">
                Track. Learn. Connect. All in one place.
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Lotessa is launching soon. Be the first to access the all-in-one 
                  app for adults using GLP1 medications like Ozempic, Mounjaro 
                  or Wegovy.
                </p>
                
                <p>
                  Lotessa is a digital health platform designed to support those 
                  using GLP-1 medications such as Ozempic, Mounjaro or 
                  Wegovy. It helps you manage your journey through 
                  personalised tracking, community support, and trusted health 
                  education all in one app.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="app-store-btn">
                <Download size={20} />
                Download the App
              </button>
              
              <button className="community-btn">
                <Users size={20} />
                Join the Lotessa Community
              </button>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative">
            <img
              src={phoneMockups}
              alt="Lotessa app interface on mobile phones"
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;