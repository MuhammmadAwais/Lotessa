import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';

import { PartnerContent } from '@/types/content';

const PartnerSection = () => {
  const [partnerContent, setPartnerContent] = useState<PartnerContent | null>(null);

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

  useEffect(() => {
    const fetchPartnerContent = async () => {
      try {
        const { data } = await (supabase as any)
          .from('partnerwithlotessa')
          .select('*')
          .limit(1) as { data: PartnerContent[] | null };
          
        if (data && data.length > 0) {
          setPartnerContent(data[0]);
        }
      } catch (error) {
        console.error('Error in fetchPartnerContent:', error);
      }
    };
    fetchPartnerContent();
  }, []);

  const content = partnerContent || {
    section_title: 'Partner With Lotessa',
    main_title: 'Shape the Future of GLP-1 Health Support',
    main_description: 'Lotessa connects brands, clinicians, researchers, and writers with one of the UK\'s fastest-growing GLP-1 communities.',
    write_title: 'Write for Lotessa',
    write_question: 'Are you a medical writer, clinician, or researcher?',
    write_bullet1: 'Share your expertise with 10,000+ engaged GLP-1 users.',
    write_bullet2: 'Publish credited, evidence-based articles in our Knowledge Library.',
    write_bullet3: 'Help people living with obesity, diabetes, and other metabolic conditions.',
    write_bullet4: 'Gain visibility as a thought leader in digital health.',
    sponsor_title: 'Sponsor & Partner',
    sponsor_question: 'Are you a health and wellness brand?',
    sponsor_bullet1: 'Reach a targeted, motivated audience through meaningful partnerships.',
    sponsor_bullet2: 'Sponsor community groups aligned with your values.',
    sponsor_bullet3: 'Support knowledge content that resonates with our members.',
    sponsor_bullet4: 'Build brand awareness and trust in a growing GLP-1 market.',
    advise_title: 'Advise and Invest',
    advise_question: 'Are you an investor, advisor, or strategic leader?',
    advise_bullet1: 'Help us scale Lotessa into a leading UK digital health platform.',
    advise_bullet2: 'Join our advisory board or serve as a non-executive director.',
    advise_bullet3: 'Back a mission-driven, University-supported health innovation.',
    advise_bullet4: 'Invest in an emerging GLP-1 and digital health ecosystem.'
  };

  return (
    <section id="partner" className="py-[clamp(4rem,10vw,8rem)] bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <motion.h3
              variants={itemVariants}
              className="text-display-md font-sora font-semibold tracking-tight uppercase text-xs sm:text-sm"
              style={{ color: '#2FB4A5' }}
            >
              {content.section_title}
            </motion.h3>
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-sora font-semibold tracking-tighter text-[#000000] leading-tight"
            >
              {content.main_title}
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="font-sora text-zinc-600 text-body-lg leading-relaxed max-w-2xl mx-auto"
            >
              {content.main_description}
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Column: Partnership Options */}
            <div className="lg:w-[65%] space-y-12">
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl font-sora font-semibold text-[#000000]">
                  {content.write_title}
                </h3>
                <p className="font-sora text-zinc-600 text-body-lg font-medium">
                  {content.write_question}
                </p>
                <ul className="space-y-3">
                  {[content.write_bullet1, content.write_bullet2, content.write_bullet3, content.write_bullet4].map((b, i) => (
                    <li key={i} className="flex items-start gap-3 font-sora text-zinc-500 text-body-md">
                      <span className="mt-1 shrink-0 text-[#FF8A73]">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="h-px bg-zinc-100" />

              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl font-sora font-semibold text-[#000000]">
                  {content.sponsor_title}
                </h3>
                <p className="font-sora text-zinc-600 text-body-lg font-medium">
                  {content.sponsor_question}
                </p>
                <ul className="space-y-3">
                  {[content.sponsor_bullet1, content.sponsor_bullet2, content.sponsor_bullet3, content.sponsor_bullet4].map((b, i) => (
                    <li key={i} className="flex items-start gap-3 font-sora text-zinc-500 text-body-md">
                      <span className="mt-1 shrink-0 text-[#FF8A73]">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right Column: Image */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-[35%] flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-teal-500/5 rounded-full blur-3xl scale-110" />
                <img
                  src="/lovable-uploads/updated.png"
                  alt="Lotessa Interface"
                  className="w-80 lg:w-96 h-auto relative z-10 drop-shadow-3xl"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;
