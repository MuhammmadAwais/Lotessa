const PartnerSection = () => {
  return <section className="pt-6 pb-24 lg:pt-8 lg:pb-32 gradient-bg">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="rounded-2xl px-[22px] py-8 lg:px-[38px] lg:py-12 gradient-bg">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-[30px] font-normal text-[#001F3F] font-sans">
            Partner With Lotessa
          </h3>
          
          <h2 className="text-[52px] font-bold text-[#001F3F] leading-tight font-sans">
            Support a Growing GLP1 Community
          </h2>
          
          <p className="text-[28px] text-foreground font-bold font-sans mx-auto whitespace-nowrap text-center">
            Are you a health brand, medical professional, or researcher? Let's collaborate
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-8 lg:mb-12">
          <p className="text-slate-600 text-[18px] font-sans font-normal leading-relaxed text-left">
            Lotessa offers a powerful platform for partnerships, whether you're looking to sponsor content, 
            support a community group, or explore collaboration opportunities. We welcome opportunities to 
            work with organizations that align with our mission of inclusive, sustainable health support.
          </p>
        </div>

        {/* Additional Content */}
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
      </div>
    </section>;
};
export default PartnerSection;