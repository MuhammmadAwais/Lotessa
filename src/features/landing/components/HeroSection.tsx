import { useState } from "react";
import { Users } from "lucide-react";
import phoneMockups from "@/assets/phone-mockups.jpg";
import { useHeroContent } from "@/features/landing/hooks/useHeroContent";
import { TrackingButton } from "@/features/telemetry/components/TrackingButton";
import WaitlistDialog from "@/components/WaitlistDialog";
import TestFlightIcon from "@/components/ui/testflight-icon";
const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { title, subtitle, p1, p2 } = useHeroContent();
  return <>
      <section id="download" className="py-3 lg:py-5 bg-white">
      <div className="container mx-auto px-3 max-w-7xl">
        <div className="rounded-2xl px-[16px] py-6 lg:px-[24px] lg:py-8 bg-white font-sans font-normal text-body-lg">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center lg:min-h-[650px]">
           {/* Left Content */}
           <div className="flex flex-col justify-center min-h-[650px]">
              <div className="space-y-7">
               <h2 className="text-4xl lg:text-4xl leading-[1.1] text-left font-bold text-foreground xl:text-4xl whitespace-pre-line">{title}</h2>
               
               <h2 className="text-display-md text-foreground font-bold font-sans">
                 {subtitle}
               </h2>
               
               <div className="space-y-7 text-lg lg:text-xl text-muted-foreground leading-relaxed">
                 <p className="text-muted-foreground text-body-lg font-sans font-normal -mt-2">
                   {p1}
                 </p>
                 
                 <p className="text-muted-foreground text-body-md -my-2">
                   {p2}
                 </p>
               </div>
               
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 pt-4">
                  <TrackingButton 
                    id="download_button_hero"
                    className="p-0 border-none bg-transparent hover:bg-transparent h-auto"
                    onClick={() => setDialogOpen(true)}
                  >
                    <img src="/lovable-uploads/Group 52.png" alt="Download the App" className="h-11 w-auto" />
                  </TrackingButton>
                  
                  <TrackingButton 
                    id="join_community_hero"
                    className="p-0 border-none bg-transparent hover:bg-transparent h-auto"
                    onClick={() => setDialogOpen(true)}
                  >
                    <img src="/lovable-uploads/a97005af-398c-4b31-af1a-d153e144ef44.png" alt="Join the Lotessa Community" className="h-11 w-auto" />
                  </TrackingButton>
                </div>
             </div>
           </div>

           {/* Right Content - Phone Mockups */}
           <div className="flex justify-center lg:justify-end items-center min-h-[650px]">
              <div className="relative max-w-2xl w-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-radial from-[#EFEEE7] via-[#EFEEE7]/90 to-[#EFEEE7]/40 rounded-2xl -z-10 scale-110"></div>
                {/* Additional gradient in the center-top area between phones */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-radial from-[#EFEEE7] via-[#EFEEE7]/95 to-[#EFEEE7]/60 rounded-full z-0"></div>
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