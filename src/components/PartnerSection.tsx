const PartnerSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 space-y-4">
          <h3 className="text-lg font-medium text-muted-foreground">
            Partner With Lotessa
          </h3>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Support a Growing GLP1 Community
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Are you a health brand, medical professional, or researcher? Let's collaborate
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 lg:space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p>
            Lotessa offers a powerful platform for partnerships, whether you're looking to sponsor content, 
            support a community group, or explore collaboration opportunities. We welcome opportunities to 
            work with organizations that align with our mission of inclusive, sustainable health support.
          </p>
          
          <p>
            Lotessa is supported by the University of Bradford, who invested in the business through a fully 
            sponsored entrepreneurship programmed, reflecting their commitment to supporting health tech innovation.
          </p>
          
          <p>
            We're actively seeking mission-aligned angel investors, experienced professionals interested in 
            joining our advisory board, and strategic thinkers open to serving as non-executive directors as 
            we scale Lotessa into a leading digital health platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;