import React from "react";
import FeatureSection from "./ui/FeatureSection";

const PartnerSection : React.FC = () => {
  // Data for the sections
  const writeForLotessaItems = [
    "Share your expertise with 10,000+ engaged GLP-1 users.",
    "Publish credited, evidence-based articles in our Knowledge Library.",
    "Help people living with obesity, diabetes, and other metabolic conditions.",
    "Gain visibility as a thought leader in digital health.",
  ];

  const sponsorPartnerItems = [
    "Reach a targeted, motivated audience through meaningful partnerships.",
    "Sponsor community groups aligned with your values.",
    "Support knowledge content that resonates with our members.",
    "Build brand awareness and trust in a growing GLP-1 market.",
  ];

  const adviseInvestItems = [
    "Help us scale Lotessa into a leading UK digital health platform.",
    "Join our advisory board or serve as a non-executive director.",
    "Back a mission-driven, University-supported health innovation.",
    "Invest in an emerging GLP-1 and digital health ecosystem.",
  ];

  return (
    <div className="bg-white font-sans antialiased">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 tracking-wide uppercase">
            Partner With Lotessa
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Shape the Future of GLP-1 Health Support
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Lotessa connects brands, clinicians, researchers, and writers with
            one of the UK’s fastest-growing GLP-1 communities. Backed by the
            University of Bradford and trusted by thousands of users, we’re
            building a platform where evidence-based knowledge, safe
            communities, and innovative health tech meet.
          </p>
        </div>

        <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left Column: Text Content */}
          <div className="space-y-12">
            <FeatureSection
              title="Write for Lotessa"
              question="Are you a medical writer, clinician, or researcher?"
              items={writeForLotessaItems}
            />
            <FeatureSection
              title="Sponsor & Partner"
              question="Are you a health and wellness brand?"
              items={sponsorPartnerItems}
            />
            <FeatureSection
              title="Advise and Invest"
              question="Are you an investor, advisor, or strategic leader?"
              items={adviseInvestItems}
            />
          </div>

          {/* Right Column: Image Placeholder */}
          {/* Stacks below text on mobile (default), moves to 2nd column on lg screens */}
          <div className="mt-12 lg:mt-0 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-sm mx-auto lg:mx-0">
              <div
                className="aspect-[9/19] w-max h-screen h-1/3 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-gray-400 font-medium">
                  <img src="/assets/PartnerImage.png" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;