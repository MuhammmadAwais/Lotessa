import { useState } from "react";
import { Users } from "lucide-react";
import phoneMockups from "@/assets/phone-mockups.jpg";
import WaitlistDialog from "./WaitlistDialog";
import TestFlightIcon from "./ui/testflight-icon";
const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return <>
      <section className="py-3 lg:py-5 bg-white">
      <div className="container mx-auto px-3 max-w-7xl">
        <div className="rounded-2xl px-[16px] py-6 lg:px-[24px] lg:py-8 bg-white font-sans font-normal text-[18px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center lg:min-h-[650px]">
           {/* Left Content */}
           <div className="flex flex-col justify-center min-h-[650px]">
             <div className="space-y-7">
               <h1 className="text-5xl lg:text-6xl leading-[1.1] text-left font-bold text-[#001f3f] xl:text-5xl">Your Health Companion
for GLP1 Medication</h1>
               
               <h2 className="text-[30px] text-foreground font-bold font-sans">
                 Track. Learn. Connect. All in one place.
               </h2>
               
               <div className="space-y-7 text-lg lg:text-xl text-muted-foreground leading-relaxed">
                 <p className="text-slate-600 text-[19px] font-sans font-normal -mt-2">
                   Lotessa is launching soon. Be the first to access the all-in-one 
                   app for adults using GLP1 medications like Ozempic, Mounjaro 
                   or Wegovy.
                 </p>
                 
                 <p className="text-slate-600 text-[17px] -my-2">
                   Lotessa is a digital health platform designed to support those 
                   using GLP-1 medications such as Ozempic, Mounjaro or 
                   Wegovy. It helps you manage your journey through 
                   personalised tracking, community support, and trusted health 
                   education all in one app.
                 </p>
               </div>
               
               {/* CTA Buttons */}
               <div className="flex flex-col sm:flex-row gap-5 pt-4">
                 <button className="flex items-center justify-center">
                   <img src="/lovable-uploads/e62ee210-e1fc-485b-9080-27c924643742.png" alt="Download the App" className="h-13 w-auto" />
                 </button>
                 
                 <button className="flex items-center justify-center" onClick={() => setDialogOpen(true)}>
                   <img src="/lovable-uploads/a97005af-398c-4b31-af1a-d153e144ef44.png" alt="Join the Lotessa Community" className="h-13 w-auto" />
                 </button>
               </div>
             </div>
           </div>

           {/* Right Content - Phone Mockups */}
           <div className="flex justify-center lg:justify-end items-center min-h-[650px]">
              <div className="relative max-w-2xl w-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-radial from-white via-white/90 to-white/40 rounded-2xl -z-10 scale-110"></div>
                <img src="/lovable-uploads/ede3f8df-6167-46ea-8bcd-249fdd2c788a.png" alt="Lotessa app interface showing weight tracking charts, medication dosage tracking, and progress visualization on two mobile phones" className="w-full h-auto max-h-full object-contain relative z-10 scale-105" />
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