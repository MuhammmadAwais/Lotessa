import { useState } from "react";
import WaitlistDialog from "./WaitlistDialog";
const CommunitySection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <section className="pb-16 lg:pb-24 gradient-bg">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="rounded-2xl p-8 lg:p-12 shadow-sm gradient-bg">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-medium text-muted-foreground mb-4">
            Join the Community
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Community Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="max-w-md mx-auto lg:mx-0">
              <img src="/lovable-uploads/191d085f-2f8b-4a3c-8303-f75d6046a504.png" alt="Community of diverse people connected with dotted lines representing supportive network" className="w-full h-auto" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
              You're Not Alone
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
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