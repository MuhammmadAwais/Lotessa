import { useState } from "react";
import { Users } from "lucide-react";
import phoneMockups from "@/assets/phone-mockups.jpg";
import WaitlistDialog from "./WaitlistDialog";
import TestFlightIcon from "./ui/testflight-icon";
const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return <>
      <section className="py-16 lg:py-24 gradient-bg">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="rounded-2xl px-[22px] py-8 lg:px-[38px] lg:py-12 shadow-sm gradient-bg font-sans font-normal text-[18px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:min-h-[600px]">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10 flex flex-col justify-center h-full">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl leading-[1.1] text-left font-bold text-[#001f3f] xl:text-5xl">Your Health Companion
for GLP1 Medication</h1>
              
              <h2 className="text-[28px] text-foreground font-bold font-sans">
                Track. Learn. Connect. All in one place.
              </h2>
              
              <div className="space-y-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
                <p className="text-slate-600 text-[18px] font-sans font-normal">
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
              <button className="flex items-center justify-center">
                <img src="/lovable-uploads/e62ee210-e1fc-485b-9080-27c924643742.png" alt="Download the App" className="h-12" />
              </button>
              
              <button className="flex items-center justify-center" onClick={() => setDialogOpen(true)}>
                <img src="/lovable-uploads/a97005af-398c-4b31-af1a-d153e144ef44.png" alt="Join the Lotessa Community" className="h-12" />
              </button>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative flex justify-center lg:justify-end h-full items-center">
            <div className="relative max-w-lg w-full">
              <img src="/lovable-uploads/ede3f8df-6167-46ea-8bcd-249fdd2c788a.png" alt="Lotessa app interface showing weight tracking charts, medication dosage tracking, and progress visualization on two mobile phones" className="w-full h-auto" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    
    <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>;
};
export default HeroSection;