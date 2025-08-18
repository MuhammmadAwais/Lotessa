import { Button } from "@/components/ui/button";

const LotessaHeader = () => {
  const navItems = [
    { name: "Download the App", href: "#download" },
    { name: "Join the Community", href: "#community" },
    { name: "Lotessa Library", href: "#library" },
    { name: "Partner With Lotessa", href: "#partner" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
                className="text-foreground hover:scale-105 transition-transform duration-200 font-medium cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="outline" 
            className="lg:hidden"
          >
            Menu
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default LotessaHeader;