const PartnerSection = () => {
  return (
    <section id="partner" className="py-3 lg:py-5 bg-white">
      <div className="container mx-auto px-3 max-w-7xl">
        <div className="rounded-2xl px-[16px] py-6 lg:px-[24px] lg:py-8 bg-white">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-[30px] font-normal text-[#001F3F] font-sans">
              Partner With Lotessa
            </h3>
            <h2 className="text-[42px] font-bold text-[#001F3F] leading-tight font-sans">
              Support a Growing GLP1 Community
            </h2>
            <p className="text-[24px] text-foreground font-bold font-sans mx-auto whitespace-nowrap text-center">
              Are you a health brand, medical<br></br>professional, or researcher?<br></br> Let's collaborate
            </p>
          </div>

          {/* Main Content: Two-column layout */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-48">
            {/* Left Column: Text Content */}
            <div className="flex-1">
              <div className="mb-8 lg:mb-12">
                <p className="text-slate-600 text-[18px] font-sans font-normal leading-relaxed text-left">
                  Lotessa offers a powerful platform for partnerships, whether you're looking to sponsor content, 
                  support a community group, or explore collaboration opportunities. We welcome opportunities to 
                  work with organizations that align with our mission of inclusive, sustainable health support.
                </p>
              </div>

              <div className="space-y-6 lg:space-y-8">
                <p className="text-slate-600 text-[18px] font-sans font-normal leading-relaxed text-left">
                  Lotessa is supported by the University of Bradford, who invested in the business through a fully 
                  sponsored entrepreneurship programmed, reflecting their commitment to supporting health tech innovation.
                </p>
                <p className="text-slate-600 text-[18px] font-sans font-normal leading-relaxed text-left">
                  We're actively seeking mission-aligned angel investors, experienced professionals interested in 
                  joining our advisory board, and strategic thinkers open to serving as non-executive directors as 
                  we scale Lotessa into a leading digital health platform.
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="flex-1 mt-10 lg:mt-0">
              <img
                src="/lovable-uploads/226ae739-ec0c-41d9-8a02-8d3fc53060b3.png"
                alt="Lotessa Progress Tracking Interface"
                className="w-80 lg:w-96 h-auto max-h-full object-contain relative z-10"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
