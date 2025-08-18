import { Heart, Download, Users, Instagram, Linkedin, Facebook } from "lucide-react";

const LotessaFooter = () => {
  return (
    <footer className="py-8 mt-16" style={{ background: '#EFEEE7' }}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Logo - Separate Row */}
        <div className="flex items-center mb-6">
          <img src="/lovable-uploads/69f7fc17-c67d-4671-ade7-a76320c0adb8.png" alt="Lotessa logo" className="h-10" />
        </div>

        {/* Main Content - 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left Content */}
          <div className="flex flex-col justify-between h-full">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center">
                <img src="/lovable-uploads/e62ee210-e1fc-485b-9080-27c924643742.png" alt="Download the App" className="h-12 w-auto" />
              </button>
              
              <button className="flex items-center justify-center">
                <img src="/lovable-uploads/a97005af-398c-4b31-af1a-d153e144ef44.png" alt="Join the Lotessa Community" className="h-12 w-auto" />
              </button>
            </div>

            {/* Social Media - Aligned with Terms */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <img src="/lovable-uploads/dd5fb84e-0a6c-4d43-a075-987ba10c3bc9.png" alt="Instagram" className="w-12 h-12" />
              </a>
              <a 
                href="#" 
                className="hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <img src="/lovable-uploads/ab5cf166-f44f-433b-bcff-4658d708f98e.png" alt="LinkedIn" className="w-12 h-12" />
              </a>
              <a 
                href="#" 
                className="hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <img src="/lovable-uploads/e9b6ce86-0005-45cb-8b4a-eda5b5b26234.png" alt="Facebook" className="w-12 h-12" />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between h-full">
            <p className="leading-relaxed text-lg" style={{ color: '#001f3f' }}>
              Lotessa is <span className="font-semibold underline">not a medical device</span> and does not provide medical advice. 
              Always consult a qualified healthcare professional regarding your health condition and treatment.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <a 
                href="#" 
                className="hover:text-primary transition-colors underline font-medium text-base"
                style={{ color: '#001f3f' }}
              >
                Terms & Conditions
              </a>
              <a 
                href="#" 
                className="hover:text-primary transition-colors underline font-medium text-base"
                style={{ color: '#001f3f' }}
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LotessaFooter;