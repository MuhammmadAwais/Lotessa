import { Button } from "@/components/ui/button";

const LotessaHeader = () => {
  const navItems = [
    { name: "Download the App", href: "#download" },
    { name: "Join the Community", href: "#community" },
    { name: "Lotessa Library", href: "#library" },
    { name: "Partner With Lotessa", href: "#partner" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="w-full bg-white border-b border-border py-4">
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/lovable-uploads/3549901c-8a53-4e38-8ec4-db1d37773806.png" alt="Lotessa logo" className="h-8" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
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