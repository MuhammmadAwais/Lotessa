import { useState } from "react";
import { Users } from "lucide-react";
import phoneMockups from "@/assets/phone-mockups.jpg";
import WaitlistDialog from "./WaitlistDialog";
import TestFlightIcon from "./ui/testflight-icon";
const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <section className="py-16 lg:py-24 gradient-bg">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="rounded-2xl p-8 lg:p-12 shadow-sm gradient-bg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl text-primary leading-[1.1] text-left font-semibold xl:text-4xl">Your Health Companion
for GLP1 Medication</h1>
              
              <h2 className="text-2xl text-foreground lg:text-2xl font-medium">
                Track. Learn. Connect. All in one place.
              </h2>
              
              <div className="space-y-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
                <p className="text-slate-600 text-base">
                  Lotessa is launching soon. Be the first to access the all-in-one 
                  app for adults using GLP1 medications like Ozempic, Mounjaro 
                  or Wegovy.
                </p>
                
                <p className="text-slate-600 text-base">
                  Lotessa is a digital health platform designed to support those 
                  using GLP-1 medications such as Ozempic, Mounjaro or 
                  Wegovy. It helps you manage your journey through 
                  personalised tracking, community support, and trusted health 
                  education all in one app.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="app-store-btn flex items-center justify-center gap-3 py-3 text-lg font-semibold px-[20px]">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/lovable-uploads/dc47f67e-9659-4dac-a80c-b332dfa0a032.png" alt="App Store icon" className="w-8 h-8" />
                </div>
                Download the App
              </button>
              
              <button 
                className="community-btn flex items-center justify-center gap-3 px-5 py-3 text-lg font-semibold"
                onClick={() => setDialogOpen(true)}
              >
                <img src="/lovable-uploads/ffd79690-db7e-406b-9046-9a7ce5703267.png" alt="Person icon" className="w-8 h-8" />
                Join the Lotessa Community
              </button>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative max-w-lg w-full">
              <img src="/lovable-uploads/abc220d9-c1c4-4d28-bfa0-ee7571fc840e.png" alt="Lotessa app interface showing weight tracking charts, medication dosage tracking, and progress visualization on two mobile phones" className="w-full h-auto" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    
    <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};
export default HeroSection;