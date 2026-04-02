import { useState } from "react";
import WaitlistDialog from "@/components/WaitlistDialog";
import { useCommunityContent } from "@/features/landing/hooks/useCommunityContent";
import { TrackingButton } from "@/features/telemetry/components/TrackingButton";
const CommunitySection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { heading, title, paragraph } = useCommunityContent();

  return (
    <>
      <section id="community" className="py-3 lg:py-5" style={{ background: '#F6F8F7' }}>
      <div className="container mx-auto px-3 max-w-7xl">
        <div className="rounded-2xl px-[16px] py-6 lg:px-[24px] lg:py-8 bg-white">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3
            className="text-display-md text-foreground font-bold mb-4"
            style={{ fontFamily: "'Antonio', sans-serif", color: '#2FB4A5' }}
          >
            {heading}
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Community Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="max-w-md mx-auto lg:mx-0 relative">
              <div className="absolute inset-0 bg-gradient-radial from-[#EFEEE7] via-[#EFEEE7]/90 to-[#EFEEE7]/40 rounded-2xl -z-10 scale-110"></div>
              <img src="/lovable-uploads/27dc1d46-0829-4924-bc8f-fb7909028f7e.png" alt="Community of diverse people connected with dotted lines representing supportive network" className="w-full h-auto relative z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <h2
              className="text-display-lg text-foreground leading-tight"
              style={{ fontFamily: "'Antonio', sans-serif", color: '#000000' }}
            >
              {title}
            </h2>
            
            <p className="font-sora text-muted-foreground text-body-lg leading-relaxed">
              {paragraph}
            </p>

            <div className="pt-4">
              <TrackingButton 
                id="join_community_community"
                variant="coral"
                onClick={() => setDialogOpen(true)}
              >
                Join the Community
              </TrackingButton>
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