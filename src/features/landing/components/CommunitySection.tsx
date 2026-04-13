import { useCommunityContent } from "@/features/landing/hooks/useCommunityContent";
import { TrackingButton } from "@/features/telemetry/components/TrackingButton";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CommunitySection = () => {
  const { heading, title, paragraph } = useCommunityContent();

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
        id="community" 
        className="py-[clamp(4rem,10vw,8rem)] bg-white overflow-hidden"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          >
            {/* Left - Community Illustration - Image Left for Z-Pattern */}
            <motion.div 
              variants={itemVariants}
              className="relative order-2 lg:order-1"
            >
              <div className="max-w-md mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-radial from-[#EFEEE7] via-[#EFEEE7]/90 to-transparent rounded-full -z-10 scale-125 blur-2xl opacity-70"></div>
                <img 
                  src="/lovable-uploads/27dc1d46-0829-4924-bc8f-fb7909028f7e.png" 
                  alt="Lotessa community network" 
                  className="w-full h-auto relative z-10 drop-shadow-2xl" 
                />
              </div>
            </motion.div>

            {/* Right Content - Shifted to Right for Z-Pattern */}
            <div className="space-y-8 order-1 lg:order-2 max-w-2xl">
              <motion.div variants={itemVariants}>
                <h3
                  className="text-display-md font-sora font-semibold tracking-tight mb-4"
                  style={{ color: '#2FB4A5' }}
                >
                  {heading}
                </h3>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl lg:text-5xl font-sora font-semibold tracking-tighter text-[#000000] leading-tight"
              >
                {title}
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="font-sora text-zinc-600 text-body-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>

              <motion.div variants={itemVariants} className="pt-4">
                <TrackingButton 
                  id="join_community_community"
                  variant="coral"
                  onClick={() => window.open('https://app.lotessa.app/register', '_blank')}
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="rounded-xl px-8 h-14 font-sora font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-coral-500/20"
                >
                  Join the Community
                </TrackingButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      
    </>
  );
};

export default CommunitySection;