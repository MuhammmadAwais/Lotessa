import { useState } from "react";
import { useHeroContent } from "@/features/landing/hooks/useHeroContent";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { title, subtitle, p1, p2 } = useHeroContent();

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <section 
        id="download" 
        className="py-[clamp(4rem,10vw,8rem)] bg-[#F6F8F7] overflow-hidden"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[600px] lg:min-h-[700px]"
          >
            {/* Left Content - Optically Centered */}
            <div className="flex flex-col justify-center h-full max-w-2xl mx-auto lg:mx-0">
              <div className="space-y-8">
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl lg:text-5xl xl:text-6xl text-left font-sora font-semibold tracking-tighter text-[#000000] leading-[1.1] whitespace-pre-line"
                >
                  {title}
                </motion.h1>

                <motion.h2
                  variants={itemVariants}
                  className="text-2xl font-sora font-semibold tracking-tight text-[#000000]/80"
                >
                  {subtitle}
                </motion.h2>

                <motion.div variants={itemVariants} className="space-y-6">
                  <p className="font-sora text-zinc-600 text-body-lg leading-relaxed">
                    {p1}
                  </p>
                  <p className="font-sora text-zinc-600 text-body-md leading-relaxed">
                    {p2}
                  </p>
                </motion.div>

                {/* CTA Buttons - Custom styled for premium feel */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 pt-4">
                  <button
                    id="download_button_hero"
                    onClick={() => window.open('https://app.lotessa.app/register', '_blank')}
                    className="flex items-center justify-center gap-3 px-8 bg-[#2FB4A5] text-white rounded-xl font-sora font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-[#26968a] hover:scale-105 active:scale-95 hover:shadow-[0_10px_25px_-5px_rgba(47,180,165,0.4)]"
                    style={{ minWidth: '240px', height: '60px' }}
                  >
                    
                    Get Lotessa
                  </button>

                  <button
                    id="join_community_hero"
                    onClick={() => window.open('https://app.lotessa.app/register', '_blank')}
                    className="flex items-center justify-center gap-3 px-8 border border-zinc-200 bg-white/50 backdrop-blur-sm text-[#FF8A73] rounded-xl font-sora font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-zinc-50 hover:border-zinc-300 hover:scale-105 active:scale-95"
                    style={{ minWidth: '240px', height: '60px' }}
                  >
                    <span>Join the Community</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Right Content — Phone Mockups with Silhouette Drop Shadow */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center lg:justify-end items-center"
            >
              <div className="relative max-w-2xl w-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-radial from-[#2FB4A5]/10 via-[#2FB4A5]/5 to-transparent rounded-full -z-10 scale-150 blur-3xl opacity-60" />
                <div className="relative z-10 w-full flex justify-center lg:justify-end">
                  <img
                    src="/lovable-uploads/ede3f8df-6167-46ea-8bcd-249fdd2c788a.png"
                    alt="Lotessa app interface on iPhone 15 Pro mockups"
                    className="w-full h-auto max-h-[650px] object-contain drop-shadow-[0_45px_50px_rgba(0,0,0,0.15)] filter"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      
    </>
  );
};

export default HeroSection;