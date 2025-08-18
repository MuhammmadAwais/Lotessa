import { useState } from "react";
import WaitlistDialog from "./WaitlistDialog";
const CommunitySection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <section className="pt-6 pb-24 lg:pt-8 lg:pb-32 gradient-bg">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="rounded-2xl px-[22px] py-8 lg:px-[38px] lg:py-12 gradient-bg">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-[30px] font-normal text-[#001F3F] font-sans mb-4">
            Join the Community
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Community Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="max-w-md mx-auto lg:mx-0 relative">
              <div className="absolute inset-0 bg-gradient-radial from-[#B2AC88] via-[#B2AC88]/90 to-[#B2AC88]/40 rounded-2xl -z-10 scale-110"></div>
              <img src="/lovable-uploads/27dc1d46-0829-4924-bc8f-fb7909028f7e.png" alt="Community of diverse people connected with dotted lines representing supportive network" className="w-full h-auto relative z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <h2 className="text-[52px] font-bold text-[#001F3F] leading-tight font-sans">
              You're Not Alone
            </h2>
            
            <p className="text-slate-600 text-[18px] font-sans font-normal leading-relaxed">
              Join a supportive, judgement-free community where you can ask questions, 
              share progress, and connect with others who understand your journey. 
              Whether you're just starting or deep into your transformation, there's a 
              space for you here.
            </p>

            <div className="pt-4">
              <button 
                className="community-btn"
                onClick={() => setDialogOpen(true)}
              >
                <img src="/lovable-uploads/ffd79690-db7e-406b-9046-9a7ce5703267.png" alt="Person icon" className="w-8 h-8" />
                Join the Lotessa Community
              </button>
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
export default CommunitySection;