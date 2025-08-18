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
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="/lovable-uploads/87c24efa-cef2-452b-834f-7728d55c389d.png" alt="Lotessa logo" className="w-8 h-8" />
            </div>
            <span className="text-2xl font-bold text-primary">LOTESSA</span>
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