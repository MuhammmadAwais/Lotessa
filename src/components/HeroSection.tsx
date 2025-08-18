import { useState } from "react";
import { Users } from "lucide-react";
import phoneMockups from "@/assets/phone-mockups.jpg";
import WaitlistDialog from "./WaitlistDialog";
import TestFlightIcon from "./ui/testflight-icon";
const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return <>
      <section className="py-6 lg:py-8 gradient-bg">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="rounded-2xl px-[32px] py-12 lg:px-[48px] lg:py-16 gradient-bg font-sans font-normal text-[20px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start lg:min-h-[700px]">
           {/* Left Content */}
           <div className="space-y-6 lg:space-y-8 flex flex-col justify-center h-full">
             <div className="space-y-8">
               <h1 className="text-6xl lg:text-7xl leading-[1.1] text-left font-bold text-[#001f3f] xl:text-6xl">Your Health Companion
for GLP1 Medication</h1>
               
               <h2 className="text-[32px] text-foreground font-bold font-sans">
                 Track. Learn. Connect. All in one place.
               </h2>
               
               <div className="space-y-8 text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                 <p className="text-slate-600 text-[20px] font-sans font-normal -mt-2">
                   Lotessa is launching soon. Be the first to access the all-in-one 
                   app for adults using GLP1 medications like Ozempic, Mounjaro 
                   or Wegovy.
                 </p>
                 
                 <p className="text-slate-600 text-lg -my-2">
                   Lotessa is a digital health platform designed to support those 
                   using GLP-1 medications such as Ozempic, Mounjaro or 
                   Wegovy. It helps you manage your journey through 
                   personalised tracking, community support, and trusted health 
                   education all in one app.
                 </p>
               </div>
             </div>

             {/* CTA Buttons */}
             <div className="flex flex-col sm:flex-row gap-6 pt-4">
               <button className="flex items-center justify-center">
                 <img src="/lovable-uploads/e62ee210-e1fc-485b-9080-27c924643742.png" alt="Download the App" className="h-14 w-auto" />
               </button>
               
               <button className="flex items-center justify-center" onClick={() => setDialogOpen(true)}>
                 <img src="/lovable-uploads/a97005af-398c-4b31-af1a-d153e144ef44.png" alt="Join the Lotessa Community" className="h-14 w-auto" />
               </button>
             </div>
           </div>

           {/* Right Content - Phone Mockups */}
           <div className="relative flex justify-center lg:justify-end items-center h-full">
             <div className="relative max-w-3xl w-full h-full flex items-center">
               <div className="absolute inset-0 bg-gradient-radial from-white via-white/90 to-white/40 rounded-2xl -z-10 scale-110"></div>
               <img src="/lovable-uploads/ede3f8df-6167-46ea-8bcd-249fdd2c788a.png" alt="Lotessa app interface showing weight tracking charts, medication dosage tracking, and progress visualization on two mobile phones" className="w-full h-auto max-h-full object-contain relative z-10 scale-110" />
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