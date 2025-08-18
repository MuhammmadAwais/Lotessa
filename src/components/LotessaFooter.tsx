import { Heart, Download, Users, Instagram, Linkedin, Facebook } from "lucide-react";

const LotessaFooter = () => {
  return (
    <footer className="py-16 mt-16" style={{ background: '#EFEEE7' }}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/lovable-uploads/69f7fc17-c67d-4671-ade7-a76320c0adb8.png" alt="Lotessa logo" className="h-10" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center">
                <img src="/lovable-uploads/e62ee210-e1fc-485b-9080-27c924643742.png" alt="Download the App" className="h-12" />
              </button>
              
              <button className="flex items-center justify-center -mt-2">
                <img src="/lovable-uploads/a97005af-398c-4b31-af1a-d153e144ef44.png" alt="Join the Lotessa Community" className="h-12" />
              </button>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-health-gray rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-health-gray rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-health-gray rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Legal Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-base">
              Lotessa is <span className="font-semibold underline">not a medical device</span> and does not provide medical advice. 
              Always consult a qualified healthcare professional regarding your health condition and treatment.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a 
                href="#" 
                className="text-foreground hover:text-primary transition-colors underline font-medium"
              >
                Terms & Conditions
              </a>
              <a 
                href="#" 
                className="text-foreground hover:text-primary transition-colors underline font-medium"
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