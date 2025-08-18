import { Heart, Download, Users, Instagram, Linkedin, Facebook } from "lucide-react";

const LotessaFooter = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <Heart className="text-white" size={20} fill="currentColor" />
              </div>
              <span className="text-2xl font-bold text-primary">LOTESSA</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="app-store-btn">
                <Download size={20} />
                Download the App
              </button>
              
              <button className="community-btn", onClick={() => setDialogOpen(true)}>
                <Users size={20} />
                Join the Lotessa Community
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