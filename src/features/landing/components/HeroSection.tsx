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
      <section id="download" className="py-3 lg:py-5 bg-[#F6F8F7]">
        <div className="container mx-auto px-3 max-w-7xl">
          <div className="rounded-2xl px-[16px] py-10 lg:px-[24px] lg:py-14">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center lg:min-h-[650px]">

              {/* Left Content */}
              <div className="flex flex-col justify-center min-h-[650px]">
                <div className="space-y-7">
                  {/* Main heading — Antonio, black on light gray */}
                  <h1
                    ref={headingRef}
                    className="text-4xl lg:text-5xl xl:text-6xl leading-[1.05] text-left font-antonio font-black text-[#000000] whitespace-pre-line"
                    style={{ fontFamily: "'Antonio', sans-serif" }}
                  >
                    {title}
                  </h1>

                  <h2
                    ref={subRef}
                    className="text-2xl font-antonio font-bold text-[#000000]/80"
                    style={{ fontFamily: "'Antonio', sans-serif" }}
                  >
                    {subtitle}
                  </h2>

                  <div className="space-y-4">
                    <p ref={p1Ref} className="font-sora text-[#000000]/85 text-body-lg leading-relaxed">
                      {p1}
                    </p>
                    <p ref={p2Ref} className="font-sora text-[#000000]/85 text-body-md leading-relaxed">
                      {p2}
                    </p>
                  </div>

                  {/* CTA Buttons - Custom styled to maintain layout but match design specs */}
                  <div ref={btnRowRef} className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      id="download_button_hero"
                      onClick={() => setDialogOpen(true)}
                      className="flex items-center justify-center gap-3 px-8 bg-[#2FB4A5] text-white rounded-[8px] font-sora font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-[#26968a] hover:scale-105 active:scale-95 shadow-lg"
                      style={{ minWidth: '220px', height: '56px' }}
                    >
                      <AppleIcon />
                      Download the App
                    </button>

                    <button
                      id="join_community_hero"
                      onClick={() => setDialogOpen(true)}
                      className="flex items-center justify-center gap-3 px-8 border-2 border-[#FF8A73] text-[#FF8A73] rounded-[8px] font-sora font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-[#FF8A73] hover:text-white hover:scale-105 active:scale-95"
                      style={{ minWidth: '220px', height: '56px' }}
                    >
                      <span>Join the Community</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Content — Phone Mockups with Animation and Shadow */}
              <div className="flex justify-center lg:justify-end items-center min-h-[650px]">
                <div className="relative max-w-2xl w-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-radial from-[#2FB4A5]/10 via-[#2FB4A5]/5 to-transparent rounded-2xl -z-10 scale-125" />
                  <div className="animate-float relative z-10 w-full flex justify-center">
                    <img
                      src="/lovable-uploads/ede3f8df-6167-46ea-8bcd-249fdd2c788a.png"
                      alt="Lotessa app interface on iPhone 15 Pro mockups"
                      className="w-full h-auto max-h-full object-contain drop-shadow-[0_45px_50px_rgba(0,0,0,0.15)] scale-110"
                    />
                  </div>
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