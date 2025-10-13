import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface PartnerContent {
  id: number;
  section_title: string;
  main_title: string;
  main_description: string;
  write_title: string;
  write_question: string;
  write_bullet1: string;
  write_bullet2: string;
  write_bullet3: string;
  write_bullet4: string;
  sponsor_title: string;
  sponsor_question: string;
  sponsor_bullet1: string;
  sponsor_bullet2: string;
  sponsor_bullet3: string;
  sponsor_bullet4: string;
  advise_title: string;
  advise_question: string;
  advise_bullet1: string;
  advise_bullet2: string;
  advise_bullet3: string;
  advise_bullet4: string;
}

const PartnerSection = () => {
  const [partnerContent, setPartnerContent] = useState<PartnerContent | null>(null);

  useEffect(() => {
    const fetchPartnerContent = async () => {
      try {
        const { data, error } = await (supabase as any).from('partnerwithlotessa').select('*').limit(1);
        
        if (error) {
          console.error('Error fetching partner content:', error);
          return;
        }

        if (data && data.length > 0) {
          setPartnerContent(data[0]);
        } else {
          // If no data exists, insert default content
          const defaultContent = {
            section_title: 'Partner With Lotessa',
            main_title: 'Shape the Future of GLP-1 Health Support',
            main_description: 'Lotessa connects brands, clinicians, researchers, and writers with one of the UK\'s fastest-growing GLP-1 communities. Backed by the University of Bradford and trusted by thousands of users, we\'re building a platform where evidence-based knowledge, safe communities, and innovative health tech meet.',
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

          const { error: insertError } = await (supabase as any)
            .from('partnerwithlotessa')
            .insert([defaultContent]);

          if (insertError) {
            console.error('Error inserting default partner content:', insertError);
          } else {
            setPartnerContent(defaultContent as PartnerContent);
          }
        }
      } catch (error) {
        console.error('Error in fetchPartnerContent:', error);
      }
    };

    fetchPartnerContent();
  }, []);

  // Fallback content if no data is available
  const content = partnerContent || {
    section_title: 'Partner With Lotessa',
    main_title: 'Shape the Future of GLP-1 Health Support',
    main_description: 'Lotessa connects brands, clinicians, researchers, and writers with one of the UK\'s fastest-growing GLP-1 communities. Backed by the University of Bradford and trusted by thousands of users, we\'re building a platform where evidence-based knowledge, safe communities, and innovative health tech meet.',
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
    <section id="partner" className="py-3 lg:py-5 bg-white">
      <div className="container mx-auto px-3 max-w-7xl">
        <div className="rounded-2xl px-[16px] py-6 lg:px-[24px] lg:py-8 bg-white">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-display-md text-foreground font-sans">
              {content.section_title}
            </h3>
            <h2 className="text-display-lg text-foreground font-sans leading-tight">
              {content.main_title}
            </h2>
            <p className="text-body-lg text-muted-foreground font-sans text-left leading-relaxed max-w-4xl">
              {content.main_description}
            </p>
          </div>

          {/* Main Content: Two-column layout */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-48">
            {/* Left Column: Partnership Options */}
            <div className="lg:w-[70%] space-y-8 lg:space-y-12">
              {/* Write for Lotessa */}
              <div className="space-y-4">
                <h3 className="text-heading-lg text-foreground font-sans">
                  {content.write_title}
                </h3>
                <p className="text-muted-foreground text-body-lg font-sans font-medium leading-relaxed">
                  {content.write_question}
                </p>
                <ul className="space-y-2 text-muted-foreground text-body-lg font-sans font-normal leading-relaxed">
                  <li>• {content.write_bullet1}</li>
                  <li>• {content.write_bullet2}</li>
                  <li>• {content.write_bullet3}</li>
                  <li>• {content.write_bullet4}</li>
                </ul>
              </div>

              {/* Sponsor & Partner */}
              <div className="space-y-4">
                <h3 className="text-heading-lg text-foreground font-sans">
                  {content.sponsor_title}
                </h3>
                <p className="text-muted-foreground text-body-lg font-sans font-medium leading-relaxed">
                  {content.sponsor_question}
                </p>
                <ul className="space-y-2 text-muted-foreground text-body-lg font-sans font-normal leading-relaxed">
                  <li>• {content.sponsor_bullet1}</li>
                  <li>• {content.sponsor_bullet2}</li>
                  <li>• {content.sponsor_bullet3}</li>
                  <li>• {content.sponsor_bullet4}</li>
                </ul>
              </div>

              {/* Advise and Invest */}
              <div className="space-y-4">
                <h3 className="text-heading-lg text-foreground font-sans">
                  {content.advise_title}
                </h3>
                <p className="text-muted-foreground text-body-lg font-sans font-medium leading-relaxed">
                  {content.advise_question}
                </p>
                <ul className="space-y-2 text-muted-foreground text-body-lg font-sans font-normal leading-relaxed">
                  <li>• {content.advise_bullet1}</li>
                  <li>• {content.advise_bullet2}</li>
                  <li>• {content.advise_bullet3}</li>
                  <li>• {content.advise_bullet4}</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:w-[30%] flex items-center justify-center">
              <img
                src="/lovable-uploads/updated.png"
                alt="Lotessa Progress Tracking Interface"
                className="w-96 lg:w-[28rem] h-auto max-h-full object-contain"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
