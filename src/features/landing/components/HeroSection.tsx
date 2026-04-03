import { useState, useEffect, useRef } from "react";
import { useHeroContent } from "@/features/landing/hooks/useHeroContent";
import { TrackingButton, AppleIcon } from "@/features/telemetry/components/TrackingButton";
import WaitlistDialog from "@/components/WaitlistDialog";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { title, subtitle, p1, p2 } = useHeroContent();

  const headingRef  = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLHeadingElement>(null);
  const p1Ref       = useRef<HTMLParagraphElement>(null);
  const p2Ref       = useRef<HTMLParagraphElement>(null);
  const btnRowRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [headingRef.current, subRef.current, p1Ref.current, p2Ref.current, btnRowRef.current];
    gsap.fromTo(
      targets,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.14,
        ease: "power2.out",
        clearProps: "transform",
      }
    );
  }, []);

  return (
    <>
      <section id="download" className="py-3 lg:py-5" style={{ background: "#2FB4A5" }}>
        <div className="container mx-auto px-3 max-w-7xl">
          <div className="rounded-2xl px-[16px] py-10 lg:px-[24px] lg:py-14">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center lg:min-h-[650px]">

              {/* Left Content */}
              <div className="flex flex-col justify-center min-h-[650px]">
                <div className="space-y-7">
                  {/* Main heading — Antonio, white on teal */}
                  <h1
                    ref={headingRef}
                    className="text-4xl lg:text-5xl xl:text-6xl leading-[1.05] text-left font-antonio font-black text-black whitespace-pre-line"
                    style={{ fontFamily: "'Antonio', sans-serif" }}
                  >
                    {title}
                  </h1>

                  <h2
                    ref={subRef}
                    className="text-2xl font-antonio font-bold text-black/80"
                    style={{ fontFamily: "'Antonio', sans-serif" }}
                  >
                    {subtitle}
                  </h2>

                  <div className="space-y-4">
                    <p ref={p1Ref} className="font-sora text-black/85 text-body-lg leading-relaxed">
                      {p1}
                    </p>
                    <p ref={p2Ref} className="font-sora text-black/85 text-body-md leading-relaxed">
                      {p2}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div ref={btnRowRef} className="flex flex-col sm:flex-row gap-4 pt-2">
                    <TrackingButton
                      id="download_button_hero"
                      variant="black"
                      onClick={() => setDialogOpen(true)}
                      icon={<AppleIcon />}
                    >
                      Download the App
                    </TrackingButton>

                    <TrackingButton
                      id="join_community_hero"
                      variant="coral"
                      onClick={() => setDialogOpen(true)}
                      icon={<ArrowRight className="w-5 h-5" />}
                    >
                      Join the Community
                    </TrackingButton>
                  </div>
                </div>
              </div>

              {/* Right Content — Phone Mockups */}
              <div className="flex justify-center lg:justify-end items-center min-h-[650px]">
                <div className="relative max-w-2xl w-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-radial from-[#26968a] via-[#26968a]/60 to-transparent rounded-2xl -z-10 scale-110" />
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-radial from-[#26968a] via-[#26968a]/60 to-transparent rounded-full z-0" />
                  <img
                    src="/lovable-uploads/ede3f8df-6167-46ea-8bcd-249fdd2c788a.png"
                    alt="Lotessa app interface showing weight tracking charts, medication dosage tracking, and progress visualization on two mobile phones"
                    className="w-full h-auto max-h-full object-contain relative z-10 scale-105"
                  />
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