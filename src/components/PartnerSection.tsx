const PartnerSection = () => {
  return (
    <section id="partner" className="py-3 lg:py-5 bg-white">
      <div className="container mx-auto px-3 max-w-7xl">
        <div className="rounded-2xl px-[16px] py-6 lg:px-[24px] lg:py-8 bg-white">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-display-md text-foreground font-sans">
              Partner With Lotessa
            </h3>
            <h2 className="text-display-lg text-foreground font-sans leading-tight">
              Shape the Future of GLP-1 Health Support
            </h2>
            <p className="text-body-lg text-muted-foreground font-sans text-left leading-relaxed max-w-4xl">
              Lotessa connects brands, clinicians, researchers, and writers with one of the UK's fastest-growing GLP-1 communities. Backed by the University of Bradford and trusted by thousands of users, we're building a platform where evidence-based knowledge, safe communities, and innovative health tech meet.
            </p>
          </div>

          {/* Main Content: Two-column layout */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-48">
            {/* Left Column: Partnership Options */}
            <div className="flex-1 space-y-8 lg:space-y-12">
              {/* Write for Lotessa */}
              <div className="space-y-4">
                <h3 className="text-heading-lg text-foreground font-sans">
                  Write for Lotessa
                </h3>
                <p className="text-muted-foreground text-body-lg font-sans font-medium leading-relaxed">
                  Are you a medical writer, clinician, or researcher?
                </p>
                <ul className="space-y-2 text-muted-foreground text-body-lg font-sans font-normal leading-relaxed">
                  <li>• Share your expertise with 10,000+ engaged GLP-1 users.</li>
                  <li>• Publish credited, evidence-based articles in our Knowledge Library.</li>
                  <li>• Help people living with obesity, diabetes, and other metabolic conditions.</li>
                  <li>• Gain visibility as a thought leader in digital health.</li>
                </ul>
              </div>

              {/* Sponsor & Partner */}
              <div className="space-y-4">
                <h3 className="text-heading-lg text-foreground font-sans">
                  Sponsor & Partner
                </h3>
                <p className="text-muted-foreground text-body-lg font-sans font-medium leading-relaxed">
                  Are you a health and wellness brand?
                </p>
                <ul className="space-y-2 text-muted-foreground text-body-lg font-sans font-normal leading-relaxed">
                  <li>• Reach a targeted, motivated audience through meaningful partnerships.</li>
                  <li>• Sponsor community groups aligned with your values.</li>
                  <li>• Support knowledge content that resonates with our members.</li>
                  <li>• Build brand awareness and trust in a growing GLP-1 market.</li>
                </ul>
              </div>

              {/* Advise and Invest */}
              <div className="space-y-4">
                <h3 className="text-heading-lg text-foreground font-sans">
                  Advise and Invest
                </h3>
                <p className="text-muted-foreground text-body-lg font-sans font-medium leading-relaxed">
                  Are you an investor, advisor, or strategic leader?
                </p>
                <ul className="space-y-2 text-muted-foreground text-body-lg font-sans font-normal leading-relaxed">
                  <li>• Help us scale Lotessa into a leading UK digital health platform.</li>
                  <li>• Join our advisory board or serve as a non-executive director.</li>
                  <li>• Back a mission-driven, University-supported health innovation.</li>
                  <li>• Invest in an emerging GLP-1 and digital health ecosystem.</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="flex-1 mt-4 lg:-mt-4">
              <img
                src="/lovable-uploads/226ae739-ec0c-41d9-8a02-8d3fc53060b3.png"
                alt="Lotessa Progress Tracking Interface"
                className="w-80 lg:w-96 h-auto max-h-full object-contain relative z-10 mx-auto"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
