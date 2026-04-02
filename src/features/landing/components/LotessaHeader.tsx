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
    <header className="w-full bg-white py-4">
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/lovable-uploads/69f7fc17-c67d-4671-ade7-a76320c0adb8.png" alt="Lotessa logo" className="h-8" />
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
                className="text-foreground hover:scale-105 transition-transform duration-200 font-medium cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline" 
              className="border-border hover:bg-muted transition-colors"
              onClick={() => window.open('https://app.lotessa.app/login', '_blank')}
            >
              Sign In
            </Button>
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 transition-opacity"
              onClick={() => window.open('https://app.lotessa.app/register', '_blank')}
            >
              Create Account
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="default" 
            className="lg:hidden p-2 bg-primary hover:bg-primary/90 text-primary-foreground"
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
                  className="text-foreground hover:text-accent transition-colors duration-200 font-medium cursor-pointer py-2"
                >
                  {item.name}
                </a>
              ))}
              
              {/* Auth Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    window.open('https://app.lotessa.app/login', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Sign In
                </Button>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => {
                    window.open('https://app.lotessa.app/register', '_blank');
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