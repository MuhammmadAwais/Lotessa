import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/features/telemetry/hooks/useAnalytics";
import WaitlistDialog from "@/components/WaitlistDialog";
import { Menu, X } from "lucide-react";

const LotessaHeader = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { trackInteraction } = useAnalytics();
  const navItems = [
    { name: "Download the App", href: "#download" },
    { name: "Join the Community", href: "#community" },
    { name: "Lotessa Library", href: "#library" },
    { name: "Partner With Lotessa", href: "#partner" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Special cases for external navigation
    if (href === "#download") {
      trackInteraction('click', 'download_button_header');
      setDialogOpen(true);
      return;
    }
    
    if (href === "#community") {
      trackInteraction('click', 'join_community_header');
      setDialogOpen(true);
      return;
    }
    
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="w-full bg-white py-4 shadow-sm border-b border-[#2FB4A5]/10">
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/69f7fc17-c67d-4671-ade7-a76320c0adb8.png" 
              alt="Lotessa logo" 
              className="h-8 " 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                onMouseEnter={() => {
                  if (item.href === "#download") {
                    trackInteraction('hover', 'download_button_header');
                  }
                }}
                className="font-sora font-medium text-sm text-[#000000] transition-all duration-200 cursor-pointer hover:text-[#2FB4A5] hover:scale-105 relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-[#2FB4A5] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline" 
              className="border-[#2FB4A5] text-[#2FB4A5] hover:bg-[#2FB4A5] hover:text-white transition-colors font-sora font-semibold"
              onClick={() => window.open('https://app.lotessa.app/login', '_blank')}
            >
              Sign In
            </Button>
            <Button 
              variant="default" 
              className="bg-[#2FB4A5] hover:bg-[#26968a] text-white transition-colors font-sora font-semibold"
              onClick={() => setDialogOpen(true)}
            >
              Create Account
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="default" 
            className="lg:hidden p-2 bg-[#2FB4A5] hover:bg-[#26968a] text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              {/* Navigation Links */}
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  onMouseEnter={() => {
                    if (item.href === "#download") {
                      trackInteraction('hover', 'download_button_mobile');
                    }
                  }}
                  className="font-sora font-medium text-foreground hover:text-[#2FB4A5] transition-colors duration-200 cursor-pointer py-2"
                >
                  {item.name}
                </a>
              ))}
              
              {/* Auth Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  className="w-full border-[#2FB4A5] text-[#2FB4A5] hover:bg-[#2FB4A5] hover:text-white font-sora font-semibold"
                  onClick={() => {
                    window.open('https://app.lotessa.app/login', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Sign In
                </Button>
                <Button 
                  variant="default" 
                  className="w-full bg-[#2FB4A5] hover:bg-[#26968a] font-sora font-semibold"
                  onClick={() => {
                    setDialogOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </header>
  );
};

export default LotessaHeader;